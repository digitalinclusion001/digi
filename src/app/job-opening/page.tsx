"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import {
  Briefcase,
  Target,
  Users,
  Award,
  ClipboardList,
  Sparkles,
} from "lucide-react";

const ease = [0.22, 1, 0.36, 1] as const;

export default function CareersPage() {
  return (
    <main className="bg-white overflow-hidden">
      
      {/* ================= HERO ================= */}
      <section className="relative min-h-[75vh] flex items-center">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(95,59,134,0.06)_1px,transparent_1px),linear-gradient(rgba(95,59,134,0.06)_1px,transparent_1px)] [background-size:60px_60px]" />

          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 180, repeat: Infinity, ease: "linear" }}
            className="absolute -top-48 -right-48 h-[640px] w-[640px] rounded-full border border-[#5f3b86]/20"
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 220, repeat: Infinity, ease: "linear" }}
            className="absolute -bottom-56 -left-56 h-[720px] w-[720px] rounded-full border border-[#61abbb]/20"
          />
        </div>

        <div className="relative z-10 container mx-auto px-6 lg:max-w-screen-xl">
          <div className="max-w-4xl">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease }}
              className="block text-[14px] tracking-[0.55em] uppercase text-[#5f3b86] mb-10"
            >
              We’re Hiring
            </motion.span>

            <h1 className="font-semibold leading-[1.05] text-[clamp(2.6rem,6vw,3.8rem)] max-w-3xl">
              Join the{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#5f3b86] via-[#61abbb] to-[#5f3b86]">
                Digital Inclusion Initiative
              </span>
            </h1>

            <p className="mt-12 max-w-2xl text-[1.15rem] leading-relaxed text-black/70">
              Help expand access to digital skills, AI literacy, and
              sustainable career pathways for women and underserved
              communities across Nigeria.
            </p>
          </div>
        </div>
      </section>

      {/* ================= ROLE SUMMARY ================= */}
      <section className="py-24">
        <div className="container mx-auto px-6 lg:max-w-screen-xl">
          <div className="max-w-3xl mb-20">
            <span className="section-eyebrow">Open Role</span>
            <h2 className="text-3xl md:text-4xl font-semibold leading-tight">
              Programme & Partnerships Lead
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-16">
            <InfoCard
              icon={Briefcase}
              title="Role Overview"
              text="Lead programme delivery, partner coordination, and growth strategy across our AI, Virtual Assistance, and Digital Marketing tracks."
            />
            <InfoCard
              icon={Target}
              title="Key Responsibilities"
              text="Manage cohorts, coordinate mentors, track impact metrics, and build relationships with hiring partners and ecosystem stakeholders."
            />
            <InfoCard
              icon={Users}
              title="Who You Are"
              text="A structured operator with experience in programme management, partnerships, or talent development — passionate about inclusion and measurable impact."
            />
            <InfoCard
              icon={Award}
              title="Why Join DII"
              text="Shape high-impact initiatives, collaborate with ecosystem leaders, and help build scalable digital access models."
            />
          </div>
        </div>
      </section>

      {/* ================= REQUIREMENTS ================= */}
      <section className="bg-[#f9fafb] py-24">
        <div className="container mx-auto px-6 lg:max-w-screen-xl">
          <div className="max-w-3xl mb-16">
            <span className="section-eyebrow">Requirements</span>
            <h2 className="text-3xl md:text-4xl font-semibold leading-tight">
              Experience & Qualifications
            </h2>
          </div>

          <ul className="max-w-3xl space-y-6 text-black/70 text-lg">
            <li>• 3+ years experience in programme, operations, or partnerships</li>
            <li>• Strong stakeholder management & reporting ability</li>
            <li>• Experience in tech, digital skills, or education ecosystem preferred</li>
            <li>• Excellent written & verbal communication</li>
            <li>• Lagos-based (hybrid flexibility)</li>
          </ul>
        </div>
      </section>

      {/* ================= APPLY SECTION ================= */}
      <section className="bg-white py-32">
        <div className="container mx-auto px-6 lg:max-w-screen-xl">
          <div className="max-w-3xl">
            <span className="section-eyebrow">
              Apply Now
            </span>

            <h2 className="text-3xl md:text-4xl font-semibold leading-tight mb-8">
              Build systems that create opportunity.
            </h2>

            <p className="text-black/70 leading-relaxed mb-14 max-w-2xl">
              Submit your application to join a mission-driven organisation
              building inclusive pathways into Nigeria’s digital economy.
              Our team reviews applications on a rolling basis.
            </p>

            <Link
              href="https://forms.gle/dUnJHnvsafjvfZKx8"
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex items-center gap-4
                px-12 py-5
                rounded-2xl
                bg-[#5f3b86]
                text-white
                text-xs
                tracking-[0.35em]
                uppercase
                font-medium
                transition-all
                hover:bg-[#4e2f72]
              "
            >
              Open Job Application
              <ArrowRight size={16} />
            </Link>

            <p className="mt-6 text-xs text-black/50">
              Applications reviewed within 5–7 working days
            </p>
          </div>
        </div>
      </section>

    </main>
  );
}

/* ================= COMPONENT ================= */

function InfoCard({ icon: Icon, title, text }: any) {
  return (
    <div className="border-t border-black/10 pt-8">
      <Icon className="h-6 w-6 text-[#61abbb] mb-6" />
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
      <p className="text-black/70 leading-relaxed">{text}</p>
    </div>
  );
}