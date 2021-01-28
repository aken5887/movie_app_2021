import React from "react";
import "./About.css";

function About(props) {
  console.log(props);
  return (
    <div className="about__container">
      <span>About this page : I build it because I love movies</span>
      <span>Ocorell</span>
    </div>
  );
}

export default About;
