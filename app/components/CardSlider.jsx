// components/Slider.js
"use client";
import { useState } from 'react';

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slides = [
    { id: 1, title: 'Slide 1', description: 'This is the description for slide 1', image: '../../public/sl1.jpg' },
    { id: 2, title: 'Slide 2', description: 'This is the description for slide 2', image: '/slide2.jpg' },
    { id: 3, title: 'Slide 3', description: 'This is the description for slide 3', image: '/slide3.jpg' },
    { id: 4, title: 'Slide 4', description: 'This is the description for slide 1', image: '/slide1.jpg' },
    { id: 5, title: 'Slide 5', description: 'This is the description for slide 2', image: '/slide2.jpg' },
    { id: 6, title: 'Slide 6', description: 'This is the description for slide 3', image: '/slide3.jpg' },
  ];

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative w-full overflow-hidden">
      <div className="flex transition-transform duration-500" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {slides.map((slide) => (
          <div key={slide.id} className="min-w-full">
            <img src={slide.image} alt={slide.title} className="w-full h-64 object-cover" />
            <div className="p-4 text-center">
              <h2 className="text-xl font-bold">{slide.title}</h2>
              <p>{slide.description}</p>
            </div>
          </div>
        ))}
      </div>
      <button onClick={handlePrev} className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded">
        Prev
      </button>
      <button onClick={handleNext} className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded">
        Next
      </button>
    </div>
  );
};

export default Slider;