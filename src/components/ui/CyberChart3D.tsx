"use client";

import React, { useState, useEffect, useRef } from "react";

interface ChartDataPoint {
  time: number;
  value: number;
}

interface CyberChart3DProps {
  data: ChartDataPoint[];
  width?: number;
  height?: number;
  showParticles?: boolean;
  showGlow?: boolean;
  showScanLines?: boolean;
  intensity?: "low" | "medium" | "high";
}

export function CyberChart3D({
  data,
  width = 600,
  height = 240,
  showParticles = true,
  showGlow = true,
  showScanLines = true,
  intensity = "medium",
}: CyberChart3DProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [scanLinePosition, setScanLinePosition] = useState(0);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Scan line animation
  useEffect(() => {
    if (!showScanLines) return;

    const interval = setInterval(() => {
      setScanLinePosition((prev) => (prev + 1) % 100);
    }, 100);

    return () => clearInterval(interval);
  }, [showScanLines]);

  // Particle system for bars
  useEffect(() => {
    if (!showParticles || !canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = width;
    canvas.height = height;

    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      opacity: number;
      color: string;
      barIndex: number;
    }> = [];

    // Initialize particles for each bar
    data.forEach((point, index) => {
      const barWidth = width / data.length;
      const barHeight = (point.value / 100) * height;
      const barX = index * barWidth + barWidth / 2;
      const barY = height - barHeight;

      const particleCount =
        intensity === "high" ? 8 : intensity === "medium" ? 5 : 3;

      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: barX + (Math.random() - 0.5) * barWidth * 0.8,
          y: barY + Math.random() * barHeight,
          vx: (Math.random() - 0.5) * 2,
          vy: -Math.random() * 2 - 1,
          size: Math.random() * 3 + 1,
          opacity: Math.random() * 0.6 + 0.4,
          color: `hsl(${30 + Math.random() * 60}, 100%, 70%)`,
          barIndex: index,
        });
      }
    });

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      particles.forEach((particle, index) => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Reset particle if it goes off screen
        if (particle.y < 0 || particle.x < 0 || particle.x > width) {
          const barIndex = particle.barIndex;
          const barWidth = width / data.length;
          const barHeight = (data[barIndex].value / 100) * height;
          const barX = barIndex * barWidth + barWidth / 2;
          const barY = height - barHeight;

          particle.x = barX + (Math.random() - 0.5) * barWidth * 0.8;
          particle.y = barY + Math.random() * barHeight;
          particle.vx = (Math.random() - 0.5) * 2;
          particle.vy = -Math.random() * 2 - 1;
        }

        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.globalAlpha = particle.opacity;
        ctx.fill();
      });

      requestAnimationFrame(animate);
    };

    animate();
  }, [data, width, height, showParticles, intensity]);

  const barWidth = width / data.length;
  const maxValue = Math.max(...data.map((d) => d.value));

  return (
    <div ref={containerRef} className="relative">
      {/* 3D Chart Container */}
      <div
        className="relative bg-gaming-dark rounded-lg p-4 overflow-hidden transform-style-preserve-3d"
        style={{
          width,
          height,
          transform: "perspective(1000px) rotateX(5deg)",
        }}
      >
        {/* Background grid */}
        <div className="absolute inset-0 opacity-20">
          {Array.from({ length: 5 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-full h-px bg-primary/30"
              style={{ top: `${i * 25}%` }}
            />
          ))}
          {Array.from({ length: 8 }).map((_, i) => (
            <div
              key={i}
              className="absolute h-full w-px bg-primary/30"
              style={{ left: `${i * 12.5}%` }}
            />
          ))}
        </div>

        {/* 3D Bars */}
        <div className="relative z-10 flex items-end h-full gap-1">
          {data.map((point, index) => {
            const barHeight = (point.value / maxValue) * (height * 0.8);
            const isHovered = hoveredIndex === index;

            return (
              <div
                key={index}
                className="relative flex-1 transform-style-preserve-3d transition-all duration-300"
                style={{
                  transform: isHovered
                    ? "translateZ(20px) scaleY(1.1)"
                    : "translateZ(0px) scaleY(1)",
                }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Main 3D bar */}
                <div
                  className="relative w-full rounded-t transition-all duration-300"
                  style={{
                    height: `${barHeight}px`,
                    background: isHovered
                      ? "linear-gradient(to top, #ff6600, #ff8800, #ffaa00)"
                      : "linear-gradient(to top, #ff6600/60, #ff6600)",
                    boxShadow: isHovered
                      ? "0 0 20px rgba(255, 102, 0, 0.8), inset 0 0 10px rgba(255, 255, 255, 0.2)"
                      : "0 0 10px rgba(255, 102, 0, 0.3)",
                    transform: "perspective(100px) rotateX(5deg)",
                  }}
                >
                  {/* Bar depth effect */}
                  <div
                    className="absolute inset-0 rounded-t bg-gradient-to-r from-black/20 to-transparent"
                    style={{
                      transform: "translateZ(-10px)",
                    }}
                  />

                  {/* Bar highlight */}
                  <div
                    className="absolute inset-0 rounded-t bg-gradient-to-r from-white/20 via-transparent to-transparent"
                    style={{
                      transform: "translateZ(5px)",
                    }}
                  />
                </div>

                {/* Glow effect */}
                {showGlow && isHovered && (
                  <div
                    className="absolute inset-0 rounded-t blur-sm transition-all duration-300"
                    style={{
                      height: `${barHeight}px`,
                      background:
                        "radial-gradient(ellipse at center, rgba(255, 102, 0, 0.6) 0%, transparent 70%)",
                      transform: "translateZ(10px)",
                    }}
                  />
                )}

                {/* Value label */}
                {isHovered && (
                  <div
                    className="absolute -top-8 left-1/2 transform -translate-x-1/2 text-xs text-primary font-bold bg-black/80 px-2 py-1 rounded border border-primary/40"
                    style={{
                      transform: "translateZ(30px)",
                    }}
                  >
                    {point.value}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Scan line effect */}
        {showScanLines && (
          <div
            className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/80 to-transparent animate-pulse z-20"
            style={{
              top: `${scanLinePosition}%`,
              boxShadow: "0 0 10px rgba(255, 102, 0, 0.5)",
            }}
          />
        )}

        {/* Particle canvas overlay */}
        {showParticles && (
          <canvas
            ref={canvasRef}
            className="absolute inset-0 pointer-events-none z-30"
            style={{ width, height }}
          />
        )}
      </div>

      {/* Chart info */}
      <div className="mt-4 text-center">
        <div className="text-sm text-primary/70 font-mono">
          REAL-TIME MARKET DATA
        </div>
        <div className="text-xs text-white/50 mt-1">
          {data.length} data points · Max: {maxValue}
        </div>
      </div>
    </div>
  );
}
