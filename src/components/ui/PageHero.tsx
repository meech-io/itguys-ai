"use client";

import { motion } from "framer-motion";
import { type LucideIcon } from "lucide-react";
import { iconMap, type IconName } from "@/data/services";
import Button from "./Button";

interface PageHeroProps {
  icon?: LucideIcon;
  iconName?: IconName;
  label?: string;
  title: string;
  description: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
}

export default function PageHero({
  icon,
  iconName,
  label,
  title,
  description,
  primaryCta,
  secondaryCta,
}: PageHeroProps) {
  const Icon = icon || (iconName ? iconMap[iconName] : undefined);

  return (
    <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-24">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-surface/50" />
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {Icon && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 }}
            className="inline-flex p-4 rounded-2xl bg-accent/10 mb-6"
          >
            <Icon className="text-accent" size={32} />
          </motion.div>
        )}

        {label && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="mb-4"
          >
            <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-accent">
              {label}
            </span>
          </motion.div>
        )}

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight"
        >
          {title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35 }}
          className="mt-6 text-lg text-text-secondary max-w-2xl mx-auto leading-relaxed"
        >
          {description}
        </motion.p>

        {(primaryCta || secondaryCta) && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-8 flex flex-wrap justify-center gap-4"
          >
            {primaryCta && (
              <Button href={primaryCta.href}>{primaryCta.label}</Button>
            )}
            {secondaryCta && (
              <Button variant="secondary" href={secondaryCta.href}>
                {secondaryCta.label}
              </Button>
            )}
          </motion.div>
        )}
      </div>
    </section>
  );
}
