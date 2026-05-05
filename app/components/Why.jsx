"use client";

import { motion } from "framer-motion";
import {
  ShieldCheck,
  Zap,
  Lock,
  Activity,
  Headphones,
} from "lucide-react";

export default function WhyChooseUs() {
  return (
    <section className="relative py-28 bg-amber-50 overflow-hidden">

      {/* BACKGROUND GLOW SYSTEM */}
      <div className="absolute inset-0">
        <div className="absolute w-[500px] h-[500px] bg-blue-900/5 blur-[140px] rounded-full top-[-150px] left-[-150px]" />
        <div className="absolute w-[500px] h-[500px] bg-amber-500/10 blur-[140px] rounded-full bottom-[-180px] right-[-180px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -25 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >

          <p className="text-xs tracking-[0.3em] uppercase text-blue-900/60">
            Why Businesses Trust JSoft
          </p>

          <h2 className="mt-4 text-2xl md:text-3xl font-semibold text-gray-900 leading-tight">
            We don’t react to failures —  
            <span className="text-blue-900"> we engineer them out.</span>
          </h2>

          <p className="mt-6 text-gray-700 text-sm md:text-base leading-relaxed">
            Most businesses lose money silently through downtime, weak networks,
            and security gaps. We design infrastructure that stays stable,
            secure, and predictable — even under pressure.
          </p>

          {/* CORE POINTS - MORE PREMIUM STRUCTURE */}
          <div className="mt-7 space-y-5">

            {[
              {
                icon: ShieldCheck,
                text: "Security-first system architecture for business protection",
              },
              {
                icon: Activity,
                text: "Always-on infrastructure designed for maximum uptime",
              },
              {
                icon: Lock,
                text: "Controlled access and monitored digital environments",
              },
            ].map((item, i) => {
              const Icon = item.icon;

              return (
                <div key={i} className="flex gap-3 items-start border-b border-orange-200 rounded-lg p-2">
                  <div className="p-1.5 rounded-md bg-blue-900 text-white mt-0.5">
                    <Icon size={14} />
                  </div>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    {item.text}
                  </p>
                </div>
              );
            })}

          </div>

          {/* CTA (NOW VISIBLE AND STRONGER) */}
          <button className="hidden mt-10 bg-blue-900 hover:bg-blue-950 text-white px-7 py-3 rounded-xl text-sm font-medium transition">
            Get Professional Assessment
          </button>

        </motion.div>

        {/* RIGHT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: 25 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-blue-950 via-blue-900 to-blue-950 text-white rounded-3xl p-10 shadow-2xl"
        >

          <h3 className="text-2xl font-semibold">
            Engineering-Grade Reliability
          </h3>

          <p className="mt-3 text-sm text-blue-100">
            Built like critical infrastructure — not basic IT services.
          </p>

          {/* IMPACT LIST */}
          <div className="mt-8 space-y-6 text-sm">

            <div className="flex gap-3">
              <Zap className="text-amber-400" />
              <p>Rapid deployment with zero operational disruption</p>
            </div>

            <div className="flex gap-3">
              <Headphones className="text-amber-400" />
              <p>Dedicated technical support for business continuity</p>
            </div>

            <div className="flex gap-3">
              <ShieldCheck className="text-amber-400" />
              <p>Security-focused engineering across all installations</p>
            </div>

          </div>

          {/* TRUST STRIP */}
          <div className="mt-10 border-t border-white/10 pt-6 text-xs text-blue-100/80">
            ✔ Nairobi-based engineers • ✔ On-site support • ✔ Business-critical systems
          </div>

        </motion.div>

      </div>
    </section>
  );
}