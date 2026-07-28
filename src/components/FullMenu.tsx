import Image from "next/image";
import { formatPrice, getMenuWithImages, restaurant } from "@/data/restaurant";

export function FullMenu() {
  const menu = getMenuWithImages(restaurant);

  return (
    <section
      id="menu"
      className="section-pad scroll-mt-28 bg-[color:var(--brand-primary)] text-[color:var(--text-on-dark)]"
      aria-labelledby="menu-heading"
    >
      <div className="section-shell">
        <div className="max-w-2xl">
          <p className="text-[11px] font-bold uppercase tracking-[0.32em] text-[#ffb089]">
            The menu
          </p>
          <h2
            id="menu-heading"
            className="mt-3 font-display text-4xl font-bold tracking-[0.03em] text-white uppercase sm:text-5xl"
          >
            What&apos;s on the butcher paper
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[color:var(--text-on-dark-soft)] sm:text-lg">
            Smoked overnight. Sliced to order. Sold till it&apos;s gone.
          </p>
        </div>

        <div className="mt-16 space-y-16">
          {menu.map((category) => (
            <div key={category.id}>
              <div className="mb-8 flex flex-col gap-2 border-b border-white/25 pb-5">
                <h3 className="font-display text-2xl font-bold tracking-[0.06em] text-white uppercase sm:text-3xl">
                  {category.name}
                </h3>
                {category.description ? (
                  <p className="text-sm font-medium text-[color:var(--text-on-dark-soft)]">
                    {category.description}
                  </p>
                ) : null}
              </div>

              <ul className="grid gap-4 sm:grid-cols-2">
                {category.items.map((item) => (
                  <li
                    key={item.id}
                    className="group flex gap-4 rounded-sm border border-white/20 bg-black/25 p-3 transition duration-300 hover:border-white/40 hover:bg-black/40"
                  >
                    <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-sm sm:h-28 sm:w-28">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="img-zoom object-cover"
                        sizes="112px"
                      />
                    </div>
                    <div className="flex min-w-0 flex-1 flex-col justify-center py-1 pr-1">
                      <div className="flex items-baseline justify-between gap-3">
                        <h4 className="truncate font-display text-base font-semibold tracking-[0.04em] text-white uppercase">
                          {item.name}
                        </h4>
                        <span className="shrink-0 text-sm font-bold tabular-nums text-[#ffb089]">
                          {formatPrice(item.price, item.unit)}
                        </span>
                      </div>
                      <p className="mt-1.5 line-clamp-2 text-sm leading-relaxed text-[color:var(--text-on-dark-soft)]">
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
