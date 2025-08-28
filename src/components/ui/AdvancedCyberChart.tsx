"use client";

import { useEffect, useRef, useState, useCallback } from "react";

interface AdvancedCyberChartProps {
  percentage: number;
  width?: number;
  height?: number;
  duration?: number;
  primaryColor?: string;
  secondaryColor?: string;
  showGrid?: boolean;
  showLabels?: boolean;
  showParticles?: boolean;
  animationType?: "linear" | "ease" | "bounce" | "elastic";
  dataPoints?: number;
  volatility?: number;
}

export default function AdvancedCyberChart({
  percentage,
  width = 240,
  height = 100,
  duration = 4000,
  primaryColor = "#ff6600",
  secondaryColor = "#ff4400",
  showGrid = true,
  showLabels = true,
  showParticles = true,
  dataPoints = 60,
  volatility = 0.3,
}: AdvancedCyberChartProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isAnimating, setIsAnimating] = useState(false);
  // const [animationProgress, setAnimationProgress] = useState(0);
  // Rolling data buffer for live, stock-like movement
  const dataRef = useRef<number[]>([]);
  const particlesRef = useRef<
    {
      x: number;
      y: number;
      vx: number;
      vy: number;
      life: number;
      maxLife: number;
    }[]
  >([]);

  // Easing removed for live mode

  // Generate sophisticated data points
  const generateDataPoints = useCallback(
    (targetPercentage: number) => {
      const data: number[] = [];
      let currentValue = Math.random() * 0.1;

      for (let i = 0; i < dataPoints; i++) {
        const progress = i / dataPoints;
        const targetProgress = targetPercentage / 100;

        // Create multiple trend components
        const mainTrend = targetProgress * Math.pow(progress, 0.8);
        const secondaryTrend = Math.sin(progress * Math.PI * 2) * 0.05;
        const noise = (Math.random() - 0.5) * volatility;
        const volatilityWave =
          Math.sin(progress * Math.PI * 4) * volatility * 0.2;

        // Combine all components
        currentValue = Math.max(
          0,
          Math.min(1, mainTrend + secondaryTrend + noise + volatilityWave)
        );
        data.push(currentValue);
      }

      return data;
    },
    [dataPoints, volatility]
  );

  // Generate particles
  const generateParticles = useCallback((x: number, y: number) => {
    const particles = [];
    for (let i = 0; i < 5; i++) {
      particles.push({
        x: x + (Math.random() - 0.5) * 20,
        y: y + (Math.random() - 0.5) * 20,
        vx: (Math.random() - 0.5) * 2,
        vy: (Math.random() - 0.5) * 2,
        life: 1,
        maxLife: Math.random() * 30 + 20,
      });
    }
    return particles;
  }, []);

  // Update particles
  const updateParticles = useCallback(() => {
    particlesRef.current = particlesRef.current
      .map((particle) => ({
        ...particle,
        x: particle.x + particle.vx,
        y: particle.y + particle.vy,
        life: particle.life - 1,
      }))
      .filter((particle) => particle.life > 0);
  }, []);

  // Draw enhanced grid
  const drawGrid = useCallback(
    (ctx: CanvasRenderingContext2D, width: number, height: number) => {
      // Main grid
      ctx.strokeStyle = `${primaryColor}20`;
      ctx.lineWidth = 1;

      // Vertical lines
      for (let i = 0; i <= 4; i++) {
        const x = (width / 4) * i;
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }

      // Horizontal lines
      for (let i = 0; i <= 3; i++) {
        const y = (height / 3) * i;
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // Sub-grid
      ctx.strokeStyle = `${primaryColor}10`;
      ctx.lineWidth = 0.5;

      for (let i = 0; i <= 8; i++) {
        const x = (width / 8) * i;
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }

      for (let i = 0; i <= 6; i++) {
        const y = (height / 6) * i;
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }
    },
    [primaryColor]
  );

  // Draw enhanced chart
  const drawChart = useCallback(
    (
      ctx: CanvasRenderingContext2D,
      data: number[],
      width: number,
      height: number
    ) => {
      if (data.length === 0) return;

      const pointWidth = width / (data.length - 1);
      const points: { x: number; y: number }[] = [];

      // Calculate points (use current values directly for live movement)
      data.forEach((value, index) => {
        const x = index * pointWidth;
        const y = height - value * height;
        points.push({ x, y });
      });

      // Draw filled area with gradient
      const gradient = ctx.createLinearGradient(0, 0, 0, height);
      gradient.addColorStop(0, `${primaryColor}40`);
      gradient.addColorStop(1, `${secondaryColor}20`);

      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.moveTo(0, height);

      points.forEach((point) => {
        ctx.lineTo(point.x, point.y);
      });

      ctx.lineTo(width, height);
      ctx.closePath();
      ctx.fill();

      // Draw main line with enhanced styling
      ctx.strokeStyle = primaryColor;
      ctx.lineWidth = 3;
      ctx.lineCap = "round";
      ctx.lineJoin = "round";

      // Add glow effect
      ctx.shadowColor = primaryColor;
      ctx.shadowBlur = 15;

      ctx.beginPath();
      points.forEach((point, index) => {
        if (index === 0) {
          ctx.moveTo(point.x, point.y);
        } else {
          ctx.lineTo(point.x, point.y);
        }
      });
      ctx.stroke();

      // Reset shadow for data points
      ctx.shadowBlur = 0;

      // Draw data points with varying sizes
      points.forEach((point, index) => {
        const size = index === points.length - 1 ? 4 : 2;
        const alpha = index === points.length - 1 ? 1 : 0.7;

        ctx.fillStyle = `${primaryColor}${Math.floor(alpha * 255)
          .toString(16)
          .padStart(2, "0")}`;
        ctx.beginPath();
        ctx.arc(point.x, point.y, size, 0, Math.PI * 2);
        ctx.fill();
      });

      // Add highlight on current point
      if (points.length > 0) {
        const currentPoint = points[points.length - 1];
        ctx.fillStyle = primaryColor;
        ctx.beginPath();
        ctx.arc(currentPoint.x, currentPoint.y, 6, 0, Math.PI * 2);
        ctx.fill();

        // Add outer ring
        ctx.strokeStyle = primaryColor;
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.arc(currentPoint.x, currentPoint.y, 10, 0, Math.PI * 2);
        ctx.stroke();
      }
    },
    [primaryColor, secondaryColor]
  );

  // Draw particles
  const drawParticles = useCallback(
    (ctx: CanvasRenderingContext2D) => {
      particlesRef.current.forEach((particle) => {
        const alpha = particle.life / particle.maxLife;
        ctx.fillStyle = `${primaryColor}${Math.floor(alpha * 255)
          .toString(16)
          .padStart(2, "0")}`;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, 2, 0, Math.PI * 2);
        ctx.fill();
      });
    },
    [primaryColor]
  );

  // Main animation loop (live stock-like movement)
  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size
    canvas.width = width;
    canvas.height = height;

    // Initialize rolling buffer
    dataRef.current = generateDataPoints(percentage);

    let animationFrame: number;
    let lastUpdate = performance.now();
    const intervalMs = Math.max(20, Math.min(120, Math.floor(duration / 40))); // speed derived from duration

    const animate = (now: number) => {
      const dt = now - lastUpdate;

      // Advance data at fixed cadence for smooth movement
      if (dt >= intervalMs) {
        lastUpdate = now;

        const buffer = dataRef.current;
        const last = buffer[buffer.length - 1] ?? percentage / 100;
        const target = percentage / 100;

        // Drift towards target with multi-wave oscillation and noise
        const timeFactor = now * 0.001;
        const drift = (target - last) * 0.06; // gentle pull towards target
        const wave =
          0.06 * Math.sin(timeFactor * 2.1) +
          0.04 * Math.sin(timeFactor * 1.1 + 1.3) +
          0.02 * Math.sin(timeFactor * 3.7 + 0.7);
        const noise = (Math.random() - 0.5) * volatility * 0.12;
        let next = last + drift + wave + noise;
        next = Math.max(0.05, Math.min(0.98, next));

        // Rolling window: push new, drop oldest
        buffer.push(next);
        if (buffer.length > dataPoints) buffer.shift();
      }

      // Clear canvas
      ctx.clearRect(0, 0, width, height);

      // Draw grid
      if (showGrid) {
        drawGrid(ctx, width, height);
      }

      // Draw current chart state
      drawChart(ctx, dataRef.current, width, height);

      // Update and draw particles near latest point
      if (showParticles && dataRef.current.length > 0) {
        updateParticles();
        drawParticles(ctx);

        // Emit particles around the latest point occasionally
        if (Math.random() < 0.35) {
          const x = width - width / (dataRef.current.length - 1);
          const y =
            height - dataRef.current[dataRef.current.length - 1] * height;
          const newParticles = generateParticles(x, y);
          particlesRef.current.push(...newParticles);
        }
      }

      animationFrame = requestAnimationFrame(animate);
    };

    setIsAnimating(true);
    animationFrame = requestAnimationFrame(animate);

    return () => {
      if (animationFrame) cancelAnimationFrame(animationFrame);
    };
  }, [
    percentage,
    width,
    height,
    duration,
    primaryColor,
    secondaryColor,
    showGrid,
    showParticles,
    volatility,
    dataPoints,
    generateDataPoints,
    drawGrid,
    drawChart,
    drawParticles,
    updateParticles,
    generateParticles,
  ]);

  return (
    <div className="relative">
      <canvas
        ref={canvasRef}
        className="w-full h-full"
        style={{ width, height }}
      />

      {/* Enhanced loading indicator */}
      {isAnimating && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/30 rounded backdrop-blur-sm">
          <div className="flex flex-col items-center space-y-2">
            <div className="w-6 h-6 border-2 border-orange-400 border-t-transparent rounded-full animate-spin"></div>
            <div className="text-xs text-orange-400 font-mono">LIVE</div>
          </div>
        </div>
      )}

      {/* Enhanced labels */}
      {showLabels && (
        <>
          <div className="absolute bottom-0 left-0 px-3 py-1 bg-gradient-to-r from-orange-600/90 to-orange-500/90 text-white text-xs font-mono rounded shadow-lg">
            LIVE
          </div>
          <div className="absolute bottom-0 right-0 px-3 py-1 bg-gradient-to-r from-orange-500/90 to-orange-600/90 text-white text-xs font-mono rounded shadow-lg">
            Date: {new Date().toLocaleDateString("vi-VN")}
          </div>
        </>
      )}

      {/* Progress indicator with spinning circle */}
      <div className="absolute top-2 right-2 px-2 py-1 bg-black/50 text-orange-400 text-xs font-mono rounded flex items-center gap-2">
        <div className="w-3 h-3 border-2 border-orange-400 border-t-transparent rounded-full animate-spin" />
        <span>{percentage}%</span>
      </div>
    </div>
  );
}
