import React from "react";
import "../stylesheets/services.css";
import icon1 from "../assets/ServiceCard Logo 1.png";
import icon2 from "../assets/ServiceCard Logo 2.png";
import icon3 from "../assets/ServiceCard Logo 3.png";
import icon4 from "../assets/ServiceCard Logo 4.png";
import ServiceCard from "./ServiceCard";
import TitleWithDesc from "./TitleWithDesc";

const servicesData = [
  {
    icon: icon1,
    title: "UI/UX",
    description:
      "Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum",
  },
  {
    icon: icon2,
    title: "Web Design",
    description:
      "Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum",
  },
  {
    icon: icon3,
    title: "App Design",
    description:
      "Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum",
  },
  {
    icon: icon4,
    title: "Graphic Design",
    description:
      "Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum",
  },
];

const description =
  "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore vitae natus cum rem maiores amet repellendus delectus minus cumque mollitia ex.";

const Services = () => {
  return (
    <div className="services">
      <TitleWithDesc title="Services" desc={description} />
      <section className="servicesSection">
        <div className="cardsContainer">
          {servicesData.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Services;
