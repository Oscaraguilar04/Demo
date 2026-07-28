import { restaurant } from "@/data/restaurant";

export function Testimonials() {
  return (
    <section className="section-pad" aria-labelledby="testimonials-heading">
      <div className="section-shell">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">From the neighborhood</p>
          <h2
            id="testimonials-heading"
            className="mt-3 font-display text-4xl font-bold tracking-tight text-[color:var(--brand-primary)] sm:text-5xl"
          >
            Loved by locals
          </h2>
          <p className="mt-4 text-sm text-[color:var(--ink-muted)]">
            Sample testimonials for demonstration — swap in real guest feedback
            for live sites.
          </p>
        </div>

        <ul className="mt-14 grid gap-5 md:grid-cols-3">
          {restaurant.testimonials.map((item, index) => (
            <li
              key={item.id}
              className={`flex flex-col rounded-[1.75rem] p-7 sm:p-8 ${
                index === 1
                  ? "bg-[color:var(--brand-primary)] text-white shadow-[var(--shadow-lift)]"
                  : "card-surface"
              }`}
            >
              {item.isSample ? (
                <span
                  className={`mb-5 inline-flex w-fit rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-wider ${
                    index === 1
                      ? "bg-white/10 text-white/70"
                      : "bg-[color:var(--surface)] text-[color:var(--ink-muted)]"
                  }`}
                >
                  Sample testimonial
                </span>
              ) : null}
              <blockquote className="flex-1">
                <p
                  className={`font-display text-xl leading-snug font-semibold ${
                    index === 1 ? "text-white" : "text-[color:var(--brand-primary)]"
                  }`}
                >
                  &ldquo;{item.quote}&rdquo;
                </p>
                <footer className="mt-8">
                  <cite className="not-italic">
                    <span
                      className={`block text-sm font-bold ${
                        index === 1 ? "text-white" : "text-[color:var(--ink)]"
                      }`}
                    >
                      {item.author}
                    </span>
                    <span
                      className={`mt-1 block text-xs ${
                        index === 1
                          ? "text-white/55"
                          : "text-[color:var(--ink-muted)]"
                      }`}
                    >
                      {item.detail}
                    </span>
                  </cite>
                </footer>
              </blockquote>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
