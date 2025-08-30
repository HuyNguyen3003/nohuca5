"use client";

import React, { useEffect, useMemo, useRef } from "react";

interface ParallaxCyberHeroProps {
  className?: string;
  intensity?: number; // 0..1
}

function useReducedMotion(): boolean {
  const m = useMemo(
    () =>
      typeof window !== "undefined"
        ? window.matchMedia("(prefers-reduced-motion: reduce)")
        : null,
    []
  );
  const [reduced, setReduced] = React.useState(false);
  useEffect(() => {
    if (!m) return;
    const fn = () => setReduced(m.matches);
    fn();
    m.addEventListener("change", fn);
    return () => m.removeEventListener("change", fn);
  }, [m]);
  return reduced;
}

export default function ParallaxCyberHero({
  className,
  intensity = 0.5,
}: ParallaxCyberHeroProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    const el = containerRef.current;
    if (!el || reducedMotion) return;

    let raf = 0;
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;

    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      targetX = x * intensity;
      targetY = y * intensity;
    };

    const animate = () => {
      // smooth follow
      currentX += (targetX - currentX) * 0.08;
      currentY += (targetY - currentY) * 0.08;

      const layers = el.querySelectorAll<HTMLElement>("[data-parallax-layer]");
      layers.forEach((layer) => {
        const depth = Number(layer.dataset.depth || 0);
        const tx = (-currentX * 20 * depth).toFixed(2);
        const ty = (-currentY * 20 * depth).toFixed(2);
        layer.style.transform = `translate3d(${tx}px, ${ty}px, 0)`;
      });
      raf = requestAnimationFrame(animate);
    };

    el.addEventListener("mousemove", onMove);
    raf = requestAnimationFrame(animate);
    return () => {
      el.removeEventListener("mousemove", onMove);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [intensity, reducedMotion]);

  return (
    <div ref={containerRef} className={className} aria-hidden>
      {/* Glow base */}
      <div
        data-parallax-layer
        data-depth="0.1"
        className="absolute -inset-16 opacity-40 blur-3xl"
        style={{
          background:
            "radial-gradient(50% 50% at 50% 50%, rgba(255,178,0,0.20) 0%, rgba(0,255,65,0.15) 35%, transparent 70%)",
        }}
      />
      {/* Circuit grid */}
      <div
        data-parallax-layer
        data-depth="0.25"
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "linear-gradient(rgba(234,179,8,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(234,179,8,0.15) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />
      {/* Conic highlight ring */}
      <div
        data-parallax-layer
        data-depth="0.4"
        className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full opacity-30 motion-reduce:opacity-20"
        style={{
          background:
            "conic-gradient(from 0deg, rgba(255,178,0,0.6), rgba(255,178,0,0) 25%, transparent 75%, rgba(0,255,65,0.5))",
          filter: "blur(2px)",
        }}
      />
      {/* Floating particle dots */}
      <div
        data-parallax-layer
        data-depth="0.6"
        className="absolute inset-0 pointer-events-none"
      >
        {Array.from({ length: 12 }).map((_, i) => (
          <span
            key={i}
            className="absolute h-[3px] w-[3px] rounded-full bg-yellow-400/70 shadow-[0_0_12px_rgba(234,179,8,0.65)]"
            style={{
              left: `${8 + ((i * 7) % 80)}%`,
              top: `${10 + ((i * 13) % 70)}%`,
            }}
          />
        ))}
      </div>
    </div>
  );
}
