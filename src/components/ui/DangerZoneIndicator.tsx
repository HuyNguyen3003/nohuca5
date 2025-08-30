"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface DangerZoneIndicatorProps {
  level: "low" | "medium" | "high" | "extreme";
  message?: string;
  className?: string;
}

export function DangerZoneIndicator({
  level,
  message,
  className = "",
}: DangerZoneIndicatorProps) {
  const [isActive, setIsActive] = useState(false);
  const [pulseCount, setPulseCount] = useState(0);

  useEffect(() => {
    if (level === "high" || level === "extreme") {
      setIsActive(true);
      const interval = setInterval(() => {
        setPulseCount((prev) => prev + 1);
      }, 2000);
      return () => clearInterval(interval);
    }
  }, [level]);

  const getLevelConfig = () => {
    switch (level) {
      case "extreme":
        return {
          color: "text-red-400",
          bgColor: "bg-red-500/20",
          borderColor: "border-red-500/50",
          glowColor: "shadow-red-500/50",
          icon: "💀",
          pulseSpeed: 0.5,
        };
      case "high":
        return {
          color: "text-orange-400",
          bgColor: "bg-orange-500/20",
          borderColor: "border-orange-500/50",
          glowColor: "shadow-orange-500/50",
          icon: "⚠️",
          pulseSpeed: 1,
        };
      case "medium":
        return {
          color: "text-yellow-400",
          bgColor: "bg-yellow-500/20",
          borderColor: "border-yellow-500/50",
          glowColor: "shadow-yellow-500/50",
          icon: "⚡",
          pulseSpeed: 1.5,
        };
      default:
        return {
          color: "text-green-400",
          bgColor: "bg-green-500/20",
          borderColor: "border-green-500/50",
          glowColor: "shadow-green-500/50",
          icon: "✅",
          pulseSpeed: 2,
        };
    }
  };

  const config = getLevelConfig();

  return (
    <div className={`relative ${className}`}>
      {/* Main Danger Zone Container */}
      <motion.div
        className={`relative rounded-lg border-2 ${config.borderColor} ${config.bgColor} p-4 overflow-hidden`}
        animate={{
          boxShadow: isActive
            ? `0 0 20px ${config.glowColor}`
            : "0 0 5px rgba(255, 140, 0, 0.1)",
        }}
        transition={{
          duration: 0.5,
        }}
      >
        {/* Scanning Lines */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-current to-transparent"
            animate={{
              y: [0, 100, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "linear",
            }}
          />
          <motion.div
            className="absolute top-0 left-0 w-0.5 h-full bg-gradient-to-b from-transparent via-current to-transparent"
            animate={{
              x: [0, 300, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        </div>

        {/* Warning Icon */}
        <div className="flex items-center justify-center mb-3">
          <motion.div
            className={`text-4xl ${config.color}`}
            animate={{
              scale: isActive ? [1, 1.2, 1] : 1,
              rotate: isActive ? [0, 5, -5, 0] : 0,
            }}
            transition={{
              duration: config.pulseSpeed,
              repeat: isActive ? Infinity : 0,
            }}
          >
            {config.icon}
          </motion.div>
        </div>

        {/* Danger Level Text */}
        <motion.div
          className={`text-center font-bold text-lg ${config.color} mb-2`}
          animate={{
            textShadow: isActive
              ? `0 0 10px ${config.color}`
              : "0 0 2px rgba(255, 140, 0, 0.3)",
          }}
        >
          {level.toUpperCase()} RISK ZONE
        </motion.div>

        {/* Warning Message */}
        {message && (
          <motion.div
            className="text-center text-sm text-white/80"
            animate={{
              opacity: isActive ? [0.7, 1, 0.7] : 0.7,
            }}
            transition={{
              duration: 1,
              repeat: isActive ? Infinity : 0,
            }}
          >
            {message}
          </motion.div>
        )}

        {/* Pulsing Border */}
        <AnimatePresence>
          {isActive && (
            <motion.div
              className="absolute inset-0 rounded-lg border-2 border-current"
              initial={{ scale: 1, opacity: 0.5 }}
              animate={{ scale: 1.1, opacity: 0 }}
              exit={{ scale: 1, opacity: 0 }}
              transition={{ duration: 1 }}
            />
          )}
        </AnimatePresence>

        {/* Emergency Flashing Lights */}
        {(level === "high" || level === "extreme") && (
          <div className="absolute top-2 right-2 flex gap-1">
            {Array.from({ length: 3 }).map((_, i) => (
              <motion.div
                key={i}
                className="w-2 h-2 bg-red-500 rounded-full"
                animate={{
                  opacity: [0.3, 1, 0.3],
                }}
                transition={{
                  duration: 0.5,
                  repeat: Infinity,
                  delay: i * 0.2,
                }}
              />
            ))}
          </div>
        )}

        {/* Danger Particles */}
        <AnimatePresence>
          {isActive && (
            <div className="absolute inset-0 pointer-events-none">
              {Array.from({ length: 8 }).map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 bg-current rounded-full"
                  initial={{
                    x: "50%",
                    y: "50%",
                    scale: 0,
                  }}
                  animate={{
                    x: `${20 + ((i * 10) % 60)}%`,
                    y: `${20 + ((i * 8) % 60)}%`,
                    scale: [0, 1, 0],
                    opacity: [1, 0.8, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.3,
                  }}
                />
              ))}
            </div>
          )}
        </AnimatePresence>

        {/* Matrix Rain Effect for Extreme Danger */}
        {level === "extreme" && (
          <div className="absolute inset-0 overflow-hidden rounded-lg">
            {Array.from({ length: 10 }).map((_, i) => (
              <motion.div
                key={i}
                className="absolute text-red-500 text-xs font-mono"
                initial={{
                  x: `${Math.random() * 100}%`,
                  y: "-10px",
                }}
                animate={{
                  y: "110%",
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: i * 0.3,
                }}
              >
                {["DANGER", "WARNING", "ALERT", "CRITICAL"][i % 4]}
              </motion.div>
            ))}
          </div>
        )}

        {/* Audio Waveform for High/Extreme */}
        {(level === "high" || level === "extreme") && (
          <div className="flex justify-center gap-1 mt-3">
            {Array.from({ length: 7 }).map((_, i) => (
              <motion.div
                key={i}
                className="w-1 bg-current rounded"
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
          </div>
        )}

        {/* Countdown Timer for Extreme */}
        {level === "extreme" && (
          <motion.div
            className="absolute bottom-2 left-2 text-xs text-red-400 font-mono"
            animate={{
              opacity: [1, 0.5, 1],
            }}
            transition={{
              duration: 1,
              repeat: Infinity,
            }}
          >
            CRITICAL: {pulseCount}s
          </motion.div>
        )}
      </motion.div>

      {/* External Warning Rings */}
      <AnimatePresence>
        {isActive && (
          <>
            <motion.div
              className="absolute inset-0 rounded-lg border border-current opacity-30"
              initial={{ scale: 1, opacity: 0.3 }}
              animate={{ scale: 1.3, opacity: 0 }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <motion.div
              className="absolute inset-0 rounded-lg border border-current opacity-20"
              initial={{ scale: 1, opacity: 0.2 }}
              animate={{ scale: 1.6, opacity: 0 }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
            />
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
