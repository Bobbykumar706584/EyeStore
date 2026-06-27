"use client";

import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { slides } from "./slides";
import HeroProgress from "./HeroProgress";
import FloatingElements from "./FloatingElements";

export default function HeroSlider({ children }) {
  const [current, setCurrent] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setProgress(0);

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);

          setCurrent((c) => (c + 1) % slides.length);

          return 0;
        }

        return prev + 2;
      });
    }, 100);

    return () => clearInterval(timer);
  }, [current]);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background */}

      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            current === index ? "opacity-100" : "opacity-0"
          }`}
        >
          {slide.type === "video" ? (
            <video
              autoPlay
              muted
              loop
              playsInline
              className={`w-full h-full object-cover transition-transform duration-[7000ms]
${current === index ? "scale-110" : "scale-100"}`}
            >
              <source src={slide.src} type="video/mp4" />
            </video>
          ) : (
            <img
              src={slide.src}
              alt={slide.title}
              className={`w-full h-full object-cover transition-transform duration-[7000ms]
${current === index ? "scale-110" : "scale-100"}`}
            />
          )}
        </div>
      ))}

      {/* Overlay */}

      {/* <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-900/60 to-slate-900/20" /> */}
      <>
        <div className="absolute inset-0 bg-black/45" />

        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-900/60 to-transparent" />

        <div className="absolute top-0 left-0 h-96 w-96 rounded-full bg-blue-600/20 blur-[140px]" />

        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-cyan-500/20 blur-[160px]" />
      </>

      {/* Content */}
      {/* <FloatingElements /> */}

      <div className="relative z-10">{children(slides[current])}</div>

      {/* Previous */}

      <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 -translate-y-1/2 z-20 bg-white/10 backdrop-blur-lg p-3 rounded-full text-white hover:bg-white/20 transition"
      >
        <ChevronLeft />
      </button>

      {/* Next */}

      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 -translate-y-1/2 z-20 bg-white/10 backdrop-blur-lg p-3 rounded-full text-white hover:bg-white/20 transition"
      >
        <ChevronRight />
      </button>

      {/* Dots */}

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`transition-all duration-500 rounded-full ${
              current === index ? "w-10 h-3 bg-white" : "w-3 h-3 bg-white/40"
            }`}
          />
        ))}
      </div>
      {/* <div className="absolute left-1/2 -translate-x-1/2 flex gap-3 z-20">
        <HeroProgress
          slides={slides}
          current={current}
          setCurrent={setCurrent}
          progress={progress}
        />
      </div> */}
    </section>
  );
}
