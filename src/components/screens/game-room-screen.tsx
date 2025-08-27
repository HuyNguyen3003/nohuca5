"use client";

import * as React from "react";
import { useState, useEffect } from "react";
import Image from "next/image";
import { GamingButton } from "@/components/ui/gaming-button";
import { ArrowLeft } from "lucide-react";
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
  const [filtered, setFiltered] = useState<ProviderGame[]>([]);

  useEffect(() => {
    const data = providerId ? getGamesByProvider(providerId) : [];
    const fallback = Object.values(providerToGames).flat().slice(0, 20);
    const list = data && data.length > 0 ? data : fallback;
    setFiltered(list);
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
      <header className="sticky top-0 z-20 border-b border-yellow-400/20 bg-black/80 backdrop-blur-xl">
        <div className="mx-auto flex h-16 items-center justify-between px-4 md:h-20 md:px-8">
          <div className="flex items-center gap-3">
            <GamingButton variant="ghost" size="icon" onClick={onBack}>
              <ArrowLeft className="w-5 h-5" />
            </GamingButton>
            <div>
              <h1 className="text-xl md:text-2xl font-black tracking-wider">
                <span className="bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                  {providerId?.toUpperCase()}
                </span>
              </h1>
              <div className="mt-1 h-px w-24 bg-gradient-to-r from-yellow-400/70 to-transparent" />
            </div>
          </div>
          <div className="hidden md:flex items-center gap-3 font-mono text-xs text-yellow-400/70">
            <span className="inline-flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              SECURE.LINK/ACTIVE
            </span>
            <span className="h-3 w-px bg-yellow-400/30" />
            <span>v2.2.0</span>
          </div>
        </div>
      </header>

      {/* Grid */}
      <main className="relative z-10 mx-auto max-w-[1400px] px-4 py-8 md:px-8 md:py-12">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
          {filtered.map((game) => (
            <GameCard
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
    <div className="group relative w-full max-w-[380px] mx-auto">
      <div className="relative h-[320px] w-full overflow-hidden rounded-xl border border-yellow-400/30 bg-gradient-to-br from-gray-900/90 via-black/90 to-gray-800/90 shadow-[0_0_30px_rgba(234,179,8,0.12)] backdrop-blur-sm transition-all duration-500 group-hover:shadow-[0_0_60px_rgba(234,179,8,0.28)] group-hover:border-yellow-400/60">
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
        <div className="absolute left-1/2 top-6 -translate-x-1/2">
          <div className="relative h-24 w-24 rounded-lg border-2 border-yellow-400/40 bg-black/30 grid place-items-center shadow-md group-hover:scale-105 transition-transform">
            <Image
              src={game.image}
              alt={game.name}
              width={64}
              height={64}
              className="object-contain drop-shadow-md"
            />
            {/* subtle glow ring */}
            <span
              className="pointer-events-none absolute -inset-2 rounded-xl opacity-30 group-hover:opacity-60"
              style={{ boxShadow: "0 0 40px rgba(234,179,8,0.35)" }}
            />
          </div>
        </div>

        {/* Title and percentage */}
        <div className="absolute left-4 right-4 top-[120px] flex items-center justify-between gap-3">
          <div className="w-full pr-3 break-words">
            <h3 className="text-white font-black tracking-wider text-lg mb-1">
              {game.name}
            </h3>
            <div>
              <div className="text-xs font-mono text-yellow-400/80">
                {game.description}
              </div>
              {/* Percentage ring */}
              <div className="mt-2 relative h-14 w-14">
                {/* conic animated ring */}
                <div
                  className="absolute inset-0 rounded-full"
                  style={{
                    backgroundImage:
                      "conic-gradient(from 0deg, rgba(234,179,8,0.9) 0%, rgba(234,179,8,0.6) 25%, transparent 25%, transparent 75%, rgba(234,179,8,0.6) 75%, rgba(234,179,8,0.9))",
                    WebkitMask:
                      "radial-gradient(farthest-side, transparent calc(100% - 6px), #000 0)",
                    animation: "spin 3s linear infinite",
                    filter: "drop-shadow(0 0 6px rgba(234,179,8,0.7))",
                  }}
                />
                <div className="absolute inset-1 rounded-full bg-black/85 border border-yellow-400/30 grid place-items-center">
                  <span className="text-xs font-bold text-yellow-400">
                    {game.percentage}%
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="absolute left-1/2 bottom-5 -translate-x-1/2">
          <GamingButton
            variant="gold"
            size="sm"
            className="px-5"
            onClick={onPredict}
          >
            Phân tích
          </GamingButton>
        </div>

        {/* Hover scan line */}
        <div className="absolute left-0 top-0 h-[2px] w-full bg-gradient-to-r from-transparent via-yellow-400 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-all" />
        {/* subtle bottom glow */}
        <div className="pointer-events-none absolute inset-x-6 bottom-0 h-10 bg-gradient-to-t from-yellow-500/10 to-transparent" />
      </div>
    </div>
  );
}
