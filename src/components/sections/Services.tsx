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
            <span className="font-mono text-sm text-text-muted tracking-wider uppercase">
              // what we do
            </span>
            <h2 className="mt-3 text-3xl md:text-4xl lg:text-5xl font-extrabold">
              Our Services
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Business IT Card */}
          <ScrollReveal direction="left">
            <div className="relative bg-surface border border-border rounded-2xl overflow-hidden group hover:border-accent-cyan/30 transition-all duration-500">
              <div className="h-1 bg-gradient-to-r from-accent-blue to-accent-cyan" />
              <div className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2.5 bg-accent-blue/10 rounded-lg">
                    <Building2 className="text-accent-cyan" size={24} />
                  </div>
                  <h3 className="text-2xl font-bold">Business IT Solutions</h3>
                </div>
                <p className="text-text-secondary mb-8">
                  Enterprise-grade infrastructure, security, and support
                  tailored to your business needs. From startups to established
                  companies, we&apos;ve got you covered.
                </p>
                <ul className="space-y-4">
                  {businessServices.map((service) => (
                    <li key={service} className="flex items-center gap-3">
                      <Check
                        size={18}
                        className="text-accent-cyan flex-shrink-0"
                      />
                      <span className="text-text-primary">{service}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </ScrollReveal>

          {/* Home Automation Card */}
          <ScrollReveal direction="right">
            <div className="relative bg-surface border border-border rounded-2xl overflow-hidden group hover:border-accent-magenta/30 transition-all duration-500">
              <div className="h-1 bg-gradient-to-r from-accent-purple to-accent-magenta" />
              <div className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2.5 bg-accent-purple/10 rounded-lg">
                    <Home className="text-accent-magenta" size={24} />
                  </div>
                  <h3 className="text-2xl font-bold">Home Automation</h3>
                </div>
                <p className="text-text-secondary mb-8">
                  Professional smart home integration with enterprise-grade
                  networking. Turn your home into a seamlessly connected,
                  automated environment.
                </p>
                <ul className="space-y-4">
                  {homeServices.map((service) => (
                    <li key={service} className="flex items-center gap-3">
                      <Check
                        size={18}
                        className="text-accent-magenta flex-shrink-0"
                      />
                      <span className="text-text-primary">{service}</span>
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
