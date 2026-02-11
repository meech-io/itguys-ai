import { type ReactNode } from "react";

interface GradientTextProps {
  children: ReactNode;
  className?: string;
}

export default function GradientText({
  children,
  className = "",
}: GradientTextProps) {
  return (
    <span className={`text-accent ${className}`}>
      {children}
    </span>
  );
}
