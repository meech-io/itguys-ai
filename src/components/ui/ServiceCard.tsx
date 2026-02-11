"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import { iconMap, type IconName } from "@/data/services";

interface ServiceCardProps {
  title: string;
  tagline: string;
  iconName: IconName;
  href: string;
  delay?: number;
}

export default function ServiceCard({
  title,
  tagline,
  iconName,
  href,
  delay = 0,
}: ServiceCardProps) {
  const Icon = iconMap[iconName];

  return (
    <ScrollReveal delay={delay}>
      <Link href={href} className="group block">
        <div className="relative bg-surface border border-border rounded-2xl p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-border-light hover:shadow-lg hover:shadow-black/20 h-full">
          <div className="h-px absolute top-0 left-0 right-0 bg-accent/0 group-hover:bg-accent/40 transition-all duration-300" />
          <div className="flex items-start justify-between">
            <div className="p-2.5 bg-accent/10 rounded-lg">
              <Icon className="text-accent" size={22} />
            </div>
            <ArrowRight
              size={18}
              className="text-text-muted group-hover:text-accent group-hover:translate-x-1 transition-all duration-300 mt-1"
            />
          </div>
          <h3 className="text-lg font-semibold mt-4 mb-2 group-hover:text-accent transition-colors">
            {title}
          </h3>
          <p className="text-sm text-text-secondary leading-relaxed">
            {tagline}
          </p>
        </div>
      </Link>
    </ScrollReveal>
  );
}
