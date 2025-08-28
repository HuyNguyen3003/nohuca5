'use client';

import { useEffect, useRef, useState } from 'react';

interface CyberChartProps {
  percentage: number;
  width?: number;
  height?: number;
  duration?: number;
  color?: string;
  showGrid?: boolean;
  showLabels?: boolean;
}

export default function CyberChart({
  percentage,
  width = 200,
  height = 80,
  duration = 3000,
  color = '#ff6600',
  showGrid = true,
  showLabels = true,
}: CyberChartProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const [currentPercentage, setCurrentPercentage] = useState(0);

  // Generate random data points based on percentage
  const generateDataPoints = (targetPercentage: number, points: number = 50) => {
    const data: number[] = [];
    let currentValue = Math.random() * 20; // Start with random low value
    
    for (let i = 0; i < points; i++) {
      // Add some randomness while trending towards target
      const progress = i / points;
      const targetProgress = targetPercentage / 100;
      
      // Create trend towards target with some noise
      const trend = targetProgress * progress;
      const noise = (Math.random() - 0.5) * 0.3;
      const volatility = Math.sin(i * 0.5) * 0.1;
      
      currentValue = Math.max(0, Math.min(1, trend + noise + volatility));
      data.push(currentValue);
    }
    
    return data;
  };

  // Animate the chart
  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    canvas.width = width;
    canvas.height = height;

    // Clear canvas
    ctx.clearRect(0, 0, width, height);

    // Generate data
    const dataPoints = generateDataPoints(percentage);
    const pointCount = dataPoints.length;

    // Animation variables
    let animationFrame: number;
    let startTime = Date.now();
    let currentIndex = 0;

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Calculate how many points to show
      currentIndex = Math.floor(progress * pointCount);
      
      // Clear canvas
      ctx.clearRect(0, 0, width, height);

      // Draw grid
      if (showGrid) {
        drawGrid(ctx, width, height);
      }

      // Draw chart
      drawChart(ctx, dataPoints.slice(0, currentIndex), width, height, color);

      // Continue animation
      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        setIsAnimating(false);
      }
    };

    setIsAnimating(true);
    animate();

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [percentage, width, height, duration, color, showGrid]);

  // Draw grid
  const drawGrid = (ctx: CanvasRenderingContext2D, width: number, height: number) => {
    ctx.strokeStyle = 'rgba(255, 102, 0, 0.1)';
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
  };

  // Draw chart
  const drawChart = (
    ctx: CanvasRenderingContext2D,
    data: number[],
    width: number,
    height: number,
    color: string
  ) => {
    if (data.length === 0) return;

    const pointWidth = width / (data.length - 1);
    const points: { x: number; y: number }[] = [];

    // Calculate points
    data.forEach((value, index) => {
      const x = index * pointWidth;
      const y = height - (value * height);
      points.push({ x, y });
    });

    // Draw filled area
    ctx.fillStyle = `${color}40`;
    ctx.beginPath();
    ctx.moveTo(0, height);
    
    points.forEach((point) => {
      ctx.lineTo(point.x, point.y);
    });
    
    ctx.lineTo(width, height);
    ctx.closePath();
    ctx.fill();

    // Draw main line
    ctx.strokeStyle = color;
    ctx.lineWidth = 2;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    
    ctx.beginPath();
    points.forEach((point, index) => {
      if (index === 0) {
        ctx.moveTo(point.x, point.y);
      } else {
        ctx.lineTo(point.x, point.y);
      }
    });
    ctx.stroke();

    // Add glow effect
    ctx.shadowColor = color;
    ctx.shadowBlur = 8;
    ctx.stroke();
    ctx.shadowBlur = 0;

    // Draw data points
    ctx.fillStyle = color;
    points.forEach((point) => {
      ctx.beginPath();
      ctx.arc(point.x, point.y, 2, 0, Math.PI * 2);
      ctx.fill();
    });
  };

  return (
    <div className="relative">
      <canvas
        ref={canvasRef}
        className="w-full h-full"
        style={{ width, height }}
      />
      
      {/* Loading indicator */}
      {isAnimating && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/20 rounded">
          <div className="w-4 h-4 border-2 border-orange-400 border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}

      {/* Labels */}
      {showLabels && (
        <>
          <div className="absolute bottom-0 left-0 px-2 py-1 bg-orange-600/80 text-white text-xs font-mono rounded">
            Thông tin
          </div>
          <div className="absolute bottom-0 right-0 px-2 py-1 bg-orange-600/80 text-white text-xs font-mono rounded">
            {new Date().toLocaleDateString('vi-VN')}
          </div>
        </>
      )}
    </div>
  );
}
