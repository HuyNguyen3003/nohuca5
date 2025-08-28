'use client';

import { useEffect, useRef, useState, useCallback } from 'react';

interface CursorPosition {
  x: number;
  y: number;
}

interface Particle {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  maxLife: number;
}

export default function AdvancedCyberCursor() {
  const [cursorPosition, setCursorPosition] = useState<CursorPosition>({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [particles, setParticles] = useState<Particle[]>([]);
  const cursorRef = useRef<HTMLDivElement>(null);
  const trailRefs = useRef<(HTMLDivElement | null)[]>([]);
  const particleIdRef = useRef(0);

  const createParticle = useCallback((x: number, y: number) => {
    const angle = Math.random() * Math.PI * 2;
    const speed = Math.random() * 3 + 2;
    const particle: Particle = {
      id: particleIdRef.current++,
      x,
      y,
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed,
      life: 1,
      maxLife: Math.random() * 30 + 20,
    };
    return particle;
  }, []);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    setCursorPosition({ x: e.clientX, y: e.clientY });
    setIsVisible(true);
  }, []);

  const handleMouseDown = useCallback(() => {
    setIsClicking(true);
    // Create explosion particles on click
    const newParticles = Array.from({ length: 8 }, () => 
      createParticle(cursorPosition.x, cursorPosition.y)
    );
    setParticles(prev => [...prev, ...newParticles]);
  }, [cursorPosition, createParticle]);

  const handleMouseUp = useCallback(() => {
    setIsClicking(false);
  }, []);

  const handleMouseEnter = useCallback(() => setIsVisible(true), []);
  const handleMouseLeave = useCallback(() => setIsVisible(false), []);

  useEffect(() => {
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [handleMouseMove, handleMouseDown, handleMouseUp, handleMouseEnter, handleMouseLeave]);

  // Update cursor position
  useEffect(() => {
    if (cursorRef.current) {
      cursorRef.current.style.transform = `translate(${cursorPosition.x - 8}px, ${cursorPosition.y - 8}px)`;
    }

    // Animate trail elements with delay
    trailRefs.current.forEach((trail, index) => {
      if (trail) {
        const delay = (index + 1) * 40;
        setTimeout(() => {
          trail.style.transform = `translate(${cursorPosition.x - 6}px, ${cursorPosition.y - 6}px)`;
        }, delay);
      }
    });
  }, [cursorPosition]);

  // Update particles
  useEffect(() => {
    const interval = setInterval(() => {
      setParticles(prev => 
        prev
          .map(particle => ({
            ...particle,
            x: particle.x + particle.vx,
            y: particle.y + particle.vy,
            life: particle.life - 1,
          }))
          .filter(particle => particle.life > 0)
      );
    }, 16);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Main cursor */}
      <div
        ref={cursorRef}
        className={`fixed top-0 left-0 w-4 h-4 pointer-events-none z-50 transition-all duration-75 ease-out ${
          isVisible ? 'opacity-100' : 'opacity-0'
        } ${isClicking ? 'scale-150' : 'scale-100'}`}
        style={{
          transform: `translate(${cursorPosition.x - 8}px, ${cursorPosition.y - 8}px)`,
        }}
      >
        {/* Outer glow ring */}
        <div className="absolute inset-0 w-full h-full rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 opacity-40 blur-md animate-pulse" />
        
        {/* Middle ring */}
        <div className="absolute inset-0.5 w-3 h-3 rounded-full bg-gradient-to-r from-cyan-300 to-blue-400 opacity-60 blur-sm" />
        
        {/* Inner core */}
        <div className="absolute inset-1 w-2 h-2 rounded-full bg-cyan-400 shadow-lg shadow-cyan-400/70" />
        
        {/* Cyber crosshair */}
        <div className="absolute inset-0 w-full h-full">
          <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent transform -translate-y-1/2" />
          <div className="absolute top-0 left-1/2 w-0.5 h-full bg-gradient-to-b from-transparent via-cyan-400 to-transparent transform -translate-x-1/2" />
        </div>

        {/* Corner indicators */}
        <div className="absolute -top-0.5 -left-0.5 w-1 h-1 bg-cyan-400 rounded-full" />
        <div className="absolute -top-0.5 -right-0.5 w-1 h-1 bg-cyan-400 rounded-full" />
        <div className="absolute -bottom-0.5 -left-0.5 w-1 h-1 bg-cyan-400 rounded-full" />
        <div className="absolute -bottom-0.5 -right-0.5 w-1 h-1 bg-cyan-400 rounded-full" />
      </div>

      {/* Trail elements */}
      {[...Array(6)].map((_, index) => (
        <div
          key={index}
          ref={(el) => (trailRefs.current[index] = el)}
          className={`fixed top-0 left-0 w-3 h-3 pointer-events-none z-40 transition-all duration-200 ease-out ${
            isVisible ? 'opacity-50' : 'opacity-0'
          }`}
          style={{
            transform: `translate(${cursorPosition.x - 6}px, ${cursorPosition.y - 6}px)`,
            transitionDelay: `${index * 40}ms`,
          }}
        >
          <div className="w-full h-full rounded-full bg-gradient-to-r from-cyan-300/60 to-blue-400/60 blur-sm" />
        </div>
      ))}

      {/* Energy particles */}
      {[...Array(4)].map((_, index) => (
        <div
          key={`energy-${index}`}
          className={`fixed top-0 left-0 w-1 h-1 pointer-events-none z-30 ${
            isVisible ? 'opacity-90' : 'opacity-0'
          }`}
          style={{
            transform: `translate(${cursorPosition.x + (index - 1.5) * 10}px, ${cursorPosition.y + (index - 1.5) * 10}px)`,
            animation: `float ${2.5 + index * 0.3}s ease-in-out infinite`,
            animationDelay: `${index * 0.2}s`,
          }}
        >
          <div className="w-full h-full rounded-full bg-blue-400 animate-ping" />
        </div>
      ))}

      {/* Explosion particles */}
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="fixed top-0 left-0 w-1 h-1 pointer-events-none z-20"
          style={{
            transform: `translate(${particle.x}px, ${particle.y}px)`,
            opacity: particle.life / particle.maxLife,
          }}
        >
          <div className="w-full h-full rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 animate-pulse" />
        </div>
      ))}

      {/* Click effect ring */}
      {isClicking && (
        <div
          className="fixed top-0 left-0 w-8 h-8 pointer-events-none z-10"
          style={{
            transform: `translate(${cursorPosition.x - 16}px, ${cursorPosition.y - 16}px)`,
          }}
        >
          <div className="w-full h-full rounded-full border-2 border-cyan-400 animate-ping" />
        </div>
      )}

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) scale(1) rotate(0deg);
          }
          25% {
            transform: translateY(-8px) scale(1.1) rotate(90deg);
          }
          50% {
            transform: translateY(-15px) scale(1.2) rotate(180deg);
          }
          75% {
            transform: translateY(-8px) scale(1.1) rotate(270deg);
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

        @keyframes cyberPulse {
          0%, 100% {
            transform: scale(1);
            opacity: 1;
          }
          50% {
            transform: scale(1.2);
            opacity: 0.7;
          }
        }
      `}</style>
    </>
  );
}
