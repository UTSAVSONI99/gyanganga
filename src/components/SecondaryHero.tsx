"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
const M: any = motion;

export default function SecondaryHero() {
  return (
    <section className="flex  px-6 md:px-20 flex-col md:flex-row items-center justify-between bg-gray-100 py-12">
      <M.div
        className="prose p-6 md:p-10 max-w-xl"
        initial={{ x: -20, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-2xl md:text-3xl font-semibold">Excellence Through Education</h2>
        <p className="text-gray-700">
          Gyan Ganga Educational Academy stands as a distinguished name in
          education, shaping the future of young minds with a legacy of academic
          excellence, innovation, and holistic development.
        </p>
        <Link href="#about">
          <div className="inline-block mt-4 px-4 py-2 bg-orange-600 text-white rounded-md">Learn More</div>
        </Link>
  </M.div>

      <M.div
        className="mt-6 md:mt-0"
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        <Image src="/images/shri-UK-Shandilya-img-with-bg-element.png" alt="Founder's image" width={360} height={360} className="object-contain" />
  </M.div>
    </section>
  );
}
