"use client";

import * as React from "react";
import Image from "next/image";
import { Search } from "lucide-react";
import { useEffect, useState } from "react";

// -----------------------------
// Types
// -----------------------------
interface GameProvider {
  id: string;
  name: string;
  percentage: number;
  logo: string;
  winRate: number;
  status: "online" | "maintenance" | "offline";
  players: number;
  description: string;
}

function getRandomInt(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomFloat(min: number, max: number, decimals = 1): number {
  const str = (Math.random() * (max - min) + min).toFixed(decimals);
  return parseFloat(str);
}

// -----------------------------
// Mock data with cyber theme
// -----------------------------
const gameProviders: GameProvider[] = [
  {
    id: "168game",
    name: "168Game",
    percentage: getRandomInt(80, 95),
    logo: "/assets/game/349_N_168G_LOGO.avif",
    winRate: getRandomFloat(70, 95.5),
    status: "online",
    players: getRandomInt(5000, 20000),
    description:
      "Advanced AI-powered slot analysis with quantum probability calculations",
  },
  {
    id: "pg",
    name: "PG",
    percentage: getRandomInt(80, 95),
    logo: "/assets/game/200_N_PG_LOGO.avif",
    winRate: getRandomFloat(70, 95.5),
    status: "online",
    players: getRandomInt(5000, 20000),
    description:
      "Neural network prediction system with real-time pattern recognition",
  },
  {
    id: "jili",
    name: "JILI",
    percentage: getRandomInt(80, 95),
    logo: "/assets/game/40_N_JILI_LOGO.avif",
    winRate: 89.7,
    status: "maintenance",
    players: getRandomInt(5000, 20000),
    description:
      "Blockchain-secured gaming environment with encrypted data streams",
  },
  {
    id: "fc",
    name: "FC",
    percentage: getRandomInt(80, 95),
    logo: "/assets/game/24_N_FC_LOGO.avif",
    winRate: getRandomFloat(70, 95.5),
    status: "online",
    players: getRandomInt(5000, 20000),
    description:
      "Machine learning algorithms optimized for maximum profit analysis",
  },
  {
    id: "mg",
    name: "MG",
    percentage: getRandomInt(80, 95),
    logo: "/assets/game/313_N_MG_LOGO.avif",
    winRate: getRandomFloat(70, 95.5),
    status: "online",
    players: getRandomInt(5000, 20000),
    description:
      "Cybersecurity-enhanced platform with advanced threat detection",
  },
  {
    id: "pp",
    name: "PP",
    percentage: getRandomInt(80, 95),
    logo: "/assets/game/37_N_PP_LOGO.avif",
    winRate: getRandomFloat(70, 95.5),
    status: "online",
    players: getRandomInt(5000, 20000),
    description:
      "Neural-network–driven gameplay forecasting with adaptive strategies",
  },
  {
    id: "jdb",
    name: "JDB",
    percentage: getRandomInt(80, 95),
    logo: "/assets/game/310_N_JDB_LOGO.avif",
    winRate: getRandomFloat(70, 95.5),
    status: "online",
    players: getRandomInt(5000, 20000),
    description:
      "Blockchain-verified randomization ensuring transparent fairness",
  },
  {
    id: "tp",
    name: "TP",
    percentage: getRandomInt(80, 95),
    logo: "/assets/game/117_N_TP_LOGO.avif",
    winRate: getRandomFloat(70, 95.5),
    status: "online",
    players: getRandomInt(5000, 20000),
    description:
      "Predictive slot engine enhanced by deep reinforcement learning",
  },
  {
    id: "ygr",
    name: "YGR",
    percentage: getRandomInt(80, 95),
    logo: "/assets/game/70_N_YGR_LOGO.avif",
    winRate: getRandomFloat(70, 95.5),
    status: "online",
    players: getRandomInt(5000, 20000),
    description:
      "Quantum-inspired algorithm optimizing payout cycles dynamically",
  },
  {
    id: "cq9",
    name: "CQ9",
    percentage: getRandomInt(80, 95),
    logo: "/assets/game/3_N_CQ9_LOGO.avif",
    winRate: getRandomFloat(70, 95.5),
    status: "online",
    players: getRandomInt(5000, 20000),
    description: "Real-time anomaly detection with cyber-defense integration",
  },
  {
    id: "ka",
    name: "KA",
    percentage: getRandomInt(80, 95),
    logo: "/assets/game/27_N_KA_LOGO.avif",
    winRate: getRandomFloat(70, 95.5),
    status: "online",
    players: getRandomInt(5000, 20000),
    description:
      "Data-driven spin prediction using advanced statistical inference",
  },
  {
    id: "evoplay",
    name: "Evoplay",
    percentage: getRandomInt(80, 95),
    logo: "/assets/game/109_N_EP_LOGO.avif",
    winRate: getRandomFloat(70, 95.5),
    status: "online",
    players: getRandomInt(5000, 20000),
    description: "Encrypted gaming streams with AI-based fraud prevention",
  },
  {
    id: "dragoon soft",
    name: "Dragoon Soft",
    percentage: getRandomInt(80, 95),
    logo: "/assets/game/118_N_DS_LOGO.avif",
    winRate: getRandomFloat(70, 95.5),
    status: "online",
    players: getRandomInt(5000, 20000),
    description:
      "Evolutionary algorithm balancing volatility and win potential",
  },
  {
    id: "playstart",
    name: "PlayStart",
    percentage: getRandomInt(80, 95),
    logo: "/assets/game/34_N_PS_LOGO.avif",
    winRate: getRandomFloat(70, 95.5),
    status: "online",
    players: getRandomInt(5000, 20000),
    description: "Smart RTP optimization powered by cloud-based neural graphs",
  },
  {
    id: "spadegaming",
    name: "Spade Gaming",
    percentage: getRandomInt(80, 95),
    logo: "/assets/game/45_N_SG_LOGO.avif",
    winRate: getRandomFloat(70, 95.5),
    status: "online",
    players: getRandomInt(5000, 20000),
    description:
      "Self-learning win pattern recognition across millions of plays",
  },
  {
    id: "yellowbat",
    name: "Yellow Bat",
    percentage: getRandomInt(80, 95),
    logo: "/assets/game/128_N_Yesbingo_LOGO.avif",
    winRate: getRandomFloat(70, 95.5),
    status: "online",
    players: getRandomInt(5000, 20000),
    description: "Adaptive reward scaling via reinforcement AI agents",
  },
  {
    id: "wg",
    name: "WG",
    percentage: getRandomInt(80, 95),
    logo: "/assets/game/13_N_WG_LOGO.avif",
    winRate: getRandomFloat(70, 95.5),
    status: "online",
    players: getRandomInt(5000, 20000),
    description: "Distributed ledger mechanics securing every game session",
  },
  {
    id: "pa",
    name: "PA",
    percentage: getRandomInt(80, 95),
    logo: "/assets/game/10_N_AG_LOGO.avif",
    winRate: getRandomFloat(70, 95.5),
    status: "online",
    players: getRandomInt(5000, 20000),
    description: "Predictive volatility analysis with multi-factor simulations",
  },
  {
    id: "bng",
    name: "BNG",
    percentage: getRandomInt(80, 95),
    logo: "/assets/game/33_N_BNG_LOGO.avif",
    winRate: getRandomFloat(70, 95.5),
    status: "online",
    players: getRandomInt(5000, 20000),
    description: "Advanced RNG calibration backed by neural optimization",
  },
  {
    id: "hacksawgaming",
    name: "Hacksaw Gaming",
    percentage: getRandomInt(80, 95),
    logo: "/assets/game/108_N_HS_LOGO.avif",
    winRate: getRandomFloat(70, 95.5),
    status: "online",
    players: getRandomInt(5000, 20000),
    description: "Cross-platform AI gaming core with seamless scaling",
  },
  {
    id: "nolimitcity",
    name: "Nolimit City",
    percentage: getRandomInt(80, 95),
    logo: "/assets/game/114_N_NolimitCity_LOGO.avif",
    winRate: getRandomFloat(70, 95.5),
    status: "online",
    players: getRandomInt(5000, 20000),
    description: "Quantum probability layers driving payout curve adjustments",
  },
  {
    id: "redtiger",
    name: "Red Tiger",
    percentage: getRandomInt(80, 95),
    logo: "/assets/game/32_N_RT_LOGO.avif",
    winRate: getRandomFloat(70, 95.5),
    status: "online",
    players: getRandomInt(5000, 20000),
    description: "Secure enclave–processed spins ensuring tamper-proof results",
  },
  {
    id: "va",
    name: "VA",
    percentage: getRandomInt(80, 95),
    logo: "/assets/game/326_N_VA_LOGO.avif",
    winRate: getRandomFloat(70, 95.5),
    status: "online",
    players: getRandomInt(5000, 20000),
    description: "Adaptive jackpot forecasting via Bayesian networks",
  },
  {
    id: "mw",
    name: "MW",
    percentage: getRandomInt(80, 95),
    logo: "/assets/game/325_N_MW-SL_LOGO.avif",
    winRate: getRandomFloat(70, 95.5),
    status: "online",
    players: getRandomInt(5000, 20000),
    description: "Predictive load balancing for real-time multiplayer fairness",
  },
  {
    id: "bgaming",
    name: "BGaming",
    percentage: getRandomInt(80, 95),
    logo: "/assets/game/342_N_BGaming_LOGO.avif",
    winRate: getRandomFloat(70, 95.5),
    status: "online",
    players: getRandomInt(5000, 20000),
    description: "Blockchain-anchored proof-of-play with encrypted validation",
  },
  {
    id: "mp",
    name: "MB",
    percentage: getRandomInt(80, 95),
    logo: "/assets/game/105_N_MP_LOGO.avif",
    winRate: getRandomFloat(70, 95.5),
    status: "online",
    players: getRandomInt(5000, 20000),
    description: "AI-curated bonus cycle detection for optimized playtime",
  },
  {
    id: "askmeslot",
    name: "Askmeslot",
    percentage: getRandomInt(80, 95),
    logo: "/assets/game/365_N_askmeslot_LOGO.avif",
    winRate: getRandomFloat(70, 95.5),
    status: "online",
    players: getRandomInt(5000, 20000),
    description: "Reinforcement learning engine adjusting volatility live.",
  },
  {
    id: "mancala",
    name: "Mancala",
    percentage: getRandomInt(80, 95),
    logo: "/assets/game/340_N_Mancala_LOGO.avif",
    winRate: getRandomFloat(70, 95.5),
    status: "online",
    players: getRandomInt(5000, 20000),
    description: "Predictive slot clustering via unsupervised deep learning",
  },
];

// -----------------------------
// Small UI helpers with cyber theme
// -----------------------------
function CyberCorner() {
  return (
    <>
      {/* TL */}
      <div className="absolute left-0 top-0 h-3 w-3">
        <div className="absolute inset-0 border-l-2 border-t-2 border-orange-400/60" />
        <div className="absolute -left-[1px] -top-[1px] h-2 w-2 bg-orange-400/20" />
      </div>
      {/* TR */}
      <div className="absolute right-0 top-0 h-3 w-3">
        <div className="absolute inset-0 border-r-2 border-t-2 border-orange-400/60" />
        <div className="absolute -right-[1px] -top-[1px] h-2 w-2 bg-orange-400/20" />
      </div>
      {/* BL */}
      <div className="absolute bottom-0 left-0 h-3 w-3">
        <div className="absolute inset-0 border-b-2 border-l-2 border-orange-400/60" />
        <div className="absolute -bottom-[1px] -left-[1px] h-2 w-2 bg-orange-400/20" />
      </div>
      {/* BR */}
      <div className="absolute bottom-0 right-0 h-3 w-3">
        <div className="absolute inset-0 border-b-2 border-r-2 border-orange-400/60" />
        <div className="absolute -bottom-[1px] -right-[1px] h-2 w-2 bg-orange-400/20" />
      </div>
    </>
  );
}

function CyberHexBadge({ children }: { children?: React.ReactNode }) {
  return (
    <div className="absolute left-1/2 -top-[60px] -translate-x-1/2">
      <div className="relative h-[120px] w-36">
        {/* outer glow */}
        <div
          className="absolute inset-0 animate-pulse bg-gradient-to-b from-yellow-300/40 via-yellow-400/40 to-yellow-600/40 blur-sm"
          style={{
            clipPath:
              "polygon(25% 0%, 75% 0%, 100% 25%, 100% 75%, 75% 100%, 25% 100%, 0% 75%, 0% 25%)",
          }}
        />
        {/* main hexagon */}
        <div
          className="absolute inset-1 bg-gradient-to-b from-yellow-300 via-yellow-400 to-yellow-600 shadow-[0_0_30px_rgba(234,179,8,0.5)]"
          style={{
            clipPath:
              "polygon(25% 0%, 75% 0%, 100% 25%, 100% 75%, 75% 100%, 25% 100%, 0% 75%, 0% 25%)",
          }}
        />
        {/* inner hexagon */}
        <div
          className="absolute left-2 right-2 top-2 bottom-2 bg-gradient-to-b from-gray-900 via-black to-gray-900"
          style={{
            clipPath:
              "polygon(25% 0%, 75% 0%, 100% 25%, 100% 75%, 75% 100%, 25% 100%, 0% 75%, 0% 25%)",
          }}
        />
        {/* content slot */}
        <div className="absolute inset-0 grid place-items-center">
          {children}
        </div>
      </div>
    </div>
  );
}

function CyberProgressBar({
  label,
  value,
  color = "cyan",
}: {
  label: string;
  value: number;
  color?: "cyan" | "green" | "yellow" | "red";
}) {
  const colorClasses = {
    cyan: "from-orange-400 to-orange-600",
    green: "from-green-400 to-green-600",
    yellow: "from-yellow-400 to-yellow-600",
    red: "from-red-400 to-red-600",
  };

  return (
    <div className="flex items-center gap-2 text-xs">
      <span className="w-12 text-gray-400 font-mono">{label}</span>
      <div className="flex-1 h-1 bg-gray-800 rounded overflow-hidden">
        <div
          className={`h-full bg-gradient-to-r ${colorClasses[color]} transition-all duration-1000`}
          style={{ width: `${value}%` }}
        />
      </div>
      <span className="w-8 text-right text-gray-300 font-mono text-[10px]">
        {value}%
      </span>
    </div>
  );
}

function CyberGrid() {
  return (
    <div className="absolute left-4 top-[70px] w-32 h-16 opacity-30">
      {/* Vertical lines */}
      {Array.from({ length: 8 }).map((_, i) => (
        <div
          key={`v-${i}`}
          className="absolute w-[1px] h-full bg-gradient-to-b from-transparent via-orange-400/40 to-transparent"
          style={{ left: i * 16 }}
        />
      ))}
      {/* Horizontal lines */}
      {Array.from({ length: 4 }).map((_, i) => (
        <div
          key={`h-${i}`}
          className="absolute w-full h-[1px] bg-gradient-to-r from-transparent via-orange-400/40 to-transparent"
          style={{ top: i * 16 }}
        />
      ))}
      {/* Scanning line */}
      <div className="absolute w-full h-[2px] bg-gradient-to-r from-transparent via-orange-400 to-transparent animate-pulse" />
    </div>
  );
}

// -----------------------------
// Modern Cyber Card Component
// -----------------------------
function CyberSlotCard({
  provider,
  onClick,
}: {
  provider: GameProvider;
  onClick: () => void;
}) {
  const statusColors = {
    online: "text-green-400 bg-green-400/20",
    maintenance: "text-yellow-400 bg-yellow-400/20",
    offline: "text-red-400 bg-red-400/20",
  };

  return (
    <div
      className="group relative w-full max-w-[380px] cursor-pointer transition-all duration-500 hover:scale-105"
      onClick={onClick}
    >
      {/* Main card container */}
      <div className="relative h-[280px] w-full overflow-hidden rounded-lg border border-orange-400/30 bg-gradient-to-br from-gray-900/95 via-black/95 to-gray-800/95 shadow-[0_0_40px_rgba(255,156,13,0.15)] backdrop-blur-sm group-hover:border-orange-400/60 group-hover:shadow-[0_0_60px_rgba(255,156,13,0.25)] transition-all duration-500">
        {/* Cyber corners */}
        <CyberCorner />

        {/* Animated border glow */}
        <div className="absolute inset-0 rounded-lg border border-orange-400/0 group-hover:border-orange-400/20 transition-all duration-500" />

        {/* Background grid pattern */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="h-full w-full"
            style={{
              backgroundImage: `
                linear-gradient(rgba(255,156,13,0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255,156,13,0.1) 1px, transparent 1px)
              `,
              backgroundSize: "20px 20px",
            }}
          />
        </div>

        {/* Top hexagon badge */}
        <CyberHexBadge>
          <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-black/80 border border-yellow-400/30">
            <Image
              src={provider.logo}
              alt={provider.name}
              width={40}
              height={40}
              className="object-contain"
            />
          </div>
        </CyberHexBadge>

        {/* Status indicator */}
        <div className="absolute right-4 top-4">
          <div
            className={`inline-flex items-center gap-1 rounded-full px-2 py-1 text-xs font-mono ${
              statusColors[provider.status]
            }`}
          >
            <div className="h-1.5 w-1.5 rounded-full bg-current animate-pulse" />
            {provider.status.toUpperCase()}
          </div>
        </div>

        {/* Provider name */}
        <div className="absolute left-4 top-[70px]">
          <h3 className="text-lg font-black tracking-wider text-white mb-1">
            {provider.name}
          </h3>
          <div className="text-xs text-orange-400 font-mono">
            {provider.players.toLocaleString()} players
          </div>
        </div>

        {/* Description */}
        <div className="absolute left-4 right-4 top-[115px]">
          <p className="text-xs leading-relaxed text-gray-300 font-mono">
            {provider.description}
          </p>
        </div>

        {/* Progress bars */}
        <div className="absolute left-4 right-4 top-[170px] space-y-2">
          <CyberProgressBar
            label="WIN"
            value={provider.winRate}
            color="green"
          />
          <CyberProgressBar
            label="RTP"
            value={provider.percentage}
            color="cyan"
          />
          <CyberProgressBar
            label="VOL"
            value={Math.floor(Math.random() * 20) + 60}
            color="yellow"
          />
        </div>

        {/* Cyber grid overlay */}
        <CyberGrid />

        {/* Provider name + percentage circle */}
        <div className="absolute left-4 right-4 top-[70px] flex items-center justify-between">
          <div>
            <h3 className="text-lg font-black tracking-wider text-white mb-1">
              {provider.name}
            </h3>
            <div className="text-xs text-orange-400 font-mono">
              {provider.players.toLocaleString()} players
            </div>
          </div>

          {/* Percentage circle */}
          <div className="relative h-12 w-12">
            {/* Outer ring */}
            <div className="absolute inset-0 rounded-full border-2 border-orange-400/30" />
            {/* Animated ring */}
            <div
              className="absolute inset-0 rounded-full border-2 border-transparent border-t-orange-400 animate-spin"
              style={{ animationDuration: "3s" }}
            />
            {/* Center */}
            <div className="absolute inset-1 rounded-full bg-black/80 flex items-center justify-center">
              <span className="text-xs font-bold text-orange-400">
                {provider.percentage}%
              </span>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="absolute left-1/2 bottom-4 -translate-x-1/2">
          <button className="group/btn relative overflow-hidden rounded-lg bg-gradient-to-r from-yellow-400 to-yellow-600 px-4 py-1.5 font-bold text-black text-xs tracking-wide transition-all duration-300 hover:from-yellow-300 hover:to-yellow-500 hover:shadow-[0_0_15px_rgba(234,179,8,0.5)]">
            <span className="relative z-10">PHÂN TÍCH</span>
            {/* Button glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300" />
          </button>
        </div>

        {/* Scan line animation */}
        <div className="absolute left-0 top-0 h-[2px] w-full bg-gradient-to-r from-transparent via-orange-400 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-all duration-500" />
      </div>
    </div>
  );
}

// -----------------------------
// Main screen
// -----------------------------
export interface GameSelectionScreenProps {
  onGameSelect?: (gameId: string) => void;
  onBack?: () => void;
}

export default function GameSelectionScreen({
  onGameSelect,
  onBack,
}: GameSelectionScreenProps) {
  const [active, setActive] = useState(78297);
  const [winRate, setWinRate] = useState(87.3);

  useEffect(() => {
    const interval = setInterval(() => {
      // Tăng/giảm random cho ACTIVE
      setActive(
        (prev) =>
          prev + (Math.random() > 0.5 ? 1 : -1) * Math.floor(Math.random() * 50)
      );

      // Tăng/giảm random cho WIN RATE
      setWinRate((prev) => {
        let next = prev + (Math.random() > 0.5 ? 0.1 : -0.1);
        // Giữ winRate trong khoảng 80% - 95%
        if (next < 80) next = 80;
        if (next > 95) next = 95;
        return parseFloat(next.toFixed(1));
      });
    }, 2000); // thay đổi mỗi 2 giây

    return () => clearInterval(interval);
  }, []);
  return (
    <div className="relative min-h-screen overflow-hidden bg-black">
      {/* Animated background */}
      <div className="pointer-events-none absolute inset-0">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-black to-slate-800" />

        {/* Animated cyber glow */}
        <div className="absolute inset-0 bg-gradient-to-r from-orange-900/0 via-orange-900/10 to-orange-900/0 animate-pulse" />

        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,156,13,0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,156,13,0.3) 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px",
          }}
        />

        {/* Floating particles */}
        <div className="absolute inset-0">
          {Array.from({ length: 20 }).map((_, i) => (
            <div
              key={i}
              className="absolute h-1 w-1 bg-orange-400/30 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 2}s`,
              }}
            />
          ))}
        </div>
      </div>

      {/* HEADER */}
      <header className="sticky top-0 z-30 h-[88px] border-b border-orange-400/20 bg-black/80 backdrop-blur-xl">
        <div className="mx-auto flex h-full max-w-[1400px] items-center justify-between  md:px-10">
          <div className="flex items-center gap-4">
            {/* Logo */}
            <div className="flex-shrink-0 flex justify-center pt-12 md:pt-16">
              <button
                onClick={onBack}
                className=" w-40 md:h-32 md:w-52 bg-center bg-cover bg-no-repeat hover:scale-105 transition-transform cursor-pointer"
                style={{
                  backgroundImage: "url('/assets/login/logo.png')",
                }}
                aria-label="Quay về trang chủ"
              />
            </div>
            {/* Cyber accent */}
            <div className="h-8 w-[2px] bg-gradient-to-b from-transparent via-orange-400 to-transparent" />
            <div className="font-mono text-sm text-orange-400">v2.1.5</div>
          </div>

          <div className="flex items-center gap-4">
            {/* Status indicator */}
            <div className="flex items-center gap-2 text-sm font-mono text-green-400">
              <div className="h-2 w-2 rounded-full bg-green-400 animate-pulse" />
              ONLINE
            </div>

            <button
              aria-label="Tìm kiếm"
              className="group relative inline-flex h-10 w-10 items-center justify-center rounded-lg border border-orange-400/30 bg-orange-400/10 hover:border-orange-400/60 hover:bg-orange-400/20 transition-all duration-300"
            >
              <Search className="h-5 w-5 text-orange-400 group-hover:text-orange-300 transition-colors" />
              <div className="absolute inset-0 rounded-lg bg-orange-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>
          </div>
        </div>
      </header>

      {/* Title strip */}
      <div className="relative z-10 flex h-[116px] items-center justify-between border-b border-orange-400/20 bg-gradient-to-r from-black/60 via-black/80 to-black/60 px-6 backdrop-blur-xl md:px-10">
        <div className="flex items-center gap-6">
          <h1 className="text-3xl font-black leading-tight md:text-[40px]">
            <span className="bg-gradient-to-r from-orange-300 via-orange-400 to-orange-600 bg-clip-text text-transparent">
              CYBER SLOT
            </span>
            <span className="ml-3 text-white">AI</span>
          </h1>

          {/* Animated accent */}
          <div className="flex items-center gap-1">
            {Array.from({ length: 3 }).map((_, i) => (
              <div
                key={i}
                className="h-2 w-2 rounded-full bg-orange-400 animate-pulse"
                style={{ animationDelay: `${i * 0.2}s` }}
              />
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="hidden md:flex items-center gap-6 text-sm font-mono">
          <div className="text-center">
            <div className="text-orange-400">ACTIVE</div>
            <div className="text-white font-bold">
              {active.toLocaleString()}
            </div>
          </div>
          <div className="h-8 w-[1px] bg-orange-400/30" />
          <div className="text-center">
            <div className="text-green-400">WIN RATE</div>
            <div className="text-white font-bold">{winRate}%</div>
          </div>
        </div>
      </div>

      {/* GRID */}
      <main className="relative z-10 mx-auto max-w-[1400px] px-6 pb-28 pt-16 md:px-10">
        <div className="grid grid-cols-1 justify-items-center gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
          {gameProviders.map((p) => (
            <CyberSlotCard
              key={p.id}
              provider={p}
              onClick={() => onGameSelect?.(p.id)}
            />
          ))}
        </div>
      </main>

      {/* Bottom chrome */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-0 h-32 bg-gradient-to-t from-black via-black/50 to-transparent">
        <div className="absolute inset-x-0 bottom-4 mx-auto flex h-12 max-w-[1200px] items-center justify-between rounded-xl border border-orange-400/30 bg-gradient-to-r from-orange-400/10 via-black/50 to-orange-400/10 px-6 backdrop-blur-sm">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 text-sm font-mono text-orange-400">
              <div className="h-2 w-2 rounded-full bg-orange-400 animate-pulse" />
              SYSTEM ACTIVE
            </div>
            {Array.from({ length: 4 }).map((_, i) => (
              <div
                key={i}
                className="h-3 w-8 bg-gradient-to-r from-orange-400/60 to-orange-600/60 transform skew-x-12"
                style={{ animationDelay: `${i * 0.1}s` }}
              />
            ))}
          </div>

          <div className="flex items-center gap-6">
            {Array.from({ length: 4 }).map((_, i) => (
              <div
                key={i}
                className="h-3 w-8 bg-gradient-to-r from-orange-600/60 to-orange-400/60 transform -skew-x-12"
                style={{ animationDelay: `${i * 0.1}s` }}
              />
            ))}
            <div className="text-sm font-mono text-orange-400">
              NEURAL.LINK.ACTIVE
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
