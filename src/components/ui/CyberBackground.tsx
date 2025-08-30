"use client";

import React, { useEffect, useRef } from "react";

interface CyberBackgroundProps {
  children?: React.ReactNode;
  intensity?: "low" | "medium" | "high";
  showParticles?: boolean;
  showScanLines?: boolean;
  showGrid?: boolean;
  showLightning?: boolean;
}

export function CyberBackground({
  children,
  intensity = "medium",
  showParticles = true,
  showScanLines = true,
  showGrid = true,
  showLightning = true,
}: CyberBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const lightningRef = useRef<HTMLDivElement>(null);

  // Particle system
  useEffect(() => {
    if (!showParticles || !canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      opacity: number;
      color: string;
    }> = [];

    // Initialize particles
    const particleCount =
      intensity === "high" ? 150 : intensity === "medium" ? 100 : 50;

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 2 + 1,
        opacity: Math.random() * 0.5 + 0.3,
        color: `hsl(${30 + Math.random() * 60}, 100%, 70%)`,
      });
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle) => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Wrap around edges
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;

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

    // Handle resize
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [showParticles, intensity]);

  // Lightning effects
  useEffect(() => {
    if (!showLightning || !lightningRef.current) return;

    const createLightning = () => {
      const lightning = document.createElement("div");
      lightning.className =
        "absolute w-1 bg-gradient-to-b from-orange-400 via-yellow-300 to-orange-600 opacity-80";
      lightning.style.left = Math.random() * 100 + "%";
      lightning.style.height = Math.random() * 200 + 100 + "px";
      lightning.style.top = "-200px";
      lightning.style.filter = "blur(1px)";
      lightning.style.boxShadow = "0 0 20px rgba(255, 140, 0, 0.8)";

      lightningRef.current?.appendChild(lightning);

      // Animate lightning
      const animation = lightning.animate(
        [
          { transform: "translateY(0px)", opacity: 0.8 },
          { transform: "translateY(100vh)", opacity: 0 },
        ],
        {
          duration: 1000 + Math.random() * 1000,
          easing: "ease-out",
        }
      );

      animation.onfinish = () => {
        lightning.remove();
      };
    };

    // Create lightning at random intervals
    const interval = setInterval(createLightning, 3000 + Math.random() * 5000);

    return () => clearInterval(interval);
  }, [showLightning]);

  return (
    <div className="relative w-full h-full overflow-hidden">
      {/* Base gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-900 via-black to-orange-800" />

      {/* Animated gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-orange-500/0 via-orange-500/15 to-orange-500/0 animate-pulse" />

      {/* Vertical gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-orange-600/20 via-transparent to-black/30" />

      {/* Grid pattern */}
      {showGrid && (
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,140,0,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,140,0,0.4) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />
      )}

      {/* Holographic grid with 3D perspective */}
      {showGrid && (
        <div className="absolute inset-0 perspective-1000">
          <div className="absolute inset-0 transform-style-preserve-3d">
            {Array.from({ length: 5 }).map((_, i) => (
              <div
                key={i}
                className="absolute inset-0 border border-orange-500/20"
                style={{
                  transform: `translateZ(${i * 20}px) scale(${1 + i * 0.1})`,
                  opacity: 0.1 - i * 0.02,
                }}
              />
            ))}
          </div>
        </div>
      )}

      {/* Scan lines */}
      {showScanLines && (
        <div className="absolute inset-0 overflow-hidden">
          {Array.from({ length: 20 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-full h-px bg-gradient-to-r from-transparent via-orange-400/60 to-transparent animate-pulse"
              style={{
                top: `${(i * 5) % 100}%`,
                animationDelay: `${i * 0.1}s`,
                animationDuration: "2s",
              }}
            />
          ))}
        </div>
      )}

      {/* Particle canvas */}
      {showParticles && (
        <canvas
          ref={canvasRef}
          className="absolute inset-0 pointer-events-none"
          style={{ zIndex: 1 }}
        />
      )}

      {/* Lightning container */}
      {showLightning && (
        <div
          ref={lightningRef}
          className="absolute inset-0 pointer-events-none"
          style={{ zIndex: 2 }}
        />
      )}

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}
