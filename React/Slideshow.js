
import React, { useState } from "react";

function Slides({ slides }) {

  const [currentIndex, setCurrentIndex] = useState(0);

  const lastIndex = slides.length - 1;
  const isFirst = currentIndex === 0;
  const isLast = currentIndex === lastIndex;

  const handleRestart = () => setCurrentIndex(0);
  const handlePrev = () => setCurrentIndex((i) => i - 1);
  const handleNext = () => setCurrentIndex((i) => i + 1);

  const currentSlide = slides[currentIndex];

  return (
    <div>
      <div id="navigation" className="text-center">
        <button
        data-testid="button-restart"
        className="small outlined"
        onClick={handleRestart}
        disabled={isFirst}
        >
  Restart
</button>
        <button data-testid="button-prev" className="small"
          onClick={handlePrev}
  disabled={isFirst}>
          Prev
        </button>
        <button data-testid="button-next" className="small"
         onClick={handleNext}
  disabled={isLast}>
          Next
        </button>
      </div>
      <div id="slide" className="card text-center">
       <h1 data-testid="title">{currentSlide.title}</h1>
       <p data-testid="text">{currentSlide.text}</p>
      </div>
    </div>
  );
}

export default Slides;
