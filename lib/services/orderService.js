import {
  collection,
  addDoc,
  getDocs,
  getDoc,
  doc,
  query,
  where,
  updateDoc,
  deleteDoc,
  serverTimestamp,
} from "firebase/firestore";

import { db } from "@/lib/firebase";

const ordersRef = collection(db, "orders");

// =======================
// PLACE ORDER
// =======================

export const placeOrder = async (order) => {
  try {
    const docRef = await addDoc(
      ordersRef,

      {
        ...order,

        createdAt: serverTimestamp(),
      },
    );

    return docRef.id;
  } catch (error) {
    console.log(error);

    return null;
  }
};

// =======================
// GET USER ORDERS
// =======================

export const getOrders = async (userId) => {
  try {
    const q = query(
      ordersRef,

      where(
        "userId",

        "==",

        userId,
      ),
    );

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

// =======================
// GET SINGLE ORDER
// =======================

export const getOrderById = async (id) => {
  try {
    const snapshot = await getDoc(
      doc(
        db,

        "orders",

        id,
      ),
    );

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

// =======================
// UPDATE ORDER STATUS
// =======================

export const updateOrderStatus = async (
  id,

  status,
) => {
  try {
    await updateDoc(
      doc(
        db,

        "orders",

        id,
      ),

      {
        orderStatus: status,
      },
    );
  } catch (error) {
    console.log(error);
  }
};

// =======================
// UPDATE PAYMENT STATUS
// =======================

export const updatePaymentStatus = async (
  id,

  status,
) => {
  try {
    await updateDoc(
      doc(
        db,

        "orders",

        id,
      ),

      {
        paymentStatus: status,
      },
    );
  } catch (error) {
    console.log(error);
  }
};

// =======================
// CANCEL ORDER
// =======================

export const cancelOrder = async (id) => {
  try {
    await updateDoc(
      doc(
        db,

        "orders",

        id,
      ),

      {
        orderStatus: "Cancelled",
      },
    );
  } catch (error) {
    console.log(error);
  }
};

// =======================
// DELETE ORDER
// ADMIN ONLY
// =======================

export const deleteOrder = async (id) => {
  try {
    await deleteDoc(
      doc(
        db,

        "orders",

        id,
      ),
    );
  } catch (error) {
    console.log(error);
  }
};

// await placeOrder(order);

// await getOrders(user.uid);

// await getOrderById(id);

// await cancelOrder(id);

// await updateOrderStatus(
// id,

// "Delivered"
// );

// await updatePaymentStatus(
// id,

// "Paid"
// );

// await deleteOrder(id);
