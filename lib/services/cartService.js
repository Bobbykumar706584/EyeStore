import { doc, getDoc, setDoc, updateDoc } from "firebase/firestore";

import { db } from "@/lib/firebase";

export const getCart = async (userId) => {
  try {
    const cartRef = doc(
      db,

      "carts",

      userId,
    );

    const snap = await getDoc(cartRef);

    if (snap.exists()) {
      return snap.data().items;
    }

    return [];
  } catch (error) {
    console.log(error);

    return [];
  }
};

export const saveCart = async (
  userId,

  items,
) => {
  try {
    const cartRef = doc(
      db,

      "carts",

      userId,
    );

    await setDoc(
      cartRef,

      {
        items,

        updatedAt: new Date(),
      },
    );
  } catch (error) {
    console.log(error);
  }
};
