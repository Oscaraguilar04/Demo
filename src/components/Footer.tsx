import Image from "next/image";
import { getFullAddress, restaurant } from "@/data/restaurant";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-[color:var(--brand-primary)] text-white">
      <div className="absolute inset-0">
        <Image
          src={restaurant.galleryImages[0]}
          alt=""
          fill
          className="object-cover opacity-20"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[color:var(--brand-primary)]/92" />
      </div>

      <div className="section-shell relative py-16 sm:py-20">
        <div className="mb-14 max-w-2xl">
          <p className="font-display text-4xl font-bold tracking-[0.04em] text-white uppercase sm:text-5xl">
            {restaurant.shortName}
          </p>
          <p className="mt-4 text-lg font-medium text-[color:var(--text-on-dark-soft)]">
            {restaurant.tagline}
          </p>
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
              className="inline-flex items-center justify-center gap-2 rounded-sm border-2 border-white bg-transparent px-7 py-3.5 text-xs font-bold uppercase tracking-[0.18em] text-white transition duration-300 hover:-translate-y-0.5 hover:bg-white/15"
            >
              Instagram
            </a>
          </div>
        </div>

        <div className="grid gap-10 border-t border-white/25 pt-10 md:grid-cols-3">
          <div>
            <h2 className="text-[11px] font-bold uppercase tracking-[0.28em] text-[#ffb089]">
              Contact
            </h2>
            <ul className="mt-4 space-y-2 text-sm font-medium text-white">
              <li>
                <a
                  href={`tel:+1${restaurant.phone}`}
                  className="transition hover:text-[#ffb089]"
                >
                  {restaurant.formattedPhone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${restaurant.email}`}
                  className="transition hover:text-[#ffb089]"
                >
                  {restaurant.email}
                </a>
              </li>
              <li>
                <a
                  href={restaurant.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition hover:text-[#ffb089]"
                >
                  {getFullAddress()}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-[11px] font-bold uppercase tracking-[0.28em] text-[#ffb089]">
              Hours
            </h2>
            <ul className="mt-4 space-y-1.5 text-sm font-medium text-white">
              {restaurant.hours.map((entry) => (
                <li key={entry.day} className="flex justify-between gap-3">
                  <span>{entry.day.slice(0, 3)}</span>
                  <span className="tabular-nums text-[color:var(--text-on-dark-soft)]">
                    {entry.closed
                      ? "Closed"
                      : `${entry.open.replace(":00 ", "")}–${entry.close.replace(":00 ", "")}`}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-[11px] font-bold uppercase tracking-[0.28em] text-[#ffb089]">
              Social
            </h2>
            <ul className="mt-4 space-y-2 text-sm font-medium">
              <li>
                <a
                  href={restaurant.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white transition hover:text-[#ffb089]"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href={restaurant.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white transition hover:text-[#ffb089]"
                >
                  Facebook
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 space-y-2 border-t border-white/25 pt-8 text-sm font-medium text-[color:var(--text-on-dark-soft)]">
          <p>
            © {year} {restaurant.businessName}. All rights reserved.
          </p>
          <p>Concept website created by Oscar Aguilar</p>
          <p className="text-xs text-white/80">
            Independent concept design for demonstration purposes. This is not
            the restaurant&apos;s official website.
          </p>
        </div>
      </div>
    </footer>
  );
}
