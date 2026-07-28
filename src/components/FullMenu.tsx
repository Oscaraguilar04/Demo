import Image from "next/image";
import { formatPrice, restaurant } from "@/data/restaurant";
import { GradientMedia } from "@/components/GradientMedia";

export function FullMenu() {
  return (
    <section
      id="menu"
      className="section-pad scroll-mt-28 bg-[color:var(--brand-primary)] text-white"
      aria-labelledby="menu-heading"
    >
      <div className="section-shell">
        <div className="max-w-2xl">
          <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-[color:var(--brand-accent)]">
            The menu
          </p>
          <h2
            id="menu-heading"
            className="mt-3 font-display text-4xl font-bold tracking-tight sm:text-5xl"
          >
            What we&apos;re cooking
          </h2>
          <p className="mt-4 text-base leading-relaxed text-white/70 sm:text-lg">
            Browse by category. Every dish, price, and photo updates from the
            restaurant data file.
          </p>
        </div>

        <div className="mt-16 space-y-16">
          {restaurant.menu.map((category) => (
            <div key={category.id}>
              <div className="mb-8 flex flex-col gap-2 border-b border-white/15 pb-5">
                <h3 className="font-display text-2xl font-bold sm:text-3xl">
                  {category.name}
                </h3>
                {category.description ? (
                  <p className="text-sm text-white/55">{category.description}</p>
                ) : null}
              </div>

              <ul className="grid gap-4 sm:grid-cols-2">
                {category.items.map((item) => (
                  <li
                    key={item.id}
                    className="group flex gap-4 rounded-2xl border border-white/10 bg-white/5 p-3 transition duration-300 hover:border-white/25 hover:bg-white/10"
                  >
                    <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-xl sm:h-28 sm:w-28">
                      {item.image ? (
                        <Image
                          src={item.image}
                          alt=""
                          fill
                          className="img-zoom object-cover"
                          sizes="112px"
                        />
                      ) : (
                        <GradientMedia className="h-full w-full" />
                      )}
                    </div>
                    <div className="flex min-w-0 flex-1 flex-col justify-center py-1 pr-1">
                      <div className="flex items-baseline justify-between gap-3">
                        <h4 className="truncate text-base font-semibold">
                          {item.name}
                        </h4>
                        <span className="shrink-0 font-bold tabular-nums text-[color:var(--brand-accent)]">
                          {formatPrice(item.price)}
                        </span>
                      </div>
                      <p className="mt-1.5 line-clamp-2 text-sm leading-relaxed text-white/60">
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
