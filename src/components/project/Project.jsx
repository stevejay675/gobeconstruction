'use client';
import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import './project.css'

const Projects = () => {

    const gallery = [
        { image: "/images/build/build5.jpg"},
        { image: "/images/build/build11.jpg"},
        { image: "/images/build/build9.jpg"},
        { image: "/images/build/build8.jpg"},
        { image: "/images/build/build7.jpg"},
        { image: "/images/build/build6.jpg"},
        { image: "/images/build/build4.jpg"},
        
      ];


  return (
    <div className='project-section'>
      <div className="section-header-container"><h2 className='section-header'>Recent Projects</h2></div>
      
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={20}
        navigation
        pagination={{ clickable: true }}
        breakpoints={{
          320: { slidesPerView: 1},
          768: { slidesPerView: 3, spaceBetween: 15 },
          1024: { slidesPerView: 3, spaceBetween: 20 },
        }}
      >
        {gallery.map((img, index) => (
          <SwiperSlide key={index}>
              <div className='project-container'><img src={img.image} alt="images" /></div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default Projects
