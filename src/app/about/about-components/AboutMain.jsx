import React from "react";
import "./aboutComp.css";
import AboutCard from "./aboutCard";

const AboutMain = () => {
  return (
    <div className="about-main">
      <div className="left-am">
        <h4>How it started...?</h4>
        <h1>Our Dream is to Build and Deliver Excellence in Every Project</h1>
        <span>
          <b>1.</b> Over 10 years ago, we started with a simple vision: to
          create durable, high-quality structures that stand the test of time.
          From humble beginnings, working on small residential projects, we have
          grown into a trusted name in the construction industry. Our expertise
          now spans everything from architectural plan drawing to roofing,
          plastering, tiling, and complete project management. Each project we
          take on reflects our dedication to excellence and customer
          satisfaction.
        </span>
        <span>
          <b>2.</b> Throughout the years, we’ve successfully handled diverse
          projects, including large-scale commercial constructions, residential
          homes, and custom renovations. Whether it’s laying the foundation,
          perfecting the roofing, or managing the workforce to ensure timely
          delivery, we bring unmatched experience and attention to detail to
          every step of the process. Our goal is not just to build structures
          but to build trust and lasting relationships with our clients.
        </span>
        <span>
          <b>3.</b> What sets us apart is our commitment to innovation and
          sustainability. We adopt modern construction techniques and
          eco-friendly practices to deliver projects that not only meet today’s
          needs but are also future-ready. Our team stays updated with the
          latest industry trends, ensuring every project combines functionality,
          aesthetics, and environmental responsibility. From energy-efficient
          designs to sustainable material sourcing, we prioritize creating
          spaces that inspire while preserving the environment for generations
          to come.
        </span>
      </div>

      <div className="right-am">
        <img src="/images/build/build2.jpg" alt="about image" />
        <div className="about-cards">
        <AboutCard number={"10+"} text={"years of experience"} />
        <AboutCard number={"100+"} text={"clients satisfied"} />
        <AboutCard number={"150+"} text={"projects completed"} />
        <AboutCard number={"6+"} text={"regions served"} />
        <AboutCard number={"95%"} text={"on-time delivery rate"} />
        <AboutCard number={"24/7"} text={"customer support availability"} />
        </div>
      </div>
    </div>
  );
};

export default AboutMain;
