import React from 'react'
import { useEffect, useState } from 'react';

const SlideshowImage = ({ images, alt, link}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000); // Changes every 3 seconds

    return () => clearInterval(interval);
  }, [images]);

  return (
    <div className="slideshow-container">
      {images.map((img, index) => (
        <a href={link} target='_main'><img
          key={index}
          src={img}
          alt={alt}
          className={`slideshow-img ${index === currentIndex ? 'active' : ''}`}
        /></a>
      ))}
    </div>
  );
};

export default SlideshowImage