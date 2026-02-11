"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Button from "../ui/Button";

const techBadges = [
  "AWS",
  "Okta",
  "Terraform",
  "Docker",
  "Kubernetes",
  "Home Assistant",
  "Ubiquiti",
  "Sonos",
  "Control4",
];

const stats = [
  { value: "100+", label: "Clients Served" },
  { value: "99.9%", label: "Uptime SLA" },
  { value: "24/7", label: "Support" },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-16">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-surface/50" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-0">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border bg-surface/50 mb-8"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
              <span className="text-xs font-medium text-text-secondary tracking-wide uppercase">
                Modern IT Consulting
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight"
            >
              IT That Just Works.{" "}
              <span className="text-accent">Homes That Wow.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="mt-6 text-lg text-text-secondary max-w-lg leading-relaxed"
            >
              We handle the tech so you don&apos;t have to. From bulletproof
              business infrastructure to cinema-quality home theaters and
              smart home setups — we make it effortless.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="mt-8 flex flex-wrap gap-4"
            >
              <Button href="#services">
                Explore Solutions
              </Button>
              <Button variant="secondary" href="#contact">
                Get in Touch
                <ArrowRight size={16} />
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="mt-14 flex gap-10"
            >
              {stats.map((stat, i) => (
                <div key={stat.label} className={i > 0 ? "border-l border-border pl-10" : ""}>
                  <div className="text-2xl font-bold text-text-primary">
                    {stat.value}
                  </div>
                  <div className="text-sm text-text-muted mt-0.5">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right - tech badge grid */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="hidden lg:grid grid-cols-3 gap-3"
          >
            {techBadges.map((badge, i) => (
              <motion.div
                key={badge}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + i * 0.08 }}
                className="bg-surface border border-border rounded-xl p-5 text-center hover:border-border-light transition-all duration-300 hover:-translate-y-0.5"
              >
                <span className="font-mono text-sm text-text-secondary">
                  {badge}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
