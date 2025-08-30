"use client";

import * as React from "react";
import { ArrowLeft } from "lucide-react";
import { cn } from "@/lib/cn";

export type BackButtonProps = {
  onClick?: () => void;
  className?: string;
  label?: string;
  size?: "sm" | "md" | "lg";
  variant?: "ghost" | "gold" | "outline";
};

export function BackButton({
  onClick,
  className,
  label = "Quay lại",
  size = "md",
  variant = "ghost",
}: BackButtonProps) {
  const sizeClasses = {
    sm: "h-9 px-3 text-xs",
    md: "h-10 px-4 text-sm",
    lg: "h-11 px-5 text-base",
  } as const;

  const variantClasses = {
    ghost:
      "bg-transparent border border-orange-400/30 text-orange-300 hover:bg-orange-400/10 hover:border-orange-400/60",
    gold: "bg-gradient-to-r from-yellow-400 to-yellow-600 text-black hover:from-yellow-300 hover:to-yellow-500",
    outline:
      "bg-transparent border border-white/20 text-white hover:bg-white/10",
  } as const;

  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "inline-flex items-center gap-2 rounded-lg transition-colors duration-200",
        sizeClasses[size],
        variantClasses[variant],
        className
      )}
      aria-label={label}
    >
      <ArrowLeft className="w-5 h-5" />
      <span className="hidden sm:inline-block font-semibold tracking-wide">
        {label}
      </span>
    </button>
  );
}

export default BackButton;
