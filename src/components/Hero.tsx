import Image from "next/image";
import React from "react";

export default function Hero() {
  return (
    <div>
      <Image
        src="/images/gyanimg-1.webp"
        alt="Hero Image"
        width={1920}
        height={1080}
        className="w-full h-auto object-cover"
      />
    </div>
  );
}
