"use client";

import { useState } from "react";

import Link from "next/link";

import { useRouter, useSearchParams } from "next/navigation";

import {
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";

import { Eye, EyeOff } from "lucide-react";

import { auth } from "@/lib/firebase";

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);

  const [loading, setLoading] = useState(false);

  const searchParams = useSearchParams();

  const redirect = searchParams.get("redirect") || "/";

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      await signInWithEmailAndPassword(auth, email, password);

      router.push(redirect);
    } catch (err) {
      alert(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleGoogle = async () => {
    try {
      const provider = new GoogleAuthProvider();

      await signInWithPopup(auth, provider);

      router.push(redirect);
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <>
      <section className="min-h-screen bg-slate-50 flex items-center justify-center py-20">
        <div className="bg-white w-full max-w-md rounded-[35px] shadow-xl p-10">
          <h1 className="text-4xl font-bold text-center">Welcome Back</h1>

          <p className="text-slate-500 text-center mt-4">
            Login to continue shopping
          </p>

          <form onSubmit={handleLogin} className="mt-10 space-y-6">
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

            <div className="text-right">
              <Link
                href="/forgot-password"
                className="text-blue-600 hover:underline"
              >
                Forgot Password?
              </Link>
            </div>

            <button
              disabled={loading}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-xl"
            >
              {loading ? "Logging In..." : "Login"}
            </button>

            <button
              type="button"
              onClick={handleGoogle}
              className="w-full border py-4 rounded-xl hover:bg-slate-50"
            >
              Continue With Google
            </button>
          </form>

          <p className="text-center mt-8 text-slate-500">
            Don't have an account?
            <Link href="/register" className="text-blue-600 ml-2 font-semibold">
              Register
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}
