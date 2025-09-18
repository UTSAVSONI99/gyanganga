"use client";
import React from "react";
import { motion } from "framer-motion";
const M: any = motion;
import Carousel from "@/app/(landing)/Carousel";
import Link from "next/link";

export default function Hero() {
  const backgroundImages = [
    "/images/gyanimg-1.webp",
    "/images/gyan-ganga-school-raipur-hero-section-image.webp",
    "/images/excellence.jpeg",
  ];

  const overlayImages = [
    "/images/School.avif",
    "/images/gal-1.webp",
    "/images/excellence.jpeg",
  ];

  return (
    <section className="w-full relative min-h-[80vh] overflow-hidden">
      {/* Background Carousel - Full Width */}
      <div className="absolute inset-0 z-0 top-0 left-0 w-full h-full bottom-0">
        {/* <Carousel images={backgroundImages} /> */}
        <img
          src="/images/gyanimg-1.webp"
          alt="Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 min-h-[80vh] flex items-center">
        <div className="max-w-7xl mx-auto px-6 py-20 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left column: content */}
            <div className="lg:col-span-7 space-y-6">
              <M.div
                initial={{ x: -30, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.7 }}
                className="space-y-6"
              >
                <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-white">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-green-400">
                    Gyan Ganga
                  </span>
                  <br />
                  <span className="text-white">
                    Shaping Futures, Inspiring Leaders
                  </span>
                </h1>

                <p className="text-white/90 max-w-2xl text-lg">
                  We combine academic excellence, modern facilities, and
                  holistic development to build confident, curious learners.
                  Join our campus tour to experience the difference.
                </p>

                <div className="flex flex-wrap gap-3">
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

                <div className="flex items-center gap-4 mt-8">
                  <Link href="/book" className="inline-block">
                    <M.a
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.98 }}
                      className="inline-block bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-lg font-semibold shadow-lg"
                    >
                      Book a Visit
                    </M.a>
                  </Link>

                  <Link href="#about" className="inline-block">
                    <M.a
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.98 }}
                      className="inline-block border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-lg font-semibold transition-colors"
                    >
                      Learn More
                    </M.a>
                  </Link>
                </div>
              </M.div>
            </div>

            {/* Right column: Secondary carousel */}
            <div className="lg:col-span-5">
              <M.div
                initial={{ x: 30, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="relative"
              >
                <div className="rounded-2xl overflow-hidden shadow-2xl bg-white/10 backdrop-blur-md border border-white/20 relative">
                  <div className="relative">
                    <Carousel images={overlayImages} />

                    {/* Overlay content on secondary carousel */}
                    <div className="absolute inset-0 pointer-events-none">
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                      {/* Rotating logo */}
                      <div className="absolute left-4 top-4 rotate-container pause-rotation">
                        <img
                          src="/images/logo.png"
                          alt="Gyan Ganga logo"
                          className="w-16 h-16 object-contain rotating-image"
                        />
                      </div>

                      {/* Bottom overlay text */}
                      <div className="absolute bottom-4 left-4 right-4">
                        <div className="text-white">
                          <h3 className="text-lg font-bold">Campus Life</h3>
                          <p className="text-sm text-white/90">
                            Excellence · Sports · Arts · Growth
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </M.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
