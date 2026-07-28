import type { ReactNode } from "react";

/**
 * Attractive gradient placeholder used when photography is not yet provided.
 */
export function GradientMedia({
  label,
  className = "",
  variant = "dusk",
  children,
}: {
  label?: string;
  className?: string;
  variant?: "forest" | "brass" | "sage" | "dusk";
  children?: ReactNode;
}) {
  const variants = {
    forest:
      "bg-[linear-gradient(135deg,#1A1210_0%,#3A2A24_48%,#C45C26_100%)]",
    brass:
      "bg-[linear-gradient(145deg,#5C3A22_0%,#C45C26_55%,#E8B07A_100%)]",
    sage: "bg-[linear-gradient(160deg,#2A241E_0%,#6B5A4E_50%,#C4B5A0_100%)]",
    dusk: "bg-[linear-gradient(125deg,#140C0A_0%,#3A2A24_60%,#C45C26_100%)]",
  } as const;

  return (
    <div
      className={`relative overflow-hidden ${variants[variant]} ${className}`}
      role="img"
      aria-label={label ?? "Decorative barbecue imagery placeholder"}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 20%, rgba(255,255,255,0.22), transparent 40%), radial-gradient(circle at 80% 70%, rgba(0,0,0,0.28), transparent 45%)",
        }}
      />
      {children}
      {label ? (
        <span className="absolute bottom-4 left-4 bg-black/30 px-3 py-1 text-xs font-bold uppercase tracking-wide text-[#f7f1e6]/90 backdrop-blur-sm">
          {label}
        </span>
      ) : null}
    </div>
  );
}
