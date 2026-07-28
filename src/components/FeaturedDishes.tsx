import Image from "next/image";
import {
  formatPrice,
  getFeaturedItems,
  restaurant,
} from "@/data/restaurant";

export function FeaturedDishes() {
  const featured = getFeaturedItems(restaurant).slice(0, 3);

  if (featured.length === 0) return null;

  return (
    <section className="section-pad" aria-labelledby="featured-heading">
      <div className="section-shell">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-xl">
            <p className="eyebrow">From the pit</p>
            <h2
              id="featured-heading"
              className="mt-3 font-display text-4xl font-bold tracking-[0.03em] text-[color:var(--ink)] uppercase sm:text-5xl"
            >
              Smokehouse signatures
            </h2>
          </div>
          <p className="max-w-sm text-base leading-relaxed font-medium text-[color:var(--ink-muted)]">
            The cuts people drive across town for — barky brisket, sticky ribs,
            and plates piled high.
          </p>
        </div>

        <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((item) => (
            <li key={item.id} className="group">
              <article className="overflow-hidden rounded-[var(--radius-card)] border border-[color:var(--line)] bg-[color:var(--surface-elevated)] shadow-[var(--shadow-soft)] transition duration-500 hover:-translate-y-1.5 hover:shadow-[var(--shadow-lift)]">
                <div className="relative aspect-[4/5] overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="img-zoom object-cover"
                    sizes="(max-width: 1024px) 100vw, 33vw"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black via-black/70 to-transparent p-5 pt-28">
                    <p className="text-sm font-bold tracking-wide text-[#ffb089]">
                      {formatPrice(item.price, item.unit)}
                    </p>
                    <h3 className="mt-1 font-display text-2xl font-bold tracking-[0.04em] text-white uppercase">
                      {item.name}
                    </h3>
                  </div>
                </div>
                <div className="p-5">
                  <p className="text-sm leading-relaxed font-medium text-[color:var(--ink-muted)]">
                    {item.description}
                  </p>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
