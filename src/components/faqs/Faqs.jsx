'use client'

import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import './faqs.css';

const Faqs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "What services do you offer?",
      answer: "We offer services such as drawing of plans, house construction, plastering and finishing, tiling, roofing, and staffing."
    },
    {
      question: "How can I get a quote?",
      answer: "You can contact us through our website's contact form or give us a call for a personalized quote."
    },
    {
      question: "Do you offer project management?",
      answer: "Yes, we provide end-to-end project management to ensure your construction is completed on time and within budget."
    },
    {
      question: "What areas do you serve?",
      answer: "We primarily serve clients in our local area but are open to projects in neighboring regions."
    }
  ];

  const handleToggle = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="faqs-container">
      <div className="faqs-content">
        <h2>Frequently Asked Questions</h2>
        {faqs.map((faq, index) => (
          <div
            className={`faq-item ${activeIndex === index ? "active" : ""}`}
            key={index}
          >
            <div
              className="faq-question"
              onClick={() => handleToggle(index)}
            >
              <h3>{faq.question}</h3>
              {activeIndex === index ? <FaChevronUp /> : <FaChevronDown />}
            </div>
            <div
              className="faq-answer"
              style={{
                maxHeight: activeIndex === index ? "200px" : "0",
                opacity: activeIndex === index ? "1" : "0",
              }}
            >
              <p>{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="faqs-image">
        <img
          src="/images/build/build12.jpg"
          alt="Construction work"
        />
      </div>
    </div>
  );
};

export default Faqs;
