"use client";

import React, { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface HolographicAI3DProps {
  riskScore: number;
  riskLevel: "low" | "medium" | "high";
  aiVersion: string;
  latencyMs: number;
  generatedAt: string;
  className?: string;
}

export function HolographicAI3D({
  riskScore,
  riskLevel,
  aiVersion,
  latencyMs,
  generatedAt,
  className = "",
}: HolographicAI3DProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const getRiskColor = () => {
    switch (riskLevel) {
      case "high":
        return "text-red-400";
      case "medium":
        return "text-yellow-400";
      default:
        return "text-green-400";
    }
  };

  const getRiskGlow = () => {
    switch (riskLevel) {
      case "high":
        return "shadow-red-500/50";
      case "medium":
        return "shadow-yellow-500/50";
      default:
        return "shadow-green-500/50";
    }
  };

  return (
    <div
      className={`relative bg-gaming-dark/60 rounded-lg h-80 grid place-items-center border border-primary/20 transform hover:scale-105 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20 ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Matrix Rain Background */}
      <div className="absolute inset-0 overflow-hidden rounded-lg">
        <canvas
          ref={canvasRef}
          width={200}
          height={200}
          className="w-full h-full opacity-30"
        />
      </div>

      {/* Scanning Laser Beams */}
      <div className="absolute inset-0 overflow-hidden rounded-lg">
        <motion.div
          className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent"
          animate={{
            y: [0, 320, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-transparent via-primary to-transparent"
          animate={{
            x: [0, 400, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>

      {/* Neural Network Connections */}
      <div className="absolute inset-0">
        <svg className="w-full h-full" viewBox="0 0 400 320">
          {Array.from({ length: 8 }).map((_, i) => (
            <motion.line
              key={i}
              x1={50 + i * 40}
              y1="50"
              x2={100 + i * 30}
              y2="270"
              stroke="rgba(255, 140, 0, 0.3)"
              strokeWidth="1"
              animate={{
                strokeDasharray: [0, 100],
                strokeDashoffset: [0, -100],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.2,
              }}
            />
          ))}
        </svg>
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center text-primary/70">
        <motion.div
          className="text-xs tracking-widest mb-2"
          animate={{
            textShadow: isHovered
              ? "0 0 10px rgba(255, 140, 0, 0.8)"
              : "0 0 5px rgba(255, 140, 0, 0.3)",
          }}
        >
          {aiVersion.split(" ")[0]} RISK ASSESSMENT
        </motion.div>

        {/* 3D AI Avatar Container */}
        <motion.div
          className="relative w-40 h-56 border border-primary/30 rounded-md grid place-items-center transform hover:rotate-3 transition-transform duration-300"
          animate={{
            boxShadow: isHovered
              ? "0 0 30px rgba(255, 140, 0, 0.5)"
              : "0 0 10px rgba(255, 140, 0, 0.2)",
          }}
        >
          {/* Holographic AI Avatar */}
          <div className="relative">
            {/* AI Head */}
            <motion.div
              className="w-16 h-16 rounded-full border-2 border-primary/60 bg-gradient-to-br from-primary/20 to-transparent mx-auto mb-4"
              animate={{
                scale: [1, 1.05, 1],
                rotateY: [0, 180, 360],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              <div className="w-full h-full rounded-full bg-gradient-to-br from-primary/40 to-transparent flex items-center justify-center">
                <div className="text-2xl">🤖</div>
              </div>
            </motion.div>

            {/* Risk Score Display */}
            <motion.div
              className={`text-3xl font-black ${getRiskColor()} drop-shadow-lg`}
              animate={{
                scale: [1, 1.1, 1],
                textShadow: isHovered
                  ? `0 0 20px ${getRiskColor()}`
                  : "0 0 5px rgba(255, 140, 0, 0.3)",
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
            >
              {riskScore}%
            </motion.div>

            {/* Risk Level Indicator */}
            <motion.div
              className={`text-xs text-white/70 mt-1 px-2 py-1 rounded border ${getRiskGlow()}`}
              animate={{
                backgroundColor: isHovered
                  ? "rgba(255, 140, 0, 0.1)"
                  : "rgba(0, 0, 0, 0.3)",
              }}
            >
              {riskLevel.toUpperCase()}
            </motion.div>

            {/* AI Version Info */}
            <div className="text-[10px] text-white/60 mt-2">
              {aiVersion} · {latencyMs} ms
            </div>

            {/* Timestamp */}
            <div className="text-[10px] text-white/50 mt-1">
              {new Date(generatedAt).toLocaleTimeString()}
            </div>
          </div>

          {/* Pulsing Danger Zones */}
          {riskLevel === "high" && (
            <motion.div
              className="absolute inset-0 rounded-md border-2 border-red-500/50"
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.5, 0.8, 0.5],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
              }}
            />
          )}
        </motion.div>

        {/* Voice Synthesis Indicators */}
        <motion.div
          className="flex justify-center gap-1 mt-4"
          animate={{
            scale: isHovered ? 1.1 : 1,
          }}
        >
          {Array.from({ length: 5 }).map((_, i) => (
            <motion.div
              key={i}
              className="w-1 h-4 bg-primary/60 rounded"
              animate={{
                height: [4, 16, 4],
              }}
              transition={{
                duration: 0.5,
                repeat: Infinity,
                delay: i * 0.1,
              }}
            />
          ))}
        </motion.div>
      </div>

      {/* Cyber Glitch Effects */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 100 }}
            exit={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.3 }}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
