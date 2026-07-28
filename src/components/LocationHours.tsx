import Image from "next/image";
import {
  getFullAddress,
  restaurant,
} from "@/data/restaurant";

export function LocationHours() {
  return (
    <section
      id="hours"
      className="section-pad scroll-mt-24"
      aria-labelledby="hours-heading"
    >
      <div className="section-shell grid gap-10 lg:grid-cols-2 lg:gap-12">
        <div>
          <p className="eyebrow">Visit us</p>
          <h2
            id="hours-heading"
            className="mt-3 font-display text-3xl font-semibold tracking-tight text-[color:var(--brand-primary)] sm:text-4xl"
          >
            Location &amp; hours
          </h2>
          <address className="mt-6 not-italic">
            <p className="text-lg font-semibold text-[color:var(--ink)]">
              {restaurant.businessName}
            </p>
            <p className="mt-2 text-base leading-relaxed text-[color:var(--ink-muted)]">
              {getFullAddress()}
            </p>
            <p className="mt-2 text-base text-[color:var(--ink-muted)]">
              <a
                href={`tel:+1${restaurant.phone}`}
                className="font-medium text-[color:var(--brand-primary)] underline-offset-4 hover:underline"
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

          <h3 className="mt-10 text-sm font-semibold uppercase tracking-[0.18em] text-[color:var(--brand-accent)]">
            Weekly hours
          </h3>
          <ul className="mt-4 divide-y divide-[color:var(--line)] border-y border-[color:var(--line)]">
            {restaurant.hours.map((entry) => (
              <li
                key={entry.day}
                className="flex items-center justify-between gap-4 py-3 text-sm sm:text-base"
              >
                <span className="font-medium text-[color:var(--ink)]">
                  {entry.day}
                </span>
                <span className="tabular-nums text-[color:var(--ink-muted)]">
                  {entry.closed
                    ? "Closed"
                    : `${entry.open} – ${entry.close}`}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="relative min-h-[320px] overflow-hidden rounded-[1.75rem] border border-[color:var(--line)] shadow-[var(--shadow-soft)] sm:min-h-[420px]">
          <Image
            src="/images/map-placeholder.svg"
            alt={`Map placeholder for ${getFullAddress()}`}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
      </div>
    </section>
  );
}
