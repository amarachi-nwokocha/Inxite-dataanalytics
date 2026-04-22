"use client";

import {
  BarChart3,
  LineChart,
  PieChart,
  Activity,
  TrendingUp,
  Database,
  BarChartBig,
  ScatterChart,
} from "lucide-react";
import { motion } from "framer-motion";
import Button from "./Button";

export default function HeroDenseIcons() {

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: {
      opacity: 0,
      y: 30,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.8, 0.25, 1] as const// smooth, premium easing
      },
    },
  };

  return (
    <section className="relative bg-[#05254c] text-white overflow-hidden py-36 px-6 text-center">

      {/* Glow */}
      <div className="absolute -top-30 left-1/2 -translate-x-1/2 w-[650px] h-[650px] bg-[#0dce99]/20 blur-3xl rounded-full"></div>

      {/* CONTENT */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative max-w-4xl mx-auto z-10"
      >

        {/* HEADLINE */}
        <motion.h1
          variants={item}
          className="text-5xl md:text-7xl font-extrabold tracking-tight leading-tight mb-6"
        >
          <span className="bg-gradient-to-r from-[#0dce99] to-[#008dbb] bg-clip-text text-transparent">
            Making Data Accessible. Driving Decisions That Matter.
          </span>
        </motion.h1>

        {/* SUBTEXT */}
        <motion.p
          variants={item}
          className="text-gray-300 text-lg md:text-xl mb-10 max-w-2xl mx-auto"
        >
          At Inxite Data, we bridge the gap between grassroots data and impactful decision-making,
          delivering high-quality, locally grounded data and insights for governments,
          researchers, and development partners.
        </motion.p>

        {/* CTA */}
        <motion.div
          variants={item}
          className="flex justify-center gap-4"
        >

          <Button label="Work With Us" />
          <button className="px-7 py-3 border border-white/30 rounded-xl hover:bg-white/10 transition">
            Request a Consultation
          </button>
        </motion.div>

      </motion.div>

      {/* ICON FIELD (unchanged) */}
      <div className="pointer-events-none">

        <div className="absolute top-[30%] left-[18%] bg-white/10 p-3 rounded-xl backdrop-blur">
          <BarChart3 className="text-[#0dce99]" size={22} />
        </div>

        <div className="absolute top-[28%] right-[18%] bg-white/10 p-3 rounded-xl backdrop-blur">
          <LineChart className="text-[#008dbb]" size={22} />
        </div>

        <div className="absolute bottom-[28%] left-[25%] bg-white/10 p-3 rounded-xl backdrop-blur">
          <PieChart className="text-[#0dce99]" size={22} />
        </div>

        <div className="absolute bottom-[26%] right-[25%] bg-white/10 p-3 rounded-xl backdrop-blur">
          <Activity className="text-[#008dbb]" size={22} />
        </div>

        <div className="absolute top-[15%] left-[30%] opacity-70">
          <TrendingUp className="text-[#0dce99]" size={26} />
        </div>

        <div className="absolute top-[18%] right-[30%] opacity-70">
          <Database className="text-[#008dbb]" size={26} />
        </div>

        <div className="absolute bottom-[15%] left-[35%] opacity-70">
          <BarChartBig className="text-[#0dce99]" size={26} />
        </div>

        <div className="absolute bottom-[12%] right-[35%] opacity-70">
          <ScatterChart className="text-[#008dbb]" size={26} />
        </div>

        <div className="absolute top-[10%] left-[10%] opacity-20">
          <PieChart size={40} />
        </div>

        <div className="absolute top-[12%] right-[10%] opacity-20">
          <BarChart3 size={40} />
        </div>

        <div className="absolute bottom-[10%] left-[12%] opacity-20">
          <LineChart size={40} />
        </div>

        <div className="absolute bottom-[8%] right-[12%] opacity-20">
          <Activity size={40} />
        </div>

      </div>
    </section>
  );
}