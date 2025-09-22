import Navbar from "@/components/Navbar";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import {
  FaLinkedin,
  FaInstagram,
  FaEnvelope,
  FaXTwitter,
} from "react-icons/fa6";
// import Hero from "@/components/Hero";
import SignUp from "@/components/SignUp";
import Carousel from "@/app/(landing)/Carousel";
import About from "@/app/(landing)/About";
import Gallery from "@/app/(landing)/Gallery";
import WhyUs from "@/app/(landing)/WhyUs";
import UpcomingEvents from "@/app/(landing)/Events";
import SiteFooter from "@/components/SiteFooter";
import PrincipalMessage from "./PrincipleMessage";
import Testimonials from "./Testimonial";

export default function page() {
  return (
    <div className="">
      <Navbar />
      <Carousel />
      {/* <Hero />  */}
      {/* <Hero2 /> */}
      <About />

      {/* <HighlightSection /> */}

      <Gallery />
      <PrincipalMessage />
      <UpcomingEvents />
      {/* <SignUp2 /> */}
      <Testimonials />
      <WhyUs />
      <SignUp />
      <SiteFooter />
    </div>
  );
}

// function Footer() {
//   return (
//     <div className="bg-[#006d70] text-white py-10">
//       <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
//         {/* Logo & Social Icons */}
//         <div className="flex flex-col items-center md:items-start">
//           <img
//             src="/images/logo.png"
//             alt="Gyan Ganga Logo"
//             className="w-40 mb-6"
//           />
//           <div className="flex space-x-4 text-2xl">
//             <a href="#" className="hover:text-orange-400">
//               <FaLinkedin />
//             </a>
//             <a href="#" className="hover:text-orange-400">
//               <FaInstagram />
//             </a>
//             <a
//               href="mailto:gyangangaraipur@yahoo.co.in"
//               className="hover:text-orange-400"
//             >
//               <FaEnvelope />
//             </a>
//             <a href="#" className="hover:text-orange-400">
//               <FaXTwitter />
//             </a>
//           </div>
//         </div>

//         {/* Address */}
//         <div>
//           <h3 className="text-lg font-semibold mb-3">Address :</h3>
//           <p className="text-sm leading-relaxed">
//             12 KM BALODA BAZAR ROAD,
//             <br />
//             NEAR VIDHAN SABHA, NARDHA,
//             <br />
//             RAIPUR [C.G.] Pin-493111
//           </p>
//           <h3 className="text-lg font-semibold mt-6 mb-2">Contact Info :</h3>
//           <p className="text-sm leading-relaxed">
//             0771-2284716
//             <br />
//             0771-2284816
//           </p>
//         </div>

//         {/* Quick Links */}
//         <div>
//           <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
//           <ul className="space-y-2 text-sm">
//             <li>
//               <a href="#" className="hover:text-orange-400">
//                 ● ABOUT
//               </a>
//             </li>
//             <li>
//               <a href="#" className="hover:text-orange-400">
//                 ● NEWS
//               </a>
//             </li>
//             <li>
//               <a href="#" className="hover:text-orange-400">
//                 ● GALLERY
//               </a>
//             </li>
//             <li>
//               <a href="#" className="hover:text-orange-400">
//                 ● TERMS
//               </a>
//             </li>
//             <li>
//               <a href="#" className="hover:text-orange-400">
//                 ● PRIVACY
//               </a>
//             </li>
//             <li>
//               <a href="#" className="hover:text-orange-400">
//                 ● CONTACT
//               </a>
//             </li>
//             <li>
//               <a href="#" className="hover:text-orange-400">
//                 ● INFRASTRUCTURE
//               </a>
//             </li>
//             <li>
//               <a href="#" className="hover:text-orange-400">
//                 ● TRANSFER CERTIFICATE
//               </a>
//             </li>
//             <li>
//               <a href="#" className="hover:text-orange-400">
//                 ● MANDATORY DISCLOSURE
//               </a>
//             </li>
//             <li>
//               <a href="#" className="hover:text-orange-400">
//                 ● DOWNLOADABLE
//               </a>
//             </li>
//           </ul>
//         </div>
//       </div>

//       {/* Stay Updated */}
//       <div className="text-center mt-10">
//         <p className="text-base font-medium">Stay Updated</p>
//         <p className="text-sm text-gray-200">
//           Get the latest updates on security technology & industry insights.
//         </p>
//       </div>

//       {/* Copyright */}
//       <div className="text-center mt-6 text-sm border-t border-white/20 pt-4">
//         © 2025 Gyan Ganga Educational Academy
//       </div>
//     </div>
//   );
// }

// function SignUp2() {
//   return (
//     <>
//       <div className="flex justify-between mx-auto my-20 px-10 bg-green-500">
//         <div>
//           <Image
//             src="/images/School.avif"
//             alt="School Building"
//             width={500}
//             height={900}
//             className=" object-cover"
//           />
//         </div>
//         <div className=" w-4xl">
//           <h1>Experience Gyan Ganga Up Close !</h1>
//           <p>
//             Curious to see what makes Gyan Ganga truly special? Fill out the
//             form below to book a guided campus tour and explore our learning
//             spaces, modern facilities, and student-friendly environment. It’s
//             the perfect way to understand the quality, care, and authenticity we
//             bring to every corner of your child’s educational journey. We’d love
//             to show you around!
//           </p>

//           <div className="max-w-md mx-auto mt-10 p-6 border rounded-lg shadow-sm bg-white">
//             <h2 className="text-2xl font-semibold mb-6 text-center">Sign Up</h2>

//             <form className="space-y-4">
//               {/* Name */}
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">
//                   Name
//                 </label>
//                 <input
//                   type="text"
//                   placeholder="Enter your name"
//                   className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 />
//               </div>

//               {/* Contact */}
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">
//                   Contact
//                 </label>
//                 <input
//                   type="tel"
//                   placeholder="Enter your contact number"
//                   className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 />
//               </div>

//               {/* Email */}
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">
//                   Email
//                 </label>
//                 <input
//                   type="email"
//                   placeholder="Enter your email"
//                   className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 />
//               </div>

//               {/* Submit Button */}
//               <button
//                 type="submit"
//                 className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
//               >
//                 Sign Up
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>

//       <div className=" text-center my-20 px-10">
//         <h1>Inspiring today’s learners to become tomarrow’s leaders.</h1>
//         <Link href="#">
//           <button>Apply Now</button>
//         </Link>
//       </div>
//     </>
//   );
// }

// function UpcomingEvents() {
//   return (
//     <div className="my-20 flex">
//       <div>
//         <Image
//           src="/images/events.png"
//           alt="School Building"
//           width={400}
//           height={600}
//           className="object-cover"
//         />
//       </div>
//       <div className="max-w-2xl mx-auto p-4 ">
//         <h2 className="text-lg font-semibold mb-4">Upcoming Events</h2>

//         <ul className="space-y-3 flex flex-col">
//           <li className="flex flex-col  pb-2">
//             <span>Gyan Ganga Sports Day</span>
//             <span className="text-gray-600">July 21, 2025</span>
//           </li>
//           <li className="flex flex-col pb-2">
//             <span>Inter School Debate</span>
//             <span className="text-gray-600">July 21, 2025</span>
//           </li>
//           <li className="flex flex-col pb-2">
//             <span>Hindi Essay Competition</span>
//             <span className="text-gray-600">July 21, 2025</span>
//           </li>
//           <li className="flex flex-col pb-2">
//             <span>Debate Competition</span>
//             <span className="text-gray-600">July 21, 2025</span>
//           </li>
//           <li className="flex flex-col pb-2">
//             <span>Gyan Ganga Sports Day</span>
//             <span className="text-gray-600">July 21, 2025</span>
//           </li>
//         </ul>

//         <p className="mt-4 text-sm text-gray-700">
//           📢 Join us from{" "}
//           <span className="font-semibold">2:00 PM to 4:00 PM</span>
//           at the <span className="font-semibold">School Auditorium</span> and
//           watch our young minds engage in powerful activities.
//         </p>
//       </div>

//       <div className="max-w-4xl mx-auto p-4">
//         <div className="bg-white rounded-2xl shadow-sm overflow-hidden border border-gray-200">
//           <div className="flex flex-col md:flex-row">
//             <aside className="md:w-1/3 p-6 bg-gradient-to-br from-blue-50 to-white">
//               <h2 className="text-xl font-semibold text-slate-800 mb-4">
//                 IMPORTANT
//               </h2>

//               <ul className="space-y-3">
//                 <li className="flex items-center justify-between p-3 rounded-lg bg-white/60 border border-gray-100">
//                   <div>
//                     <p className="text-sm font-medium text-slate-700">
//                       Brochure
//                     </p>
//                     <p className="text-xs text-slate-500">Download</p>
//                   </div>
//                   <a
//                     href="#"
//                     className="inline-flex items-center gap-2 px-3 py-1.5 text-sm font-medium rounded-md border bg-white hover:bg-slate-50 shadow-sm"
//                     aria-label="Download Brochure"
//                   >
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       className="h-4 w-4"
//                       fill="none"
//                       viewBox="0 0 24 24"
//                       stroke="currentColor"
//                       stroke-width="2"
//                       aria-hidden="true"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         d="M12 3v12m0 0l4-4m-4 4l-4-4M21 21H3"
//                       />
//                     </svg>
//                     Download
//                   </a>
//                 </li>

//                 <li className="flex items-center justify-between p-3 rounded-lg bg-white/60 border border-gray-100">
//                   <div>
//                     <p className="text-sm font-medium text-slate-700">
//                       Prospectus
//                     </p>
//                     <p className="text-xs text-slate-500">Download</p>
//                   </div>
//                   <a
//                     href="#"
//                     className="inline-flex items-center gap-2 px-3 py-1.5 text-sm font-medium rounded-md border bg-white hover:bg-slate-50 shadow-sm"
//                     aria-label="Download Prospectus"
//                   >
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       className="h-4 w-4"
//                       fill="none"
//                       viewBox="0 0 24 24"
//                       stroke="currentColor"
//                       stroke-width="2"
//                       aria-hidden="true"
//                     >
//                       <path
//                         stroke-linecap="round"
//                         stroke-linejoin="round"
//                         d="M12 3v12m0 0l4-4m-4 4l-4-4M21 21H3"
//                       />
//                     </svg>
//                     Download
//                   </a>
//                 </li>

//                 <li className="flex items-center justify-between p-3 rounded-lg bg-white/60 border border-gray-100">
//                   <div>
//                     <p className="text-sm font-medium text-slate-700">
//                       Academic Calendar
//                     </p>
//                     <p className="text-xs text-slate-500">Download</p>
//                   </div>
//                   <a
//                     href="#"
//                     className="inline-flex items-center gap-2 px-3 py-1.5 text-sm font-medium rounded-md border bg-white hover:bg-slate-50 shadow-sm"
//                     aria-label="Download Academic Calendar"
//                   >
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       className="h-4 w-4"
//                       fill="none"
//                       viewBox="0 0 24 24"
//                       stroke="currentColor"
//                       stroke-width="2"
//                       aria-hidden="true"
//                     >
//                       <path
//                         stroke-linecap="round"
//                         stroke-linejoin="round"
//                         d="M12 3v12m0 0l4-4m-4 4l-4-4M21 21H3"
//                       />
//                     </svg>
//                     Download
//                   </a>
//                 </li>

//                 <li className="flex items-center justify-between p-3 rounded-lg bg-white/60 border border-gray-100">
//                   <div>
//                     <p className="text-sm font-medium text-slate-700">
//                       Bus Route
//                     </p>
//                     <p className="text-xs text-slate-500">Download</p>
//                   </div>
//                   <a
//                     href="#"
//                     className="inline-flex items-center gap-2 px-3 py-1.5 text-sm font-medium rounded-md border bg-white hover:bg-slate-50 shadow-sm"
//                     aria-label="Download Bus Route"
//                   >
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       className="h-4 w-4"
//                       fill="none"
//                       viewBox="0 0 24 24"
//                       stroke="currentColor"
//                       stroke-width="2"
//                       aria-hidden="true"
//                     >
//                       <path
//                         stroke-linecap="round"
//                         stroke-linejoin="round"
//                         d="M12 3v12m0 0l4-4m-4 4l-4-4M21 21H3"
//                       />
//                     </svg>
//                     Download
//                   </a>
//                 </li>
//               </ul>
//             </aside>

//             <main className="md:w-2/3 p-6">
//               <div className="flex items-center justify-between mb-4">
//                 <h2 className="text-xl font-semibold text-slate-800">NOTICE</h2>
//                 <p className="text-sm text-slate-500">Latest updates</p>
//               </div>

//               <div className="overflow-x-auto">
//                 <table className="min-w-full divide-y divide-gray-200 text-sm">
//                   <thead className="bg-slate-50">
//                     <tr>
//                       <th className="px-4 py-3 text-left font-medium text-slate-600">
//                         Title
//                       </th>
//                       <th className="px-4 py-3 text-left font-medium text-slate-600">
//                         Date
//                       </th>
//                       <th className="px-4 py-3 text-left font-medium text-slate-600">
//                         Action
//                       </th>
//                     </tr>
//                   </thead>

//                   <tbody className="bg-white divide-y divide-gray-100">
//                     <tr>
//                       <td className="px-4 py-3">Details Of Curriculum</td>
//                       <td className="px-4 py-3 text-slate-600">14/04/2025</td>
//                       <td className="px-4 py-3">
//                         <a
//                           href="#"
//                           className="text-sm inline-flex items-center gap-2 px-2.5 py-1 rounded-md border bg-white hover:bg-slate-50"
//                           aria-label="View Details Of Curriculum on 14 April 2025"
//                         >
//                           View
//                         </a>
//                       </td>
//                     </tr>

//                     <tr>
//                       <td className="px-4 py-3">Annual Report</td>
//                       <td className="px-4 py-3 text-slate-600">17/08/2025</td>
//                       <td className="px-4 py-3">
//                         <a
//                           href="#"
//                           className="text-sm inline-flex items-center gap-2 px-2.5 py-1 rounded-md border bg-white hover:bg-slate-50"
//                           aria-label="View Annual Report on 17 August 2025"
//                         >
//                           View
//                         </a>
//                       </td>
//                     </tr>

//                     <tr>
//                       <td className="px-4 py-3">Sports Calendar</td>
//                       <td className="px-4 py-3 text-slate-600">14/09/2025</td>
//                       <td className="px-4 py-3">
//                         <a
//                           href="#"
//                           className="text-sm inline-flex items-center gap-2 px-2.5 py-1 rounded-md border bg-white hover:bg-slate-50"
//                           aria-label="View Sports Calendar on 14 September 2025"
//                         >
//                           View
//                         </a>
//                       </td>
//                     </tr>

//                     <tr>
//                       <td className="px-4 py-3">English Poetry</td>
//                       <td className="px-4 py-3 text-slate-600">01/10/2025</td>
//                       <td className="px-4 py-3">
//                         <a
//                           href="#"
//                           className="text-sm inline-flex items-center gap-2 px-2.5 py-1 rounded-md border bg-white hover:bg-slate-50"
//                           aria-label="View English Poetry on 1 October 2025"
//                         >
//                           View
//                         </a>
//                       </td>
//                     </tr>

//                     <tr>
//                       <td className="px-4 py-3">Details Of Curriculum</td>
//                       <td className="px-4 py-3 text-slate-600">14/04/2025</td>
//                       <td className="px-4 py-3">
//                         <a
//                           href="#"
//                           className="text-sm inline-flex items-center gap-2 px-2.5 py-1 rounded-md border bg-white hover:bg-slate-50"
//                           aria-label="View second Details Of Curriculum entry"
//                         >
//                           View
//                         </a>
//                       </td>
//                     </tr>

//                     <tr>
//                       <td className="px-4 py-3">Annual Report</td>
//                       <td className="px-4 py-3 text-slate-600">17/08/2025</td>
//                       <td className="px-4 py-3">
//                         <a
//                           href="#"
//                           className="text-sm inline-flex items-center gap-2 px-2.5 py-1 rounded-md border bg-white hover:bg-slate-50"
//                           aria-label="View second Annual Report entry"
//                         >
//                           View
//                         </a>
//                       </td>
//                     </tr>

//                     <tr>
//                       <td className="px-4 py-3">Sports Calendar</td>
//                       <td className="px-4 py-3 text-slate-600">14/09/2025</td>
//                       <td className="px-4 py-3">
//                         <a
//                           href="#"
//                           className="text-sm inline-flex items-center gap-2 px-2.5 py-1 rounded-md border bg-white hover:bg-slate-50"
//                           aria-label="View second Sports Calendar entry"
//                         >
//                           View
//                         </a>
//                       </td>
//                     </tr>
//                   </tbody>
//                 </table>
//               </div>

//               <p className="mt-4 text-xs text-slate-500">
//                 Dates are shown as DD/MM/YYYY.
//               </p>
//             </main>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// function Gallery() {
//   return (
//     <>
//       <h1 className="text-center my-10 text-4xl font-bold">Gallery</h1>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-4  mx-10 mb-20">
//         <Image
//           src="/images/gal-1.webp"
//           alt="Gallery"
//           width={500}
//           height={500}
//           className=" object-cover"
//         />
//         <Image
//           src="/images/gal-1.webp"
//           alt="Gallery"
//           width={500}
//           height={500}
//           className=" object-cover"
//         />

//         <Image
//           src="/images/gal-1.webp"
//           alt="Gallery"
//           width={500}
//           height={500}
//           className=" object-cover"
//         />

//         <Image
//           src="/images/gal-1.webp"
//           alt="Gallery"
//           width={500}
//           height={500}
//           className=" object-cover"
//         />

//         <Image
//           src="/images/gal-1.webp"
//           alt="Gallery"
//           width={500}
//           height={500}
//           className=" object-cover"
//         />

//         <Image
//           src="/images/gal-1.webp"
//           alt="Gallery"
//           width={500}
//           height={500}
//           className=" object-cover"
//         />
//       </div>
//     </>
//   );
// }

// function WhyUs() {
//   return (
//     <>
//       <div className="flex flex-col md:flex-row mx-auto my-20 px-6 md:px-16 max-w-7xl gap-10 items-center min-w-3xl">
//         <div className="prose px-0 md:px-10 my-auto flex-1 min-w-lg">
//           <h1 className="text-3xl font-bold mb-4">Why Us?</h1>
//           <p className="mb-6 text-gray-700">
//             Gyan Ganga has best-in-class infrastructure, including
//             state-of-the-art facilities and a colossal library. As a
//             multi-disciplinary school, currently more than 14,000 students are
//             enrolled across all in Gyan Ganga. A well-qualified team of 150
//             faculty members is the asset of the school.
//           </p>
//           <a href="#">
//             <button className="bg-[#006d70] text-white px-6 py-2 rounded-md hover:bg-[#005a5c] transition font-semibold">
//               Learn More
//             </button>
//           </a>
//         </div>

//         <div className="grid grid-cols-2 md:grid-cols-3 gap-6 flex-1 ">
//           <div className="flex flex-col items-center bg-gradient-to-bl from-slate-50 to-slate-100 rounded-xl  shadow p-4">
//             <Image
//               src="/images/medal.png"
//               alt="Education Legacy"
//               width={40}
//               height={40}
//               className="object-cover mb-2"
//             />
//             <h2 className="text-xl font-bold text-[#006d70]">30+</h2>
//             <p className="text-sm text-gray-600 text-center">
//               Years of Education Legacy
//             </p>
//           </div>

//           <div className="flex flex-col items-center bg-gradient-to-bl from-slate-50 to-slate-100 rounded-xl  shadow p-4">
//             <Image
//               src="/images/Teacher.png"
//               alt="Teacher Section Ratio"
//               width={40}
//               height={40}
//               className="object-cover mb-2"
//             />
//             <h2 className="text-xl font-bold text-[#006d70]">1:40</h2>
//             <p className="text-sm text-gray-600 text-center">
//               Teacher Section Ratio
//             </p>
//           </div>

//           <div className="flex flex-col items-center bg-gradient-to-bl from-slate-50 to-slate-100 rounded-xl  shadow p-4">
//             <Image
//               src="/images/Infrastructure.png"
//               alt="Infrastructure"
//               width={40}
//               height={40}
//               className="object-cover mb-2"
//             />
//             <h2 className="text-xl font-bold text-[#006d70]">State of Art</h2>
//             <p className="text-sm text-gray-600 text-center">Infrastructure</p>
//           </div>

//           <div className="flex flex-col items-center bg-gradient-to-bl from-slate-50 to-slate-100 rounded-xl  shadow p-4">
//             <Image
//               src="/images/Abilities.png"
//               alt="Holistic Development"
//               width={40}
//               height={40}
//               className="object-cover mb-2"
//             />
//             <h2 className="text-xl font-bold text-[#006d70]">Holistic</h2>
//             <p className="text-sm text-gray-600 text-center">Development</p>
//           </div>

//           <div className="flex flex-col items-center bg-gradient-to-bl from-slate-50 to-slate-100 rounded-xl  shadow p-4">
//             <Image
//               src="/images/Sports.png"
//               alt="Campus"
//               width={40}
//               height={40}
//               className="object-cover mb-2"
//             />
//             <h2 className="text-xl font-bold text-[#006d70]">16081 m²</h2>
//             <p className="text-sm text-gray-600 text-center">Campus</p>
//           </div>

//           <div className="flex flex-col items-center bg-gradient-to-bl from-slate-50 to-slate-100 rounded-xl  shadow p-4">
//             <Image
//               src="/images/students.png"
//               alt="Students"
//               width={40}
//               height={40}
//               className="object-cover mb-2"
//             />
//             <h2 className="text-xl font-bold text-[#006d70]">1600+</h2>
//             <p className="text-sm text-gray-600 text-center">Students</p>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

function HighlightSection() {
  return (
    <>
      <div>
        <Image
          src="/images/excellence.jpeg"
          alt="School Building"
          width={1920}
          height={1080}
          className="w-full h-auto object-cover"
        />
      </div>
    </>
  );
}

+function Hero2() {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center bg-blue-200">
      <Image
        src="/images/gyanimg-1.webp"
        alt="Hero Image"
        width={1920}
        height={1080}
        className="w-full h-auto object-cover"
      />
      <h1>Welcome to Our Website</h1>
      <p>Your one-stop solution for all your needs.</p>
    </div>
  );
};
