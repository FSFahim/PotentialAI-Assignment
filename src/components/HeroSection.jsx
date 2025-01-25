import React from "react";
import "../stylesheets/heroSection.css";
import Button from "./Button";
import PopOutImage from "./popOutImage";
import SocialMediaButtons from "./SocialMediaButtons";

const HeroSection = () => {
  return (
    <div className="heroSection">
      <div className="heroSectionLeft">
        <div className="firstLine">Hi I am</div>
        <div className="myName">Muhammad Umair</div>
        <div className="professionFirst">UI & UX</div>
        <div className="professionSecond">Designer</div>
        <div className="heroDescription">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate
          quam numquam neque laboriosam dolorem enim iste libero doloribus
          perferendis, mollitia maxime non totam nemo fugiat, distinctio aut,
          unde natus rerum!
        </div>
        <Button buttonText="Hire Me" />
      </div>
      <div className="heroSectionRight">
        <PopOutImage />
        <SocialMediaButtons />
      </div>
    </div>
  );
};

export default HeroSection;
