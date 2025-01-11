import Banner from "@/components/banner/Banner";
import HeroSection from "@/components/hero/hero";
import Map from "@/components/map/map";
import Projects from "@/components/project/Project";
import Service from "@/components/services/service";
import WhyUs from "@/components/whyus/WhyUs";
import Image from "next/image";

export default function Home() {
  const heroData = [
    {
      image: '/images/hero2.jpg',
      header: 'Building the Future of Construction',
      text: 'Expert builders creating lasting structures for generations.',
      cta_show: true,
      cta1_link: '/contact',
      cta1_text: 'contact Us',
      cta2_link: '/about',
      cta2_text: 'know us'
    },
    {
      
      image: '/images/build/build7.jpg',
      header: 'Quality and Safety in Every Project',
      text: 'We prioritize safety and high standards in every build.',
      cta_show: true,
      cta1_link: '/about',
      cta1_text: 'About Us',
      cta2_link: '/contact',
      cta2_text: 'Get in Touch'
    },
    {
      image: '/images/build/build2.jpg',
      header: 'Transforming Spaces with Innovation',
      text: 'Pushing the boundaries of construction with cutting-edge designs.',
      cta_show: false
    }
  ];

  return (
    <div className='App'>
     <HeroSection heroData={heroData}/>
     <Service />
     <WhyUs />
     <Banner />
     <Projects />
     <Map />
    </div>
  );
}
