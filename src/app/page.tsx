import Header from "@/components/Header";
import FeaturedPost from "@/components/Home/FeaturedPost";
import HeroSection from "@/components/Home/HeroSection";
import ProductList from "@/components/Home/ProductList";
import ServiceList from "@/components/Home/ServiceList";



export default function Home() {
  return (
    <main>
        <Header/>
        <HeroSection/>
        <ProductList/>
        <ServiceList/>
        <FeaturedPost/>
    </main>
  );
}
