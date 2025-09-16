import React from "react";
import { FaLinkedin, FaInstagram, FaEnvelope, FaXTwitter } from "react-icons/fa6";

export default function SiteFooter() {
  return (
    <footer className="bg-[#006d70] text-white py-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
        <div className="flex flex-col items-center md:items-start">
          <img src="/images/logo.png" alt="Gyan Ganga Logo" className="w-40 mb-6" />
          <div className="flex space-x-4 text-2xl">
            <a href="#" aria-label="LinkedIn" className="hover:text-orange-400"><FaLinkedin /></a>
            <a href="#" aria-label="Instagram" className="hover:text-orange-400"><FaInstagram /></a>
            <a href="mailto:gyangangaraipur@yahoo.co.in" aria-label="Email" className="hover:text-orange-400"><FaEnvelope /></a>
            <a href="#" aria-label="X (Twitter)" className="hover:text-orange-400"><FaXTwitter /></a>
          </div>
        </div>

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
          <p className="text-sm leading-relaxed">0771-2284716<br/>0771-2284816</p>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-orange-400">● ABOUT</a></li>
            <li><a href="#" className="hover:text-orange-400">● NEWS</a></li>
            <li><a href="#" className="hover:text-orange-400">● GALLERY</a></li>
            <li><a href="#" className="hover:text-orange-400">● TERMS</a></li>
            <li><a href="#" className="hover:text-orange-400">● PRIVACY</a></li>
            <li><a href="#" className="hover:text-orange-400">● CONTACT</a></li>
          </ul>
        </div>
      </div>

      <div className="text-center mt-10">
        <p className="text-base font-medium">Stay Updated</p>
        <p className="text-sm text-gray-200">Get the latest updates on school news and events.</p>
      </div>

      <div className="text-center mt-6 text-sm border-t border-white/20 pt-4">© 2025 Gyan Ganga Educational Academy</div>
    </footer>
  );
}
