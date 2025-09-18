"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function About() {
  return (
    <section className="bg-gray-50 py-10 max-w-7xl mx-auto ">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-22 px-6 md:px-20">
        {/* Text Section */}
        <div className="max-w-xl">
          <h2 className="bg-gradient-to-r from-orange-400 to-green-500 bg-clip-text text-transparent text-3xl md:text-4xl font-bold mb-6">
            Excellence Through Education
          </h2>

          <p className="text-gray-600 text-base leading-relaxed  mb-8">
            Gyan Ganga Educational Academy stands as a distinguished name in
            education, shaping the future of young minds with a legacy of
            academic excellence, innovation, and holistic development. Over the
            years, it has impacted thousands of students across diverse
            backgrounds, nurturing talent and building character. As a leading
            institution in Raipur, Chhattisgarh, Gyan Ganga continues to set new
            benchmarks in schooling, driven by a vision to empower learners for
            global success.
          </p>
          <Link href="/about">
            <Button className="bg-gradient-to-r from-orange-400 to-green-500 text-white font-semibold px-6 py-3 rounded-full shadow-md hover:from-orange-500 hover:to-green-600 transition-all">
              Learn More
            </Button>
          </Link>
        </div>

        {/* Image Section */}
        <div className="relative w-full max-w-3xl">
          <Image
            src="/images/shri-UK-Shandilya.png"
            alt="Founder Shri U.K. Shandilya"
            width={700}
            height={700}
            className="rounded-lg object-contain drop-shadow-lg"
            priority
          />
        </div>
      </div>
    </section>
  );
}
