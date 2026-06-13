"use client";

import { reviews } from "@/data/reviews";

import { Swiper, SwiperSlide } from "swiper/react";

import { Pagination, Autoplay } from "swiper/modules";

import { Star } from "lucide-react";

import "swiper/css";

import "swiper/css/pagination";

const Reviews = () => {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}

        <div className="text-center mb-14">
          <p className="text-blue-600 font-semibold">Testimonials</p>

          <h2 className="text-5xl font-bold mt-3">Loved By Thousands</h2>

          <p className="text-slate-500 mt-5">
            See what our customers say about us.
          </p>
        </div>

        {/* Slider */}

        <Swiper
          modules={[Pagination, Autoplay]}
          autoplay={{
            delay: 3500,
          }}
          pagination={{
            clickable: true,
          }}
          spaceBetween={30}
          breakpoints={{
            320: {
              slidesPerView: 1,
            },

            768: {
              slidesPerView: 2,
            },

            1200: {
              slidesPerView: 3,
            },
          }}
        >
          {reviews.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="bg-white/80 backdrop-blur-md rounded-[35px] p-8 shadow-xl border border-slate-100 h-full">
                {/* User */}

                <div className="flex items-center gap-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />

                  <div>
                    <h3 className="font-bold text-xl">{item.name}</h3>

                    <p className="text-slate-500">{item.city}</p>
                  </div>
                </div>

                {/* Rating */}

                <div className="flex gap-1 mt-6">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star
                      key={i}
                      size={20}
                      className="fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>

                {/* Review */}

                <p className="mt-6 text-slate-600 leading-8">"{item.review}"</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Reviews;
