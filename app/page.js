import Image from "next/image";
import Navbar from "../components/layout/Navbar";
import HeroSection from "../components/home/Hero";
import Categories from "../components/home/Categories";
import TrendingProducts from "../components/home/TrendingProducts";
import VirtualTryOn from "@/components/home/VirtualTryOn";
import BestSellers from "@/components/home/BestSellers";
import Reviews from "@/components/home/Reviews";
import Newsletter from "@/components/home/NewsLetter";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Categories />
      <TrendingProducts />
      <VirtualTryOn />
      <BestSellers />
      <Reviews />
      <Newsletter />
      <Footer />
    </>
  );
}
