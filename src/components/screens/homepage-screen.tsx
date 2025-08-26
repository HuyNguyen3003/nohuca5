/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { useAuth } from "../../hooks/useAuth";
import { PointsRequiredModal } from "../ui/points-required-modal";

interface HomepageScreenProps {
  onProviderSelect?: (providerId: string) => void;
  onLogin?: () => void;
  onRegister?: () => void;
}

// Provider data with exact percentages from Figma
const providerData = [
  {
    id: "f168",
    name: "F168",
    percentage: 98,
    image: "/assets/homepage/provider1.png",
    color: "#00ff41",
  },
  {
    id: "qq88",
    name: "QQ88",
    percentage: 88,
    image: "/assets/homepage/provider2.png",
    color: "#ff0040",
  },
  {
    id: "jun88",
    name: "Jun88",
    percentage: 90,
    image: "/assets/homepage/provider3.png",
    color: "#00ccff",
  },
  {
    id: "ww88",
    name: "WW88",
    percentage: 80,
    image: "/assets/homepage/provider4.png",
    color: "#ffb200",
  },
  {
    id: "mb66",
    name: "MB66",
    percentage: 72,
    image: "/assets/homepage/provider5.png",
    color: "#ff6600",
  },
  {
    id: "hi88",
    name: "Hi88",
    percentage: 72,
    image: "/assets/homepage/provider6.png",
    color: "#9900ff",
  },
  {
    id: "bet88",
    name: "BET88",
    percentage: 68,
    image: "/assets/homepage/provider7.png",
    color: "#00ff88",
  },
  {
    id: "ae88",
    name: "AE88",
    percentage: 84,
    image: "/assets/homepage/provider8.png",
    color: "#ff3366",
  },
  {
    id: "rr88",
    name: "RR88",
    percentage: 88,
    image: "/assets/homepage/provider9.png",
    color: "#ffff00",
  },
  {
    id: "u888",
    name: "U888",
    percentage: 82,
    image: "/assets/homepage/provider10.png",
    color: "#00ffcc",
  },
];

// Glitch text effect component
const GlitchText = ({ children, className = "" }: any) => {
  const [glitch, setGlitch] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const interval = setInterval(() => {
      setGlitch(true);
      setTimeout(() => setGlitch(false), 100);
    }, Math.random() * 3000 + 2000);

    return () => clearInterval(interval);
  }, [mounted]);

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
};

// Animated percentage counter with fluctuation
const AnimatedPercentage = ({
  targetPercentage,
  isLoaded,
  color,
  className = "",
}: {
  targetPercentage: number;
  isLoaded: boolean;
  color: string;
  className?: string;
}) => {
  const [currentPercentage, setCurrentPercentage] = useState(0);
  const [displayPercentage, setDisplayPercentage] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!isLoaded || !mounted) return;

    const duration = 2500; // Fixed duration instead of random
    const startTime = Date.now();

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Easing function for smooth animation
      const easeOutCubic = 1 - Math.pow(1 - progress, 3);
      const current = Math.floor(easeOutCubic * targetPercentage);

      setCurrentPercentage(current);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isLoaded, targetPercentage, mounted]);

  // Add fluctuation effect when loaded
  useEffect(() => {
    if (!mounted) return;

    if (currentPercentage >= targetPercentage) {
      const fluctuationInterval = setInterval(() => {
        // Fixed fluctuation pattern instead of random
        const time = Date.now() / 1000;
        const fluctuation = Math.sin(time * 2) * 0.3; // Sine wave fluctuation
        const newValue = targetPercentage + fluctuation;
        setDisplayPercentage(
          Math.max(0, Math.min(100, Number(newValue.toFixed(1))))
        );
      }, 300); // Fixed interval

      return () => clearInterval(fluctuationInterval);
    } else {
      setDisplayPercentage(currentPercentage);
    }
  }, [currentPercentage, targetPercentage, mounted]);

  return (
    <GlitchText className={className}>
      <span
        className="font-['Big_Shoulders_Display'] font-extrabold text-2xl md:text-3xl lg:text-4xl tracking-wider"
        style={{
          background: `linear-gradient(45deg, ${color}, #ffb200)`,
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          textShadow: `0 0 20px ${color}80`,
          filter: `drop-shadow(0 0 10px ${color}60)`,
        }}
      >
        {displayPercentage}%
      </span>
    </GlitchText>
  );
};

// Circular Progress Ring Component
const CircularProgress = ({
  percentage,
  isAnimated = false,
  color = "#ffb200",
  size = 200,
  strokeWidth = 8,
}: {
  percentage: number;
  isAnimated?: boolean;
  color?: string;
  size?: number;
  strokeWidth?: number;
}) => {
  const [animatedPercentage, setAnimatedPercentage] = useState(0);
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const strokeDasharray = circumference;

  useEffect(() => {
    if (isAnimated) {
      const duration = 1500;
      const startTime = Date.now();

      const animate = () => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);

        const easeOutCubic = 1 - Math.pow(1 - progress, 3);
        const current = easeOutCubic * percentage;

        setAnimatedPercentage(current);

        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };

      requestAnimationFrame(animate);
    }
  }, [percentage, isAnimated]);

  const currentPercentage = isAnimated ? animatedPercentage : percentage;
  const strokeDashoffset =
    circumference - (currentPercentage / 100) * circumference;

  return (
    <div className="relative" style={{ width: size, height: size }}>
      <svg
        width={size}
        height={size}
        className="transform -rotate-90"
        style={{ filter: `drop-shadow(0 0 8px ${color}60)` }}
      >
        {/* Background circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="rgba(255, 255, 255, 0.1)"
          strokeWidth={strokeWidth}
          fill="none"
        />

        {/* Animated progress circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke={color}
          strokeWidth={strokeWidth}
          fill="none"
          strokeDasharray={strokeDasharray}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          className="transition-all duration-500 ease-out"
          style={{
            filter: `drop-shadow(0 0 5px ${color})`,
          }}
        />

        {/* Glow effect */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke={color}
          strokeWidth={strokeWidth / 2}
          fill="none"
          strokeDasharray={strokeDasharray}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          className="opacity-50 animate-pulse"
          style={{
            filter: `blur(2px)`,
          }}
        />
      </svg>

      {/* Rotating gradient overlay for cyberpunk effect */}
      <div
        className="absolute inset-0 rounded-full animate-spin opacity-30"
        style={{
          background: `conic-gradient(from 0deg, transparent 0%, ${color}40 10%, transparent 20%, ${color}60 30%, transparent 40%)`,
          animationDuration: "3s",
        }}
      />
    </div>
  );
};

// Matrix rain background effect
const MatrixRain = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Thêm nhiều ký tự hơn để đa dạng
    const chars =
      "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()_+-=[]{}|;:,.<>?".split(
        ""
      );
    const fontSize = 10; // Giảm kích thước để dày đặc hơn
    const columns = Math.floor(canvas.width / fontSize);
    const drops: number[] = [];
    const speeds: number[] = [];
    const colors: string[] = [];

    // Khởi tạo mỗi cột với tốc độ và màu sắc khác nhau
    for (let i = 0; i < columns; i++) {
      drops[i] = Math.random() * -100; // Bắt đầu ở vị trí ngẫu nhiên
      speeds[i] = Math.random() * 0.3 + 0.4; // Tốc độ chậm hơn từ 0.4 đến 0.7

      // Tạo màu ngẫu nhiên với gradient cyberpunk
      const colorChoice = Math.random();
      if (colorChoice < 0.4) {
        colors[i] = "#00ff41"; // Matrix green
      } else if (colorChoice < 0.7) {
        colors[i] = "#ffb200"; // Gold
      } else if (colorChoice < 0.85) {
        colors[i] = "#00ccff"; // Cyan
      } else {
        colors[i] = "#ffffff"; // White
      }
    }

    function draw() {
      if (!ctx || !canvas) return;

      // Giảm fade out để ký tự tồn tại lâu hơn và đậm hơn
      ctx.fillStyle = "rgba(0, 0, 0, 0.04)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Font đậm hơn với weight
      ctx.font = `bold ${fontSize}px 'Courier New', monospace`;

      for (let i = 0; i < drops.length; i++) {
        // Chọn ký tự ngẫu nhiên
        const charIndex = Math.floor((Date.now() / 100 + i * 7) % chars.length);
        const text = chars[charIndex];

        // Thiết lập màu với gradient alpha
        const y = drops[i] * fontSize;
        const alpha = Math.max(0.3, 1 - (y / canvas.height) * 0.6); // Tăng alpha minimum

        // Vẽ outline đậm trước
        ctx.strokeStyle =
          colors[i] +
          Math.floor(alpha * 255)
            .toString(16)
            .padStart(2, "0");
        ctx.lineWidth = 1.5;
        ctx.strokeText(text, i * fontSize, y);

        // Tạo hiệu ứng glow mạnh hơn
        ctx.shadowColor = colors[i];
        ctx.shadowBlur = 12;
        ctx.fillStyle =
          colors[i] +
          Math.floor(alpha * 255)
            .toString(16)
            .padStart(2, "0");

        ctx.fillText(text, i * fontSize, y);

        // Vẽ thêm lớp glow effect thứ 2 đậm hơn
        ctx.shadowBlur = 20;
        ctx.fillStyle =
          colors[i] +
          Math.floor(alpha * 180)
            .toString(16)
            .padStart(2, "0");
        ctx.fillText(text, i * fontSize, y);

        // Vẽ thêm lớp glow effect thứ 3 cho độ đậm
        ctx.shadowBlur = 25;
        ctx.fillStyle =
          colors[i] +
          Math.floor(alpha * 100)
            .toString(16)
            .padStart(2, "0");
        ctx.fillText(text, i * fontSize, y);

        // Reset shadow
        ctx.shadowBlur = 0;

        // Di chuyển drop xuống với tốc độ riêng
        drops[i] += speeds[i];

        // Reset khi ra khỏi màn hình với xác suất ngẫu nhiên
        if (drops[i] * fontSize > canvas.height + 50) {
          if (Math.random() > 0.96) {
            // Tăng tỷ lệ reset để dày đặc hơn (4% chance thay vì 2.5%)
            drops[i] = Math.random() * -50; // Reset về trên với vị trí ngẫu nhiên
            speeds[i] = Math.random() * 0.3 + 0.4; // Giảm tốc độ để ký tự tồn tại lâu hơn

            // Đổi màu ngẫu nhiên
            const colorChoice = Math.random();
            if (colorChoice < 0.4) {
              colors[i] = "#00ff41";
            } else if (colorChoice < 0.7) {
              colors[i] = "#ffb200";
            } else if (colorChoice < 0.85) {
              colors[i] = "#00ccff";
            } else {
              colors[i] = "#ffffff";
            }
          }
        }
      }
    }

    // Tăng tốc độ refresh để mượt mà hơn
    const interval = setInterval(draw, 25); // ~40 FPS để mượt hơn

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      // Cập nhật lại số cột khi resize
      const newColumns = Math.floor(canvas.width / fontSize);
      if (newColumns !== columns) {
        // Reset arrays cho số cột mới
        drops.length = newColumns;
        speeds.length = newColumns;
        colors.length = newColumns;

        for (let i = columns; i < newColumns; i++) {
          drops[i] = Math.random() * -100;
          speeds[i] = Math.random() * 0.3 + 0.4; // Cùng tốc độ chậm hơn

          const colorChoice = Math.random();
          if (colorChoice < 0.4) {
            colors[i] = "#00ff41";
          } else if (colorChoice < 0.7) {
            colors[i] = "#ffb200";
          } else if (colorChoice < 0.85) {
            colors[i] = "#00ccff";
          } else {
            colors[i] = "#ffffff";
          }
        }
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      clearInterval(interval);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 opacity-30 pointer-events-none"
      style={{ zIndex: 1 }}
    />
  );
};

// Social media icons component with hover effects
const SocialIcon = ({
  icon,
  name,
  isActive = false,
}: {
  icon: string;
  name: string;
  isActive?: boolean;
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="flex flex-col gap-2 md:gap-4 items-center justify-start relative shrink-0 w-12 md:w-16 lg:w-[70px] cursor-pointer group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`relative size-8 md:size-12 lg:size-[60px] transition-all duration-300 ${
          isHovered ? "scale-110 rotate-12" : ""
        }`}
      >
        <div
          className={`absolute inset-0 rounded-full ${
            isActive ? "bg-[#ffb200]/20 animate-pulse" : ""
          }`}
        />
        <Image
          alt=""
          src={icon}
          fill
          className="object-contain relative z-10"
        />
        {isHovered && (
          <div className="absolute inset-0 rounded-full bg-[#ffb200]/30 animate-ping" />
        )}
      </div>
      <GlitchText>
        <div
          className={`font-['Big_Shoulders_Display'] font-extrabold leading-none text-xs md:text-sm whitespace-nowrap tracking-wider uppercase transition-colors duration-300 ${
            isActive
              ? "text-[#ffb200]"
              : isHovered
              ? "text-[#00ff41]"
              : "text-[#ffffff]"
          }`}
        >
          {name}
        </div>
      </GlitchText>
    </div>
  );
};

// Enhanced Provider slot component with advanced hacker-style effects
const ProviderSlot = ({
  provider,
  onSelect,
  index,
}: {
  provider: (typeof providerData)[0];
  onSelect: (id: string) => void;
  index: number;
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [status, setStatus] = useState<"loading" | "success" | "ready">(
    "loading"
  );
  const [isHovered, setIsHovered] = useState(false);
  const [shouldGlitch, setShouldGlitch] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    // Stagger the loading animation
    const delay = index * 300;

    const timer = setTimeout(() => {
      setIsLoaded(true);

      // Simulate realistic loading progress with deterministic increments
      let progress = 0;
      const progressInterval = setInterval(() => {
        const increment = 8 + index * 2; // Deterministic increments based on index
        progress += increment;

        // Add deterministic fluctuations based on index
        if (index % 3 === 0 && progress > 50) {
          progress = Math.max(progress - 1, 0); // Small drops for every 3rd item
        }

        setLoadingProgress(Math.min(progress, 100));

        if (progress >= 100) {
          clearInterval(progressInterval);
          setTimeout(() => {
            setStatus("success");
            // Deterministic glitch effect on success
            setShouldGlitch(true);
            setTimeout(() => setShouldGlitch(false), 500);
            setTimeout(() => setStatus("ready"), 1200);
          }, 300);
        }
      }, 100 + index * 10); // Deterministic speed based on index

      return () => clearInterval(progressInterval);
    }, delay);

    return () => clearTimeout(timer);
  }, [index, mounted]);

  // Deterministic glitch effects during hover
  useEffect(() => {
    if (!mounted) return;

    if (isHovered && status === "ready") {
      const glitchInterval = setInterval(() => {
        // Use index-based logic instead of random
        if (index % 2 === 0) {
          setShouldGlitch(true);
          setTimeout(() => setShouldGlitch(false), 150);
        }
      }, 2000);

      return () => clearInterval(glitchInterval);
    }
  }, [isHovered, status, index, mounted]);

  const getStatusText = () => {
    switch (status) {
      case "loading":
        return "LOADING...";
      case "success":
        return "SUCCESS!";
      case "ready":
        return "READY";
      default:
        return "LOADING...";
    }
  };

  const getStatusColor = () => {
    switch (status) {
      case "loading":
        return "#ffb200";
      case "success":
        return "#00ff41";
      case "ready":
        return "#00ccff";
      default:
        return "#ffb200";
    }
  };

  return (
    <div
      className={`relative w-full max-w-[280px] sm:max-w-[300px] md:max-w-[280px] lg:max-w-[220px] xl:max-w-[250px] 2xl:max-w-[280px] mx-auto aspect-square cursor-pointer group transition-all duration-500 ${
        isHovered ? "scale-105 z-10" : ""
      } ${shouldGlitch ? "animate-glitch" : ""}`}
      onClick={() => status === "ready" && onSelect(provider.id)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Cyberpunk border effect */}
      <div
        className={`absolute inset-0 rounded-lg transition-all duration-300 ${
          status === "ready" ? "border-cyber animate-cyber-pulse" : ""
        }`}
      />

      {/* Matrix scanning effect during loading */}
      {status === "loading" && (
        <div className="absolute inset-0 overflow-hidden rounded-lg">
          <div
            className="absolute w-full h-1 bg-gradient-to-r from-transparent via-[#00ff41] to-transparent animate-scan-line opacity-60"
            style={{
              top: `${loadingProgress}%`,
              animationDuration: "1.5s",
              boxShadow: "0 0 10px #00ff41",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#00ff41]/5 to-transparent animate-pulse" />
        </div>
      )}

      {/* Main Frame with enhanced effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-[-1%]">
          <Image
            alt=""
            src="/assets/homepage/khung.svg"
            fill
            className={`object-contain transition-all duration-300 ${
              isHovered ? "filter brightness-110 drop-shadow-lg" : ""
            } ${status === "ready" ? "glow-gold" : ""}`}
          />
        </div>
      </div>

      {/* Provider Logo with hologram effect - Enhanced positioning */}
      <div
        className={`absolute bg-center bg-contain bg-no-repeat transition-all duration-500 ${
          isLoaded ? "opacity-100 scale-100" : "opacity-50 scale-90"
        } ${isHovered && status === "ready" ? "animate-hologram" : ""}`}
        style={{
          left: "50%",
          top: "7%",
          width: "45%",
          height: "18%",
          transform: "translateX(-50%)",
          backgroundImage: `url('${provider.image}')`,
          filter:
            status === "ready"
              ? `drop-shadow(0 0 8px ${provider.color}80)`
              : "none",
          zIndex: 10,
        }}
      />

      {/* Enhanced Chart Elements with circular progress */}
      <div
        className={`absolute inset-[28%_25%_21%_28%] transition-all duration-500 ${
          isLoaded ? "opacity-100 scale-100" : "opacity-30 scale-50"
        }`}
      >
        {/* Circular Progress Ring with centered percentage */}
        <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="relative">
            <CircularProgress
              percentage={provider.percentage}
              isAnimated={status === "ready"}
              color={provider.color}
              size={120}
              strokeWidth={6}
            />
            {/* Centered Percentage Text */}
            <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <AnimatedPercentage
                targetPercentage={provider.percentage}
                isLoaded={isLoaded}
                color={provider.color}
                className={`${shouldGlitch ? "animate-glitch" : ""} ${
                  status === "ready"
                    ? "text-glow-gold animate-neon-flicker"
                    : ""
                }`}
              />
            </div>
          </div>
        </div>

        {/* Chart elements positioned around the circle */}
        <div className="absolute inset-[36%_32%_28%_32%]">
          <div className="absolute inset-[36%_32%_28%_32%]">
            <div className="absolute bottom-0 left-0 right-0 top-[-4%]">
              <Image
                alt=""
                src="/assets/homepage/group2.svg"
                fill
                className={`object-contain transition-all duration-300 ${
                  isHovered
                    ? "animate-spin glow-green"
                    : status === "loading"
                    ? "animate-pulse"
                    : ""
                }`}
                style={{
                  animationDuration: isHovered ? "4s" : "2s",
                  filter: `drop-shadow(0 0 5px ${provider.color}60)`,
                }}
              />
            </div>
          </div>
          <div className="absolute inset-[54%_32%_28%_37%]">
            <Image
              alt=""
              src="/assets/homepage/group3.svg"
              fill
              className={`object-contain transition-all duration-300 ${
                isHovered
                  ? "animate-bounce glow-cyan"
                  : status === "loading"
                  ? "animate-pulse"
                  : ""
              }`}
              style={{
                filter: `drop-shadow(0 0 5px ${provider.color}40)`,
                animationDelay: "0.5s",
              }}
            />
          </div>
        </div>
      </div>

      {/* Enhanced Progress Bar with data stream effect */}
      <div className="absolute left-[4%] bottom-[10%] right-[4%] h-4">
        <div className="relative w-full h-full">
          <Image
            alt=""
            src="/assets/homepage/group1788.svg"
            fill
            className="object-contain"
          />
          {/* Animated progress overlay */}
          <div
            className="absolute inset-0 rounded-full overflow-hidden"
            style={{
              width: `${loadingProgress}%`,
              transition: "width 0.3s ease-out",
            }}
          >
            <div className="h-full bg-gradient-to-r from-[#ffb200] via-[#00ff41] to-[#ffb200] animate-data-stream" />
          </div>

          {/* Success glow effect */}
          {status === "success" && (
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#00ff41] to-transparent animate-pulse glow-green" />
          )}
        </div>
      </div>

      {/* Enhanced Status Text with typewriter effect */}
      <div className="absolute left-1/2 transform -translate-x-1/2 bottom-[18%]">
        <GlitchText>
          <div
            className={`font-['Chakra_Petch'] font-medium text-xs md:text-sm text-center whitespace-nowrap transition-all duration-300 ${
              status === "ready" ? "text-glow-cyan animate-neon-flicker" : ""
            } ${shouldGlitch ? "animate-glitch" : ""}`}
            style={{ color: getStatusColor() }}
          >
            {getStatusText()}
          </div>
        </GlitchText>
      </div>

      {/* Cyberpunk hover overlay */}
      {isHovered && status === "ready" && (
        <>
          <div className="absolute inset-0 bg-gradient-to-br from-[#ffb200]/10 via-transparent to-[#00ff41]/10 rounded-lg animate-pulse" />
          <div className="absolute inset-0 border-2 border-[#00ff41]/50 rounded-lg animate-pulse" />

          {/* Circuit pattern overlay */}
          <div className="absolute inset-0 opacity-20">
            <svg className="w-full h-full" viewBox="0 0 100 100">
              <path
                d="M10,10 L90,10 L90,50 L50,50 L50,90 L10,90 Z"
                stroke={provider.color}
                strokeWidth="0.5"
                fill="none"
                strokeDasharray="5,5"
                className="animate-circuit-trace"
              />
            </svg>
          </div>
        </>
      )}

      {/* Loading particles effect */}
      {status === "loading" && (
        <div className="absolute inset-0 overflow-hidden rounded-lg pointer-events-none">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-[#00ff41] rounded-full animate-matrix-rain"
              style={{
                left: `${10 + i * 20}%`,
                animationDelay: `${i * 0.3}s`,
                animationDuration: `${2 + i * 0.2}s`, // Use deterministic values instead of Math.random()
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export function HomepageScreen({
  onProviderSelect,
  onLogin,
  onRegister,
}: HomepageScreenProps) {
  const { isAuthenticated, user, logout } = useAuth();
  const [isClient, setIsClient] = useState(false);
  const [showLoadingOverlay, setShowLoadingOverlay] = useState(true);
  const [showPointsModal, setShowPointsModal] = useState(false);

  useEffect(() => {
    setIsClient(true);
    // Hide loading overlay after 3 seconds
    const timer = setTimeout(() => {
      setShowLoadingOverlay(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const handleProviderSelect = (providerId: string) => {
    // Kiểm tra đăng nhập trước khi cho phép chọn nhà cái
    if (!isAuthenticated) {
      onLogin?.();
      return;
    }

    // Kiểm tra điểm của user
    if (!user?.points || user.points <= 0) {
      setShowPointsModal(true);
      return;
    }

    onProviderSelect?.(providerId);
  };

  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <div className="bg-black relative min-h-screen w-full overflow-hidden">
      {/* Matrix Rain Background */}
      <MatrixRain />

      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#ff940608] via-[#ff940620] to-[#ff940608]" />

      {/* Animated geometric patterns */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute top-1/4 left-1/4 w-32 h-32 border border-[#ffb200] rotate-45 animate-spin"
          style={{ animationDuration: "20s" }}
        />
        <div
          className="absolute top-3/4 right-1/4 w-24 h-24 border border-[#00ff41] rotate-12 animate-pulse"
          style={{ animationDuration: "3s" }}
        />
        <div
          className="absolute bottom-1/4 left-1/2 w-16 h-16 border border-[#ff0040] animate-bounce"
          style={{ animationDuration: "4s" }}
        />
      </div>

      {/* Decorative Background Pattern */}
      <div className="absolute left-0 top-[100px] w-full h-full">
        <div
          className="absolute bg-gradient-to-t bg-repeat from-[#00000000] from-[50%] h-[410px] left-0 opacity-10 to-[#000000] top-[670px] w-full animate-pulse"
          style={{
            backgroundImage: "url('/assets/homepage/hoa-tiet-cham.png')",
            backgroundSize: "auto 200px",
            animationDuration: "4s",
          }}
        />
        <div className="absolute flex h-[395px] items-center justify-center left-0 top-[100px] w-full">
          <div className="flex-none rotate-[180deg]">
            <div
              className="bg-gradient-to-t bg-repeat from-[#00000000] from-[50%] h-[395px] opacity-10 to-[#000000] w-full"
              style={{
                backgroundImage: "url('/assets/homepage/hoa-tiet-cham.png')",
                backgroundSize: "auto 200px",
              }}
            />
          </div>
        </div>
      </div>

      {/* Footer Group */}
      <div className="absolute bottom-0 left-0 right-0 h-[12%]">
        <Image
          alt=""
          src="/assets/homepage/group.svg"
          fill
          className="object-contain opacity-80"
        />
      </div>

      {/* Enhanced Header - Responsive */}
      <header className="relative z-20 h-16 md:h-20 lg:h-[120px] w-full mt-4 lg:mt-6">
        <div className="absolute inset-0 backdrop-blur-[17px] bg-black/80" />

        {/* Logo - Fixed positioning for desktop */}
        <div
          className="absolute left-2 md:left-4 lg:left-[80px] xl:left-[100px] 2xl:left-[120px]
                top-1/2 -translate-y-1/2
                w-20 md:w-24 lg:w-[160px] xl:w-[180px] 2xl:w-[200px]"
        >
          <div
            className="bg-center bg-no-repeat w-full h-auto"
            style={{
              backgroundImage: "url('/assets/homepage/logo.png')",
              aspectRatio: "510/325", // tự giữ đúng tỷ lệ
              backgroundSize: "contain", // không crop ảnh
            }}
          />
        </div>

        {/* Action Buttons - Fixed positioning for desktop */}
        <div className="absolute right-2 md:right-4 lg:right-[100px] xl:right-[120px] 2xl:right-[150px] top-1/2 transform -translate-y-1/2 lg:top-1/2 lg:-translate-y-1/2 flex gap-2 md:gap-4">
          {isAuthenticated && user ? (
            <>
              {/* User Info & Admin/Logout */}
              <div className="flex items-center gap-2 md:gap-3">
                {/* User Info */}
                <div className="hidden lg:block text-right">
                  <div className="text-[#ffb200] font-['Big_Shoulders_Display'] font-black text-sm tracking-wider uppercase">
                    {user.fullName}
                  </div>
                  <div className="text-[#00ff41] font-['Chakra_Petch'] text-xs">
                    @{user.username} {user.isAdmin && "(Admin)"}
                  </div>
                  <div className="text-yellow-400 font-['Chakra_Petch'] text-xs">
                    Điểm: {user.points || 0}
                  </div>
                </div>

                {/* Admin Button - Only show for admin users */}
                {user.isAdmin && (
                  <button
                    onClick={() => (window.location.href = "/admin")}
                    className="relative h-8 md:h-10 lg:h-[52px] w-16 md:w-24 lg:w-[120px] group mr-2"
                  >
                    <div className="absolute inset-0">
                      <div className="absolute inset-[-15%_-4%] lg:inset-[-15.38%_-4%]">
                        <Image
                          alt=""
                          src="/assets/homepage/frame.svg"
                          fill
                          className="object-contain group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    </div>
                    <GlitchText>
                      <div className="absolute font-['Big_Shoulders_Display'] font-black leading-none text-black text-xs md:text-sm lg:text-[14px] text-center whitespace-nowrap tracking-wider lg:tracking-[1.35px] transform -translate-x-1/2 -translate-y-1/2 uppercase top-1/2 left-1/2">
                        ADMIN
                      </div>
                    </GlitchText>
                  </button>
                )}

                {/* Logout Button */}
                <button
                  onClick={logout}
                  className="relative h-8 md:h-10 lg:h-[52px] w-16 md:w-24 lg:w-[150px] group"
                >
                  <div className="absolute inset-0">
                    <div className="absolute inset-[-15%_-4%] lg:inset-[-15.38%_-4%]">
                      <Image
                        alt=""
                        src="/assets/homepage/frame1.svg"
                        fill
                        className="object-contain group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  </div>
                  <GlitchText>
                    <div className="absolute font-['Big_Shoulders_Display'] font-black leading-none text-white text-xs md:text-sm lg:text-[16px] text-center whitespace-nowrap tracking-wider lg:tracking-[1.35px] transform -translate-x-1/2 -translate-y-1/2 uppercase top-1/2 left-1/2">
                      ĐĂNG XUẤT
                    </div>
                  </GlitchText>
                </button>
              </div>
            </>
          ) : (
            <>
              {/* Login Button */}
              <button
                onClick={onLogin}
                className="relative h-8 md:h-10 lg:h-[52px] w-20 md:w-32 lg:w-[200px] group"
              >
                <div className="absolute inset-0">
                  <div className="absolute inset-[-15%_-4%] lg:inset-[-15.38%_-4%]">
                    <Image
                      alt=""
                      src="/assets/homepage/frame.svg"
                      fill
                      className="object-contain group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </div>
                <GlitchText>
                  <div className="absolute font-['Big_Shoulders_Display'] font-black leading-none left-1/2 text-black text-xs md:text-sm lg:text-[18px] text-center whitespace-nowrap top-1/2 tracking-wider lg:tracking-[1.35px] transform -translate-x-1/2 -translate-y-1/2 uppercase">
                    ĐĂNG NHẬP
                  </div>
                </GlitchText>
              </button>

              {/* Register Button */}
              <button
                onClick={onRegister}
                className="relative h-8 md:h-10 lg:h-[52px] w-20 md:w-32 lg:w-[200px] group"
              >
                <div className="absolute inset-0">
                  <Image
                    alt=""
                    src="/assets/homepage/frame1.svg"
                    fill
                    className="object-contain group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <GlitchText>
                  <div className="absolute font-['Big_Shoulders_Display'] font-black leading-none text-white text-xs md:text-sm lg:text-[18px] text-center whitespace-nowrap tracking-wider lg:tracking-[1.35px] transform -translate-x-1/2 -translate-y-1/2 uppercase top-1/2 left-1/2">
                    ĐĂNG KÝ
                  </div>
                </GlitchText>
              </button>
            </>
          )}
        </div>
      </header>

      {/* Enhanced Social Media Bar - Responsive */}
      <div className="relative z-10 h-20 md:h-24 lg:h-[136px] backdrop-blur-[20px] bg-white/4 shadow-xl">
        <div className="h-full flex items-center justify-center lg:justify-end px-4 lg:px-[100px] xl:px-[120px] 2xl:px-[150px]">
          <div className="flex items-center gap-2 md:gap-4 lg:gap-8 xl:gap-10 2xl:gap-12 overflow-x-auto lg:overflow-visible">
            <SocialIcon icon="/assets/homepage/group1775.svg" name="TELEGRAM" />
            <SocialIcon icon="/assets/homepage/group1772.svg" name="FACEBOOK" />
          </div>
        </div>
      </div>

      {/* Enhanced Slider Indicator - Hidden on mobile */}
      <div className="hidden lg:block absolute right-6 top-[336px]">
        <div className="bg-[#1a1a1a] h-[592px] rounded w-2 relative">
          <div className="absolute bg-[rgba(255,255,255,0.2)] h-[189px] rounded top-1 w-1.5 left-0.5 animate-pulse" />
          <div
            className="absolute bg-[#ffb200] h-4 rounded w-1.5 left-0.5 animate-bounce"
            style={{ animationDuration: "2s" }}
          />
        </div>
      </div>

      {/* Enhanced Provider Grid - Fully Responsive */}
      <main className="relative z-10 px-4 md:px-8 lg:px-[100px] xl:px-[120px] 2xl:px-[150px] py-8 lg:pt-0 lg:pb-8">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6 lg:gap-8 xl:gap-6 2xl:gap-8 w-full max-w-[1600px] mx-auto">
            {/* Row 1 */}
            <ProviderSlot
              provider={providerData[0]}
              onSelect={handleProviderSelect}
              index={0}
            />
            <ProviderSlot
              provider={providerData[2]}
              onSelect={handleProviderSelect}
              index={2}
            />
            <ProviderSlot
              provider={providerData[4]}
              onSelect={handleProviderSelect}
              index={4}
            />
            <ProviderSlot
              provider={providerData[6]}
              onSelect={handleProviderSelect}
              index={6}
            />
            <ProviderSlot
              provider={providerData[8]}
              onSelect={handleProviderSelect}
              index={8}
            />

            {/* Row 2 */}
            <ProviderSlot
              provider={providerData[1]}
              onSelect={handleProviderSelect}
              index={1}
            />
            <ProviderSlot
              provider={providerData[3]}
              onSelect={handleProviderSelect}
              index={3}
            />
            <ProviderSlot
              provider={providerData[5]}
              onSelect={handleProviderSelect}
              index={5}
            />
            <ProviderSlot
              provider={providerData[7]}
              onSelect={handleProviderSelect}
              index={7}
            />
            <ProviderSlot
              provider={providerData[9]}
              onSelect={handleProviderSelect}
              index={9}
            />
          </div>
        </div>
      </main>

      {/* Floating Action Button for mobile */}
      <div className="fixed bottom-4 right-4 lg:hidden z-30">
        <button
          className="w-14 h-14 bg-gradient-to-r from-[#ffb200] to-[#905200] rounded-full flex items-center justify-center shadow-lg animate-pulse"
          onClick={scrollToTop}
        >
          <span className="text-black text-2xl">⬆️</span>
        </button>
      </div>

      {/* Loading overlay for initial load */}
      {showLoadingOverlay && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95"
          role="status"
          aria-live="polite"
          aria-busy="true"
        >
          <div className="relative flex flex-col items-center text-center">
            {/* Glow nền nhẹ */}
            <div
              className="pointer-events-none absolute -inset-16 blur-3xl opacity-40"
              style={{
                background:
                  "radial-gradient(50% 50% at 50% 50%, #ffb20033 0%, #00ff4126 35%, transparent 70%)",
              }}
            />

            {/* Spinner nâng cấp */}
            <div className="relative mb-8 grid place-items-center">
              {/* Vòng nền mờ */}
              <div className="w-24 h-24 rounded-full border border-white/10 bg-black/40 backdrop-blur" />

              {/* Vòng gradient conic (vòng ngoài) */}
              <div
                className="absolute w-24 h-24 rounded-full motion-reduce:animate-none"
                style={{
                  backgroundImage:
                    "conic-gradient(from 0deg, #ffb200, #ffb20088 25%, transparent 25%, transparent 75%, #ffb20088 75%, #ffb200)",
                  WebkitMask:
                    "radial-gradient(farthest-side, transparent calc(100% - 6px), #000 0)",
                  animation: "spin 0.5s linear infinite",
                  filter: "drop-shadow(0 0 8px #ffb200aa)",
                }}
              />

              {/* Vòng giữa màu xanh, quay ngược chiều */}
              <div
                className="absolute w-20 h-20 rounded-full motion-reduce:animate-none"
                style={{
                  backgroundImage:
                    "conic-gradient(from 0deg, #00ff41, #00ff4188 25%, transparent 25%, transparent 75%, #00ff4188 75%, #00ff41)",
                  WebkitMask:
                    "radial-gradient(farthest-side, transparent calc(100% - 6px), #000 0)",
                  animation: "spinReverse 0.5s linear infinite",
                  filter: "drop-shadow(0 0 8px #00ff41aa)",
                }}
              />

              {/* Vòng trong mỏng, tốc độ gấp đôi để tạo cảm giác “công nghệ” */}
              <div
                className="absolute w-14 h-14 rounded-full motion-reduce:animate-none"
                style={{
                  backgroundImage:
                    "conic-gradient(from 0deg, #ffffff, #ffffff55 20%, transparent 20%, transparent 80%, #ffffff55 80%, #ffffff)",
                  WebkitMask:
                    "radial-gradient(farthest-side, transparent calc(100% - 4px), #000 0)",
                  animation: "spin 0.25s linear infinite",
                  opacity: 0.7,
                }}
              />

              {/* Chấm chỉ hướng (indicator) */}
              <span
                className="absolute -top-1 w-2 h-2 rounded-full"
                style={{
                  background: "#ffb200",
                  boxShadow: "0 0 10px #ffb200, 0 0 20px #ffb200",
                }}
              />
            </div>

            {/* Text trung tâm */}
            <div className="space-y-2">
              <div className="text-2xl font-bold tracking-wide text-[#ffb200] drop-shadow">
                INITIALIZING SYSTEM...
              </div>
              <div className="font-mono text-sm text-[#00ff41] opacity-90">
                Connecting to gaming servers...
              </div>
            </div>
          </div>

          {/* Keyframes cho spin */}
          <style jsx>{`
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
          `}</style>
        </div>
      )}

      {/* Points Required Modal */}
      <PointsRequiredModal
        isOpen={showPointsModal}
        onClose={() => setShowPointsModal(false)}
      />
    </div>
  );
}
