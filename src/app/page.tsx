import Footer from "@/components/Footer";
import Header from "@/components/Header";
import FeaturedPost from "@/components/Home/FeaturedPost";
import FeedBack from "@/components/Home/FeedBack";
import HeroSection from "@/components/Home/HeroSection";
import NewsLetter from "@/components/Home/NewsLetter";
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
        <FeedBack/>
        <NewsLetter/>
        <Footer/>
    </main>
  );
}
