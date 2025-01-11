import React from 'react'
import AboutMain from './about-components/AboutMain'
import HeroSection from '@/components/hero/hero'
import AboutGallery from './about-components/AboutGallery'
import Navbar from '@/components/header/nav'
import Footer from '@/components/footer/Footer'
import Header from '@/components/header/header'
import Faqs from '@/components/faqs/Faqs'

const About = () => {
  const heroData = [
    {
      image: '/images/build/build3.jpg',
      header: 'Who We Are',
      text: 'We are dedicated to delivering excellence in construction, combining innovation and tradition to create spaces that inspire.',
      cta_show: false,
      cta1_link: '#services',
      cta1_text: 'Explore Services',
      cta2_link: '#projects',
      cta2_text: 'See Our Work',
    },
    {
      image: '/images/build/build7.jpg',
      header: 'Our Mission',
      text: 'To build lasting relationships with clients by exceeding expectations and delivering high-quality construction services.',
      cta_show: false,
      cta1_link: '#team',
      cta1_text: 'Meet the Team',
      cta2_link: '#contact',
      cta2_text: 'Contact Us',
    },
  ];
  

  return (
    <div className='App'>
      <HeroSection heroData={heroData}/>
      <AboutMain />
      <Faqs />
      <AboutGallery />
    </div>
  )
}

export default About
