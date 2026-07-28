import Image from "next/image";
import { getFullAddress, restaurant } from "@/data/restaurant";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-[color:var(--brand-primary)] text-white">
      <div className="absolute inset-0 opacity-30">
        <Image
          src={restaurant.galleryImages[0]}
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[color:var(--brand-primary)]/85" />
      </div>

      <div className="section-shell relative py-16 sm:py-20">
        <div className="mb-14 max-w-2xl">
          <p className="font-display text-4xl font-bold tracking-tight sm:text-5xl">
            {restaurant.shortName}
          </p>
          <p className="mt-4 text-lg text-white/70">{restaurant.tagline}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={restaurant.orderUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-accent"
            >
              Order Online
            </a>
            <a
              href={restaurant.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary border-white/20 bg-white/10 text-white hover:bg-white/20"
            >
              Instagram
            </a>
          </div>
        </div>

        <div className="grid gap-10 border-t border-white/15 pt-10 md:grid-cols-3">
          <div>
            <h2 className="text-[11px] font-bold uppercase tracking-[0.22em] text-[color:var(--brand-accent)]">
              Contact
            </h2>
            <ul className="mt-4 space-y-2 text-sm text-white/80">
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
            <h2 className="text-[11px] font-bold uppercase tracking-[0.22em] text-[color:var(--brand-accent)]">
              Hours
            </h2>
            <ul className="mt-4 space-y-1.5 text-sm text-white/80">
              {restaurant.hours.map((entry) => (
                <li key={entry.day} className="flex justify-between gap-3">
                  <span>{entry.day.slice(0, 3)}</span>
                  <span className="tabular-nums text-white/55">
                    {entry.closed
                      ? "Closed"
                      : `${entry.open.replace(":00 ", "")}–${entry.close.replace(":00 ", "")}`}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-[11px] font-bold uppercase tracking-[0.22em] text-[color:var(--brand-accent)]">
              Social
            </h2>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <a
                  href={restaurant.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/80 transition hover:text-white"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href={restaurant.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/80 transition hover:text-white"
                >
                  Facebook
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 space-y-2 border-t border-white/15 pt-8 text-sm text-white/55">
          <p>
            © {year} {restaurant.businessName}. All rights reserved.
          </p>
          <p>Concept website created by Oscar Aguilar</p>
          <p className="text-xs text-white/40">
            Independent concept design for demonstration purposes. This is not
            the restaurant&apos;s official website.
          </p>
        </div>
      </div>
    </footer>
  );
}
