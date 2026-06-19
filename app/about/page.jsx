"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function AboutPage() {
  return (
    <>
      <Navbar />

      {/* Hero */}

      <section className="bg-slate-50 py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold">About EyeStore</h1>

          <p className="mt-6 text-slate-600 max-w-3xl mx-auto text-lg">
            EyeStore is your destination for premium eyewear. We combine
            fashion, comfort and quality to help you find glasses that perfectly
            fit your style.
          </p>
        </div>
      </section>

      {/* Story */}

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <img
              src="https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=2000&auto=format&fit=crop"
              alt="About"
              className="rounded-3xl shadow-xl"
            />
          </div>

          <div>
            <h2 className="text-4xl font-bold">Our Story</h2>

            <p className="mt-6 text-slate-600 leading-8">
              Founded with the vision of making premium eyewear accessible to
              everyone, EyeStore offers stylish eyeglasses, sunglasses and
              contact lenses crafted with precision. We believe glasses are not
              just a necessity, but an important part of your personality.
            </p>

            <div className="grid grid-cols-3 gap-6 mt-10">
              <div className="text-center">
                <h3 className="text-3xl font-bold text-blue-600">10K+</h3>

                <p className="text-slate-500">Happy Customers</p>
              </div>

              <div className="text-center">
                <h3 className="text-3xl font-bold text-blue-600">500+</h3>

                <p className="text-slate-500">Products</p>
              </div>

              <div className="text-center">
                <h3 className="text-3xl font-bold text-blue-600">4.9</h3>

                <p className="text-slate-500">Rating</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}

      <section className="bg-slate-50 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center">Why Choose Us</h2>

          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <div className="bg-white p-8 rounded-3xl shadow">
              <h3 className="text-2xl font-bold">Premium Quality</h3>

              <p className="text-slate-600 mt-4">
                Carefully crafted frames with premium materials and long-lasting
                durability.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow">
              <h3 className="text-2xl font-bold">Fast Delivery</h3>

              <p className="text-slate-600 mt-4">
                Get your eyewear delivered quickly and safely to your doorstep.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow">
              <h3 className="text-2xl font-bold">Easy Returns</h3>

              <p className="text-slate-600 mt-4">
                Hassle-free returns and customer-friendly policies.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
