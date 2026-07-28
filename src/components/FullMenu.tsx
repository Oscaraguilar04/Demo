import Image from "next/image";
import { formatPrice, restaurant } from "@/data/restaurant";
import { GradientMedia } from "@/components/GradientMedia";

export function FullMenu() {
  return (
    <section
      id="menu"
      className="section-pad scroll-mt-28 bg-[color:var(--brand-primary)] text-[#f7f1e6]"
      aria-labelledby="menu-heading"
    >
      <div className="section-shell">
        <div className="max-w-2xl">
          <p className="text-[11px] font-bold uppercase tracking-[0.32em] text-[color:var(--brand-accent)]">
            The menu
          </p>
          <h2
            id="menu-heading"
            className="mt-3 font-display text-4xl font-bold tracking-[0.03em] uppercase sm:text-5xl"
          >
            What&apos;s on the butcher paper
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[#f7f1e6]/65 sm:text-lg">
            Smoked overnight. Sliced to order. Sold till it&apos;s gone.
          </p>
        </div>

        <div className="mt-16 space-y-16">
          {restaurant.menu.map((category) => (
            <div key={category.id}>
              <div className="mb-8 flex flex-col gap-2 border-b border-[#f7f1e6]/15 pb-5">
                <h3 className="font-display text-2xl font-bold tracking-[0.06em] uppercase sm:text-3xl">
                  {category.name}
                </h3>
                {category.description ? (
                  <p className="text-sm text-[#f7f1e6]/55">
                    {category.description}
                  </p>
                ) : null}
              </div>

              <ul className="grid gap-4 sm:grid-cols-2">
                {category.items.map((item) => (
                  <li
                    key={item.id}
                    className="group flex gap-4 rounded-sm border border-[#f7f1e6]/12 bg-[#f7f1e6]/5 p-3 transition duration-300 hover:border-[#f7f1e6]/25 hover:bg-[#f7f1e6]/10"
                  >
                    <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-sm sm:h-28 sm:w-28">
                      {item.image ? (
                        <Image
                          src={item.image}
                          alt=""
                          fill
                          className="img-zoom object-cover"
                          sizes="112px"
                        />
                      ) : (
                        <GradientMedia className="h-full w-full" variant="dusk" />
                      )}
                    </div>
                    <div className="flex min-w-0 flex-1 flex-col justify-center py-1 pr-1">
                      <div className="flex items-baseline justify-between gap-3">
                        <h4 className="truncate font-display text-base font-semibold tracking-[0.04em] uppercase">
                          {item.name}
                        </h4>
                        <span className="shrink-0 text-sm font-bold tabular-nums text-[color:var(--brand-accent)]">
                          {formatPrice(item.price, item.unit)}
                        </span>
                      </div>
                      <p className="mt-1.5 line-clamp-2 text-sm leading-relaxed text-[#f7f1e6]/55">
                        {item.description}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 text-center">
          <a
            href={restaurant.orderUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-accent"
          >
            Order Online
          </a>
        </div>
      </div>
    </section>
  );
}
