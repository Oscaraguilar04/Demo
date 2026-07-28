import {
  formatPrice,
  getFeaturedItems,
  restaurant,
} from "@/data/restaurant";
import { GradientMedia } from "@/components/GradientMedia";

const featuredVariants = ["forest", "brass", "dusk"] as const;

export function FeaturedDishes() {
  const featured = getFeaturedItems(restaurant).slice(0, 3);

  return (
    <section
      className="section-pad"
      aria-labelledby="featured-heading"
    >
      <div className="section-shell">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">Guest favorites</p>
          <h2
            id="featured-heading"
            className="mt-3 font-display text-3xl font-semibold tracking-tight text-[color:var(--brand-primary)] sm:text-4xl"
          >
            Featured dishes
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[color:var(--ink-muted)] sm:text-lg">
            A few plates our regulars ask for by name — ready for dine-in or
            online order.
          </p>
        </div>

        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((item, index) => (
            <li key={item.id} className="card-surface overflow-hidden transition duration-200 hover:-translate-y-1">
              <GradientMedia
                variant={featuredVariants[index % featuredVariants.length]}
                className="aspect-[4/3]"
                label="Photo placeholder"
              />
              <div className="p-6">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-display text-xl font-semibold text-[color:var(--brand-primary)]">
                    {item.name}
                  </h3>
                  <p className="shrink-0 text-base font-semibold text-[color:var(--brand-accent)]">
                    {formatPrice(item.price)}
                  </p>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-[color:var(--ink-muted)]">
                  {item.description}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
