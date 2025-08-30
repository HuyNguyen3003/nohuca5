import { useState, useEffect, useCallback } from "react";

interface GlitchEffectOptions {
  intensity?: "low" | "medium" | "high";
  frequency?: number; // milliseconds between glitches
  duration?: number; // milliseconds glitch lasts
  enabled?: boolean;
}

interface GlitchState {
  isGlitching: boolean;
  offsetX: number;
  offsetY: number;
  skew: number;
  opacity: number;
}

export function useGlitchEffect(options: GlitchEffectOptions = {}) {
  const {
    intensity = "medium",
    frequency = 2000,
    duration = 150,
    enabled = true,
  } = options;

  const [glitchState, setGlitchState] = useState<GlitchState>({
    isGlitching: false,
    offsetX: 0,
    offsetY: 0,
    skew: 0,
    opacity: 1,
  });

  const triggerGlitch = useCallback(() => {
    if (!enabled) return;

    const intensityMultiplier = {
      low: 0.5,
      medium: 1,
      high: 1.5,
    }[intensity];

    setGlitchState({
      isGlitching: true,
      offsetX: (Math.random() - 0.5) * 4 * intensityMultiplier,
      offsetY: (Math.random() - 0.5) * 2 * intensityMultiplier,
      skew: (Math.random() - 0.5) * 0.1 * intensityMultiplier,
      opacity: 0.8 + Math.random() * 0.4,
    });

    // Reset glitch after duration
    setTimeout(() => {
      setGlitchState((prev) => ({
        ...prev,
        isGlitching: false,
        offsetX: 0,
        offsetY: 0,
        skew: 0,
        opacity: 1,
      }));
    }, duration);
  }, [enabled, intensity, duration]);

  // Auto-trigger glitches
  useEffect(() => {
    if (!enabled) return;

    const interval = setInterval(() => {
      if (Math.random() < 0.3) {
        // 30% chance to trigger
        triggerGlitch();
      }
    }, frequency);

    return () => clearInterval(interval);
  }, [enabled, frequency, triggerGlitch]);

  // Manual trigger function
  const manualTrigger = useCallback(() => {
    triggerGlitch();
  }, [triggerGlitch]);

  // CSS styles for glitch effect
  const glitchStyles = glitchState.isGlitching
    ? {
        transform: `translate(${glitchState.offsetX}px, ${glitchState.offsetY}px) skew(${glitchState.skew}deg)`,
        opacity: glitchState.opacity,
        filter: "contrast(1.2) brightness(1.1)",
        textShadow:
          intensity === "high"
            ? "2px 0 red, -2px 0 cyan, 0 2px green, 0 -2px blue"
            : intensity === "medium"
            ? "1px 0 red, -1px 0 cyan"
            : "0.5px 0 red, -0.5px 0 cyan",
      }
    : {};

  return {
    glitchState,
    glitchStyles,
    triggerGlitch: manualTrigger,
    isGlitching: glitchState.isGlitching,
  };
}
