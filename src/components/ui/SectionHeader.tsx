import GradientText from "./GradientText";

interface SectionHeaderProps {
  label: string;
  title: string;
  gradientTitle?: string;
  subtitle?: string;
  gradient?: "primary" | "business" | "home";
  align?: "left" | "center";
}

const gradientMap = {
  primary: "from-accent-blue to-accent-purple",
  business: "from-accent-blue to-accent-cyan",
  home: "from-accent-purple to-accent-magenta",
};

export default function SectionHeader({
  label,
  title,
  gradientTitle,
  subtitle,
  gradient = "primary",
  align = "center",
}: SectionHeaderProps) {
  return (
    <div className={align === "center" ? "text-center" : ""}>
      <span className="font-mono text-sm text-text-muted tracking-wider uppercase">
        {label}
      </span>
      <h2 className="mt-3 text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight">
        {title}{" "}
        {gradientTitle && (
          <GradientText gradient={gradient}>{gradientTitle}</GradientText>
        )}
      </h2>
      {subtitle && (
        <p className="mt-4 text-lg text-text-secondary max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
}
