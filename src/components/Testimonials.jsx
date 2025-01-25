import React, { useState } from "react";
import "../stylesheets/testimonials.css";
import TitleWithDesc from "./TitleWithDesc";
import TestimonialCard from "./TestimonalCard";
import people1 from "../assets/people1.jpg";
import people2 from "../assets/people2.jpg";
import people3 from "../assets/people3.jpg";
import people4 from "../assets/people4.avif";

const testimonials = [
  {
    image: people1,
    name: "Name 1",
    designation: "CEO 1",
    comment:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati deleniti beatae reprehenderit fugit eius impedit sequi rerum id dolorum ullam!",
  },
  {
    image: people2,
    name: "Name 2",
    designation: "GM",
    comment:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati deleniti beatae reprehenderit fugit eius impedit sequi rerum id dolorum ullam!",
  },
  {
    image: people3,
    name: "Name 3",
    designation: "COO",
    comment:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati deleniti beatae reprehenderit fugit eius impedit sequi rerum id dolorum ullam!",
  },
  {
    image: people4,
    name: "Name 4",
    designation: "CTO",
    comment:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati deleniti beatae reprehenderit fugit eius impedit sequi rerum id dolorum ullam!",
  },
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const getClassName = (index) => {
    if (index === activeIndex) return "active";
    if (index === activeIndex + 1) return "next";
    if (index === activeIndex - 1) return "prev";
    return "hidden";
  };

  const handleIndicatorClick = (index) => {
    setActiveIndex(index);
  };

  const description =
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit eaque laboriosam corporis ducimus quaerat possimus praesentium accusamus aperiam saepe ab!";

  return (
    <div className="testimonials">
      <TitleWithDesc title="Testimonials" desc={description} />
      <div className="testimonialCards">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard
            key={index}
            testimonial={testimonial}
            className={getClassName(index)}
          />
        ))}
      </div>
      <div className="indicators">
        {testimonials.map((_, index) => (
          <span
            key={index}
            className={`indicator ${index === activeIndex ? "active" : ""}`}
            onClick={() => handleIndicatorClick(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
