"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

type SliderImage = {
  src: string;
  alt: string;
};

type ServiceImageSliderProps = {
  images: SliderImage[];
};

export function ServiceImageSlider({ images }: ServiceImageSliderProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;
    const isMobile = window.matchMedia("(max-width: 767px)").matches;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (isMobile || reducedMotion) return;

    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [images.length]);

  if (!images.length) return null;

  const current = images[index];

  return (
    <div className="space-y-4">
      <div className="relative overflow-hidden rounded-2xl border border-slate-700 bg-slate-950">
        <Image
          src={current.src}
          alt={current.alt}
          width={1400}
          height={900}
          className="h-[52vh] max-h-[340px] w-full object-cover md:h-[460px] md:max-h-none"
          priority={index === 0}
        />
        <button
          onClick={() => setIndex((prev) => (prev - 1 + images.length) % images.length)}
          className="absolute top-1/2 left-3 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white hover:bg-black/70"
          aria-label="Önceki görsel"
        >
          <FaChevronLeft />
        </button>
        <button
          onClick={() => setIndex((prev) => (prev + 1) % images.length)}
          className="absolute top-1/2 right-3 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white hover:bg-black/70"
          aria-label="Sonraki görsel"
        >
          <FaChevronRight />
        </button>
        <div className="absolute right-3 bottom-3 rounded-md bg-black/60 px-2 py-1 text-xs text-slate-200">
          {index + 1} / {images.length}
        </div>
      </div>

      <div className="hidden grid-cols-3 gap-3 md:grid md:grid-cols-6">
        {images.map((item, i) => (
          <button
            key={`${item.src}-${i}`}
            onClick={() => setIndex(i)}
            className={`overflow-hidden rounded-lg border ${
              i === index ? "border-orange-400" : "border-slate-700"
            }`}
            aria-label={`Görsel ${i + 1}`}
          >
            <Image src={item.src} alt={item.alt} width={400} height={260} className="h-20 w-full object-cover" />
          </button>
        ))}
      </div>
    </div>
  );
}
