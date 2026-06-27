"use client";

import InstagramCard from "./InstagramCard";

export default function InstagramRow({
  posts,
  reverse = false,
  speed = "35s",
}) {
  const duplicatedPosts = [...posts, ...posts];

  return (
    <div className="relative overflow-hidden py-6">
      {/* Fade Left */}
      <div className="pointer-events-none absolute left-0 top-0 z-20 h-full w-28 bg-gradient-to-r from-white via-white/80 to-transparent" />

      {/* Fade Right */}
      <div className="pointer-events-none absolute right-0 top-0 z-20 h-full w-28 bg-gradient-to-l from-white via-white/80 to-transparent" />

      <div
        className={`flex w-max gap-7 ${
          reverse ? "animate-marquee-reverse" : "animate-marquee"
        } hover:[animation-play-state:paused]`}
        style={{
          animationDuration: speed,
        }}
      >
        {duplicatedPosts.map((post, index) => (
          <InstagramCard key={`${post.id}-${index}`} post={post} />
        ))}
      </div>
    </div>
  );
}
