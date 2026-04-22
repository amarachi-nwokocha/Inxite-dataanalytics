"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Button from "./Button";

import { FiBarChart2, FiPieChart } from "react-icons/fi";
import { BsGraphUp } from "react-icons/bs";

const data = {
    "Our Values": [
        "Integrity — We uphold the highest standards of accuracy, transparency, and accountability.",
        "Excellence — We are committed to rigorous, high-quality work.",
        "Context Matters — Meaningful data must reflect local realities.",
        "Responsiveness — We adapt quickly in dynamic environments.",
        "Impact — We focus on work that drives real-world outcomes.",
        "Efficiency & Value — We deliver high-quality data in a cost-effective way using streamlined approaches.",
    ],
    "Our Approach": [
        "Locally Grounded — We leverage in-country expertise to ensure data reflects real-world contexts.",
        "Technology-Enabled — We use digital tools and real-time systems to enhance data quality and efficiency.",
        "Evidence-Led — Our work is anchored in rigorous methodologies and high-quality data.",
        "Adaptive Delivery — We remain agile and responsive to evolving needs.",
        "Operational Excellence — We prioritize accuracy, timeliness, and clear communication.",
        "Decision-Focused — We generate actionable insights that drive measurable impact.",
    ],
    "Why Choose Us": [
        "We make data accessible, even in hard-to-reach contexts",
        "We combine field presence with analytical rigor",
        "We deliver not just data but decisions",
        "We are a trusted partner, not just a service provider",
        "We understand both local realities and global standards",
    ],
};

export default function HowWeWorkInteractive() {
    const [active, setActive] = useState<keyof typeof data>("Our Values");

    return (

        <section className="relative bg-[#05254c] text-white py-32 px-6 overflow-hidden">
            {/* FLOATING BACKGROUND ICONS */}
            <div className="pointer-events-none absolute inset-0">

                {/* ICON 1 */}
                <motion.div
                    className="absolute top-10 left-10 text-[#0dce99]/20"
                    animate={{
                        y: [0, -20, 0],
                        scale: [1, 1.1, 1],
                        opacity: [0.2, 0.35, 0.2],
                    }}
                    transition={{
                        duration: 6,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                >
                    <FiBarChart2 className="w-12 h-12" />
                </motion.div>

                {/* ICON 2 */}
                <motion.div
                    className="absolute top-1/2 left-1/4 text-[#008dbb]/20"
                    animate={{
                        y: [0, 25, 0],
                        scale: [1, 1.08, 1],
                        opacity: [0.2, 0.3, 0.2],
                    }}
                    transition={{
                        duration: 7,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                >
                    <FiPieChart className="w-16 h-16" />
                </motion.div>

                {/* ICON 3 */}
                <motion.div
                    className="absolute bottom-20 right-20 text-[#0dce99]/20"
                    animate={{
                        y: [0, -30, 0],
                        scale: [1, 1.1, 1],
                        opacity: [0.2, 0.35, 0.2],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                >
                    <BsGraphUp className="w-14 h-14" />
                </motion.div>

                {/* ICON 4 */}
                <motion.div
                    className="absolute bottom-1/3 right-1/4 text-[#008dbb]/20"
                    animate={{
                        y: [0, 20, 0],
                        scale: [1, 1.07, 1],
                        opacity: [0.2, 0.3, 0.2],
                    }}
                    transition={{
                        duration: 6.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                >
                    <FiBarChart2 className="w-10 h-10" />
                </motion.div>

            </div>

            <div className="absolute top-6 left-1/2 -translate-x-1/2">
                <p className=" border-2 border-solid text-white/20 px-6 py-2 rounded-full text-sm font-semibold tracking-wide select-none pointer-events-none">
                    HOW WE WORK
                </p>
            </div>
            <div className="max-w-7xl mx-auto rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 md:p-12">

                <div className="grid md:grid-cols-3 gap-10">

                    {/* LEFT NAV */}
                    <div className="space-y-6">

                        <h2 className="text-4xl font-bold">
                            Our{" "}
                            <span className="bg-linear-to-r from-[#0dce99] to-[#008dbb] bg-clip-text text-transparent px-2 py-1 rounded-lg">
                                Process
                            </span>
                        </h2>

                        <div className="space-y-4 mt-6">
                            {Object.keys(data).map((item, i) => {
                                const isActive = active === item;

                                return (
                                    <button
                                        key={i}
                                        onClick={() => setActive(item as keyof typeof data)}
                                        className={`w-full flex items-center justify-between px-6 py-4 rounded-full border transition ${isActive
                                            ? "bg-[#0dce99] text-[#05254c] border-transparent"
                                            : "bg-white/5 border-white/10 hover:bg-white/10 text-white/70"
                                            }`}
                                    >
                                        <span className="text-md font-semibold">{item}</span>
                                    </button>
                                );
                            })}
                        </div>
                    </div>

                    {/* RIGHT CONTENT */}
                    <div className="md:col-span-2">

                        <div className="bg-white/5 border border-white/10 rounded-2xl p-8 min-h-[400px]">

                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={active}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <h3 className="text-2xl font-semibold mb-6">
                                        {active}
                                    </h3>

                                    <ul className="space-y-4">
                                        {data[active].map((item, i) => (
                                            <li
                                                key={i}
                                                className="text-gray-300 flex gap-3 items-start"
                                            >
                                                <span className="mt-2 w-2 h-2 bg-[#0dce99] rounded-full"></span>
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    <div className="flex justify-end mt-8">
                                        <Button label="Work With Us" />
                                    </div>
                                </motion.div>
                            </AnimatePresence>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}