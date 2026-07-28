import { restaurant } from "@/data/restaurant";

export function Testimonials() {
  return (
    <section
      className="section-pad"
      aria-labelledby="testimonials-heading"
    >
      <div className="section-shell">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">From the neighborhood</p>
          <h2
            id="testimonials-heading"
            className="mt-3 font-display text-3xl font-semibold tracking-tight text-[color:var(--brand-primary)] sm:text-4xl"
          >
            What guests are saying
          </h2>
          <p className="mt-4 text-sm text-[color:var(--ink-muted)]">
            Sample testimonials for demonstration — replace with real guest
            feedback for live sites.
          </p>
        </div>

        <ul className="mt-12 grid gap-6 md:grid-cols-3">
          {restaurant.testimonials.map((item) => (
            <li key={item.id} className="card-surface flex flex-col p-6 sm:p-7">
              {item.isSample ? (
                <span className="mb-4 inline-flex w-fit rounded-full border border-[color:var(--line)] bg-[color:var(--surface)] px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-[color:var(--ink-muted)]">
                  Sample testimonial
                </span>
              ) : null}
              <blockquote className="flex-1">
                <p className="font-display text-lg leading-relaxed text-[color:var(--brand-primary)]">
                  &ldquo;{item.quote}&rdquo;
                </p>
                <footer className="mt-6">
                  <cite className="not-italic">
                    <span className="block text-sm font-semibold text-[color:var(--ink)]">
                      {item.author}
                    </span>
                    <span className="mt-1 block text-xs text-[color:var(--ink-muted)]">
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
