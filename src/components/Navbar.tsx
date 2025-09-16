"use client";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="w-full fixed top-0 left-0 z-50 bg-transparent backdrop-blur-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
        {/* Left: Logo + Title */}
        <div className="flex items-center gap-3">
          {/* Replace src with your logo */}
          <Image
            src="/images/logo.png"
            alt="Logo"
            width={60}
            height={60}
            className="object-contain"
          />
          <div className="leading-tight">
            <h1 className="text-2xl font-bold">
              <span className="text-orange-600">Gyan</span>{" "}
              <span className="text-green-700">Ganga</span>
            </h1>
            <p className="text-sm tracking-wide text-gray-700">
              EDUCATIONAL ACADEMY
            </p>
          </div>
        </div>

        {/* Center: Navigation Links */}
        <nav className="hidden md:flex gap-8 font-semibold text-black">
          <Link href="/" className="text-orange-600">
            HOME
          </Link>
          <Link href="/about">ABOUT</Link>
          <Link href="/achievements">ACHIEVEMENTS</Link>
          <Link href="/mandatory-disclosure">MANDATORY DISCLOSURE</Link>
          <Link href="/transfer-certificate">TRANSFER CERTIFICATE</Link>
          <Link href="/gallery">GALLERY</Link>
          <Link href="/contact">CONTACT</Link>
        </nav>

        {/* Right: Campus Visit */}
        <div className="hidden md:block text-sm font-medium">
          <span className="text-orange-600">Campus</span>{" "}
          <span className="text-gray-600">Visit</span> –{" "}
          <Link href="/book" className="text-green-700 font-semibold">
            Book Now
          </Link>
        </div>
      </div>
    </header>
  );
}
