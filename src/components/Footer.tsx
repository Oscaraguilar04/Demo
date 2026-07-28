import {
  getFullAddress,
  restaurant,
} from "@/data/restaurant";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[color:var(--line)] bg-[color:var(--brand-primary)] text-white">
      <div className="section-shell py-14 sm:py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <p className="font-display text-2xl font-semibold">
              {restaurant.shortName}
            </p>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-white/75">
              {restaurant.tagline}
            </p>
          </div>

          <div>
            <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--brand-accent)]">
              Contact
            </h2>
            <ul className="mt-4 space-y-2 text-sm text-white/85">
              <li>
                <a
                  href={`tel:+1${restaurant.phone}`}
                  className="transition hover:text-white"
                >
                  {restaurant.formattedPhone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${restaurant.email}`}
                  className="transition hover:text-white"
                >
                  {restaurant.email}
                </a>
              </li>
              <li>
                <a
                  href={restaurant.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition hover:text-white"
                >
                  {getFullAddress()}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--brand-accent)]">
              Hours
            </h2>
            <ul className="mt-4 space-y-1.5 text-sm text-white/85">
              {restaurant.hours.map((entry) => (
                <li key={entry.day} className="flex justify-between gap-3">
                  <span>{entry.day.slice(0, 3)}</span>
                  <span className="tabular-nums text-white/70">
                    {entry.closed
                      ? "Closed"
                      : `${entry.open.replace(":00 ", "")}–${entry.close.replace(":00 ", "")}`}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--brand-accent)]">
              Social
            </h2>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <a
                  href={restaurant.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/85 transition hover:text-white"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href={restaurant.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/85 transition hover:text-white"
                >
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href={restaurant.orderUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/85 transition hover:text-white"
                >
                  Order Online
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 space-y-3 border-t border-white/15 pt-8 text-sm text-white/65">
          <p>
            © {year} {restaurant.businessName}. All rights reserved.
          </p>
          <p>Concept website created by Oscar Aguilar</p>
          <p className="text-xs text-white/50">
            Independent concept design for demonstration purposes. This is not
            the restaurant&apos;s official website.
          </p>
        </div>
      </div>
    </footer>
  );
}
