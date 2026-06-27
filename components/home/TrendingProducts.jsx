// import { products } from "@/data/products";
"use client";

import ProductCard from "../ui/ProductCard";
import { useEffect, useState } from "react";
import { getProducts } from "@/lib/services/productService";

const TrendingProducts = () => {
  const [products, setProducts] = useState([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);

      const data = await getProducts();

      setProducts(data);

      setLoading(false);
    };

    fetchProducts();
  }, []);
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="text-blue-600 font-semibold">Trending Collection</p>

          <h2 className="text-5xl font-bold mt-3">Trending Frames</h2>

          <p className="text-slate-500 mt-5">
            Discover the most loved eyewear styles.
          </p>
        </div>

        {loading ? (
          <div className="py-24 text-center">
            <h3 className="text-2xl font-semibold">Loading Products...</h3>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.slice(0, 3).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default TrendingProducts;
