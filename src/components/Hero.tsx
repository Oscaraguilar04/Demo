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
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(20,12,10,0.62)_0%,rgba(20,12,10,0.35)_38%,rgba(20,12,10,0.88)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_80%,rgba(196,92,38,0.28),transparent_45%)]" />
      </div>

      <div className="section-shell relative flex min-h-[100svh] flex-col justify-end pb-24 pt-36 sm:pb-28 lg:justify-center lg:pb-24">
        <div className="max-w-4xl text-[#f7f1e6]">
          <p className="fade-up mb-5 inline-flex items-center gap-3 border border-[#f7f1e6]/25 bg-black/30 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.28em] text-[#f7f1e6]/90 backdrop-blur-md">
            <span
              aria-hidden="true"
              className="h-1.5 w-1.5 rounded-full bg-[color:var(--brand-accent)]"
            />
            {restaurant.trustStatement}
          </p>
          <h1
            id="hero-heading"
            className="fade-up fade-up-delay-1 font-display text-5xl leading-[0.92] font-bold tracking-[0.02em] uppercase sm:text-7xl lg:text-8xl xl:text-[6.5rem]"
          >
            {restaurant.businessName}
          </h1>
          <p className="fade-up fade-up-delay-1 mt-6 max-w-2xl border-l-4 border-[color:var(--brand-accent)] pl-5 text-lg leading-snug text-[#f7f1e6]/90 sm:text-2xl">
            {restaurant.tagline}
          </p>
          <p className="fade-up fade-up-delay-2 mt-6 max-w-xl text-base leading-relaxed text-[#f7f1e6]/72 sm:text-lg">
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
              className="inline-flex items-center justify-center gap-2 rounded-sm border border-[#f7f1e6]/35 bg-[#f7f1e6]/10 px-7 py-3.5 text-xs font-bold uppercase tracking-[0.18em] text-[#f7f1e6] backdrop-blur-md transition duration-300 hover:-translate-y-0.5 hover:bg-[#f7f1e6]/20 focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-[color:var(--brand-accent)]"
            >
              View Menu
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
