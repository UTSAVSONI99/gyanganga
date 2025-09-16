import React from "react";
import Image from "next/image";

export default function GallerySection() {
  const images = [
    "/images/gal-1.webp",
    "/images/gyanimg-1.webp",
    "/images/excellence.jpeg",
    "/images/School.avif",
    "/images/events.png",
    "/images/Lush-green-200-acres-campus-e1751793276972.png",
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-12">
      <h2 className="text-3xl font-bold text-center mb-6">Gallery</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((src, i) => (
          <div key={i} className="w-full h-48 relative">
            <Image src={src} alt={`gallery-${i}`} fill className="object-cover rounded" />
          </div>
        ))}
      </div>
    </section>
  );
}
