import Link from "next/link";

export default function PageHero({
  eyebrow,
  title,
  subtitle,
  image,
  breadcrumbs,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  image?: string;
  breadcrumbs?: { label: string; href?: string }[];
}) {
  const bg =
    image ||
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2400&q=80";

  return (
    <section className="relative min-h-[55vh] md:min-h-[60vh] flex items-end overflow-hidden pt-24 pb-12">
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${bg}')` }}
          aria-hidden
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(115deg, rgba(14,31,46,0.94) 0%, rgba(22,49,74,0.85) 50%, rgba(22,49,74,0.55) 100%)",
          }}
          aria-hidden
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 md:px-6 w-full text-white">
        {breadcrumbs && breadcrumbs.length > 0 && (
          <nav className="mb-6 text-sm text-white/70 flex items-center gap-2 flex-wrap">
            {breadcrumbs.map((crumb, i) => (
              <span key={`${crumb.label}-${i}`} className="flex items-center gap-2">
                {crumb.href ? (
                  <Link
                    href={crumb.href}
                    className="hover:text-brand-orange-light transition-colors"
                  >
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="text-white/90">{crumb.label}</span>
                )}
                {i < breadcrumbs.length - 1 && (
                  <span className="text-white/40">›</span>
                )}
              </span>
            ))}
          </nav>
        )}

        {eyebrow && (
          <p className="text-brand-orange-light font-bold text-sm md:text-base uppercase tracking-widest mb-3">
            {eyebrow}
          </p>
        )}
        <h1 className="text-4xl md:text-6xl font-extrabold leading-[1.1] tracking-tight text-balance max-w-4xl">
          {title}
        </h1>
        {subtitle && (
          <p className="text-white/85 text-lg md:text-xl mt-5 leading-relaxed max-w-3xl text-pretty">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
