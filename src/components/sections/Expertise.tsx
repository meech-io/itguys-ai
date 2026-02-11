"use client";

import {
  Shield,
  Network,
  Cloud,
  GitBranch,
  Activity,
  Lock,
} from "lucide-react";
import ScrollReveal from "../ui/ScrollReveal";
import SectionHeader from "../ui/SectionHeader";

const expertiseAreas = [
  {
    icon: Shield,
    title: "Okta & IAM",
    description:
      "Enterprise identity and access management with SSO, MFA, and lifecycle automation. Secure your workforce with zero-trust identity.",
    techs: ["Okta", "SAML", "SCIM", "OAuth"],
  },
  {
    icon: Network,
    title: "Advanced Networking",
    description:
      "Design and deploy robust network architectures with SD-WAN, zero-trust segmentation, and enterprise-grade wireless solutions.",
    techs: ["Cisco Meraki", "Palo Alto", "Ubiquiti", "Zero Trust"],
  },
  {
    icon: Cloud,
    title: "AWS Infrastructure",
    description:
      "Cloud architecture, migration, and optimization on AWS. From VPC design to serverless workloads, we build scalable cloud foundations.",
    techs: ["EC2", "Lambda", "CloudFormation", "IAM"],
  },
  {
    icon: GitBranch,
    title: "DevOps & CI/CD",
    description:
      "Streamline your development pipeline with infrastructure as code, container orchestration, and automated deployment workflows.",
    techs: ["Terraform", "Docker", "Kubernetes", "GitHub Actions"],
  },
  {
    icon: Activity,
    title: "Monitoring & Observability",
    description:
      "Full-stack observability with proactive alerting, performance monitoring, and incident response automation.",
    techs: ["Datadog", "New Relic", "Grafana", "PagerDuty"],
  },
  {
    icon: Lock,
    title: "Security & Compliance",
    description:
      "Comprehensive security posture management including vulnerability assessments, compliance frameworks, and security awareness.",
    techs: ["SOC 2", "HIPAA", "Pen Testing", "SIEM"],
  },
];

export default function Expertise() {
  return (
    <section id="expertise" className="py-24 lg:py-32 bg-surface/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionHeader
            label="Our Expertise"
            title="Technical"
            gradientTitle="Excellence"
            subtitle="Deep expertise across modern infrastructure, security, and automation technologies."
          />
        </ScrollReveal>

        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {expertiseAreas.map((area, i) => {
            const Icon = area.icon;
            return (
              <ScrollReveal key={area.title} delay={i * 0.08}>
                <div className="group relative bg-surface border border-border rounded-2xl p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-border-light hover:shadow-lg hover:shadow-black/20 h-full">
                  <div className="inline-flex p-3 rounded-lg bg-accent/10 mb-4">
                    <Icon className="text-accent" size={22} />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{area.title}</h3>
                  <p className="text-text-secondary text-sm leading-relaxed mb-4">
                    {area.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {area.techs.map((tech) => (
                      <span
                        key={tech}
                        className="font-mono text-xs px-2.5 py-1 rounded-full bg-elevated text-text-muted border border-border"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
