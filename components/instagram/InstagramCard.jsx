"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Heart, MessageCircle, ExternalLink } from "lucide-react";
import { FaInstagram } from "react-icons/fa";

export default function InstagramCard({ post }) {
  return (
    <Link
      href="https://instagram.com/evancaraindia"
      target="_blank"
      rel="noopener noreferrer"
      className="block"
    >
      <motion.div
        whileHover={{
          y: -10,
          scale: 1.03,
          rotate: 1,
        }}
        transition={{
          duration: 0.35,
          ease: "easeOut",
        }}
        className="group relative h-[340px] w-[300px] cursor-pointer overflow-hidden rounded-[30px] border border-slate-200 bg-white shadow-xl transition-all duration-500 hover:shadow-2xl"
      >
        {/* Image */}
        <div className="relative h-full w-full overflow-hidden">
          <Image
            src={post.image}
            alt={`Instagram Post ${post.id}`}
            fill
            priority={false}
            quality={75}
            sizes="(max-width:768px) 80vw, (max-width:1200px) 300px, 300px"
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />
        </div>

        {/* Dark Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/80" />

        {/* Instagram Badge */}
        <div className="absolute left-4 top-4 z-20 flex items-center gap-2 rounded-full bg-white/90 px-4 py-2 shadow-lg backdrop-blur-md transition-all duration-300 group-hover:bg-white">
          <FaInstagram className="text-pink-500" size={16} />
          <span className="text-sm font-semibold text-slate-800">
            Evan & Cara
          </span>
        </div>

        {/* Hover Overlay */}
        <div className="absolute inset-0 z-10 flex items-end opacity-0 transition-all duration-500 group-hover:opacity-100">
          <div className="m-5 w-full rounded-3xl border border-white/20 bg-white/15 p-5 backdrop-blur-xl">
            {/* Stats */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-5">
                <div className="flex items-center gap-2 text-white">
                  <Heart size={20} className="fill-red-500 text-red-500" />

                  <span className="font-semibold">
                    {post.likes.toLocaleString()}
                  </span>
                </div>

                <div className="flex items-center gap-2 text-white">
                  <MessageCircle size={20} />

                  <span className="font-semibold">{post.comments}</span>
                </div>
              </div>

              <FaInstagram size={24} className="text-white" />
            </div>

            {/* Caption */}
            <p className="mt-4 line-clamp-2 text-sm leading-6 text-white">
              {post.caption ||
                "Discover premium eyewear crafted for comfort, elegance and everyday style."}
            </p>

            {/* Button */}
            <div className="mt-5 flex items-center justify-center rounded-xl bg-gradient-to-r from-pink-500 via-red-500 to-orange-500 py-3 font-semibold text-white transition-all duration-300 group-hover:scale-[1.02]">
              <ExternalLink size={18} />

              <span className="ml-2">View on Instagram</span>
            </div>
          </div>
        </div>

        {/* Shine Animation */}
        <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-1000 group-hover:translate-x-full" />

        {/* Border Glow */}
        <div className="absolute inset-0 rounded-[30px] border border-transparent transition-all duration-500 group-hover:border-pink-400/70" />
      </motion.div>
    </Link>
  );
}
