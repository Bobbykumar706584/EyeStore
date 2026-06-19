import { doc, setDoc, getDoc, serverTimestamp } from "firebase/firestore";

import { db } from "../firebase";

export const createUser = async (user) => {
  try {
    const userRef = doc(db, "users", user.uid);

    const userSnap = await getDoc(userRef);

    if (!userSnap.exists()) {
      await setDoc(userRef, {
        uid: user.uid,

        name: user.displayName || "",

        email: user.email || "",

        phone: "",

        avatar: user.photoURL || "",

        wishlist: [],

        addresses: [],

        createdAt: serverTimestamp(),
      });
    }
  } catch (error) {
    console.log("Create User Error:", error);

    throw error;
  }
};
