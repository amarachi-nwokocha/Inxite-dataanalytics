"use client";

import { motion } from "framer-motion";
import { BarChart3, Target, ShieldCheck, Lightbulb } from "lucide-react";

export default function AboutSectionRefined() {
  const textItems = [
    {
      type: "label",
      content: "ABOUT US",
    },
    {
      type: "heading",
      content: (
        <>
          Turning Data Into{" "}
          <span className="bg-gradient-to-r from-[#0dce99] to-[#008dbb] bg-clip-text text-transparent">
            Real Business Impact
          </span>
        </>
      ),
    },
    {
      type: "body",
      content:
        "We don’t just analyze data — we translate it into clear, strategic decisions that drive measurable growth.",
    },
  ];

  const cards = [
    {
      icon: <BarChart3 className="text-[#0dce99]" size={32} />,
      title: "Data Clarity",
      desc: "We break down complex data into insights you can actually use.",
    },
    {
      icon: <Target className="text-[#008dbb]" size={32} />,
      title: "Strategic Focus",
      desc: "Every insight is tied directly to your business goals.",
    },
    {
      icon: <ShieldCheck className="text-[#0dce99]" size={32} />,
      title: "Reliable Process",
      desc: "Structured workflows that ensure accuracy and consistency.",
    },
    {
      icon: <Lightbulb className="text-[#008dbb]" size={32} />,
      title: "Growth Opportunities",
      desc: "We uncover hidden opportunities that drive real results.",
    },
  ];

  return (
    <section id="about" className="relative bg-[#05254c] text-white py-32 px-6 overflow-hidden">

  {/* Glow */}
  <div className="absolute top-0 left-0 w-80 h-80 bg-[#008dbb]/20 blur-3xl rounded-full"></div>
  <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#0dce99]/20 blur-3xl rounded-full"></div>
 <div className="absolute top-6 left-1/2 -translate-x-1/2">
      <p className="border border-2 border-solid text-white/20 px-6 py-2 rounded-full text-sm font-semibold tracking-wide select-none pointer-events-none">
        ABOUT US
      </p>
    </div>
  <div className="relative max-w-7xl mx-auto">

    {/* Faded Section Label */}
   

    <div className="flex flex-col md:flex-row gap-16 items-start">

      {/* LEFT SIDE */}
      <div className="md:w-[35%] space-y-6">
       <div className="space-y-6">
  {textItems.map((item, i) => (
    <motion.div
      key={i}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
      }}
      viewport={{ once: true }}
    >
      {item.type === "label" && (
        <p className="text-[#0dce99] font-semibold tracking-wide">
          {item.content}
        </p>
      )}

      {item.type === "heading" && (
        <h2 className="text-3xl md:text-5xl font-extrabold leading-tight tracking-tight">
          {item.content}
        </h2>
      )}

      {item.type === "body" && (
        <p className="text-gray-300 text-lg">
          {item.content}
        </p>
      )}
    </motion.div>
  ))}
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{
      opacity: 1,
      y: 0,
      transition: { delay: textItems.length * 0.2, duration: 0.6 },
    }}
    viewport={{ once: true }}
    className="flex justify-center gap-4 pt-4"
  >
    <button className="px-7 py-3 bg-[#0dce99] text-[#05254c] rounded-xl font-semibold hover:scale-105 transition">
      Work With Us
    </button>
  </motion.div>
</div>
      </div>

      {/* RIGHT SIDE (Cards) */}
      <div className="md:w-[65%] grid sm:grid-cols-2 gap-8">
        {cards.map((card, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
            }}
            viewport={{ once: true }}
            whileHover={{ y: -10, scale: 1.03 }}
            className="group relative p-10 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 transition"
          >
            <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition bg-gradient-to-r from-[#0dce99]/10 to-[#008dbb]/10 blur-xl"></div>
            <div className="relative z-10">
              <div className="mb-6">{card.icon}</div>
              <h3 className="text-2xl font-semibold mb-4">{card.title}</h3>
              <p className="text-gray-400 leading-relaxed">{card.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </div>
</section>
  );
}