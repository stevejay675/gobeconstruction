import React from 'react';
import ServiceCard from './ServiceCard';
import './service.css';

const Service = () => {
  const services = [
    {
      image: '/images/service1.jpg',
      title: 'Drawing of Plans',
      description: 'Accurate and detailed architectural plans to bring your vision to life.',
    },
    {
      image: '/images/service2.jpg',
      title: 'House Construction',
      description: 'Professional construction services from foundation to structure completion.',
    },
    {
      image: '/images/service3.webp',
      title: 'Plastering & Finishing',
      description: 'High-quality plastering and finishes, including painting and tiling.',
    },
    {
      image: '/images/service4.jpeg',
      title: 'Roofing & Staffing',
      description: 'Durable roofing solutions and expert staffing for all project needs.',
    },
  ];

  return (
    <div className="service-section">
      <h2 className="section-header">Our Services</h2>
      <div className="service-grid">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            image={service.image}
            title={service.title}
            description={service.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Service;
