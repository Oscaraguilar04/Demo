import Image from "next/image";
import { restaurant } from "@/data/restaurant";

export function Gallery() {
  const images = restaurant.galleryImages.filter(Boolean);

  if (images.length === 0) return null;

  return (
    <section
      id="gallery"
      className="section-pad scroll-mt-28"
      aria-labelledby="gallery-heading"
    >
      <div className="section-shell mb-12 text-center">
        <p className="eyebrow">Inside the smokehouse</p>
        <h2
          id="gallery-heading"
          className="mt-3 font-display text-4xl font-bold tracking-[0.03em] text-[color:var(--ink)] uppercase sm:text-5xl"
        >
          Fire, bark &amp; butcher paper
        </h2>
      </div>

      <div className="section-shell-wide">
        <ul className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4">
          {images.map((src, index) => (
            <li
              key={`${src}-${index}`}
              className={`group relative overflow-hidden rounded-sm ${
                index === 0 || index === 3
                  ? "aspect-[4/5] sm:aspect-[3/4]"
                  : "aspect-square"
              }`}
            >
              <Image
                src={src}
                alt={`${restaurant.shortName} gallery photo ${index + 1}`}
                fill
                className="img-zoom object-cover"
                sizes="(max-width: 768px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-black/0 transition duration-500 group-hover:bg-black/25" />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
