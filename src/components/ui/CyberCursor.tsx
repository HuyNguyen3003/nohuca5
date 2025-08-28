'use client';

import { useEffect, useRef, useState } from 'react';

interface CursorPosition {
  x: number;
  y: number;
}

export default function CyberCursor() {
  const [cursorPosition, setCursorPosition] = useState<CursorPosition>({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const cursorRef = useRef<HTMLDivElement>(null);
  const trailRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  useEffect(() => {
    if (cursorRef.current) {
      cursorRef.current.style.transform = `translate(${cursorPosition.x}px, ${cursorPosition.y}px)`;
    }

    // Animate trail elements with delay
    trailRefs.current.forEach((trail, index) => {
      if (trail) {
        const delay = (index + 1) * 50; // 50ms delay between each trail element
        setTimeout(() => {
          trail.style.transform = `translate(${cursorPosition.x}px, ${cursorPosition.y}px)`;
        }, delay);
      }
    });
  }, [cursorPosition]);

  return (
    <>
      {/* Main cursor */}
      <div
        ref={cursorRef}
        className={`fixed top-0 left-0 w-4 h-4 pointer-events-none z-50 transition-transform duration-75 ease-out ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          transform: `translate(${cursorPosition.x - 8}px, ${cursorPosition.y - 8}px)`,
        }}
      >
        {/* Outer glow ring */}
        <div className="absolute inset-0 w-full h-full rounded-full bg-cyan-400/30 blur-sm animate-pulse" />
        
        {/* Inner core */}
        <div className="absolute inset-1 w-2 h-2 rounded-full bg-cyan-400 shadow-lg shadow-cyan-400/50" />
        
        {/* Cyber crosshair */}
        <div className="absolute inset-0 w-full h-full">
          <div className="absolute top-1/2 left-0 w-full h-0.5 bg-cyan-400 transform -translate-y-1/2" />
          <div className="absolute top-0 left-1/2 w-0.5 h-full bg-cyan-400 transform -translate-x-1/2" />
        </div>
      </div>

      {/* Trail elements */}
      {[...Array(5)].map((_, index) => (
        <div
          key={index}
          ref={(el) => (trailRefs.current[index] = el)}
          className={`fixed top-0 left-0 w-3 h-3 pointer-events-none z-40 transition-transform duration-200 ease-out ${
            isVisible ? 'opacity-60' : 'opacity-0'
          }`}
          style={{
            transform: `translate(${cursorPosition.x - 6}px, ${cursorPosition.y - 6}px)`,
            transitionDelay: `${index * 50}ms`,
          }}
        >
          <div className="w-full h-full rounded-full bg-cyan-300/40 blur-sm" />
        </div>
      ))}

      {/* Energy particles */}
      {[...Array(3)].map((_, index) => (
        <div
          key={`particle-${index}`}
          className={`fixed top-0 left-0 w-1 h-1 pointer-events-none z-30 ${
            isVisible ? 'opacity-80' : 'opacity-0'
          }`}
          style={{
            transform: `translate(${cursorPosition.x + (index - 1) * 8}px, ${cursorPosition.y + (index - 1) * 8}px)`,
            animation: `float ${2 + index * 0.5}s ease-in-out infinite`,
            animationDelay: `${index * 0.3}s`,
          }}
        >
          <div className="w-full h-full rounded-full bg-blue-400 animate-ping" />
        </div>
      ))}

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) scale(1);
          }
          50% {
            transform: translateY(-10px) scale(1.2);
          }
        }
        
        @keyframes glow {
          0%, 100% {
            box-shadow: 0 0 20px rgba(34, 211, 238, 0.5);
          }
          50% {
            box-shadow: 0 0 40px rgba(34, 211, 238, 0.8), 0 0 60px rgba(34, 211, 238, 0.4);
          }
        }
      `}</style>
    </>
  );
}
