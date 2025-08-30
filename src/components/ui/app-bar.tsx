"use client";

import * as React from "react";
import { BackButton } from "./back-button";
import { useAuth } from "@/hooks/useAuth";

export type AppBarProps = {
  title?: string;
  onBack?: () => void;
  rightSlot?: React.ReactNode;
};

export function AppBar({ title, onBack, rightSlot }: AppBarProps) {
  const { user } = useAuth();
  return (
    <header className="sticky top-0 z-20 border-b border-yellow-400/20 bg-black/70 backdrop-blur-xl supports-[backdrop-filter]:bg-black/60">
      <div className="mx-auto flex h-16 items-center justify-between px-4 md:h-20 md:px-8">
        <div className="flex items-center gap-3">
          <BackButton onClick={onBack} variant="ghost" />
          {title && (
            <div>
              <h1 className="text-xl md:text-2xl font-black tracking-wider">
                <span className="bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                  {title}
                </span>
              </h1>
              <div className="mt-1 h-px w-24 bg-gradient-to-r from-yellow-400/70 to-transparent" />
            </div>
          )}
        </div>
        <div className="flex items-center gap-6">
          {rightSlot}
          <div className="text-right">
            <p className="text-xs text-yellow-400/80">
              {user?.fullName} · {user?.username}
            </p>
            <p className="text-sm md:text-base font-bold text-yellow-400">
              {(user?.points ?? 0).toLocaleString()} Points
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}

export default AppBar;
