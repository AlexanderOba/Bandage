"use client"
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import FeaturedPost from "@/app/home/FeaturedPost";
import FeedBack from "@/app/home/FeedBack";
import HeroSection from "@/app/home/HeroSection";
import NewsLetter from "@/app/home/NewsLetter";
import ProductList from "@/app/home/ProductList";
import ServiceList from "@/app/home/ServiceList";



export default function Home() {
  return (
    <main>
        <Header isCompact={false} />
        <HeroSection/>
        <ProductList showStyles={false}/>
        <ServiceList/>
        <FeaturedPost/>
        <FeedBack/>
        <NewsLetter/>
        <Footer changeBackground={false}/>
    </main>
  );
}
