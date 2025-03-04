import React from "react";
import "./banner.css";

const Banner = () => {
  const stats = [
    { value: "10+", label: "Years of Experience" },
    { value: "100+", label: "Satisfied Clients" },
    { value: "130+", label: "Projects Completed" },
  ];

  return (
    <section className="banner">
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
    </section>
  );
};

export default Banner;
