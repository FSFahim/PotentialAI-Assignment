import React from "react";
import "../stylesheets/testimonialCard.css";

const TestimonalCard = ({ testimonial, className, darkMode }) => {
  return (
    <div
      className={`testimonialCard ${className} ${
        darkMode ? "darkTestimonialCard" : ""
      }`}
    >
      <img src={testimonial.image} alt="Image" />
      <div className="commentSection">
        <div className="comment">
          <i className="quoteIcon fa fa-quote-left"></i>
          {testimonial.comment}
          <i className="quoteIcon fa fa-quote-right"></i>
        </div>
        <div className="name">{testimonial.name}</div>
        <div className="designation">{testimonial.designation}</div>
      </div>
    </div>
  );
};

export default TestimonalCard;
