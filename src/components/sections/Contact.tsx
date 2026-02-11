"use client";

import { MapPin, Phone, Mail, Clock } from "lucide-react";
import ScrollReveal from "../ui/ScrollReveal";
import SectionHeader from "../ui/SectionHeader";
import Button from "../ui/Button";

const contactInfo = [
  {
    icon: MapPin,
    label: "Address",
    value: "Los Angeles, CA",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "(310) 555-0199",
    href: "tel:+13105550199",
  },
  {
    icon: Mail,
    label: "Email",
    value: "hello@itguys.ai",
    href: "mailto:hello@itguys.ai",
  },
  {
    icon: Clock,
    label: "Hours",
    value: "Mon - Fri: 9AM - 5PM PST",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionHeader
            label="// get in touch"
            title="Let's Start a"
            gradientTitle="Conversation"
            subtitle="Tell us about your project and we'll get back to you within 24 hours."
          />
        </ScrollReveal>

        <div className="mt-16 grid lg:grid-cols-5 gap-12">
          {/* Form */}
          <ScrollReveal direction="left" className="lg:col-span-3">
            <form
              className="space-y-6"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-text-secondary mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full bg-surface border border-border rounded-lg px-4 py-3 text-text-primary placeholder:text-text-muted focus:outline-none focus:border-accent-purple focus:ring-1 focus:ring-accent-purple/50 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-text-secondary mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="john@company.com"
                    className="w-full bg-surface border border-border rounded-lg px-4 py-3 text-text-primary placeholder:text-text-muted focus:outline-none focus:border-accent-purple focus:ring-1 focus:ring-accent-purple/50 transition-colors"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-text-secondary mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    placeholder="(555) 000-0000"
                    className="w-full bg-surface border border-border rounded-lg px-4 py-3 text-text-primary placeholder:text-text-muted focus:outline-none focus:border-accent-purple focus:ring-1 focus:ring-accent-purple/50 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-text-secondary mb-2">
                    Service Interest
                  </label>
                  <select className="w-full bg-surface border border-border rounded-lg px-4 py-3 text-text-primary focus:outline-none focus:border-accent-purple focus:ring-1 focus:ring-accent-purple/50 transition-colors">
                    <option value="">Select a service</option>
                    <option value="business-it">Business IT Solutions</option>
                    <option value="home-automation">Home Automation</option>
                    <option value="security">Security & Compliance</option>
                    <option value="cloud">Cloud Infrastructure</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-text-secondary mb-2">
                  Message
                </label>
                <textarea
                  rows={5}
                  placeholder="Tell us about your project..."
                  className="w-full bg-surface border border-border rounded-lg px-4 py-3 text-text-primary placeholder:text-text-muted focus:outline-none focus:border-accent-purple focus:ring-1 focus:ring-accent-purple/50 transition-colors resize-none"
                />
              </div>

              <Button type="submit" className="w-full sm:w-auto">
                Send Message
              </Button>
            </form>
          </ScrollReveal>

          {/* Contact info */}
          <ScrollReveal direction="right" className="lg:col-span-2">
            <div className="bg-surface border border-border rounded-2xl p-8 h-full">
              <h3 className="text-xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-6">
                {contactInfo.map((info) => {
                  const Icon = info.icon;
                  const content = (
                    <div className="flex items-start gap-4">
                      <div className="p-2.5 bg-elevated rounded-lg flex-shrink-0">
                        <Icon size={18} className="text-accent-purple" />
                      </div>
                      <div>
                        <div className="text-sm text-text-muted mb-0.5">
                          {info.label}
                        </div>
                        <div className="text-text-primary font-medium">
                          {info.value}
                        </div>
                      </div>
                    </div>
                  );

                  if (info.href) {
                    return (
                      <a
                        key={info.label}
                        href={info.href}
                        className="block hover:opacity-80 transition-opacity"
                      >
                        {content}
                      </a>
                    );
                  }
                  return <div key={info.label}>{content}</div>;
                })}
              </div>

              <div className="mt-8 pt-6 border-t border-border">
                <p className="text-sm text-text-secondary">
                  Prefer to schedule a call? Book a free consultation through
                  our calendar.
                </p>
                <a
                  href="https://cal.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-3 text-sm text-accent-purple hover:text-accent-blue transition-colors font-medium"
                >
                  Book a Consultation →
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
