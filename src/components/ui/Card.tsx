"use client";

import { type ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  glowColor?: string;
}

export default function Card({
  children,
  className = "",
  glowColor = "accent-purple",
}: CardProps) {
  return (
    <div
      className={`group relative bg-surface border border-border rounded-2xl p-6 transition-all duration-500 hover:-translate-y-1 hover:border-${glowColor}/50 hover:shadow-lg hover:shadow-${glowColor}/10 ${className}`}
    >
      {children}
    </div>
  );
}
