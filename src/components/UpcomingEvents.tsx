import React from "react";
import Image from "next/image";

export default function UpcomingEvents() {
  const events = [
    { title: "Gyan Ganga Sports Day", date: "July 21, 2025" },
    { title: "Inter School Debate", date: "Aug 17, 2025" },
    { title: "Hindi Essay Competition", date: "Sep 14, 2025" },
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-12">
      <div className="grid md:grid-cols-3 gap-6 items-start">
        <div>
          <Image src="/images/events.png" alt="Events" width={400} height={300} className="object-cover rounded" />
        </div>

        <div className="md:col-span-2">
          <h2 className="text-2xl font-semibold mb-4">Upcoming Events</h2>
          <ul className="space-y-3">
            {events.map((e, i) => (
              <li key={i} className="p-3 rounded bg-white/60">
                <div className="flex justify-between">
                  <span className="font-medium">{e.title}</span>
                  <span className="text-sm text-gray-600">{e.date}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
