"use client";

import Image from "next/image";
import { CalendarDays, Download, Bell, Link as LinkIcon } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export default function UpcomingEvents() {
  return (
    <section className="relative py-16 bg-gradient-to-br from-orange-50 via-white to-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Heading */}
        <h2 className="bg-gradient-to-r from-orange-400 to-green-500 bg-clip-text text-transparent text-center text-4xl font-extrabold tracking-wide drop-shadow-md">
          Upcoming Events
        </h2>

        {/* Layout */}
        <div className="flex flex-col lg:flex-row justify-between gap-12">
          {/* Events Column */}
          <div className="flex flex-col lg:flex-row gap-8 flex-1">
            {/* Event Image */}
            <div className="flex-shrink-0">
              <Image
                src="/images/events.png"
                alt="School Events"
                width={320}
                height={200}
                className="shadow-xl object-cover rounded-2xl border-4 border-white"
              />
            </div>

            {/* Events List */}
            <div>
              <ul className="space-y-6 pt-4">
                {[
                  { title: "Gyan Ganga Sports Day", date: "21/07/2025" },
                  { title: "Inter School Debate", date: "21/07/2025" },
                  { title: "Hindi Essay Competition", date: "21/07/2025" },
                  { title: "Debate Competition", date: "21/07/2025" },
                  { title: "Cultural Fest", date: "25/08/2025" },
                ].map((event, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-4 bg-white/70 backdrop-blur-md p-4 rounded-xl shadow-md hover:shadow-lg hover:bg-white transition"
                  >
                    <CalendarDays className="text-emerald-600 mt-1 w-6 h-6" />
                    <div>
                      <a
                        href="#"
                        className="font-semibold text-lg text-slate-800 hover:text-emerald-600 hover:underline underline-offset-4 transition"
                      >
                        {event.title}
                      </a>
                      <p className="text-sm text-slate-600">{event.date}</p>
                    </div>
                  </li>
                ))}
              </ul>

              {/* Small Paragraph */}
              <p className="mt-8 text-slate-700 text-base leading-relaxed max-w-md">
                ✨ Be part of our vibrant school community where students
                showcase their skills, creativity, and talent. Mark your
                calendars and join us for these memorable moments!
              </p>
            </div>
          </div>

          {/* Right Column */}
          <div className="w-full lg:w-1/3 flex flex-col gap-8">
            {/* Notice Board */}
            <Card className="shadow-lg hover:shadow-xl transition rounded-2xl overflow-hidden border border-orange-200">
              <CardHeader className="bg-gradient-to-r from-orange-400 to-green-500 text-white">
                <CardTitle className="flex items-center gap-2 text-xl font-bold">
                  <Bell className="w-5 h-5" /> Notice Board
                </CardTitle>
              </CardHeader>
              <CardContent className="divide-y divide-slate-200">
                {[
                  { title: "Details Of Curriculum", date: "14/04/2025" },
                  { title: "Annual Report", date: "17/08/2025" },
                  { title: "Sports Calendar", date: "14/09/2025" },
                  { title: "English Poetry", date: "01/10/2025" },
                ].map((notice, idx) => (
                  <div
                    key={idx}
                    className="py-3 flex items-center justify-between hover:bg-orange-50 px-2 rounded-lg transition"
                  >
                    <span className="font-medium text-slate-700">
                      {notice.title}
                    </span>
                    <span className="flex items-center gap-2 text-sm text-emerald-600 font-semibold">
                      <CalendarDays className="w-4 h-4" /> {notice.date}
                    </span>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Important Links */}
            <Card className="shadow-lg hover:shadow-xl transition rounded-2xl border border-green-200">
              <CardHeader className="bg-gradient-to-r from-green-500 to-emerald-600 text-white">
                <CardTitle className="flex items-center gap-2 text-xl font-bold">
                  <LinkIcon className="w-5 h-5" /> Important Links
                </CardTitle>
              </CardHeader>
              <CardContent className="grid gap-4">
                {[
                  "Brochure",
                  "Prospectus",
                  "Academic Calendar",
                  "Bus Route",
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between p-3 rounded-xl border hover:scale-[1.02] hover:bg-green-50 transition cursor-pointer shadow-sm"
                  >
                    <span className="text-slate-800 font-medium">{item}</span>
                    <a
                      href="#"
                      className="inline-flex items-center gap-2 text-sm font-medium px-3 py-1.5 rounded-md bg-gradient-to-r from-green-500 to-emerald-600 text-white shadow hover:from-green-600 hover:to-emerald-700 transition"
                    >
                      <Download className="w-4 h-4" /> Download
                    </a>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
