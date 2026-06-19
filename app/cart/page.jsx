"use client";

import { Minus, Plus, Trash2 } from "lucide-react";

import { useCart } from "../../context/CartContext";
import Link from "next/link";
import ProtectedRoute from "@/components/auth/ProtectedRoute";

export default function CartPage() {
  const {
    cart,

    removeFromCart,

    increaseQty,

    decreaseQty,

    totalPrice,
  } = useCart();

  return (
    <>
      <ProtectedRoute>
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6">
            <h1 className="text-5xl font-bold mb-12">Shopping Cart</h1>

            {cart.length === 0 ? (
              <div className="text-center py-32">
                <h2 className="text-3xl font-bold">Your Cart is Empty</h2>

                <p className="text-slate-500 mt-4">
                  Add products to continue shopping.
                </p>
              </div>
            ) : (
              <div className="grid lg:grid-cols-3 gap-12">
                {/* LEFT */}

                <div className="lg:col-span-2 space-y-6">
                  {cart.map((item) => (
                    <div
                      key={item.id}
                      className="flex gap-6 border p-6 rounded-3xl"
                    >
                      <img
                        src={item.images[0]}
                        className="w-32 h-32 object-cover rounded-2xl"
                      />

                      <div className="flex-1">
                        <h3 className="text-2xl font-bold">{item.name}</h3>

                        <p className="text-slate-500 mt-2">₹{item.price}</p>

                        <div className="flex items-center gap-4 mt-5">
                          <button
                            onClick={() => decreaseQty(item.id)}
                            className="w-10 h-10 border rounded-full"
                          >
                            <Minus size={18} />
                          </button>

                          <span>{item.quantity}</span>

                          <button
                            onClick={() => increaseQty(item.id)}
                            className="w-10 h-10 border rounded-full"
                          >
                            <Plus size={18} />
                          </button>
                        </div>
                      </div>

                      <button onClick={() => removeFromCart(item.id)}>
                        <Trash2 className="text-red-500" />
                      </button>
                    </div>
                  ))}
                </div>

                {/* RIGHT */}

                <div className="border p-8 rounded-3xl h-fit">
                  <h3 className="text-3xl font-bold">Order Summary</h3>

                  <div className="space-y-5 mt-8">
                    <div className="flex justify-between">
                      <span>Subtotal</span>

                      <span>₹{totalPrice}</span>
                    </div>

                    <div className="flex justify-between">
                      <span>Shipping</span>

                      <span>FREE</span>
                    </div>

                    <div className="flex justify-between">
                      <span>GST</span>

                      <span>₹{Math.round(totalPrice * 0.18)}</span>
                    </div>

                    <hr />

                    <div className="flex justify-between text-2xl font-bold">
                      <span>Total</span>

                      <span>₹{totalPrice + Math.round(totalPrice * 0.18)}</span>
                    </div>

                    <Link
                      href="/checkout"
                      className="block text-center w-full mt-8 bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-2xl"
                    >
                      Proceed To Checkout
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>
      </ProtectedRoute>
    </>
  );
}
