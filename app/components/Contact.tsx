"use client";

import { motion } from "framer-motion";
import { FiBarChart2, FiPieChart } from "react-icons/fi";
import { BsGraphUp } from "react-icons/bs";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="relative bg-[#05254c] py-24 px-6 overflow-hidden"
    >
      {/* Static Floating Icons */}
      <FiBarChart2 className="absolute top-10 left-10 text-[#0dce99]/20 w-12 h-12" />
      <FiPieChart className="absolute top-1/2 left-1/4 text-[#008dbb]/20 w-16 h-16" />
      <BsGraphUp className="absolute bottom-20 right-20 text-[#0dce99]/20 w-14 h-14" />
      <FiBarChart2 className="absolute bottom-1/3 right-1/4 text-[#008dbb]/20 w-10 h-10" />

      <div className="relative mx-auto flex flex-col md:flex-row gap-16 items-start max-w-7xl">
        {/* Left Side */}
        <motion.div
          className="flex-1"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
            Get in Touch
          </h2>
          <p className="text-gray-300 mb-8 leading-relaxed">
            Have a project in mind or need expert analytics advice? Let’s talk and explore how we can turn your data into actionable insights.
          </p>
          <button className="px-8 py-4 bg-[#0dce99] text-[#05254c] rounded-xl font-semibold text-lg hover:scale-105 transition transform">
            Book a Consultation
          </button>
        </motion.div>

        {/* Right Side */}
        <motion.div
          className="flex-1 text-gray-300 space-y-4"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl font-semibold text-white mb-2">Our Office</h3>
          <p>Lagos, Nigeria</p>
          <p>Email: hello@datacraft.com</p>
          <p>Phone: +234 800 123 4567</p>

          <div className="mt-6 border-l-4 border-[#0dce99] pl-4">
            <h4 className="font-semibold text-white">Office Hours</h4>
            <p>Mon - Fri: 9:00am - 6:00pm</p>
            <p>Sat: 10:00am - 3:00pm</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}