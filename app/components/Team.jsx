"use client";

import { motion } from "framer-motion";
import { Mail, Globe, ShieldCheck, Cpu } from "lucide-react";

export default function TeamSection() {
  const team = [
    {
      name: "John Kamau",
      role: "Founder & Network Engineer",
      desc: "Enterprise networking & infrastructure architecture specialist.",
    },
    {
      name: "Sarah Wanjiku",
      role: "CCTV Systems Lead",
      desc: "Security systems design, surveillance & monitoring solutions.",
    },
    {
      name: "David Otieno",
      role: "IT Support Engineer",
      desc: "Fast-response IT support & system troubleshooting expert.",
    },
    {
      name: "Brian Mwangi",
      role: "Creative Media Designer",
      desc: "Branding, motion graphics & digital experience designer.",
    },
  ];

  return (
    <section className="relative bg-amber-50 py-14 overflow-hidden">
      {/* Background atmosphere */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-120px] left-[-80px] w-[300px] h-[300px] bg-orange-200/40 blur-3xl rounded-full"></div>
        <div className="absolute bottom-[-120px] right-[-80px] w-[320px] h-[320px] bg-cyan-200/30 blur-3xl rounded-full"></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-10"
        >
          <div className="flex items-center gap-2 text-orange-600 text-xs font-semibold uppercase tracking-widest">
            <ShieldCheck className="w-4 h-4" />
            Meet The Team
          </div>

          <h2 className="text-3xl md:text-5xl font-black text-gray-900 mt-3 leading-tight">
            The Minds Behind
            <span className="block text-orange-500">JSoft Technologies</span>
          </h2>

          <p className="text-gray-600 mt-4 max-w-xl">
            Engineers, designers, and security experts building reliable digital
            infrastructure and creative solutions.
          </p>
        </motion.div>

        {/* Layout */}
        <div className="grid lg:grid-cols-3 gap-5">
          {/* Featured Member */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="lg:row-span-2 bg-white rounded-3xl p-6 border border-orange-100 shadow-lg relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-40 h-40 bg-orange-100 blur-3xl rounded-full"></div>

            <div className="relative z-10">
              <div className="w-14 h-14 rounded-2xl bg-orange-500 text-white flex items-center justify-center mb-5">
                <Cpu className="w-6 h-6" />
              </div>

              <h3 className="text-xl font-bold">John Kamau</h3>
              <p className="text-orange-500 text-sm font-medium">
                Founder & Network Engineer
              </p>

              <p className="text-gray-600 text-sm mt-4 leading-relaxed">
                Enterprise networking & infrastructure architecture specialist
                leading JSoft Technologies with modern scalable systems.
              </p>

              <div className="flex gap-3 mt-6 text-gray-500">
                <Mail className="w-4 h-4 hover:text-orange-500 cursor-pointer" />
                <Globe className="w-4 h-4 hover:text-orange-500 cursor-pointer" />
              </div>
            </div>
          </motion.div>

          {/* Side Members */}
          {team.slice(1).map((member, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -6 }}
              className="bg-white rounded-2xl p-5 border border-orange-100 shadow-sm hover:shadow-md transition relative overflow-hidden"
            >
              <div className="absolute inset-0 opacity-0 hover:opacity-100 bg-gradient-to-r from-orange-50 to-cyan-50 transition" />

              <div className="relative z-10">
                <div className="w-11 h-11 rounded-xl bg-orange-100 text-orange-500 flex items-center justify-center mb-4">
                  <Cpu className="w-5 h-5" />
                </div>

                <h3 className="font-bold text-gray-900">{member.name}</h3>
                <p className="text-xs text-orange-500 font-medium mt-1">
                  {member.role}
                </p>

                <p className="text-sm text-gray-600 mt-3">
                  {member.desc}
                </p>

                <div className="flex gap-3 mt-4 text-gray-400">
                  <Mail className="w-4 h-4 hover:text-orange-500 cursor-pointer" />
                  <Globe className="w-4 h-4 hover:text-orange-500 cursor-pointer" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}