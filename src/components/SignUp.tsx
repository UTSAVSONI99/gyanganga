"use client";
import React from "react";
import Image from "next/image";

export default function SignUp() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-12">
      <div className="flex flex-col md:flex-row items-center gap-8 bg-green-50 p-6 rounded">
        <div className="md:w-1/2">
          <Image src="/images/School.avif" alt="School Building" width={800} height={500} className="object-cover rounded" />
        </div>
        <div className="md:w-1/2">
          <h3 className="text-2xl font-semibold mb-2">Experience Gyan Ganga Up Close</h3>
          <p className="text-gray-700 mb-4">Fill out the form to book a guided campus tour and explore our learning spaces.</p>
          <form className="space-y-3 max-w-md">
            <input placeholder="Name" className="w-full px-3 py-2 border rounded" />
            <input placeholder="Contact" className="w-full px-3 py-2 border rounded" />
            <input placeholder="Email" className="w-full px-3 py-2 border rounded" />
            <button className="px-4 py-2 bg-blue-600 text-white rounded">Sign Up</button>
          </form>
        </div>
      </div>
    </section>
  );
}
