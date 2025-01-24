import React, { useState } from "react";
import "../stylesheets/testimonials.css";
import TitleWithDesc from "./TitleWithDesc";
import TestimonialCard from "./TestimonalCard";
import people1 from "../assets/people1.jpg";
import people2 from "../assets/people2.jpg";
import people3 from "../assets/people3.jpg";
import people4 from "../assets/people4.jpg";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

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

  const description =
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit eaque laboriosam corporis ducimus quaerat possimus praesentium accusamus aperiam saepe ab!";

  return (
    <div className="testimonials">
      <TitleWithDesc title="Testimonials" desc={description} />
      <div className="testimonialCards">
        <div className="carousel">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              testimonial={testimonial}
              isActive={index === currentIndex}
              isPrev={
                index ===
                (currentIndex - 1 + testimonials.length) % testimonials.length
              }
              isNext={index === (currentIndex + 1) % testimonials.length}
            />
          ))}
        </div>
        <div className="indicators">
          {testimonials.map((_, index) => (
            <span
              key={index}
              className={`indicator ${index === currentIndex ? "active" : ""}`}
              onClick={() => setCurrentIndex(index)}
            ></span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
