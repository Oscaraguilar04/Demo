import Image from "next/image";
import {
  formatPrice,
  getFeaturedItems,
  restaurant,
} from "@/data/restaurant";
import { GradientMedia } from "@/components/GradientMedia";

export function FeaturedDishes() {
  const featured = getFeaturedItems(restaurant).slice(0, 3);

  return (
    <section className="section-pad" aria-labelledby="featured-heading">
      <div className="section-shell">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-xl">
            <p className="eyebrow">Guest favorites</p>
            <h2
              id="featured-heading"
              className="mt-3 font-display text-4xl font-bold tracking-tight text-[color:var(--brand-primary)] sm:text-5xl"
            >
              Plates worth the drive
            </h2>
          </div>
          <p className="max-w-sm text-base leading-relaxed text-[color:var(--ink-muted)]">
            Signature dishes our regulars order again and again — photographed
            fresh and ready for your table.
          </p>
        </div>

        <ul className="mt-14 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((item) => (
            <li key={item.id} className="group">
              <article className="overflow-hidden rounded-[1.75rem] bg-white shadow-[var(--shadow-soft)] transition duration-500 hover:-translate-y-1.5 hover:shadow-[var(--shadow-lift)]">
                <div className="relative aspect-[4/5] overflow-hidden">
                  {item.image ? (
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="img-zoom object-cover"
                      sizes="(max-width: 1024px) 100vw, 33vw"
                    />
                  ) : (
                    <GradientMedia className="h-full w-full" />
                  )}
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent p-5 pt-20">
                    <p className="text-sm font-bold text-[color:var(--brand-accent)]">
                      {formatPrice(item.price)}
                    </p>
                    <h3 className="mt-1 font-display text-2xl font-bold text-white">
                      {item.name}
                    </h3>
                  </div>
                </div>
                <div className="p-5">
                  <p className="text-sm leading-relaxed text-[color:var(--ink-muted)]">
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
