"use client";

import Image from "next/image";
import { useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

type CarouselItem = {
  src: string;
  alt: string;
  title: string;
  description: string;
};

type HorizontalCardCarouselProps = {
  items: CarouselItem[];
};

export function HorizontalCardCarousel({ items }: HorizontalCardCarouselProps) {
  const trackRef = useRef<HTMLDivElement>(null);

  function scrollByCards(direction: "left" | "right") {
    const track = trackRef.current;
    if (!track) return;
    const amount = Math.max(280, Math.round(track.clientWidth * 0.8));
    track.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth",
    });
  }

  return (
    <div className="relative">
      <div
        ref={trackRef}
        className="flex snap-x gap-4 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {items.map((item, index) => (
          <article
            key={`${item.title}-${index}`}
            className="w-[260px] max-w-[82vw] shrink-0 snap-start overflow-hidden rounded-xl border border-slate-700 bg-slate-950 sm:w-[280px] md:w-[340px]"
          >
            <Image
              src={item.src}
              alt={item.alt}
              width={800}
              height={540}
              loading="lazy"
              className="h-48 w-full object-cover"
            />
            <div className="p-4">
              <h3 className="font-semibold text-white">{item.title}</h3>
              <p className="mt-2 text-sm text-slate-300">{item.description}</p>
            </div>
          </article>
        ))}
      </div>

      <button
        type="button"
        onClick={() => scrollByCards("left")}
        className="absolute top-20 left-1 z-10 inline-flex min-h-11 min-w-11 items-center justify-center rounded-full border border-slate-500 bg-slate-950/80 text-slate-100 backdrop-blur transition hover:border-orange-400 hover:text-orange-300 md:top-24 md:left-2"
        aria-label="Sola kaydır"
      >
        <FaChevronLeft />
      </button>
      <button
        type="button"
        onClick={() => scrollByCards("right")}
        className="absolute top-20 right-1 z-10 inline-flex min-h-11 min-w-11 items-center justify-center rounded-full border border-slate-500 bg-slate-950/80 text-slate-100 backdrop-blur transition hover:border-orange-400 hover:text-orange-300 md:top-24 md:right-2"
        aria-label="Sağa kaydır"
      >
        <FaChevronRight />
      </button>
    </div>
  );
}
