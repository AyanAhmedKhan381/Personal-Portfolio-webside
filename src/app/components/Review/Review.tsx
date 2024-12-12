"use client";
import SectionHeading from "../Helper/SectionHeading";
import Slider from "./Slider";
import "./Review.css/Review.css"; // Import custom CSS

const Review = () => {
  return (
    <div className="review-section">
      <SectionHeading>Client Reviews</SectionHeading>
      <div className="slider-container">
        <Slider />
      </div>
    </div>
  );
};

export default Review;
