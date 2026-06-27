"use client";

import HeroSlider from "./HeroSlider";
import HeroContent from "./HeroContent";

export default function Hero() {
  return (
    <HeroSlider>
      {(slide) => (
        <div className="mx-auto flex min-h-screen max-w-7xl items-center px-6">
          <HeroContent slide={slide} />
        </div>
      )}
    </HeroSlider>
  );
}
