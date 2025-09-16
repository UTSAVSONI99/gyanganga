"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full fixed top-0 left-0 z-50 bg-white/60 backdrop-blur-sm shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
        {/* Left: Logo + Title */}
        <div className="flex items-center gap-3">
          <Image
            src="/images/logo.png"
            alt="Logo"
            width={56}
            height={56}
            className="object-contain"
          />
          <div className="leading-tight">
            <h1 className="text-xl font-bold">
              <span className="text-orange-600">Gyan</span>{" "}
              <span className="text-green-700">Ganga</span>
            </h1>
            <p className="text-xs tracking-wide text-gray-700">EDUCATIONAL ACADEMY</p>
          </div>
        </div>

        {/* Center: Navigation Links */}
        <nav className="hidden md:flex gap-8 font-semibold text-black">
          <Link href="/" className="text-orange-600">
            HOME
          </Link>
          <Link href="/about">ABOUT</Link>
          <Link href="/achievements">ACHIEVEMENTS</Link>
          <Link href="/mandatory-disclosure">MANDATORY</Link>
          <Link href="/gallery">GALLERY</Link>
          <Link href="/contact">CONTACT</Link>
        </nav>

        {/* Right: Campus Visit + Mobile Toggle */}
        <div className="flex items-center gap-4">
          <div className="hidden md:block text-sm font-medium">
            <span className="text-orange-600">Campus</span>{" "}
            <span className="text-gray-600">Visit</span> –{" "}
            <Link href="/book" className="text-green-700 font-semibold">
              Book Now
            </Link>
          </div>

          <button
            className="md:hidden p-2 rounded-md bg-white/80 border"
            aria-label="Toggle menu"
            onClick={() => setOpen((s) => !s)}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M4 6h16M4 12h16M4 18h16" stroke="#111827" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
        className="md:hidden overflow-hidden bg-white/90 border-t"
      >
        <div className="px-6 py-4 space-y-3">
          <Link href="/" onClick={() => setOpen(false)} className="block font-medium">
            Home
          </Link>
          <Link href="/about" onClick={() => setOpen(false)} className="block">
            About
          </Link>
          <Link href="/gallery" onClick={() => setOpen(false)} className="block">
            Gallery
          </Link>
          <Link href="/contact" onClick={() => setOpen(false)} className="block">
            Contact
          </Link>
          <Link href="/book" onClick={() => setOpen(false)} className="block text-orange-600 font-semibold">
            Book a Visit
          </Link>
        </div>
      </motion.div>
    </header>
  );
}
