"use client";

import { Mail, ArrowRight } from "lucide-react";

const Newsletter = () => {
  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="relative overflow-hidden rounded-[40px] bg-gradient-to-r from-slate-900 via-slate-800 to-blue-700">
          {/* Decorative circles */}

          <div className="absolute -top-24 -left-24 w-72 h-72 rounded-full bg-white/5"></div>

          <div className="absolute -bottom-32 -right-20 w-96 h-96 rounded-full bg-blue-400/10"></div>

          {/* Content */}

          <div className="relative z-10 px-8 py-20 md:px-20 text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-5 py-2 rounded-full text-white mb-8">
              <Mail size={18} />
              Newsletter
            </div>

            <h2 className="text-4xl md:text-6xl font-bold text-white">
              Get 10% OFF
            </h2>

            <p className="text-slate-300 mt-6 max-w-2xl mx-auto text-lg">
              Subscribe to our newsletter and be the first to know about new
              arrivals, special discounts and exclusive offers.
            </p>

            {/* Form */}

            <div className="max-w-2xl mx-auto mt-12">
              <div className="bg-white rounded-2xl p-3 flex flex-col md:flex-row gap-3 shadow-2xl">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-5 py-4 outline-none text-slate-700 rounded-xl"
                />

                <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl flex items-center justify-center gap-2 duration-300">
                  Subscribe
                  <ArrowRight size={18} />
                </button>
              </div>
            </div>

            {/* Small Text */}

            <p className="text-slate-400 text-sm mt-6">
              No spam. Unsubscribe anytime.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
