"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState<string>("");
  const [isOpen, setIsOpen] = useState(false);
  const sectionIds = ["about", "services", "team", "contact"];
  const offset = 80;

  // Scrollspy logic
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
    setIsOpen(false); // close mobile menu
  };

  const navLinks = [
    { label: "About Us", id: "about" },
    { label: "What We Do", id: "services" },
    { label: "Team", id: "team" },
    { label: "How We Work", id: "Work" },
    { label: "Mission & Vision", id: "Mission" },
  ];

  const linkClass = (id: string) =>
    `relative cursor-pointer transition px-3 py-1 ${activeSection === id
      ? "text-[#0dce99] font-semibold"
      : "text-gray-300 hover:text-white"
    }`;

  return (
    <nav className="fixed w-full bg-[#05254c]/80 backdrop-blur-md z-50">
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center h-20">
        {/* Logo */}
        <div className="text-2xl font-bold bg-gradient-to-r from-[#0dce99] to-[#008dbb] bg-clip-text text-transparent cursor-pointer">
          DataCraft
        </div>

        {/* Desktop Links */}
        <ul className="hidden md:flex gap-6 items-center">
          {navLinks.map((link) => (
            <li
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className={linkClass(link.id)}
            >
              {link.label}
              {activeSection === link.id && (
                <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-[#0dce99] rounded-full"></span>
              )}
            </li>
          ))}
        </ul>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex flex-col gap-1 w-6 h-6 justify-center items-center"
          >
            <span
              className={`block h-[2px] w-full bg-white transition-all ${isOpen ? "rotate-45 translate-y-2" : ""
                }`}
            ></span>
            <span
              className={`block h-[2px] w-full bg-white transition-all ${isOpen ? "opacity-0" : ""
                }`}
            ></span>
            <span
              className={`block h-[2px] w-full bg-white transition-all ${isOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
            ></span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.ul
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden flex flex-col gap-4 items-center py-6 bg-[#05254c]/90 backdrop-blur-md"
        >
          {navLinks.map((link) => (
            <li
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className={linkClass(link.id)}
            >
              {link.label}
            </li>
          ))}
        </motion.ul>
      )}
    </nav>
  );
}