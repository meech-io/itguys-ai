interface SectionHeaderProps {
  label: string;
  title: string;
  gradientTitle?: string;
  subtitle?: string;
  align?: "left" | "center";
}

export default function SectionHeader({
  label,
  title,
  gradientTitle,
  subtitle,
  align = "center",
}: SectionHeaderProps) {
  return (
    <div className={align === "center" ? "text-center" : ""}>
      <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-accent">
        {label}
      </span>
      <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-bold leading-tight tracking-tight">
        {title}{" "}
        {gradientTitle && (
          <span className="text-text-primary">{gradientTitle}</span>
        )}
      </h2>
      {subtitle && (
        <p className="mt-5 text-lg text-text-secondary max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
