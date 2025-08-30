"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface CyberGlitchEffectProps {
  children: React.ReactNode;
  intensity?: "low" | "medium" | "high";
  type?: "text" | "visual" | "both";
  className?: string;
}

export function CyberGlitchEffect({
  children,
  intensity = "medium",
  type = "both",
  className = "",
}: CyberGlitchEffectProps) {
  const [isGlitching, setIsGlitching] = useState(false);
  const [glitchText, setGlitchText] = useState("");
  const [originalText, setOriginalText] = useState("");

  useEffect(() => {
    if (typeof children === "string") {
      setOriginalText(children);
      setGlitchText(children);
    }
  }, [children]);

  useEffect(() => {
    const glitchInterval = setInterval(
      () => {
        if (intensity === "high") {
          setIsGlitching(true);
          setTimeout(() => setIsGlitching(false), 200);
        } else if (intensity === "medium") {
          setIsGlitching(true);
          setTimeout(() => setIsGlitching(false), 100);
        } else {
          setIsGlitching(true);
          setTimeout(() => setIsGlitching(false), 50);
        }
      },
      intensity === "high" ? 2000 : intensity === "medium" ? 4000 : 8000
    );

    return () => clearInterval(glitchInterval);
  }, [intensity]);

  useEffect(() => {
    if (isGlitching && type !== "visual") {
      const glitchChars = "!@#$%^&*()_+-=[]{}|;:,.<>?";
      const glitchedText = originalText
        .split("")
        .map((char, index) => {
          if (Math.random() > 0.7) {
            return glitchChars[Math.floor(Math.random() * glitchChars.length)];
          }
          return char;
        })
        .join("");
      setGlitchText(glitchedText);
    } else {
      setGlitchText(originalText);
    }
  }, [isGlitching, originalText, type]);

  const getIntensityConfig = () => {
    switch (intensity) {
      case "high":
        return {
          glitchOffset: 4,
          glitchOpacity: 0.8,
          glitchDuration: 0.2,
          shakeIntensity: 8,
        };
      case "medium":
        return {
          glitchOffset: 2,
          glitchOpacity: 0.6,
          glitchDuration: 0.1,
          shakeIntensity: 4,
        };
      default:
        return {
          glitchOffset: 1,
          glitchOpacity: 0.4,
          glitchDuration: 0.05,
          shakeIntensity: 2,
        };
    }
  };

  const config = getIntensityConfig();

  if (type === "text" && typeof children === "string") {
    return (
      <div className={`relative ${className}`}>
        {/* Original Text */}
        <span className="relative z-10">{glitchText}</span>

        {/* Glitch Layers */}
        <AnimatePresence>
          {isGlitching && (
            <>
              {/* Red Glitch Layer */}
              <motion.span
                className="absolute inset-0 text-red-400 z-20"
                initial={{ x: 0, opacity: 0 }}
                animate={{
                  x: config.glitchOffset,
                  opacity: config.glitchOpacity,
                }}
                exit={{ x: 0, opacity: 0 }}
                transition={{ duration: config.glitchDuration }}
              >
                {glitchText}
              </motion.span>

              {/* Blue Glitch Layer */}
              <motion.span
                className="absolute inset-0 text-cyan-400 z-20"
                initial={{ x: 0, opacity: 0 }}
                animate={{
                  x: -config.glitchOffset,
                  opacity: config.glitchOpacity,
                }}
                exit={{ x: 0, opacity: 0 }}
                transition={{ duration: config.glitchDuration }}
              >
                {glitchText}
              </motion.span>

              {/* White Glitch Layer */}
              <motion.span
                className="absolute inset-0 text-white z-20"
                initial={{ x: 0, opacity: 0 }}
                animate={{
                  x: config.glitchOffset / 2,
                  opacity: config.glitchOpacity * 0.5,
                }}
                exit={{ x: 0, opacity: 0 }}
                transition={{ duration: config.glitchDuration }}
              >
                {glitchText}
              </motion.span>
            </>
          )}
        </AnimatePresence>
      </div>
    );
  }

  return (
    <motion.div
      className={`relative ${className}`}
      animate={
        isGlitching && type !== "text"
          ? {
              x: [0, config.shakeIntensity, -config.shakeIntensity, 0],
              y: [0, -config.shakeIntensity, config.shakeIntensity, 0],
            }
          : {}
      }
      transition={{ duration: config.glitchDuration }}
    >
      {/* Main Content */}
      <div className="relative z-10">{children}</div>

      {/* Visual Glitch Effects */}
      <AnimatePresence>
        {isGlitching && type !== "text" && (
          <>
            {/* Red Glitch Overlay */}
            <motion.div
              className="absolute inset-0 bg-red-500/20 z-20 pointer-events-none"
              initial={{ opacity: 0 }}
              animate={{ opacity: config.glitchOpacity }}
              exit={{ opacity: 0 }}
              transition={{ duration: config.glitchDuration }}
            />

            {/* Blue Glitch Overlay */}
            <motion.div
              className="absolute inset-0 bg-cyan-500/20 z-20 pointer-events-none"
              initial={{ opacity: 0 }}
              animate={{ opacity: config.glitchOpacity }}
              exit={{ opacity: 0 }}
              transition={{ duration: config.glitchDuration, delay: 0.05 }}
            />

            {/* Scan Lines */}
            <motion.div
              className="absolute inset-0 z-20 pointer-events-none"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.3 }}
              exit={{ opacity: 0 }}
              transition={{ duration: config.glitchDuration }}
            >
              {Array.from({ length: 20 }).map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute left-0 right-0 h-px bg-white/30"
                  style={{ top: `${i * 5}%` }}
                  animate={{
                    opacity: [0, 1, 0],
                  }}
                  transition={{
                    duration: 0.1,
                    delay: i * 0.01,
                  }}
                />
              ))}
            </motion.div>

            {/* Random Glitch Blocks */}
            {Array.from({ length: 5 }).map((_, i) => (
              <motion.div
                key={i}
                className="absolute bg-white/20 z-20 pointer-events-none"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  width: `${10 + Math.random() * 20}px`,
                  height: `${2 + Math.random() * 4}px`,
                }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{
                  duration: config.glitchDuration,
                  delay: i * 0.02,
                }}
              />
            ))}
          </>
        )}
      </AnimatePresence>

      {/* Static Noise Effect */}
      <AnimatePresence>
        {isGlitching && (
          <motion.div
            className="absolute inset-0 z-30 pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: config.glitchDuration }}
          >
            <div className="w-full h-full bg-gradient-to-br from-transparent via-white/5 to-transparent" />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

// Specialized text glitch component
export function GlitchText({
  children,
  intensity = "medium",
  className = "",
}: {
  children: string;
  intensity?: "low" | "medium" | "high";
  className?: string;
}) {
  return (
    <CyberGlitchEffect intensity={intensity} type="text" className={className}>
      {children}
    </CyberGlitchEffect>
  );
}

// Specialized visual glitch component
export function GlitchVisual({
  children,
  intensity = "medium",
  className = "",
}: {
  children: React.ReactNode;
  intensity?: "low" | "medium" | "high";
  className?: string;
}) {
  return (
    <CyberGlitchEffect
      intensity={intensity}
      type="visual"
      className={className}
    >
      {children}
    </CyberGlitchEffect>
  );
}
