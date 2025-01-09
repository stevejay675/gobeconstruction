"use client"
import React, { useEffect } from "react";

const Whatsapp = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://static.elfsight.com/platform/platform.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script); // Cleanup when the component unmounts
    };
  }, []);  // Empty dependency array ensures this runs only once on mount

  return (
    <div>
      <div
        className="elfsight-app-1aca3959-0033-480d-b7bd-dc703954affb"
        data-elfsight-app-lazy
      ></div>
    </div>
  );
};

export default Whatsapp;