import React from 'react';
import './service.css';

const ServiceCard = ({ image, title, description }) => {
  return (
    <div className="service-card">
      <img src={image} alt={title} className="service-image" />
      <h3 className="service-title">{title}</h3>
      <p className="service-description">{description}</p>
    </div>
  );
};

export default ServiceCard;
