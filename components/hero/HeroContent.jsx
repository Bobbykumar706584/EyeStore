"use client";

import { motion, AnimatePresence } from "framer-motion";
import HeroButtons from "./HeroButtons";
import HeroStats from "./HeroStats";

export default function HeroContent({ slide }) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={slide.id}
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -60 }}
        transition={{ duration: 0.8 }}
        className="max-w-2xl"
      >
        {/* Badge */}

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-2 text-white backdrop-blur-md"
        >
          <span className="h-2 w-2 rounded-full bg-green-400 animate-pulse" />

          {slide.badge}
        </motion.div>

        {/* Heading */}

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-8 text-5xl font-extrabold leading-tight text-white md:text-7xl"
        >
          {slide.title}

          <br />

          <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
            {slide.subtitle}
          </span>
        </motion.h1>

        {/* Description */}

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-8 max-w-xl text-lg leading-8 text-slate-300 md:text-xl"
        >
          {slide.description}
        </motion.p>

        <HeroButtons />
        <HeroStats />
      </motion.div>
    </AnimatePresence>
  );
}
