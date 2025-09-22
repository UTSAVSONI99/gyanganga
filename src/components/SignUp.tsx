"use client";
import React from "react";
import Image from "next/image";

export default function SignUp() {
  return (
    <section className="relative w-full h-[600px] text-white">
      {/* Background Image with fixed parallax */}
      <div className="absolute inset-0">
        <Image
          src="/images/School.avif"
          alt="School Building"
          fill
          priority
          className="object-cover object-center"
          style={{ objectFit: "cover", backgroundAttachment: "fixed" }}
        />
        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Foreground Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
        <h3
          className="text-3xl md:text-4xl font-bold mb-4 drop-shadow-lg 
  bg-gradient-to-r from-orange-400 to-green-500 bg-clip-text text-transparent"
        >
          Sign up for a Campus Tour Now!
        </h3>

        <p className="max-w-3xl text-lg mb-8 leading-relaxed drop-shadow-md">
          Curious to see what makes Gyan Ganga truly special? Fill out the form
          below to book a guided campus tour and explore our learning spaces,
          modern facilities, and student-friendly environment. It’s the perfect
          way to understand the quality, care, and authenticity we bring to
          every corner of your child’s educational journey. We’d love to show
          you around!
        </p>

        {/* Signup Form */}
        <form className="space-y-4 w-full max-w-xl">
          <input
            placeholder="Name"
            className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/40 text-white placeholder-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400 hover:bg-white/30 transition"
          />
          <input
            placeholder="Contact"
            className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/40 text-white placeholder-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400 hover:bg-white/30 transition"
          />
          <input
            placeholder="Email"
            className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/40 text-white placeholder-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400 hover:bg-white/30 transition"
          />
          <button
            className="w-1/3 px-6 py-3 rounded-full 
                       bg-gradient-to-r from-orange-400 to-green-500 
                       hover:from-orange-500 hover:to-green-600 
                       transition-all duration-300 ease-in-out 
                       font-semibold text-white shadow-lg text-lg"
          >
            Book Now
          </button>
        </form>
      </div>
    </section>
  );
}
