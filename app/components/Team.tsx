"use client";

import { motion } from "framer-motion";
import Button from "./Button";

export default function TeamSection() {
  const leadership = [
    "Leads project design, analytical frameworks, and client engagement, ensuring all work is grounded in rigorous methodology and aligned with client needs.",
  ];

  const team = [
    {
      title: "Data Analysts",
      desc: "Support data cleaning, analysis, and visualization, translating data into actionable insights.",
    },
    {
      title: "Field Teams",
      desc: "Conduct quantitative and qualitative data collection using standardized and technology-enabled tools.",
    },
    {
      title: "Research & M&E Specialists",
      desc: "Provide expertise in study design, monitoring, evaluation, and learning systems.",
    },
  ];

  const clients = [
    "Governments and public sector institutions",
    "NGOs and development partners",
    "Academic and research institutions",
  ];

  return (
    <section id="team" className="relative bg-[#05254c] text-white py-32 px-6 overflow-hidden">

      {/* Glow */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-[#0dce99]/20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#008dbb]/20 blur-3xl rounded-full"></div>
      <div className="absolute top-6 left-1/2 -translate-x-1/2">
        <p className=" border-2 border-solid text-white/20 px-6 py-2 rounded-full text-sm font-semibold tracking-wide select-none pointer-events-none">
          Team
        </p>
      </div>
      <div className="max-w-6xl mx-auto space-y-24">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <p className="text-[#0dce99] font-semibold tracking-widest uppercase">
            Meet the Team
          </p>

          <h2 className="text-4xl md:text-5xl font-extrabold mt-4">
            Expert-Led.{" "}
            <span className="bg-gradient-to-r from-[#0dce99] to-[#008dbb] bg-clip-text text-transparent">
              Field-Driven.
            </span>
          </h2>

          <p className="text-gray-300 mt-6">
            We combine in-house leadership with a trusted network of analysts,
            researchers, and field professionals—allowing us to stay agile while
            delivering high-quality, context-specific insights.
          </p>
        </motion.div>

        {/* LEADERSHIP */}
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h3 className="text-2xl font-semibold">Leadership</h3>

          <p className="text-gray-300">
            <span className="font-semibold text-white">
              Founder / Lead Consultant —
            </span>{" "}
            {leadership[0]}
          </p>
        </div>

        {/* TEAM GRID */}
        <div className="grid md:grid-cols-3 gap-8">
          {team.map((member, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15 }}
              viewport={{ once: true }}
              className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur hover:scale-[1.02] transition"
            >
              <h4 className="text-lg font-semibold mb-3 text-[#0dce99]">
                {member.title}
              </h4>

              <p className="text-gray-300 text-sm leading-relaxed">
                {member.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* WHO WE WORK WITH */}
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h3 className="text-2xl font-semibold">Who We Work With</h3>

          <div className="flex flex-wrap justify-center gap-4">
            {clients.map((item, i) => (
              <span
                key={i}
                className="px-5 py-2 rounded-full bg-white/5 border border-white/10 text-gray-300 text-sm"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center space-y-6 max-w-2xl mx-auto">
          <h3 className="text-3xl font-semibold">
            Ready to turn your data into impact?
          </h3>

          <p className="text-gray-300">
            Let’s work together to generate insights that drive better decisions.
          </p>

          <div className="flex justify-center gap-4">
            <Button label="Get in Touch" />
            <Button label="Request a Consultation" />
          </div>
        </div>

      </div>
    </section>
  );
}