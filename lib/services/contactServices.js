import { collection, doc, setDoc, serverTimestamp } from "firebase/firestore";

import { db } from "../firebase";

const contactsRef = collection(db, "contacts");

export const sendContactMessage = async (data) => {
  try {
    // Generate Firebase document reference
    const contactRef = doc(contactsRef);

    await setDoc(contactRef, {
      id: contactRef.id,

      name: data.name,

      email: data.email,

      subject: data.subject,

      message: data.message,

      createdAt: serverTimestamp(),
    });

    return {
      success: true,

      id: contactRef.id,
    };
  } catch (error) {
    console.log("Contact Error:", error);

    return {
      success: false,

      error,
    };
  }
};
