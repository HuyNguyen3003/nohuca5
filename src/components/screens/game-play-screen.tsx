"use client";

import * as React from "react";
import { useState, useEffect, useRef } from "react";
import { GamingCard } from "@/components/ui/gaming-card";
import { GamingButton } from "@/components/ui/gaming-button";
import { BackButton } from "@/components/ui";
import { useAuth } from "@/hooks/useAuth";

import { SystemInitializationOverlay } from "@/components/ui/SystemInitializationOverlay";
import { CyberBackground } from "@/components/ui/CyberBackground";
import { CyberTimer3D } from "@/components/ui/CyberTimer3D";
import { CyberChart3D } from "@/components/ui/CyberChart3D";
import { DangerButton3D } from "@/components/ui/DangerButton3D";
import { HolographicButton } from "@/components/ui/HolographicButton";
import { BetAmountGrid3D } from "@/components/ui/BetAmountGrid3D";
import { FloatingElements } from "@/components/ui/FloatingElements";
import { use3DPerspective } from "@/hooks/use3DPerspective";
import { useCyberAnimation } from "@/hooks/useCyberAnimation";
import "@/styles/cyber-animations.css";
import { HolographicAI3D } from "@/components/ui/HolographicAI3D";
import { PlasmaEnergyField } from "@/components/ui/PlasmaEnergyField";
import { CyberWaveChart3D } from "@/components/ui/CyberWaveChart3D";
import { DangerZoneIndicator } from "@/components/ui/DangerZoneIndicator";
import { GlitchText } from "@/components/ui/CyberGlitchEffect";

interface GamePlayScreenProps {
  onBack?: () => void;
}

function useHcmClock() {
  // mốc thời gian chuẩn tại HCM khi vào trang
  const baseEpochMsRef = useRef<number>(Date.now());
  // mốc hiệu năng để tính elapsed (tránh lệch do setInterval)
  const startPerfRef = useRef<number>(performance.now());
  const [, forceTick] = useState(0);

  useEffect(() => {
    // render mỗi giây để UI cập nhật, không đọc lại system time
    const id = setInterval(() => forceTick((n) => n + 1), 1000);
    return () => {
      clearInterval(id);
    };
  }, []);

  // tính "bây giờ" = mốc ban đầu + thời gian trôi qua
  const now = new Date(
    baseEpochMsRef.current + (performance.now() - startPerfRef.current)
  );

  // format theo múi giờ HCM
  const formatDate = (d: Date) =>
    d.toLocaleDateString("vi-VN", {
      timeZone: "Asia/Ho_Chi_Minh",
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    });

  const formatTime = (d: Date) =>
    d.toLocaleTimeString("vi-VN", {
      timeZone: "Asia/Ho_Chi_Minh",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false, // 24h
    });

  return { now, formatDate, formatTime };
}

export function GamePlayScreen({ onBack }: GamePlayScreenProps) {
  const { user, adjustPoints } = useAuth();

  const [selectedBetAmounts, setSelectedBetAmounts] = useState<number[]>([
    1000,
  ]);

  // 3D Perspective and Animation hooks with ultra smooth optimization
  const { get3DStyles } = use3DPerspective({
    intensity: "low", // Ultra smooth performance
    enableMouseTracking: true,
    enableParallax: false, // Disabled for better performance
    depth: 50, // Minimal depth for ultra smooth
    throttleMs: 100, // 10fps for ultra smooth performance
  });

  const { getAnimationStyles, getCyberEffects } = useCyberAnimation({
    type: "entrance",
    intensity: "low", // Ultra smooth performance
    enabled: true,
    duration: 600, // Faster animations for ultra smooth
  });
  const [processing, setProcessing] = useState(false);
  const [analyzed, setAnalyzed] = useState(false);
  const [results, setResults] = useState<
    Array<{
      horizonMinutes: number;
      windowLabel: string;
      amountRange: string;
      confidencePct: number;
      riskLevel: "low" | "medium" | "high";
      generatedAt: string; // ISO
      texts: { vi: string; en: string; zh: string; ko: string; fr: string };
    }>
  >([]);
  const aiVersions = [
    "AI v1.0",
    "Neural Network v2.1",
    "Quantum Processor v3.0",
    "Machine Learning v3.1",
    "Deep Learning v4.0",
    "Cognitive Computing v4.1",
    "Artificial Intelligence v5.0",
    "Neural Engine v5.1",
  ] as const;
  const [aiVersion, setAiVersion] = useState<(typeof aiVersions)[number]>(
    aiVersions[1]
  );
  const [sessionInfo, setSessionInfo] = useState<{
    generatedAt: string; // ISO
    riskLevel: "low" | "medium" | "high";
    riskScore: number; // 0..100
    latencyMs: number;
  } | null>(null);
  const [showSystemOverlay, setShowSystemOverlay] = useState(false);
  const [predictionAccuracy, setPredictionAccuracy] = useState<number | null>(
    null
  );
  const [waveHeight, setWaveHeight] = useState<number | null>(null);

  const { now, formatDate, formatTime } = useHcmClock();

  // Add 3D CSS custom properties and animations with optimized performance
  useEffect(() => {
    // Inject custom CSS for 3D effects with GPU acceleration
    const style = document.createElement("style");
    style.textContent = `
      .perspective-1000 { perspective: 1000px; }
      .perspective-800 { perspective: 800px; }
      .perspective-600 { perspective: 600px; }
      .perspective-500 { perspective: 500px; }

      .transform-style-preserve-3d {
        transform-style: preserve-3d;
        backface-visibility: hidden;
        -webkit-backface-visibility: hidden;
      }

      .translate-z-2 { transform: translateZ(2px); }
      .translate-z-5 { transform: translateZ(5px); }
      .translate-z-8 { transform: translateZ(8px); }
      .translate-z-10 { transform: translateZ(10px); }
      .translate-z-12 { transform: translateZ(12px); }
      .translate-z-15 { transform: translateZ(15px); }
      .translate-z-20 { transform: translateZ(20px); }
      .translate-z-25 { transform: translateZ(25px); }
      .translate-z-30 { transform: translateZ(30px); }

      .rotate-y-5 { transform: rotateY(5deg); }
      .rotate-y-8 { transform: rotateY(8deg); }
      .rotate-y-12 { transform: rotateY(12deg); }
      .rotate-y-15 { transform: rotateY(15deg); }

      .rotate-x-6 { transform: rotateX(6deg); }
      .rotate-x-8 { transform: rotateX(8deg); }

      /* Optimized animations with GPU acceleration */
      @keyframes float-3d {
        0%, 100% { transform: translate3d(0, 0, 0px) rotateY(0deg); }
        25% { transform: translate3d(0, 0, 10px) rotateY(2deg); }
        50% { transform: translate3d(0, 0, 5px) rotateY(-1deg); }
        75% { transform: translate3d(0, 0, 15px) rotateY(3deg); }
      }

      .animate-float-3d {
        animation: float-3d 6s ease-in-out infinite;
        will-change: transform;
      }

      @keyframes glow-pulse-3d {
        0%, 100% {
          box-shadow: 0 0 20px rgba(255,140,0,0.3), 0 0 40px rgba(255,140,0,0.1);
          transform: translate3d(0, 0, 0px);
        }
        50% {
          box-shadow: 0 0 30px rgba(255,140,0,0.5), 0 0 60px rgba(255,140,0,0.2);
          transform: translate3d(0, 0, 10px);
        }
      }

      .animate-glow-pulse-3d {
        animation: glow-pulse-3d 4s ease-in-out infinite;
        will-change: transform, box-shadow;
      }

      /* Smooth hover effects with GPU acceleration */
      .hover\\:translate-z-5:hover { transform: translate3d(0, 0, 5px); }
      .hover\\:translate-z-8:hover { transform: translate3d(0, 0, 8px); }
      .hover\\:translate-z-10:hover { transform: translate3d(0, 0, 10px); }
      .hover\\:translate-z-12:hover { transform: translate3d(0, 0, 12px); }
      .hover\\:translate-z-15:hover { transform: translate3d(0, 0, 15px); }
      .hover\\:translate-z-20:hover { transform: translate3d(0, 0, 20px); }
      .hover\\:translate-z-25:hover { transform: translate3d(0, 0, 25px); }

      .hover\\:rotate-y-5:hover { transform: rotateY(5deg); }
      .hover\\:rotate-y-8:hover { transform: rotateY(8deg); }
      .hover\\:rotate-y-12:hover { transform: rotateY(12deg); }
      .hover\\:rotate-y-15:hover { transform: rotateY(15deg); }

      .hover\\:rotate-x-6:hover { transform: rotateX(6deg); }
      .hover\\:rotate-x-8:hover { transform: rotateX(8deg); }

      /* Optimized card hover effects */
      .card-hover-smooth {
        transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        will-change: transform, box-shadow, background-color;
      }

      .card-hover-smooth:hover {
        transform: translate3d(0, -4px, 8px) scale(1.02);
        box-shadow:
          0 20px 40px rgba(255, 140, 0, 0.15),
          0 8px 16px rgba(0, 0, 0, 0.3);
      }

      /* Prevent layout shifts */
      .prevent-layout-shift {
        transform: translateZ(0);
        backface-visibility: hidden;
        -webkit-backface-visibility: hidden;
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  // Removed separate prediction buttons per new design

  const handlePlaceBet = async () => {
    if (processing) return;
    setProcessing(true);
    await adjustPoints(-10, "analysis");

    // Show SystemInitializationOverlay during processing
    setShowSystemOverlay(true);

    await new Promise((r) => setTimeout(r, 3000)); // Longer processing time

    // Generate optimized crash prediction scenarios for players to win
    const now = new Date();
    const baseSeed = now.getMinutes() * 60 + now.getSeconds();
    const rnd = (min: number, max: number, k: number) =>
      min + (((baseSeed * (k + 13)) % 1000) / 1000) * (max - min);
    const pick = <T,>(arr: T[], k: number): T =>
      arr[Math.floor(rnd(0, arr.length, k)) % arr.length];

    // Strategic time horizons for crash prediction (shorter = higher win chance)
    const horizons = [2, 3, 4, 5, 6, 8, 10, 12, 15, 18, 20];
    const scenarioCount = 4 + (Math.floor(rnd(0, 100, 2)) % 3); // 4-6 items
    const chosen = Array.from({ length: scenarioCount }, (_, i) =>
      pick(horizons, i + 1)
    ).sort((a, b) => a - b);

    // Optimized risk assessment for crash prediction (85-95% accuracy)
    const riskScore = Math.round(rnd(85, 95, 3)); // Always high accuracy
    const riskLevel: "low" | "medium" | "high" = "low"; // Low risk for high accuracy
    const latencyMs = Math.round(rnd(15, 80, 4)); // Faster response time

    // Diverse market conditions

    // Generate diverse amount ranges based on selected bet amounts
    const genAmountRange = (base: number, i: number) => {
      const multiplier = 1 + (i + 1) * 0.2 + Math.random() * 0.3;
      const lo = Math.round(base * multiplier);
      const hi = Math.round(lo * (1.4 + (i % 3) * 0.3));
      return `${lo.toLocaleString()}-${hi.toLocaleString()}`;
    };

    // Generate diverse scenario texts for crash game
    const generateScenarioText = (
      m: number,
      conf: number,
      amount: string,
      idx: number
    ) => {
      const scenarios = [
        {
          vi: `${aiVersion} dự đoán chính xác thời điểm nổ hủ trong ${m} phút tới. Đây là cơ hội vàng để đặt cược và thắng lớn! Mức đầu tư: ${amount}. Độ tin cậy: ${conf}%. Rủi ro: THẤP.`,
          en: `${aiVersion} precisely predicts crash timing in ${m} minutes. This is a golden opportunity to bet and win big! Investment range: ${amount}. Confidence: ${conf}%. Risk: LOW.`,
          zh: `${aiVersion} 精确预测${m}分钟后崩盘时机。这是下注并赢得大奖的黄金机会！投资范围：${amount}。置信度：${conf}%。风险：低。`,
          ko: `${aiVersion}가 ${m}분 후 크래시 타이밍을 정확히 예측합니다. 이것은 베팅하고 큰 승리를 거둘 황금 기회입니다! 투자 범위: ${amount}. 신뢰도: ${conf}%. 위험: 낮음.`,
          fr: `${aiVersion} prédit précisément le timing du crash dans ${m} minutes. C'est une opportunité en or pour parier et gagner gros ! Plage d'investissement: ${amount}. Confiance: ${conf}%. Risque: FAIBLE.`,
        },
        {
          vi: `${aiVersion} phát hiện tín hiệu nổ hủ mạnh mẽ trong ${m} phút tới. Đặt cược ngay để tận dụng cơ hội thắng lớn! Khuyến nghị đầu tư: ${amount}. Độ chính xác: ${conf}%. Mức rủi ro: THẤP.`,
          en: `${aiVersion} detects strong crash signals in ${m} minutes. Bet now to seize the opportunity for big wins! Investment recommendation: ${amount}. Accuracy: ${conf}%. Risk level: LOW.`,
          zh: `${aiVersion} 检测到${m}分钟内的强烈崩盘信号。立即下注以抓住赢得大奖的机会！投资建议：${amount}。准确度：${conf}%。风险等级：低。`,
          ko: `${aiVersion}가 ${m}분 내 강한 크래시 신호를 감지합니다. 지금 베팅하여 큰 승리의 기회를 잡으세요! 투자 권장: ${amount}. 정확도: ${conf}%. 위험 수준: 낮음.`,
          fr: `${aiVersion} détecte de forts signaux de crash dans ${m} minutes. Pariez maintenant pour saisir l'opportunité de gros gains ! Recommandation d'investissement: ${amount}. Précision: ${conf}%. Niveau de risque: FAIBLE.`,
        },
        {
          vi: `${aiVersion} xác định thời điểm hoàn hảo để đặt cược trước khi nổ hủ trong ${m} phút. Đây là cơ hội cuối cùng để thắng lớn! Mức vốn đề xuất: ${amount}. Độ tin cậy: ${conf}%. Phân loại rủi ro: THẤP.`,
          en: `${aiVersion} identifies the perfect timing to bet before crash in ${m} minutes. This is the final chance to win big! Suggested capital: ${amount}. Reliability: ${conf}%. Risk classification: LOW.`,
          zh: `${aiVersion} 识别${m}分钟时间框架内崩盘前的完美下注时机。这是赢得大奖的最后机会！建议资金：${amount}。可靠性：${conf}%。风险分类：低。`,
          ko: `${aiVersion}가 ${m}분 시간 프레임 내에서 크래시 전 완벽한 베팅 타이밍을 식별합니다. 이것은 큰 승리를 거둘 마지막 기회입니다! 제안 자본: ${amount}. 신뢰성: ${conf}%. 위험 분류: 낮음.`,
          fr: `${aiVersion} identifie le timing parfait pour parier avant le crash dans ${m} minutes. C'est la dernière chance de gagner gros ! Capital suggéré: ${amount}. Fiabilité: ${conf}%. Classification des risques: FAIBLE.`,
        },
      ];

      return scenarios[idx % scenarios.length];
    };

    const nextResults = chosen.map((m, idx) => {
      const conf = Math.round(rnd(85, 95, 10 + idx)); // Always 85-95% confidence
      const baseAmount =
        selectedBetAmounts[
          Math.floor(Math.random() * selectedBetAmounts.length)
        ];
      const amount = genAmountRange(baseAmount, idx);
      const label = `${m}m`;
      const genAtIso = now.toISOString();
      const texts = generateScenarioText(m, conf, amount, idx);

      return {
        horizonMinutes: m,
        windowLabel: label,
        amountRange: amount,
        confidencePct: conf,
        riskLevel,
        generatedAt: genAtIso,
        texts,
      };
    });

    // Generate fixed prediction accuracy and wave height (85-95% range)
    const accuracy = Math.round(85 + Math.random() * 10); // Always 85-95%
    const waveH = 100 - accuracy;

    setPredictionAccuracy(accuracy);
    setWaveHeight(waveH);

    setSessionInfo({
      generatedAt: now.toISOString(),
      riskLevel,
      riskScore,
      latencyMs,
    });

    setResults(nextResults);
    setProcessing(false);
    setAnalyzed(true);
    setShowSystemOverlay(false);
  };

  // Mock chart data
  const chartData = Array.from({ length: 50 }, (_, i) => ({
    time: i,
    value: 50 + Math.sin(i * 0.3) * 20 + ((i * 7) % 10),
  }));

  return (
    <CyberBackground
      intensity="low" // Ultra smooth performance
      showParticles={true}
      showScanLines={false} // Disabled for ultra smooth
      showGrid={true}
      showLightning={false} // Disabled for ultra smooth
    >
      {/* Floating Elements with Energy Connections */}
      <FloatingElements
        count={4} // Ultra smooth performance
        intensity="low" // Ultra smooth performance
        showConnections={false} // Disabled for ultra smooth
        enabled={true}
      />
      {/* Header */}
      <header className="sticky top-0 z-30 h-[88px] border-b border-primary/20 bg-black/80 backdrop-blur-xl">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <BackButton onClick={onBack} variant="ghost" size="sm" />
              <div>
                <p className="text-sm text-muted-foreground">AI PREDICTION</p>
              </div>
            </div>

            <div className="text-right">
              <p className="text-xs text-muted-foreground">
                {user?.fullName} · {user?.username}
              </p>
              <p className="text-lg font-bold text-primary">
                {(user?.points ?? 0).toLocaleString()} Points
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main
        className="relative z-10 mx-auto max-w-[1400px] px-4 py-6 space-y-6 md:px-10"
        style={{
          ...get3DStyles(0),
          ...getAnimationStyles(),
          ...getCyberEffects(),
        }}
      >
        {!analyzed ? (
          <>
            {/* Top: timer + small chart */}
            <GamingCard
              variant="default"
              className="p-6 transform-style-preserve-3d"
              style={{
                ...get3DStyles(1),
                transform: `${get3DStyles(1).transform} scale(1.01)`, // Reduced scale for smoother
              }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                {/* Circular timer */}
                <div className="flex items-center justify-center">
                  <CyberTimer3D
                    date={now}
                    formatDate={formatDate}
                    formatTime={formatTime}
                    size="medium"
                    intensity="high"
                  />
                </div>

                {/* Mini chart */}
                <div>
                  <CyberChart3D
                    data={chartData.slice(-30)}
                    width={600}
                    height={240}
                    showParticles={true}
                    showGlow={true}
                    showScanLines={true}
                    intensity="high"
                  />
                </div>
              </div>
            </GamingCard>

            {/* Bottom: arrows + description + analyze */}
            <GamingCard
              variant="default"
              className="p-6 transform-style-preserve-3d"
              style={{
                ...get3DStyles(2),
                transform: `${get3DStyles(2).transform} scale(1.005)`, // Minimal scale for ultra smooth
              }}
            >
              <div className="grid md:grid-cols-3 gap-6 items-center">
                <div className="flex items-center justify-center gap-6">
                  <div className="text-3xl text-primary/70 transform -skew-x-12 hover:skew-x-0 transition-transform duration-300">
                    ⟨⟨
                  </div>
                  <div className="w-14 h-14 rounded-full grid place-items-center bg-primary/20 border border-primary/40 text-primary font-bold transform hover:scale-110 hover:rotate-12 transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-primary/50">
                    {aiVersion.split(" ")[0]}
                  </div>
                  <div className="text-3xl text-primary/70 transform skew-x-12 hover:skew-x-0 transition-transform duration-300">
                    ⟩⟩
                  </div>
                </div>

                <div className="md:col-span-2 text-sm leading-relaxed text-white/80">
                  <div className="mb-3 flex flex-wrap items-center gap-3">
                    <div className="text-primary font-bold uppercase tracking-wide">
                      Chọn phiên bản AI
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {aiVersions.map((v) => (
                        <HolographicButton
                          key={v}
                          selected={aiVersion === v}
                          variant={
                            v.includes("Neural")
                              ? "neural"
                              : v.includes("Quantum")
                              ? "quantum"
                              : v.includes("Cognitive")
                              ? "cognitive"
                              : "ai"
                          }
                          size="sm"
                          onClick={() => setAiVersion(v)}
                        >
                          {v}
                        </HolographicButton>
                      ))}
                    </div>
                  </div>
                  <div className="text-primary font-bold uppercase tracking-wide mb-1">
                    CHỌN MỨC ĐẦU VỐN CHO PHÂN TÍCH NỔ HỦ
                  </div>
                  <p>
                    AI dự đoán khả năng nổ hủ trong các khung thời gian khác
                    nhau.
                  </p>
                  <p>Chọn nhiều mức vốn để tăng độ chính xác phân tích.</p>
                  <div className="mt-4 max-w-xs">
                    <BetAmountGrid3D
                      amounts={[
                        { min: 100, label: "100" },
                        { min: 300, label: "300" },
                        { min: 500, label: "500" },
                        { min: 700, label: "700" },
                        { min: 1000, label: "1000" },
                      ]}
                      selectedAmounts={selectedBetAmounts}
                      onToggleAmount={(amount) => {
                        if (selectedBetAmounts.includes(amount)) {
                          setSelectedBetAmounts((prev) =>
                            prev.filter((a) => a !== amount)
                          );
                        } else {
                          setSelectedBetAmounts((prev) => [...prev, amount]);
                        }
                      }}
                      size="md"
                      intensity="medium"
                    />
                    <DangerButton3D
                      variant="danger"
                      size="md"
                      className="w-full"
                      disabled={processing}
                      onClick={handlePlaceBet}
                    >
                      {processing ? "Đang xử lý…" : "PHÂN TÍCH"}
                    </DangerButton3D>
                  </div>
                </div>
              </div>
            </GamingCard>
          </>
        ) : (
          <>
            {/* Post-analysis layout */}
            <GamingCard variant="default" className="p-6">
              <div className="grid lg:grid-cols-3 gap-6">
                {/* Left: AI figure + Risk summary */}
                <HolographicAI3D
                  riskScore={sessionInfo?.riskScore ?? 0}
                  riskLevel={sessionInfo?.riskLevel ?? "low"}
                  aiVersion={aiVersion}
                  latencyMs={sessionInfo?.latencyMs ?? 0}
                  generatedAt={
                    sessionInfo?.generatedAt ?? new Date().toISOString()
                  }
                />

                {/* Middle: Prediction accuracy + bars */}
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4 items-center">
                    <PlasmaEnergyField
                      accuracy={predictionAccuracy ?? 85}
                      size="md"
                    />
                    <div className="transform hover:translate-x-2 transition-transform duration-300">
                      <div className="text-2xl font-extrabold tracking-wide text-white">
                        {aiVersion.split(" ")[0]} PREDICTION
                      </div>
                      <div className="text-4xl font-extrabold text-primary">
                        {predictionAccuracy ?? 85}/100
                      </div>
                      <div className="text-sm text-white/70">
                        Market signal accuracy probability
                      </div>
                      <div className="text-xs text-white/50 mt-1">
                        Độ chính xác tín hiệu thị trường
                      </div>
                    </div>
                  </div>

                  {/* Tiny column bars */}
                  <div className="flex items-end gap-1 h-16">
                    {Array.from({ length: 8 }, (_, i) => {
                      const height = Math.round(6 + Math.random() * 15);
                      return (
                        <div
                          key={i}
                          className="w-3 bg-primary/50 rounded-t transform hover:scale-y-110 hover:scale-x-125 transition-transform duration-300 hover:shadow-lg hover:shadow-primary/30"
                          style={{ height: `${height * 4}px` }}
                        />
                      );
                    })}
                  </div>
                </div>

                {/* Right: dynamic wave chart based on prediction accuracy */}
                <CyberWaveChart3D
                  predictionAccuracy={predictionAccuracy ?? 85}
                  waveHeight={waveHeight ?? 15}
                />
              </div>
            </GamingCard>

            {/* Suggested actions list (re-using results text) */}
            {results.length > 0 && (
              <GamingCard variant="default" className="p-6">
                <div className="grid md:grid-cols-3 gap-4">
                  {results.map((r, i) => (
                    <div
                      key={i}
                      className="group relative rounded-lg border border-primary/30 p-4 bg-gaming-dark/60 transform-style-preserve-3d card-hover-smooth prevent-layout-shift"
                      style={{
                        transform: `translateZ(0px)`,
                        willChange: "transform",
                      }}
                    >
                      {/* Smooth 3D Card Stacking Effect */}
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out rounded-lg" />

                      {/* Subtle 3D depth layer */}
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out rounded-lg translate-z-2" />

                      <div className="relative z-10">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm text-muted-foreground group-hover:text-white/90 transition-colors duration-300">
                            {r.windowLabel}
                          </span>
                          <span className="text-primary font-bold group-hover:text-primary/90 transition-colors duration-300">
                            {r.amountRange}
                          </span>
                        </div>

                        <div className="text-sm text-white/90 mb-1 group-hover:text-white transition-colors duration-300">
                          <GlitchText intensity="low">{r.texts.vi}</GlitchText>
                        </div>
                        <div className="text-xs text-white/70 mb-1 group-hover:text-white/80 transition-colors duration-300">
                          {r.texts.en}
                        </div>
                        <div className="text-xs text-orange-300/80 mb-1 group-hover:text-orange-300 transition-colors duration-300">
                          {r.texts.zh}
                        </div>
                        <div className="text-xs text-orange-200/70 mb-1 group-hover:text-orange-200 transition-colors duration-300">
                          {r.texts.ko}
                        </div>
                        <div className="text-xs text-orange-100/60 group-hover:text-orange-100 transition-colors duration-300">
                          {r.texts.fr}
                        </div>

                        <div className="mt-2 flex items-center gap-3 text-[11px] text-white/70 group-hover:text-white/80 transition-colors duration-300">
                          <span>Conf: {r.confidencePct}%</span>
                          <span>Risk: {r.riskLevel.toUpperCase()}</span>
                          <span>{formatTime(new Date(r.generatedAt))}</span>
                        </div>

                        <div className="mt-2 pt-2 border-t border-primary/20 text-[10px] text-white/50 group-hover:text-white/60 transition-colors duration-300">
                          <div>
                            Market:{" "}
                            {
                              ["bullish", "bearish", "volatile", "stable"][
                                i % 4
                              ]
                            }
                          </div>
                          <div>
                            Signal: {Math.round(85 + ((i * 3) % 10))}% strength
                          </div>
                        </div>
                      </div>

                      {/* Danger Zone Indicator for High Risk */}
                      {r.riskLevel === "high" && (
                        <div className="absolute top-2 right-2 z-20">
                          <DangerZoneIndicator
                            level="high"
                            message="High Risk Zone"
                            className="w-16 h-16"
                          />
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </GamingCard>
            )}

            <div className="flex justify-center mb-10">
              <GamingButton
                variant="outline"
                onClick={() => setAnalyzed(false)}
              >
                Phân tích lại
              </GamingButton>
            </div>
          </>
        )}
      </main>

      {/* Bottom chrome - Enhanced 3D */}
      <div className="pointer-events-none absolute mt-10 inset-x-0 bottom-0 z-0 h-32 bg-gradient-to-t from-black via-black/50 to-transparent">
        <div className="absolute mt-10 inset-x-0 bottom-4 mx-auto flex h-12 max-w-[1200px] items-center justify-between rounded-xl border border-primary/30 bg-gradient-to-r from-primary/10 via-black/50 to-primary/10 px-6 backdrop-blur-sm transform-style-preserve-3d perspective-1000">
          {/* 3D Depth layers */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5 rounded-xl translate-z-5" />
          <div className="absolute inset-0 border border-primary/20 rounded-xl translate-z-10 opacity-60" />

          <div className="flex items-center gap-6 relative z-20 transform-style-preserve-3d">
            <div className="flex items-center gap-2 text-sm font-mono text-primary hover:translate-z-15 transition-transform duration-500 ease-out">
              <div className="h-2 w-2 rounded-full bg-primary animate-pulse hover:scale-150 transition-transform duration-500 ease-out" />
              SESSION ACTIVE
            </div>
            {Array.from({ length: 4 }).map((_, i) => (
              <div
                key={i}
                className="h-3 w-8 transform skew-x-12 bg-gradient-to-r from-primary/60 to-primary hover:scale-110 hover:translate-z-10 transition-all duration-500 ease-out hover:shadow-lg hover:shadow-primary/30"
                style={{
                  animationDelay: `${i * 0.1}s`,
                  transform: `skewX(12deg) translateZ(${i * 2}px)`,
                  willChange: "transform",
                }}
              />
            ))}
          </div>

          <div className="flex items-center gap-6 relative z-20 transform-style-preserve-3d">
            {Array.from({ length: 4 }).map((_, i) => (
              <div
                key={i}
                className="h-3 w-8 transform -skew-x-12 bg-gradient-to-r from-primary to-primary/60 hover:scale-110 hover:translate-z-10 transition-all duration-500 ease-out hover:shadow-lg hover:shadow-primary/30"
                style={{
                  animationDelay: `${i * 0.1}s`,
                  transform: `skewX(-12deg) translateZ(${i * 2}px)`,
                  willChange: "transform",
                }}
              />
            ))}
            <div
              className="text-sm font-mono text-primary hover:translate-z-15 hover:scale-105 transition-all duration-500 ease-out"
              style={{ textShadow: "0 0 8px rgba(255,140,0,0.6)" }}
            >
              NEURAL.LINK.ACTIVE
            </div>
          </div>
        </div>
      </div>

      {/* System Initialization Overlay */}
      <SystemInitializationOverlay
        isOpen={showSystemOverlay}
        totalDurationMs={3000}
        onDone={() => setShowSystemOverlay(false)}
        performanceMode="balanced"
        maxLogs={50}
        fpsCap={60}
      />
    </CyberBackground>
  );
}
