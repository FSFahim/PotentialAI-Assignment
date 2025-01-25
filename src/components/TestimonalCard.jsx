import React from "react";
import "../stylesheets/testimonialCard.css";

const TestimonalCard = ({ testimonial, className }) => {
  return (
    <div className={`testimonialCard ${className}`}>
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
