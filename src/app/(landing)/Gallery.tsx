"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

// Import Swiper styles
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Grid, Pagination } from "swiper/modules";

export default function Gallery() {
  const images = [
    { src: "/images/gal-1.webp", label: "Science Lab" },
    { src: "/images/gal-2-1024x683.webp", label: "Library" },
    { src: "/images/gal-3-768x576.webp", label: "Sports" },
    { src: "/images/gal-4.webp", label: "Cultural Fest" },
    { src: "/images/gal-5-768x512.webp", label: "Smart Classes" },
    { src: "/images/gal-6.webp", label: "Campus View" },
    { src: "/images/gal-7-768x512.webp", label: "Computer Lab" },
    { src: "/images/gal-8-768x512.webp", label: "Annual Day" },
    { src: "/images/gal-1.webp", label: "School Events" },
    { src: "/images/gal-10.webp", label: "School Events" },
  ];

  return (
    <div className="w-full max-w-7xl mx-auto py-10">
      <h2 className="bg-gradient-to-r from-orange-400 to-green-500 bg-clip-text text-transparent text-center text-3xl md:text-4xl font-bold mb-6">
        Gallery
      </h2>
      <Swiper
        slidesPerView={3}
        grid={{ rows: 2, fill: "row" }}
        spaceBetween={10} // reduced space
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        modules={[Grid, Pagination, Autoplay]}
        className="mySwiper"
      >
        {images.map((item, index) => (
          <SwiperSlide key={index} className="flex justify-center items-center">
            <div className="relative w-[420px] h-[350px]">
              {/* Image */}
              <Image
                src={item.src}
                alt={item.label}
                fill
                className=" object-cover shadow-md"
              />
              {/* Text overlay */}
              <div className="absolute bottom-0 w-full bg-black/50 text-white text-sm md:text-base font-semibold text-center py-2 uppercase rounded-b-xl">
                {item.label}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
