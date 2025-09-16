"use client";
import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";

type Props = {
  images: string[];
  height?: number;
};

export default function Carousel({ images, height = 480 }: Props) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  return (
    <div className="embla overflow-hidden" ref={emblaRef}>
      <div className="embla__container flex">
        {images.map((src, i) => (
          <div key={i} className="embla__slide flex-shrink-0 w-full">
            <div className="relative w-full h-[480px] md:h-[600px] lg:h-[700px]">
              <Image src={src} alt={`slide-${i}`} fill className="object-cover" />
            </div>
          </div>
        ))}
      </div>
      <style jsx>{`
        .embla { width: 100%; }
        .embla__container { display: flex; }
        .embla__slide { position: relative; }
      `}</style>
    </div>
  );
}
