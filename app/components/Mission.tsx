"use client";

import { motion } from "framer-motion";
import { Target, Eye } from "lucide-react";

export default function MissionVisionSection() {
    return (
        <section id="mission" className="relative bg-[#05254c] text-white py-32 px-6 overflow-hidden">

            {/* Background Glow */}
            <div className="absolute top-0 left-0 w-96 h-96 bg-[#0dce99]/20 blur-3xl rounded-full"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#008dbb]/20 blur-3xl rounded-full"></div>

            {/* Section Label */}
            <div className="absolute top-6 left-1/2 -translate-x-1/2">
                <p className="border border-white/10 text-white/30 px-6 py-2 rounded-full text-sm font-semibold tracking-wide">
                    MISSION & VISION
                </p>
            </div>

            {/* Heading */}
            <motion.div
                className="max-w-4xl mx-auto text-center mb-20"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >
                <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
                    Guided by Purpose, Driven by{" "}
                    <span className="bg-gradient-to-r from-[#0dce99] to-[#008dbb] bg-clip-text text-transparent">
                        Impact
                    </span>
                </h2>
            </motion.div>

            {/* CONTENT BLOCKS (NOT CARDS) */}
            <div className="max-w-5xl mx-auto space-y-20 relative">

                {/* Mission */}
                <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="relative"
                >
                    <div className="flex items-start gap-4">
                        <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                            <Target className="text-[#0dce99]" />
                        </div>

                        <div className="space-y-4">
                            <h3 className="text-2xl font-semibold">Our Mission</h3>
                            <p className="text-gray-300 text-lg leading-relaxed max-w-3xl">
                                To bridge the gap between high-quality field data and impactful,
                                data-driven decision-making by providing end-to-end data services
                                that combine local presence, technology, and expert analysis.
                            </p>
                        </div>
                    </div>
                </motion.div>

                {/* Divider line */}
                <div className="w-full h-px bg-white/10"></div>

                {/* Vision */}
                <motion.div
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="relative"
                >
                    <div className="flex items-start gap-4">
                        <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                            <Eye className="text-[#008dbb]" />
                        </div>

                        <div className="space-y-4">
                            <h3 className="text-2xl font-semibold">Our Vision</h3>
                            <p className="text-gray-300 text-lg leading-relaxed max-w-3xl">
                                To become a leading partner for innovative, tech-driven data
                                collection and actionable insights that improve lives, promote
                                equity, and strengthen global systems.
                            </p>
                        </div>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}