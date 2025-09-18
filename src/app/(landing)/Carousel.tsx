"use client";

import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export default function HeroCarousel() {
  return (
    <div className="w-screen h-screen">
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        className="w-full h-full"
      >
        {/* Slide 1 */}
        <SwiperSlide>
          <div className="relative w-full h-screen">
            {/* Background Image */}
            <Image
              src="/images/gyanimg-1.webp"
              alt="Gyan Ganga Image 1"
              fill
              priority
              className="object-cover"
            />

            {/* Overlay (dark layer for contrast) */}
            <div className="absolute inset-0 bg-black/50" />

            {/* Hero Content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
              <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-white">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-green-400">
                  Gyan Ganga
                </span>
                <br />
                <span className="text-white">
                  Shaping Futures, Inspiring Leaders
                </span>
              </h1>

              <p className="text-white/90 max-w-2xl text-lg mt-4">
                We combine academic excellence, modern facilities, and holistic
                development to build confident, curious learners. Join our
                campus tour to experience the difference.
              </p>

              <div className="flex flex-wrap gap-3 mt-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/90 border rounded-full text-sm shadow-lg backdrop-blur-sm">
                  <strong className="text-orange-600">Admissions Open</strong>
                </div>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/90 border rounded-full text-sm shadow-lg backdrop-blur-sm">
                  <strong className="text-green-700">CBSE Affiliated</strong>
                </div>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/90 border rounded-full text-sm shadow-lg backdrop-blur-sm">
                  <strong className="text-slate-800">200 Acre Campus</strong>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <div className="relative w-full h-screen">
            <Image
              src="/images/gyanimg-1.webp"
              alt="Gyan Ganga Image 2"
              fill
              className="object-cover"
            />
          </div>
        </SwiperSlide>

        {/* Slide 3 */}
        <SwiperSlide>
          <div className="relative w-full h-screen">
            <Image
              src="/images/gyanimg-1.webp"
              alt="Gyan Ganga Image 3"
              fill
              className="object-cover"
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
