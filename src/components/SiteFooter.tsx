import React from "react";
import {
  FaLinkedin,
  FaInstagram,
  FaEnvelope,
  FaXTwitter,
} from "react-icons/fa6";

export default function SiteFooter() {
  return (
    <footer className="bg-[#006d70] text-white pt-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Logo & Social */}
        <div className="flex flex-col items-center md:items-start">
          <img
            src="/images/logo.png"
            alt="Gyan Ganga Logo"
            className="w-40 mb-6"
          />
          <div className="flex space-x-4 text-2xl">
            <a
              href="#"
              aria-label="LinkedIn"
              className="hover:text-orange-400 transition-colors duration-300"
            >
              <FaLinkedin />
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="hover:text-orange-400 transition-colors duration-300"
            >
              <FaInstagram />
            </a>
            <a
              href="mailto:gyangangaraipur@yahoo.co.in"
              aria-label="Email"
              className="hover:text-orange-400 transition-colors duration-300"
            >
              <FaEnvelope />
            </a>
            <a
              href="#"
              aria-label="X (Twitter)"
              className="hover:text-orange-400 transition-colors duration-300"
            >
              <FaXTwitter />
            </a>
          </div>
        </div>

        {/* Address & Contact */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Address :</h3>
          <p className="text-sm leading-relaxed">
            12 KM BALODA BAZAR ROAD,
            <br />
            NEAR VIDHAN SABHA, NARDHA,
            <br />
            RAIPUR [C.G.] Pin-493111
          </p>
          <h3 className="text-lg font-semibold mt-6 mb-2">Contact Info :</h3>
          <p className="text-sm leading-relaxed">
            0771-2284716
            <br />
            0771-2284816
          </p>
        </div>

        {/* Quick Links Part 1 */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a
                href="#"
                className="relative hover:text-orange-400 after:block after:h-[2px] after:bg-orange-400 after:w-0 hover:after:w-full after:transition-all after:duration-300"
              >
                ● ABOUT
              </a>
            </li>
            <li>
              <a
                href="#"
                className="relative hover:text-orange-400 after:block after:h-[2px] after:bg-orange-400 after:w-0 hover:after:w-full after:transition-all after:duration-300"
              >
                ● NEWS
              </a>
            </li>
            <li>
              <a
                href="#"
                className="relative hover:text-orange-400 after:block after:h-[2px] after:bg-orange-400 after:w-0 hover:after:w-full after:transition-all after:duration-300"
              >
                ● GALLERY
              </a>
            </li>

            <li>
              <a
                href="#"
                className="relative hover:text-orange-400 after:block after:h-[2px] after:bg-orange-400 after:w-0 hover:after:w-full after:transition-all after:duration-300"
              >
                ● TERMS
              </a>
            </li>
            <li>
              <a
                href="#"
                className="relative hover:text-orange-400 after:block after:h-[2px] after:bg-orange-400 after:w-0 hover:after:w-full after:transition-all after:duration-300"
              >
                ● PRIVACY
              </a>
            </li>
          </ul>
        </div>

        {/* Quick Links Part 2 */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Downloads & Info</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a
                href="#"
                className="relative hover:text-orange-400 after:block after:h-[2px] after:bg-orange-400 after:w-0 hover:after:w-full after:transition-all after:duration-300"
              >
                ● CONTACT
              </a>
            </li>

            <li>
              <a
                href="#"
                className="relative hover:text-orange-400 after:block after:h-[2px] after:bg-orange-400 after:w-0 hover:after:w-full after:transition-all after:duration-300"
              >
                ● INFRASTRUCTURE
              </a>
            </li>

            <li>
              <a
                href="#"
                className="relative hover:text-orange-400 after:block after:h-[2px] after:bg-orange-400 after:w-0 hover:after:w-full after:transition-all after:duration-300"
              >
                ● TRANSFER CERTIFICATE
              </a>
            </li>

            <li>
              <a
                href="#"
                className="relative hover:text-orange-400 after:block after:h-[2px] after:bg-orange-400 after:w-0 hover:after:w-full after:transition-all after:duration-300"
              >
                ● MANDATORY DISCLOSURE
              </a>
            </li>

            <li>
              <a
                href="#"
                className="relative hover:text-orange-400 after:block after:h-[2px] after:bg-orange-400 after:w-0 hover:after:w-full after:transition-all after:duration-300"
              >
                ● DOWNLOADABLE
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Admission Queries Highlight */}
      <div className="mt-12 max-w-4xl mx-auto px-6">
        <div className="bg-gradient-to-r from-orange-400 to-green-500 text-center text-white py-4 px-6 rounded-lg shadow-lg">
          <p className="text-lg font-semibold">
            📌 For Admission Related Queries
          </p>
          <p className="text-base mt-1">
            Call: <span className="font-bold">0771-2284716</span>
          </p>
          <p className="text-base">
            Email:{" "}
            <a
              href="mailto:gyangangaraipur@yahoo.co.in"
              className="underline hover:text-gray-100"
            >
              gyangangaraipur@yahoo.co.in
            </a>
          </p>
        </div>
      </div>

      {/* Stay Updated */}
      <div className="text-center mt-10">
        <p className="text-base font-medium">Stay Updated</p>
        <p className="text-sm text-gray-200">
          Get the latest updates on school news and events.
        </p>
      </div>

      {/* Copyright */}
      <div className="text-center mt-6 text-sm border-t border-white/20 pt-4">
        © 2025 Gyan Ganga Educational Academy
      </div>
    </footer>
  );
}
