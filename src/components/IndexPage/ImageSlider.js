// src/components/ImageCarousel.js
import React, { useState } from "react";
import { StaticImage } from "gatsby-plugin-image";


const ImageSlider = () => {
    const images = [
        "/src/images/Hardware01.jpg",
        "/src/images/Hardware02.jpg",
        "/src/images/Hardware03.jpg",
        // Add more image paths here
      ];
    
      const [currentImageIndex, setCurrentImageIndex] = useState(0);
    
      const prevImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
      };
    
      const nextImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
      };
    
      return (
        <div className="carousel">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={prevImage}>
            Previous
          </button>
        <StaticImage
        src="/src/images" // Replace with the correct image path
        alt={`Image ${currentImageIndex + 1}`}
        className="max-w-full h-auto mx-auto"
        placeholder="blurred"
        layout="fullWidth"
        formats={["auto", "webp", "avif"]}
        quality={90}
      />
      
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={nextImage}>
            Next
          </button>
        </div>
      );
};

export default ImageSlider;
