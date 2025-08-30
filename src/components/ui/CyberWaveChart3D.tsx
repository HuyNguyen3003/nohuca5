"use client";

import React, { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface CyberWaveChart3DProps {
  predictionAccuracy: number;
  waveHeight: number;
  className?: string;
}

export function CyberWaveChart3D({
  predictionAccuracy,
  waveHeight,
  className = "",
}: CyberWaveChart3DProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const generateWavePoints = () => {
    const waveH = waveHeight ?? 15;
    const points = [];

    for (let i = 0; i <= 300; i += 20) {
      const x = i;
      const baseY = waveH + 20;
      const variation = Math.sin(i * 0.1) * 10 + Math.sin(i * 0.05) * 5;
      const y = baseY + variation;
      points.push(`${x},${y}`);
    }

    return points.join(" ");
  };

  const getDangerLevel = () => {
    if (predictionAccuracy > 95) return "EXTREME";
    if (predictionAccuracy > 90) return "HIGH";
    if (predictionAccuracy > 85) return "MEDIUM";
    return "LOW";
  };

  const getDangerColor = () => {
    if (predictionAccuracy > 95) return "text-red-400";
    if (predictionAccuracy > 90) return "text-orange-400";
    if (predictionAccuracy > 85) return "text-yellow-400";
    return "text-green-400";
  };

  return (
    <div
      className={`bg-gaming-dark/60 rounded-lg p-4 border border-orange-500/30 transform hover:scale-105 transition-transform duration-300 hover:shadow-2xl hover:shadow-orange-500/20 ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* 3D Depth Layers Background */}
      <div className="absolute inset-0 rounded-lg overflow-hidden">
        {/* Back layer */}
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-transparent" />

        {/* Middle layer */}
        <motion.div
          className="absolute inset-2 rounded-lg bg-gradient-to-br from-orange-500/10 to-transparent"
          animate={{
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
          }}
        />

        {/* Front layer */}
        <motion.div
          className="absolute inset-4 rounded-lg bg-gradient-to-br from-orange-500/15 to-transparent"
          animate={{
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
        />
      </div>

      {/* Particle Storm Canvas */}
      <div className="absolute inset-0 overflow-hidden rounded-lg">
        <canvas
          ref={canvasRef}
          width={300}
          height={100}
          className="w-full h-full opacity-60"
        />
      </div>

      {/* 3D Wave Chart */}
      <div className="h-40 relative overflow-hidden">
        <svg viewBox="0 0 300 100" className="w-full h-full relative z-10">
          {/* Multiple wave planes for 3D effect */}
          {/* Back wave plane */}
          <polyline
            fill="rgba(255,140,0,0.1)"
            stroke="none"
            points={`${generateWavePoints()} 300,100 0,100`}
            transform="translate(2,2)"
          />

          {/* Middle wave plane */}
          <polyline
            fill="rgba(255,140,0,0.2)"
            stroke="none"
            points={`${generateWavePoints()} 300,100 0,100`}
            transform="translate(1,1)"
          />

          {/* Front wave plane */}
          <polyline
            fill="rgba(255,140,0,0.3)"
            stroke="none"
            points={`${generateWavePoints()} 300,100 0,100`}
          />

          {/* Wave outlines with different depths */}
          <polyline
            fill="none"
            stroke="rgba(255,140,0,0.6)"
            strokeWidth="1"
            points={generateWavePoints()}
            transform="translate(2,2)"
          />

          <polyline
            fill="none"
            stroke="rgba(255,140,0,0.8)"
            strokeWidth="1.5"
            points={generateWavePoints()}
            transform="translate(1,1)"
          />

          <polyline
            fill="none"
            stroke="rgba(255,140,0,0.9)"
            strokeWidth="2"
            points={generateWavePoints()}
          />

          {/* Lightning Strikes on Wave Peaks */}
          {predictionAccuracy > 90 && (
            <>
              {Array.from({ length: 3 }).map((_, i) => (
                <motion.line
                  key={i}
                  x1={50 + i * 80}
                  y1="0"
                  x2={50 + i * 80}
                  y2="50"
                  stroke="rgba(255, 255, 0, 0.8)"
                  strokeWidth="1"
                  filter="drop-shadow(0 0 4px rgba(255, 255, 0, 0.6))"
                  animate={{
                    opacity: [0, 1, 0],
                  }}
                  transition={{
                    duration: 0.3,
                    repeat: Infinity,
                    delay: i * 0.5,
                  }}
                />
              ))}
            </>
          )}

          {/* Holographic Market Indicators */}
          <AnimatePresence>
            {isHovered && (
              <>
                {Array.from({ length: 5 }).map((_, i) => (
                  <motion.circle
                    key={i}
                    cx={30 + i * 60}
                    cy={20 + Math.sin(i) * 10}
                    r="3"
                    fill="rgba(0, 255, 255, 0.8)"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0, opacity: 0 }}
                    transition={{ delay: i * 0.1 }}
                  />
                ))}
              </>
            )}
          </AnimatePresence>

          {/* Danger Zone Highlighting */}
          {predictionAccuracy > 90 && (
            <motion.rect
              x="0"
              y="0"
              width="300"
              height="100"
              fill="none"
              stroke="rgba(255, 0, 0, 0.3)"
              strokeWidth="2"
              strokeDasharray="5,5"
              animate={{
                strokeDashoffset: [0, 10],
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          )}

          {/* Wave Collision Effects */}
          <AnimatePresence>
            {isHovered && (
              <motion.circle
                cx="150"
                cy="50"
                r="20"
                fill="none"
                stroke="rgba(255, 140, 0, 0.6)"
                strokeWidth="2"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 2, opacity: 0 }}
                exit={{ scale: 0, opacity: 0 }}
                transition={{ duration: 1 }}
              />
            )}
          </AnimatePresence>

          {/* Real-time Data Streams */}
          <motion.line
            x1="0"
            y1="80"
            x2="300"
            y2="80"
            stroke="rgba(0, 255, 255, 0.4)"
            strokeWidth="1"
            strokeDasharray="5,5"
            animate={{
              strokeDashoffset: [0, 10],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        </svg>
      </div>

      {/* Chart Title with Danger Indicators */}
      <div className="flex items-center justify-between mt-2">
        <motion.div
          className={`text-xs font-semibold ${getDangerColor()}`}
          animate={{
            textShadow: isHovered
              ? `0 0 8px ${getDangerColor()}`
              : "0 0 2px rgba(255, 140, 0, 0.3)",
          }}
        >
          Crash Prediction Wave
        </motion.div>

        {predictionAccuracy > 90 && (
          <motion.div
            className="text-xs text-red-400 font-bold"
            animate={{
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 1,
              repeat: Infinity,
            }}
          >
            {getDangerLevel()} RISK
          </motion.div>
        )}
      </div>

      {/* Energy Field Borders */}
      <div className="absolute inset-0 rounded-lg pointer-events-none">
        <motion.div
          className="absolute inset-0 rounded-lg border border-orange-500/30"
          animate={{
            boxShadow: isHovered
              ? "0 0 20px rgba(255, 140, 0, 0.3)"
              : "0 0 5px rgba(255, 140, 0, 0.1)",
          }}
        />
      </div>

      {/* Particle Storm Effects */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            className="absolute inset-0 rounded-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {Array.from({ length: 12 }).map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-orange-400 rounded-full"
                initial={{
                  x: Math.random() * 300,
                  y: Math.random() * 160,
                  scale: 0,
                }}
                animate={{
                  x: Math.random() * 300,
                  y: Math.random() * 160,
                  scale: [0, 1, 0],
                  opacity: [1, 0.8, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
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
