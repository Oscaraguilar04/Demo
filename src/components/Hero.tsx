import Image from "next/image";
import { restaurant } from "@/data/restaurant";

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden"
      aria-labelledby="hero-heading"
    >
      <div className="absolute inset-0 -z-10">
        <Image
          src={restaurant.heroImage}
          alt=""
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[linear-gradient(105deg,rgba(15,36,28,0.88)_0%,rgba(15,36,28,0.72)_42%,rgba(15,36,28,0.35)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(184,137,61,0.28),transparent_45%)]" />
      </div>

      <div className="section-shell flex min-h-[min(92vh,780px)] flex-col justify-end pb-16 pt-28 sm:pb-20 sm:pt-32 lg:justify-center lg:pb-24">
        <div className="max-w-2xl text-white">
          <p className="fade-up mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-[color:var(--brand-accent)]">
            {restaurant.trustStatement}
          </p>
          <h1
            id="hero-heading"
            className="fade-up fade-up-delay-1 font-display text-4xl leading-[1.08] font-semibold tracking-tight sm:text-5xl lg:text-6xl"
          >
            <span className="block text-[1.05em]">{restaurant.businessName}</span>
            <span className="mt-3 block text-[0.58em] font-normal text-white/90 sm:mt-4">
              {restaurant.tagline}
            </span>
          </h1>
          <p className="fade-up fade-up-delay-2 mt-6 max-w-xl text-base leading-relaxed text-white/85 sm:text-lg">
            {restaurant.description}
          </p>
          <div className="fade-up fade-up-delay-2 mt-9 flex flex-wrap gap-3">
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
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/35 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition duration-200 hover:-translate-y-0.5 hover:bg-white/20 focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-[color:var(--brand-accent)]"
            >
              View Menu
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
