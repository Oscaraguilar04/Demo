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
      className="section-pad scroll-mt-24"
      aria-labelledby="catering-heading"
    >
      <div className="section-shell">
        <div className="overflow-hidden rounded-[2rem] border border-[color:var(--line)] bg-[linear-gradient(145deg,rgba(28,58,46,0.95)_0%,rgba(42,82,64,0.95)_55%,rgba(107,78,40,0.9)_100%)] px-6 py-12 text-white shadow-[var(--shadow-soft)] sm:px-10 sm:py-14 lg:px-14">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[color:var(--brand-accent)]">
                Catering
              </p>
              <h2
                id="catering-heading"
                className="mt-3 font-display text-3xl font-semibold tracking-tight sm:text-4xl"
              >
                {catering.headline}
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/85 sm:text-lg">
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
              <div className="mt-6 flex flex-wrap gap-4 text-sm text-white/75">
                {catering.minGuests ? <p>{catering.minGuests}</p> : null}
                {catering.leadTime ? <p>{catering.leadTime}</p> : null}
              </div>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <a href={getTelHref()} className="btn-accent w-full sm:flex-1 lg:w-full">
                Call {restaurant.formattedPhone}
              </a>
              <a
                href={getMailtoHref()}
                className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/35 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition duration-200 hover:-translate-y-0.5 hover:bg-white/20 focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-[color:var(--brand-accent)] sm:flex-1 lg:w-full"
              >
                Email {restaurant.email}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
