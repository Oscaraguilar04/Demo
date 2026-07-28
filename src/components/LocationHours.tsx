import Image from "next/image";
import { getFullAddress, restaurant } from "@/data/restaurant";

export function LocationHours() {
  return (
    <section
      id="hours"
      className="section-pad scroll-mt-28"
      aria-labelledby="hours-heading"
    >
      <div className="section-shell grid gap-10 lg:grid-cols-2 lg:gap-14">
        <div>
          <p className="eyebrow">Pull up a stool</p>
          <h2
            id="hours-heading"
            className="mt-3 font-display text-4xl font-bold tracking-[0.03em] text-[color:var(--ink)] uppercase sm:text-5xl"
          >
            Find the smokehouse
          </h2>
          <address className="mt-7 not-italic">
            <p className="font-display text-xl font-bold tracking-[0.04em] text-[color:var(--ink)] uppercase">
              {restaurant.businessName}
            </p>
            <p className="mt-2 text-base leading-relaxed font-medium text-[color:var(--ink-muted)] sm:text-lg">
              {getFullAddress()}
            </p>
            <p className="mt-3">
              <a
                href={`tel:+1${restaurant.phone}`}
                className="text-lg font-bold text-[color:var(--brand-accent)] underline-offset-4 hover:underline"
              >
                {restaurant.formattedPhone}
              </a>
            </p>
          </address>

          <a
            href={restaurant.directionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary mt-8"
          >
            Get Directions
          </a>

          <h3 className="mt-12 text-[11px] font-bold uppercase tracking-[0.28em] text-[color:var(--brand-accent)]">
            Weekly hours
          </h3>
          <ul className="mt-4 divide-y divide-[color:var(--line)] border-y border-[color:var(--line)]">
            {restaurant.hours.map((entry) => (
              <li
                key={entry.day}
                className="flex items-center justify-between gap-4 py-3.5 text-sm sm:text-base"
              >
                <span className="font-bold text-[color:var(--ink)]">
                  {entry.day}
                </span>
                <span className="font-medium tabular-nums text-[color:var(--ink-muted)]">
                  {entry.closed ? "Closed" : `${entry.open} – ${entry.close}`}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="relative min-h-[360px] overflow-hidden rounded-sm shadow-[var(--shadow-lift)] sm:min-h-[480px]">
          <Image
            src={restaurant.locationImage}
            alt={`Smokehouse vibe near ${getFullAddress()}`}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 p-6 text-white sm:p-8">
            <p className="font-display text-2xl font-bold tracking-[0.04em] uppercase">
              Come hungry
            </p>
            <p className="mt-2 max-w-sm text-sm font-medium text-[color:var(--text-on-dark-soft)]">
              Open daily in Austin — when you smell post oak on the block,
              you&apos;re close.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
