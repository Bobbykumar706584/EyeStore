"use client";

import { useState } from "react";

import { Mail, Phone, MapPin } from "lucide-react";

import { sendContactMessage } from "@/lib/services/contactServices";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",

    email: "",

    subject: "",

    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,

      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    const result = await sendContactMessage(form);

    setLoading(false);

    if (result.success) {
      alert("Message Sent Successfully!");

      setForm({
        name: "",

        email: "",

        subject: "",

        message: "",
      });
    } else {
      alert("Something went wrong.");
    }
  };

  return (
    <>
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          {/* Heading */}

          <div className="text-center">
            <h1 className="text-5xl font-bold">Contact Us</h1>

            <p className="mt-5 text-slate-600">We'd love to hear from you.</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 mt-20">
            {/* FORM */}

            <div className="bg-white p-10 rounded-3xl shadow-lg">
              <h2 className="text-3xl font-bold mb-8">Send Message</h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  className="w-full border rounded-xl px-5 py-4 outline-none focus:border-blue-500"
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={form.email}
                  onChange={handleChange}
                  required
                  className="w-full border rounded-xl px-5 py-4 outline-none focus:border-blue-500"
                />

                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={form.subject}
                  onChange={handleChange}
                  required
                  className="w-full border rounded-xl px-5 py-4 outline-none focus:border-blue-500"
                />

                <textarea
                  rows={6}
                  name="message"
                  placeholder="Your Message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  className="w-full border rounded-xl px-5 py-4 outline-none focus:border-blue-500"
                />

                <button
                  type="submit"
                  disabled={loading}
                  className="bg-blue-600 hover:bg-blue-700 disabled:opacity-50 text-white px-10 py-4 rounded-xl duration-300"
                >
                  {loading ? "Sending..." : "Send Message"}
                </button>
              </form>
            </div>

            {/* CONTACT INFO */}

            <div>
              <h2 className="text-3xl font-bold">Get In Touch</h2>

              <p className="text-slate-600 mt-5 leading-8">
                Have questions about our products or your order? Contact us
                anytime and our team will help you.
              </p>

              <div className="space-y-8 mt-12">
                <div className="flex gap-5">
                  <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center">
                    <Phone className="text-blue-600" />
                  </div>

                  <div>
                    <h3 className="font-semibold">Phone</h3>

                    <p className="text-slate-500">+91 9876543210</p>
                  </div>
                </div>

                <div className="flex gap-5">
                  <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center">
                    <Mail className="text-blue-600" />
                  </div>

                  <div>
                    <h3 className="font-semibold">Email</h3>

                    <p className="text-slate-500">support@eyestore.com</p>
                  </div>
                </div>

                <div className="flex gap-5">
                  <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center">
                    <MapPin className="text-blue-600" />
                  </div>

                  <div>
                    <h3 className="font-semibold">Address</h3>

                    <p className="text-slate-500">New Delhi, India</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
