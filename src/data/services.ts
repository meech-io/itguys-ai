import {
  Shield,
  Network,
  Cloud,
  GitBranch,
  Activity,
  Headphones,
  Tv,
  Wifi,
  Home,
  Cable,
  Lightbulb,
  Camera,
  Speaker,
  Building2,
  type LucideIcon,
} from "lucide-react";

export type IconName =
  | "Shield"
  | "Network"
  | "Cloud"
  | "GitBranch"
  | "Activity"
  | "Headphones"
  | "Tv"
  | "Wifi"
  | "Home"
  | "Cable"
  | "Lightbulb"
  | "Camera"
  | "Speaker"
  | "Building2";

export const iconMap: Record<IconName, LucideIcon> = {
  Shield,
  Network,
  Cloud,
  GitBranch,
  Activity,
  Headphones,
  Tv,
  Wifi,
  Home,
  Cable,
  Lightbulb,
  Camera,
  Speaker,
  Building2,
};

export interface ServiceData {
  slug: string;
  title: string;
  iconName: IconName;
  tagline: string;
  description: string;
  features: { title: string; description: string }[];
  benefits: string[];
  technologies: string[];
  cta: { heading: string; description: string };
}

export interface ServiceCategory {
  slug: string;
  title: string;
  iconName: IconName;
  description: string;
  services: ServiceData[];
}

// ─── Business IT Services ───────────────────────────────────────────────────

export const businessServices: ServiceData[] = [
  {
    slug: "identity-access-management",
    title: "Identity & Access Management",
    iconName: "Shield",
    tagline: "Zero-trust identity for your workforce",
    description:
      "Enterprise identity and access management with SSO, MFA, and lifecycle automation. We implement Okta, Azure AD, and custom IAM solutions that secure your workforce without slowing them down.",
    features: [
      {
        title: "Single Sign-On (SSO)",
        description:
          "One login for every app. We configure SAML and OIDC integrations across your entire SaaS stack.",
      },
      {
        title: "Multi-Factor Authentication",
        description:
          "Phishing-resistant MFA with hardware keys, biometrics, and push notifications for every user.",
      },
      {
        title: "Lifecycle Automation",
        description:
          "Automated onboarding and offboarding. New hires get access day one; departing employees lose it instantly.",
      },
      {
        title: "SCIM Provisioning",
        description:
          "Automated user provisioning and deprovisioning across all connected applications.",
      },
      {
        title: "Access Reviews",
        description:
          "Periodic certification campaigns to ensure least-privilege access across your organization.",
      },
      {
        title: "Directory Integration",
        description:
          "Seamless integration with Active Directory, LDAP, and HR systems like Workday and BambooHR.",
      },
    ],
    benefits: [
      "Reduce onboarding time from days to hours",
      "Eliminate password-related helpdesk tickets",
      "Meet SOC 2 and HIPAA access control requirements",
      "Prevent unauthorized access with zero-trust policies",
      "Full audit trail for every authentication event",
    ],
    technologies: ["Okta", "Azure AD", "SAML", "SCIM", "OAuth", "FIDO2"],
    cta: {
      heading: "Ready to Secure Your Workforce?",
      description:
        "Let's discuss how modern identity management can protect your business and improve your team's productivity.",
    },
  },
  {
    slug: "network-infrastructure",
    title: "Network Infrastructure",
    iconName: "Network",
    tagline: "Robust networks built for performance",
    description:
      "Design and deploy robust network architectures with SD-WAN, zero-trust segmentation, and enterprise-grade wireless. From single-office setups to multi-site deployments, we build networks that just work.",
    features: [
      {
        title: "Network Design & Architecture",
        description:
          "Custom network topology design optimized for your traffic patterns, security requirements, and growth plans.",
      },
      {
        title: "SD-WAN Deployment",
        description:
          "Software-defined wide area networking for reliable, cost-effective multi-site connectivity.",
      },
      {
        title: "Enterprise Wireless",
        description:
          "High-density Wi-Fi 6/6E deployments with seamless roaming, band steering, and centralized management.",
      },
      {
        title: "Zero-Trust Segmentation",
        description:
          "Micro-segmentation and VLAN architecture that isolates critical systems and limits lateral movement.",
      },
      {
        title: "Firewall & Security",
        description:
          "Next-gen firewall deployment with IDS/IPS, content filtering, and threat intelligence feeds.",
      },
      {
        title: "Monitoring & Alerting",
        description:
          "24/7 network monitoring with automated alerting, performance dashboards, and capacity planning.",
      },
    ],
    benefits: [
      "99.9% uptime with redundant architecture",
      "Zero-downtime network migrations",
      "Centralized management across all sites",
      "Real-time visibility into network performance",
      "Scalable infrastructure that grows with you",
    ],
    technologies: [
      "Arista",
      "Palo Alto",
      "Ubiquiti",
      "Fortinet",
      "Aruba",
      "Cisco Meraki",
      "VXLAN",
    ],
    cta: {
      heading: "Need a Network That Performs?",
      description:
        "Whether you're upgrading or starting from scratch, we'll design a network infrastructure that exceeds your expectations.",
    },
  },
  {
    slug: "cloud-solutions",
    title: "Cloud Solutions (AWS)",
    iconName: "Cloud",
    tagline: "Scalable cloud infrastructure on AWS",
    description:
      "Cloud architecture, migration, and optimization on AWS. From VPC design to serverless workloads, we build scalable cloud foundations that reduce costs and improve reliability.",
    features: [
      {
        title: "Cloud Architecture Design",
        description:
          "Well-Architected Framework reviews and custom architecture design for security, reliability, and cost optimization.",
      },
      {
        title: "Migration & Modernization",
        description:
          "Lift-and-shift, re-platforming, and re-architecting strategies tailored to your application portfolio.",
      },
      {
        title: "Infrastructure as Code",
        description:
          "CloudFormation and Terraform templates for repeatable, version-controlled infrastructure deployments.",
      },
      {
        title: "Serverless & Containers",
        description:
          "Lambda, ECS, and EKS deployments that scale automatically and minimize operational overhead.",
      },
      {
        title: "Cost Optimization",
        description:
          "Reserved instances, savings plans, right-sizing, and automated scheduling to cut your AWS bill.",
      },
      {
        title: "Disaster Recovery",
        description:
          "Multi-region DR strategies with automated failover, backup verification, and recovery testing.",
      },
    ],
    benefits: [
      "Reduce cloud costs by 30-50% on average",
      "Automated scaling for traffic spikes",
      "Multi-region redundancy for business continuity",
      "Compliance-ready architecture (SOC 2, HIPAA)",
      "Infrastructure changes deployed in minutes, not days",
    ],
    technologies: [
      "AWS",
      "EC2",
      "Lambda",
      "CloudFormation",
      "Terraform",
      "EKS",
    ],
    cta: {
      heading: "Ready to Move to the Cloud?",
      description:
        "Let's design a cloud strategy that scales with your business and optimizes your infrastructure costs.",
    },
  },
  {
    slug: "security-compliance",
    title: "Security & Compliance",
    iconName: "Activity",
    tagline: "Comprehensive security posture management",
    description:
      "Comprehensive security posture management including vulnerability assessments, compliance frameworks, and security awareness training. We protect your business from threats and help you meet regulatory requirements.",
    features: [
      {
        title: "Security Assessments",
        description:
          "Comprehensive vulnerability scanning, penetration testing, and security posture reviews.",
      },
      {
        title: "Compliance Frameworks",
        description:
          "SOC 2 Type II, HIPAA, PCI-DSS, and ISO 27001 readiness assessments and implementation support.",
      },
      {
        title: "SIEM & Monitoring",
        description:
          "Security information and event management with 24/7 threat detection and incident response.",
      },
      {
        title: "Endpoint Protection",
        description:
          "EDR/XDR deployment with automated threat response, device management, and encryption enforcement.",
      },
      {
        title: "Security Training",
        description:
          "Phishing simulations, security awareness programs, and policy development for your entire team.",
      },
      {
        title: "Incident Response",
        description:
          "Incident response planning, tabletop exercises, and rapid response when threats are detected.",
      },
    ],
    benefits: [
      "Meet compliance requirements faster",
      "Reduce attack surface with proactive assessments",
      "24/7 threat monitoring and response",
      "Employee security awareness improvement",
      "Documented security posture for auditors and clients",
    ],
    technologies: [
      "CrowdStrike",
      "Splunk",
      "Tenable",
      "SOC 2",
      "HIPAA",
      "SIEM",
    ],
    cta: {
      heading: "Need to Strengthen Your Security?",
      description:
        "From compliance readiness to active threat defense, we'll build a security program that protects your business.",
    },
  },
  {
    slug: "devops-automation",
    title: "DevOps & Automation",
    iconName: "GitBranch",
    tagline: "Streamlined development and deployment",
    description:
      "Streamline your development pipeline with infrastructure as code, container orchestration, and automated deployment workflows. We help engineering teams ship faster with confidence.",
    features: [
      {
        title: "CI/CD Pipelines",
        description:
          "Automated build, test, and deployment pipelines with GitHub Actions, GitLab CI, or Jenkins.",
      },
      {
        title: "Container Orchestration",
        description:
          "Docker and Kubernetes deployments with auto-scaling, rolling updates, and health monitoring.",
      },
      {
        title: "Infrastructure as Code",
        description:
          "Terraform and Pulumi modules for reproducible, version-controlled infrastructure management.",
      },
      {
        title: "Monitoring & Observability",
        description:
          "Full-stack observability with Datadog, Grafana, and custom dashboards for every service.",
      },
      {
        title: "GitOps Workflows",
        description:
          "ArgoCD and Flux-based deployment workflows where Git is the single source of truth.",
      },
      {
        title: "Platform Engineering",
        description:
          "Internal developer platforms that abstract complexity and accelerate team productivity.",
      },
    ],
    benefits: [
      "Deploy multiple times per day with confidence",
      "Reduce deployment failures by 80%",
      "Infrastructure changes auditable in Git",
      "Self-healing systems that recover automatically",
      "Developer productivity improvements of 3-5x",
    ],
    technologies: [
      "Terraform",
      "Docker",
      "Kubernetes",
      "GitHub Actions",
      "ArgoCD",
      "Datadog",
    ],
    cta: {
      heading: "Ready to Accelerate Your Pipeline?",
      description:
        "Let's modernize your development workflow and give your engineering team the tools to ship faster.",
    },
  },
  {
    slug: "managed-it-support",
    title: "Managed IT Support",
    iconName: "Headphones",
    tagline: "Proactive IT support and management",
    description:
      "Proactive IT management and support that keeps your business running smoothly. From helpdesk to strategic planning, we act as your outsourced IT department with enterprise-grade service levels.",
    features: [
      {
        title: "24/7 Helpdesk",
        description:
          "Round-the-clock technical support via phone, email, and chat with guaranteed response times.",
      },
      {
        title: "Proactive Monitoring",
        description:
          "Continuous monitoring of servers, networks, and endpoints with automated remediation.",
      },
      {
        title: "Patch Management",
        description:
          "Automated OS and application patching with testing, staged rollouts, and rollback capabilities.",
      },
      {
        title: "Device Management",
        description:
          "MDM enrollment, configuration profiles, and remote wipe for laptops, phones, and tablets.",
      },
      {
        title: "Backup & Recovery",
        description:
          "Automated backups with regular recovery testing and documented disaster recovery procedures.",
      },
      {
        title: "Strategic IT Planning",
        description:
          "Quarterly business reviews, technology roadmaps, and budget planning aligned with your goals.",
      },
    ],
    benefits: [
      "Predictable monthly IT costs",
      "Response times measured in minutes, not hours",
      "Proactive issue resolution before users notice",
      "Focus on your business while we handle IT",
      "Enterprise-grade support at SMB pricing",
    ],
    technologies: [
      "Jamf",
      "Intune",
      "ConnectWise",
      "Datto",
      "SentinelOne",
      "ITGlue",
    ],
    cta: {
      heading: "Want IT That Just Works?",
      description:
        "Let us handle your IT so you can focus on what you do best. Proactive, reliable, and always available.",
    },
  },
];

// ─── Home Automation Services ───────────────────────────────────────────────

export const homeServices: ServiceData[] = [
  {
    slug: "home-theater",
    title: "Home Theater Buildout",
    iconName: "Tv",
    tagline: "Cinema-quality entertainment at home",
    description:
      "From dedicated theater rooms to open-concept media spaces, we design and build immersive home theater experiences with professional-grade audio, video, and acoustic treatment.",
    features: [
      {
        title: "System Design",
        description:
          "Custom theater design including screen sizing, projector/display selection, and seating layout optimization.",
      },
      {
        title: "Audio Systems",
        description:
          "Dolby Atmos and DTS:X surround sound systems with calibrated speakers, subwoofers, and amplification.",
      },
      {
        title: "4K/8K Video",
        description:
          "Laser projectors, OLED displays, and motorized screens with HDR support and professional calibration.",
      },
      {
        title: "Acoustic Treatment",
        description:
          "Sound panels, bass traps, and diffusers designed to optimize your room's acoustics.",
      },
      {
        title: "Smart Control",
        description:
          "One-touch scene control — dim the lights, drop the screen, and start the movie with a single tap.",
      },
      {
        title: "Media Server",
        description:
          "Centralized media servers with streaming integration, local libraries, and multi-room distribution.",
      },
    ],
    benefits: [
      "True cinema experience without leaving home",
      "Professional audio calibration for perfect sound",
      "Seamless integration with streaming services",
      "Simple one-touch control for the whole family",
      "Increased home value with a premium media room",
    ],
    technologies: [
      "Dolby Atmos",
      "Sony",
      "JBL",
      "Denon",
      "Apple TV",
      "Plex",
    ],
    cta: {
      heading: "Ready for Movie Night?",
      description:
        "Let's design a home theater that rivals the cinema. From casual media rooms to dedicated theaters, we make it happen.",
    },
  },
  {
    slug: "ubiquiti-networking",
    title: "Ubiquiti Network Installation",
    iconName: "Wifi",
    tagline: "Enterprise-grade home networking",
    description:
      "Professional Ubiquiti UniFi network installations that deliver blazing-fast, reliable connectivity to every corner of your home. Enterprise-grade networking designed for residential spaces.",
    features: [
      {
        title: "Site Survey & Design",
        description:
          "RF site surveys and heat mapping to determine optimal access point placement for complete coverage.",
      },
      {
        title: "UniFi Dream Machine",
        description:
          "UDM Pro or UDM SE deployment with integrated security gateway, switch, and controller.",
      },
      {
        title: "Access Points",
        description:
          "Wi-Fi 6/6E access points strategically placed for seamless roaming and maximum throughput.",
      },
      {
        title: "Structured Cabling",
        description:
          "Cat6/Cat6a runs to every room with proper termination, testing, and labeled patch panels.",
      },
      {
        title: "Network Segmentation",
        description:
          "Separate VLANs for IoT devices, guest networks, work devices, and media streaming.",
      },
      {
        title: "Remote Management",
        description:
          "Cloud-managed networking with remote monitoring, firmware updates, and performance analytics.",
      },
    ],
    benefits: [
      "Full coverage with zero dead zones",
      "Blazing-fast Wi-Fi 6 speeds throughout your home",
      "Separate networks for IoT, guests, and work",
      "Professional-grade reliability and uptime",
      "Centralized management from your phone",
    ],
    technologies: [
      "Ubiquiti",
      "UniFi",
      "Wi-Fi 6",
      "Cat6a",
      "VLAN",
      "PoE",
    ],
    cta: {
      heading: "Want Bulletproof Home Wi-Fi?",
      description:
        "Say goodbye to dead zones and buffering. Let's design a Ubiquiti network that covers every corner of your home.",
    },
  },
  {
    slug: "home-assistant",
    title: "Home Assistant Setup",
    iconName: "Home",
    tagline: "Open-source smart home automation",
    description:
      "Professional Home Assistant deployment and automation for a truly smart home. Local-first, privacy-focused automation that works with every brand and protocol — no cloud dependency required.",
    features: [
      {
        title: "HA Installation & Setup",
        description:
          "Dedicated Home Assistant server deployment with proper hardware, backups, and update management.",
      },
      {
        title: "Device Integration",
        description:
          "Connect all your smart devices — Zigbee, Z-Wave, Matter, Wi-Fi, and Bluetooth — into one platform.",
      },
      {
        title: "Custom Automations",
        description:
          "Sophisticated automations triggered by motion, time, presence, weather, and custom conditions.",
      },
      {
        title: "Dashboard Design",
        description:
          "Beautiful, intuitive dashboards for wall tablets, phones, and desktop with real-time status.",
      },
      {
        title: "Voice Control",
        description:
          "Integration with Alexa, Google Home, and local voice assistants for hands-free control.",
      },
      {
        title: "Energy Monitoring",
        description:
          "Track energy consumption by device and circuit with dashboards and optimization suggestions.",
      },
    ],
    benefits: [
      "One app to control everything in your home",
      "Local processing — works even without internet",
      "Privacy-first with no cloud dependency",
      "Unlimited automations with no subscription fees",
      "Works with 2000+ brands and devices",
    ],
    technologies: [
      "Home Assistant",
      "Zigbee",
      "Z-Wave",
      "Matter",
      "MQTT",
      "ESPHome",
    ],
    cta: {
      heading: "Ready to Automate Your Home?",
      description:
        "Let's build a smart home that actually works — locally, privately, and reliably with Home Assistant.",
    },
  },
  {
    slug: "low-voltage-wiring",
    title: "Low Voltage Wiring",
    iconName: "Cable",
    tagline: "Future-proof structured cabling",
    description:
      "Professional low voltage wiring and structured cabling for new construction and retrofits. We run the wires that power your smart home — ethernet, HDMI, speaker wire, and more.",
    features: [
      {
        title: "Structured Cabling",
        description:
          "Cat6/Cat6a ethernet runs with proper routing, fire-stopping, and labeled terminations at every drop.",
      },
      {
        title: "HDMI & Video Distribution",
        description:
          "In-wall HDMI runs, fiber HDMI for long distances, and HDMI matrix switching for multi-room video.",
      },
      {
        title: "Speaker Wiring",
        description:
          "In-wall and in-ceiling speaker wire runs with proper gauge selection and volume control placement.",
      },
      {
        title: "Conduit & Pathway",
        description:
          "Future-proof conduit runs and cable pathways that allow easy upgrades as technology evolves.",
      },
      {
        title: "Server Rack Setup",
        description:
          "Centralized equipment racks with proper ventilation, power management, and cable organization.",
      },
      {
        title: "Testing & Certification",
        description:
          "Every cable run tested and certified to spec with documented results and labeled endpoints.",
      },
    ],
    benefits: [
      "Future-proof infrastructure for decades",
      "Clean, hidden cable runs throughout your home",
      "Certified and documented installations",
      "Proper fire-stopping and code compliance",
      "Centralized equipment for easy maintenance",
    ],
    technologies: [
      "Cat6a",
      "Fiber HDMI",
      "Conduit",
      "Patch Panels",
      "Cable Cert",
      "Rack Systems",
    ],
    cta: {
      heading: "Building or Renovating?",
      description:
        "Now is the perfect time to wire your home right. Let's plan the cabling infrastructure for your project.",
    },
  },
  {
    slug: "smart-lighting",
    title: "Smart Lighting Systems",
    iconName: "Lightbulb",
    tagline: "Intelligent lighting that sets the mood",
    description:
      "Transform your home with intelligent lighting that responds to your life. From Lutron Caseta to full architectural lighting design, we create automated lighting scenes for every moment.",
    features: [
      {
        title: "Lighting Design",
        description:
          "Custom lighting layouts with layered ambient, task, and accent lighting for every room.",
      },
      {
        title: "Smart Switches & Dimmers",
        description:
          "Lutron Caseta, Lutron RadioRA, or Inovelli switches with smooth dimming and scene control.",
      },
      {
        title: "Automated Scenes",
        description:
          "Pre-programmed lighting scenes — movie mode, dinner party, bedtime, away — activated by tap or voice.",
      },
      {
        title: "Circadian Lighting",
        description:
          "Color temperature adjustments throughout the day that support your natural sleep-wake cycle.",
      },
      {
        title: "Landscape Lighting",
        description:
          "Exterior and landscape lighting with pathway lights, uplighting, and automated scheduling.",
      },
      {
        title: "Occupancy & Daylight",
        description:
          "Motion sensors and daylight harvesting that automatically adjust lights based on presence and ambient light.",
      },
    ],
    benefits: [
      "Energy savings of 30-50% with smart controls",
      "Perfect ambiance for every occasion",
      "Simple control via switches, app, or voice",
      "Enhanced security with automated presence simulation",
      "Increased home comfort with circadian lighting",
    ],
    technologies: [
      "Lutron",
      "Caseta",
      "RadioRA",
      "Inovelli",
      "Hue",
      "DALI",
    ],
    cta: {
      heading: "Ready to Transform Your Lighting?",
      description:
        "Let's design a lighting system that makes your home look and feel amazing — while saving energy.",
    },
  },
  {
    slug: "security-cameras",
    title: "Security Camera Systems",
    iconName: "Camera",
    tagline: "Professional surveillance and monitoring",
    description:
      "Professional security camera installations with local recording, smart detection, and remote monitoring. Protect your property with systems designed for reliability and privacy.",
    features: [
      {
        title: "Camera Placement Design",
        description:
          "Strategic camera placement for maximum coverage of entry points, perimeters, and high-value areas.",
      },
      {
        title: "UniFi Protect",
        description:
          "Ubiquiti UniFi Protect NVR systems with local recording, smart detection, and no monthly fees.",
      },
      {
        title: "Smart Detection",
        description:
          "AI-powered person, vehicle, and package detection with configurable alert zones and notifications.",
      },
      {
        title: "Night Vision",
        description:
          "IR and color night vision cameras that capture clear footage in complete darkness.",
      },
      {
        title: "Remote Viewing",
        description:
          "Secure remote access to live and recorded footage from your phone, tablet, or computer.",
      },
      {
        title: "Integration",
        description:
          "Camera feeds integrated with Home Assistant, smart lighting, and alarm systems for coordinated response.",
      },
    ],
    benefits: [
      "24/7 property monitoring with smart alerts",
      "No monthly subscription fees with local recording",
      "Crystal-clear footage day and night",
      "Privacy-focused with local-only storage",
      "Peace of mind whether home or away",
    ],
    technologies: [
      "UniFi Protect",
      "PoE Cameras",
      "NVR",
      "AI Detection",
      "IR Night Vision",
      "RTSP",
    ],
    cta: {
      heading: "Want to Secure Your Property?",
      description:
        "Let's design a camera system that protects your home with professional-grade surveillance — no monthly fees.",
    },
  },
  {
    slug: "whole-home-audio",
    title: "Whole Home Audio",
    iconName: "Speaker",
    tagline: "Music in every room, seamlessly",
    description:
      "Fill every room with music using distributed audio systems that sync perfectly. From in-ceiling speakers to outdoor zones, we design audio systems that sound incredible and integrate seamlessly.",
    features: [
      {
        title: "System Design",
        description:
          "Custom multi-zone audio design with speaker selection, amplifier sizing, and room acoustics consideration.",
      },
      {
        title: "In-Ceiling Speakers",
        description:
          "Architectural speakers that deliver premium sound while disappearing into your ceiling.",
      },
      {
        title: "Multi-Room Sync",
        description:
          "Sonos, HEOS, or Sonance systems with perfect synchronization across every zone.",
      },
      {
        title: "Outdoor Audio",
        description:
          "Weather-rated speakers and subwoofers for patios, pools, and outdoor entertaining areas.",
      },
      {
        title: "Streaming Integration",
        description:
          "Native support for Spotify, Apple Music, Tidal, and other streaming services in every zone.",
      },
      {
        title: "Voice & App Control",
        description:
          "Control music in any room with your voice, phone, or dedicated wall-mounted keypads.",
      },
    ],
    benefits: [
      "Consistent, high-quality sound in every room",
      "Simple control for the whole family",
      "Hidden speakers for a clean aesthetic",
      "Independent volume and source per zone",
      "Seamless integration with your smart home",
    ],
    technologies: [
      "Sonos",
      "Sonance",
      "KEF",
      "Denon HEOS",
      "AirPlay",
      "Spotify Connect",
    ],
    cta: {
      heading: "Ready for Music Everywhere?",
      description:
        "Let's design an audio system that fills your home with amazing sound — invisibly and effortlessly.",
    },
  },
];

// ─── Categories ─────────────────────────────────────────────────────────────

export const serviceCategories: ServiceCategory[] = [
  {
    slug: "business",
    title: "Business IT Solutions",
    iconName: "Building2",
    description:
      "Enterprise-grade infrastructure, security, and support tailored to your business needs. From startups to established companies, we've got you covered.",
    services: businessServices,
  },
  {
    slug: "home",
    title: "Home Automation",
    iconName: "Home",
    description:
      "From immersive home theaters to fully automated smart homes, we bring enterprise-grade networking and seamless integration to every room in your house.",
    services: homeServices,
  },
];

// ─── Helpers ────────────────────────────────────────────────────────────────

export function getServiceBySlug(
  category: "business" | "home",
  slug: string
): ServiceData | undefined {
  const services =
    category === "business" ? businessServices : homeServices;
  return services.find((s) => s.slug === slug);
}

export function getCategoryBySlug(
  slug: string
): ServiceCategory | undefined {
  return serviceCategories.find((c) => c.slug === slug);
}
