"use client";

import { createContext, useContext, useEffect, useState } from "react";

const WishlistContext = createContext();

export const WishlistProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    const data = localStorage.getItem("wishlist");

    if (data) {
      setWishlist(JSON.parse(data));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(
      "wishlist",

      JSON.stringify(wishlist),
    );
  }, [wishlist]);

  const toggleWishlist = (product) => {
    const exists = wishlist.find((item) => item.id === product.id);

    if (exists) {
      setWishlist(wishlist.filter((item) => item.id !== product.id));

      return;
    }

    setWishlist([...wishlist, product]);
  };

  const isWishlisted = (id) => {
    return wishlist.some((item) => item.id === id);
  };

  return (
    <WishlistContext.Provider
      value={{
        wishlist,

        toggleWishlist,

        isWishlisted,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
};

export const useWishlist = () => useContext(WishlistContext);
