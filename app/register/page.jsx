"use client";

import { useState } from "react";

import Link from "next/link";

import { useRouter } from "next/navigation";

import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

import { Eye, EyeOff } from "lucide-react";

import { auth } from "@/lib/firebase";

export default function RegisterPage() {
  const router = useRouter();

  const [name, setName] = useState("");

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);

  const [loading, setLoading] = useState(false);

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const userCredential = await createUserWithEmailAndPassword(
        auth,

        email,

        password,
      );

      await updateProfile(
        userCredential.user,

        {
          displayName: name,
        },
      );

      router.push("/");
    } catch (err) {
      alert(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <section className="min-h-screen bg-slate-50 flex items-center justify-center py-20">
        <div className="bg-white w-full max-w-md rounded-[35px] shadow-xl p-10">
          <h1 className="text-4xl font-bold text-center">Create Account</h1>

          <p className="text-slate-500 text-center mt-4">Join EyeStore today</p>

          <form onSubmit={handleRegister} className="mt-10 space-y-6">
            <input
              type="text"
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full border p-4 rounded-xl outline-none focus:border-blue-600"
            />

            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border p-4 rounded-xl outline-none focus:border-blue-600"
            />

            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full border p-4 rounded-xl outline-none focus:border-blue-600"
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-5 top-5"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>

            <button
              disabled={loading}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-xl"
            >
              {loading ? "Creating Account..." : "Register"}
            </button>
          </form>

          <p className="text-center mt-8 text-slate-500">
            Already have an account?
            <Link href="/login" className="text-blue-600 ml-2 font-semibold">
              Login
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}
