"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    location: "Mumbai, Maharashtra",

    text: "Gyan Ganga has nurtured my creativity and confidence. Teachers are supportive, and I love the environment here!",
    image:
      "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop",
  },
  {
    id: 2,
    name: "Rajesh Patel",
    location: "Ahmedabad, Gujarat",

    text: "The campus is vibrant and full of opportunities. I enjoy every event and extracurricular activity here.",
    image:
      "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop",
  },
  {
    id: 3,
    name: "Meena Gupta",
    location: "Delhi, NCR",

    text: "Teachers are friendly and help me grow academically and personally. Truly a wonderful school experience.",
    image:
      "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop",
  },

  {
    id: 4,
    name: "Meena Gupta",
    location: "Delhi, NCR",

    text: "Teachers are friendly and help me grow academically and personally. Truly a wonderful school experience.",
    image:
      "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop",
  },

  {
    id: 5,
    name: "Meena Gupta",
    location: "Delhi, NCR",

    text: "Teachers are friendly and help me grow academically and personally. Truly a wonderful school experience.",
    image:
      "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop",
  },

  {
    id: 6,
    name: "Meena Gupta",
    location: "Delhi, NCR",

    text: "Teachers are friendly and help me grow academically and personally. Truly a wonderful school experience.",
    image:
      "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop",
  },
];

export default function StudentTestimonials() {
  return (
    <section
      className="py-20 relative bg-cover bg-center bg-fixed"
      style={{
        backgroundImage: "url('/images/School.avif')",
      }}
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Hear From Our Students
          </h2>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Our students share their experiences at Gyan Ganga Educational
            Academy.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-[#D4A017] to-[#556B2F] mx-auto mt-6"></div>
        </div>

        {/* Testimonials Slider */}
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={40}
          slidesPerView={1}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          breakpoints={{
            768: { slidesPerView: 2, spaceBetween: 40 },
            1024: { slidesPerView: 3, spaceBetween: 50 },
          }}
          loop={true}
          className="pb-16"
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col items-center text-center h-full">
                {/* Quote Icon */}
                <Quote className="w-12 h-12 text-[#D4A017] mb-4" />

                {/* Testimonial Text */}
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  "{testimonial.text}"
                </p>

                {/* Student Info */}
                <div className="flex flex-col items-center">
                  <div
                    className="w-24 h-24 rounded-full bg-cover bg-center mb-3 shadow-lg"
                    style={{ backgroundImage: `url(${testimonial.image})` }}
                  />
                  <h4 className="font-semibold text-gray-900 text-lg">
                    {testimonial.name}
                  </h4>
                  <p className="text-gray-600 text-sm">
                    {testimonial.location}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Pagination Styles */}
      <style jsx global>{`
        .swiper-pagination-bullet {
          background-color: rgba(255, 255, 255, 0.5) !important;
          width: 12px !important;
          height: 12px !important;
          opacity: 1 !important;
          transition: all 0.3s ease !important;
        }
        .swiper-pagination-bullet-active {
          background-color: #d4a017 !important;
          transform: scale(1.3) !important;
        }
      `}</style>
    </section>
  );
}
