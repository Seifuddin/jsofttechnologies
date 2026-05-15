"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { useEffect, useState } from "react";

export default function TrustSection() {
  const testimonials = [
    {
      name: "James Mwangi",
      role: "Business Owner",
      text: "JSoft Technologies KE delivered a complete CCTV and network setup. Everything works flawlessly and support is fast.",
    },
    {
      name: "Mary Wanjiku",
      role: "School Administrator",
      text: "Reliable IT support. They stabilized our school network and improved security significantly.",
    },
    {
      name: "David Otieno",
      role: "Shop Manager",
      text: "Professional service from start to finish. They handled our full installation perfectly.",
    },
  ];

  const logos = [
    "KCB Bank",
    "Equity Bank",
    "Brookside Dairy",
    "Naivas",
    "Safaricom Agent",
    "Local Schools Network",
  ];

  const [index, setIndex] = useState(0);

  // AUTO ROTATION
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const active = testimonials[index];

  return (
    <section className="relative bg-amber-50 py-16 text-gray-900">
      <div className="mx-auto max-w-6xl px-6 lg:px-10">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10 text-center"
        >
          <p className="text-xs font-semibold text-orange-600">
            TRUST NETWORK
          </p>

          <h2 className="mt-2 text-3xl font-black sm:text-4xl">
            Clients Who Trust Us
          </h2>

          <p className="mt-2 text-sm text-gray-700">
            Real businesses that rely on our IT, networking, and security solutions.
          </p>
        </motion.div>

        {/* FEATURED CAROUSEL */}
        <div className="relative mb-12 overflow-hidden rounded-3xl border border-orange-100 bg-white p-8 shadow-sm">
          
          <div className="flex items-start gap-3">
            <Quote className="h-6 w-6 text-blue-500" />

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <p className="text-lg leading-relaxed text-gray-700">
                "{active.text}"
              </p>

              <div className="mt-5 flex items-center justify-between border-t border-gray-100 pt-4">
                <div>
                  <p className="text-sm font-bold">{active.name}</p>
                  <p className="text-xs text-orange-600">{active.role}</p>
                </div>

                <span className="text-xs font-semibold text-blue-500">
                  Featured Client
                </span>
              </div>
            </motion.div>
          </div>

          {/* DOT INDICATORS */}
          <div className="mt-5 flex justify-center gap-2">
            {testimonials.map((_, i) => (
              <div
                key={i}
                className={`h-2 w-2 rounded-full transition-all ${
                  i === index ? "bg-blue-500 w-4" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>

        {/* CLIENT LOGOS */}
        <div className="mb-10">
          <p className="mb-4 text-center text-xs font-semibold text-gray-500">
            TRUSTED BY ORGANIZATIONS
          </p>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
            {logos.map((logo, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="flex items-center justify-center rounded-xl border border-orange-100 bg-white px-3 py-4 text-center text-xs font-semibold text-gray-700 shadow-sm"
              >
                {logo}
              </motion.div>
            ))}
          </div>
        </div>

        {/* SMALL SUPPORTING LINE */}
        <p className="text-center text-xs text-gray-600">
          Delivering trusted technology solutions across Kenya.
        </p>

      </div>
    </section>
  );
}