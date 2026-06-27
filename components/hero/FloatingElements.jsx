"use client";

import Image from "next/image";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";

export default function FloatingElements() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const x = useSpring(mouseX, {
    stiffness: 60,
    damping: 20,
  });

  const y = useSpring(mouseY, {
    stiffness: 60,
    damping: 20,
  });

  useEffect(() => {
    const move = (e) => {
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;

      mouseX.set((e.clientX - centerX) / 40);
      mouseY.set((e.clientY - centerY) / 40);
    };

    window.addEventListener("mousemove", move);

    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <>
      {/* Left Glow */}
      <motion.div
        style={{ x, y }}
        className="absolute left-0 top-20 h-72 w-72 rounded-full bg-blue-600/20 blur-[120px]"
      />

      {/* Right Glow */}
      <motion.div
        style={{ x: x.get() * -1, y: y.get() * -1 }}
        className="absolute right-0 bottom-20 h-80 w-80 rounded-full bg-cyan-400/20 blur-[120px]"
      />

      {/* Glass 1 */}
      <motion.div
        animate={{
          y: [-20, 20, -20],
          rotate: [-5, 5, -5],
        }}
        transition={{
          repeat: Infinity,
          duration: 6,
        }}
        className="absolute right-16 top-32 hidden lg:block"
      >
        <Image
          src="/glasses/black-frame.png"
          width={240}
          height={120}
          alt=""
          className="opacity-70"
        />
      </motion.div>

      {/* Glass 2 */}
      <motion.div
        animate={{
          y: [15, -15, 15],
          rotate: [5, -5, 5],
        }}
        transition={{
          repeat: Infinity,
          duration: 7,
        }}
        className="absolute left-20 bottom-20 hidden lg:block"
      >
        <Image
          src="/glasses/aviator.png"
          width={180}
          height={100}
          alt=""
          className="opacity-60"
        />
      </motion.div>

      {/* Glass 3 */}
      <motion.div
        animate={{
          y: [-10, 15, -10],
          rotate: [0, 8, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 8,
        }}
        className="absolute right-1/3 bottom-12 hidden xl:block"
      >
        <Image
          src="/glasses/round-frame.png"
          width={150}
          height={90}
          alt=""
          className="opacity-40"
        />
      </motion.div>

      {/* Floating Circles */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          animate={{
            y: [0, -25, 0],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            repeat: Infinity,
            duration: 3 + i,
          }}
          className="absolute rounded-full bg-white/20"
          style={{
            width: 6 + i,
            height: 6 + i,
            top: `${10 + i * 6}%`,
            left: `${5 + i * 8}%`,
          }}
        />
      ))}
    </>
  );
}
