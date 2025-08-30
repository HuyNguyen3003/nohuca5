"use client";

import React, { useState, useEffect, useRef } from "react";
import { useGlitchEffect } from "@/hooks/useGlitchEffect";

interface HolographicButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  selected?: boolean;
  variant?: "ai" | "neural" | "quantum" | "cognitive";
  size?: "sm" | "md" | "lg";
  className?: string;
}

export function HolographicButton({
  children,
  onClick,
  selected = false,
  variant = "ai",
  size = "md",
  className = "",
}: HolographicButtonProps) {
  const [hovered, setHovered] = useState(false);
  const [particles, setParticles] = useState<
    Array<{
      id: number;
      x: number;
      y: number;
      vx: number;
      vy: number;
      life: number;
      maxLife: number;
      color: string;
    }>
  >([]);

  const buttonRef = useRef<HTMLButtonElement>(null);
  const particleIdRef = useRef(0);

  const { glitchStyles, triggerGlitch } = useGlitchEffect({
    intensity: selected ? "high" : "medium",
    frequency: 3000,
    duration: 200,
  });

  // Variant configurations
  const variantConfig = {
    ai: {
      primary: "#00ffff",
      secondary: "#0080ff",
      glow: "rgba(0, 255, 255, 0.6)",
      border: "rgba(0, 255, 255, 0.8)",
    },
    neural: {
      primary: "#ff00ff",
      secondary: "#8000ff",
      glow: "rgba(255, 0, 255, 0.6)",
      border: "rgba(255, 0, 255, 0.8)",
    },
    quantum: {
      primary: "#ffff00",
      secondary: "#ff8000",
      glow: "rgba(255, 255, 0, 0.6)",
      border: "rgba(255, 255, 0, 0.8)",
    },
    cognitive: {
      primary: "#00ff80",
      secondary: "#00ff00",
      glow: "rgba(0, 255, 128, 0.6)",
      border: "rgba(0, 255, 128, 0.8)",
    },
  };

  const sizeConfig = {
    sm: { padding: "px-3 py-1.5", text: "text-xs", minWidth: "min-w-[100px]" },
    md: { padding: "px-4 py-2", text: "text-sm", minWidth: "min-w-[120px]" },
    lg: { padding: "px-6 py-3", text: "text-base", minWidth: "min-w-[160px]" },
  };

  const config = variantConfig[variant];
  const sizeStyle = sizeConfig[size];

  // Particle trail system
  useEffect(() => {
    if (!hovered) return;

    const interval = setInterval(() => {
      if (buttonRef.current) {
        const rect = buttonRef.current.getBoundingClientRect();
        const x = Math.random() * rect.width;
        const y = Math.random() * rect.height;

        setParticles((prev) => [
          ...prev,
          {
            id: particleIdRef.current++,
            x,
            y,
            vx: (Math.random() - 0.5) * 3,
            vy: (Math.random() - 0.5) * 3,
            life: 1,
            maxLife: 1,
            color: config.primary,
          },
        ]);
      }
    }, 80);

    return () => clearInterval(interval);
  }, [hovered, config.primary]);

  // Particle animation
  useEffect(() => {
    if (particles.length === 0) return;

    const interval = setInterval(() => {
      setParticles((prev) =>
        prev
          .map((particle) => ({
            ...particle,
            x: particle.x + particle.vx,
            y: particle.y + particle.vy,
            life: particle.life - 0.03,
          }))
          .filter((particle) => particle.life > 0)
      );
    }, 16);

    return () => clearInterval(interval);
  }, [particles]);

  // Handle interactions
  const handleMouseEnter = () => {
    setHovered(true);
    triggerGlitch();
  };

  const handleMouseLeave = () => {
    setHovered(false);
    setParticles([]);
  };

  const handleClick = () => {
    triggerGlitch();
    onClick?.();
  };

  return (
    <div className="relative">
      {/* Holographic projection layers */}
      <div className="absolute inset-0 rounded-lg overflow-hidden">
        {Array.from({ length: 3 }).map((_, i) => (
          <div
            key={i}
            className={`absolute inset-0 rounded-lg border transition-all duration-500 ${
              hovered ? "opacity-60" : "opacity-20"
            }`}
            style={{
              borderColor: config.border,
              transform: `translateZ(${i * 15}px) scale(${1 + i * 0.05})`,
              filter: "blur(1px)",
            }}
          />
        ))}
      </div>

      {/* Main button with holographic effect */}
      <button
        ref={buttonRef}
        className={`
          relative ${sizeStyle.padding} ${sizeStyle.text} ${sizeStyle.minWidth}
          font-bold uppercase tracking-wider rounded-lg
          transform-style-preserve-3d transition-all duration-500
          border-2 border-transparent backdrop-blur-sm
          ${selected ? "text-white" : "text-gray-300"}
          ${className}
        `}
        style={{
          transform: hovered
            ? "perspective(1000px) rotateX(10deg) rotateY(10deg) scale(1.1)"
            : selected
            ? "perspective(1000px) rotateX(2deg) rotateY(2deg) scale(1.02)"
            : "perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)",
          background: selected
            ? `linear-gradient(135deg, ${config.primary}, ${config.secondary})`
            : "linear-gradient(135deg, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.6))",
          boxShadow: hovered
            ? `0 20px 40px ${config.glow}, inset 0 0 20px rgba(255, 255, 255, 0.2)`
            : selected
            ? `0 10px 20px ${config.glow}, inset 0 0 15px rgba(255, 255, 255, 0.1)`
            : "0 5px 15px rgba(0, 0, 0, 0.3)",
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick}
      >
        {/* Holographic depth layers */}
        <div
          className="absolute inset-0 rounded-lg bg-gradient-to-br from-white/10 via-transparent to-black/20"
          style={{
            transform: "translateZ(10px)",
          }}
        />

        <div
          className="absolute inset-0 rounded-lg bg-gradient-to-t from-black/20 via-transparent to-white/5"
          style={{
            transform: "translateZ(-10px)",
          }}
        />

        {/* Main content with glitch effect */}
        <div
          className="relative z-20 transition-all duration-300"
          style={glitchStyles}
        >
          {children}
        </div>

        {/* Holographic border */}
        <div
          className={`absolute inset-0 rounded-lg border-2 transition-all duration-500 ${
            hovered || selected ? "opacity-100" : "opacity-0"
          }`}
          style={{
            borderColor: config.border,
            transform: "translateZ(15px)",
            boxShadow:
              hovered || selected ? `0 0 20px ${config.border}` : "none",
          }}
        />

        {/* Scan lines effect */}
        <div className="absolute inset-0 rounded-lg overflow-hidden">
          {Array.from({ length: 2 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-full h-px bg-gradient-to-r from-transparent via-white/40 to-transparent animate-pulse"
              style={{
                top: `${(i * 50) % 100}%`,
                animationDelay: `${i * 0.5}s`,
                animationDuration: "3s",
              }}
            />
          ))}
        </div>

        {/* Holographic noise effect */}
        <div className="absolute inset-0 rounded-lg opacity-20">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 50% 50%, ${config.primary} 1px, transparent 1px)`,
              backgroundSize: "4px 4px",
              animation: hovered ? "pulse 2s infinite" : "none",
            }}
          />
        </div>
      </button>

      {/* Floating particles */}
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute w-1.5 h-1.5 rounded-full pointer-events-none"
          style={{
            left: particle.x,
            top: particle.y,
            background: particle.color,
            opacity: particle.life,
            transform: "translate(-50%, -50%)",
            boxShadow: `0 0 8px ${particle.color}`,
          }}
        />
      ))}

      {/* Energy field when selected */}
      {selected && (
        <div className="absolute inset-0 rounded-lg overflow-hidden pointer-events-none">
          <div
            className="absolute inset-0 rounded-lg animate-pulse"
            style={{
              background: `radial-gradient(ellipse at center, ${config.glow} 0%, transparent 70%)`,
              opacity: 0.3,
            }}
          />
        </div>
      )}

      {/* Holographic status indicator */}
      {(hovered || selected) && (
        <div
          className="absolute -top-6 left-1/2 transform -translate-x-1/2 text-xs font-bold animate-pulse"
          style={{ color: config.primary }}
        >
          {selected ? "● ACTIVE" : "○ STANDBY"}
        </div>
      )}
    </div>
  );
}
