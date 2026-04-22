"use client";

import { motion } from "framer-motion";
import {
  BarChart3,
  Database,
  ClipboardList,
  Users,
  Cpu,
  Stethoscope,
} from "lucide-react";

export default function WhatWeDoModern() {
  const services = [
    {
      icon: <BarChart3 className="text-[#0dce99]" size={28} />,
      title: "Field Data Collection & Local Research",
      desc: "We collect reliable, decision-ready data using trained local teams who understand on-the-ground realities. From surveys to service delivery assessments, we deliver high-quality datasets you can trust.",
    },
    {
      icon: <Database className="text-[#008dbb]" size={28} />,
      title: "Data Analysis & Insight Generation",
      desc: "We transform raw data into actionable insights through analytics, dashboards, and clear data storytelling that supports evidence-based decisions.",
    },
    {
      icon: <ClipboardList className="text-[#0dce99]" size={28} />,
      title: "Research & M&E Advisory",
      desc: "End-to-end support from study design and tool development to data analysis, monitoring, evaluation, and reporting.",
    },
    {
      icon: <Users className="text-[#008dbb]" size={28} />,
      title: "Capacity Strengthening",
      desc: "We build the capabilities of organizations and field teams to collect, analyze, and use data effectively for decision-making.",
    },
    {
      icon: <Cpu className="text-[#0dce99]" size={28} />,
      title: "Data Intelligence Platform",
      badge: "Coming Soon",
      desc: "A tech-enabled analytics platform with interactive dashboards and predictive insights for program managers and researchers.",
    },
    {
      icon: <Stethoscope className="text-[#008dbb]" size={28} />,
      title: "Technical Assistance ",
      badge: "Coming Soon",
      desc: "We support health system strengthening through program reviews, strategy development, and technical advisory services.",
    },
  ];

  return (
    <section id="services" className="relative bg-[#05254c] text-white py-32 px-6 overflow-hidden">

      {/* Section Label */}
      <div className="absolute top-6 left-1/2 -translate-x-1/2">
        <p className="border border-white/10 text-white/30 px-6 py-2 rounded-full text-sm font-semibold tracking-wide">
          WHAT WE DO
        </p>
      </div>

      {/* Heading */}
      <motion.div
        className="relative max-w-4xl mx-auto text-center space-y-6 z-10"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl md:text-5xl font-extrabold bg-linear-to-r from-[#0dce99] to-[#008dbb] bg-clip-text text-transparent">
          End-to-End Data Services Built for Real-World Impact
        </h2>

        <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto">
          We combine field expertise, analytics, and technology to deliver reliable
          data services that support evidence-based decision-making across sectors.
        </p>
      </motion.div>

      {/* Service Grid */}
      <div className="relative max-w-6xl mx-auto mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

        {services.map((service, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { delay: i * 0.1, duration: 0.6 },
            }}
            viewport={{ once: true }}
            whileHover={{ y: -8, scale: 1.03 }}
            className="relative p-8 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10"
          >
            {/* Icon */}
            <div className="mb-4">{service.icon}

            </div>

            {/* Title + Badge */}
            <div className="">
              <h3 className="text-lg font-semibold leading-tight">
                {service.title}
                {service.badge && (
                  <p className="text-[12px] px-2 mb-4 py-1 w-fit rounded-full bg-white/10 text-white/60 border border-white/10">
                    {service.badge}
                  </p>
                )}
              </h3>


            </div>

            {/* Description */}
            <p className="text-gray-400 text-sm leading-relaxed">
              {service.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}