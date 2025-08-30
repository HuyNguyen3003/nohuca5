"use client";

import React, { useEffect, useState } from "react";

export default function GlitchText({
  children,
  className = "",
  intervalMs = 2500,
}: {
  children: React.ReactNode;
  className?: string;
  intervalMs?: number;
}) {
  const [glitch, setGlitch] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    let timer: number | null = null;
    const tick = () => {
      setGlitch(true);
      window.setTimeout(() => setGlitch(false), 100);
      timer = window.setTimeout(tick, intervalMs + Math.random() * 1500);
    };
    timer = window.setTimeout(tick, intervalMs);
    return () => {
      if (timer) window.clearTimeout(timer);
    };
  }, [mounted, intervalMs]);

  return (
    <div className={`relative ${className}`}>
      <div
        className={`${
          glitch ? "animate-pulse" : ""
        } transition-all duration-100`}
      >
        {children}
      </div>
      {glitch && (
        <>
          <div className="absolute inset-0 text-red-500 animate-ping opacity-70 mix-blend-multiply transform translate-x-0.5">
            {children}
          </div>
          <div className="absolute inset-0 text-cyan-500 animate-ping opacity-70 mix-blend-multiply transform -translate-x-0.5">
            {children}
          </div>
        </>
      )}
    </div>
  );
}
