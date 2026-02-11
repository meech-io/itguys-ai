"use client";

import { motion } from "framer-motion";
import { ArrowRight, Zap } from "lucide-react";
import Button from "../ui/Button";
import GradientText from "../ui/GradientText";

const techBadges = [
  "AWS",
  "Okta",
  "Terraform",
  "Docker",
  "Kubernetes",
  "Home Assistant",
];

const stats = [
  { value: "100+", label: "Clients Served" },
  { value: "99.9%", label: "Uptime SLA" },
  { value: "24/7", label: "Support" },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-16">
      {/* Background glow */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-accent-blue/10 rounded-full blur-[120px] animate-glow-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-accent-purple/10 rounded-full blur-[120px] animate-glow-pulse [animation-delay:1.5s]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-0">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left content */}
          <div>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block font-mono text-sm text-text-muted mb-6"
            >
              // modern it consulting
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight"
            >
              Expert IT Solutions{" "}
              <GradientText>for the Modern Age</GradientText>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="mt-6 text-lg text-text-secondary max-w-lg"
            >
              Enterprise-grade IT consulting for businesses and professional
              home automation services. We design, implement, and support
              technology that works.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="mt-8 flex flex-wrap gap-4"
            >
              <Button href="#services">
                <Zap size={18} />
                Explore Solutions
              </Button>
              <Button variant="secondary" href="#contact">
                Get in Touch
                <ArrowRight size={18} />
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="mt-12 flex gap-8"
            >
              {stats.map((stat) => (
                <div key={stat.label}>
                  <div className="text-2xl font-bold text-text-primary">
                    {stat.value}
                  </div>
                  <div className="text-sm text-text-muted">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right - tech badge grid */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="hidden lg:grid grid-cols-3 gap-4"
          >
            {techBadges.map((badge, i) => (
              <motion.div
                key={badge}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + i * 0.1 }}
                className="group relative bg-surface/80 backdrop-blur border border-border rounded-xl p-6 text-center hover:border-accent-purple/50 hover:shadow-lg hover:shadow-accent-purple/10 transition-all duration-500 hover:-translate-y-1"
              >
                <span className="font-mono text-sm text-text-secondary group-hover:text-accent-purple transition-colors">
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
