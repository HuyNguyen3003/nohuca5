import { useState, useEffect, useCallback } from "react";

interface Perspective3DOptions {
  intensity?: "low" | "medium" | "high";
  enableMouseTracking?: boolean;
  enableParallax?: boolean;
  depth?: number; // Base depth in pixels
  throttleMs?: number; // Throttle mouse events
}

interface Perspective3DState {
  mouseX: number;
  mouseY: number;
  perspective: number;
  rotateX: number;
  rotateY: number;
  translateZ: number;
}

export function use3DPerspective(options: Perspective3DOptions = {}) {
  const {
    intensity = "low", // Reduced for ultra smooth performance
    enableMouseTracking = true,
    enableParallax = false, // Disabled for better performance
    depth = 50, // Reduced depth for smoother animations
    throttleMs = 50, // 20fps for ultra smooth performance
  } = options;

  const [state, setState] = useState<Perspective3DState>({
    mouseX: 0,
    mouseY: 0,
    perspective: 1000,
    rotateX: 0,
    rotateY: 0,
    translateZ: 0,
  });

  // Mouse tracking for 3D perspective with throttling
  useEffect(() => {
    if (!enableMouseTracking) return;

    let lastUpdate = 0;
    const throttleDelay = throttleMs;

    const handleMouseMove = (event: MouseEvent) => {
      const now = Date.now();
      if (now - lastUpdate < throttleDelay) return;
      lastUpdate = now;

      const { clientX, clientY } = event;
      const { innerWidth, innerHeight } = window;

      // Normalize mouse position to -1 to 1
      const normalizedX = (clientX / innerWidth) * 2 - 1;
      const normalizedY = (clientY / innerHeight) * 2 - 1;

      const intensityMultiplier = {
        low: 0.2, // Reduced for ultra smooth
        medium: 0.5,
        high: 1,
      }[intensity];

      // Use requestAnimationFrame for smooth updates
      requestAnimationFrame(() => {
        setState((prev) => ({
          ...prev,
          mouseX: normalizedX,
          mouseY: normalizedY,
          rotateX: normalizedY * 2 * intensityMultiplier, // Reduced movement
          rotateY: normalizedX * 2 * intensityMultiplier, // Reduced movement
        }));
      });
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [enableMouseTracking, intensity, throttleMs]);

  // Parallax effect
  useEffect(() => {
    if (!enableParallax) return;

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const maxScroll = document.body.scrollHeight - window.innerHeight;
      const scrollProgress = scrollY / maxScroll;

      setState((prev) => ({
        ...prev,
        translateZ: scrollProgress * depth,
      }));
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [enableParallax, depth]);

  // Generate 3D transform styles
  const get3DStyles = useCallback(
    (layer: number = 0) => {
      const layerDepth = layer * 20;
      const intensityMultiplier = {
        low: 0.3,
        medium: 0.6,
        high: 1,
      }[intensity];

      return {
        transform: `
        perspective(${state.perspective}px)
        rotateX(${state.rotateX * intensityMultiplier}deg)
        rotateY(${state.rotateY * intensityMultiplier}deg)
        translateZ(${state.translateZ + layerDepth}px)
      `,
        transformStyle: "preserve-3d" as const,
      };
    },
    [state, intensity]
  );

  // Generate depth layers
  const getDepthLayers = useCallback(
    (count: number = 3) => {
      return Array.from({ length: count }, (_, i) => ({
        index: i,
        depth: i * 20,
        opacity: 1 - i * 0.2,
        scale: 1 + i * 0.05,
        styles: get3DStyles(i),
      }));
    },
    [get3DStyles]
  );

  // Generate floating animation
  const getFloatingStyles = useCallback((delay: number = 0) => {
    return {
      animation: `floating 3s ease-in-out infinite`,
      animationDelay: `${delay}s`,
    };
  }, []);

  // Generate energy connection styles
  const getEnergyConnectionStyles = useCallback(
    (from: { x: number; y: number }, to: { x: number; y: number }) => {
      const dx = to.x - from.x;
      const dy = to.y - from.y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      const angle = (Math.atan2(dy, dx) * 180) / Math.PI;

      return {
        width: `${distance}px`,
        height: "2px",
        transform: `translate(${from.x}px, ${from.y}px) rotate(${angle}deg)`,
        transformOrigin: "0 0",
        background:
          "linear-gradient(90deg, rgba(255, 102, 0, 0.8), rgba(255, 102, 0, 0.2))",
        boxShadow: "0 0 10px rgba(255, 102, 0, 0.5)",
      };
    },
    []
  );

  return {
    state,
    get3DStyles,
    getDepthLayers,
    getFloatingStyles,
    getEnergyConnectionStyles,
    mouseX: state.mouseX,
    mouseY: state.mouseY,
  };
}
