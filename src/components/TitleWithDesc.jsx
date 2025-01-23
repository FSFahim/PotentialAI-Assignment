import React from "react";
import "../stylesheets/titleWithDesc.css";

const TitleWithDesc = ({ title, desc }) => {
  return (
    <div className="titleWithDesc">
      <div className="title">{title}</div>
      <div className="desc">{desc}</div>
    </div>
  );
};

export default TitleWithDesc;
