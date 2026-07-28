import { restaurant } from "@/data/restaurant";

export function DemoBanner() {
  return (
    <div
      className="border-b border-[color:var(--line)] bg-[color:var(--brand-primary)]/95 text-center text-[11px] leading-relaxed tracking-wide text-white/90 sm:text-xs"
      role="note"
    >
      <p className="section-shell py-2.5">
        Independent concept design for demonstration purposes. This is not the
        restaurant&apos;s official website. · {restaurant.businessName} demo
      </p>
    </div>
  );
}
