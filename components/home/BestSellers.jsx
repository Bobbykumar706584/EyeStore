"use client";

import { products } from "@/data/products";

import { Swiper, SwiperSlide } from "swiper/react";

import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";

import "swiper/css/navigation";

import "swiper/css/pagination";

import ProductCard from "../ui/ProductCard";

const BestSellers = () => {
  const bestProducts = products.filter((item) => item.bestSeller);

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}

        <div className="flex justify-between items-center mb-14">
          <div>
            <p className="text-blue-600 font-semibold">Most Loved</p>

            <h2 className="text-5xl font-bold mt-2">Best Sellers</h2>
          </div>

          <button className="hidden md:block border px-6 py-3 rounded-xl hover:bg-slate-900 hover:text-white duration-300">
            View All
          </button>
        </div>

        {/* Slider */}

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 3000,
          }}
          spaceBetween={30}
          breakpoints={{
            320: {
              slidesPerView: 1,
            },

            640: {
              slidesPerView: 2,
            },

            1024: {
              slidesPerView: 3,
            },

            1280: {
              slidesPerView: 4,
            },
          }}
        >
          {bestProducts.map((product) => (
            <SwiperSlide key={product.id}>
              <ProductCard product={product} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default BestSellers;
