import React from "react";
import "../stylesheets/testimonialCard.css";

const TestimonalCard = ({ testimonial, isActive, isPrev, isNext }) => {
  const cardClass = isActive
    ? "testimonialCard active"
    : isPrev || isNext
    ? "testimonialCard prev-next"
    : "testimonialCard hidden";
  return (
    <div className={cardClass}>
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
