import Image from "next/image";
import { getFullAddress, restaurant } from "@/data/restaurant";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-[color:var(--brand-primary)] text-[#f7f1e6]">
      <div className="absolute inset-0 opacity-25">
        <Image
          src={restaurant.galleryImages[0]}
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[color:var(--brand-primary)]/90" />
      </div>

      <div className="section-shell relative py-16 sm:py-20">
        <div className="mb-14 max-w-2xl">
          <p className="font-display text-4xl font-bold tracking-[0.04em] uppercase sm:text-5xl">
            {restaurant.shortName}
          </p>
          <p className="mt-4 text-lg text-[#f7f1e6]/7">{restaurant.tagline}</p>
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
              className="btn-secondary border-[#f7f1e6]/25 bg-[#f7f1e6]/10 text-[#f7f1e6] hover:bg-[#f7f1e6]/20"
            >
              Instagram
            </a>
          </div>
        </div>

        <div className="grid gap-10 border-t border-[#f7f1e6]/15 pt-10 md:grid-cols-3">
          <div>
            <h2 className="text-[11px] font-bold uppercase tracking-[0.28em] text-[color:var(--brand-accent)]">
              Contact
            </h2>
            <ul className="mt-4 space-y-2 text-sm text-[#f7f1e6]/8">
              <li>
                <a
                  href={`tel:+1${restaurant.phone}`}
                  className="transition hover:text-[#f7f1e6]"
                >
                  {restaurant.formattedPhone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${restaurant.email}`}
                  className="transition hover:text-[#f7f1e6]"
                >
                  {restaurant.email}
                </a>
              </li>
              <li>
                <a
                  href={restaurant.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition hover:text-[#f7f1e6]"
                >
                  {getFullAddress()}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-[11px] font-bold uppercase tracking-[0.28em] text-[color:var(--brand-accent)]">
              Hours
            </h2>
            <ul className="mt-4 space-y-1.5 text-sm text-[#f7f1e6]/8">
              {restaurant.hours.map((entry) => (
                <li key={entry.day} className="flex justify-between gap-3">
                  <span>{entry.day.slice(0, 3)}</span>
                  <span className="tabular-nums text-[#f7f1e6]/5">
                    {entry.closed
                      ? "Closed"
                      : `${entry.open.replace(":00 ", "")}–${entry.close.replace(":00 ", "")}`}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-[11px] font-bold uppercase tracking-[0.28em] text-[color:var(--brand-accent)]">
              Social
            </h2>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <a
                  href={restaurant.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#f7f1e6]/8 transition hover:text-[#f7f1e6]"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href={restaurant.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#f7f1e6]/8 transition hover:text-[#f7f1e6]"
                >
                  Facebook
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 space-y-2 border-t border-[#f7f1e6]/15 pt-8 text-sm text-[#f7f1e6]/5">
          <p>
            © {year} {restaurant.businessName}. All rights reserved.
          </p>
          <p>Concept website created by Oscar Aguilar</p>
          <p className="text-xs text-[#f7f1e6]/35">
            Independent concept design for demonstration purposes. This is not
            the restaurant&apos;s official website.
          </p>
        </div>
      </div>
    </footer>
  );
}
