import React from "react";
// import { Link } from "react-scroll";
import "./About.css";

const About = () => {
  return (
    <div className="maintag">
      <p className="tech">Technical and Professional</p>
      <h1 className="tech">MY SKILLS</h1>
      <section>
        <span className="technical">Technical Skills</span>
        <span className="technical">Professional Skills</span>


        <div className="skilltitle">
          <div className="skills">
            <div className="moni">
              <span className="skill" >Html</span>
              <span className="skill">72%</span>
            </div>
          </div>

          <div className="skills">
            <span className="skill">Figma</span>
            <span className="skill" id="ski">72%</span>
          </div>
        
          <div className="skills">
            <span className="skill" >Javascript</span>
            <span className="skill" id="skil">72%</span> 
          </div>

          <div className="skills">
            <span className="skill">Css</span>
            <span className="skill">72%</span>
          </div>


        </div>
      </section>
    </div>
  );
};

export default About;
