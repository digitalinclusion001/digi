"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  Rocket,
  Target,
  Users,
  Award,
  CheckCircle2,
  BarChart3,
  Calendar,
  ClipboardList,
  XCircle,
  Lightbulb,
  TrendingUp,
} from "lucide-react";
import { useEffect, useState } from "react";

function Counter({ value }: { value: number }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 1500;
    const step = Math.ceil(value / (duration / 20));

    const timer = setInterval(() => {
      start += step;
      if (start >= value) {
        start = value;
        clearInterval(timer);
      }
      setCount(start);
    }, 20);

    return () => clearInterval(timer);
  }, [value]);

  return <span>{count}</span>;
}

export default function WomenAccelerationPage() {
  return (
    <main className="bg-white overflow-hidden pt-28 md:pt-32">

      {/* HERO */}
      <section className="border-b border-black/5 pb-20">
        <div className="container mx-auto px-6 lg:max-w-screen-xl">

          <span className="text-[13px] tracking-[0.45em] uppercase text-[#5f3b86]">
            Digital Inclusion Initiative
          </span>

          <h1 className="text-[clamp(2.6rem,5vw,3.6rem)] font-semibold leading-tight mt-4 max-w-3xl">
            From{" "}
            <span className="bg-gradient-to-r from-[#5f3b86] via-[#61abbb] to-[#5f3b86] bg-clip-text text-transparent">
              Access to Ownership
            </span>
          </h1>

          <p className="text-lg mt-6 text-black/70 max-w-2xl">
            We are backing the next generation of digital-first,
            high-growth women founders in Nigeria.
          </p>

          <p className="mt-4 text-black/70 max-w-2xl">
            The DII Women Acceleration Programme is an 8-week intensive accelerator
            for ambitious women aged 18–30 building scalable digital businesses.
            One founder will receive a ₦500,000 non-dilutive grant.
          </p>

          <div className="flex gap-4 mt-8 flex-wrap">
            <Link
              href="https://forms.gle/MQDmGqz4rWAkYqDy6"
              target="_blank"
              className="px-7 py-4 bg-[#5f3b86] text-white rounded-xl text-xs tracking-[0.25em] uppercase flex items-center gap-2 hover:bg-[#4e2f72]"
            >
              Apply Now
              <ArrowRight size={14} />
            </Link>

            <Link
              href="#programme"
              className="px-7 py-4 border border-[#5f3b86] text-[#5f3b86] rounded-xl text-xs tracking-[0.25em] uppercase hover:bg-[#5f3b86] hover:text-white"
            >
              Learn More
            </Link>
          </div>

        </div>
      </section>

      {/* IMPACT COUNTER */}
      <section className="py-16 bg-[#f9fafb] border-b border-black/5">
        <div className="container mx-auto px-6 lg:max-w-screen-xl text-center">

          <p className="text-black/60 mb-10">
            Building digitally powerful women across Africa.
          </p>

          <div className="grid md:grid-cols-3 gap-10">

            <div>
              <p className="text-4xl font-semibold text-[#5f3b86]">
                <Counter value={500} />+
              </p>
              <p className="text-sm text-black/60 mt-2">Women trained</p>
            </div>

            <div>
              <p className="text-4xl font-semibold text-[#5f3b86]">
                <Counter value={300} />+
              </p>
              <p className="text-sm text-black/60 mt-2">Devices deployed</p>
            </div>

            <div>
              <p className="text-4xl font-semibold text-[#5f3b86]">
                <Counter value={120} />+
              </p>
              <p className="text-sm text-black/60 mt-2">Businesses launched</p>
            </div>

          </div>
        </div>
      </section>

      {/* WHY PROGRAMME */}
<section
  id="programme"
  className="
    py-28
    bg-gradient-to-br
    from-[#3c2460]
    via-[#5f3b86]
    to-[#7a55a3]
    text-white
    relative
    overflow-hidden
  "
>
  <div className="container mx-auto px-6 lg:max-w-screen-xl">

    {/* HEADER */}
    <div className="max-w-3xl mb-16">

      <h2 className="text-3xl md:text-4xl font-semibold mb-6">
        Why This Programme Exists
      </h2>

      <p className="text-white/80 leading-relaxed text-lg">
        Across Nigeria, young women are building bold ideas.
        Tech-enabled platforms. AI-powered services.
        Digital brands. Scalable solutions.
      </p>

      <p className="mt-6 text-white/80">
        But too often, they lack:
      </p>

    </div>

    {/* PROBLEM CARDS */}
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

      <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6">
        <div className="text-sm uppercase tracking-[0.3em] text-white/60 mb-3">
          01
        </div>
        <p className="font-medium">
          Structured guidance
        </p>
      </div>

      <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6">
        <div className="text-sm uppercase tracking-[0.3em] text-white/60 mb-3">
          02
        </div>
        <p className="font-medium">
          Strategic validation
        </p>
      </div>

      <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6">
        <div className="text-sm uppercase tracking-[0.3em] text-white/60 mb-3">
          03
        </div>
        <p className="font-medium">
          Capital readiness
        </p>
      </div>

      <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6">
        <div className="text-sm uppercase tracking-[0.3em] text-white/60 mb-3">
          04
        </div>
        <p className="font-medium">
          Growth infrastructure
        </p>
      </div>

    </div>

    {/* CLOSING MESSAGE */}
    <div className="max-w-3xl mt-16">

      <p className="text-white/90 font-medium text-lg">
        The DII Women Acceleration Programme exists to change that.
      </p>

      <p className="text-white/80 mt-4">
        We are not running a classroom.
        <br />
        We are building founders.
      </p>

    </div>

  </div>
</section>
      {/* WHO THIS IS FOR */}
      <section className="bg-[#f9fafb] py-24 border-y border-black/5">
        <div className="container mx-auto px-6 lg:max-w-screen-xl max-w-3xl">

          <h2 className="text-3xl font-semibold mb-8">
            Who This Is For
          </h2>

          <ul className="space-y-3 text-black/70">
            <li>✔ Are aged 18–30</li>
            <li>✔ Are based in Nigeria</li>
            <li>✔ Are building digital-first businesses</li>
            <li>✔ Have scalable ambitions</li>
            <li>✔ Are ready to commit to 8 weeks of focused growth</li>
          </ul>

          <p className="mt-8 text-black/70">
            We are looking for founders building:
          </p>

          <ul className="mt-4 space-y-2 text-black/70">
            <li>• SaaS products</li>
            <li>• Tech-enabled services</li>
            <li>• AI-powered solutions</li>
            <li>• E-commerce brands with scalable models</li>
            <li>• Digital platforms</li>
            <li>• EdTech, FinTech, HealthTech innovations</li>
          </ul>

          <p className="mt-8 text-black/70">
            This is not suitable for:
          </p>

          <ul className="mt-4 space-y-2 text-black/70">
            <li>❌ Offline-only businesses</li>
            <li>❌ Lifestyle or hobby ventures</li>
            <li>❌ Informal small-scale trading</li>
          </ul>

          <p className="mt-6 text-black/80 font-medium">
            We are backing growth-oriented founders.
          </p>

        </div>
      </section>

      {/* WHAT YOU WILL GAIN */}
      <section className="py-24">
        <div className="container mx-auto px-6 lg:max-w-screen-xl">

          <h2 className="text-3xl font-semibold text-center mb-16">
            What You Will Gain
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

            {[
              "Structured startup curriculum",
              "Market validation frameworks",
              "Business model clarity",
              "Revenue strategy development",
              "Financial projection guidance",
              "Pitch training",
              "Access to mentors",
              "Visibility within the DII ecosystem",
            ].map((item, i) => (
              <div
                key={i}
                className="border border-black/10 rounded-xl p-8 hover:border-[#5f3b86]/40 transition"
              >
                <CheckCircle2 className="text-[#5f3b86]" size={24} />
                <p className="mt-4 text-black/80">{item}</p>
              </div>
            ))}

          </div>

          <div className="max-w-3xl mx-auto mt-16 text-center text-black/70">

            <p>By the end of the programme, you will have:</p>

            <ul className="mt-6 space-y-2">
              <li>• A validated problem-solution fit</li>
              <li>• A defined scalable business model</li>
              <li>• A structured growth roadmap</li>
              <li>• A fund-ready pitch deck</li>
            </ul>

          </div>

        </div>
      </section>

      {/* ================= 8 WEEK TIMELINE ================= */}
<section
  className="
  py-28
  bg-gradient-to-br
  from-[#3c2460]
  via-[#5f3b86]
  to-[#7a55a3]
  text-white
  relative
  overflow-hidden
"
>
  <div className="container mx-auto px-6 lg:max-w-screen-xl">

    {/* Header */}
    <div className="text-center max-w-2xl mx-auto mb-20">
      <h2 className="text-3xl md:text-4xl font-semibold mb-6">
        The 8-Week Journey
      </h2>

      <p className="text-white/80">
        A structured accelerator designed to guide founders from
        problem clarity to investor-ready business models.
      </p>
    </div>

    {/* Timeline Grid */}
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

      {[
        { icon: Lightbulb, text: "Founder Vision & Problem Clarity" },
        { icon: Target, text: "Market Validation & Competitive Positioning" },
        { icon: Rocket, text: "MVP & Product Strategy" },
        { icon: TrendingUp, text: "Digital Growth Infrastructure" },
        { icon: BarChart3, text: "Revenue Model & Unit Economics" },
        { icon: ClipboardList, text: "Financial Planning & Capital Readiness" },
        { icon: Users, text: "Pitch Development & Storytelling" },
        { icon: Award, text: "Demo Day & Grant Award" },
      ].map((week, i) => {
        const Icon = week.icon;

        return (
          <div
            key={i}
            className="
            bg-white/10
            backdrop-blur-md
            border border-white/20
            p-7
            rounded-2xl
            transition
            hover:bg-white/15
            hover:-translate-y-1
          "
          >
            {/* Week label */}
            <span className="text-xs tracking-[0.35em] text-white/70">
              WEEK {i + 1}
            </span>

            {/* Icon */}
            <div className="mt-4 mb-4">
              <Icon className="text-white" size={24} />
            </div>

            {/* Text */}
            <p className="text-white/90">
              {week.text}
            </p>
          </div>
        );
      })}

    </div>

  </div>
</section>
      {/* GRANT SECTION */}
      <section className="py-24 text-center">
        <div className="container mx-auto px-6 lg:max-w-screen-xl max-w-2xl">

          <Award className="mx-auto text-[#5f3b86]" size={40} />

          <h2 className="text-3xl font-semibold mt-6">
            The Grant Opportunity
          </h2>

          <p className="mt-6 text-black/70">
            At the final Demo Day: One founder will receive ₦500,000
            to accelerate her business.
          </p>

          <p className="mt-4 text-black/70">
            This is a non-dilutive grant. No equity. No repayment.
          </p>

          <p className="mt-4 text-black/70">
            The top finalists will also receive mentorship and visibility support.
          </p>

        </div>
      </section>

      {/* ================= SELECTION PROCESS ================= */}
<section className="py-28 bg-[#f9fafb] border-y border-black/5">
  <div className="container mx-auto px-6 lg:max-w-screen-xl">

    {/* Header */}
    <div className="max-w-3xl mb-16">
      <h2 className="text-3xl md:text-4xl font-semibold mb-6">
        Selection Process
      </h2>

      <p className="text-black/70 leading-relaxed">
        We carefully review each application to identify founders with strong
        potential to build scalable digital businesses.
      </p>
    </div>

    {/* Timeline */}
    <div className="relative">

      {/* Vertical Line */}
      <div className="absolute left-5 top-0 bottom-0 w-px bg-[#5f3b86]/20" />

      <div className="space-y-12">

        {/* Step 1 */}
        <div className="flex gap-6 items-start">
          <div className="relative z-10 flex items-center justify-center w-10 h-10 rounded-full bg-[#5f3b86] text-white">
            <ClipboardList size={18} />
          </div>

          <div className="bg-white border border-black/10 rounded-xl p-6 w-full">
            <p className="text-xs tracking-[0.35em] text-[#5f3b86] mb-2">
              STEP 1
            </p>
            <h3 className="font-semibold text-lg">
              Online Application
            </h3>
            <p className="text-black/70 mt-2">
              Founders submit their applications through the official
              programme application form.
            </p>
          </div>
        </div>

        {/* Step 2 */}
        <div className="flex gap-6 items-start">
          <div className="relative z-10 flex items-center justify-center w-10 h-10 rounded-full bg-[#5f3b86] text-white">
            <CheckCircle2 size={18} />
          </div>

          <div className="bg-white border border-black/10 rounded-xl p-6 w-full">
            <p className="text-xs tracking-[0.35em] text-[#5f3b86] mb-2">
              STEP 2
            </p>
            <h3 className="font-semibold text-lg">
              Shortlisting
            </h3>
            <p className="text-black/70 mt-2">
              Our team reviews submissions and identifies promising founders
              with strong digital business potential.
            </p>
          </div>
        </div>

        {/* Step 3 */}
        <div className="flex gap-6 items-start">
          <div className="relative z-10 flex items-center justify-center w-10 h-10 rounded-full bg-[#5f3b86] text-white">
            <Users size={18} />
          </div>

          <div className="bg-white border border-black/10 rounded-xl p-6 w-full">
            <p className="text-xs tracking-[0.35em] text-[#5f3b86] mb-2">
              STEP 3
            </p>
            <h3 className="font-semibold text-lg">
              Virtual Interview
            </h3>
            <p className="text-black/70 mt-2">
              Shortlisted founders participate in interviews to discuss
              their ideas, vision, and scalability potential.
            </p>
          </div>
        </div>

        {/* Step 4 */}
        <div className="flex gap-6 items-start">
          <div className="relative z-10 flex items-center justify-center w-10 h-10 rounded-full bg-[#5f3b86] text-white">
            <Award size={18} />
          </div>

          <div className="bg-white border border-black/10 rounded-xl p-6 w-full">
            <p className="text-xs tracking-[0.35em] text-[#5f3b86] mb-2">
              STEP 4
            </p>
            <h3 className="font-semibold text-lg">
              Final Cohort Selection (15–20 founders)
            </h3>
            <p className="text-black/70 mt-2">
              Selected founders join the programme cohort and begin the
              8-week acceleration journey.
            </p>
          </div>
        </div>

      </div>
    </div>

    {/* Selection Criteria */}
    <div className="mt-20">

      <h3 className="text-xl font-semibold mb-8 text-black">
        We are selecting founders with:
      </h3>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

        <div className="bg-white border border-black/10 rounded-xl p-6">
          <p className="font-medium">Clear problem definition</p>
        </div>

        <div className="bg-white border border-black/10 rounded-xl p-6">
          <p className="font-medium">Large market potential</p>
        </div>

        <div className="bg-white border border-black/10 rounded-xl p-6">
          <p className="font-medium">Scalability opportunity</p>
        </div>

        <div className="bg-white border border-black/10 rounded-xl p-6">
          <p className="font-medium">Strong commitment</p>
        </div>

        <div className="bg-white border border-black/10 rounded-xl p-6">
          <p className="font-medium">Coachability and ambition</p>
        </div>

      </div>

    </div>

  </div>
</section>

{/* ================= PROGRAMME COMMITMENT ================= */}
<section className="py-28 bg-white border-t border-black/5">
  <div className="container mx-auto px-6 lg:max-w-screen-xl">

    {/* Header */}
    <div className="max-w-3xl mb-16">
      <h2 className="text-3xl md:text-4xl font-semibold mb-6">
        Programme Commitment
      </h2>

      <p className="text-black/70 leading-relaxed text-lg">
        This is an intensive accelerator.
      </p>

      <p className="text-black/70 mt-3">
        Participants must:
      </p>
    </div>

    {/* Commitment Requirements */}
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

      {/* Weekly Sessions */}
      <div className="border border-black/10 rounded-2xl p-8 hover:border-[#5f3b86]/40 transition bg-white">
        <Calendar className="text-[#5f3b86]" size={26} />
        <p className="mt-4 text-black/80 font-medium">
          Attend weekly live sessions
        </p>
      </div>

      {/* Assignments */}
      <div className="border border-black/10 rounded-2xl p-8 hover:border-[#5f3b86]/40 transition bg-white">
        <ClipboardList className="text-[#5f3b86]" size={26} />
        <p className="mt-4 text-black/80 font-medium">
          Complete assignments
        </p>
      </div>

      {/* Mentoring */}
      <div className="border border-black/10 rounded-2xl p-8 hover:border-[#5f3b86]/40 transition bg-white">
        <Users className="text-[#5f3b86]" size={26} />
        <p className="mt-4 text-black/80 font-medium">
          Participate in mentoring
        </p>
      </div>

      {/* Demo Day */}
      <div className="border border-black/10 rounded-2xl p-8 hover:border-[#5f3b86]/40 transition bg-white">
        <Award className="text-[#5f3b86]" size={26} />
        <p className="mt-4 text-black/80 font-medium">
          Present at Demo Day
        </p>
      </div>

    </div>

    {/* Attendance Notice */}
    <div className="mt-12 border border-[#5f3b86]/20 bg-[#f9f6fc] rounded-xl p-6 max-w-3xl">

      <p className="text-black/80 font-medium">
        Attendance is mandatory.
      </p>

    </div>

    {/* Applications Open */}
    <div className="mt-16 border border-[#5f3b86]/30 bg-[#5f3b86] text-white rounded-2xl p-10 max-w-3xl">

      <p className="text-sm tracking-[0.35em] uppercase opacity-80 mb-3">
        Applications Open
      </p>

      <p className="text-2xl font-semibold">
        March 9
      </p>

      <p className="mt-3 text-white/80">
        Applications for the DII Women Acceleration Programme officially
        open on March 9 in celebration of International Women’s Day.
      </p>

    </div>

  </div>
</section>

      {/* FINAL CTA */}
      <section className="py-28 bg-[#5f3b86] text-white text-center">

        <h2 className="text-3xl font-semibold mb-4">
          If you are building the future, this is your moment.
        </h2>

        <p className="opacity-80 mb-8">
          Apply now and step into ownership.
        </p>

        <Link
          href="https://forms.gle/MQDmGqz4rWAkYqDy6"
          target="_blank"
          className="inline-flex items-center gap-3 px-8 py-4 bg-white text-[#5f3b86] rounded-xl text-xs tracking-[0.25em] uppercase"
        >
          Apply Now
          <ArrowRight size={14} />
        </Link>

      </section>

    </main>
  );
}