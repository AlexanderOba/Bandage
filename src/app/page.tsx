"use client"
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import FeaturedPost from "@/app/home/FeaturedPost";
import FeedBack from "@/app/home/FeedBack";
import HeroSection from "@/app/home/HeroSection";
import NewsLetter from "@/app/home/NewsLetter";
import ProductList from "@/app/home/ProductList";
import ServiceList from "@/app/home/ServiceList";
import { useState } from "react";
import ProductModal from "./product-details/ProductModal";



export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  const openProductModal = (component: any) => {
    setIsOpen(true);
    setModalContent(component);
  };

  const closeModal = () => {
    setIsOpen(false);
    setModalContent(null);
  };

  return (
    <main>
      <ProductModal isOpen={isOpen} closeModal={closeModal} modalContent={modalContent} />
      <Header isCompact={false} openProductModal={openProductModal} />
      <HeroSection />
      <ProductList showStyles={false} />
      <ServiceList />
      <FeaturedPost />
      <FeedBack />
      <NewsLetter />
      <Footer changeBackground={false} />
    </main>
  );
}
