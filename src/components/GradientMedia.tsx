import type { ReactNode } from "react";

interface GradientMediaProps {
  label?: string;
  className?: string;
  variant?: "forest" | "brass" | "sage" | "dusk";
  children?: ReactNode;
}

const variants: Record<NonNullable<GradientMediaProps["variant"]>, string> = {
  forest:
    "bg-[linear-gradient(135deg,#1C3A2E_0%,#2F5A45_48%,#B8893D_100%)]",
  brass:
    "bg-[linear-gradient(145deg,#6B4E28_0%,#B8893D_55%,#E8C98A_100%)]",
  sage: "bg-[linear-gradient(160deg,#2A4F3D_0%,#5E7A68_50%,#C5D2C9_100%)]",
  dusk: "bg-[linear-gradient(125deg,#18241E_0%,#3D5C4A_60%,#8B5E2F_100%)]",
};

/**
 * Attractive gradient placeholder used when photography is not yet provided.
 * Swap in real images via restaurant.ts paths and next/image where needed.
 */
export function GradientMedia({
  label,
  className = "",
  variant = "forest",
  children,
}: GradientMediaProps) {
  return (
    <div
      className={`relative overflow-hidden ${variants[variant]} ${className}`}
      role="img"
      aria-label={label ?? "Decorative food imagery placeholder"}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 20%, rgba(255,255,255,0.28), transparent 40%), radial-gradient(circle at 80% 70%, rgba(0,0,0,0.22), transparent 45%)",
        }}
      />
      {children}
      {label ? (
        <span className="absolute bottom-4 left-4 rounded-full bg-black/25 px-3 py-1 text-xs font-medium tracking-wide text-white/90 backdrop-blur-sm">
          {label}
        </span>
      ) : null}
    </div>
  );
}
