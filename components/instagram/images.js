export const images = Array.from({ length: 33 }, (_, i) => ({
  id: i + 1,
  image: `/instagram-optimized/${i + 1}.jpg`,
  likes: Math.floor(Math.random() * 4000) + 1000,
  comments: Math.floor(Math.random() * 300) + 20,
  caption: "Premium eyewear for every style ✨",
}));
