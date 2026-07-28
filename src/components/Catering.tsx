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
        <div className="relative overflow-hidden rounded-[2rem] shadow-[var(--shadow-lift)]">
          <div className="absolute inset-0">
            <Image
              src={restaurant.cateringImage}
              alt=""
              fill
              className="object-cover"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(8,10,9,0.92)_0%,rgba(8,10,9,0.78)_50%,rgba(8,10,9,0.55)_100%)]" />
          </div>

          <div className="relative grid gap-10 px-6 py-14 text-white sm:px-10 sm:py-16 lg:grid-cols-[1.25fr_0.75fr] lg:items-end lg:px-14">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-[color:var(--brand-accent)]">
                Catering
              </p>
              <h2
                id="catering-heading"
                className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl"
              >
                {catering.headline}
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/80 sm:text-lg">
                {catering.description}
              </p>
              <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                {catering.benefits.map((benefit) => (
                  <li
                    key={benefit}
                    className="flex gap-3 text-sm leading-relaxed text-white/90"
                  >
                    <span
                      aria-hidden="true"
                      className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[color:var(--brand-accent)]"
                    />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex flex-wrap gap-4 text-sm text-white/65">
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
                className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/30 bg-white/10 px-7 py-3.5 text-sm font-semibold tracking-wide text-white backdrop-blur-md transition duration-300 hover:-translate-y-0.5 hover:bg-white/20 focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-[color:var(--brand-accent)] sm:flex-1 lg:w-full"
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
