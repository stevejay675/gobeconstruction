'use client';

import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { motion } from 'framer-motion';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';
import './hero.css';

const HeroSection = ({ heroData = [] }) => {
  const [activeSlide, setActiveSlide] = useState(0); // Track the current slide index

  // Real construction-related data
  

  return (
    <div className="hero-swiper">
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        spaceBetween={0}
        slidesPerView={1}
        onSlideChange={(swiper) => setActiveSlide(swiper.activeIndex)} // Update active slide on change
      >
        {heroData.map((hero, index) => (
          <SwiperSlide key={index}>
            <div className="hero-section">
              <img src={hero.image} alt={hero.header} />
              <div className="hero-content">
                {/* Header Animation: Slide in from the top */}
                <motion.h1
                  key={`header-${activeSlide}`}
                  initial={{ opacity: 0, y: -50, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 1, delay: 0.3, ease: 'easeOut' }}
                >
                  {hero.header}
                </motion.h1>
                {/* Text Animation: Slide from the bottom */}
                <motion.span
                  key={`text-${activeSlide}`}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.5, ease: 'easeOut' }}
                >
                  {hero.text}
                </motion.span>
                {hero.cta_show && (
                  <motion.div
                    key={`cta-${activeSlide}`}
                    className="hero-cta"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.7, ease: 'easeOut' }}
                  >
                    {/* CTA Button 1: Scale-up effect with delay */}
                    <motion.a
                      href={hero.cta1_link}
                      className="shop-btn"
                      initial={{ scale: 0.8 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.5, ease: 'easeOut' }}
                    >
                      {hero.cta1_text}
                    </motion.a>
                    {/* CTA Button 2: Scale-up effect with delay */}
                    <motion.a
                      href={hero.cta2_link}
                      className="service-btn"
                      initial={{ scale: 0.8 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.5, ease: 'easeOut', delay: 0.3 }}
                    >
                      {hero.cta2_text}
                    </motion.a>
                  </motion.div>
                )}
              </div>
              <div className="hero-overlay"></div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeroSection;
