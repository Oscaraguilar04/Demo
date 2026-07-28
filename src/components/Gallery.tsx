import Image from "next/image";
import { restaurant } from "@/data/restaurant";

export function Gallery() {
  const images = restaurant.galleryImages;

  return (
    <section
      id="gallery"
      className="section-pad scroll-mt-28"
      aria-labelledby="gallery-heading"
    >
      <div className="section-shell mb-12 text-center">
        <p className="eyebrow">A look inside</p>
        <h2
          id="gallery-heading"
          className="mt-3 font-display text-4xl font-bold tracking-tight text-[color:var(--brand-primary)] sm:text-5xl"
        >
          Taste the atmosphere
        </h2>
      </div>

      <div className="section-shell-wide">
        <ul className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4 lg:gap-5">
          {images.map((src, index) => (
            <li
              key={src}
              className={`group relative overflow-hidden rounded-2xl md:rounded-3xl ${
                index === 0 || index === 3
                  ? "aspect-[4/5] sm:aspect-[3/4]"
                  : "aspect-square"
              } ${index === 2 ? "md:col-span-1" : ""}`}
            >
              <Image
                src={src}
                alt={`${restaurant.shortName} gallery photo ${index + 1}`}
                fill
                className="img-zoom object-cover"
                sizes="(max-width: 768px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-black/0 transition duration-500 group-hover:bg-black/20" />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
