"use client";

import ProtectedRoute from "@/components/auth/ProtectedRoute";

import { orders } from "@/data/orders";

export default function OrdersPage() {
  return (
    <ProtectedRoute>
      <section className="min-h-screen py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-5xl font-bold">My Orders</h1>

          <div className="space-y-8 mt-12">
            {orders.map((order) => (
              <div
                key={order.id}
                className="bg-white rounded-3xl shadow-sm p-8"
              >
                <div className="flex flex-col md:flex-row justify-between">
                  <div>
                    <h3 className="text-2xl font-bold">{order.id}</h3>

                    <p className="text-slate-500 mt-2">{order.date}</p>
                  </div>

                  <div className="mt-5 md:mt-0 text-right">
                    <p className="font-semibold">₹{order.total}</p>

                    <p className="text-green-600">{order.payment}</p>

                    <p className="text-blue-600">{order.status}</p>
                  </div>
                </div>

                <div className="mt-8 space-y-5">
                  {order.items.map((item, index) => (
                    <div key={index} className="flex gap-5 items-center">
                      <img
                        src={item.image}
                        className="w-24 h-24 rounded-2xl object-cover"
                        alt={item.name}
                      />

                      <div>
                        <h4 className="font-bold">{item.name}</h4>

                        <p className="text-slate-500">Qty: {item.quantity}</p>

                        <p className="mt-1">₹{item.price}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </ProtectedRoute>
  );
}
