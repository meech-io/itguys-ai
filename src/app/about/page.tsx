import type { Metadata } from "next";
import { Users, Target, Zap, Heart } from "lucide-react";
import Breadcrumb from "@/components/ui/Breadcrumb";
import PageHero from "@/components/ui/PageHero";
import ScrollReveal from "@/components/ui/ScrollReveal";
import Testimonials from "@/components/sections/Testimonials";

export const metadata: Metadata = {
  title: "About - ITGuys.ai",
  description:
    "Learn about ITGuys.ai — a modern IT consulting and home automation firm serving the San Francisco Bay Area.",
};

const values = [
  {
    icon: Target,
    title: "Results-Driven",
    description:
      "We measure success by outcomes, not hours billed. Every engagement starts with clear goals and ends with measurable results.",
  },
  {
    icon: Zap,
    title: "Modern Approach",
    description:
      "We use the latest tools and methodologies — not because they're trendy, but because they deliver better results for our clients.",
  },
  {
    icon: Users,
    title: "Client-First",
    description:
      "We act as an extension of your team. Your priorities are our priorities, and we communicate transparently every step of the way.",
  },
  {
    icon: Heart,
    title: "Craftsmanship",
    description:
      "Whether it's a network rack or a home theater, we take pride in the quality of our work. Every cable is labeled, every config is documented.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Breadcrumb items={[{ label: "About" }]} />

      <PageHero
        title="About ITGuys.ai"
        description="We're a modern IT consulting and home automation firm based in the San Francisco Bay Area. We help businesses run better and homes run smarter."
        primaryCta={{ label: "View Our Services", href: "/services" }}
        secondaryCta={{ label: "Get in Touch", href: "/contact" }}
      />

      {/* Story */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <ScrollReveal>
              <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-accent mb-4">
                Our Story
              </span>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-8">
                Technology should be <span className="text-accent">effortless</span>.
              </h2>
              <div className="space-y-6 text-text-secondary leading-relaxed">
                <p>
                  ITGuys.ai was founded on a simple belief: technology should make
                  your life easier, not harder. Too many businesses struggle with
                  unreliable IT, and too many homeowners are frustrated by smart home
                  devices that don&apos;t talk to each other.
                </p>
                <p>
                  We bridge the gap between enterprise-grade expertise and
                  real-world usability. Our team brings experience from companies
                  like AWS, Okta, and Cisco to solve problems for businesses of
                  all sizes — and we apply that same rigor to home automation
                  projects.
                </p>
                <p>
                  Whether we&apos;re implementing Okta SSO for a 500-person company
                  or building a Dolby Atmos theater in your living room, the
                  approach is the same: understand the goal, design the right
                  solution, execute flawlessly, and support it long-term.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 lg:py-32 bg-surface/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-accent">
                What We Believe
              </span>
              <h2 className="mt-4 text-3xl md:text-4xl font-bold tracking-tight">
                Our Values
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-6">
            {values.map((value, i) => {
              const Icon = value.icon;
              return (
                <ScrollReveal key={value.title} delay={i * 0.08}>
                  <div className="bg-surface border border-border rounded-2xl p-8 h-full transition-all duration-300 hover:-translate-y-0.5 hover:border-border-light">
                    <div className="inline-flex p-3 rounded-lg bg-accent/10 mb-4">
                      <Icon className="text-accent" size={22} />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                    <p className="text-text-secondary leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Bay Area */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <ScrollReveal>
              <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-accent mb-4">
                Where We Work
              </span>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
                Serving the Bay Area
              </h2>
              <p className="text-text-secondary leading-relaxed mb-8">
                We&apos;re based in the San Francisco Bay Area and serve clients from
                Santa Rosa to San Jose, Fairfield to Brentwood. For remote IT
                consulting, we work with businesses nationwide.
              </p>
            </ScrollReveal>
            <ScrollReveal>
              <div className="rounded-2xl overflow-hidden border border-border">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d420000!2d-122.15!3d37.9!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1"
                  width="100%"
                  height="300"
                  style={{
                    border: 0,
                    filter:
                      "invert(90%) hue-rotate(180deg) saturate(0.3)",
                  }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Bay Area service area"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <Testimonials />
    </>
  );
}
