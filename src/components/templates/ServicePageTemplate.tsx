"use client";

import { Check, ArrowRight } from "lucide-react";
import Breadcrumb from "@/components/ui/Breadcrumb";
import PageHero from "@/components/ui/PageHero";
import FeatureCard from "@/components/ui/FeatureCard";
import ScrollReveal from "@/components/ui/ScrollReveal";
import SectionHeader from "@/components/ui/SectionHeader";
import Process from "@/components/sections/Process";
import type { ServiceData } from "@/data/services";

interface ServicePageTemplateProps {
  service: ServiceData;
  categorySlug: "business" | "home";
  categoryTitle: string;
}

export default function ServicePageTemplate({
  service,
  categorySlug,
  categoryTitle,
}: ServicePageTemplateProps) {
  return (
    <>
      <Breadcrumb
        items={[
          { label: "Services", href: "/services" },
          {
            label: categoryTitle,
            href: `/services/${categorySlug}`,
          },
          { label: service.title },
        ]}
      />

      <PageHero
        iconName={service.iconName}
        label={service.tagline}
        title={service.title}
        description={service.description}
        primaryCta={{ label: "Book a Consultation", href: "https://cal.com/itguys" }}
        secondaryCta={{ label: "Contact Us", href: "/contact" }}
      />

      {/* What's Included */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <SectionHeader
              label="What's Included"
              title="Everything You"
              gradientTitle="Need"
              subtitle={`Our ${service.title.toLowerCase()} service covers all the essentials and more.`}
            />
          </ScrollReveal>

          <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.features.map((feature, i) => (
              <FeatureCard
                key={feature.title}
                title={feature.title}
                description={feature.description}
                index={i}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Technologies We Use */}
      <section className="py-24 lg:py-32 bg-surface/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <SectionHeader
              label="Our Stack"
              title="Technologies We"
              gradientTitle="Use"
            />
          </ScrollReveal>

          <div className="mt-12 flex flex-wrap justify-center gap-3">
            {service.technologies.map((tech, i) => (
              <ScrollReveal key={tech} delay={i * 0.05}>
                <span className="inline-flex items-center font-mono text-sm px-5 py-2.5 rounded-full bg-surface border border-border text-text-secondary hover:border-border-light hover:text-text-primary transition-all duration-300">
                  {tech}
                </span>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <SectionHeader
              label="Why ITGuys.ai"
              title="Why Choose"
              gradientTitle="Us"
              subtitle="Here's what sets us apart when it comes to delivering results."
            />
          </ScrollReveal>

          <div className="mt-12 max-w-4xl mx-auto grid sm:grid-cols-2 gap-x-12 gap-y-4">
            {service.benefits.map((benefit, i) => (
              <ScrollReveal key={benefit} delay={i * 0.08}>
                <div className="flex items-start gap-3 py-3">
                  <div className="flex-shrink-0 mt-0.5">
                    <div className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center">
                      <Check size={14} className="text-accent" />
                    </div>
                  </div>
                  <p className="text-text-secondary leading-relaxed">
                    {benefit}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <div className="bg-surface/50">
        <Process />
      </div>

      {/* Service-specific CTA */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="relative overflow-hidden rounded-3xl border border-border bg-surface p-12 md:p-16 text-center">
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent" />
              <div className="relative z-10">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary mb-4 tracking-tight">
                  {service.cta.heading}
                </h2>
                <p className="text-text-secondary text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
                  {service.cta.description}
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
    </>
  );
}
