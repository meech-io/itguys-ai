import type { Metadata } from "next";
import ServicePageTemplate from "@/components/templates/ServicePageTemplate";
import { getServiceBySlug } from "@/data/services";

const service = getServiceBySlug("business", "managed-it-support")!;

export const metadata: Metadata = {
  title: `${service.title} - ITGuys.ai`,
  description: service.description,
};

export default function Page() {
  return (
    <ServicePageTemplate
      service={service}
      categorySlug="business"
      categoryTitle="Business IT"
    />
  );
}
