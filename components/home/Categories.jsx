import { categories } from "@/data/categories";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const Categories = () => {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}

        <div className="text-center mb-14">
          <p className="text-blue-600 font-semibold mb-3">Shop By Category</p>

          <h2 className="text-4xl md:text-5xl font-bold text-slate-900">
            Find Your Perfect Pair
          </h2>

          <p className="text-slate-500 mt-5 max-w-2xl mx-auto">
            Explore our premium collection of stylish eyeglasses, sunglasses and
            accessories.
          </p>
        </div>

        {/* Grid */}

        <div className="grid md:grid-cols-3 gap-8">
          {categories.map((item) => (
            <div
              key={item.id}
              className="group relative h-[380px] rounded-3xl overflow-hidden cursor-pointer shadow-lg"
            >
              {/* Image */}

              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
              />

              {/* Overlay */}

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

              {/* Content */}

              <div className="absolute bottom-8 left-8">
                <h3 className="text-white text-3xl font-bold">{item.name}</h3>

                <button className="mt-5 border py-4 rounded-md px-2 flex items-center gap-2 text-white">
                  <Link href="/products" className="flex items-center gap-2">
                    Shop Now
                    <ArrowRight size={18} />
                  </Link>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
