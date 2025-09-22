"use client";

import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

// Import required module
import { Autoplay, EffectCards } from "swiper/modules";

export default function WhyUs() {
  const stats = [
    {
      icon: "/images/medal.png",
      value: "30+",
      text: "Years of Education Legacy",
    },
    {
      icon: "/images/Teacher.png",
      value: "1:40",
      text: "Teacher Section Ratio",
    },
    {
      icon: "/images/Infrastructure.png",
      value: "State of Art",
      text: "Infrastructure",
    },
    {
      icon: "/images/Abilities.png",
      value: "Holistic",
      text: "Development",
    },
    {
      icon: "/images/Sports.png",
      value: "16081 m²",
      text: "Campus",
    },
    {
      icon: "/images/students.png",
      value: "1600+",
      text: "Students",
    },
  ];

  return (
    <section className="relative w-full py-20 px-6 md:px-16 max-w-7xl mx-auto">
      {/* Background watermark */}
      <div className="absolute inset-0 opacity-5">
        <Image
          src="/images/Abilities.png"
          alt="Abilities Background"
          fill
          className="object-contain object-center"
        />
      </div>

      <div className="relative flex flex-col md:flex-row gap-12 items-center">
        {/* Left Content */}
        <div className="flex-1 z-10">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-6 bg-gradient-to-r from-orange-400 to-green-500 bg-clip-text text-transparent">
            Why Choose Gyan Ganga?
          </h2>
          <p className="text-gray-700 text-base leading-relaxed mb-6">
            Gyan Ganga Institute is a leading educational hub known for its
            excellence in academics and holistic development. With
            state-of-the-art infrastructure, modern laboratories, smart
            classrooms, and a well-stocked library, the institute provides an
            ideal learning environment. Over <strong>14,000 students</strong>{" "}
            are enrolled across diverse disciplines, guided by a dedicated team
            of more than <strong>150 qualified faculty members</strong>. Gyan
            Ganga emphasizes not only academic growth but also extracurricular
            activities, research, and industry exposure, ensuring students are
            career-ready. With its vision of nurturing innovation, leadership,
            and values, Gyan Ganga Institute continues to shape future leaders
            and contribute to society.
          </p>
          <Link href="/about">
            <Button className="bg-gradient-to-r from-orange-400 to-green-500 text-white font-semibold px-6 py-3 rounded-full shadow-md hover:from-orange-500 hover:to-green-600 transition-all">
              Learn More
            </Button>
          </Link>
        </div>

        {/* Right Content - Swiper Cards */}
        <div className="flex-1 w-full  max-w-md z-10">
          <Swiper
            effect="cards"
            grabCursor={true}
            modules={[EffectCards, Autoplay]}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            className="mySwiper w-[280px] h-[350px] mx-auto"
          >
            {stats.map((stat, idx) => (
              <SwiperSlide
                key={idx}
                className="flex flex-col justify-center items-center rounded-xl shadow-2xl p-6  pt-15 bg-[#abe7e7]"
              >
                <Image
                  src={stat.icon}
                  alt={stat.text}
                  width={70}
                  height={70}
                  className="mb-4 mx-auto"
                />
                <h3 className="text-2xl font-bold text-[#006d70] mb-2 text-center">
                  {stat.value}
                </h3>
                <p className="text-gray-700 text-center font-medium">
                  {stat.text}
                </p>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
