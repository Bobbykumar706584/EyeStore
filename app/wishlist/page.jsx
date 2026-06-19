"use client";

import Link from "next/link";

import { Trash2, ShoppingCart } from "lucide-react";

import Navbar from "@/components/layout/Navbar";

import Footer from "@/components/layout/Footer";

import { useWishlist } from "../../context/WishlistContext";
import { useCart } from "../../context/CartContext";
import ProtectedRoute from "@/components/auth/ProtectedRoute";

export default function WishlistPage() {
  const {
    wishlist,

    toggleWishlist,
  } = useWishlist();

  const { addToCart } = useCart();

  return (
    <>
      <ProtectedRoute>
        <Navbar />

        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6">
            <h1 className="text-5xl font-bold mb-12">Wishlist</h1>

            {wishlist.length === 0 ? (
              <div className="text-center py-32">
                <h2 className="text-3xl font-bold">No Wishlist Items</h2>

                <p className="text-slate-500 mt-4">
                  Save products to view them later.
                </p>

                <Link
                  href="/products"
                  className="inline-block mt-8 bg-blue-600 text-white px-8 py-4 rounded-xl"
                >
                  Shop Now
                </Link>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {wishlist.map((product) => (
                  <div
                    key={product.id}
                    className="bg-white rounded-3xl shadow-lg overflow-hidden"
                  >
                    <img
                      src={product.images[0]}
                      className="w-full h-[320px] object-cover"
                    />

                    <div className="p-6">
                      <p className="text-slate-500">{product.brand}</p>

                      <h3 className="text-2xl font-bold mt-2">
                        {product.name}
                      </h3>

                      <div className="mt-5">
                        <h4 className="text-3xl font-bold">₹{product.price}</h4>
                      </div>

                      <div className="flex gap-4 mt-8">
                        <button
                          onClick={() => addToCart(product)}
                          className="flex-1 bg-blue-600 text-white py-4 rounded-xl flex justify-center gap-2"
                        >
                          <ShoppingCart size={20} />
                          Add
                        </button>

                        <button
                          onClick={() => toggleWishlist(product)}
                          className="w-14 border rounded-xl"
                        >
                          <Trash2 className="mx-auto text-red-500" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>

        <Footer />
      </ProtectedRoute>
    </>
  );
}
