"use client";

import { useEffect, useMemo, useState } from "react";

import { Search } from "lucide-react";

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
        item.name?.toLowerCase().includes(search.toLowerCase()),
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
    <>
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          {/* Heading */}

          <div className="mb-10">
            <h1 className="text-5xl font-bold">Shop Collection</h1>

            <p className="text-slate-500 mt-4">
              Discover premium eyewear crafted for style and comfort.
            </p>
          </div>

          {/* Search + Sort */}

          <div className="flex flex-col md:flex-row gap-5 justify-between mb-10">
            <div className="relative w-full md:w-[400px]">
              <Search
                size={18}
                className="absolute left-5 top-4 text-slate-400"
              />

              <input
                type="text"
                placeholder="Search frames..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full border rounded-xl py-4 pl-14 pr-4 outline-none focus:border-blue-500"
              />
            </div>

            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="border px-5 py-4 rounded-xl outline-none"
            >
              <option value="">Sort By</option>

              <option value="low">Price Low To High</option>

              <option value="high">Price High To Low</option>
            </select>
          </div>

          {/* Categories */}

          <div className="flex flex-wrap gap-4 mb-12">
            {filterCategories.map((item) => (
              <button
                key={item}
                onClick={() => setCategory(item)}
                className={`px-6 py-3 rounded-full border duration-300

                ${
                  category === item
                    ? "bg-blue-600 text-white border-blue-600"
                    : "bg-white hover:bg-slate-100"
                }`}
              >
                {item}
              </button>
            ))}
          </div>

          {/* Loading */}

          {loading ? (
            <div className="py-24 text-center">
              <h3 className="text-2xl font-semibold">Loading Products...</h3>
            </div>
          ) : (
            <>
              {/* Count */}

              <p className="mb-8 text-slate-500">
                {filteredProducts.length} Products Found
              </p>

              {/* Grid */}

              {filteredProducts.length > 0 ? (
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-8">
                  {filteredProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              ) : (
                <div className="py-24 text-center">
                  <h3 className="text-3xl font-bold">No Products Found</h3>

                  <p className="text-slate-500 mt-4">Try another search.</p>
                </div>
              )}
            </>
          )}
        </div>
      </section>
    </>
  );
}
