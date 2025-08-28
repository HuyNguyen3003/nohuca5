import { useEffect, useRef, useState, useCallback } from "react";

export interface CyberCursorOptions {
  enabled?: boolean;
  size?: number;
  color?: string;
  trailLength?: number;
  trailDelay?: number;
  glowIntensity?: number;
  particleCount?: number;
  clickEffect?: boolean;
  crosshair?: boolean;
  energyParticles?: boolean;
}

export interface CursorPosition {
  x: number;
  y: number;
}

export function useCyberCursor(options: CyberCursorOptions = {}) {
  const {
    enabled = true,
    size = 16,
    color = "#06b6d4", // cyan-400
    trailLength = 5,
    trailDelay = 50,
    glowIntensity = 0.5,
    particleCount = 3,
    clickEffect = true,
    crosshair = true,
    energyParticles = true,
  } = options;

  const [cursorPosition, setCursorPosition] = useState<CursorPosition>({
    x: 0,
    y: 0,
  });
  const [isVisible, setIsVisible] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const cursorRef = useRef<HTMLDivElement>(null);
  const trailRefs = useRef<(HTMLDivElement | null)[]>([]);

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (!enabled) return;
      setCursorPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    },
    [enabled]
  );

  const handleMouseDown = useCallback(() => {
    if (!enabled || !clickEffect) return;
    setIsClicking(true);
  }, [enabled, clickEffect]);

  const handleMouseUp = useCallback(() => {
    if (!enabled) return;
    setIsClicking(false);
  }, [enabled]);

  const handleMouseEnter = useCallback(() => {
    if (!enabled) return;
    setIsVisible(true);
  }, [enabled]);

  const handleMouseLeave = useCallback(() => {
    if (!enabled) return;
    setIsVisible(false);
  }, [enabled]);

  useEffect(() => {
    if (!enabled) return;

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mousedown", handleMouseDown);
    document.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mousedown", handleMouseDown);
      document.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [
    enabled,
    handleMouseMove,
    handleMouseDown,
    handleMouseUp,
    handleMouseEnter,
    handleMouseLeave,
  ]);

  useEffect(() => {
    if (!enabled || !cursorRef.current) return;

    const halfSize = size / 2;
    cursorRef.current.style.transform = `translate(${
      cursorPosition.x - halfSize
    }px, ${cursorPosition.y - halfSize}px)`;

    // Animate trail elements
    trailRefs.current.forEach((trail, index) => {
      if (trail) {
        const delay = (index + 1) * trailDelay;
        setTimeout(() => {
          trail.style.transform = `translate(${
            cursorPosition.x - halfSize + 2
          }px, ${cursorPosition.y - halfSize + 2}px)`;
        }, delay);
      }
    });
  }, [cursorPosition, enabled, size, trailDelay]);

  const renderCursor = useCallback(() => {
    if (!enabled) return null;

    const halfSize = size / 2;
    const trailSize = size - 4;

    return (
      <>
        {/* Main cursor */}
        <div
          ref={cursorRef}
          className={`fixed top-0 left-0 pointer-events-none z-50 transition-all duration-75 ease-out ${
            isVisible ? "opacity-100" : "opacity-0"
          } ${isClicking ? "scale-125" : "scale-100"}`}
          style={{
            width: size,
            height: size,
            transform: `translate(${cursorPosition.x - halfSize}px, ${
              cursorPosition.y - halfSize
            }px)`,
          }}
        >
          {/* Outer glow ring */}
          <div
            className="absolute inset-0 rounded-full blur-sm animate-pulse"
            style={{
              backgroundColor: color,
              opacity: glowIntensity * 0.3,
            }}
          />

          {/* Inner core */}
          <div
            className="absolute inset-1 rounded-full shadow-lg"
            style={{
              backgroundColor: color,
              boxShadow: `0 0 ${glowIntensity * 20}px ${color}`,
            }}
          />

          {/* Crosshair */}
          {crosshair && (
            <div className="absolute inset-0">
              <div
                className="absolute top-1/2 left-0 w-full h-0.5 transform -translate-y-1/2"
                style={{ backgroundColor: color }}
              />
              <div
                className="absolute top-0 left-1/2 w-0.5 h-full transform -translate-x-1/2"
                style={{ backgroundColor: color }}
              />
            </div>
          )}
        </div>

        {/* Trail elements */}
        {Array.from({ length: trailLength }).map((_, index) => (
          <div
            key={index}
            ref={(el) => (trailRefs.current[index] = el)}
            className={`fixed top-0 left-0 pointer-events-none z-40 transition-all duration-200 ease-out ${
              isVisible ? "opacity-50" : "opacity-0"
            }`}
            style={{
              width: trailSize,
              height: trailSize,
              transform: `translate(${cursorPosition.x - halfSize + 2}px, ${
                cursorPosition.y - halfSize + 2
              }px)`,
              transitionDelay: `${index * trailDelay}ms`,
            }}
          >
            <div
              className="w-full h-full rounded-full blur-sm"
              style={{
                backgroundColor: color,
                opacity: 0.4,
              }}
            />
          </div>
        ))}

        {/* Energy particles */}
        {energyParticles &&
          Array.from({ length: particleCount }).map((_, index) => (
            <div
              key={`particle-${index}`}
              className={`fixed top-0 left-0 w-1 h-1 pointer-events-none z-30 ${
                isVisible ? "opacity-80" : "opacity-0"
              }`}
              style={{
                transform: `translate(${
                  cursorPosition.x +
                  (index - (particleCount - 1) / 2) * (size / 2)
                }px, ${
                  cursorPosition.y +
                  (index - (particleCount - 1) / 2) * (size / 2)
                }px)`,
                animation: `float ${2 + index * 0.3}s ease-in-out infinite`,
                animationDelay: `${index * 0.2}s`,
              }}
            >
              <div
                className="w-full h-full rounded-full animate-ping"
                style={{ backgroundColor: color }}
              />
            </div>
          ))}

        {/* Click effect ring */}
        {clickEffect && isClicking && (
          <div
            className="fixed top-0 left-0 pointer-events-none z-10"
            style={{
              width: size * 2,
              height: size * 2,
              transform: `translate(${cursorPosition.x - size}px, ${
                cursorPosition.y - size
              }px)`,
            }}
          >
            <div
              className="w-full h-full rounded-full border-2 animate-ping"
              style={{ borderColor: color }}
            />
          </div>
        )}

        {/* CSS Animations */}
        <style jsx>{`
          @keyframes float {
            0%,
            100% {
              transform: translateY(0px) scale(1);
            }
            50% {
              transform: translateY(-8px) scale(1.2);
            }
          }
        `}</style>
      </>
    );
  }, [
    enabled,
    size,
    color,
    trailLength,
    trailDelay,
    glowIntensity,
    particleCount,
    clickEffect,
    crosshair,
    energyParticles,
    isVisible,
    isClicking,
    cursorPosition,
  ]);

  return {
    cursorPosition,
    isVisible,
    isClicking,
    renderCursor,
    enable: () => setIsVisible(true),
    disable: () => setIsVisible(false),
  };
}
