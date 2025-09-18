import Navbar from "@/components/Navbar";
// import Hero from "@/components/Hero";
import SecondaryHero from "@/components/SecondaryHero";
import HighlightSection from "@/components/HighlightSection";
import WhyUs from "@/components/WhyUs";
import GallerySection from "@/components/GallerySection";
import UpcomingEvents from "@/components/UpcomingEvents";
import SignUp from "@/components/SignUp";
import SiteFooter from "@/components/SiteFooter";
import React from "react";

export default function page() {
  return (
    <div>
      <Navbar />
      {/* <Hero /> */}
      <SecondaryHero />
      <HighlightSection />
      <WhyUs />
      <GallerySection />
      <UpcomingEvents />
      <SignUp />
      <SiteFooter />
    </div>
  );
}
