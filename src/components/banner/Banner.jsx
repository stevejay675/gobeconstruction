import React from "react";
import "./banner.css";

const Banner = () => {
  const stats = [
    { value: "10+", label: "Years of Experience" },
    { value: "200+", label: "Satisfied Clients" },
    { value: "200+", label: "Projects Completed" },
  ];

  return (
    <div className="banner">
      <img src="/images/banner.webp" alt="banner" className="banner-image" />
      <div className="overlay"></div>
      <div className="banner-content-container">
        {stats.map((stat, index) => (
          <div className="banner-content" key={index}>
            <h3>{stat.value}</h3>
            <span>{stat.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Banner;
