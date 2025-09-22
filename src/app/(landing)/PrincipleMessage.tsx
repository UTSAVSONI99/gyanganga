"use client";
import Image from "next/image";
import React from "react";

export default function PrincipalMessage() {
  return (
    <section className="relative py-20 bg-gradient-to-br from-green-50 to-green-100 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-orange-200 rounded-full mix-blend-multiply opacity-20 animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-green-300 rounded-full mix-blend-multiply opacity-20 animate-pulse"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-16">
        {/* Principal Image */}
        <div className="flex-shrink-0 relative w-64 h-64 lg:w-80 lg:h-80 mx-auto lg:mx-0 transform transition-transform hover:scale-105 duration-500">
          <Image
            src="/images/principal.jpg" // Replace with your principal image
            alt="Principal"
            fill
            className="object-cover rounded-full shadow-2xl border-4 border-green-300"
            priority
          />
        </div>

        {/* Principal Message */}
        <div className="flex-1 text-center lg:text-left relative">
          {/* Quote Icon */}
          <div className="absolute -top-8 left-1/2 lg:left-0 transform -translate-x-1/2 lg:translate-x-0 text-6xl text-orange-400 opacity-20">
            “
          </div>

          <h2 className="text-3xl md:text-5xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-green-500">
            Message from Our Principal
          </h2>

          <p className="text-gray-800 text-lg md:text-xl leading-relaxed mb-6">
            Welcome to{" "}
            <span className="font-semibold text-green-700">
              Gyan Ganga Educational Academy
            </span>
            ! Our mission is to nurture young minds with holistic education,
            fostering creativity, integrity, and excellence. Every student is
            encouraged to explore, learn, and grow in a safe and inspiring
            environment. Join us on this incredible journey of learning and
            discovery.
          </p>

          <p className="text-green-800 font-bold text-lg mb-1">
            Dr. Suresh Kumar
          </p>
          <p className="text-gray-600 italic text-sm">
            Principal, Gyan Ganga Educational Academy
          </p>
        </div>
      </div>
    </section>
  );
}
