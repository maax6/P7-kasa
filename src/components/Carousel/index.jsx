import { useState, useEffect } from 'react';
import { FiChevronRight } from 'react-icons/fi';
import { FiChevronLeft } from 'react-icons/fi';

export default function Carousel({ pictures }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((currentIndex + 1) % pictures.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [currentIndex, pictures]);

  const goToPrev = () => {
    setCurrentIndex((currentIndex - 1 + pictures.length) % pictures.length);
  };

  const goToNext = () => {
    setCurrentIndex((currentIndex + 1) % pictures.length);
  };

  return (
    <div className="carousel">
      <button className="carousel__arrow carousel__arrow--prev" onClick={goToPrev}>
      <FiChevronLeft />
      </button>
      <img src={pictures[currentIndex]} alt={"photo"+(currentIndex)} />
      <button className="carousel__arrow carousel__arrow--next" onClick={goToNext}>
      <FiChevronRight />
      </button>
    </div>
  );
}