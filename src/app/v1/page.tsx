import FeaturedCol from "@/components/FeaturedCol";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import HotDrops from "@/components/HotDrops";
import { Navbar } from "@/components/NavBar";
import Image from "next/image";

export default function Home() {
  return (
    <div className="mx-15">
      <Navbar />
      <Hero />
      <FeaturedCol />
      <HotDrops />
      <Footer />
    </div>
  );
}
