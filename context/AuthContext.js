"use client";

import { createContext, useContext, useEffect, useState } from "react";

import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
  sendPasswordResetEmail,
  updateProfile,
} from "firebase/auth";

import { auth } from "@/lib/firebase";
import { createUser } from "@/lib/services/userService";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const [loading, setLoading] = useState(true);

  // CHECK USER LOGIN STATE

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(
      auth,

      (currentUser) => {
        setUser(currentUser);

        setLoading(false);
      },
    );

    return () => unsubscribe();
  }, []);

  // LOGIN

  const login = async (
    email,

    password,
  ) => {
    try {
      setLoading(true);

      const result = await signInWithEmailAndPassword(
        auth,

        email,

        password,
      );

      return result;
    } catch (error) {
      throw error;
    } finally {
      setLoading(false);
    }
  };

  // REGISTER

  const register = async (
    name,

    email,

    password,
  ) => {
    try {
      setLoading(true);

      const userCredential = await createUserWithEmailAndPassword(
        auth,

        email,

        password,
      );

      // Update Firebase Profile

      await updateProfile(
        userCredential.user,

        {
          displayName: name,
        },
      );

      // Save User to Firestore

      await createUser({
        ...userCredential.user,

        displayName: name,
      });

      setUser({
        ...userCredential.user,

        displayName: name,
      });

      return userCredential;
    } catch (error) {
      throw error;
    } finally {
      setLoading(false);
    }
  };

  // GOOGLE LOGIN

  const googleLogin = async () => {
    try {
      setLoading(true);

      const provider = new GoogleAuthProvider();

      const result = await signInWithPopup(
        auth,

        provider,
      );

      // Save user if not exists

      await createUser(result.user);

      setUser(result.user);

      return result;
    } catch (error) {
      throw error;
    } finally {
      setLoading(false);
    }
  };

  // FORGOT PASSWORD

  const forgotPassword = async (email) => {
    try {
      return await sendPasswordResetEmail(
        auth,

        email,
      );
    } catch (error) {
      throw error;
    }
  };

  // LOGOUT

  const logout = async () => {
    try {
      await signOut(auth);

      setUser(null);
    } catch (error) {
      throw error;
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,

        loading,

        login,

        register,

        googleLogin,

        forgotPassword,

        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
