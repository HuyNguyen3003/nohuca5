"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface PlasmaEnergyFieldProps {
  accuracy: number;
  size?: "sm" | "md" | "lg";
  className?: string;
}

export function PlasmaEnergyField({
  accuracy,
  size = "md",
  className = "",
}: PlasmaEnergyFieldProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [energyLevel, setEnergyLevel] = useState(accuracy);

  const sizeClasses = {
    sm: "w-24 h-24",
    md: "w-32 h-32",
    lg: "w-40 h-40",
  };

  // Plasma animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let time = 0;
    const animate = () => {
      time += 0.02;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Create plasma effect
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      const radius = Math.min(canvas.width, canvas.height) / 2;

      // Draw plasma energy field
      for (let i = 0; i < 360; i += 2) {
        const angle = (i * Math.PI) / 180;
        const x = centerX + Math.cos(angle) * radius;
        const y = centerY + Math.sin(angle) * radius;

        const plasmaValue = Math.sin(time + i * 0.1) * 0.5 + 0.5;
        const energyHeight = (energyLevel / 100) * radius * 2;
        const currentHeight = plasmaValue * energyHeight;

        const gradient = ctx.createLinearGradient(
          0,
          centerY + radius,
          0,
          centerY + radius - currentHeight
        );
        gradient.addColorStop(0, `rgba(255, 140, 0, ${plasmaValue * 0.8})`);
        gradient.addColorStop(0.5, `rgba(255, 200, 0, ${plasmaValue * 0.6})`);
        gradient.addColorStop(1, `rgba(255, 255, 0, ${plasmaValue * 0.4})`);

        ctx.fillStyle = gradient;
        ctx.fillRect(x - 1, centerY + radius - currentHeight, 2, currentHeight);
      }

      // Add energy particles
      for (let i = 0; i < 20; i++) {
        const angle = (i * 18 + time * 50) * (Math.PI / 180);
        const distance = radius * (energyLevel / 100);
        const x = centerX + Math.cos(angle) * distance;
        const y = centerY + Math.sin(angle) * distance;

        ctx.fillStyle = `rgba(255, 255, 0, ${
          0.8 + 0.2 * Math.sin(time * 3 + i)
        })`;
        ctx.beginPath();
        ctx.arc(x, y, 2, 0, Math.PI * 2);
        ctx.fill();
      }

      requestAnimationFrame(animate);
    };

    animate();
  }, [energyLevel]);

  // Update energy level when accuracy changes
  useEffect(() => {
    setEnergyLevel(accuracy);
  }, [accuracy]);

  const getDangerLevel = () => {
    if (accuracy > 95) return "EXTREME";
    if (accuracy > 90) return "HIGH";
    if (accuracy > 85) return "MEDIUM";
    return "LOW";
  };

  const getDangerColor = () => {
    if (accuracy > 95) return "text-red-400";
    if (accuracy > 90) return "text-orange-400";
    if (accuracy > 85) return "text-yellow-400";
    return "text-green-400";
  };

  return (
    <div
      className={`relative ${sizeClasses[size]} rounded-full border-4 border-primary/60 grid place-items-center bg-gaming-dark/60 transform hover:scale-110 hover:rotate-6 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/30 ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Plasma Energy Field Canvas */}
      <canvas
        ref={canvasRef}
        width={128}
        height={128}
        className="absolute inset-0 w-full h-full rounded-full"
      />

      {/* Rotating Energy Rings */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute inset-2 rounded-full border-2 border-primary/40"
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute inset-4 rounded-full border border-primary/30"
          animate={{
            rotate: [360, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute inset-6 rounded-full border border-primary/20"
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>

      {/* Lightning Bolts for High Accuracy */}
      {accuracy > 90 && (
        <div className="absolute inset-0">
          {Array.from({ length: 4 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute inset-0"
              animate={{
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 0.5,
                repeat: Infinity,
                delay: i * 0.2,
              }}
            >
              <svg className="w-full h-full" viewBox="0 0 128 128">
                <path
                  d={`M64,0 L${40 + i * 8},64 L${88 - i * 8},64 L64,128`}
                  fill="none"
                  stroke="rgba(255, 255, 0, 0.8)"
                  strokeWidth="2"
                  filter="drop-shadow(0 0 4px rgba(255, 255, 0, 0.6))"
                />
              </svg>
            </motion.div>
          ))}
        </div>
      )}

      {/* Holographic Projections */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            className="absolute inset-0 rounded-full"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1.2 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3 }}
          >
            <div className="w-full h-full rounded-full border border-primary/30 bg-gradient-to-br from-primary/10 to-transparent" />
            <div className="absolute inset-2 rounded-full border border-primary/20 bg-gradient-to-br from-primary/5 to-transparent" />
            <div className="absolute inset-4 rounded-full border border-primary/10 bg-gradient-to-br from-primary/2 to-transparent" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Energy Pulse Waves */}
      <div className="absolute inset-0">
        {Array.from({ length: 3 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute inset-0 rounded-full border border-primary/30"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.8, 0, 0.8],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.7,
            }}
          />
        ))}
      </div>

      {/* Danger Warning Indicators */}
      {accuracy > 90 && (
        <div className="absolute -top-2 -right-2">
          <motion.div
            className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold"
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 1,
              repeat: Infinity,
            }}
          >
            ⚠️
          </motion.div>
        </div>
      )}

      {/* Main Accuracy Display */}
      <div className="relative z-10 text-center">
        <motion.div
          className={`text-3xl font-bold ${getDangerColor()} drop-shadow-lg`}
          animate={{
            scale: [1, 1.05, 1],
            textShadow: isHovered
              ? `0 0 20px ${getDangerColor()}`
              : "0 0 5px rgba(255, 140, 0, 0.3)",
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
        >
          {accuracy}%
        </motion.div>

        <motion.div
          className="text-xs text-white/70 mt-1"
          animate={{
            opacity: isHovered ? 1 : 0.7,
          }}
        >
          {getDangerLevel()} RISK
        </motion.div>
      </div>

      {/* Particle Explosion Effects on Hover */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {Array.from({ length: 8 }).map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-primary rounded-full"
                initial={{
                  x: 64,
                  y: 64,
                  scale: 0,
                }}
                animate={{
                  x: 64 + Math.cos((i * 45 * Math.PI) / 180) * 60,
                  y: 64 + Math.sin((i * 45 * Math.PI) / 180) * 60,
                  scale: [0, 1, 0],
                  opacity: [1, 0.8, 0],
                }}
                transition={{
                  duration: 0.8,
                  delay: i * 0.1,
                }}
              />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
