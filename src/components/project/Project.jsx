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
        { image: "/images/project1.webp"},
        { image: "/images/project2.jpg"},
        { image: "/images/project3.jpg"},
        { image: "/images/project4.jpg"},
      ];


  return (
    <div className='project-section'>
      <h2 className='section-header'>Recent Projects</h2>
      
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
