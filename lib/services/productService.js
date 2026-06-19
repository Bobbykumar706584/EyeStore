// lib/services/productService.js

import {
  collection,
  getDocs,
  getDoc,
  doc,
  addDoc,
  updateDoc,
  deleteDoc,
  query,
  where,
  serverTimestamp,
  setDoc,
} from "firebase/firestore";

import { db } from "../firebase";

const productsRef = collection(db, "products");

const productDoc = (id) => doc(db, "products", id);

// ==============================
// GET ALL PRODUCTS
// ==============================

export const getProducts = async () => {
  try {
    const snapshot = await getDocs(productsRef);

    return snapshot.docs.map((doc) => ({
      id: doc.id,

      ...doc.data(),
    }));
  } catch (error) {
    console.log(error);

    return [];
  }
};

// GET SINGLE PRODUCT

export const getProductById = async (id) => {
  try {
    const snapshot = await getDoc(doc(db, "products", id));

    if (snapshot.exists()) {
      return {
        id: snapshot.id,

        ...snapshot.data(),
      };
    }

    return null;
  } catch (error) {
    console.log(error);

    return null;
  }
};

// GET PRODUCT BY SLUG

export const getProductBySlug = async (slug) => {
  try {
    const q = query(
      productsRef,

      where("slug", "==", slug),
    );

    const snapshot = await getDocs(q);

    if (!snapshot.empty) {
      const product = snapshot.docs[0];

      return {
        id: product.id,

        ...product.data(),
      };
    }

    return null;
  } catch (error) {
    console.log(error);

    return null;
  }
};

// ==============================
// GET PRODUCTS BY CATEGORY
// ==============================

export const getProductsByCategory = async (category) => {
  try {
    const q = query(productsRef, where("category", "==", category));

    const snapshot = await getDocs(q);

    return snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc,
    }));
  } catch (error) {
    console.log(error);

    return [];
  }
};

// ==============================
// GET BEST SELLERS
// ==============================

export const getBestSellers = async () => {
  try {
    const q = query(productsRef, where("bestSeller", "==", true));

    const snapshot = await getDocs(q);

    return snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
  } catch (error) {
    console.log(error);

    return [];
  }
};

// ==============================
// GET TRENDING PRODUCTS
// ==============================

export const getTrendingProducts = async () => {
  try {
    const q = query(productsRef, where("trending", "==", true));

    const snapshot = await getDocs(q);

    return snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
  } catch (error) {
    console.log(error);

    return [];
  }
};

// ==============================
// GET FEATURED PRODUCTS
// ==============================

export const getFeaturedProducts = async () => {
  try {
    const q = query(productsRef, where("featured", "==", true));

    const snapshot = await getDocs(q);

    return snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
  } catch (error) {
    console.log(error);

    return [];
  }
};

// ==============================
// SEARCH PRODUCTS
// ==============================

export const searchProducts = async (searchTerm) => {
  try {
    const snapshot = await getDocs(productsRef);

    const products = snapshot.docs.map((doc) => ({
      ...doc.data(),
    }));

    return products.filter((product) =>
      product.name?.toLowerCase().includes(searchTerm.toLowerCase()),
    );
  } catch (error) {
    console.log(error);

    return [];
  }
};

// ==============================
// CREATE PRODUCT
// ==============================

export const createProduct = async (product) => {
  try {
    const productRef = doc(productsRef);

    await setDoc(productRef, {
      ...product,

      id: productRef.id,

      createdAt: serverTimestamp(),
    });

    return productRef.id;
  } catch (error) {
    console.log(error);

    return null;
  }
};

// ==============================
// UPDATE PRODUCT
// ==============================

export const updateProduct = async (id, data) => {
  try {
    await updateDoc(productDoc(id), {
      ...data,

      updatedAt: serverTimestamp(),
    });

    return true;
  } catch (error) {
    console.log(error);

    return false;
  }
};

// ==============================
// DELETE PRODUCT
// ==============================

export const deleteProduct = async (id) => {
  try {
    await deleteDoc(productDoc(id));

    return true;
  } catch (error) {
    console.log(error);

    return false;
  }
};

// ==============================
// UPLOAD DUMMY PRODUCTS
// ==============================

export const uploadProducts = async (products) => {
  try {
    for (const product of products) {
      const productRef = doc(productsRef);

      // Remove old id if exists
      const { id, ...rest } = product;

      await setDoc(productRef, {
        ...rest,

        // Same Firebase ID in document
        id: productRef.id,

        createdAt: serverTimestamp(),
      });
    }

    console.log("✅ Products Uploaded");

    return true;
  } catch (error) {
    console.log(error);

    return false;
  }
};
