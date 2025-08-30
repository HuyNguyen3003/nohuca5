"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";

type PerformanceMode = "auto" | "balanced" | "low";

type SystemInitializationOverlayProps = {
  isOpen: boolean;
  totalDurationMs: number;
  onDone?: () => void;
  performanceMode?: PerformanceMode;
  maxLogs?: number;
  fpsCap?: number;
};

const FAKE_LOGS = [
  "Initialize AI neural networks... [OK] layers=256 time=0.187s",
  "Load market data models... usage=23% temp=47°C memory=1.2GB",
  "Connect to trading APIs... IP=192.168.1.67 MAC=00:1A:2B:3C:4D:5F",
  "Resolve market data sources... server=api.trading.io latency=89ms",
  "Ping Market Server [10.0.0.15]... reply=64 bytes ttl=52 time=18ms",
  "Handshake secure connection... sessionID=cd34e8f7 cipher=TLS_AES_256_GCM_SHA384",
  "Decrypt market feeds... throughput=256.8 MB/s packets=2,048 dropped=0",
  "Select optimal server... region=ap-southeast-1 latency=28ms score=99.1",
  "Sync market indicators... 89.4 MB/150 MB (59%) rate=45.7MB/s ETA=1.3s",
  "Mount trading algorithms... device=/dev/sda2 UUID=8f4b-33cd type=ext4",
  "Calibrate price sensors... volatility_offset=+0.041 trend_drift=0.003",
  "Load prediction models... channels=4 rate=64kHz buffer=512KB",
  "Start AI analysis engine... v3.2.1 allocated=2048MB VRAM cores=128",
  "Update market rules... added=67 removed=5 checksum=be5d33",
  "Scan security protocols... threats=0 warnings=1 scan_time=0.87s",
  "System validation... uptime=00:02:15 load=0.38 ram=892MB/8192MB",
  "Background analysis... worker-threads=16 pid=7892 port=9090",
  "Cache optimization... hits=1247 misses=23 efficiency=98.2%",
  "AI benchmark... score=15678 fps=180 temp=72°C",
  "Market data I/O test... read=892MB/s write=734MB/s latency=1.8ms",
  "Memory stress analysis... usage=78% free=1.2GB swap=disabled",
  "Network latency monitor... avg=19ms jitter=2.8ms loss=0.01%",
  "API request queue... pending=8 processed=289 rate=320/s",
  "Database synchronization... rows=25640 tx=89MB/s queries=640/s",
  "Authentication service... token=gb32d9e8 expires=7200s users=24 active",
  "Container orchestration... kubernetes v1.28.0 pods=16 status=healthy",
  "Log aggregation... size=45.7MB compressed=5.2MB files=18",
  "Session tracking... id=7d45-aa23-cc78 state=ACTIVE duration=1247s",
  "Error monitoring... last_error=NULL uptime_since=2025-01-15T14:22:18Z",
  "AI Analysis ready. ✅ All 32 modules operational",
];

export function SystemInitializationOverlay({
  isOpen,
  totalDurationMs,
  onDone,
  performanceMode = "auto",
  maxLogs = 40,
  fpsCap = 30,
}: SystemInitializationOverlayProps) {
  const [logs, setLogs] = useState<string[]>([]);
  const logWrapRef = useRef<HTMLDivElement | null>(null);
  const [startTime, setStartTime] = useState<number | null>(null);
  const [progressPercent, setProgressPercent] = useState(0);
  const [hoveredNodeIndex, setHoveredNodeIndex] = useState<number | null>(null);
  const reducedMotion =
    typeof window !== "undefined" &&
    window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const isMobile =
    typeof window !== "undefined" &&
    (window.innerWidth <= 480 || window.devicePixelRatio > 2);
  const resolvedMode: PerformanceMode =
    performanceMode === "auto"
      ? reducedMotion || isMobile
        ? "low"
        : "balanced"
      : performanceMode;
  const buildArcPath = (
    startAngleDeg: number,
    endAngleDeg: number,
    radius: number,
    bulgeFactor: number
  ): string => {
    const toRad = (d: number) => (d * Math.PI) / 180;
    const cx = 50;
    const cy = 50;
    const ax = cx + radius * Math.cos(toRad(startAngleDeg));
    const ay = cy + radius * Math.sin(toRad(startAngleDeg));
    const bx = cx + radius * Math.cos(toRad(endAngleDeg));
    const by = cy + radius * Math.sin(toRad(endAngleDeg));
    const mx = (ax + bx) / 2;
    const my = (ay + by) / 2;
    const vx = bx - ax;
    const vy = by - ay;
    const nx = -vy;
    const ny = vx;
    const len = Math.max(1e-6, Math.hypot(nx, ny));
    const ux = (nx / len) * bulgeFactor;
    const uy = (ny / len) * bulgeFactor;
    const cx1 = mx + ux;
    const cy1 = my + uy;
    return `M ${ax.toFixed(2)} ${ay.toFixed(2)} Q ${cx1.toFixed(
      2
    )} ${cy1.toFixed(2)} ${bx.toFixed(2)} ${by.toFixed(2)}`;
  };

  const dynamicRoutes = useMemo(() => {
    if (resolvedMode === "low")
      return [] as { id: string; d: string; gradient: string; speed: number }[];
    const target = resolvedMode === "balanced" ? 4 : 12;
    const base = Math.min(target, Math.max(2, Math.floor(logs.length / 3)));
    const count = Math.min(
      target,
      Math.round(base * (hoveredNodeIndex !== null ? 1.2 : 1))
    );
    const routes: { id: string; d: string; gradient: string; speed: number }[] =
      [];
    const golden = 137.508; // degrees
    for (let i = 0; i < count; i += 1) {
      const start = (i * golden) % 360;
      const end = (start + 100 + (i % 3) * 20) % 360;
      const radius = 30 + ((i * 7) % 18); // 30..48
      const bulge = 8 + (i % 4) * 4; // control curvature
      const d = buildArcPath(start, end, radius, bulge);
      const id = `r-dyn-${i}`;
      const gradient = i % 2 === 0 ? "url(#routeCool)" : "url(#routeMagenta)";
      const speed = 1.6 + (i % 5) * 0.35;
      routes.push({ id, d, gradient, speed });
    }
    return routes;
  }, [logs.length, hoveredNodeIndex, resolvedMode]);
  const steppedProfile = useMemo(
    () => [
      { t: 0.0, p: 1 },
      { t: 0.05, p: 8 },
      { t: 0.08, p: 10 },
      { t: 0.2, p: 10 }, // hold
      { t: 0.22, p: 35 },
      { t: 0.4, p: 35 }, // hold
      { t: 0.45, p: 50 },
      { t: 0.65, p: 50 }, // hold
      { t: 0.7, p: 72 },
      { t: 0.85, p: 72 }, // hold
      { t: 0.9, p: 88 },
      { t: 0.97, p: 92 },
      { t: 1.0, p: 100 },
    ],
    []
  );

  const perStepDelay = useMemo(() => {
    const steps = FAKE_LOGS.length + 2;
    const minDelay = 120; // chậm tối thiểu để cảm giác mượt
    const baseDelay = Math.max(minDelay, Math.floor(totalDurationMs / steps));
    return resolvedMode === "low" ? Math.min(220, baseDelay) : baseDelay;
  }, [totalDurationMs, resolvedMode]);

  useEffect(() => {
    if (!isOpen) return;
    setStartTime(Date.now());
    let cancelled = false;
    const run = async () => {
      for (let i = 0; i < FAKE_LOGS.length; i += 1) {
        if (cancelled) return;
        await new Promise((r) => setTimeout(r, perStepDelay));
        if (cancelled) return;
        setLogs((prev) => {
          const next = [...prev, FAKE_LOGS[i]];
          return next.length > maxLogs ? next.slice(-maxLogs) : next;
        });
      }
      await new Promise((r) => setTimeout(r, perStepDelay * 2));
      if (!cancelled) onDone?.();
    };
    run();
    return () => {
      cancelled = true;
    };
  }, [isOpen, perStepDelay, onDone, maxLogs]);

  useEffect(() => {
    if (!isOpen || startTime === null) return;
    let rafId: number;
    let lastTs = 0;
    const frameInterval = 1000 / Math.max(1, fpsCap);
    const tick = () => {
      const now = Date.now();
      if (now - lastTs < frameInterval) {
        rafId = requestAnimationFrame(tick);
        return;
      }
      lastTs = now;
      const elapsed = now - startTime;
      const linear = Math.max(0, Math.min(1, elapsed / totalDurationMs));
      // map linear time -> stepped profile percent with brief holds and jumps
      let pct = steppedProfile[steppedProfile.length - 1].p;
      for (let i = 0; i < steppedProfile.length - 1; i += 1) {
        const a = steppedProfile[i];
        const b = steppedProfile[i + 1];
        if (linear >= a.t && linear <= b.t) {
          // If this segment is a hold (same percent), keep constant; else lerp gently
          if (b.p === a.p) {
            pct = a.p;
          } else {
            const segProgress = (linear - a.t) / Math.max(1e-6, b.t - a.t);
            // ease-out cubic for smooth step
            const eased = 1 - Math.pow(1 - segProgress, 3);
            pct = Math.round(a.p + (b.p - a.p) * eased);
          }
          break;
        }
      }
      setProgressPercent(pct);
      if (pct < 100) {
        rafId = requestAnimationFrame(tick);
      }
    };
    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, [isOpen, startTime, totalDurationMs, steppedProfile, fpsCap]);

  useEffect(() => {
    if (!logWrapRef.current) return;
    logWrapRef.current.scrollTop = logWrapRef.current.scrollHeight;
  }, [logs]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/95"
      role="status"
      aria-live="polite"
      aria-busy="true"
    >
      {/* Floating particles to create depth */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-gradient-to-r from-[#ff9406] to-[#ffb200] rounded-full animate-float"
            style={{
              left: `${10 + ((i * 7) % 80)}%`,
              top: `${20 + ((i * 11) % 60)}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${3 + (i % 3)}s`,
              filter: `drop-shadow(0 0 8px ${
                i % 2 === 0 ? "#ff9406" : "#ffb200"
              })`,
            }}
          />
        ))}
      </div>

      {/* Unified Container */}
      <div className="relative h-[90vh] w-[90vw] px-4">
        <div className="bg-gradient-to-br from-white/10 via-white/5 to-transparent backdrop-blur-2xl border border-white/30 rounded-3xl shadow-2xl overflow-hidden h-full">
          {/* Header */}
          <div className="px-8 py-4 bg-gradient-to-r from-white/15 via-white/10 to-white/15 border-b border-white/20 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-[#ffb200] rounded-full animate-pulse" />
              <span className="font-mono text-[#ffb200] text-sm font-bold tracking-widest uppercase">
                AI ANALYSIS INITIALIZATION
              </span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-[#ff9406] rounded-full animate-pulse" />
              <div
                className="w-2 h-2 bg-[#ffb200] rounded-full animate-pulse"
                style={{ animationDelay: "0.3s" }}
              />
              <div
                className="w-2 h-2 bg-[#ff9406] rounded-full animate-pulse"
                style={{ animationDelay: "0.6s" }}
              />
            </div>
          </div>

          {/* Mobile-first simplified layout */}
          <div className="grid grid-rows-3 gap-0 items-stretch h-full md:grid-rows-3">
            {/* Spinner + status */}
            <div className="p-6 md:p-8 border-b border-white/20 bg-gradient-to-br from-black/40 via-black/30 to-black/40 h-full min-h-0">
              <div className="flex flex-col items-center justify-center text-center h-full">
                <div className="relative mb-6 grid place-items-center">
                  <div className="absolute w-12 h-12 md:w-16 md:h-16 rounded-full border-2 border-white/20 bg-black/60 backdrop-blur" />
                  <div className="absolute w-12 h-12 md:w-16 md:h-16 rounded-full border border-[#ffb200]/40 animate-pulse" />
                  <div
                    className="absolute w-12 h-12 md:w-16 md:h-16 rounded-full motion-reduce:animate-none"
                    style={{
                      backgroundImage:
                        "conic-gradient(from 0deg, #ffb200, #ffb20088 15%, transparent 15%, transparent 35%, #ffb20088 35%, #ffb200 50%, transparent 50%, transparent 65%, #ffb20088 65%, #ffb200 85%, transparent 85%, transparent 100%)",
                      WebkitMask:
                        "radial-gradient(farthest-side, transparent calc(100% - 8px), #000 0)",
                      animation: "spin 0.8s linear infinite",
                      filter:
                        "drop-shadow(0 0 12px #ffb200aa) drop-shadow(0 0 24px #ffb20066)",
                    }}
                  />
                  <div
                    className="absolute w-14 h-14 md:w-20 md:h-20 rounded-full motion-reduce:animate-none"
                    style={{
                      backgroundImage:
                        "conic-gradient(from 180deg, #ff9406, #ff940688 20%, transparent 20%, transparent 40%, #ff940688 40%, #ff9406 60%, transparent 60%, transparent 80%, #ff940688 80%, #ff9406 100%)",
                      WebkitMask:
                        "radial-gradient(farthest-side, transparent calc(100% - 6px), #000 0)",
                      animation: "spinReverse 0.6s linear infinite",
                      filter:
                        "drop-shadow(0 0 12px #ff9406aa) drop-shadow(0 0 24px #ff940666)",
                    }}
                  />
                  <div
                    className="absolute w-12 h-12 md:w-16 md:h-16 rounded-full motion-reduce:animate-none"
                    style={{
                      backgroundImage:
                        "conic-gradient(from 90deg, #ff9406, #ff940655 25%, transparent 25%, transparent 50%, #ff940655 50%, #ff9406 75%, transparent 75%, transparent 100%)",
                      WebkitMask:
                        "radial-gradient(farthest-side, transparent calc(100% - 4px), #000 0)",
                      animation: "spin 0.4s linear infinite",
                      opacity: 0.8,
                      filter: "drop-shadow(0 0 8px #ff9406aa)",
                    }}
                  />
                  <div className="absolute w-8 h-8 md:w-10 md:h-10 rounded-full bg-gradient-to-br from-[#ffb200] via-[#ff9406] to-[#ffb200] animate-pulse" />
                  <div className="absolute w-5 h-5 md:w-6 md:h-6 rounded-full bg-black/80" />
                </div>

                <div className="space-y-3 w-full mt-6 md:mt-8 relative z-10">
                  <div className="relative w-full h-3 bg-black/60 rounded-full overflow-hidden border border-white/20">
                    <div className="absolute inset-0 bg-gradient-to-r from-[#ff9406]/20 via-[#ffb200]/20 to-[#ff9406]/10" />
                    <div
                      className="h-full bg-gradient-to-r from-[#ff9406] via-[#ffb200] to-[#ff9406] rounded-full transition-all duration-500 ease-out relative overflow-hidden"
                      style={{
                        width: `${progressPercent}%`,
                      }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shine" />
                    </div>
                  </div>

                  <div className="font-mono text-xs md:text-sm text-white/90 flex items-center justify-center gap-2">
                    <span className="text-[#ffb200]">$</span>
                    <span>PROGRESS:</span>
                    <span className="text-[#ffb200] font-bold">
                      {progressPercent}%
                    </span>
                    <span className="inline-block w-2 h-5 align-middle bg-[#ffb200] ml-1 animate-caret" />
                  </div>

                  {logs.length > 0 && (
                    <div className="font-mono text-xs md:text-sm text-white/80 mt-2 p-2 bg-black/30 rounded border border-white/10">
                      <span className="text-[#ffb200]">$</span> LAST:{" "}
                      {logs[logs.length - 1]}
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Globe (hidden on very small screens to reduce cost) */}
            <div className="hidden sm:flex items-center justify-center h-full min-h-0">
              <div
                className="relative w-[260px] h-[260px] md:w-[350px] md:h-[350px] rounded-full overflow-hidden"
                style={{
                  boxShadow: "0 0 30px #ffb20040, inset 0 0 30px #ff940620",
                }}
              >
                <div
                  className="absolute inset-0 rounded-full"
                  style={{
                    background:
                      "radial-gradient(140px 180px at 50% 40%, #ff940630, transparent 70%), radial-gradient(140px 180px at 60% 60%, #ffb20025, transparent 70%), radial-gradient(160px 160px at 40% 60%, #ffb20020, transparent 70%)",
                    boxShadow: "inset 0 0 50px #ffb20025, 0 0 40px #ff940633",
                  }}
                />

                <svg
                  className="absolute inset-0 animate-hue"
                  viewBox="0 0 100 100"
                  aria-hidden
                >
                  <defs>
                    <linearGradient id="gridWarm" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0%" stopColor="#ff9406" stopOpacity="0.8" />
                      <stop
                        offset="100%"
                        stopColor="#ffb200"
                        stopOpacity="0.8"
                      />
                    </linearGradient>
                    <linearGradient id="routeWarm" x1="0" y1="0" x2="1" y2="0">
                      <stop offset="0%" stopColor="#ff9406" stopOpacity="1" />
                      <stop offset="100%" stopColor="#ffb200" stopOpacity="1" />
                    </linearGradient>
                    <filter id="glowWarm">
                      <feGaussianBlur stdDeviation="2" result="coloredBlur" />
                      <feMerge>
                        <feMergeNode in="coloredBlur" />
                        <feMergeNode in="SourceGraphic" />
                      </feMerge>
                    </filter>
                    <linearGradient id="routeCool" x1="0" y1="0" x2="1" y2="0">
                      <stop offset="0%" stopColor="#00ccff" stopOpacity="1" />
                      <stop offset="100%" stopColor="#00ffa6" stopOpacity="1" />
                    </linearGradient>
                    <linearGradient
                      id="routeMagenta"
                      x1="0"
                      y1="0"
                      x2="1"
                      y2="0"
                    >
                      <stop offset="0%" stopColor="#ff00aa" stopOpacity="1" />
                      <stop offset="100%" stopColor="#ffb200" stopOpacity="1" />
                    </linearGradient>
                    <radialGradient id="limbDark" cx="50%" cy="50%" r="50%">
                      <stop offset="60%" stopColor="#000000" stopOpacity="0" />
                      <stop
                        offset="100%"
                        stopColor="#000000"
                        stopOpacity="0.35"
                      />
                    </radialGradient>
                    <radialGradient
                      id="atmosphereWarm"
                      cx="50%"
                      cy="45%"
                      r="60%"
                    >
                      <stop
                        offset="0%"
                        stopColor="#ffffff"
                        stopOpacity="0.05"
                      />
                      <stop
                        offset="50%"
                        stopColor="#ffb200"
                        stopOpacity="0.10"
                      />
                      <stop offset="100%" stopColor="#ff9406" stopOpacity="0" />
                    </radialGradient>
                    <radialGradient id="specularWarm" cx="40%" cy="35%" r="25%">
                      <stop offset="0%" stopColor="#ffffff" stopOpacity="0.7" />
                      <stop
                        offset="60%"
                        stopColor="#ffffff"
                        stopOpacity="0.12"
                      />
                      <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
                    </radialGradient>
                    <mask id="sphereMask">
                      <rect width="100" height="100" fill="black" />
                      <circle cx="50" cy="50" r="48" fill="white" />
                    </mask>
                    <linearGradient
                      id="dayNight"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="0%"
                    >
                      <stop
                        offset="45%"
                        stopColor="#000000"
                        stopOpacity="0.65"
                      />
                      <stop offset="55%" stopColor="#000000" stopOpacity="0" />
                    </linearGradient>
                    <radialGradient id="auroraNorth" cx="50%" cy="8%" r="30%">
                      <stop offset="0%" stopColor="#00ffa6" stopOpacity="0.8" />
                      <stop
                        offset="60%"
                        stopColor="#00ccff"
                        stopOpacity="0.25"
                      />
                      <stop offset="100%" stopColor="#ff00aa" stopOpacity="0" />
                    </radialGradient>
                    <radialGradient id="auroraSouth" cx="50%" cy="92%" r="30%">
                      <stop offset="0%" stopColor="#00ffa6" stopOpacity="0.8" />
                      <stop
                        offset="60%"
                        stopColor="#7cff00"
                        stopOpacity="0.25"
                      />
                      <stop offset="100%" stopColor="#ff00aa" stopOpacity="0" />
                    </radialGradient>
                    <filter
                      id="cloudNoise"
                      x="-20%"
                      y="-20%"
                      width="140%"
                      height="140%"
                    >
                      <feTurbulence
                        type="fractalNoise"
                        baseFrequency="0.9"
                        numOctaves="2"
                        seed="7"
                      />
                      <feColorMatrix type="saturate" values="0" />
                      <feGaussianBlur stdDeviation="0.7" />
                    </filter>
                  </defs>

                  {/* Atmosphere and core glow */}
                  <g mask="url(#sphereMask)">
                    <circle
                      cx="50"
                      cy="50"
                      r="50"
                      fill="url(#atmosphereWarm)"
                    />
                    <circle
                      cx="50"
                      cy="50"
                      r="49"
                      fill="none"
                      stroke="#ffb20033"
                      strokeWidth="0.5"
                    />
                  </g>

                  {/* Sphere A (equatorial) */}
                  <g className="origin-center animate-orbit-slow">
                    <ellipse
                      cx="50"
                      cy="50"
                      rx="45"
                      ry="45"
                      fill="none"
                      stroke="url(#gridWarm)"
                      strokeWidth="0.6"
                      filter="url(#glowWarm)"
                    />
                    <ellipse
                      cx="50"
                      cy="50"
                      rx="40"
                      ry="20"
                      fill="none"
                      stroke="url(#gridWarm)"
                      strokeWidth="0.5"
                      filter="url(#glowWarm)"
                    />
                    <ellipse
                      cx="50"
                      cy="50"
                      rx="30"
                      ry="15"
                      fill="none"
                      stroke="url(#gridWarm)"
                      strokeWidth="0.4"
                      filter="url(#glowWarm)"
                    />
                    <ellipse
                      cx="50"
                      cy="50"
                      rx="20"
                      ry="8"
                      fill="none"
                      stroke="url(#gridWarm)"
                      strokeWidth="0.3"
                      filter="url(#glowWarm)"
                    />
                    <circle
                      cx="50"
                      cy="50"
                      r="1.5"
                      fill="#ffb200"
                      filter="url(#glowWarm)"
                    />
                  </g>

                  {/* Sphere B (tilted) */}
                  <g
                    className="origin-center animate-orbit-medium"
                    transform="rotate(35 50 50)"
                  >
                    <ellipse
                      cx="50"
                      cy="50"
                      rx="44"
                      ry="26"
                      fill="none"
                      stroke="url(#gridWarm)"
                      strokeWidth="0.5"
                      filter="url(#glowWarm)"
                      opacity="0.7"
                    />
                    <ellipse
                      cx="50"
                      cy="50"
                      rx="34"
                      ry="16"
                      fill="none"
                      stroke="url(#gridWarm)"
                      strokeWidth="0.4"
                      filter="url(#glowWarm)"
                      opacity="0.7"
                    />
                    <ellipse
                      cx="50"
                      cy="50"
                      rx="24"
                      ry="10"
                      fill="none"
                      stroke="url(#gridWarm)"
                      strokeWidth="0.3"
                      filter="url(#glowWarm)"
                      opacity="0.7"
                    />
                  </g>

                  {/* Sphere C (counter-tilted) */}
                  <g
                    className="origin-center animate-orbit-fast"
                    transform="rotate(-30 50 50)"
                  >
                    <ellipse
                      cx="50"
                      cy="50"
                      rx="42"
                      ry="28"
                      fill="none"
                      stroke="url(#gridWarm)"
                      strokeWidth="0.5"
                      filter="url(#glowWarm)"
                      opacity="0.6"
                    />
                    <ellipse
                      cx="50"
                      cy="50"
                      rx="32"
                      ry="18"
                      fill="none"
                      stroke="url(#gridWarm)"
                      strokeWidth="0.4"
                      filter="url(#glowWarm)"
                      opacity="0.6"
                    />
                    <ellipse
                      cx="50"
                      cy="50"
                      rx="22"
                      ry="9"
                      fill="none"
                      stroke="url(#gridWarm)"
                      strokeWidth="0.3"
                      filter="url(#glowWarm)"
                      opacity="0.6"
                    />
                  </g>

                  {/* Day/Night terminator shading */}
                  <g mask="url(#sphereMask)">
                    <rect
                      x="0"
                      y="0"
                      width="100"
                      height="100"
                      fill="url(#dayNight)"
                    >
                      <animateTransform
                        attributeName="transform"
                        type="rotate"
                        from="0 50 50"
                        to="360 50 50"
                        dur="18s"
                        repeatCount="indefinite"
                      />
                    </rect>
                  </g>

                  {/* Auroras */}
                  <g mask="url(#sphereMask)" opacity="0.45">
                    <circle
                      cx="50"
                      cy="8"
                      r="18"
                      fill="url(#auroraNorth)"
                      className="animate-aurora"
                    />
                    <circle
                      cx="50"
                      cy="92"
                      r="18"
                      fill="url(#auroraSouth)"
                      className="animate-aurora-rev"
                    />
                  </g>

                  {/* Additional meridians & parallels for richness */}
                  <g mask="url(#sphereMask)" opacity="0.35">
                    {Array.from({ length: 8 }).map((_, i) => (
                      <g key={`m-${i}`} transform={`rotate(${i * 22.5} 50 50)`}>
                        <ellipse
                          cx="50"
                          cy="50"
                          rx="46"
                          ry="12"
                          fill="none"
                          stroke="#ffb20055"
                          strokeWidth="0.2"
                          className="animate-precess"
                        />
                      </g>
                    ))}
                    {Array.from({ length: 6 }).map((_, i) => (
                      <ellipse
                        key={`p-${i}`}
                        cx="50"
                        cy="50"
                        rx={`${22 + i * 4}`}
                        ry={`${(22 + i * 4) / 2.2}`}
                        fill="none"
                        stroke="#ff940655"
                        strokeWidth="0.2"
                        className="animate-precess-rev"
                      />
                    ))}
                  </g>

                  {/* Continents (warm color) */}
                  <g opacity="0.85">
                    <path
                      d="M18 28 Q 28 22, 38 24 Q 46 27, 50 31 Q 46 36, 41 39 Q 36 41, 31 39 Q 26 36, 22 33 Q 19 30, 18 28 Z"
                      fill="url(#gridWarm)"
                      filter="url(#glowWarm)"
                      stroke="#ffb200"
                      strokeWidth="0.2"
                      strokeOpacity="0.6"
                    />
                    <path
                      d="M33 47 Q 37 50, 41 52 Q 46 57, 48 66 Q 45 71, 41 73 Q 36 76, 32 73 Q 29 69, 27 65 Q 25 60, 27 55 Q 30 50, 33 47 Z"
                      fill="url(#gridWarm)"
                      filter="url(#glowWarm)"
                      stroke="#ff9406"
                      strokeWidth="0.2"
                      strokeOpacity="0.6"
                    />
                    <path
                      d="M56 26 Q 61 23, 66 26 Q 69 29, 71 32 Q 69 36, 66 38 Q 61 41, 56 38 Q 53 35, 51 32 Q 53 28, 56 26 Z"
                      fill="url(#gridWarm)"
                      filter="url(#glowWarm)"
                      stroke="#ffb200"
                      strokeWidth="0.2"
                      strokeOpacity="0.6"
                    />
                    <path
                      d="M56 36 Q 61 39, 66 41 Q 69 46, 70 55 Q 68 64, 65 67 Q 60 70, 56 67 Q 53 64, 51 56 Q 53 46, 56 36 Z"
                      fill="url(#gridWarm)"
                      filter="url(#glowWarm)"
                      stroke="#ff9406"
                      strokeWidth="0.2"
                      strokeOpacity="0.6"
                    />
                    <path
                      d="M71 22 Q 76 20, 82 22 Q 86 27, 88 31 Q 85 35, 81 38 Q 76 40, 71 38 Q 68 35, 66 31 Q 68 26, 71 22 Z"
                      fill="url(#gridWarm)"
                      filter="url(#glowWarm)"
                      stroke="#ffb200"
                      strokeWidth="0.2"
                      strokeOpacity="0.6"
                    />
                    <path
                      d="M76 61 Q 81 59, 86 61 Q 89 66, 90 71 Q 88 75, 85 78 Q 80 80, 76 78 Q 73 75, 71 70 Q 73 65, 76 61 Z"
                      fill="url(#gridWarm)"
                      filter="url(#glowWarm)"
                      stroke="#ff9406"
                      strokeWidth="0.2"
                      strokeOpacity="0.6"
                    />
                  </g>

                  {/* Routes (reduced: keep only one base warm route) */}
                  <g>
                    <path
                      id="r-warm-1"
                      d="M62 55 Q 50 12 12 50"
                      fill="none"
                      stroke="url(#routeWarm)"
                      strokeWidth="0.8"
                      strokeLinecap="round"
                      className="animate-dash-flow"
                      strokeDasharray="6 4"
                      filter="url(#glowWarm)"
                    />
                    <circle
                      cx="62"
                      cy="55"
                      r="1.2"
                      fill="#ffb200"
                      filter="url(#glowWarm)"
                    />
                    <circle
                      cx="12"
                      cy="50"
                      r="1.2"
                      fill="#ff9406"
                      filter="url(#glowWarm)"
                    />
                    <circle r="1.4" fill="#ffffff" filter="url(#glowWarm)">
                      <animateMotion
                        dur="2.6s"
                        repeatCount="indefinite"
                        rotate="auto"
                      >
                        <mpath href="#r-warm-1" />
                      </animateMotion>
                    </circle>
                  </g>

                  {/* Satellites / orbiting beacons following routes */}
                  <g>
                    <circle r="1.1" fill="#ffffff">
                      <animateMotion
                        dur="6s"
                        repeatCount="indefinite"
                        rotate="auto"
                      >
                        <mpath href="#r-warm-1" />
                      </animateMotion>
                    </circle>
                  </g>

                  {/* City lights and movers */}
                  <g mask="url(#sphereMask)" opacity="0.9">
                    {[
                      { x: 62, y: 44 },
                      { x: 58, y: 52 },
                      { x: 41, y: 58 },
                      { x: 35, y: 47 },
                      { x: 72, y: 39 },
                      { x: 27, y: 62 },
                    ].map((c, idx) => (
                      <circle
                        key={idx}
                        cx={c.x}
                        cy={c.y}
                        r="0.6"
                        fill="#ffb200"
                        className="animate-glimmer"
                      />
                    ))}
                  </g>

                  {/* Clouds / bands drifting */}
                  <g mask="url(#sphereMask)" opacity="0.2">
                    <path
                      d="M10 40 C 30 35, 70 45, 90 40"
                      stroke="#ffffff"
                      strokeWidth="1.2"
                      fill="none"
                      className="animate-drift-east"
                      strokeLinecap="round"
                    />
                    <path
                      d="M15 60 C 35 55, 65 65, 85 60"
                      stroke="#ffffff"
                      strokeWidth="1.0"
                      fill="none"
                      className="animate-drift-east-fast"
                      strokeLinecap="round"
                    />
                    <g filter="url(#cloudNoise)">
                      <rect
                        x="-10"
                        y="35"
                        width="120"
                        height="30"
                        fill="#ffffff"
                        opacity="0.05"
                        className="animate-drift-east"
                      />
                    </g>
                  </g>

                  {/* Specular highlight */}
                  <g mask="url(#sphereMask)" opacity="0.35">
                    <circle
                      cx="50"
                      cy="50"
                      r="32"
                      fill="url(#specularWarm)"
                      className="animate-wobble"
                    />
                  </g>

                  {/* Limb darkening to enhance spherical depth */}
                  <g mask="url(#sphereMask)">
                    <circle cx="50" cy="50" r="50" fill="url(#limbDark)" />
                  </g>

                  {/* Data transmission routes (static + dynamic, multi-color, layered) */}
                  <g>
                    <path
                      id="r-cool-1"
                      d="M18 62 Q 32 40, 50 50 Q 68 60, 82 38"
                      fill="none"
                      stroke="url(#routeCool)"
                      strokeWidth="0.7"
                      strokeLinecap="round"
                      className="animate-dash-flow"
                      strokeDasharray="5 3"
                      filter="url(#glowWarm)"
                    />
                    <path
                      id="r-mag-1"
                      d="M22 32 Q 40 28, 58 42 Q 74 52, 86 58"
                      fill="none"
                      stroke="url(#routeMagenta)"
                      strokeWidth="0.7"
                      strokeLinecap="round"
                      className="animate-dash-flow"
                      strokeDasharray="5 3"
                      filter="url(#glowWarm)"
                    />
                    <path
                      id="r-cool-2"
                      d="M12 48 Q 28 62, 46 56 Q 64 50, 88 48"
                      fill="none"
                      stroke="url(#routeCool)"
                      strokeWidth="0.6"
                      strokeLinecap="round"
                      className="animate-dash-flow"
                      strokeDasharray="4 2"
                      filter="url(#glowWarm)"
                      opacity="0.85"
                    />

                    {dynamicRoutes.map((r, i) => (
                      <path
                        key={r.id}
                        id={r.id}
                        d={r.d}
                        fill="none"
                        stroke={r.gradient}
                        strokeWidth="0.6"
                        strokeLinecap="round"
                        className="animate-dash-flow"
                        strokeDasharray="5 3"
                        filter="url(#glowWarm)"
                        opacity={0.65 + (i % 3) * 0.1}
                      />
                    ))}

                    {/* Moving data particles */}
                    <circle r="0.9" fill="#00ffa6">
                      <animateMotion
                        dur="2.2s"
                        repeatCount="indefinite"
                        rotate="auto"
                      >
                        <mpath href="#r-cool-1" />
                      </animateMotion>
                    </circle>
                    <circle r="0.9" fill="#00ccff">
                      <animateMotion
                        dur="2.8s"
                        repeatCount="indefinite"
                        rotate="auto"
                      >
                        <mpath href="#r-cool-1" />
                      </animateMotion>
                    </circle>
                    <circle r="0.9" fill="#ff00aa">
                      <animateMotion
                        dur="2.0s"
                        repeatCount="indefinite"
                        rotate="auto"
                      >
                        <mpath href="#r-mag-1" />
                      </animateMotion>
                    </circle>
                    <circle r="0.9" fill="#ffb200">
                      <animateMotion
                        dur="1.6s"
                        repeatCount="indefinite"
                        rotate="auto"
                      >
                        <mpath href="#r-mag-1" />
                      </animateMotion>
                    </circle>
                    <circle r="0.8" fill="#00ffa6">
                      <animateMotion
                        dur="2.4s"
                        repeatCount="indefinite"
                        rotate="auto"
                      >
                        <mpath href="#r-cool-2" />
                      </animateMotion>
                    </circle>
                    <circle r="0.8" fill="#00ccff">
                      <animateMotion
                        dur="1.9s"
                        repeatCount="indefinite"
                        rotate="auto"
                      >
                        <mpath href="#r-cool-2" />
                      </animateMotion>
                    </circle>

                    {dynamicRoutes.map((r, i) => (
                      <circle
                        key={`dp-${r.id}`}
                        r="0.8"
                        fill={i % 2 === 0 ? "#00ffa6" : "#ff00aa"}
                      >
                        <animateMotion
                          dur={`${r.speed}s`}
                          repeatCount="indefinite"
                          rotate="auto"
                        >
                          <mpath href={`#${r.id}`} />
                        </animateMotion>
                      </circle>
                    ))}

                    {/* Surface nodes */}
                    {[
                      { x: 32, y: 40, c: "#00ffa6" },
                      { x: 58, y: 42, c: "#ff00aa" },
                      { x: 46, y: 56, c: "#00ccff" },
                      { x: 68, y: 60, c: "#ffb200" },
                    ].map((n, i) => (
                      <circle
                        key={`dn-${i}`}
                        cx={n.x}
                        cy={n.y}
                        r="1.1"
                        fill={n.c}
                        className="animate-pulse-node cursor-pointer"
                        onMouseEnter={() => setHoveredNodeIndex(i)}
                        onMouseLeave={() => setHoveredNodeIndex(null)}
                      />
                    ))}
                  </g>

                  {/* Limb darkening to enhance spherical depth */}
                  <g mask="url(#sphereMask)">
                    <circle cx="50" cy="50" r="50" fill="url(#limbDark)" />
                  </g>

                  {/* Data transmission routes (multi-color, layered) */}
                  <g>
                    <path
                      id="r-cool-1"
                      d="M18 62 Q 32 40, 50 50 Q 68 60, 82 38"
                      fill="none"
                      stroke="url(#routeCool)"
                      strokeWidth="0.7"
                      strokeLinecap="round"
                      className="animate-dash-flow"
                      strokeDasharray="5 3"
                      filter="url(#glowWarm)"
                    />
                    <path
                      id="r-mag-1"
                      d="M22 32 Q 40 28, 58 42 Q 74 52, 86 58"
                      fill="none"
                      stroke="url(#routeMagenta)"
                      strokeWidth="0.7"
                      strokeLinecap="round"
                      className="animate-dash-flow"
                      strokeDasharray="5 3"
                      filter="url(#glowWarm)"
                    />
                    <path
                      id="r-cool-2"
                      d="M12 48 Q 28 62, 46 56 Q 64 50, 88 48"
                      fill="none"
                      stroke="url(#routeCool)"
                      strokeWidth="0.6"
                      strokeLinecap="round"
                      className="animate-dash-flow"
                      strokeDasharray="4 2"
                      filter="url(#glowWarm)"
                      opacity="0.85"
                    />

                    {/* Moving data particles */}
                    <circle r="0.9" fill="#00ffa6">
                      <animateMotion
                        dur="2.2s"
                        repeatCount="indefinite"
                        rotate="auto"
                      >
                        <mpath href="#r-cool-1" />
                      </animateMotion>
                    </circle>
                    <circle r="0.9" fill="#00ccff">
                      <animateMotion
                        dur="2.8s"
                        repeatCount="indefinite"
                        rotate="auto"
                      >
                        <mpath href="#r-cool-1" />
                      </animateMotion>
                    </circle>
                    <circle r="0.9" fill="#ff00aa">
                      <animateMotion
                        dur="2.0s"
                        repeatCount="indefinite"
                        rotate="auto"
                      >
                        <mpath href="#r-mag-1" />
                      </animateMotion>
                    </circle>
                    <circle r="0.9" fill="#ffb200">
                      <animateMotion
                        dur="1.6s"
                        repeatCount="indefinite"
                        rotate="auto"
                      >
                        <mpath href="#r-mag-1" />
                      </animateMotion>
                    </circle>
                    <circle r="0.8" fill="#00ffa6">
                      <animateMotion
                        dur="2.4s"
                        repeatCount="indefinite"
                        rotate="auto"
                      >
                        <mpath href="#r-cool-2" />
                      </animateMotion>
                    </circle>
                    <circle r="0.8" fill="#00ccff">
                      <animateMotion
                        dur="1.9s"
                        repeatCount="indefinite"
                        rotate="auto"
                      >
                        <mpath href="#r-cool-2" />
                      </animateMotion>
                    </circle>

                    {/* Surface nodes */}
                    {[
                      { x: 32, y: 40, c: "#00ffa6" },
                      { x: 58, y: 42, c: "#ff00aa" },
                      { x: 46, y: 56, c: "#00ccff" },
                      { x: 68, y: 60, c: "#ffb200" },
                    ].map((n, i) => (
                      <circle
                        key={`dn-${i}`}
                        cx={n.x}
                        cy={n.y}
                        r="1.1"
                        fill={n.c}
                        className="animate-pulse-node"
                      />
                    ))}
                  </g>
                </svg>

                <div className="absolute inset-0 overflow-hidden rounded-full">
                  <div className="absolute left-0 right-0 h-12 bg-gradient-to-b from-transparent via-[#ffb200]/25 to-transparent animate-scan-vert" />
                  <div className="absolute top-0 bottom-0 w-12 bg-gradient-to-r from-transparent via-[#ff9406]/20 to-transparent animate-scan-horz" />
                </div>
              </div>
            </div>

            {/* Logs */}
            <div className="flex flex-col bg-gradient-to-br from-[#0b0b0b]/90 via-[#0a0a0a]/80 to-[#0b0b0b]/90 border-t border-white/20 overflow-hidden min-h-0">
              <div className="px-6 py-3 text-sm font-mono tracking-widest text-[#ffb200] bg-gradient-to-r from-white/10 via-white/5 to-white/10 border-b border-white/20 uppercase font-bold flex items-center gap-2">
                <div className="w-2 h-2 bg-[#ffb200] rounded-full animate-pulse" />
                <span className="text-[#ffb200]">Terminal · realtime logs</span>
                <div className="ml-auto flex gap-1">
                  <div className="w-2 h-2 bg-[#ff9406] rounded-full animate-pulse" />
                  <div
                    className="w-2 h-2 bg-[#ffb200] rounded-full animate-pulse"
                    style={{ animationDelay: "0.3s" }}
                  />
                  <div
                    className="w-2 h-2 bg-[#ff9406] rounded-full animate-pulse"
                    style={{ animationDelay: "0.6s" }}
                  />
                </div>
              </div>
              <div
                ref={logWrapRef}
                className="flex-1 min-h-0 overflow-y-auto px-4 md:px-6 py-3 md:py-4 font-mono text-xs md:text-sm text-[#e2e8f0] bg-black/20"
              >
                {logs.map((line, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 md:gap-4 mb-2 group hover:bg-white/5 rounded px-2 py-1 transition-colors border-l-2 border-transparent hover:border-[#ffb200]/50"
                  >
                    <div className="flex-shrink-0 w-6 md:w-8 text-right">
                      <span className="text-[#ff9406] font-bold text-[10px] md:text-xs opacity-70 group-hover:opacity-100 transition-opacity">
                        {(idx + 1).toString().padStart(2, "0")}
                      </span>
                    </div>
                    <span className="text-[#ffb200] font-bold">$</span>
                    <span className="whitespace-pre-wrap opacity-90 group-hover:opacity-100 transition-opacity flex-1">
                      {line}
                    </span>
                    <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity">
                      <span className="text-[#ffb200] text-[10px] md:text-xs font-bold">
                        ✓
                      </span>
                    </div>
                  </div>
                ))}
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-6 md:w-8 text-right">
                    <span className="text-[#ff9406] font-bold text-[10px] md:text-xs opacity-70">
                      {(logs.length + 1).toString().padStart(2, "0")}
                    </span>
                  </div>
                  <span className="text-[#ffb200] font-bold">$</span>
                  <span className="inline-block w-2 md:w-3 h-5 bg-gradient-to-b from-[#ffb200] to-[#ff6600] rounded animate-caret" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Keyframes */}
      <style jsx>{`
        .animate-hue {
          filter: hue-rotate(0deg);
          animation: hueShift 18s linear infinite;
        }
        @keyframes spin {
          to {
            transform: rotate(360deg);
          }
        }
        @keyframes spinReverse {
          to {
            transform: rotate(-360deg);
          }
        }
        @keyframes scanVert {
          0% {
            top: -20%;
          }
          100% {
            top: 120%;
          }
        }
        @keyframes scanHorz {
          0% {
            left: -20%;
          }
          100% {
            left: 120%;
          }
        }
        @keyframes caret {
          0%,
          49% {
            opacity: 1;
          }
          50%,
          100% {
            opacity: 0;
          }
        }
        @keyframes dashFlow {
          to {
            stroke-dashoffset: -20;
          }
        }
        @keyframes shine {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) scale(1);
          }
          50% {
            transform: translateY(-10px) scale(1.1);
          }
        }
        .animate-scan-vert {
          animation: scanVert 2.4s linear infinite;
        }
        .animate-scan-horz {
          animation: scanHorz 3.2s linear infinite;
        }
        .animate-orbit-medium {
          animation: spin 1.6s linear infinite;
          transform-origin: center center;
        }
        .animate-orbit-fast {
          animation: spinReverse 1.2s linear infinite;
          transform-origin: center center;
        }
        .animate-precess {
          animation: spin 8s linear infinite;
          transform-origin: center center;
        }
        .animate-precess-rev {
          animation: spinReverse 10s linear infinite;
          transform-origin: center center;
        }
        .animate-caret {
          animation: caret 1s step-end infinite;
        }
        .animate-dash-flow {
          animation: dashFlow 1.2s linear infinite;
        }
        .animate-shine {
          animation: shine 2s ease-in-out infinite;
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        .animate-glimmer {
          animation: glimmer 1.8s ease-in-out infinite;
        }
        .animate-drift-east {
          animation: driftEast 9s linear infinite;
        }
        .animate-drift-east-fast {
          animation: driftEast 6s linear infinite;
        }
        .animate-wobble {
          animation: wobble 4s ease-in-out infinite;
        }
        .animate-aurora {
          animation: aurora 5s ease-in-out infinite;
        }
        .animate-aurora-rev {
          animation: aurora 7s ease-in-out infinite reverse;
        }
        .animate-pulse-node {
          animation: nodePulse 1.6s ease-in-out infinite;
          filter: drop-shadow(0 0 4px currentColor);
        }
        @keyframes glimmer {
          0%,
          100% {
            opacity: 0.4;
            filter: drop-shadow(0 0 2px #ffb200aa);
          }
          50% {
            opacity: 1;
            filter: drop-shadow(0 0 6px #ffb200ff);
          }
        }
        @keyframes driftEast {
          0% {
            transform: translateX(-10%);
            opacity: 0.2;
          }
          10% {
            opacity: 0.3;
          }
          90% {
            opacity: 0.3;
          }
          100% {
            transform: translateX(10%);
            opacity: 0.2;
          }
        }
        @keyframes wobble {
          0%,
          100% {
            transform: translate(0px, 0px) scale(1);
          }
          50% {
            transform: translate(-1px, 1px) scale(1.02);
          }
        }
        @keyframes aurora {
          0%,
          100% {
            opacity: 0.25;
            transform: scale(1) translateY(0px);
          }
          50% {
            opacity: 0.6;
            transform: scale(1.05) translateY(-1px);
          }
        }
        @keyframes hueShift {
          0% {
            filter: hue-rotate(0deg) saturate(1);
          }
          50% {
            filter: hue-rotate(25deg) saturate(1.15);
          }
          100% {
            filter: hue-rotate(0deg) saturate(1);
          }
        }
        @keyframes nodePulse {
          0%,
          100% {
            transform: scale(1);
            opacity: 0.8;
          }
          50% {
            transform: scale(1.25);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
}

export default SystemInitializationOverlay;
