import Footer from '@/components/footer/footer'
import HeroSection from '@/components/hero/hero'
import React from 'react'
import ContactMain from './contact-components/ContactMain'
import ContactSocials from './contact-components/ContactSocials'
import Header from '@/components/header/header'
import Map from '@/components/map/map'

const Contact = () => {
  const heroData = [
    {
      image: '/images/build/build6.jpg',
      header: 'Contact Us',
      text: 'Lorem ipsum dolor sit amet ipisicing elit. Expedita, magnam?',
      cta1_text: 'Shop',
      cta1_link: '/electronics',
      cta2_text: 'Contact',
      cta2_link: '/support',
      cta_show: false
    }
  ];

  return (
    <div className='App'>
      <HeroSection heroData={heroData}/>
      <ContactMain />
      <Map />
    </div>
  )
}

export default Contact
