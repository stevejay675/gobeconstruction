import React from "react";
import "./map.css";

const Map = () => {
  return (
    <div className="map">
      <div className="section-header-container"><h2 className="section-header">Locate Us</h2></div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31834.21873586414!2d9.264184575007617!3d4.165788276549669!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x106133814bcbecc9%3A0x27a14f8d98ce9947!2sGobeh%20Constructions!5e0!3m2!1sen!2scm!4v1736535519575!5m2!1sen!2scm"
        width="600"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>

    </div>
  );
};

export default Map;
