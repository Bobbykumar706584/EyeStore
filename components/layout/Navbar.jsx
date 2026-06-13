"use client";
import { useCart } from "@/app/context/CartContext";
import { useWishlist } from "@/app/context/WishlistContext";
import { Heart, Search, ShoppingCart, User } from "lucide-react";
import Link from "next/link";

const Navbar = () => {
  const { cart } = useCart();
  const { wishlist } = useWishlist();

  const totalItems = cart.reduce(
    (acc, item) => acc + item.quantity,

    0,
  );
  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/">
          <h1 className="text-2xl font-bold text-blue-600">EyeStore</h1>
        </Link>
        <div className="hidden md:flex gap-8 text-gray-600">
          <Link href={"/"}>Home</Link>
          <Link href={"/products"}>Shop</Link>
          <Link href={"/"}>About</Link>
          <Link href={"/"}>Contact</Link>
        </div>
        <div className="flex gap-5 text-gray-600">
          <Search size={20} />
          <Link href="/wishlist" className="relative">
            <Heart />

            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
              {wishlist.length}
            </span>
          </Link>
          <Link href="/cart" className="relative">
            <ShoppingCart />

            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
              {totalItems}
            </span>
          </Link>
          <User size={20} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
