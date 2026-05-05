"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";

const faqs = [
  {
    q: "What services does JSoft Technologies offer?",
    a: "We provide network installation, CCTV systems, IT support, managed IT services, graphic design, and photography/videography solutions for businesses.",
  },
  {
    q: "Do you offer on-site support in Nairobi?",
    a: "Yes. We provide on-site installation and technical support across Nairobi and surrounding areas depending on project scope.",
  },
  {
    q: "How fast can you respond to IT issues?",
    a: "We prioritize critical system failures immediately and provide fast response depending on severity and support plan.",
  },
  {
    q: "Do you handle small and large businesses?",
    a: "Yes. We scale solutions for startups, SMEs, and large organizations based on their infrastructure needs.",
  },
  {
    q: "Can you upgrade existing systems?",
    a: "Absolutely. We audit, optimize, and upgrade existing networks, CCTV, and IT systems for better performance and security.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState(null);

  return (
    <section className="relative py-24 bg-amber-50 overflow-hidden">

      {/* BACKGROUND GLOW */}
      <div className="absolute inset-0">
        <div className="absolute w-[500px] h-[500px] bg-blue-900/5 blur-[140px] rounded-full top-[-160px] left-[-160px]" />
        <div className="absolute w-[500px] h-[500px] bg-amber-500/10 blur-[140px] rounded-full bottom-[-180px] right-[-180px]" />
      </div>

      <div className="relative max-w-3xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center mb-12">
          <div className="flex justify-center">
            <div className="flex items-center gap-2 text-blue-900 bg-amber-100 px-4 py-1 rounded-full text-xs font-medium">
              <HelpCircle size={14} />
              Support Center
            </div>
          </div>

          <h2 className="mt-4 text-2xl md:text-3xl font-semibold text-gray-900">
            Frequently Asked Questions
          </h2>

          <p className="mt-3 text-sm text-gray-600">
            Everything you need to know about JSoft Technologies.
          </p>
        </div>

        {/* FAQ LIST */}
        <div className="space-y-3">

          {faqs.map((item, i) => {
            const isOpen = open === i;

            return (
              <motion.div
                key={i}
                layout
                className={`rounded border-b border-orange-200 transition-all duration-300 ${
                  isOpen
                    ? "bg-amber-50 shadowmd border-orange-200"
                    : "bg-amber-50 hover:bgwhite border-blue-200"
                }`}
              >

                {/* QUESTION */}
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex justify-between items-center px-5 py-4 text-left"
                >
                  <span className="font-medium text-gray-900 text-sm md:text-base">
                    {item.q}
                  </span>

                  <ChevronDown
                    className={`text-blue-900 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                    size={18}
                  />
                </button>

                {/* ANSWER */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-5 text-sm text-gray-700 leading-relaxed border-t border-gray-100">
                        {item.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

              </motion.div>
            );
          })}

        </div>

        {/* CTA */}
        <div className="hidden text-center mt-14">
          <p className="text-sm text-gray-600">
            Didn’t find what you’re looking for?
          </p>

          <button className="mt-4 bg-blue-900 hover:bg-blue-950 text-white px-7 py-3 rounded-xl text-sm font-medium transition">
            Contact JSoft Support
          </button>
        </div>

      </div>
    </section>
  );
}