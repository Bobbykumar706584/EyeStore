"use client";

import { useEffect, useMemo, useState } from "react";
import { Search, SlidersHorizontal } from "lucide-react";

import ProductCard from "@/components/ui/ProductCard";
import { filterCategories } from "@/data/filterCategories";
import { getProducts } from "@/lib/services/productService";

export default function ProductsPage() {
  const [products, setProducts] = useState([]);

  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");

  const [category, setCategory] = useState("All");

  const [sort, setSort] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);

      const data = await getProducts();

      setProducts(data);

      setLoading(false);
    };

    fetchProducts();
  }, []);

  const filteredProducts = useMemo(() => {
    let data = [...products];

    if (category !== "All") {
      data = data.filter((item) => item.category === category);
    }

    if (search) {
      data = data.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase()),
      );
    }

    if (sort === "low") {
      data.sort((a, b) => a.price - b.price);
    }

    if (sort === "high") {
      data.sort((a, b) => b.price - a.price);
    }

    return data;
  }, [products, search, category, sort]);

  return (
    <section className="bg-slate-50 min-h-screen">
      {/* Hero */}

      <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <span className="inline-block px-5 py-2 bg-white/10 backdrop-blur text-white rounded-full mb-6">
            Premium Eyewear Collection
          </span>

          <h1 className="text-5xl md:text-6xl font-bold text-white">
            Find Your Perfect
            <span className="text-blue-400"> Frames</span>
          </h1>

          <p className="text-slate-300 mt-6 max-w-2xl mx-auto">
            Discover stylish eyeglasses and sunglasses crafted with premium
            materials for everyday comfort.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 -mt-12 pb-16">
        {/* Search Card */}

        <div className="bg-white rounded-3xl shadow-xl p-6 mb-10">
          <div className="flex flex-col md:flex-row gap-5 justify-between">
            {/* Search */}

            <div className="relative flex-1">
              <Search
                size={20}
                className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400"
              />

              <input
                type="text"
                placeholder="Search your favourite frames..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="
                w-full
                h-14
                rounded-2xl
                border
                border-slate-200
                pl-14
                pr-5
                outline-none
                focus:ring-2
                focus:ring-blue-500
                transition
              "
              />
            </div>

            {/* Sort */}

            <div className="relative">
              <SlidersHorizontal
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
              />

              <select
                value={sort}
                onChange={(e) => setSort(e.target.value)}
                className="
                h-14
                pl-12
                pr-6
                rounded-2xl
                border
                border-slate-200
                outline-none
                cursor-pointer
                bg-white
              "
              >
                <option value="">Sort By</option>

                <option value="low">Price: Low to High</option>

                <option value="high">Price: High to Low</option>
              </select>
            </div>
          </div>

          {/* Categories */}

          <div className="flex flex-wrap gap-4 mt-8">
            {filterCategories.map((item) => (
              <button
                key={item}
                onClick={() => setCategory(item)}
                className={`
                  px-6 py-3 rounded-full
                  font-medium
                  transition-all duration-300
                  ${
                    category === item
                      ? "bg-blue-600 text-white shadow-lg shadow-blue-200 scale-105"
                      : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                  }
                `}
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        {/* Product Count */}

        {!loading && (
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold text-slate-800">Products</h2>

            <span className="bg-white px-5 py-2 rounded-full shadow">
              {filteredProducts.length} Items
            </span>
          </div>
        )}

        {/* Loading */}

        {loading ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="
                h-[420px]
                rounded-3xl
                bg-white
                animate-pulse
                shadow
              "
              />
            ))}
          </div>
        ) : filteredProducts.length > 0 ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="transition duration-300 hover:-translate-y-2"
              >
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-28">
            <div className="text-7xl mb-5">😕</div>

            <h3 className="text-3xl font-bold text-slate-800">
              No Products Found
            </h3>

            <p className="text-slate-500 mt-4">
              Try another search or category.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
