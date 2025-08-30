"use client";

import React, { useEffect, useState, useRef } from "react";
import { use3DPerspective } from "@/hooks/use3DPerspective";
import { useCyberAnimation } from "@/hooks/useCyberAnimation";

interface FloatingElement {
  id: number;
  x: number;
  y: number;
  size: number;
  type: "particle" | "energy" | "data" | "glitch";
  color: string;
  opacity: number;
  rotation: number;
  speed: number;
}

interface FloatingElementsProps {
  count?: number;
  intensity?: "low" | "medium" | "high";
  showConnections?: boolean;
  enabled?: boolean;
}

export function FloatingElements({
  count = 6, // Reduced for ultra smooth performance
  intensity = "low", // Reduced for ultra smooth performance
  showConnections = true,
  enabled = true,
}: FloatingElementsProps) {
  const [elements, setElements] = useState<FloatingElement[]>([]);
  const [connections, setConnections] = useState<
    Array<{ from: number; to: number }>
  >([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number>(0);

  const { get3DStyles, getFloatingStyles } = use3DPerspective({
    intensity,
    enableMouseTracking: false,
    enableParallax: false,
    depth: 30, // Reduced for ultra smooth
  });

  const { getCyberEffects } = useCyberAnimation({
    type: "pulse",
    intensity,
    enabled: false, // Disabled for ultra smooth performance
  });

  // Initialize floating elements
  useEffect(() => {
    if (!enabled || !containerRef.current) return;

    const container = containerRef.current;
    const rect = container.getBoundingClientRect();

    const elementTypes = [
      { type: "particle" as const, color: "#ff6600", size: 4 },
      { type: "energy" as const, color: "#00ffff", size: 6 },
      { type: "data" as const, color: "#ff00ff", size: 3 },
      { type: "glitch" as const, color: "#ffff00", size: 5 },
    ];

    const newElements: FloatingElement[] = Array.from(
      { length: count },
      (_, i) => {
        const elementType = elementTypes[i % elementTypes.length];
        return {
          id: i,
          x: Math.random() * rect.width,
          y: Math.random() * rect.height,
          size: elementType.size + Math.random() * 4,
          type: elementType.type,
          color: elementType.color,
          opacity: 0.3 + Math.random() * 0.7,
          rotation: Math.random() * 360,
          speed: 0.5 + Math.random() * 1.5,
        };
      }
    );

    setElements(newElements);

    // Generate connections between nearby elements
    if (showConnections) {
      const newConnections: Array<{ from: number; to: number }> = [];
      const maxDistance = 150;

      for (let i = 0; i < newElements.length; i++) {
        for (let j = i + 1; j < newElements.length; j++) {
          const dx = newElements[i].x - newElements[j].x;
          const dy = newElements[i].y - newElements[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < maxDistance) {
            newConnections.push({ from: i, to: j });
          }
        }
      }

      setConnections(newConnections);
    }
  }, [count, intensity, showConnections, enabled]);

  // Animate floating elements with CSS animations instead of JS state updates
  useEffect(() => {
    if (!enabled) return;

    // Use CSS animations for better performance
    const container = containerRef.current;
    if (container) {
      container.style.setProperty("--animation-duration", "30s"); // Slower for smoother
      container.style.setProperty("--animation-delay", "0s");
    }

    // Disable connection animations for ultra smooth performance
    // No animation loop needed

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 pointer-events-none overflow-hidden"
      style={{ zIndex: 5 }}
    >
      {/* Energy connections */}
      {showConnections &&
        connections.map((connection, index) => {
          const fromElement = elements[connection.from];
          const toElement = elements[connection.to];

          if (!fromElement || !toElement) return null;

          const dx = toElement.x - fromElement.x;
          const dy = toElement.y - fromElement.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          const angle = (Math.atan2(dy, dx) * 180) / Math.PI;

          return (
            <div
              key={`connection-${index}`}
              className="absolute h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent"
              style={{
                left: fromElement.x,
                top: fromElement.y,
                width: distance,
                transform: `rotate(${angle}deg)`,
                transformOrigin: "0 0",
                opacity: 0.3 + Math.sin(Date.now() * 0.003 + index) * 0.2,
              }}
            />
          );
        })}

      {/* Floating elements */}
      {elements.map((element) => (
        <div
          key={element.id}
          className="absolute pointer-events-none animate-float"
          style={{
            left: element.x,
            top: element.y,
            width: element.size,
            height: element.size,
            opacity: element.opacity,
            ...get3DStyles(element.id % 2), // Reduced layers for smoother performance
            animationDuration: `${30 / element.speed}s`, // Slower for smoother
            animationDelay: `${element.id * 0.3}s`, // More delay for smoother
          }}
        >
          {/* Element based on type */}
          {element.type === "particle" && (
            <div
              className="w-full h-full rounded-full animate-pulse"
              style={{
                background: `radial-gradient(circle, ${element.color}, transparent)`,
                boxShadow: `0 0 ${element.size * 2}px ${element.color}`,
              }}
            />
          )}

          {element.type === "energy" && (
            <div
              className="w-full h-full animate-spin"
              style={{
                background: `conic-gradient(from 0deg, transparent, ${element.color}, transparent)`,
                borderRadius: "50%",
                boxShadow: `0 0 ${element.size * 3}px ${element.color}`,
              }}
            />
          )}

          {element.type === "data" && (
            <div
              className="w-full h-full border border-current animate-ping"
              style={{
                borderColor: element.color,
                borderRadius: "2px",
                boxShadow: `0 0 ${element.size}px ${element.color}`,
              }}
            />
          )}

          {element.type === "glitch" && (
            <div
              className="w-full h-full animate-pulse"
              style={{
                background: `linear-gradient(45deg, transparent 30%, ${element.color} 50%, transparent 70%)`,
                borderRadius: "2px",
                boxShadow: `0 0 ${element.size * 2}px ${element.color}`,
              }}
            />
          )}
        </div>
      ))}

      {/* Ambient energy field */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          background: `radial-gradient(ellipse at center, rgba(255, 102, 0, 0.3) 0%, transparent 70%)`,
          animation: "pulse 4s ease-in-out infinite",
        }}
      />
    </div>
  );
}
