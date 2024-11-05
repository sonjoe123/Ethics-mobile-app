import React from "react";

import sonphan from "../assets/img/sonphan.jpg"
import brandon from "../assets/img/brandon.jpg"
import claudia from "../assets/img/claudiaP.jpg"
export const About = () => {
  return (
    <div className="home-container">
      {/* First Section: Image Left, Text Right */}
      <div className="section">
        <img
          src={sonphan}
          alt="sonphan"
          className="image-left animated-image"
        />
        <div className="text-right">
          <h2 className="heading">Son Phan</h2>
          <p className="paragraph">
            I am a Senior at SMU and my majors Computer Science and Data Science. 
            I love sushi
          </p>
        </div>
      </div>

      {/* Second Section: Text Left, Image Right */}
      <div className="section">
        <div className="text-left">
          <h2 className="heading">Brandon Huang</h2>
          <p className="paragraph">
          I am a Junior at SMU and my majors Computer Science and Data Science. 
          I have just adopted a cat.
          </p>
        </div>
        <img
          src={brandon}
          alt="brandon"
          className="image-right animated-image"
        />
      </div>

      <div className="section">
        <img
          src={claudia}
          alt="claudia"
          className="image-left animated-image "
                  />
        <div className="text-right">
          <h2 className="heading">Claudia Pinkerton</h2>
          <p className="paragraph">
            I am a Junior at SMU and my majors Computer Science and Data Science.
            I have flown a plane.
          </p>
        </div>
      </div>
    </div>
  );
};
