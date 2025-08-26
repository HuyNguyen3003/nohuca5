import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/cn";

const gamingCardVariants = cva(
  "relative overflow-hidden rounded-lg border-2 bg-gaming-card text-foreground shadow-lg",
  {
    variants: {
      variant: {
        default: "border-gaming-border bg-gaming-card",
        slot: "border-primary/50 bg-gradient-to-br from-gaming-card to-gaming-dark shadow-gaming",
        room: "border-primary/30 bg-gaming-card hover:border-primary/60 transition-colors",
        prediction:
          "border-primary bg-gradient-to-r from-gaming-card to-primary/10",
      },
      size: {
        sm: "p-3",
        default: "p-4",
        lg: "p-6",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface GamingCardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof gamingCardVariants> {}

const GamingCard = React.forwardRef<HTMLDivElement, GamingCardProps>(
  ({ className, variant, size, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(gamingCardVariants({ variant, size, className }))}
      {...props}
    />
  )
);
GamingCard.displayName = "GamingCard";

// Gaming Card with corner decorations
const GamingCardWithCorners = React.forwardRef<HTMLDivElement, GamingCardProps>(
  ({ className, variant, size, children, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(gamingCardVariants({ variant, size, className }))}
      {...props}
    >
      {/* Corner decorations */}
      <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-primary"></div>
      <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-primary"></div>
      <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-primary"></div>
      <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-primary"></div>

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </div>
  )
);
GamingCardWithCorners.displayName = "GamingCardWithCorners";

export { GamingCard, GamingCardWithCorners, gamingCardVariants };
