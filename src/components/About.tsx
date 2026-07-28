import Image from "next/image";
import { restaurant } from "@/data/restaurant";

export function About() {
  return (
    <section
      id="about"
      className="section-pad scroll-mt-28 overflow-hidden"
      aria-labelledby="about-heading"
    >
      <div className="section-shell grid items-center gap-12 lg:grid-cols-12 lg:gap-10">
        <div className="relative lg:col-span-7">
          <div className="relative aspect-[4/5] overflow-hidden rounded-sm shadow-[var(--shadow-lift)] sm:aspect-[5/4] lg:aspect-[4/3]">
            <Image
              src={restaurant.aboutImage}
              alt={`Smokehouse atmosphere at ${restaurant.businessName}`}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 60vw"
            />
          </div>
          <div className="absolute -bottom-6 -right-2 hidden max-w-[240px] border border-[color:var(--line)] bg-[color:var(--brand-accent)] p-5 text-white shadow-[var(--shadow-lift)] sm:block lg:-right-4">
            <p className="font-display text-2xl font-bold leading-tight tracking-[0.04em] uppercase">
              Low &amp; slow
            </p>
            <p className="mt-2 text-sm text-white/90">
              {restaurant.trustStatement}
            </p>
          </div>
        </div>

        <div className="lg:col-span-5 lg:pl-4">
          <p className="eyebrow">Our story</p>
          <h2
            id="about-heading"
            className="mt-3 font-display text-4xl font-bold tracking-[0.03em] uppercase text-[color:var(--brand-primary)] sm:text-5xl"
          >
            Built on post oak &amp; patience
          </h2>
          <p className="mt-6 text-base leading-relaxed text-[color:var(--ink-muted)] sm:text-lg">
            {restaurant.aboutStory}
          </p>
          <p className="mt-5 text-base leading-relaxed text-[color:var(--ink-muted)] sm:text-lg">
            No shortcuts. No gas assist. Just fire, time, and the Texas
            barbecue tradition — served on butcher paper with pickles, onion,
            and a cold sweet tea.
          </p>
          <a href="#hours" className="btn-primary mt-9">
            Plan your visit
          </a>
        </div>
      </div>
    </section>
  );
}
