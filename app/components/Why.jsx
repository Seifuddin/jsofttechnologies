"use client";

import { motion } from "framer-motion";
import {
  ShieldCheck,
  Zap,
  Users,
  Settings,
  Award,
  Headphones,
} from "lucide-react";

const reasons = [
  {
    title: "Reliable Infrastructure",
    desc: "We design stable and secure systems that keep your business running without interruptions.",
    icon: ShieldCheck,
  },
  {
    title: "Fast Response Time",
    desc: "Quick support for IT issues, CCTV faults, and network downtime whenever you need us.",
    icon: Zap,
  },
  {
    title: "Expert Team",
    desc: "Skilled professionals in networking, security systems, and digital services.",
    icon: Users,
  },
  {
    title: "End-to-End Solutions",
    desc: "From installation to maintenance — we handle everything under one roof.",
    icon: Settings,
  },
  {
    title: "Proven Quality",
    desc: "We deliver high-standard solutions trusted by businesses and institutions.",
    icon: Award,
  },
  {
    title: "24/7 Support",
    desc: "Always available technical support for critical systems and business continuity.",
    icon: Headphones,
  },
];

export default function WhyChooseUs() {
  return (
    <section className="relative py-20 bg-white">

      {/* HEADER */}
      <div className="text-center max-w-3xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
          Why Choose JSoft Technologies
        </h2>

        <p className="mt-3 text-gray-600 text-sm md:text-base">
          We don’t just install systems — we build reliable digital infrastructure
          that supports your business growth.
        </p>
      </div>

      {/* GRID */}
      <div className="max-w-6xl mx-auto px-6 mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

        {reasons.map((item, i) => {
          const Icon = item.icon;

          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group border rounded-xl p-6 hover:shadow-md transition bg-white"
            >

              {/* ICON */}
              <div className="w-10 h-10 rounded-lg bg-blue-900 text-white flex items-center justify-center group-hover:bg-amber-500 transition">
                <Icon size={18} />
              </div>

              {/* TITLE */}
              <h3 className="mt-4 font-semibold text-gray-900">
                {item.title}
              </h3>

              {/* DESC */}
              <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                {item.desc}
              </p>

            </motion.div>
          );
        })}

      </div>

      {/* BOTTOM STRIP (TRUST BOOSTER) */}
      <div className="max-w-5xl mx-auto mt-16 px-6">

        <div className="bg-gradient-to-r from-blue-950 to-blue-900 text-white rounded-2xl p-8 text-center">

          <h3 className="text-xl md:text-2xl font-semibold">
            Trusted by Businesses Across Kenya
          </h3>

          <p className="mt-3 text-sm text-blue-100">
            From small offices to large organizations — we deliver systems that work.
          </p>

          <button className="mt-6 bg-amber-500 hover:bg-amber-600 text-black px-6 py-3 rounded-xl text-sm font-medium transition">
            Request Consultation
          </button>

        </div>

      </div>

    </section>
  );
}