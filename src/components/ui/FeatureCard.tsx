"use client";

import ScrollReveal from "./ScrollReveal";

interface FeatureCardProps {
  title: string;
  description: string;
  index?: number;
}

export default function FeatureCard({
  title,
  description,
  index = 0,
}: FeatureCardProps) {
  return (
    <ScrollReveal delay={index * 0.08}>
      <div className="bg-surface border border-border rounded-2xl p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-border-light hover:shadow-lg hover:shadow-black/20 h-full">
        <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
          <span className="font-mono text-sm font-semibold text-accent">
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-sm text-text-secondary leading-relaxed">
          {description}
        </p>
      </div>
    </ScrollReveal>
  );
}
