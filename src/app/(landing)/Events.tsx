"use client";

import Image from "next/image";
import { CalendarDays, Download } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function UpcomingEvents() {
  return (
    <div className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
      {/* Heading */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="bg-gradient-to-r from-orange-400 to-green-500 bg-clip-text text-transparent text-center text-3xl md:text-4xl font-bold mb-6">
          Upcoming Events
        </h2>
      </div>

      {/* Section Layout */}
      <div className="w-full">
        <div className="flex flex-col lg:flex-row justify-between gap-12">
          {/* Middle Column - Events with Image */}
          <div className="flex flex-col lg:flex-row gap-8">
            <Image
              src="/images/events.png"
              alt="School Events"
              width={300}
              height={160}
              className="shadow-md object-cover rounded-lg"
            />

            <div>
              <ul className="space-y-6 pt-10">
                {[
                  { title: "Gyan Ganga Sports Day", date: "21/07/2025" },
                  { title: "Inter School Debate", date: "21/07/2025" },
                  { title: "Hindi Essay Competition", date: "21/07/2025" },
                  { title: "Debate Competition", date: "21/07/2025" },
                  { title: "Cultural Fest", date: "25/08/2025" },
                ].map((event, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CalendarDays className="text-emerald-600 mt-1 w-5 h-5" />
                    <div>
                      <a
                        href="#"
                        className="font-medium text-slate-800 hover:text-emerald-600 hover:underline underline-offset-4 transition"
                      >
                        {event.title}
                      </a>
                      <p className="text-sm text-slate-500">{event.date}</p>
                    </div>
                  </li>
                ))}
              </ul>

              {/* Small Paragraph */}
              <p className="mt-6 text-slate-600 text-sm leading-relaxed max-w-md">
                Join us in these exciting upcoming events where students
                showcase their skills, talents, and creativity. Mark your
                calendars and be a part of the celebrations!
              </p>
            </div>
          </div>

          {/* Right Column - Notice Board & Important Links stacked */}
          <div className="w-full lg:w-1/3 flex flex-col gap-6">
            {/* Notice Board */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-slate-800">
                  Notice Board
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Table className="border rounded-lg overflow-hidden">
                  <TableHeader className="bg-emerald-600">
                    <TableRow>
                      <TableHead className="text-white font-medium">
                        Title
                      </TableHead>
                      <TableHead className="text-white font-medium">
                        Date
                      </TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {[
                      { title: "Details Of Curriculum", date: "14/04/2025" },
                      { title: "Annual Report", date: "17/08/2025" },
                      { title: "Sports Calendar", date: "14/09/2025" },
                      { title: "English Poetry", date: "01/10/2025" },
                    ].map((notice, idx) => (
                      <TableRow
                        key={idx}
                        className={idx % 2 === 0 ? "bg-slate-50" : "bg-white"}
                      >
                        <TableCell className="font-medium text-slate-700">
                          {notice.title}
                        </TableCell>
                        <TableCell className="flex items-center gap-2 text-slate-600">
                          <CalendarDays className="w-4 h-4 text-emerald-500" />
                          {notice.date}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
                <p className="text-xs text-slate-400 mt-3">
                  Dates are shown as DD/MM/YYYY.
                </p>
              </CardContent>
            </Card>

            {/* Important Links */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-slate-800">
                  Important Links
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {[
                  "Brochure",
                  "Prospectus",
                  "Academic Calendar",
                  "Bus Route",
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between p-3 rounded-lg border hover:bg-slate-50 transition"
                  >
                    <span className="text-slate-700 font-medium">{item}</span>
                    <a
                      href="#"
                      className="inline-flex items-center gap-2 text-sm font-medium px-3 py-1.5 rounded-md border bg-white hover:bg-slate-100"
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
    </div>
  );
}
