import Image from "next/image";
import { restaurant } from "@/data/restaurant";

export function About() {
  return (
    <section
      id="about"
      className="section-pad scroll-mt-24"
      aria-labelledby="about-heading"
    >
      <div className="section-shell grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <div className="relative aspect-[5/6] overflow-hidden rounded-[1.75rem] shadow-[var(--shadow-soft)] sm:aspect-[4/5]">
          <Image
            src={restaurant.aboutImage}
            alt={`Dining atmosphere at ${restaurant.businessName}`}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>

        <div>
          <p className="eyebrow">Our story</p>
          <h2
            id="about-heading"
            className="mt-3 font-display text-3xl font-semibold tracking-tight text-[color:var(--brand-primary)] sm:text-4xl"
          >
            Rooted in Bakersfield
          </h2>
          <p className="mt-6 text-base leading-relaxed text-[color:var(--ink-muted)] sm:text-lg">
            {restaurant.aboutStory}
          </p>
          <p className="mt-5 text-base leading-relaxed text-[color:var(--ink-muted)] sm:text-lg">
            We take pride in being part of this community — supporting local
            gatherings, feeding regulars by name, and keeping a welcoming table
            open for neighbors across the Central Valley.
          </p>
          <p className="mt-8 text-sm font-semibold tracking-wide text-[color:var(--brand-accent)]">
            {restaurant.trustStatement}
          </p>
        </div>
      </div>
    </section>
  );
}
