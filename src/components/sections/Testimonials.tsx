"use client";

import { Star } from "lucide-react";
import ScrollReveal from "../ui/ScrollReveal";
import SectionHeader from "../ui/SectionHeader";

const testimonials = [
  {
    quote:
      "ITGuys transformed our identity management with a seamless Okta implementation. Our team onboarding went from days to hours, and our security posture improved dramatically.",
    name: "Sarah Chen",
    title: "CTO, Meridian Health",
    rating: 5,
  },
  {
    quote:
      "Their network infrastructure expertise is second to none. They redesigned our entire network with zero downtime and the performance improvement was immediate and measurable.",
    name: "Marcus Johnson",
    title: "VP of Engineering, TechFlow",
    rating: 5,
  },
  {
    quote:
      "The AWS migration was flawless. They handled everything from architecture design to execution, cutting our cloud costs by 40% while improving reliability across the board.",
    name: "Emily Rodriguez",
    title: "Founder, DataScale",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 lg:py-32 bg-surface/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionHeader
            label="Client Stories"
            title="What Our Clients"
            gradientTitle="Say"
            subtitle="Trusted by businesses of all sizes to deliver exceptional IT solutions."
          />
        </ScrollReveal>

        <div className="mt-16 grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, i) => (
            <ScrollReveal key={testimonial.name} delay={i * 0.12}>
              <div className="relative bg-surface border border-border rounded-2xl p-8 transition-all duration-300 hover:-translate-y-0.5 hover:border-border-light hover:shadow-lg hover:shadow-black/20 h-full flex flex-col">
                {/* Stars */}
                <div className="flex gap-1 mb-5">
                  {Array.from({ length: testimonial.rating }).map((_, j) => (
                    <Star
                      key={j}
                      size={14}
                      className="text-accent fill-accent"
                    />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-text-secondary leading-relaxed flex-1">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>

                {/* Author */}
                <div className="mt-6 pt-6 border-t border-border flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-accent/15 flex items-center justify-center text-accent font-semibold text-sm">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-medium text-sm text-text-primary">
                      {testimonial.name}
                    </div>
                    <div className="text-text-muted text-xs">
                      {testimonial.title}
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
