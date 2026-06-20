"use client";
import { products } from "@/data/products";
import { uploadProducts } from "@/lib/services/productService";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const HeroSection = () => {
  const handleUpload = async () => {
    await uploadProducts(products);
  };
  return (
    <section className="relative min-h-[100vh] overflow-hidden">
      {/* Background Image */}

      <img
        src="https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=2000&auto=format&fit=crop"
        alt="Eyewear Model"
        className="absolute inset-0 w-full h-full object-cover scale-105"
      />

      {/* Gradient Overlay */}

      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-900/70 to-slate-900/20"></div>

      {/* Content */}

      <div className="relative z-10 max-w-7xl mx-auto px-6 min-h-[90vh] flex items-center">
        <div className="max-w-2xl">
          {/* Badge */}

          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full text-white mb-8">
            <span className="w-2 h-2 rounded-full bg-green-400"></span>
            Premium Eyewear Collection
          </div>

          {/* Heading */}

          <h1 className="text-white font-bold leading-tight text-5xl md:text-7xl">
            See Better.
            <br />
            Look Better.
          </h1>

          {/* <button
            onClick={handleUpload}
            className="border border-white/40 text-white hover:bg-white hover:text-slate-900 px-8 py-4 rounded-xl transition"
          >
            Upload Products
          </button> */}

          {/* Description */}

          <p className="text-slate-300 mt-8 text-lg md:text-xl max-w-xl">
            Discover stylish eyeglasses, sunglasses and computer glasses crafted
            for comfort, fashion and everyday elegance.
          </p>

          {/* Buttons */}

          <div className="flex flex-wrap gap-5 mt-10">
            <button className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-xl text-white font-semibold flex items-center gap-2 transition">
              <Link href="/products" className="flex items-center gap-2">
                Shop Now
                <ArrowRight size={18} />
              </Link>
            </button>

            <Link
              href={"/virtual-try-on"}
              className="border border-white/40 text-white hover:bg-white hover:text-slate-900 px-8 py-4 rounded-xl transition"
            >
              Virtual Try-On
            </Link>
          </div>

          {/* Stats */}

          <div className="flex flex-wrap gap-8 mt-14">
            <div>
              <h3 className="text-white text-3xl font-bold">10K+</h3>

              <p className="text-slate-300">Happy Customers</p>
            </div>

            <div>
              <h3 className="text-white text-3xl font-bold">500+</h3>

              <p className="text-slate-300">Premium Frames</p>
            </div>

            <div>
              <h3 className="text-white text-3xl font-bold">₹999</h3>

              <p className="text-slate-300">Starting Price</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Fade */}

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-50 to-transparent"></div>
    </section>
  );
};

export default HeroSection;
