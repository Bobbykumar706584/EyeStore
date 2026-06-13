"use client";

import { useState } from "react";

import Navbar from "@/components/layout/Navbar";

import Footer from "@/components/layout/Footer";

import { useCart } from "../context/CartContext";

export default function CheckoutPage() {
  const {
    cart,

    totalPrice,
  } = useCart();

  const [form, setForm] = useState({
    firstName: "",

    lastName: "",

    email: "",

    phone: "",

    address: "",

    city: "",

    state: "",

    zip: "",

    country: "India",
  });

  const shipping = 0;

  const gst = Math.round(totalPrice * 0.18);

  const grandTotal = totalPrice + shipping + gst;

  const handleChange = (e) => {
    setForm({
      ...form,

      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(form);

    alert("Order Placed Successfully");
  };

  return (
    <>
      <Navbar />

      <section className="py-20 bg-slate-50 min-h-screen">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-5xl font-bold mb-12">Checkout</h1>

          <div className="grid lg:grid-cols-3 gap-10">
            {/* LEFT */}

            <div className="lg:col-span-2">
              <form
                onSubmit={handleSubmit}
                className="bg-white p-10 rounded-3xl shadow-sm"
              >
                <h2 className="text-3xl font-bold mb-8">Shipping Details</h2>

                <div className="grid md:grid-cols-2 gap-6">
                  <input
                    name="firstName"
                    placeholder="First Name"
                    value={form.firstName}
                    onChange={handleChange}
                    className="border p-4 rounded-xl outline-none focus:border-blue-500"
                  />

                  <input
                    name="lastName"
                    placeholder="Last Name"
                    value={form.lastName}
                    onChange={handleChange}
                    className="border p-4 rounded-xl outline-none focus:border-blue-500"
                  />

                  <input
                    name="email"
                    placeholder="Email"
                    value={form.email}
                    onChange={handleChange}
                    className="border p-4 rounded-xl outline-none focus:border-blue-500"
                  />

                  <input
                    name="phone"
                    placeholder="Phone"
                    value={form.phone}
                    onChange={handleChange}
                    className="border p-4 rounded-xl outline-none focus:border-blue-500"
                  />
                </div>

                <textarea
                  name="address"
                  placeholder="Full Address"
                  value={form.address}
                  onChange={handleChange}
                  rows={4}
                  className="border p-4 rounded-xl outline-none w-full mt-6 focus:border-blue-500"
                />

                <div className="grid md:grid-cols-3 gap-6 mt-6">
                  <input
                    name="city"
                    placeholder="City"
                    value={form.city}
                    onChange={handleChange}
                    className="border p-4 rounded-xl outline-none"
                  />

                  <input
                    name="state"
                    placeholder="State"
                    value={form.state}
                    onChange={handleChange}
                    className="border p-4 rounded-xl outline-none"
                  />

                  <input
                    name="zip"
                    placeholder="Zip Code"
                    value={form.zip}
                    onChange={handleChange}
                    className="border p-4 rounded-xl outline-none"
                  />
                </div>

                <div className="mt-10">
                  <h3 className="text-2xl font-bold mb-5">Payment Method</h3>

                  <div className="space-y-4">
                    <label className="flex gap-4 border p-5 rounded-2xl cursor-pointer">
                      <input type="radio" name="payment" defaultChecked />
                      Cash On Delivery
                    </label>

                    <label className="flex gap-4 border p-5 rounded-2xl cursor-pointer">
                      <input type="radio" name="payment" />
                      Razorpay
                    </label>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full mt-10 bg-blue-600 hover:bg-blue-700 text-white py-5 rounded-2xl text-lg"
                >
                  Place Order
                </button>
              </form>
            </div>

            {/* RIGHT */}

            <div>
              <div className="bg-white rounded-3xl p-8 sticky top-24 shadow-sm">
                <h2 className="text-3xl font-bold">Order Summary</h2>

                <div className="space-y-6 mt-8">
                  {cart.map((item) => (
                    <div key={item.id} className="flex gap-4">
                      <img
                        src={item.images[0]}
                        className="w-20 h-20 rounded-xl object-cover"
                      />

                      <div className="flex-1">
                        <h4 className="font-semibold">{item.name}</h4>

                        <p className="text-slate-500">
                          Qty:
                          {item.quantity}
                        </p>
                      </div>

                      <h4 className="font-bold">
                        ₹{item.price * item.quantity}
                      </h4>
                    </div>
                  ))}

                  <hr />

                  <div className="flex justify-between">
                    <span>Subtotal</span>

                    <span>₹{totalPrice}</span>
                  </div>

                  <div className="flex justify-between">
                    <span>Shipping</span>

                    <span>FREE</span>
                  </div>

                  <div className="flex justify-between">
                    <span>GST (18%)</span>

                    <span>₹{gst}</span>
                  </div>

                  <hr />

                  <div className="flex justify-between text-2xl font-bold">
                    <span>Total</span>

                    <span>₹{grandTotal}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
