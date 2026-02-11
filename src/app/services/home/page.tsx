import type { Metadata } from "next";
import Breadcrumb from "@/components/ui/Breadcrumb";
import PageHero from "@/components/ui/PageHero";
import ServiceCard from "@/components/ui/ServiceCard";
import { homeServices } from "@/data/services";

export const metadata: Metadata = {
  title: "Home Automation - ITGuys.ai",
  description:
    "Professional home automation services including home theaters, Ubiquiti networking, Home Assistant, smart lighting, and more.",
};

export default function HomeServicesPage() {
  return (
    <>
      <Breadcrumb
        items={[
          { label: "Services", href: "/services" },
          { label: "Home Automation" },
        ]}
      />

      <PageHero
        iconName="Home"
        label="Home Automation"
        title="Homes That Wow"
        description="From immersive home theaters to fully automated smart homes, we bring enterprise-grade networking and seamless integration to every room in your house."
        primaryCta={{ label: "Book a Consultation", href: "https://cal.com/itguys" }}
        secondaryCta={{ label: "Contact Us", href: "/contact" }}
      />

      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {homeServices.map((service, i) => (
              <ServiceCard
                key={service.slug}
                title={service.title}
                tagline={service.tagline}
                iconName={service.iconName}
                href={`/services/home/${service.slug}`}
                delay={i * 0.06}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
