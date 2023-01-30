import React from "react";
import { useState } from "react";
import { FaStar } from "react-icons/fa";
import "./func_star.css";

const Func_stars = () => {
  const [rating, setRating] = useState(null);
  return (
    <div>
      {[...Array(5)].map((star, i) => {
        const ratingValue = i + 1;

        return (
          <label>
            <input
              type="radio"
              name="rating"
              value={ratingValue}
              onClick = {() => setRating(ratingValue)}
            />
            <FaStar className="star" color={ratingValue<=rating ? "yellow":"gray"} 
             size={30} />
          </label>
        );
      })}
    </div>
  );
};

export default Func_stars;
