"use client";

import * as React from "react";
import { useMemo } from "react";
import Image from "next/image";
import { GamingButton } from "@/components/ui/gaming-button";
import AppBar from "@/components/ui/app-bar";
import AdvancedCyberChart from "@/components/ui/AdvancedCyberChart";
import {
  getGamesByProvider,
  providerToGames,
  type ProviderGame,
} from "@/data/games";

interface GameRoomScreenProps {
  providerId?: string;
  onPredict?: (gameId: string) => void;
  onBack?: () => void;
}

export function GameRoomScreen({
  providerId,
  onPredict,
  onBack,
}: GameRoomScreenProps) {
  const filtered = useMemo<ProviderGame[]>(() => {
    const data = providerId ? getGamesByProvider(providerId) : [];
    const fallback = Object.values(providerToGames).flat().slice(0, 20);
    return data && data.length > 0 ? data : fallback;
  }, [providerId]);

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Ambient cyber background */}
      <div className="pointer-events-none absolute inset-0 opacity-60">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(234,179,8,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(234,179,8,0.08) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-900/0 via-yellow-900/10 to-yellow-900/0 animate-pulse" />
      </div>
      {/* Header */}
      <AppBar
        onBack={onBack}
        title={(providerId || "Provider").toUpperCase()}
        rightSlot={
          <div className="hidden md:flex items-center gap-3 font-mono text-xs text-yellow-400/70 select-none">
            <div className="mt-3 relative">
              <AdvancedCyberChart
                width={600}
                height={60}
                duration={2600}
                primaryColor="#ff6600"
                secondaryColor="#ff4400"
                showGrid={true}
                showLabels={true}
                showParticles={true}
                animationType="elastic"
                dataPoints={42}
                volatility={0.22}
              />
            </div>
          </div>
        }
      />

      {/* Grid */}
      <main className="relative z-10 mx-auto max-w-[1400px] px-4 py-8 md:px-8 md:py-12">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
          {filtered.map((game) => (
            <MemoGameCard
              key={game.id}
              game={game}
              onPredict={() => onPredict?.(game.id)}
            />
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold text-white mb-2">
              Không tìm thấy trò chơi
            </h3>
            <p className="text-yellow-400/70">Thử từ khóa khác</p>
          </div>
        )}
      </main>
    </div>
  );
}

function GameCard({
  game,
  onPredict,
}: {
  game: ProviderGame;
  onPredict: () => void;
}) {
  return (
    <div
      className="group relative w-full max-w-[380px] mx-auto"
      onClick={onPredict}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onPredict();
        }
      }}
    >
      <div className="relative h-[280px] sm:h-[320px] w-full overflow-hidden rounded-lg border border-yellow-400/25 bg-gradient-to-br from-gray-900/90 via-black/90 to-gray-800/90 shadow-[0_0_18px_rgba(234,179,8,0.12)] backdrop-blur-sm transition-all duration-300 ease-out group-hover:shadow-[0_0_70px_rgba(234,179,8,0.35)] group-hover:border-yellow-400/60 group-hover:-translate-y-1.5 group-hover:scale-[1.015] will-change-transform">
        {/* Outer neon glow */}
        <span
          className="pointer-events-none absolute -inset-px rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{
            boxShadow:
              "0 0 28px rgba(234,179,8,0.38), inset 0 0 12px rgba(234,179,8,0.22)",
          }}
        />
        {/* Animated border sweep */}
        <span
          className="pointer-events-none absolute inset-0 rounded-lg bg-gradient-to-r from-transparent via-yellow-400/30 to-transparent opacity-0 group-hover:opacity-100"
          style={{
            maskImage:
              "linear-gradient(to right, transparent 0%, black 20%, black 80%, transparent 100%)",
          }}
        />
        {/* Background grid */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="h-full w-full"
            style={{
              backgroundImage:
                "linear-gradient(rgba(234,179,8,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(234,179,8,0.12) 1px, transparent 1px)",
              backgroundSize: "22px 22px",
            }}
          />
        </div>

        {/* Neon corners */}
        <span className="pointer-events-none absolute left-0 top-0 h-3 w-3">
          <span className="absolute inset-0 border-l-2 border-t-2 border-yellow-400/60" />
          <span className="absolute -left-[1px] -top-[1px] h-2 w-2 bg-yellow-400/20" />
        </span>
        <span className="pointer-events-none absolute right-0 top-0 h-3 w-3">
          <span className="absolute inset-0 border-r-2 border-t-2 border-yellow-400/60" />
          <span className="absolute -right-[1px] -top-[1px] h-2 w-2 bg-yellow-400/20" />
        </span>
        <span className="pointer-events-none absolute left-0 bottom-0 h-3 w-3">
          <span className="absolute inset-0 border-l-2 border-b-2 border-yellow-400/60" />
          <span className="absolute -left-[1px] -bottom-[1px] h-2 w-2 bg-yellow-400/20" />
        </span>
        <span className="pointer-events-none absolute right-0 bottom-0 h-3 w-3">
          <span className="absolute inset-0 border-r-2 border-b-2 border-yellow-400/60" />
          <span className="absolute -right-[1px] -bottom-[1px] h-2 w-2 bg-yellow-400/20" />
        </span>

        {/* Game image in hex-like frame */}
        <div className="absolute left-1/2 top-4 sm:top-6 -translate-x-1/2">
          <div className="relative h-20 w-20 sm:h-24 sm:w-24 rounded-lg border-2 border-yellow-400/40 bg-black/30 grid place-items-center shadow-md group-hover:scale-[1.04] transition-transform will-change-transform">
            <Image
              src={game.image}
              alt={game.name}
              width={64}
              height={64}
              className="object-contain drop-shadow-md"
              loading="lazy"
              sizes="96px"
            />
            {/* subtle glow ring */}
            <span
              className="pointer-events-none absolute -inset-2 rounded-xl opacity-30 group-hover:opacity-60"
              style={{ boxShadow: "0 0 40px rgba(234,179,8,0.35)" }}
            />
          </div>
        </div>

        {/* Title and description */}
        <div className="absolute left-4 right-4 top-[120px] sm:top-[130px] flex items-center justify-between gap-3">
          <div className="w-full pr-3 break-words">
            <h3 className="text-white font-black tracking-wider text-lg mb-1 line-clamp-2">
              {game.name}
            </h3>
            <div>
              <div className="text-xs font-mono text-yellow-400/80 line-clamp-2">
                {game.description}
              </div>
            </div>
          </div>
        </div>

        {/* CTA - pulled closer to description */}
        <div className="absolute left-1/2 bottom-10 -translate-x-1/2 pt-2 pointer-events-none">
          <GamingButton
            variant="gold"
            size="sm"
            className="px-5"
            aria-label={`Phân tích ${game.name}`}
          >
            Phân tích
          </GamingButton>
        </div>

        {/* Hover scan line */}
        <div className="absolute left-0 top-0 h-[2px] w-full bg-gradient-to-r from-transparent via-yellow-400 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-opacity" />
        {/* subtle bottom glow */}
        <div className="pointer-events-none absolute inset-x-6 bottom-0 h-12 bg-gradient-to-t from-yellow-500/15 to-transparent" />
      </div>
    </div>
  );
}

const MemoGameCard = React.memo(GameCard);
