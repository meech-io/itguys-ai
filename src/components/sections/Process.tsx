"use client";

import { Search, FileText, Rocket, Headphones } from "lucide-react";
import ScrollReveal from "../ui/ScrollReveal";
import SectionHeader from "../ui/SectionHeader";

const steps = [
  {
    icon: Search,
    number: "01",
    title: "Discovery",
    description:
      "We start by understanding your current infrastructure, pain points, and goals through a comprehensive assessment.",
  },
  {
    icon: FileText,
    number: "02",
    title: "Plan",
    description:
      "We design a tailored solution architecture with clear milestones, timelines, and budget considerations.",
  },
  {
    icon: Rocket,
    number: "03",
    title: "Implement",
    description:
      "Our team executes the plan with minimal disruption, following best practices and thorough testing at every stage.",
  },
  {
    icon: Headphones,
    number: "04",
    title: "Support",
    description:
      "Ongoing monitoring, maintenance, and support to ensure your systems run smoothly and scale with your needs.",
  },
];

export default function Process() {
  return (
    <section id="process" className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionHeader
            label="How We Work"
            title="Our"
            gradientTitle="Process"
            subtitle="A proven methodology that delivers results consistently."
          />
        </ScrollReveal>

        {/* Desktop horizontal timeline */}
        <div className="mt-16 hidden md:block">
          <div className="relative">
            {/* Connecting line */}
            <div className="absolute top-10 left-0 right-0 h-px bg-border" />

            <div className="grid grid-cols-4 gap-8">
              {steps.map((step, i) => {
                const Icon = step.icon;
                return (
                  <ScrollReveal key={step.title} delay={i * 0.12}>
                    <div className="relative text-center">
                      {/* Number circle */}
                      <div className="relative z-10 w-20 h-20 mx-auto mb-6 rounded-full bg-surface border border-border flex items-center justify-center">
                        <span className="font-mono text-lg font-semibold text-accent">
                          {step.number}
                        </span>
                      </div>
                      <div className="inline-flex p-2.5 rounded-lg bg-elevated mb-3">
                        <Icon size={20} className="text-text-secondary" />
                      </div>
                      <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                      <p className="text-sm text-text-secondary leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>
        </div>

        {/* Mobile vertical layout */}
        <div className="mt-16 md:hidden space-y-8">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <ScrollReveal key={step.title} delay={i * 0.1}>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-surface border border-border flex items-center justify-center">
                    <span className="font-mono text-sm font-semibold text-accent">
                      {step.number}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">{step.title}</h3>
                    <p className="text-sm text-text-secondary leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
