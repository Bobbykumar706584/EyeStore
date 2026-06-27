"use client";

import { ArrowRight } from "lucide-react";
import InstagramRow from "./InstagramRow";
import { images } from "./images";
import { FaInstagram } from "react-icons/fa";
import Link from "next/link";

export default function InstagramFeed() {
  const firstRow = images.slice(0, 16);
  const secondRow = images.slice(17);

  console.log(firstRow, secondRow);

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-100 py-24">
      {/* Decorative Glow */}

      <div className="absolute -left-24 top-16 h-72 w-72 rounded-full bg-blue-500/10 blur-[120px]" />

      <div className="absolute -right-20 bottom-10 h-80 w-80 rounded-full bg-cyan-400/10 blur-[150px]" />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Heading */}

        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-pink-200 bg-pink-100 px-5 py-2 font-medium text-pink-600">
            <FaInstagram size={18} />
            Follow Us
          </div>

          <h2 className="mt-6 text-4xl font-bold text-slate-900 md:text-6xl">
            Style That
            <span className="block bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              Inspires
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            Join thousands of customers showcasing their favorite eyewear.
            Explore new looks, get inspired, and share your style with our
            growing community.
          </p>
        </div>

        {/* Instagram Rows */}

        <div className="mt-20 space-y-8">
          <InstagramRow posts={firstRow} speed="35s" />
          <InstagramRow posts={secondRow} reverse speed="45s" />

          {/* <InstagramRow posts={secondRow} reverse speed="40s" /> */}
        </div>

        {/* Bottom CTA */}

        <div className="mt-24">
          <div className="rounded-[32px] border border-slate-200 bg-white p-10 shadow-xl">
            <div className="flex flex-col items-center justify-between gap-8 lg:flex-row">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">
                  Instagram
                </p>

                <h3 className="mt-3 text-3xl font-bold text-slate-900">
                  @Evancaraindia
                </h3>

                <p className="mt-4 max-w-xl text-slate-600">
                  Tag us in your photos for a chance to be featured on our
                  website and social media channels.
                </p>
              </div>

              <Link
                href="https://instagram.com/evancaraindia"
                target="_blank"
                rel="noopener noreferrer"
                className="group  inline-flex items-center gap-3 rounded-xl bg-gradient-to-r from-pink-500 via-red-500 to-orange-500 px-8 py-4 font-semibold text-white transition duration-300 hover:scale-105 hover:shadow-2xl"
              >
                <FaInstagram size={20} />
                Follow on Instagram
                <ArrowRight
                  size={18}
                  className="transition group-hover:translate-x-1"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
