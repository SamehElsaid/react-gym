import React from "react";
import "./Program.css";
import { programsData } from "../../data/programsData";
import rightArow from "../../assets/rightArrow.png";
const Program = () => {
  return (
    <section className="container">
      <div className="programs" id="programs">
        <div className="program">
          <span className="strokTest">EXPLORE OUR</span>
          <span>PROGRAMS</span>
          <span className="strokTest">TO SHAPE YOU</span>
        </div>
        <div className="programsData">
          {programsData.map((program, i) => (
            <div className="box" key={i}>
              {program.image}
              <span className="title">{program.heading}</span>
              <span className="title">{program.details}</span>
              <div className="joinNow">
                <span>Join Now</span>
                <img src={rightArow} alt="" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Program;
