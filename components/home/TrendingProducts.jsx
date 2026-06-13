import { products } from "@/data/products";

import ProductCard from "../ui/ProductCard";

const TrendingProducts = () => {
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

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrendingProducts;
