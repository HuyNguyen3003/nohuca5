/**
 * Figma to Next.js Component Mapping
 *
 * This file contains utilities to map Figma design tokens and components
 * to our design system components and tokens.
 */

// Color mapping from Figma to our design tokens
export const colorMap = {
  // Primary colors
  primary: "bg-primary text-primary-foreground",
  "primary-light": "bg-primary/80 text-primary-foreground",
  "primary-dark": "bg-primary/90 text-primary-foreground",

  // Secondary colors
  secondary: "bg-secondary text-secondary-foreground",
  "secondary-light": "bg-secondary/80 text-secondary-foreground",
  "secondary-dark": "bg-secondary/90 text-secondary-foreground",

  // Status colors
  success: "bg-success text-success-foreground",
  warning: "bg-warning text-warning-foreground",
  error: "bg-destructive text-destructive-foreground",
  info: "bg-primary text-primary-foreground",

  // Neutral colors
  white: "bg-background text-foreground",
  black: "bg-foreground text-background",
  gray: "bg-muted text-muted-foreground",
  "gray-light": "bg-muted/50 text-muted-foreground",
  "gray-dark": "bg-muted text-muted-foreground",
} as const;

// Font size mapping
export const fontSizeMap = {
  xs: "text-xs",
  sm: "text-sm",
  base: "text-base",
  lg: "text-lg",
  xl: "text-xl",
  "2xl": "text-2xl",
  "3xl": "text-3xl",
  "4xl": "text-4xl",
} as const;

// Font weight mapping
export const fontWeightMap = {
  thin: "font-thin",
  light: "font-light",
  normal: "font-normal",
  medium: "font-medium",
  semibold: "font-semibold",
  bold: "font-bold",
  extrabold: "font-extrabold",
} as const;

// Spacing mapping
export const spacingMap = {
  xs: "gap-1 p-1",
  sm: "gap-2 p-2",
  md: "gap-4 p-4",
  lg: "gap-6 p-6",
  xl: "gap-8 p-8",
} as const;

// Component mapping from Figma component names to our components
export const componentMap = {
  // Buttons
  Button: "Button",
  "Primary Button": "Button",
  "Secondary Button": "Button",
  "Ghost Button": "Button",
  "Link Button": "Button",

  // Inputs
  Input: "Input",
  "Text Input": "Input",
  "Email Input": "Input",
  "Password Input": "Input",

  // Cards
  Card: "Card",
  "Content Card": "Card",
  "Feature Card": "Card",
} as const;

// Variant mapping for buttons
export const buttonVariantMap = {
  primary: "default",
  secondary: "secondary",
  ghost: "ghost",
  outline: "outline",
  link: "link",
  danger: "destructive",
} as const;

// Size mapping
export const sizeMap = {
  small: "sm",
  medium: "default",
  large: "lg",
  xs: "sm",
  sm: "sm",
  md: "default",
  lg: "lg",
  xl: "lg",
} as const;

/**
 * Maps Figma fill colors to Tailwind classes
 */
export function mapFigmaColor(figmaColor: string): string {
  // Convert hex colors to closest design token
  if (figmaColor.startsWith("#")) {
    // Add logic to match hex colors to design tokens
    // For now, return a default
    return colorMap.primary;
  }

  // Map named colors
  const normalizedColor = figmaColor.toLowerCase().replace(/\s+/g, "-");
  return colorMap[normalizedColor as keyof typeof colorMap] || colorMap.primary;
}

/**
 * Maps Figma text styles to Tailwind classes
 */
export function mapFigmaTextStyle(
  fontSize: number,
  fontWeight: string
): string {
  const sizeClass =
    fontSize <= 12
      ? "text-xs"
      : fontSize <= 14
      ? "text-sm"
      : fontSize <= 16
      ? "text-base"
      : fontSize <= 18
      ? "text-lg"
      : fontSize <= 24
      ? "text-xl"
      : fontSize <= 32
      ? "text-2xl"
      : "text-3xl";

  const weightClass =
    fontWeightMap[fontWeight.toLowerCase() as keyof typeof fontWeightMap] ||
    "font-normal";

  return `${sizeClass} ${weightClass}`;
}

/**
 * Maps Figma spacing to Tailwind spacing
 */
export function mapFigmaSpacing(spacing: number): string {
  if (spacing <= 4) return "gap-1 p-1";
  if (spacing <= 8) return "gap-2 p-2";
  if (spacing <= 16) return "gap-4 p-4";
  if (spacing <= 24) return "gap-6 p-6";
  return "gap-8 p-8";
}

/**
 * Maps Figma component to our design system component
 */
export function mapFigmaComponent(figmaComponentName: string): string {
  return componentMap[figmaComponentName as keyof typeof componentMap] || "div";
}

/**
 * Maps Figma button variant to our button variants
 */
export function mapButtonVariant(figmaVariant: string): string {
  const normalized = figmaVariant.toLowerCase().replace(/\s+/g, "-");
  return (
    buttonVariantMap[normalized as keyof typeof buttonVariantMap] || "default"
  );
}

/**
 * Maps Figma size to our size system
 */
export function mapSize(figmaSize: string): string {
  const normalized = figmaSize.toLowerCase();
  return sizeMap[normalized as keyof typeof sizeMap] || "default";
}
