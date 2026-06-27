"use client";

import { motion } from "framer-motion";

export default function HeroProgress({
  slides,
  current,
  setCurrent,
  progress,
}) {
  return (
    <div className="absolute bottom-10 left-1/2 z-30 flex -translate-x-1/2 gap-4">
      {slides.map((_, index) => (
        <button key={index} onClick={() => setCurrent(index)} className="group">
          <div className="h-[4px] w-20 overflow-hidden rounded-full bg-white/20">
            {current === index && (
              <motion.div
                key={current}
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ ease: "linear", duration: 0.1 }}
                className="h-full rounded-full bg-white"
              />
            )}

            {current > index && (
              <div className="h-full w-full rounded-full bg-white" />
            )}
          </div>
        </button>
      ))}
    </div>
  );
}
