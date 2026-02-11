"use client";

import Breadcrumb from "@/components/ui/Breadcrumb";
import PageHero from "@/components/ui/PageHero";
import ServiceCard from "@/components/ui/ServiceCard";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { serviceCategories, iconMap } from "@/data/services";

export default function ServicesPage() {
  return (
    <>
      <Breadcrumb items={[{ label: "Services" }]} />

      <PageHero
        title="Our Services"
        description="From bulletproof business infrastructure to cinema-quality home setups — we bring enterprise-grade expertise to everything we do."
        primaryCta={{ label: "Book a Consultation", href: "https://cal.com/itguys" }}
        secondaryCta={{ label: "Contact Us", href: "/contact" }}
      />

      {serviceCategories.map((category) => {
        const CategoryIcon = iconMap[category.iconName];
        return (
          <section key={category.slug} className="py-16 lg:py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <ScrollReveal>
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-accent/10 rounded-lg">
                    <CategoryIcon className="text-accent" size={20} />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold">
                    {category.title}
                  </h2>
                </div>
                <p className="text-text-secondary max-w-2xl mb-10">
                  {category.description}
                </p>
              </ScrollReveal>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.services.map((service, i) => (
                  <ServiceCard
                    key={service.slug}
                    title={service.title}
                    tagline={service.tagline}
                    iconName={service.iconName}
                    href={`/services/${category.slug}/${service.slug}`}
                    delay={i * 0.06}
                  />
                ))}
              </div>
            </div>
          </section>
        );
      })}
    </>
  );
}
