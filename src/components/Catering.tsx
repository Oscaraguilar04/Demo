import Image from "next/image";
import {
  getMailtoHref,
  getTelHref,
  restaurant,
} from "@/data/restaurant";

export function Catering() {
  const { catering } = restaurant;

  return (
    <section
      id="catering"
      className="section-pad scroll-mt-28"
      aria-labelledby="catering-heading"
    >
      <div className="section-shell">
        <div className="relative overflow-hidden rounded-sm shadow-[var(--shadow-lift)]">
          <div className="absolute inset-0">
            <Image
              src={restaurant.cateringImage}
              alt=""
              fill
              className="object-cover"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(20,12,10,0.94)_0%,rgba(20,12,10,0.8)_55%,rgba(20,12,10,0.55)_100%)]" />
          </div>

          <div className="relative grid gap-10 px-6 py-14 text-[#f7f1e6] sm:px-10 sm:py-16 lg:grid-cols-[1.25fr_0.75fr] lg:items-end lg:px-14">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.32em] text-[color:var(--brand-accent)]">
                Catering
              </p>
              <h2
                id="catering-heading"
                className="mt-3 font-display text-3xl font-bold tracking-[0.03em] uppercase sm:text-4xl lg:text-5xl"
              >
                {catering.headline}
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-[#f7f1e6]/80 sm:text-lg">
                {catering.description}
              </p>
              <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                {catering.benefits.map((benefit) => (
                  <li
                    key={benefit}
                    className="flex gap-3 text-sm leading-relaxed text-[#f7f1e6]/90"
                  >
                    <span
                      aria-hidden="true"
                      className="mt-1.5 h-1.5 w-1.5 shrink-0 bg-[color:var(--brand-accent)]"
                    />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex flex-wrap gap-4 text-sm text-[#f7f1e6]/6">
                {catering.minGuests ? <p>{catering.minGuests}</p> : null}
                {catering.leadTime ? <p>{catering.leadTime}</p> : null}
              </div>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <a
                href={getTelHref()}
                className="btn-accent w-full sm:flex-1 lg:w-full"
              >
                Call {restaurant.formattedPhone}
              </a>
              <a
                href={getMailtoHref()}
                className="inline-flex w-full items-center justify-center gap-2 rounded-sm border border-[#f7f1e6]/30 bg-[#f7f1e6]/10 px-7 py-3.5 text-xs font-bold uppercase tracking-[0.18em] text-[#f7f1e6] backdrop-blur-md transition duration-300 hover:-translate-y-0.5 hover:bg-[#f7f1e6]/20 focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-[color:var(--brand-accent)] sm:flex-1 lg:w-full"
              >
                Email for catering
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
