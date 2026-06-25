interface PageHeroProps {
  title: string;
  subtitle: string;
  image?: string;
}

export function PageHero({ title, subtitle, image }: PageHeroProps) {
  const bgImage =
    image ??
    "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=1920&q=80";

  return (
    <section className="relative flex min-h-[45vh] items-center overflow-hidden pt-28 sm:pt-32">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${bgImage})` }}
      />
      <div className="absolute inset-0 bg-hero-gradient" />
      <div className="absolute inset-0 bg-hero-shine" />
      <div className="absolute inset-0 bg-wine/30" />

      <div className="relative mx-auto max-w-7xl px-4 py-16 text-center sm:px-6 sm:py-20 lg:px-8">
        <p className="section-eyebrow text-rose-light">Hemas Decor</p>
        <h1 className="mt-3 font-serif text-4xl font-bold text-ivory-50 sm:text-5xl">
          {title}
        </h1>
        <div className="ornament-line mx-auto my-5 max-w-xs" />
        <p className="mx-auto max-w-2xl text-lg text-ivory-200/90">
          {subtitle}
        </p>
      </div>
    </section>
  );
}
