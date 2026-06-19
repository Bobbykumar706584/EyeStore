import {
  doc,
  getDoc,
  setDoc,
  updateDoc,
  serverTimestamp,
} from "firebase/firestore";

import { db } from "@/lib/firebase";

// =====================
// GET WISHLIST
// =====================

export const getWishlist = async (userId) => {
  try {
    const wishlistRef = doc(
      db,

      "wishlists",

      userId,
    );

    const snapshot = await getDoc(wishlistRef);

    if (snapshot.exists()) {
      return snapshot.data().products || [];
    }

    return [];
  } catch (error) {
    console.log(error);

    return [];
  }
};

// =====================
// SAVE ENTIRE WISHLIST
// =====================

export const saveWishlist = async (
  userId,

  products,
) => {
  try {
    const wishlistRef = doc(
      db,

      "wishlists",

      userId,
    );

    await setDoc(
      wishlistRef,

      {
        products,

        updatedAt: serverTimestamp(),
      },
    );
  } catch (error) {
    console.log(error);
  }
};

// =====================
// ADD TO WISHLIST
// =====================

export const addToWishlist = async (
  userId,

  product,
) => {
  try {
    const products = await getWishlist(userId);

    const exists = products.find((item) => item.id === product.id);

    if (exists) {
      return products;
    }

    const updated = [...products, product];

    await saveWishlist(
      userId,

      updated,
    );

    return updated;
  } catch (error) {
    console.log(error);

    return [];
  }
};

// =====================
// REMOVE FROM WISHLIST
// =====================

export const removeWishlist = async (
  userId,

  productId,
) => {
  try {
    const products = await getWishlist(userId);

    const updated = products.filter((item) => item.id !== productId);

    await saveWishlist(
      userId,

      updated,
    );

    return updated;
  } catch (error) {
    console.log(error);

    return [];
  }
};

// =====================
// CHECK PRODUCT EXISTS
// =====================

export const isInWishlist = async (
  userId,

  productId,
) => {
  try {
    const products = await getWishlist(userId);

    return products.some((item) => item.id === productId);
  } catch (error) {
    console.log(error);

    return false;
  }
};

// =====================
// CLEAR WISHLIST
// =====================

export const clearWishlist = async (userId) => {
  try {
    await setDoc(
      doc(
        db,

        "wishlists",

        userId,
      ),

      {
        products: [],

        updatedAt: serverTimestamp(),
      },
    );
  } catch (error) {
    console.log(error);
  }
};

// getWishlist(user.uid)

// addToWishlist(
// user.uid,

// product
// )

// removeWishlist(
// user.uid,

// product.id
// )

// isInWishlist(
// user.uid,

// product.id
// )

// clearWishlist(user.uid)
