import type { Metadata } from "next";
import Breadcrumb from "@/components/ui/Breadcrumb";
import PageHero from "@/components/ui/PageHero";
import ServiceCard from "@/components/ui/ServiceCard";
import { businessServices } from "@/data/services";

export const metadata: Metadata = {
  title: "Business IT Solutions - ITGuys.ai",
  description:
    "Enterprise-grade IT consulting, cloud solutions, security, and managed support tailored to your business needs.",
};

export default function BusinessServicesPage() {
  return (
    <>
      <Breadcrumb
        items={[
          { label: "Services", href: "/services" },
          { label: "Business IT" },
        ]}
      />

      <PageHero
        iconName="Building2"
        label="Business IT Solutions"
        title="IT That Powers Your Business"
        description="Enterprise-grade infrastructure, security, and support tailored to your business needs. From startups to established companies, we've got you covered."
        primaryCta={{ label: "Book a Consultation", href: "https://cal.com/itguys" }}
        secondaryCta={{ label: "Contact Us", href: "/contact" }}
      />

      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {businessServices.map((service, i) => (
              <ServiceCard
                key={service.slug}
                title={service.title}
                tagline={service.tagline}
                iconName={service.iconName}
                href={`/services/business/${service.slug}`}
                delay={i * 0.06}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
