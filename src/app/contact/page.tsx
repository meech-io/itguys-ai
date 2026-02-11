import type { Metadata } from "next";
import Breadcrumb from "@/components/ui/Breadcrumb";
import PageHero from "@/components/ui/PageHero";
import Contact from "@/components/sections/Contact";

export const metadata: Metadata = {
  title: "Contact - ITGuys.ai",
  description:
    "Get in touch with ITGuys.ai. Contact us for IT consulting, home automation, or to schedule a free consultation.",
};

export default function ContactPage() {
  return (
    <>
      <Breadcrumb items={[{ label: "Contact" }]} />

      <PageHero
        title="Get in Touch"
        description="Tell us about your project and we'll get back to you within 24 hours. No pressure, just a friendly conversation about what's possible."
      />

      <Contact />
    </>
  );
}
