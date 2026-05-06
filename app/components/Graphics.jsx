"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function GraphicDesignServices() {
  return (
    <section className="relative py-24 bg-amber-50 text-gray-900 overflow-hidden">

      {/* CREATIVE BACKGROUND ENERGY */}
      <div className="absolute inset-0">
        <div className="absolute top-[-150px] left-[-150px] w-[500px] h-[500px] bg-amber-300/20 blur-[140px]" />
        <div className="absolute bottom-[-150px] right-[-150px] w-[500px] h-[500px] bg-orange-300/10 blur-[140px]" />
      </div>

      {/* GRID TEXTURE */}
      <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#d1d5db_1px,transparent_1px),linear-gradient(to_bottom,#d1d5db_1px,transparent_1px)] bg-[size:60px_60px]" />

      <div className="relative max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-14"
        >
          <p className="text-xs tracking-[0.3em] text-amber-600 uppercase">
            Creative Design Studio
          </p>

          <h2 className="text-3xl md:text-4xl font-semibold mt-2">
            We Don’t Just Design — We Build{" "}
            <span className="text-gray-900">Brand Identity Systems</span>
          </h2>

          <p className="text-gray-600 mt-3 max-w-2xl mx-auto text-sm">
            Every brand has a story. We translate yours into visuals that
            feel powerful, consistent, and impossible to ignore.
          </p>
        </motion.div>

        {/* MAIN GRID */}
        <div className="grid lg:grid-cols-12 gap-8 items-center">

          {/* LEFT - CINEMATIC BRAND WALL */}
          <motion.div
            whileHover={{ scale: 1.01 }}
            className="lg:col-span-7 relative h-[420px] rounded-2xl overflow-hidden"
          >

            <Image
              src="/images/photo-1626785774573-4b799315345d.avif"
              alt="Creative Design Work"
              fill
              className="object-cover scale-110"
            />

            {/* DARK CREATIVE OVERLAY */}
            <div className="absolute inset-0 bg-gradient-to-tr from-black/70 via-black/20 to-transparent" />

            {/* FLOATING DESIGN ENERGY */}
            <div className="absolute inset-0">
              {Array.from({ length: 8 }).map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 bg-amber-400 rounded-full"
                  style={{
                    top: `${15 + Math.random() * 70}%`,
                    left: `${10 + Math.random() * 80}%`,
                  }}
                  animate={{
                    scale: [1, 1.6, 1],
                    opacity: [0.3, 1, 0.3],
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    delay: i * 0.2,
                  }}
                />
              ))}
            </div>

            {/* STORY LABEL */}
            <div className="absolute bottom-6 left-6 text-white">
              <h3 className="text-2xl font-semibold">
                Visual Identity Creation
              </h3>
              <p className="text-sm text-gray-200 mt-1">
                Where ideas become unforgettable brands
              </p>
            </div>

          </motion.div>

          {/* RIGHT - CREATIVE MANIFESTO */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="lg:col-span-5"
          >

            <p className="text-xs tracking-[0.25em] text-amber-600 uppercase">
              What We Create
            </p>

            <h2 className="text-3xl font-semibold mt-2">
              Design That{" "}
              <span className="text-gray-900">Builds Perception</span>
            </h2>

            <p className="text-gray-600 mt-4 text-sm leading-relaxed">
              Great design doesn’t decorate — it communicates. We shape how
              people feel about your business before they even read a word.
            </p>

            {/* DESIGN PILLARS */}
            <div className="mt-6 space-y-4">

              <DesignPillar
                title="Brand Identity Systems"
                desc="Complete visual direction that defines your brand personality."
              />

              <DesignPillar
                title="Marketing Visuals"
                desc="Designs built to attract attention and drive engagement."
              />

              <DesignPillar
                title="Creative Consistency"
                desc="Unified visuals across all platforms and media."
              />

            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}

/* DESIGN PILLAR */
function DesignPillar({ title, desc }) {
  return (
    <div className="relative pl-4 border-l-2 border-amber-400/50">

      <h4 className="text-sm font-semibold text-gray-900">
        {title}
      </h4>

      <p className="text-xs text-gray-600 mt-1">
        {desc}
      </p>

    </div>
  );
}