import {
  getTelHref,
  restaurant,
} from "@/data/restaurant";

export function MobileActionBar() {
  return (
    <div
      className="fixed inset-x-0 bottom-0 z-50 border-t border-[color:var(--line)] bg-white/95 shadow-[0_-8px_30px_rgba(15,20,18,0.08)] backdrop-blur-xl md:hidden"
      style={{
        paddingBottom: "env(safe-area-inset-bottom, 0px)",
      }}
    >
      <nav
        aria-label="Quick actions"
        className="grid h-[var(--mobile-bar-height)] grid-cols-3"
      >
        <a
          href={getTelHref()}
          className="flex flex-col items-center justify-center gap-1 text-[11px] font-bold tracking-wide text-[color:var(--brand-primary)] transition hover:bg-[color:var(--surface)] focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-[-3px] focus-visible:outline-[color:var(--brand-accent)]"
        >
          <PhoneIcon />
          Call
        </a>
        <a
          href={restaurant.directionsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center gap-1 border-x border-[color:var(--line)] text-[11px] font-bold tracking-wide text-[color:var(--brand-primary)] transition hover:bg-[color:var(--surface)] focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-[-3px] focus-visible:outline-[color:var(--brand-accent)]"
        >
          <PinIcon />
          Directions
        </a>
        <a
          href={restaurant.orderUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center gap-1 bg-[color:var(--brand-accent)] text-[11px] font-bold tracking-wide text-white transition hover:brightness-110 focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-[-3px] focus-visible:outline-white"
        >
          <BagIcon />
          Order
        </a>
      </nav>
    </div>
  );
}

function PhoneIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className="text-[color:var(--brand-accent)]"
    >
      <path
        d="M7.5 3.75h2.1l1.05 5.1-1.65 1.05a12.75 12.75 0 0 0 5.1 5.1l1.05-1.65 5.1 1.05v2.1A1.95 1.95 0 0 1 18.3 18.45 14.55 14.55 0 0 1 5.55 5.7 1.95 1.95 0 0 1 7.5 3.75Z"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PinIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className="text-[color:var(--brand-accent)]"
    >
      <path
        d="M12 21s6-5.1 6-10.2A6 6 0 1 0 6 10.8C6 15.9 12 21 12 21Z"
        stroke="currentColor"
        strokeWidth="1.75"
      />
      <circle cx="12" cy="10.5" r="2.25" stroke="currentColor" strokeWidth="1.75" />
    </svg>
  );
}

function BagIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className="text-white"
    >
      <path
        d="M6.75 8.25h10.5l-.75 11.25H7.5L6.75 8.25Z"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinejoin="round"
      />
      <path
        d="M9 8.25V6.75a3 3 0 0 1 6 0v1.5"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
      />
    </svg>
  );
}
