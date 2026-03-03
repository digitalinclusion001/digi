"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, MapPin, Clock, Briefcase } from "lucide-react";

const jobs = [
  {
    id: "JOB-01",
    title: "Admin Intern",
    department: "Operations",
    location: "Lagos (Fully Remote)",
    type: "Internship",
    duration: "3–6 Months",
    summary:
      "Support programme coordination, documentation, scheduling, and internal operations to ensure efficient delivery across DII initiatives.",
  },
  
];

export default function CareersPage() {
  return (
    <main className="bg-white overflow-hidden pt-28 md:pt-32">
      
      {/* ================= HERO ================= */}
      <section className="relative pb-16 border-b border-black/5">
        <div className="container mx-auto px-6 lg:max-w-screen-xl">
          <div className="max-w-4xl">

            <span className="block text-[13px] tracking-[0.45em] uppercase text-[#5f3b86] mb-5">
              Careers
            </span>

            <h1 className="font-semibold leading-tight text-[clamp(2.3rem,5vw,3.2rem)] max-w-3xl">
              Join the{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#5f3b86] via-[#61abbb] to-[#5f3b86]">
                Digital Inclusion Initiative
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg text-black/70 leading-relaxed">
              Work with a mission-driven team building inclusive digital pathways,
              expanding AI literacy, and enabling sustainable career outcomes.
            </p>

          </div>
        </div>
      </section>

      {/* ================= OPEN ROLES ================= */}
      <section className="py-16">
        <div className="container mx-auto px-6 lg:max-w-screen-xl">
          
          {/* Header */}
          <div className="flex items-end justify-between mb-10">
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold">
                Open Positions
              </h2>
              <p className="text-black/60 mt-2">
                {jobs.length} Active Role{jobs.length !== 1 ? "s" : ""}
              </p>
            </div>
          </div>

          {/* Jobs List */}
          <div className="space-y-6">
            {jobs.map((job, index) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="border border-black/10 rounded-2xl p-8 hover:border-[#5f3b86]/40 transition"
              >
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
                  
                  {/* LEFT */}
                  <div className="space-y-4">

                    <div className="text-xs tracking-[0.35em] text-[#5f3b86]">
                      {job.id}
                    </div>

                    <h3 className="text-xl font-semibold">
                      {job.title}
                    </h3>

                    <div className="flex flex-wrap gap-6 text-sm text-black/60">
                      <div className="flex items-center gap-2">
                        <Briefcase size={15} />
                        {job.department}
                      </div>

                      <div className="flex items-center gap-2">
                        <MapPin size={15} />
                        {job.location}
                      </div>

                      <div className="flex items-center gap-2">
                        <Clock size={15} />
                        {job.type} • {job.duration}
                      </div>
                    </div>

                    <p className="text-black/70 max-w-xl">
                      {job.summary}
                    </p>
                  </div>

                  {/* RIGHT CTA */}
                  <div>
                    <Link
                      href="https://forms.gle/dUnJHnvsafjvfZKx8"
                      target="_blank"
                      className="
                        inline-flex items-center gap-3
                        px-6 py-3
                        rounded-xl
                        bg-[#5f3b86]
                        text-white
                        text-xs
                        tracking-[0.25em]
                        uppercase
                        font-medium
                        transition
                        hover:bg-[#4e2f72]
                      "
                    >
                      Apply
                      <ArrowRight size={14} />
                    </Link>
                  </div>

                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* ================= GENERAL APPLICATION ================= */}
      <section className="bg-[#f9fafb] py-16 border-t border-black/5">
        <div className="container mx-auto px-6 lg:max-w-screen-xl">
          <div className="max-w-2xl">
            <h3 className="text-xl font-semibold mb-4">
              Don’t see a suitable role?
            </h3>

            <p className="text-black/70 mb-6">
              We’re always open to exceptional talent aligned with our mission.
              Submit a general application and our team will review your profile.
            </p>

            <Link
              href="malito:info@digitalinclusioninitiative.org"
              target="_blank"
              className="
                inline-flex items-center gap-3
                px-8 py-4
                rounded-xl
                border border-[#5f3b86]
                text-[#5f3b86]
                text-xs
                tracking-[0.25em]
                uppercase
                font-medium
                transition
                hover:bg-[#5f3b86] hover:text-white
              "
            >
              Submit General Application
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}