"use client";

import React, { useState, useEffect, useRef } from "react";
import { useGlitchEffect } from "@/hooks/useGlitchEffect";

interface BetAmount {
  min: number;
  label: string;
}

interface BetAmountGrid3DProps {
  amounts: BetAmount[];
  selectedAmounts: number[];
  onToggleAmount: (amount: number) => void;
  size?: "sm" | "md" | "lg";
  intensity?: "low" | "medium" | "high";
}

export function BetAmountGrid3D({
  amounts,
  selectedAmounts,
  onToggleAmount,
  size = "md",
  intensity = "medium",
}: BetAmountGrid3DProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [explosionParticles, setExplosionParticles] = useState<
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

  const gridRef = useRef<HTMLDivElement>(null);
  const particleIdRef = useRef(0);

  const { triggerGlitch } = useGlitchEffect({
    intensity: "medium",
    frequency: 2000,
    duration: 150,
  });

  // Size configurations
  const sizeConfig = {
    sm: { gap: "gap-1.5", buttonSize: "w-12 h-8", textSize: "text-xs" },
    md: { gap: "gap-2", buttonSize: "w-14 h-10", textSize: "text-sm" },
    lg: { gap: "gap-3", buttonSize: "w-16 h-12", textSize: "text-base" },
  };

  const config = sizeConfig[size];

  // Particle explosion effect
  const createExplosion = (x: number, y: number, color: string) => {
    const particleCount =
      intensity === "high" ? 12 : intensity === "medium" ? 8 : 5;

    for (let i = 0; i < particleCount; i++) {
      const angle = (i / particleCount) * Math.PI * 2;
      const speed = 2 + Math.random() * 3;

      setExplosionParticles((prev) => [
        ...prev,
        {
          id: particleIdRef.current++,
          x,
          y,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          life: 1,
          maxLife: 1,
          color,
        },
      ]);
    }
  };

  // Particle animation
  useEffect(() => {
    if (explosionParticles.length === 0) return;

    const interval = setInterval(() => {
      setExplosionParticles((prev) =>
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

    return () => {
      clearInterval(interval);
    };
  }, [explosionParticles]);

  // Handle amount toggle
  const handleToggleAmount = (amount: number, index: number) => {
    if (gridRef.current) {
      const button = gridRef.current.children[index] as HTMLElement;
      const rect = button.getBoundingClientRect();
      const x = rect.left + rect.width / 2;
      const y = rect.top + rect.height / 2;

      createExplosion(x, y, "#ff6600");
    }

    triggerGlitch();
    onToggleAmount(amount);
  };

  return (
    <div className="relative">
      {/* 3D Grid Container */}
      <div
        ref={gridRef}
        className={`grid grid-cols-5 ${config.gap} transform-style-preserve-3d`}
        style={{
          transform: "perspective(1000px) rotateX(5deg)",
        }}
      >
        {amounts.map((amount, index) => {
          const isSelected = selectedAmounts.includes(amount.min);
          const isHovered = hoveredIndex === index;

          return (
            <div
              key={amount.min}
              className="relative transform-style-preserve-3d"
              style={{
                transform: isHovered
                  ? "translateZ(20px) scale(1.1)"
                  : isSelected
                  ? "translateZ(10px) scale(1.05)"
                  : "translateZ(0px) scale(1)",
              }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Energy pulse effect when selected */}
              {isSelected && (
                <div className="absolute inset-0 rounded-lg animate-pulse">
                  <div
                    className="absolute inset-0 rounded-lg"
                    style={{
                      background:
                        "radial-gradient(ellipse at center, rgba(255, 102, 0, 0.4) 0%, transparent 70%)",
                    }}
                  />
                </div>
              )}

              {/* Main button with 3D depth */}
              <button
                className={`
                  relative ${config.buttonSize} ${config.textSize}
                  font-bold rounded-lg transition-all duration-300
                  transform-style-preserve-3d border-2
                  ${
                    isSelected
                      ? "bg-gradient-to-br from-primary to-primary/80 text-white border-primary/60"
                      : "bg-gradient-to-br from-gaming-dark to-gaming-dark/80 text-gray-300 border-gray-600/40 hover:border-primary/60"
                  }
                `}
                onClick={() => handleToggleAmount(amount.min, index)}
                style={{
                  boxShadow: isHovered
                    ? "0 10px 20px rgba(255, 102, 0, 0.4), inset 0 0 10px rgba(255, 255, 255, 0.1)"
                    : isSelected
                    ? "0 5px 15px rgba(255, 102, 0, 0.3), inset 0 0 8px rgba(255, 255, 255, 0.05)"
                    : "0 2px 8px rgba(0, 0, 0, 0.3)",
                }}
              >
                {/* Button depth layers */}
                <div
                  className="absolute inset-0 rounded-lg bg-gradient-to-br from-white/10 via-transparent to-black/20"
                  style={{
                    transform: "translateZ(5px)",
                  }}
                />

                <div
                  className="absolute inset-0 rounded-lg bg-gradient-to-t from-black/20 via-transparent to-white/5"
                  style={{
                    transform: "translateZ(-5px)",
                  }}
                />

                {/* Main content */}
                <div className="relative z-10 flex items-center justify-center h-full">
                  {amount.label}
                </div>

                {/* Glow effect when hovered */}
                {isHovered && (
                  <div
                    className="absolute inset-0 rounded-lg blur-sm transition-all duration-300"
                    style={{
                      background:
                        "radial-gradient(ellipse at center, rgba(255, 102, 0, 0.6) 0%, transparent 70%)",
                      transform: "translateZ(8px)",
                    }}
                  />
                )}

                {/* Scan line effect */}
                <div className="absolute inset-0 rounded-lg overflow-hidden">
                  <div
                    className="absolute w-full h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent animate-pulse"
                    style={{
                      top: "50%",
                      transform: "translateY(-50%)",
                      animationDuration: "2s",
                    }}
                  />
                </div>
              </button>

              {/* Floating energy particles when selected */}
              {isSelected && (
                <div className="absolute inset-0 rounded-lg overflow-hidden pointer-events-none">
                  {Array.from({ length: 4 }).map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-1 h-1 bg-primary/60 rounded-full animate-bounce"
                      style={{
                        left: `${20 + i * 20}%`,
                        top: `${20 + i * 20}%`,
                        animationDelay: `${i * 0.2}s`,
                        animationDuration: "1.5s",
                      }}
                    />
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Explosion particles */}
      {explosionParticles.map((particle) => (
        <div
          key={particle.id}
          className="absolute w-2 h-2 rounded-full pointer-events-none"
          style={{
            left: particle.x,
            top: particle.y,
            background: particle.color,
            opacity: particle.life,
            transform: "translate(-50%, -50%)",
            boxShadow: `0 0 10px ${particle.color}`,
          }}
        />
      ))}

      {/* Grid info */}
      <div className="mt-4 text-center">
        <div className="text-sm text-primary/70 font-mono">
          SELECTED: {selectedAmounts.length} AMOUNTS
        </div>
        <div className="text-xs text-white/50 mt-1">
          Total:{" "}
          {selectedAmounts
            .reduce((sum, amount) => sum + amount, 0)
            .toLocaleString()}
        </div>
      </div>
    </div>
  );
}
