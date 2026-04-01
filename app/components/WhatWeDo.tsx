"use client";

import { motion } from "framer-motion";
import { BarChart3, PieChart, Users, Zap } from "lucide-react";

export default function WhatWeDoModern() {
  const services = [
    {
      icon: <BarChart3 className="text-[#0dce99]" size={28} />,
      title: "Advanced Analytics",
    },
    {
      icon: <PieChart className="text-[#008dbb]" size={28} />,
      title: "Customer Insights",
    },
    {
      icon: <Users className="text-[#0dce99]" size={28} />,
      title: "Data Integration",
    },
    {
      icon: <Zap className="text-[#008dbb]" size={28} />,
      title: "Automated Reporting",
    },
  ];

  const floatingIcons = [
    { icon: <BarChart3 className="text-[#0dce99]" size={24} />, x: 20, y: 10, rotate: -15 },
    { icon: <PieChart className="text-[#008dbb]" size={24} />, x: -30, y: 50, rotate: 10 },
    { icon: <Users className="text-[#0dce99]" size={20} />, x: 40, y: 70, rotate: -5 },
    { icon: <Zap className="text-[#008dbb]" size={20} />, x: -50, y: -20, rotate: 20 },
  ];

  return (
    <section id="services" className="relative bg-[#05254c] text-white py-32 px-6 overflow-hidden">

      {/* Section Label */}
      <div className="absolute top-6 left-1/2 -translate-x-1/2">
        <p className="border border-2 border-solid text-white/20 px-6 py-2 rounded-full text-sm font-semibold tracking-wide select-none pointer-events-none">
          WHAT WE DO
        </p>
      </div>

      {/* Floating Background Icons */}
      {floatingIcons.map((item, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.3, scale: 1, rotate: item.rotate }}
          transition={{ delay: i * 0.3, duration: 1.2, repeat: Infinity, repeatType: "mirror" }}
          className="absolute"
          style={{ left: `${item.x}%`, top: `${item.y}%` }}
        >
          {item.icon}
        </motion.div>
      ))}

      {/* Main Heading */}
      <motion.div
        className="relative max-w-4xl mx-auto text-center space-y-6 z-10"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-[#0dce99] to-[#008dbb] bg-clip-text text-transparent">
          Transforming Data Into Actionable Insights
        </h2>
        <p className="text-gray-300 text-lg md:text-xl">
          We provide creative, modern analytics solutions that empower your business decisions.
        </p>
      </motion.div>

      {/* Floating Service Cards */}
      <div className="relative max-w-7xl mx-auto mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 50, rotate: -3 + i }}
            whileInView={{ opacity: 1, y: 0, rotate: 0 }}
            transition={{ delay: i * 0.2, duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            whileHover={{ y: -10, scale: 1.05 }}
            className="relative p-8 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 text-center shadow-lg"
          >
            <div className="mb-4 flex justify-center">{service.icon}</div>
            <h3 className="text-xl font-semibold">{service.title}</h3>
          </motion.div>
        ))}
      </div>
    </section>
  );
}