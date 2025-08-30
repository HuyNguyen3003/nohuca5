"use client";

import React, { useEffect, useMemo, useRef } from "react";

type CyberBackdropVariant = "matrix" | "grid" | "none";

interface CyberBackdropProps {
  variant?: CyberBackdropVariant;
  opacity?: number;
  fpsCap?: number; // soft cap to reduce CPU (e.g., 30-45)
  disableOnMobile?: boolean;
  className?: string;
  style?: React.CSSProperties;
  colors?: string[]; // for matrix rain
}

function usePrefersReducedMotion(): boolean {
  const prefers = useMemo(
    () => globalThis.matchMedia?.("(prefers-reduced-motion: reduce)") ?? null,
    []
  );
  const [reduced, setReduced] = React.useState<boolean>(false);
  useEffect(() => {
    if (!prefers) return;
    const update = () => setReduced(prefers.matches);
    update();
    prefers.addEventListener?.("change", update);
    return () => prefers.removeEventListener?.("change", update);
  }, [prefers]);
  return reduced;
}

export default function CyberBackdrop({
  variant = "matrix",
  opacity = 0.3,
  fpsCap = 40,
  disableOnMobile = true,
  className,
  style,
  colors = ["#00ff41", "#ffb200", "#00ccff", "#ffffff"],
}: CyberBackdropProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const isReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Skip on small screens if requested
    if (
      disableOnMobile &&
      typeof window !== "undefined" &&
      window.innerWidth < 768
    ) {
      return;
    }

    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const c: HTMLCanvasElement = canvas;
    const context: CanvasRenderingContext2D = ctx;

    let animationId = 0;
    let running = true;
    let lastTime = 0;
    const minFrameInterval = 1000 / Math.max(1, fpsCap);

    const resize = () => {
      c.width = window.innerWidth;
      c.height = window.innerHeight;
      initMatrix();
    };

    // Matrix data
    let fontSize = 12;
    let columns = 0;
    let drops: number[] = [];
    let speeds: number[] = [];
    let palette: string[] = [];

    function initMatrix() {
      fontSize = Math.max(10, Math.floor((c.width + c.height) / 220));
      columns = Math.floor(c.width / fontSize);
      drops = new Array(columns).fill(0).map(() => Math.random() * -50);
      speeds = new Array(columns).fill(0).map(() => 0.4 + Math.random() * 0.5);
      palette = new Array(columns)
        .fill(0)
        .map(
          () => colors[Math.floor(Math.random() * colors.length)] ?? "#00ff41"
        );
    }

    const chars =
      "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()_+-=[]{}|;:,.<>?".split(
        ""
      );

    function drawMatrix(now: number) {
      if (!running) return;
      if (isReducedMotion) return; // honor reduced motion

      const dt = now - lastTime;
      if (dt < minFrameInterval) {
        animationId = requestAnimationFrame(drawMatrix);
        return;
      }
      lastTime = now;

      context.fillStyle = "rgba(0, 0, 0, 0.05)";
      context.fillRect(0, 0, c.width, c.height);

      context.font = `bold ${fontSize}px 'Courier New', monospace`;

      for (let i = 0; i < columns; i++) {
        const y = drops[i] * fontSize;
        const charIndex = Math.floor((now / 100 + i * 7) % chars.length);
        const text = chars[charIndex];
        const color = palette[i];
        const alpha = Math.max(0.25, 1 - (y / c.height) * 0.6);

        context.shadowColor = color;
        context.shadowBlur = 16;
        context.fillStyle = `${color}${Math.floor(alpha * 255)
          .toString(16)
          .padStart(2, "0")}`;
        context.fillText(text, i * fontSize, y);
        context.shadowBlur = 0;

        drops[i] += speeds[i];
        if (drops[i] * fontSize > c.height + 50) {
          if (Math.random() > 0.965) {
            drops[i] = Math.random() * -50;
            speeds[i] = 0.4 + Math.random() * 0.5;
            palette[i] =
              colors[Math.floor(Math.random() * colors.length)] ?? "#00ff41";
          }
        }
      }

      animationId = requestAnimationFrame(drawMatrix);
    }

    const onVisibility = () => {
      running = !document.hidden;
      if (running) {
        lastTime = 0;
        animationId = requestAnimationFrame(drawMatrix);
      }
    };

    resize();
    window.addEventListener("resize", resize);
    document.addEventListener("visibilitychange", onVisibility);

    // Start
    if (!isReducedMotion) {
      animationId = requestAnimationFrame(drawMatrix);
    }

    return () => {
      running = false;
      if (animationId) cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, [colors, disableOnMobile, fpsCap, isReducedMotion]);

  return (
    <div
      className={className}
      style={{
        position: "absolute",
        inset: 0,
        opacity,
        pointerEvents: "none",
        ...style,
      }}
      aria-hidden
    >
      {variant === "matrix" && (
        <canvas ref={canvasRef} style={{ width: "100%", height: "100%" }} />
      )}
      {variant === "grid" && (
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(234,179,8,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(234,179,8,0.08) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
      )}
    </div>
  );
}
