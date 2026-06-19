"use client";

import ProtectedRoute from "@/components/auth/ProtectedRoute";

import { useAuth } from "@/context/AuthContext";

export default function ProfilePage() {
  const { user } = useAuth();

  return (
    <ProtectedRoute>
      <section className="min-h-screen py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-5xl font-bold">My Profile</h1>

          <div className="bg-white rounded-3xl shadow-lg p-10 mt-10">
            <p>
              <strong>Name:</strong> {user?.displayName}
            </p>

            <p className="mt-4">
              <strong>Email:</strong> {user?.email}
            </p>
          </div>
        </div>
      </section>
    </ProtectedRoute>
  );
}
