"use client";

import Image from "next/image";
import Link from "next/link";

export default function WhyUs() {
  return (
    <section className="relative max-w-7xl mx-auto py-16 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 px-6 md:px-12">
        {/* Left Content */}
        <div className="flex-1 z-10">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-6 bg-gradient-to-r from-orange-400 to-green-500 bg-clip-text text-transparent">
            Why Choose Gyan Ganga?
          </h2>
          <p className="mb-6 text-gray-700 leading-relaxed text-lg">
            Gyan Ganga offers best-in-class infrastructure, world-class
            facilities, and a colossal library. With more than{" "}
            <strong>14,000 students</strong> and a highly qualified team of{" "}
            <strong>150 faculty members</strong>, we are committed to shaping
            future leaders with holistic development and academic excellence.
          </p>

          <Link href="/about">
            <button className="px-6 py-3 rounded-md bg-gradient-to-r from-orange-500 to-green-600 text-white font-semibold shadow-md hover:opacity-90 transition">
              Learn More
            </button>
          </Link>
        </div>

        {/* Right Section with BG */}
        <div className="flex-1 relative">
          {/* Background Image */}
          <Image
            src="/images/Abilities.png"
            alt="Background Abilities"
            fill
            className="object-contain opacity-10 absolute inset-0"
          />

          {/* Stats Grid */}
          <div className="relative grid grid-cols-2 md:grid-cols-3 gap-6 z-10">
            {[
              {
                src: "/images/medal.png",
                title: "30+",
                text: "Years of Legacy",
              },
              {
                src: "/images/Teacher.png",
                title: "1:40",
                text: "Teacher Ratio",
              },
              {
                src: "/images/Infrastructure.png",
                title: "State of Art",
                text: "Infrastructure",
              },
              {
                src: "/images/Abilities.png",
                title: "Holistic",
                text: "Development",
              },
              {
                src: "/images/Sports.png",
                title: "16081 m²",
                text: "Campus Area",
              },
              {
                src: "/images/students.png",
                title: "1600+",
                text: "Students",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="flex flex-col items-center bg-teal-300 rounded-xl shadow-md p-6 hover:shadow-lg hover:scale-105 transition transform"
              >
                <Image
                  src={item.src}
                  alt={item.text}
                  width={50}
                  height={50}
                  className="object-contain mb-3"
                />
                <h3 className="text-xl font-bold text-[#006d70]">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 text-center">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
