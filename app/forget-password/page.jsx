"use client";

import { useState } from "react";

import Link from "next/link";

import { sendPasswordResetEmail } from "firebase/auth";

import { auth } from "@/lib/firebase";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");

  const [success, setSuccess] = useState("");

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      await sendPasswordResetEmail(auth, email);

      setSuccess("Password reset email sent.");

      setEmail("");
    } catch (err) {
      alert(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <section className="min-h-screen bg-slate-50 flex justify-center items-center">
        <div className="bg-white w-full max-w-md p-10 rounded-[35px] shadow-lg">
          <h1 className="text-4xl font-bold text-center">Forgot Password</h1>

          <p className="text-slate-500 text-center mt-3">
            We'll send you a reset link.
          </p>

          <form onSubmit={handleSubmit} className="mt-10">
            <input
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border p-4 rounded-xl outline-none focus:border-blue-600"
            />

            {success && <p className="text-green-600 mt-4">{success}</p>}

            <button className="w-full mt-8 bg-blue-600 text-white py-4 rounded-xl">
              {loading ? "Sending..." : "Send Reset Link"}
            </button>
          </form>

          <p className="text-center mt-8">
            <Link href="/login" className="text-blue-600">
              Back To Login
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}
