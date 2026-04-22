"use client";

import { motion } from "framer-motion";

export default function HowWeWorkSection() {
    const sections = [
        {
            title: "Our Values",
            items: [
                "Integrity — Accuracy, transparency, accountability",
                "Excellence — Rigorous, high-quality work",
                "Context Matters — Data must reflect local re alities",
                "Responsiveness — Adapt quickly in dynamic environments",
                "Impact — Focus on real-world outcomes",
                "Efficiency & Value — High quality, cost-effective delivery",
            ],
        },
        {
            title: "Our Approach",
            items: [
                "Locally Grounded",
                "Technology-Enabled",
                "Evidence-Led",
                "Adaptive Delivery",
                "Operational Excellence",
                "Decision-Focused",
            ],
        },
        {
            title: "Why Inxite Data",
            items: [
                "We make data accessible in hard-to-reach contexts",
                "We combine field presence with analytical rigor",
                "We deliver not just data, but decisions",
                "We act as a trusted partner, not just a service provider",
                "We understand both local realities and global standards",
            ],
        },
    ];

    return (
        <section id="work" className="relative bg-[#05254c] text-white py-32 px-6 overflow-hidden">

            {/* Glow */}
            <div className="absolute top-0 left-0 w-80 h-80 bg-[#0dce99]/20 blur-3xl rounded-full"></div>
            <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#008dbb]/20 blur-3xl rounded-full"></div>
            <div className="absolute top-6 left-1/2 -translate-x-1/2">
                <p className=" border-2 border-solid text-white/20 px-6 py-2 rounded-full text-sm font-semibold tracking-wide select-none pointer-events-none">
                    How We Work
                </p>
            </div>
            {/* Header */}
            <div className="text-center max-w-3xl mx-auto mb-20">
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-[#0dce99] font-semibold tracking-widest uppercase"
                >
                    How We Work
                </motion.p>

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-4xl md:text-5xl font-extrabold mt-4"
                >
                    A Clear Path from{" "}
                    <span className="bg-gradient-to-r from-[#0dce99] to-[#008dbb] bg-clip-text text-transparent">
                        Data to Impact
                    </span>
                </motion.h2>
            </div>

            {/* FLOW */}
            <div className="max-w-6xl mx-auto relative">

                {/* Horizontal line */}
                <div className="hidden md:block absolute top-6 left-0 right-0 h-px bg-white/10"></div>

                <div className="grid md:grid-cols-3 gap-12 relative">

                    {sections.map((section, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.2 }}
                            viewport={{ once: true }}
                            className="relative"
                        >
                            {/* Step indicator */}
                            <div className="flex justify-center mb-6">
                                <div className="w-4 h-4 rounded-full bg-[#0dce99] border-4 border-[#05254c]"></div>
                            </div>

                            {/* Content */}
                            <div className="text-center space-y-4">
                                <h3 className="text-xl font-semibold">{section.title}</h3>

                                <ul className="space-y-3 text-gray-300 text-sm">
                                    {section.items.map((item, idx) => (
                                        <li key={idx}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}

                </div>
            </div>
        </section>
    );
}