"use client";

import React, { useEffect, useRef, useState } from "react";
import { useGlitchEffect } from "@/hooks/useGlitchEffect";

interface CyberTimer3DProps {
  date: Date;
  formatDate: (date: Date) => string;
  formatTime: (date: Date) => string;
  size?: "small" | "medium" | "large";
  intensity?: "low" | "medium" | "high";
}

export function CyberTimer3D({
  date,
  formatDate,
  formatTime,
  size = "medium",
  intensity = "medium",
}: CyberTimer3DProps) {
  const [hovered, setHovered] = useState(false);
  const [pulsePhase, setPulsePhase] = useState(0);
  const timerRef = useRef<HTMLDivElement>(null);

  const { glitchStyles, triggerGlitch } = useGlitchEffect({
    intensity,
    frequency: 5000,
    duration: 200,
  });

  // Size configurations
  const sizeConfig = {
    small: { width: 200, height: 200, fontSize: "text-lg" },
    medium: { width: 280, height: 280, fontSize: "text-2xl" },
    large: { width: 360, height: 360, fontSize: "text-3xl" },
  };

  const config = sizeConfig[size];

  // Pulse wave animation
  useEffect(() => {
    const interval = setInterval(() => {
      setPulsePhase((prev) => (prev + 1) % 360);
    }, 50);

    return () => clearInterval(interval);
  }, []);

  // Hover effects
  const handleMouseEnter = () => {
    setHovered(true);
    triggerGlitch();
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  return (
    <div
      ref={timerRef}
      className="relative flex items-center justify-center"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Main timer container with 3D depth */}
      <div
        className="relative rounded-full border-4 border-primary/60 grid place-items-center bg-gaming-dark/60 transform-style-preserve-3d transition-all duration-500"
        style={{
          width: config.width,
          height: config.height,
          transform: hovered
            ? "perspective(1000px) rotateX(5deg) rotateY(5deg) scale(1.05)"
            : "perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)",
          boxShadow: hovered
            ? "0 20px 40px rgba(255, 140, 0, 0.3), inset 0 0 60px rgba(255, 140, 0, 0.1)"
            : "0 10px 20px rgba(255, 140, 0, 0.2), inset 0 0 30px rgba(255, 140, 0, 0.05)",
        }}
      >
        {/* Multiple rotating rings */}
        {Array.from({ length: 3 }).map((_, i) => (
          <div
            key={i}
            className="absolute inset-0 rounded-full border border-primary/30 animate-spin"
            style={{
              animationDuration: `${3 + i * 2}s`,
              animationDirection: i % 2 === 0 ? "normal" : "reverse",
              transform: `translateZ(${i * 10}px) scale(${1 + i * 0.1})`,
              opacity: 0.3 - i * 0.1,
            }}
          />
        ))}

        {/* Energy bars around timer */}
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 bg-gradient-to-b from-primary/80 to-primary/20 rounded-full animate-pulse"
            style={{
              height: "20px",
              top: "-10px",
              left: "50%",
              transform: `translateX(-50%) rotate(${i * 45}deg) translateY(-${
                config.height / 2 + 20
              }px)`,
              animationDelay: `${i * 0.1}s`,
              opacity: hovered ? 1 : 0.6,
            }}
          />
        ))}

        {/* Pulse waves */}
        {Array.from({ length: 3 }).map((_, i) => (
          <div
            key={i}
            className="absolute inset-0 rounded-full border border-primary/40 animate-ping"
            style={{
              animationDelay: `${i * 0.5}s`,
              animationDuration: "2s",
              opacity: 0.3 - i * 0.1,
            }}
          />
        ))}

        {/* Holographic projection layers */}
        {Array.from({ length: 4 }).map((_, i) => (
          <div
            key={i}
            className="absolute inset-0 rounded-full border border-primary/20"
            style={{
              transform: `translateZ(${i * 15}px) scale(${1 + i * 0.05})`,
              opacity: 0.1 - i * 0.02,
              filter: "blur(0.5px)",
            }}
          />
        ))}

        {/* Main content */}
        <div
          className="text-center relative z-10 transition-all duration-300"
          style={glitchStyles}
        >
          <div className="text-sm text-muted-foreground mb-1 opacity-80">
            {formatDate(date)}
          </div>
          <div
            className={`font-extrabold text-primary font-mono ${config.fontSize} tracking-wider`}
          >
            {formatTime(date)}
          </div>
        </div>

        {/* Inner ring with scan effect */}
        <div
          className="absolute inset-2 rounded-full border-2 border-primary/30 transition-all duration-500"
          style={{
            boxShadow: hovered
              ? "inset 0 0 20px rgba(255, 140, 0, 0.3)"
              : "inset 0 0 10px rgba(255, 140, 0, 0.1)",
          }}
        />

        {/* Scan line effect */}
        <div
          className="absolute inset-0 rounded-full overflow-hidden"
          style={{
            mask: "radial-gradient(circle, transparent 30%, black 70%)",
          }}
        >
          <div
            className="absolute w-full h-px bg-gradient-to-r from-transparent via-primary/80 to-transparent animate-pulse"
            style={{
              top: `${(pulsePhase / 360) * 100}%`,
              animationDuration: "4s",
            }}
          />
        </div>

        {/* Glitch overlay */}
        {hovered && (
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-red-500/10 via-transparent to-cyan-500/10 animate-pulse opacity-50" />
        )}
      </div>

      {/* Floating particles around timer */}
      {Array.from({ length: 6 }).map((_, i) => (
        <div
          key={i}
          className="absolute w-2 h-2 bg-primary/60 rounded-full animate-bounce"
          style={{
            left: "50%",
            top: "50%",
            transform: `translate(-50%, -50%) rotate(${
              i * 60
            }deg) translateY(-${config.height / 2 + 30}px)`,
            animationDelay: `${i * 0.2}s`,
            animationDuration: "2s",
          }}
        />
      ))}

      {/* Danger warning when hovered */}
      {hovered && (
        <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 text-xs text-red-400 font-bold animate-pulse">
          ⚠️ SYSTEM ACTIVE ⚠️
        </div>
      )}
    </div>
  );
}
