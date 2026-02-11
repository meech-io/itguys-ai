"use client";

import { ArrowRight, Building2, Home, Check } from "lucide-react";
import Link from "next/link";
import ScrollReveal from "../ui/ScrollReveal";

const categories = [
  {
    icon: Building2,
    title: "Business IT Solutions",
    description:
      "Enterprise-grade infrastructure, security, and support tailored to your business needs. From startups to established companies, we've got you covered.",
    href: "/services/business",
    highlights: [
      "Identity & Access Management",
      "Network Infrastructure",
      "Cloud Solutions (AWS)",
      "Security & Compliance",
      "DevOps & Automation",
      "Managed IT Support",
    ],
  },
  {
    icon: Home,
    title: "Home Automation",
    description:
      "From immersive home theaters to fully automated smart homes, we bring enterprise-grade networking and seamless integration to every room in your house.",
    href: "/services/home",
    highlights: [
      "Home Theater Buildout",
      "Ubiquiti Network Installation",
      "Home Assistant Setup",
      "Low Voltage Wiring",
      "Smart Lighting Systems",
      "Security Camera Systems",
      "Whole Home Audio",
    ],
  },
];

export default function Services() {
  return (
    <section className="py-24 lg:py-32">
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
          {categories.map((cat, i) => {
            const Icon = cat.icon;
            return (
              <ScrollReveal
                key={cat.title}
                direction={i === 0 ? "left" : "right"}
              >
                <Link href={cat.href} className="group block">
                  <div className="relative bg-surface border border-border rounded-2xl overflow-hidden transition-all duration-300 hover:border-border-light hover:-translate-y-0.5 hover:shadow-lg hover:shadow-black/20 h-full">
                    <div className="h-px bg-accent/0 group-hover:bg-accent/40 transition-all duration-300" />
                    <div className="p-8">
                      <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center gap-3">
                          <div className="p-2.5 bg-accent/10 rounded-lg">
                            <Icon className="text-accent" size={22} />
                          </div>
                          <h3 className="text-2xl font-semibold group-hover:text-accent transition-colors">
                            {cat.title}
                          </h3>
                        </div>
                        <ArrowRight
                          size={20}
                          className="text-text-muted group-hover:text-accent group-hover:translate-x-1 transition-all duration-300"
                        />
                      </div>
                      <p className="text-text-secondary mb-8 leading-relaxed">
                        {cat.description}
                      </p>
                      <ul className="space-y-3">
                        {cat.highlights.map((item) => (
                          <li key={item} className="flex items-center gap-3">
                            <Check
                              size={16}
                              className="text-accent flex-shrink-0"
                            />
                            <span className="text-text-primary text-sm">
                              {item}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
