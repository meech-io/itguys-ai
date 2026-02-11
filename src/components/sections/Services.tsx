"use client";

import { Check, Building2, Home } from "lucide-react";
import ScrollReveal from "../ui/ScrollReveal";

const businessServices = [
  "Identity & Access Management",
  "Network Infrastructure",
  "Cloud Solutions (AWS)",
  "Security & Compliance",
  "DevOps & Automation",
  "Managed IT Support",
];

const homeServices = [
  "Home Theater Buildout",
  "Ubiquiti Network Installation",
  "Home Assistant Setup",
  "Low Voltage Wiring",
  "Smart Lighting Systems",
  "Security Camera Systems",
  "Whole Home Audio",
];

export default function Services() {
  return (
    <section id="services" className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-accent">
              What We Do
            </span>
            <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
              Our Services
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Business IT Card */}
          <ScrollReveal direction="left">
            <div className="relative bg-surface border border-border rounded-2xl overflow-hidden hover:border-border-light transition-all duration-300">
              <div className="h-px bg-accent/40" />
              <div className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2.5 bg-accent/10 rounded-lg">
                    <Building2 className="text-accent" size={22} />
                  </div>
                  <h3 className="text-2xl font-semibold">Business IT Solutions</h3>
                </div>
                <p className="text-text-secondary mb-8 leading-relaxed">
                  Enterprise-grade infrastructure, security, and support
                  tailored to your business needs. From startups to established
                  companies, we&apos;ve got you covered.
                </p>
                <ul className="space-y-4">
                  {businessServices.map((service) => (
                    <li key={service} className="flex items-center gap-3">
                      <Check
                        size={16}
                        className="text-accent flex-shrink-0"
                      />
                      <span className="text-text-primary text-sm">{service}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </ScrollReveal>

          {/* Home Automation Card */}
          <ScrollReveal direction="right">
            <div className="relative bg-surface border border-border rounded-2xl overflow-hidden hover:border-border-light transition-all duration-300">
              <div className="h-px bg-accent/40" />
              <div className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2.5 bg-accent/10 rounded-lg">
                    <Home className="text-accent" size={22} />
                  </div>
                  <h3 className="text-2xl font-semibold">Home Automation</h3>
                </div>
                <p className="text-text-secondary mb-8 leading-relaxed">
                  From immersive home theaters to fully automated smart homes,
                  we bring enterprise-grade networking and seamless integration
                  to every room in your house.
                </p>
                <ul className="space-y-4">
                  {homeServices.map((service) => (
                    <li key={service} className="flex items-center gap-3">
                      <Check
                        size={16}
                        className="text-accent flex-shrink-0"
                      />
                      <span className="text-text-primary text-sm">{service}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
