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

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        service: "",
        date: "",
        time: "",
        message: "",
    });

    const [loading, setLoading] = useState(false);

    // handle input change
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    // handle submit
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        setLoading(true);

        const payload = {
            ...formData,
            createdAt: new Date().toISOString(),
        };

        try {
            const res = await fetch("/api/create", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(payload),
            });

            const data = await res.json();

            if (!res.ok) {
                throw new Error(data.message || "Something went wrong");
            }

            console.log("Success:", data);

            // reset form
            setFormData({
                name: "",
                email: "",
                service: "",
                date: "",
                time: "",
                message: "",
            });

            setOpen(false);
        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            {/* BUTTON */}
            <button
                onClick={() => setOpen(true)}
                className="px-6 py-3 bg-linear-to-r from-[#0dce99] to-[#008dbb] text-[#05254c] rounded-xl font-semibold hover:opacity-90 transition"
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

                        <h2 className="text-2xl font-semibold mb-6 text-center text-white">
                            Book an Appointment
                        </h2>

                        {/* FORM */}
                        <form onSubmit={handleSubmit} className="space-y-4">

                            {/* NAME */}
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Full Name"
                                className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-gray-400 focus:outline-none focus:border-[#0dce99]"
                                required
                            />

                            {/* EMAIL */}
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Email Address"
                                className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-gray-400 focus:outline-none focus:border-[#0dce99]"
                                required
                            />

                            {/* SERVICE */}
                            <select
                                name="service"
                                value={formData.service}
                                onChange={handleChange}
                                className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white focus:outline-none focus:border-[#0dce99]"
                                required
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
                                name="date"
                                value={formData.date}
                                onChange={handleChange}
                                className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white focus:outline-none focus:border-[#0dce99]"
                                required
                            />

                            {/* TIME */}
                            <input
                                type="time"
                                name="time"
                                value={formData.time}
                                onChange={handleChange}
                                className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white focus:outline-none focus:border-[#0dce99]"
                                required
                            />

                            {/* MESSAGE */}
                            <textarea
                                rows={4}
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="Additional Information"
                                className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-gray-400 focus:outline-none focus:border-[#0dce99]"
                            />

                            {/* SUBMIT */}
                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full py-3 bg-gradient-to-r from-[#0dce99] to-[#008dbb] text-[#05254c] font-semibold rounded-lg mt-4 hover:opacity-90 transition disabled:opacity-50"
                            >
                                {loading ? "Submitting..." : "Submit Request"}
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
}