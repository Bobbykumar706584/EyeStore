"use client";

import { useState } from "react";

import { Star, Minus, Plus, Heart } from "lucide-react";

import { products } from "@/data/products";

import Navbar from "@/components/layout/Navbar";

import Footer from "@/components/layout/Footer";

import ProductCard from "@/components/ui/ProductCard";

export default function ProductDetails({ params }) {
  const product = products.find((item) => item.id === Number(params.id));

  const [image, setImage] = useState(product.images[0]);

  const [quantity, setQuantity] = useState(1);

  const [selectedColor, setSelectedColor] = useState(product.colors[0]);

  return (
    <>
      <Navbar />

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20">
            {/* Images */}

            <div>
              <div className="bg-slate-100 rounded-[35px] overflow-hidden">
                <img src={image} className="w-full h-[600px] object-cover" />
              </div>

              <div className="flex gap-5 mt-6">
                {product.images.map((img) => (
                  <button
                    key={img}
                    onClick={() => setImage(img)}
                    className={`overflow-hidden rounded-2xl border-2

${image === img ? "border-blue-600" : "border-transparent"}`}
                  >
                    <img src={img} className="w-28 h-28 object-cover" />
                  </button>
                ))}
              </div>
            </div>

            {/* Details */}

            <div>
              <p className="text-blue-600">{product.brand}</p>

              <h1 className="text-5xl font-bold mt-3">{product.name}</h1>

              <div className="flex items-center gap-3 mt-5">
                <Star className="fill-yellow-400 text-yellow-400" />

                <span>{product.rating}</span>
              </div>

              <div className="flex gap-5 items-center mt-8">
                <h2 className="text-4xl font-bold">₹{product.price}</h2>

                <span className="line-through text-slate-400 text-xl">
                  ₹{product.oldPrice}
                </span>
              </div>

              <p className="text-slate-600 leading-8 mt-8">
                {product.description}
              </p>

              {/* Colors */}

              <div className="mt-10">
                <h3 className="font-bold text-xl">Color</h3>

                <div className="flex gap-4 mt-5">
                  {product.colors.map((color) => (
                    <button
                      key={color}
                      onClick={() => setSelectedColor(color)}
                      className={`px-6 py-3 rounded-full border

${selectedColor === color ? "bg-blue-600 text-white" : "bg-white"}`}
                    >
                      {color}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity */}

              <div className="mt-10">
                <h3 className="font-bold text-xl">Quantity</h3>

                <div className="flex items-center gap-5 mt-5">
                  <button
                    onClick={() => quantity > 1 && setQuantity(quantity - 1)}
                    className="w-12 h-12 rounded-full border"
                  >
                    <Minus size={18} />
                  </button>

                  <span className="text-2xl">{quantity}</span>

                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-12 h-12 rounded-full border"
                  >
                    <Plus size={18} />
                  </button>
                </div>
              </div>

              {/* Buttons */}

              <div className="flex gap-5 mt-12">
                <button className="flex-1 bg-slate-900 hover:bg-blue-600 text-white py-5 rounded-2xl duration-300">
                  Add To Cart
                </button>

                <button className="flex-1 border py-5 rounded-2xl hover:bg-slate-100">
                  Buy Now
                </button>

                <button className="w-16 border rounded-2xl">
                  <Heart className="mx-auto" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related */}

      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-10">Related Products</h2>

          <div className="grid md:grid-cols-4 gap-8">
            {products.slice(0, 4).map((item) => (
              <ProductCard key={item.id} product={item} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
