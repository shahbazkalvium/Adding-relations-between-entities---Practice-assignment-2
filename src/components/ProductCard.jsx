
import React from "react";
import RatingWidget from "./RatingWidget";

function ProductCard({ product, onRatingSubmit }) {
  return (
    <div className="product-card">
      <img src="https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?cs=srgb&dl=pexels-madebymath-90946.jpg&fm=jpg" alt={product.name} />
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p>Average Rating: {product.avgRating.toFixed(1)} ({product.totalRatings} ratings)</p>
      <RatingWidget productId={product.id} onRatingSubmit={onRatingSubmit} />
    </div>
  );
}

export default ProductCard;
