"use client";

import React, { useState } from "react";
import { HolographicAI3D } from "./HolographicAI3D";
import { PlasmaEnergyField } from "./PlasmaEnergyField";
import { CyberWaveChart3D } from "./CyberWaveChart3D";
import { DangerZoneIndicator } from "./DangerZoneIndicator";
import { CyberGlitchEffect, GlitchText } from "./CyberGlitchEffect";

export function EnhancedComponentsDemo() {
  const [selectedRiskLevel, setSelectedRiskLevel] = useState<
    "low" | "medium" | "high" | "extreme"
  >("medium");
  const [accuracy, setAccuracy] = useState(85);

  return (
    <div className="min-h-screen bg-black p-8">
      <div className="max-w-7xl mx-auto space-y-8">
        <h1 className="text-4xl font-bold text-primary text-center mb-8">
          Enhanced Components Demo
        </h1>

        {/* HolographicAI3D Demo */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-white">
            HolographicAI3D Component
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <HolographicAI3D
              riskScore={75}
              riskLevel="low"
              aiVersion="Neural Network v2.1"
              latencyMs={45}
              generatedAt={new Date().toISOString()}
            />
            <HolographicAI3D
              riskScore={85}
              riskLevel="medium"
              aiVersion="Quantum Processor v3.0"
              latencyMs={32}
              generatedAt={new Date().toISOString()}
            />
            <HolographicAI3D
              riskScore={92}
              riskLevel="high"
              aiVersion="Deep Learning v4.0"
              latencyMs={28}
              generatedAt={new Date().toISOString()}
            />
            <HolographicAI3D
              riskScore={98}
              riskLevel="extreme"
              aiVersion="Cognitive Computing v4.1"
              latencyMs={15}
              generatedAt={new Date().toISOString()}
            />
          </div>
        </div>

        {/* PlasmaEnergyField Demo */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-white">
            PlasmaEnergyField Component
          </h2>
          <div className="flex items-center gap-4 mb-4">
            <label className="text-white">Accuracy: {accuracy}%</label>
            <input
              type="range"
              min="50"
              max="100"
              value={accuracy}
              onChange={(e) => setAccuracy(Number(e.target.value))}
              className="flex-1"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">
            <PlasmaEnergyField accuracy={accuracy} size="sm" />
            <PlasmaEnergyField accuracy={accuracy} size="md" />
            <PlasmaEnergyField accuracy={accuracy} size="lg" />
          </div>
        </div>

        {/* CyberWaveChart3D Demo */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-white">
            CyberWaveChart3D Component
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <CyberWaveChart3D predictionAccuracy={85} waveHeight={15} />
            <CyberWaveChart3D predictionAccuracy={95} waveHeight={5} />
          </div>
        </div>

        {/* DangerZoneIndicator Demo */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-white">
            DangerZoneIndicator Component
          </h2>
          <div className="flex gap-4 mb-4">
            {(["low", "medium", "high", "extreme"] as const).map((level) => (
              <button
                key={level}
                onClick={() => setSelectedRiskLevel(level)}
                className={`px-4 py-2 rounded ${
                  selectedRiskLevel === level
                    ? "bg-primary text-black"
                    : "bg-gray-700 text-white"
                }`}
              >
                {level.toUpperCase()}
              </button>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <DangerZoneIndicator
              level={selectedRiskLevel}
              message={`${selectedRiskLevel.toUpperCase()} Risk Zone`}
            />
            <DangerZoneIndicator level="high" message="Critical Warning" />
            <DangerZoneIndicator level="extreme" message="System Overload" />
            <DangerZoneIndicator level="low" message="Safe Zone" />
          </div>
        </div>

        {/* CyberGlitchEffect Demo */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-white">
            CyberGlitchEffect Component
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white">
                Text Glitch Effects
              </h3>
              <div className="space-y-2">
                <GlitchText intensity="low" className="text-xl text-primary">
                  LOW INTENSITY GLITCH
                </GlitchText>
                <GlitchText intensity="medium" className="text-xl text-primary">
                  MEDIUM INTENSITY GLITCH
                </GlitchText>
                <GlitchText intensity="high" className="text-xl text-primary">
                  HIGH INTENSITY GLITCH
                </GlitchText>
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white">
                Visual Glitch Effects
              </h3>
              <div className="space-y-2">
                <CyberGlitchEffect
                  intensity="low"
                  type="visual"
                  className="p-4 bg-gray-800 rounded"
                >
                  <div className="text-white">Low Visual Glitch</div>
                </CyberGlitchEffect>
                <CyberGlitchEffect
                  intensity="medium"
                  type="visual"
                  className="p-4 bg-gray-800 rounded"
                >
                  <div className="text-white">Medium Visual Glitch</div>
                </CyberGlitchEffect>
                <CyberGlitchEffect
                  intensity="high"
                  type="visual"
                  className="p-4 bg-gray-800 rounded"
                >
                  <div className="text-white">High Visual Glitch</div>
                </CyberGlitchEffect>
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white">
                Combined Effects
              </h3>
              <div className="space-y-2">
                <CyberGlitchEffect
                  intensity="medium"
                  type="both"
                  className="p-4 bg-gray-800 rounded"
                >
                  <div className="text-white">Combined Text & Visual</div>
                </CyberGlitchEffect>
              </div>
            </div>
          </div>
        </div>

        {/* Performance Info */}
        <div className="bg-gray-900 p-6 rounded-lg">
          <h3 className="text-lg font-semibold text-white mb-4">
            Performance Information
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-300">
            <div>
              <p>
                <strong>Components Created:</strong> 5 new components
              </p>
              <p>
                <strong>3D Effects:</strong> CSS transforms, Canvas animations
              </p>
              <p>
                <strong>Particle Systems:</strong> Optimized with object pooling
              </p>
            </div>
            <div>
              <p>
                <strong>Animation Performance:</strong> 60fps target
              </p>
              <p>
                <strong>Memory Usage:</strong> Optimized particle cleanup
              </p>
              <p>
                <strong>Browser Support:</strong> Modern browsers with WebGL
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
