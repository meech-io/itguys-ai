"use client";

import { type ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
}

export default function Card({
  children,
  className = "",
}: CardProps) {
  return (
    <div
      className={`group relative bg-surface border border-border rounded-2xl p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-border-light hover:shadow-lg hover:shadow-black/20 ${className}`}
    >
      {children}
    </div>
  );
}
