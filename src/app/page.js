import Banner from "@/components/banner/Banner";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/header";
import HeroSection from "@/components/hero/Hero";
import Projects from "@/components/project/Project";
import Service from "@/components/services/service";
import Whatsapp from "@/components/whatsapp/Whatsapp";
import WhyUs from "@/components/whyus/WhyUs";
import Image from "next/image";

export default function Home() {
  return (
    <div className='App'>
     <Header />
     <HeroSection />
     <Service />
     <WhyUs />
     <Banner />
     <Projects />
     <Whatsapp />
     <Footer />
    </div>
  );
}
