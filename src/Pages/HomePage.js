import React, { useEffect, useRef, useState } from 'react';
import { HomeCard } from '../Components/HomeCard';
import './HomePage.css';

export const HomePage = ({ movies }) => {
  const scrollRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const scrollToIndex = (index) => {
    const container = scrollRef.current;
    if (!container) return;
    container.scrollTo({
      left: container.offsetWidth * index,
      behavior: 'smooth',
    });
  };

  const handleLeft = () => {
    if (currentIndex > 0) {
      const newIndex = currentIndex - 1;
      setCurrentIndex(newIndex);
      scrollToIndex(newIndex);
    }
  };

  const handleRight = () => {
    if (currentIndex < movies.length - 1) {
      const newIndex = currentIndex + 1;
      setCurrentIndex(newIndex);
      scrollToIndex(newIndex);
    }
  };

  useEffect(() => {
    scrollToIndex(currentIndex);
  }, [movies]);

  if (movies.length === 0) return <p>No Movies yet</p>;

  return (
    <div className="carousel-wrapper">
      <button
        className="arrow-button left"
        onClick={handleLeft}
        disabled={currentIndex === 0}
      >
        &#x276E;
      </button>

      <div className="fullscreen-scroll" ref={scrollRef}>
        {movies.map((movie) => (
          <HomeCard movie={movie} key={movie.sno} />
        ))}
      </div>

      <button
        className="arrow-button right"
        onClick={handleRight}
        disabled={currentIndex === movies.length - 1}
      >
        &#x276F;
      </button>
    </div>
  );
};
