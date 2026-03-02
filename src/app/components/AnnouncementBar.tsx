"use client";

import Link from "next/link";
import { ArrowRight, Megaphone } from "lucide-react";

const announcements = [
  {
    id: 1,
    text: "Applications for the 2026 Digital Skills Cohort are now open",
    href: "/#",
  },
  {
    id: 2,
    text: "Women in Technology Bootcamp begins registration this month",
    href: "/#",
  },
  {
    id: 3,
    text: "We are welcoming new institutional and corporate partners",
    href: "/#",
  },
];

export default function AnnouncementBar() {
  return (
    <div className="fixed top-0 left-0 w-full h-10 bg-slate-900 text-white z-[60] overflow-hidden flex items-center">

      <div className="flex animate-marquee whitespace-nowrap">
        {[...announcements, ...announcements].map((item, index) => (
          <Link
            key={`${item.id}-${index}`}
            href={item.href}
            className="flex items-center gap-3 mx-12 text-sm font-medium tracking-wide hover:opacity-80 transition"
          >
            <Megaphone size={16} strokeWidth={1.5} />
            <span>{item.text}</span>
            <ArrowRight size={14} strokeWidth={1.5} />
          </Link>
        ))}
      </div>

    </div>
  );
}