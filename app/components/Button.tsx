"use client";

import { useState } from "react";

const services = [
    "Field Data Collection & Local Research",
    "Data Analysis & Insight Generation",
    "Research & M&E Advisory",
    "Capacity Strengthening",
    "Data Intelligence Platform (Coming Soon)",
    "Technical Assistance & Program Reviews (Coming Soon)",
];

export default function Button({ label = "Book Appointment" }) {
    const [open, setOpen] = useState(false);

    return (
        <>
            {/* BUTTON */}
            <button
                onClick={() => setOpen(true)}
                className="px-6 py-3 bg-[#0dce99] text-[#05254c] rounded-xl font-semibold hover:opacity-90 transition"
            >
                {label}
            </button>

            {/* MODAL */}
            {open && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm px-4">

                    {/* MODAL BOX */}
                    <div className="w-full max-w-lg bg-[#05254c] rounded-2xl p-8 border border-white/10 relative">

                        {/* CLOSE */}
                        <button
                            onClick={() => setOpen(false)}
                            className="absolute top-4 right-4 text-white/60 hover:text-white"
                        >
                            ✕
                        </button>

                        <h2 className="text-2xl font-semibold mb-6 text-center">
                            Book an Appointment
                        </h2>

                        {/* FORM */}
                        <form className="space-y-4">

                            {/* NAME */}
                            <input
                                type="text"
                                placeholder="Full Name"
                                className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-gray-400 focus:outline-none focus:border-[#0dce99]"
                            />

                            {/* EMAIL */}
                            <input
                                type="email"
                                placeholder="Email Address"
                                className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-gray-400 focus:outline-none focus:border-[#0dce99]"
                            />

                            {/* SERVICE DROPDOWN */}
                            <select
                                className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white focus:outline-none focus:border-[#0dce99]"
                            >
                                <option value="">Select a Service</option>
                                {services.map((service, i) => (
                                    <option key={i} value={service}>
                                        {service}
                                    </option>
                                ))}
                            </select>

                            {/* DATE */}
                            <input
                                type="date"
                                className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white focus:outline-none focus:border-[#0dce99]"
                            />

                            {/* TIME */}
                            <input
                                type="time"
                                className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white focus:outline-none focus:border-[#0dce99]"
                            />

                            {/* TEXTAREA */}
                            <textarea
                                rows={4}
                                placeholder="Additional Information"
                                className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-gray-400 focus:outline-none focus:border-[#0dce99]"
                            />

                            {/* SUBMIT */}
                            <button
                                type="submit"
                                className="w-full py-3 bg-gradient-to-r from-[#0dce99] to-[#008dbb] text-[#05254c] font-semibold rounded-lg mt-4 hover:opacity-90 transition"
                            >
                                Submit Request
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
}