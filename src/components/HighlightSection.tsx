import React from "react";
import Image from "next/image";

export default function HighlightSection() {
  return (
    <section className="w-full">
      <Image src="/images/excellence.jpeg" alt="Excellence" width={1920} height={1080} className="w-full h-auto object-cover" />
    </section>
  );
}
