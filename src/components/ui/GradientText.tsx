import { type ReactNode } from "react";

interface GradientTextProps {
  children: ReactNode;
  gradient?: "primary" | "business" | "home";
  className?: string;
}

const gradientMap = {
  primary: "from-accent-blue to-accent-purple",
  business: "from-accent-blue to-accent-cyan",
  home: "from-accent-purple to-accent-magenta",
};

export default function GradientText({
  children,
  gradient = "primary",
  className = "",
}: GradientTextProps) {
  return (
    <span
      className={`bg-gradient-to-r ${gradientMap[gradient]} bg-clip-text text-transparent ${className}`}
    >
      {children}
    </span>
  );
}
