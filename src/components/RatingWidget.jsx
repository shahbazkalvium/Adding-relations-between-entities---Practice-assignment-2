import React, { useState } from "react";

function RatingWidget({ productId, onRatingSubmit }) {
  const [rating, setRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);

  const handleStarClick = (starRating) => {
    setRating(starRating);
  };

  const handleStarHover = (starRating) => {
    setHoveredRating(starRating);
  };

  const handleRatingSubmit = () => {
    if (rating >= 1 && rating <= 5) {
      onRatingSubmit(productId, rating);
      setRating(0); // Reset rating after submission
    } else {
      alert("Please select a rating between 1 and 5.");
    }
  };

  const renderStars = () => {
    return [1, 2, 3, 4, 5].map((star) => (
      <span
        key={star}
        className={`star ${star <= (hoveredRating || rating) ? "filled" : ""}`}
        onClick={() => handleStarClick(star)}
        onMouseEnter={() => handleStarHover(star)}
        onMouseLeave={() => setHoveredRating(0)}
      >
        ★
      </span>
    ));
  };

  return (
    <div className="rating-widget">
      {renderStars()}
      <button onClick={handleRatingSubmit}>Submit Rating</button>
    </div>
  );
}

export default RatingWidget;