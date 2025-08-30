import { useState, useEffect, useCallback } from "react";

interface CyberAnimationOptions {
  type?: "entrance" | "hover" | "click" | "pulse" | "scan";
  duration?: number;
  delay?: number;
  intensity?: "low" | "medium" | "high";
  enabled?: boolean;
}

interface AnimationState {
  isAnimating: boolean;
  phase: number; // 0-1 progress
  direction: "in" | "out";
}

export function useCyberAnimation(options: CyberAnimationOptions = {}) {
  const {
    type = "entrance",
    duration = 1000,
    delay = 0,
    intensity = "medium",
    enabled = true,
  } = options;

  const [state, setState] = useState<AnimationState>({
    isAnimating: false,
    phase: 0,
    direction: "in",
  });

  // Animation configurations
  const animationConfigs = {
    entrance: {
      keyframes: [
        {
          opacity: 0,
          transform: "translateY(50px) scale(0.8)",
          filter: "blur(10px)",
        },
        {
          opacity: 1,
          transform: "translateY(0px) scale(1)",
          filter: "blur(0px)",
        },
      ],
      easing: "cubic-bezier(0.68, -0.55, 0.265, 1.55)",
    },
    hover: {
      keyframes: [
        {
          transform: "scale(1) translateZ(0px)",
          boxShadow: "0 0 0 rgba(255, 102, 0, 0)",
        },
        {
          transform: "scale(1.05) translateZ(20px)",
          boxShadow: "0 20px 40px rgba(255, 102, 0, 0.3)",
        },
      ],
      easing: "ease-out",
    },
    click: {
      keyframes: [
        { transform: "scale(1)", filter: "brightness(1)" },
        { transform: "scale(0.95)", filter: "brightness(1.2)" },
        { transform: "scale(1)", filter: "brightness(1)" },
      ],
      easing: "cubic-bezier(0.175, 0.885, 0.32, 1.275)",
    },
    pulse: {
      keyframes: [
        { opacity: 0.5, transform: "scale(1)" },
        { opacity: 1, transform: "scale(1.1)" },
        { opacity: 0.5, transform: "scale(1)" },
      ],
      easing: "ease-in-out",
    },
    scan: {
      keyframes: [
        { backgroundPosition: "0% 50%" },
        { backgroundPosition: "100% 50%" },
        { backgroundPosition: "0% 50%" },
      ],
      easing: "linear",
    },
  };

  const config = animationConfigs[type];

  // Trigger animation
  const triggerAnimation = useCallback(
    (direction: "in" | "out" = "in") => {
      if (!enabled) return;

      setState((prev) => ({
        ...prev,
        isAnimating: true,
        direction,
        phase: direction === "in" ? 0 : 1,
      }));

      // Animate phase
      const startTime = Date.now();
      const animate = () => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);

        const currentPhase = direction === "in" ? progress : 1 - progress;

        setState((prev) => ({
          ...prev,
          phase: currentPhase,
        }));

        if (progress < 1) {
          requestAnimationFrame(animate);
        } else {
          setState((prev) => ({
            ...prev,
            isAnimating: false,
          }));
        }
      };

      setTimeout(() => {
        requestAnimationFrame(animate);
      }, delay);
    },
    [enabled, duration, delay]
  );

  // Auto-trigger entrance animation
  useEffect(() => {
    if (type === "entrance" && enabled) {
      triggerAnimation("in");
    }
  }, [type, enabled, triggerAnimation]);

  // Generate animation styles
  const getAnimationStyles = useCallback(() => {
    if (!state.isAnimating) return {};

    const intensityMultiplier = {
      low: 0.5,
      medium: 1,
      high: 1.5,
    }[intensity];

    const phase = state.phase;
    const keyframes = config.keyframes;

    // Interpolate between keyframes
    const currentFrame = Math.floor(phase * (keyframes.length - 1));
    const nextFrame = Math.min(currentFrame + 1, keyframes.length - 1);
    const frameProgress = (phase * (keyframes.length - 1)) % 1;

    const current = keyframes[currentFrame];
    const next = keyframes[nextFrame];

    // Interpolate values
    const interpolated: Record<string, number> = {};
    Object.keys(current).forEach((key) => {
      const currentValue = current[key as keyof typeof current];
      const nextValue = next[key as keyof typeof next];

      if (typeof currentValue === "number" && typeof nextValue === "number") {
        interpolated[key] =
          currentValue + (nextValue - currentValue) * frameProgress;
      } else if (
        typeof currentValue === "string" &&
        typeof nextValue === "string"
      ) {
        // Handle transform strings
        if (key === "transform") {
          interpolated[key] = currentValue; // Simplified for now
        } else {
          interpolated[key] = currentValue;
        }
      } else {
        interpolated[key] = currentValue;
      }
    });

    // Apply intensity multiplier
    if (interpolated.transform) {
      interpolated.transform = interpolated.transform.replace(
        /scale\(([^)]+)\)/g,
        (match: string, scale: string) => {
          const numScale = parseFloat(scale);
          const adjustedScale = 1 + (numScale - 1) * intensityMultiplier;
          return `scale(${adjustedScale})`;
        }
      );
    }

    return {
      ...interpolated,
      transition: `all ${duration}ms ${config.easing}`,
    };
  }, [state.isAnimating, state.phase, config, duration, intensity]);

  // Generate cyber-specific effects
  const getCyberEffects = useCallback(() => {
    if (!state.isAnimating) return {};

    const effects: Record<string, string> = {};

    switch (type) {
      case "entrance":
        effects.boxShadow = `0 0 ${20 * state.phase}px rgba(255, 102, 0, ${
          0.3 * state.phase
        })`;
        effects.filter = `blur(${10 * (1 - state.phase)}px) brightness(${
          1 + state.phase * 0.2
        })`;
        break;
      case "hover":
        effects.boxShadow = `0 ${20 * state.phase}px ${
          40 * state.phase
        }px rgba(255, 102, 0, ${0.3 * state.phase})`;
        effects.filter = `brightness(${1 + state.phase * 0.1}) contrast(${
          1 + state.phase * 0.1
        })`;
        break;
      case "click":
        effects.boxShadow = `0 0 ${30 * state.phase}px rgba(255, 102, 0, ${
          0.5 * state.phase
        })`;
        effects.filter = `brightness(${1 + state.phase * 0.3}) saturate(${
          1 + state.phase * 0.2
        })`;
        break;
      case "pulse":
        effects.boxShadow = `0 0 ${15 * state.phase}px rgba(255, 102, 0, ${
          0.4 * state.phase
        })`;
        effects.filter = `brightness(${1 + state.phase * 0.1})`;
        break;
      case "scan":
        effects.background = `linear-gradient(90deg,
          transparent 0%,
          rgba(255, 102, 0, ${0.3 * state.phase}) 50%,
          transparent 100%
        )`;
        effects.backgroundSize = "200% 100%";
        effects.backgroundPosition = `${state.phase * 100}% 0%`;
        break;
    }

    return effects;
  }, [state.isAnimating, state.phase, type]);

  return {
    state,
    triggerAnimation,
    getAnimationStyles,
    getCyberEffects,
    isAnimating: state.isAnimating,
    phase: state.phase,
  };
}
