"use client";

import Link from "next/link";

import { Minus, Plus, Trash2 } from "lucide-react";

import { useCart } from "@/context/CartContext";

import ProtectedRoute from "@/components/auth/ProtectedRoute";

export default function CartPage() {
  const {
    cart,

    removeFromCart,

    increaseQty,

    decreaseQty,

    totalPrice,
  } = useCart();

  const gst = Math.round(totalPrice * 0.18);

  const finalTotal = totalPrice + gst;

  return (
    <ProtectedRoute>
      <section className="bg-slate-50 min-h-screen py-16">
        <div className="max-w-7xl mx-auto px-6">
          {/* Heading */}

          <div className="mb-14">
            <h1 className="text-5xl font-bold">Shopping Cart</h1>

            <p className="text-slate-500 mt-4">
              Review your items and proceed to checkout.
            </p>
          </div>

          {/* Empty Cart */}

          {cart.length === 0 ? (
            <div className="bg-white rounded-[40px] py-24 px-10 text-center shadow-lg">
              <img
                src="/empty-cart.png"
                alt="Empty Cart"
                className="w-72 mx-auto"
              />

              <h2 className="text-4xl font-bold mt-10">Your Cart Is Empty</h2>

              <p className="text-slate-500 mt-5">
                Looks like you haven't added anything yet.
              </p>

              <Link
                href="/products"
                className="
                  inline-block
                  mt-10
                  px-10
                  py-4
                  bg-blue-600
                  hover:bg-blue-700
                  text-white
                  rounded-2xl
                  font-semibold
                  duration-300
                "
              >
                Continue Shopping
              </Link>
            </div>
          ) : (
            <div className="grid lg:grid-cols-3 gap-10">
              {/* LEFT */}

              <div className="lg:col-span-2 space-y-8">
                {cart.map((item) => (
                  <div
                    key={item.id}
                    className="
                      bg-white
                      rounded-[32px]
                      shadow-md
                      hover:shadow-xl
                      transition-all
                      duration-300
                      p-6
                      flex
                      flex-col
                      sm:flex-row
                      gap-6
                    "
                  >
                    {/* IMAGE */}

                    <div className="w-full sm:w-40 h-40 bg-slate-100 rounded-3xl overflow-hidden">
                      <img
                        src={item.images?.[0] || "/placeholder.jpg"}
                        alt={item.name}
                        className="
                          w-full
                          h-full
                          object-cover
                          hover:scale-110
                          duration-500
                        "
                      />
                    </div>

                    {/* CONTENT */}

                    <div className="flex-1 flex flex-col justify-between">
                      <div>
                        <p className="text-blue-600">{item.brand}</p>

                        <h2 className="text-2xl font-bold mt-2">{item.name}</h2>

                        <p className="text-slate-500 mt-3">{item.category}</p>

                        <div className="flex gap-4 items-center mt-6">
                          <h3 className="text-3xl font-bold">₹{item.price}</h3>

                          {item.oldPrice && (
                            <span className="text-slate-400 line-through">
                              ₹{item.oldPrice}
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Bottom */}

                      <div className="flex justify-between items-center mt-8 flex-wrap gap-5">
                        {/* Quantity */}

                        <div className="flex items-center border rounded-full overflow-hidden">
                          <button
                            onClick={() => decreaseQty(item.id)}
                            className="
                              w-12
                              h-12
                              hover:bg-slate-100
                              flex
                              items-center
                              justify-center
                            "
                          >
                            <Minus size={18} />
                          </button>

                          <span className="w-14 text-center font-semibold">
                            {item.quantity}
                          </span>

                          <button
                            onClick={() => increaseQty(item.id)}
                            className="
                              w-12
                              h-12
                              hover:bg-slate-100
                              flex
                              items-center
                              justify-center
                            "
                          >
                            <Plus size={18} />
                          </button>
                        </div>

                        {/* Total */}

                        <div className="text-right">
                          <p className="text-slate-500">Total</p>

                          <h3 className="text-2xl font-bold">
                            ₹{item.price * item.quantity}
                          </h3>
                        </div>

                        {/* Delete */}

                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="
                            w-12
                            h-12
                            rounded-full
                            hover:bg-red-50
                            flex
                            items-center
                            justify-center
                          "
                        >
                          <Trash2 className="text-red-500" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* RIGHT */}

              <div className="bg-white rounded-[32px] shadow-xl p-8 h-fit sticky top-28">
                <h2 className="text-3xl font-bold">Order Summary</h2>

                <div className="space-y-6 mt-10">
                  <div className="flex justify-between text-slate-600">
                    <span>Subtotal</span>

                    <span>₹{totalPrice}</span>
                  </div>

                  <div className="flex justify-between text-slate-600">
                    <span>Shipping</span>

                    <span className="text-green-600 font-semibold">FREE</span>
                  </div>

                  <div className="flex justify-between text-slate-600">
                    <span>GST (18%)</span>

                    <span>₹{gst}</span>
                  </div>

                  <hr />

                  <div className="flex justify-between text-3xl font-bold">
                    <span>Total</span>

                    <span>₹{finalTotal}</span>
                  </div>

                  <Link
                    href="/checkout"
                    className="
                      block
                      text-center
                      mt-10
                      bg-blue-600
                      hover:bg-blue-700
                      text-white
                      py-5
                      rounded-2xl
                      text-lg
                      font-semibold
                      duration-300
                    "
                  >
                    Proceed To Checkout
                  </Link>

                  <Link
                    href="/products"
                    className="
                      block
                      text-center
                      mt-5
                      border
                      hover:bg-slate-50
                      py-5
                      rounded-2xl
                      font-semibold
                      duration-300
                    "
                  >
                    Continue Shopping
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </ProtectedRoute>
  );
}
