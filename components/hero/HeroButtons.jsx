"use client";

import Link from "next/link";
import { ArrowRight, Play } from "lucide-react";
import { motion } from "framer-motion";

export default function HeroButtons() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6 }}
      className="flex flex-wrap gap-5 mt-10"
    >
      <Link
        href="/products"
        className="group flex items-center gap-2 rounded-xl bg-blue-600 px-8 py-4 font-semibold text-white shadow-2xl transition-all duration-300 hover:scale-105 hover:bg-blue-700"
      >
        Shop Now
        <ArrowRight
          size={18}
          className="transition-transform duration-300 group-hover:translate-x-1"
        />
      </Link>

      <Link
        href="/virtual-try-on"
        className="group flex items-center gap-3 rounded-xl border border-white/30 bg-white/10 px-8 py-4 font-semibold text-white backdrop-blur-md transition-all duration-300 hover:bg-white hover:text-slate-900"
      >
        <Play size={18} />
        Virtual Try-On
      </Link>
    </motion.div>
  );
}
