"use client";

import React, { useState, useEffect, useRef } from "react";
import { useGlitchEffect } from "@/hooks/useGlitchEffect";

interface DangerButton3DProps {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  variant?: "danger" | "warning" | "critical";
  size?: "sm" | "md" | "lg";
  className?: string;
}

export function DangerButton3D({
  children,
  onClick,
  disabled = false,
  variant = "danger",
  size = "md",
  className = "",
}: DangerButton3DProps) {
  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [particles, setParticles] = useState<
    Array<{
      id: number;
      x: number;
      y: number;
      vx: number;
      vy: number;
      life: number;
      maxLife: number;
    }>
  >([]);

  const buttonRef = useRef<HTMLButtonElement>(null);
  const particleIdRef = useRef(0);

  const { glitchStyles, triggerGlitch } = useGlitchEffect({
    intensity: "high",
    frequency: 1000,
    duration: 150,
  });

  // Variant configurations
  const variantConfig = {
    danger: {
      primary: "#ff6600",
      secondary: "#ff4400",
      glow: "rgba(255, 102, 0, 0.6)",
      border: "rgba(255, 102, 0, 0.8)",
    },
    warning: {
      primary: "#ffaa00",
      secondary: "#ff8800",
      glow: "rgba(255, 170, 0, 0.6)",
      border: "rgba(255, 170, 0, 0.8)",
    },
    critical: {
      primary: "#ff0000",
      secondary: "#cc0000",
      glow: "rgba(255, 0, 0, 0.6)",
      border: "rgba(255, 0, 0, 0.8)",
    },
  };

  const sizeConfig = {
    sm: { padding: "px-4 py-2", text: "text-sm", minWidth: "min-w-[120px]" },
    md: { padding: "px-6 py-3", text: "text-base", minWidth: "min-w-[160px]" },
    lg: { padding: "px-8 py-4", text: "text-lg", minWidth: "min-w-[200px]" },
  };

  const config = variantConfig[variant];
  const sizeStyle = sizeConfig[size];

  // Particle system
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
            vx: (Math.random() - 0.5) * 4,
            vy: (Math.random() - 0.5) * 4,
            life: 1,
            maxLife: 1,
          },
        ]);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [hovered]);

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
            life: particle.life - 0.02,
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
    if (disabled) return;

    setClicked(true);
    triggerGlitch();

    // Reset click state
    setTimeout(() => setClicked(false), 200);

    onClick?.();
  };

  return (
    <div className="relative">
      {/* Energy field background */}
      <div
        className={`absolute inset-0 rounded-lg blur-md transition-all duration-500 ${
          hovered ? "opacity-80 scale-110" : "opacity-0 scale-100"
        }`}
        style={{
          background: `radial-gradient(ellipse at center, ${config.glow} 0%, transparent 70%)`,
        }}
      />

      {/* Main button with 3D depth */}
      <button
        ref={buttonRef}
        className={`
          relative ${sizeStyle.padding} ${sizeStyle.text} ${sizeStyle.minWidth}
          font-bold uppercase tracking-wider rounded-lg
          transform-style-preserve-3d transition-all duration-300
          border-2 border-transparent
          ${disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}
          ${className}
        `}
        style={{
          transform: hovered
            ? "perspective(1000px) rotateX(5deg) rotateY(5deg) scale(1.05)"
            : clicked
            ? "perspective(1000px) rotateX(10deg) scale(0.95)"
            : "perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)",
          background: `linear-gradient(135deg, ${config.primary}, ${config.secondary})`,
          boxShadow: hovered
            ? `0 20px 40px ${config.glow}, inset 0 0 20px rgba(255, 255, 255, 0.2)`
            : clicked
            ? `0 5px 15px ${config.glow}, inset 0 0 10px rgba(0, 0, 0, 0.3)`
            : `0 10px 20px ${config.glow}, inset 0 0 10px rgba(255, 255, 255, 0.1)`,
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick}
        disabled={disabled}
      >
        {/* Button depth layers */}
        <div
          className="absolute inset-0 rounded-lg bg-gradient-to-br from-white/20 via-transparent to-black/20"
          style={{
            transform: "translateZ(5px)",
          }}
        />

        <div
          className="absolute inset-0 rounded-lg bg-gradient-to-t from-black/30 via-transparent to-white/10"
          style={{
            transform: "translateZ(-5px)",
          }}
        />

        {/* Main content with glitch effect */}
        <div
          className="relative z-10 transition-all duration-300"
          style={glitchStyles}
        >
          {children}
        </div>

        {/* Danger warning border */}
        <div
          className={`absolute inset-0 rounded-lg border-2 transition-all duration-300 ${
            hovered ? "opacity-100" : "opacity-0"
          }`}
          style={{
            borderColor: config.border,
            transform: "translateZ(10px)",
            boxShadow: hovered ? `0 0 20px ${config.border}` : "none",
          }}
        />

        {/* Scan lines effect */}
        <div className="absolute inset-0 rounded-lg overflow-hidden">
          {Array.from({ length: 3 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-full h-px bg-gradient-to-r from-transparent via-white/60 to-transparent animate-pulse"
              style={{
                top: `${(i * 33) % 100}%`,
                animationDelay: `${i * 0.3}s`,
                animationDuration: "2s",
              }}
            />
          ))}
        </div>
      </button>

      {/* Floating particles */}
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute w-2 h-2 rounded-full pointer-events-none"
          style={{
            left: particle.x,
            top: particle.y,
            background: config.primary,
            opacity: particle.life,
            transform: "translate(-50%, -50%)",
            boxShadow: `0 0 10px ${config.primary}`,
          }}
        />
      ))}

      {/* Danger warning text */}
      {hovered && (
        <div
          className="absolute -top-8 left-1/2 transform -translate-x-1/2 text-xs font-bold animate-pulse"
          style={{ color: config.primary }}
        >
          ⚠️ {variant.toUpperCase()} MODE ⚠️
        </div>
      )}

      {/* Energy field particles */}
      {hovered && (
        <div className="absolute inset-0 rounded-lg overflow-hidden pointer-events-none">
          {Array.from({ length: 8 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white/60 rounded-full animate-ping"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${i * 0.2}s`,
                animationDuration: "1.5s",
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
}
