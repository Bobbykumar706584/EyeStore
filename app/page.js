import Image from "next/image";
import HeroSection from "../components/hero/Hero";
import Categories from "../components/home/Categories";
import TrendingProducts from "../components/home/TrendingProducts";
import VirtualTryOn from "@/components/home/VirtualTryOn";
import BestSellers from "@/components/home/BestSellers";
import Reviews from "@/components/home/Reviews";
import Newsletter from "@/components/home/NewsLetter";
import InstagramFeed from "@/components/instagram/ InstagramFeed";

export default function Home() {
  return (
    <>
      <HeroSection />

      <Categories />

      <TrendingProducts />

      <BestSellers />

      <VirtualTryOn />

      <Reviews />

      <InstagramFeed />

      <Newsletter />
    </>
  );
}
