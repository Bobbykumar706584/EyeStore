"use client";

import Link from "next/link";

import { Heart, ShoppingCart, Eye, Star } from "lucide-react";
import { useCart } from "@/app/context/CartContext";
import { useWishlist } from "@/app/context/WishlistContext";

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();
  const {
    toggleWishlist,

    isWishlisted,
  } = useWishlist();
  const discount = Math.round(
    ((product.oldPrice - product.price) / product.oldPrice) * 100,
  );

  return (
    <div className="group bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300">
      {/* IMAGE */}

      <div className="relative overflow-hidden">
        <Link href={`/product/${product.id}`}>
          <img
            src={product.images[0]}
            alt={product.name}
            className="h-[320px] w-full object-cover group-hover:scale-110 duration-700"
          />
        </Link>

        {/* Badges */}

        <div className="absolute top-4 left-4 flex flex-col gap-2">
          <span className="bg-blue-600 text-white text-xs px-4 py-2 rounded-full">
            {product.badge}
          </span>

          <span className="bg-red-500 text-white text-xs px-4 py-2 rounded-full">
            {discount}% OFF
          </span>
        </div>

        {/* Wishlist */}

        <button
          onClick={() => toggleWishlist(product)}
          className="absolute top-4 right-4 bg-white p-3 rounded-full shadow-lg"
        >
          <Heart
            size={18}
            className={`

${isWishlisted(product.id) ? "fill-red-500 text-red-500" : "text-slate-700"}

`}
          />
        </button>

        {/* Quick View */}

        <button className="absolute bottom-5 left-1/2 -translate-x-1/2 bg-white px-6 py-3 rounded-full shadow-xl opacity-0 translate-y-10 group-hover:opacity-100 group-hover:translate-y-0 duration-300 flex items-center gap-2">
          <Eye size={18} />
          Quick View
        </button>
      </div>

      {/* CONTENT */}

      <div className="p-6">
        <p className="text-sm text-slate-500">{product.brand}</p>

        <Link href={`/product/${product.id}`}>
          <h3 className="text-xl font-semibold mt-2 hover:text-blue-600 duration-300">
            {product.name}
          </h3>
        </Link>

        {/* Category */}

        <p className="text-sm text-slate-400 mt-2">{product.category}</p>

        {/* Rating */}

        <div className="flex items-center gap-2 mt-4">
          <Star size={18} className="fill-yellow-400 text-yellow-400" />

          <span className="font-medium">{product.rating}</span>
        </div>

        {/* Price */}

        <div className="mt-5 flex items-center gap-3">
          <h4 className="text-2xl font-bold">₹{product.price}</h4>

          <span className="text-slate-400 line-through">
            ₹{product.oldPrice}
          </span>
        </div>

        {/* Colors */}

        <div className="flex gap-2 mt-5">
          {product.colors.map((color) => (
            <div
              key={color}
              className="w-6 h-6 rounded-full border border-slate-300"
              style={{
                backgroundColor: color.toLowerCase(),
              }}
            />
          ))}
        </div>

        {/* Cart */}

        <button
          onClick={() => addToCart(product)}
          className="w-full mt-6 bg-slate-900 hover:bg-blue-600 text-white py-4 rounded-xl duration-300 flex justify-center gap-2 items-center"
        >
          <ShoppingCart size={20} />
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
