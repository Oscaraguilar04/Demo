import { formatPrice, restaurant } from "@/data/restaurant";

export function FullMenu() {
  return (
    <section
      id="menu"
      className="section-pad scroll-mt-24 bg-[linear-gradient(180deg,rgba(28,58,46,0.04)_0%,transparent_100%)]"
      aria-labelledby="menu-heading"
    >
      <div className="section-shell">
        <div className="max-w-2xl">
          <p className="eyebrow">The menu</p>
          <h2
            id="menu-heading"
            className="mt-3 font-display text-3xl font-semibold tracking-tight text-[color:var(--brand-primary)] sm:text-4xl"
          >
            What we&apos;re cooking
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[color:var(--ink-muted)] sm:text-lg">
            Browse by category. Prices and descriptions update from the
            restaurant data file for easy personalization.
          </p>
        </div>

        <div className="mt-14 space-y-14">
          {restaurant.menu.map((category) => (
            <div key={category.id}>
              <div className="mb-6 flex flex-col gap-2 border-b border-[color:var(--line)] pb-4 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <h3 className="font-display text-2xl font-semibold text-[color:var(--brand-primary)]">
                    {category.name}
                  </h3>
                  {category.description ? (
                    <p className="mt-1 text-sm text-[color:var(--ink-muted)]">
                      {category.description}
                    </p>
                  ) : null}
                </div>
              </div>

              <ul className="grid gap-5 md:grid-cols-2">
                {category.items.map((item) => (
                  <li
                    key={item.id}
                    className="rounded-2xl border border-[color:var(--line)] bg-white/70 p-5 transition hover:border-[color:var(--brand-primary)]/25 hover:bg-white"
                  >
                    <div className="flex items-baseline justify-between gap-4">
                      <h4 className="text-base font-semibold text-[color:var(--ink)]">
                        {item.name}
                      </h4>
                      <span className="shrink-0 font-semibold tabular-nums text-[color:var(--brand-primary)]">
                        {formatPrice(item.price)}
                      </span>
                    </div>
                    <p className="mt-2 text-sm leading-relaxed text-[color:var(--ink-muted)]">
                      {item.description}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href={restaurant.orderUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Order Online
          </a>
        </div>
      </div>
    </section>
  );
}
