import React from "react";
import "./whyus.css";
import { FaAward, FaUsers, FaClipboardCheck, FaTools } from "react-icons/fa";

const WhyUs = () => {
  const reasons = [
    {
      icon: <FaAward />,
      title: "Top Quality",
      text: "We deliver exceptional quality in every project, ensuring lasting satisfaction.",
    },
    {
      icon: <FaUsers />,
      title: "Experienced Team",
      text: "Our skilled professionals bring years of expertise to every construction job.",
    },
    {
      icon: <FaClipboardCheck />,
      title: "Commitment",
      text: "We are committed to completing projects on time and exceeding expectations.",
    },
    {
      icon: <FaTools />,
      title: "Modern Tools",
      text: "We use state-of-the-art tools and techniques for precision and efficiency.",
    },
  ];

  return (
    <div className="why-us-section">
      <h2 className="section-header">Why Choose Us</h2>
      <div className="why-us-container">
        <div className="why-us-image">
          <img
            src="/images/whyus1.webp"
            alt="Why Choose Us"
            className="responsive-image"
          />
        </div>
        <div className="why-us-reasons">
          <div className="reasons-grid">
            {reasons.map((reason, index) => (
              <div className="reason-card" key={index}>
                <div className="reason-icon">{reason.icon}</div>
                <h3 className="reason-title">{reason.title}</h3>
                <p className="reason-text">{reason.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
