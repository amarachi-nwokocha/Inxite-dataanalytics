"use client";

import { motion } from "framer-motion";
import { FaLinkedin, FaTwitter } from "react-icons/fa";
import { useEffect, useState } from "react";

export default function Footer() {
  // --- Scrollspy logic ---
  const [activeSection, setActiveSection] = useState<string>("");

  const sectionIds = ["about", "services", "team", "contact"];
  const offset = 80; // adjust for sticky header

  useEffect(() => {
    const handleScroll = () => {
      let current = "";
      sectionIds.forEach((id) => {
        const el = document.getElementById(id);
        if (!el) return;
        const top = el.offsetTop - offset;
        const height = el.offsetHeight;
        if (window.scrollY >= top && window.scrollY < top + height) {
          current = id;
        }
      });
      setActiveSection(current);
    };

    handleScroll(); // run on mount
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;

    const top = el.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: "smooth" });
  };

  const linkClass = (id: string) =>
    `transition relative cursor-pointer ${activeSection === id
      ? "text-[#0dce99] font-semibold"
      : "text-gray-400 hover:text-white"
    }`;

  return (
    <footer className="relative bg-[#05254c] text-white pt-24 pb-10 px-6 overflow-hidden">
      {/* Glow Background */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-[#0dce99]/10 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#008dbb]/10 blur-3xl rounded-full"></div>

      <div className="relative max-w-7xl mx-auto border-t border-white/10 pt-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold bg-gradient-to-r from-[#0dce99] to-[#008dbb] bg-clip-text text-transparent">
              Inxite-Data Analytics
            </h2>
            <p className="text-gray-400 mt-4 leading-relaxed">
              Turning raw data into meaningful insights that drive smarter business decisions.
            </p>

            {/* Socials */}
            <div className="flex gap-4 mt-6">
              <a
                href="#"
                target="_blank"
                className="group relative p-3 rounded-full bg-white/5 border border-white/10 backdrop-blur-xl transition-all duration-300 hover:scale-110"
              >
                <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition bg-[#0A66C2]/20 blur-xl"></div>
                <FaLinkedin
                  size={18}
                  className="relative z-10 text-gray-300 group-hover:text-[#0A66C2] transition"
                />
              </a>

              <a
                href="#"
                target="_blank"
                className="group relative p-3 rounded-full bg-white/5 border border-white/10 backdrop-blur-xl transition-all duration-300 hover:scale-110"
              >
                <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition bg-[#1DA1F2]/20 blur-xl"></div>
                <FaTwitter
                  size={18}
                  className="relative z-10 text-gray-300 group-hover:text-[#1DA1F2] transition"
                />
              </a>
            </div>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-gray-400">
              {["Analytics", "Dashboards", "Data Integration", "Reporting"].map(
                (item, i) => (
                  <li
                    key={i}
                    onClick={() => scrollToSection("services")}
                    className={linkClass("services")}
                  >
                    {item}
                  </li>
                )
              )}
            </ul>
          </motion.div>

          {/* Company */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-gray-400">
              {["About Us", "What We Do", "Team", "How We Work", "Mission & Vision"].map((item, i) => {
                const id = item === "About Us" ? "about" : item === "What We Do" ? "services" : item === "How We Work" ? "Work" : item === "Mission & Vision" ? "Mission" : "team";
                return (
                  <li key={i} onClick={() => scrollToSection(id)} className={linkClass(id)}>
                    {item}
                  </li>
                );
              })}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-3 text-gray-400">
              <li>hello@datacraft.com</li>
              <li>Abuja, Nigeria</li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom */}
        <div className="mt-16 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()}  Inxite-Data Analytics. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}