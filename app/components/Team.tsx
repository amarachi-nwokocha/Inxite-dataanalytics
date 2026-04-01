"use client";

import { motion } from "framer-motion";

const teamMembers = [
  {
    name: "Amara Nwokocha",
    role: "Frontend Developer",
    photo: "/hero.jpg",
    social: { linkedin: "#", twitter: "#" },
  },
  {
    name: "Tunde Adeyemi",
    role: "Data Analyst",
    photo: "/hero2.jpg",
    social: { linkedin: "#", twitter: "#" },
  },
  {
    name: "Chioma Eze",
    role: "UX/UI Designer",
    photo: "/hero.jpg",
    social: { linkedin: "#", twitter: "#" },
  },
  {
    name: "David Okeke",
    role: "Backend Developer",
    photo: "/hero2.jpg",
    social: { linkedin: "#", twitter: "#" },
  },
];

export default function MeetTheTeam() {
  return (
    <section id="team" className="relative bg-[#05254c] text-white py-32 px-6 overflow-hidden">

      {/* Section Label */}
      <div className="absolute top-6 left-1/2 -translate-x-1/2">
        <p className="border border-2 border-solid text-white/20 px-6 py-2 rounded-full text-sm font-semibold tracking-wide select-none pointer-events-none">
          MEET THE TEAM
        </p>
      </div>

      {/* Heading + Subtext */}
      <motion.div
        className="relative max-w-4xl mx-auto text-center space-y-4 mb-16 z-10"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-[#0dce99] to-[#008dbb] bg-clip-text text-transparent">
          The Minds Behind Our Work
        </h2>
        <p className="text-gray-300 text-lg md:text-xl">
          Meet the talented individuals who drive our analytics and digital solutions forward.
        </p>
      </motion.div>

      {/* Team Grid */}
      <div className="relative max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
        {teamMembers.map((member, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2, duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            whileHover={{ y: -10, scale: 1.03 }}
            className="group relative p-6 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 text-center cursor-pointer transition-shadow"
          >
            <div className="relative w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-2 border-white/20">
              <img
                src={member.photo}
                alt={member.name}
                className="w-full h-full object-cover transition-transform group-hover:scale-105"
              />
            </div>
            <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
            <p className="text-gray-400 mb-4">{member.role}</p>

            {/* Optional hover social links */}
            <div className="flex justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity">
              {member.social.linkedin && (
                <a href={member.social.linkedin} target="_blank" className="text-[#0dce99]">
                  LinkedIn
                </a>
              )}
              {member.social.twitter && (
                <a href={member.social.twitter} target="_blank" className="text-[#008dbb]">
                  Twitter
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Subtle Background Glow */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#0dce99]/20 blur-3xl rounded-full animate-blob"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#008dbb]/20 blur-3xl rounded-full animate-blob animation-delay-2000"></div>
    </section>
  );
}