"use client";

import { motion } from "framer-motion";
import { Users, Glasses, Star, Truck } from "lucide-react";
import CountUp from "react-countup";

const stats = [
  {
    icon: Users,
    value: 10000,
    suffix: "+",
    label: "Happy Customers",
  },
  {
    icon: Glasses,
    value: 500,
    suffix: "+",
    label: "Premium Frames",
  },
  {
    icon: Star,
    value: 4.9,
    decimals: 1,
    label: "Customer Rating",
  },
  {
    icon: Truck,
    value: 24,
    suffix: "H",
    label: "Fast Delivery",
  },
];

export default function HeroStats() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.7 }}
      className="mt-12 grid grid-cols-2 gap-6 lg:grid-cols-4"
    >
      {stats.map((item, index) => {
        const Icon = item.icon;

        return (
          <motion.div
            key={index}
            whileHover={{
              y: -10,
              scale: 1.04,
            }}
            transition={{
              duration: 0.3,
            }}
            className="rounded-2xl w-full border border-white/10 bg-white/10 p-6 backdrop-blur-xl text-justify"
          >
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-blue-500/20">
              <Icon className="text-blue-400" size={20} />
            </div>

            <h2 className="text-2xl font-bold text-white ">
              <CountUp
                end={item.value}
                duration={2}
                decimals={item.decimals || 0}
              />

              {item.suffix}
            </h2>

            <p className="mt-2 text-sm text-slate-300">{item.label}</p>
          </motion.div>
        );
      })}
    </motion.div>
  );
}
