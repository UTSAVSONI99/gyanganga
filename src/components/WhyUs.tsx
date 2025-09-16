"use client";
import React from "react";
import Image from "next/image";

export default function WhyUs() {
  return (
    <section className="flex flex-col md:flex-row items-start gap-8 max-w-7xl mx-auto px-6 py-16">
      <div className="prose md:w-2/3">
        <h2 className="text-3xl font-bold">Why choose Gyan Ganga?</h2>
        <p className="text-gray-700">
          Gyan Ganga has best-in-class infrastructure, state-of-the-art facilities and a large
          multidisciplinary team focused on holistic student development.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-4 md:w-1/3">
        <div className="flex flex-col items-center">
          <Image src="/images/medal.png" alt="Medal" width={64} height={64} />
          <h3 className="text-xl font-semibold mt-2">30+</h3>
          <p className="text-sm text-gray-600">Years of legacy</p>
        </div>

        <div className="flex flex-col items-center">
          <Image src="/images/Teacher.png" alt="Teacher" width={64} height={64} />
          <h3 className="text-xl font-semibold mt-2">1:40</h3>
          <p className="text-sm text-gray-600">Teacher-student ratio</p>
        </div>

        <div className="flex flex-col items-center">
          <Image src="/images/Infrastructure.png" alt="Infrastructure" width={64} height={64} />
          <h3 className="text-xl font-semibold mt-2">State of Art</h3>
          <p className="text-sm text-gray-600">Infrastructure</p>
        </div>

        <div className="flex flex-col items-center">
          <Image src="/images/Abilities.png" alt="Abilities" width={64} height={64} />
          <h3 className="text-xl font-semibold mt-2">Holistic</h3>
          <p className="text-sm text-gray-600">Development</p>
        </div>
      </div>
    </section>
  );
}
