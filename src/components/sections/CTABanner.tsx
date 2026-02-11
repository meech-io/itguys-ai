"use client";

import { ArrowRight } from "lucide-react";
import ScrollReveal from "../ui/ScrollReveal";

export default function CTABanner() {
  return (
    <section className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="relative overflow-hidden rounded-3xl border border-border bg-surface p-12 md:p-16 text-center">
            {/* Subtle accent border at top */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent" />

            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary mb-4 tracking-tight">
                Let&apos;s Build Something Great Together
              </h2>
              <p className="text-text-secondary text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
                Whether it&apos;s a dream home theater, a smarter home, or
                rock-solid IT for your business — we&apos;d love to chat.
                No pressure, just a friendly conversation about what&apos;s possible.
              </p>
              <a
                href="https://cal.com/itguys"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-accent text-background font-semibold px-8 py-4 rounded-lg hover:bg-accent-light transition-colors duration-300"
              >
                Book a Free Consultation
                <ArrowRight size={18} />
              </a>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
