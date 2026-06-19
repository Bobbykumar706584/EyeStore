"use client";

import { createContext, useContext, useEffect, useState } from "react";

import { doc, getDoc, setDoc } from "firebase/firestore";

import { useAuth } from "./AuthContext";
import { db } from "@/lib/firebase";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const { user } = useAuth();

  const [cart, setCart] = useState([]);

  const [loading, setLoading] = useState(true);

  // FETCH CART

  useEffect(() => {
    const fetchCart = async () => {
      try {
        setLoading(true);

        if (user) {
          const cartRef = doc(db, "carts", user.uid);

          const snap = await getDoc(cartRef);

          if (snap.exists()) {
            setCart(snap.data().items || []);
          } else {
            setCart([]);
          }
        } else {
          const data = localStorage.getItem("cart");

          if (data) {
            setCart(JSON.parse(data));
          } else {
            setCart([]);
          }
        }
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchCart();
  }, [user]);

  // SAVE CART

  useEffect(() => {
    const saveCart = async () => {
      try {
        if (loading) return;

        if (user) {
          await setDoc(
            doc(db, "carts", user.uid),

            {
              items: cart,

              updatedAt: new Date(),
            },
          );
        } else {
          localStorage.setItem(
            "cart",

            JSON.stringify(cart),
          );
        }
      } catch (error) {
        console.log(error);
      }
    };

    saveCart();
  }, [cart, user, loading]);

  // ADD TO CART

  const addToCart = (product) => {
    const exists = cart.find((item) => item.id === product.id);

    if (exists) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? {
                ...item,

                quantity: item.quantity + 1,
              }
            : item,
        ),
      );

      return;
    }

    setCart([
      ...cart,

      {
        ...product,

        quantity: 1,
      },
    ]);
  };

  // REMOVE

  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  // INCREASE

  const increaseQty = (id) => {
    setCart(
      cart.map((item) =>
        item.id === id
          ? {
              ...item,

              quantity: item.quantity + 1,
            }
          : item,
      ),
    );
  };

  // DECREASE

  const decreaseQty = (id) => {
    setCart(
      cart
        .map((item) =>
          item.id === id
            ? {
                ...item,

                quantity: item.quantity - 1,
              }
            : item,
        )

        .filter((item) => item.quantity > 0),
    );
  };

  // CLEAR CART

  const clearCart = () => {
    setCart([]);
  };

  // TOTAL ITEMS

  const totalItems = cart.reduce(
    (acc, item) => acc + item.quantity,

    0,
  );

  // TOTAL PRICE

  const totalPrice = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,

    0,
  );

  return (
    <CartContext.Provider
      value={{
        cart,

        loading,

        addToCart,

        removeFromCart,

        increaseQty,

        decreaseQty,

        clearCart,

        totalItems,

        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
