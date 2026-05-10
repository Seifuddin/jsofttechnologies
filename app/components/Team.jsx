"use client";

import { motion } from "framer-motion";
import { Mail, Globe, ShieldCheck } from "lucide-react";

export default function TeamSection() {
  const team = [
    {
      name: "Joseph Opere",
      role: "Founder & Network Engineer",
      desc: "Enterprise networking & infrastructure architecture specialist.",
      img: "/images/254759177042_status_5c62fda3e1c94f5699ec58ea2e78ea4f.jpg",
    },
    {
      name: "Brin Tanui",
      role: "CCTV Systems Lead",
      desc: "Security systems design, surveillance & monitoring solutions.",
      img: "/images/IMG-20230803-WA0030.jpg",
    },
    {
      name: "Swibe S. Paul",
      role: "IT Support Engineer",
      desc: "Fast-response IT support & system troubleshooting expert.",
      img: "/images/IMG-20230803-WA0025.jpg",
    },
    {
      name: "Brian Odhiambo",
      role: "Creative Media Designer",
      desc: "Branding, motion graphics & digital experience designer.",
      img: "/images/IMG-20231203-WA0021.jpg",
    },
    {
      name: "Muriithi Nguru",
      role: "Web Developer & Software Engineer ",
      desc: "World class Web development and Software Engineering Specialist",
      img: "/images/Screenshot_20221028-140517.png",
    },
  ];

  const featured = team[0];
  const others = team.slice(1);

  return (
    <section className="relative bg-amber-50 py-14 overflow-hidden">
      {/* Background atmosphere */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-120px] left-[-80px] w-[300px] h-[300px] bg-orange-200/40 blur-3xl rounded-full"></div>
        <div className="absolute bottom-[-120px] right-[-80px] w-[320px] h-[320px] bg-cyan-200/30 blur-3xl rounded-full"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-10 text-center"
        >
          <div className="flex items-center justify-center gap-2 text-orange-600 text-xs font-semibold uppercase tracking-widest">
            <ShieldCheck className="w-4 h-4" />
            Meet The Team
          </div>

          <h2 className="text-2xl md:text-3xl font-black text-gray-900 mt-3 leading-tight">
            The Minds Behind
            <span className="bock text-blue-900"> JSoft Technologies</span>
          </h2>

          <p className="text-gray-700 mt-4 max-wxl">
            Engineers, designers, and security experts building reliable digital
            infrastructure and creative solutions.
          </p>
        </motion.div>

        {/* Layout */}
        <div className="grid md:grid-cols-3 gap-5">
          {/* Featured Member */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="md:row-span-2 bg-white rounded -3xl border border-gray-200 shadowlg relative overflow-hidden"
          >
            {/* IMAGE */}
            <div className="h-72 w-full overflow-hidden">
              <img
                src={featured.img}
                alt={featured.name}
                className="w-full h-full object-cover hover:scale-105 transition duration-300"
              />
            </div>

            <div className="p-3 relative">
              <h3 className="text-lg font-bold text-blue-950">{featured.name}</h3>

              <p className="text-orange-500 text-sm font-medium">
                {featured.role}
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
          {others.map((member, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -6 }}
              className="bg-white rounded border border-gray-200 hover:shadow-md transition overflow-hidden"
            >
              {/* IMAGE */}
              <div className="h-44 w-full overflow-hidden">
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-full h-full object-cover hover:scale-105 transition duration-300"
                />
              </div>

              <div className="p-3">
                <h3 className="font-bold text-blue-950">
                  {member.name}
                </h3>

                <p className="text-xs text-orange-500 font-medium mt-1">
                  {member.role}
                </p>

                <p className="text-sm text-gray-700 mt-3">
                  {member.desc}
                </p>

                <div className="hidden flex gap-3 mt-4 text-gray-400">
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