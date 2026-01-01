import React, { useState, useEffect } from 'react';

const Carousel = () => {
  const slides = [
    { id: 1, image: "Ak.jpg", title: "Welcome 2026" },
    { id: 2, image: "B.png", title: "Send Smiles" },
    { id: 3, image: "Ak.jpg", title: "Cakes for Birthdays" },
    { id: 4, image:"B.png", title: "Green Touch" },
    { id: 5, image: "Ak.jpg", title: "Unique Gifts" },
    { id: 6, image: "B.png", title: "Celebrate" },
    { id: 7, image: "Ak.jpg", title: "Sweet Treats" },
    { id: 8, image: "Ak.jpg", title: "Special Moments" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide logic
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full px-4 py-4 overflow-hidden group">
      {/* Slide Image */}
      <div className="w-full h-[400px] md:h-80 overflow-hidden rounded-xl shadow-lg">
        <img 
          src={slides[currentIndex].image} 
          alt={slides[currentIndex].title}
          className="w-full h-full object-cover transition-all duration-500 ease-in-out"
        />
      </div>

      {/* Slide Counter Indicator */}
      <div className="absolute bottom-8 right-8 bg-black/50 text-white text-xs px-2 py-1 rounded-full">
        {currentIndex + 1} / {slides.length}
      </div>

      {/* Dots Indicator */}
      <div className="flex justify-center gap-2 mt-3">
        {slides.map((_, index) => (
          <div 
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-2 w-2 rounded-full cursor-pointer transition-all ${
              currentIndex === index ? "bg-gray-800 w-4" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;