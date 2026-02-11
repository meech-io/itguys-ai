"use client";

import { ArrowRight } from "lucide-react";
import ScrollReveal from "../ui/ScrollReveal";

export default function CTABanner() {
  return (
    <section className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-accent-blue to-accent-purple p-12 md:p-16 text-center">
            {/* Background decoration */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
            </div>

            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-4">
                Ready to Transform Your IT?
              </h2>
              <p className="text-white/80 text-lg max-w-2xl mx-auto mb-8">
                Let&apos;s discuss how we can streamline your infrastructure,
                strengthen your security, and accelerate your growth.
              </p>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-white text-background font-semibold px-8 py-4 rounded-lg hover:bg-white/90 transition-colors"
              >
                Get Started Today
                <ArrowRight size={18} />
              </a>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
