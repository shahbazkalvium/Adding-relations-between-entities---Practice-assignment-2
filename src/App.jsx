import React, { useState } from "react";
import ProductCard from "./components/ProductCard";
import "./App.css";

const initialProducts = [
  { id: 1, name: "Product A", description: "Description A", avgRating: 4.2, totalRatings: 10 },
  { id: 2, name: "Product B", description: "Description B", avgRating: 3.8, totalRatings: 20 },
  { id: 3, name: "Product C", description: "Description C", avgRating: 4.6, totalRatings: 15 },
  { id: 4, name: "Product D", description: "Description D", avgRating: 4.0, totalRatings: 30 }
];

function App() {
  const [products, setProducts] = useState(initialProducts);

  const handleRatingSubmit = (productId, newRating) => {
    const updatedProducts = products.map((product) => {
      if (product.id === productId) {
        const newTotalRatings = product.totalRatings + 1;
        const newAvgRating = ((product.avgRating * product.totalRatings) + newRating) / newTotalRatings;
        return {
          ...product,
          avgRating: newAvgRating,
          totalRatings: newTotalRatings
        };
      }
      return product;
    });
    setProducts(updatedProducts);
  };

  return (
    <div className="App">
      <h1>Product Ratings</h1>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} onRatingSubmit={handleRatingSubmit} />
      ))}
    </div>
  );
}

export default App;