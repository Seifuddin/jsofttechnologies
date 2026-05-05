"use client";

import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, Network, Camera, Cpu } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative pt-28 pb-20 bg-[#070B1A] text-white overflow-hidden">

      {/* subtle grid background */}
      <div className="absolute inset-0 opacity-20 bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:60px_60px]" />

      {/* glow effects */}
      <div className="absolute top-[-120px] left-[-120px] w-[400px] h-[400px] bg-amber-500/20 rounded-full blur-[100px]" />
      <div className="absolute bottom-[-120px] right-[-120px] w-[400px] h-[400px] bg-blue-500/20 rounded-full blur-[100px]" />

      <div className="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">

        {/* LEFT */}
        <div>

          {/* badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 text-sm text-amber-400"
          >
            <Cpu size={14} />
            IT • SECURITY • INFRASTRUCTURE • MEDIA
          </motion.div>

          {/* headline */}
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-semibold leading-tight mt-5"
          >
            Build & Secure{" "}
            <span className="text-amber-400">Digital Systems</span>{" "}
            That Power Your Business
          </motion.h1>

          {/* subtext */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-gray-300 text-base max-w-xl"
          >
            JSoft Technologies delivers enterprise network installation,
            CCTV security systems, IT support, and creative media solutions.
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap gap-4 mt-6"
          >
            <button className="bg-amber-500 hover:bg-amber-600 px-6 py-3 rounded-xl font-semibold flex items-center gap-2 transition shadow-lg">
              Get Consultation <ArrowRight size={18} />
            </button>

            <button className="border border-white/15 px-6 py-3 rounded-xl hover:bg-white hover:text-[#070B1A] transition">
              View Services
            </button>
          </motion.div>

          {/* trust row */}
          <div className="flex flex-wrap gap-5 mt-8 text-sm text-gray-400">

            <span className="flex items-center gap-2">
              <ShieldCheck size={14} className="text-amber-400" />
              Secure Systems
            </span>

            <span className="flex items-center gap-2">
              <Network size={14} className="text-amber-400" />
              Network Experts
            </span>

            <span className="flex items-center gap-2">
              <Camera size={14} className="text-amber-400" />
              Media Production
            </span>

          </div>

        </div>

        {/* RIGHT CARD */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-xl"
        >

          <h3 className="text-lg font-semibold mb-5">
            Core Services Overview
          </h3>

          <div className="space-y-4">

            {[
              "Network & Infrastructure Setup",
              "CCTV Security Installation",
              "IT Support & Maintenance",
              "Graphic Design & Branding",
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/10"
              >
                <span className="text-gray-200 text-sm">{item}</span>
                <span className="text-xs text-amber-400">Active</span>
              </div>
            ))}

          </div>

        </motion.div>

      </div>
    </section>
  );
}