import Image from "next/image";
import { restaurant } from "@/data/restaurant";

export function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-[100svh] overflow-hidden"
      aria-labelledby="hero-heading"
    >
      <div className="absolute inset-0">
        <Image
          src={restaurant.heroImage}
          alt=""
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,10,9,0.55)_0%,rgba(8,10,9,0.35)_40%,rgba(8,10,9,0.78)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_70%,rgba(255,90,54,0.22),transparent_50%)]" />
      </div>

      <div className="section-shell relative flex min-h-[100svh] flex-col justify-end pb-24 pt-36 sm:pb-28 lg:justify-center lg:pb-24">
        <div className="max-w-3xl text-white">
          <p className="fade-up mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.22em] text-white/90 backdrop-blur-md">
            <span
              aria-hidden="true"
              className="h-1.5 w-1.5 rounded-full bg-[color:var(--brand-accent)]"
            />
            {restaurant.trustStatement}
          </p>
          <h1
            id="hero-heading"
            className="fade-up fade-up-delay-1 font-display text-5xl leading-[0.95] font-extrabold tracking-tight sm:text-6xl lg:text-7xl xl:text-8xl"
          >
            {restaurant.businessName}
          </h1>
          <p className="fade-up fade-up-delay-1 mt-5 max-w-xl font-display text-xl font-medium text-white/90 sm:text-2xl">
            {restaurant.tagline}
          </p>
          <p className="fade-up fade-up-delay-2 mt-5 max-w-lg text-base leading-relaxed text-white/75 sm:text-lg">
            {restaurant.description}
          </p>
          <div className="fade-up fade-up-delay-2 mt-10 flex flex-wrap gap-3">
            <a
              href={restaurant.orderUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-accent"
            >
              Order Online
            </a>
            <a
              href="#menu"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 bg-white/10 px-7 py-3.5 text-sm font-semibold tracking-wide text-white backdrop-blur-md transition duration-300 hover:-translate-y-0.5 hover:bg-white/20 focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-[color:var(--brand-accent)]"
            >
              View Menu
            </a>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute bottom-8 left-1/2 hidden -translate-x-1/2 md:block">
        <span className="block h-10 w-px animate-pulse bg-gradient-to-b from-white/0 via-white/70 to-white/0" />
      </div>
    </section>
  );
}
