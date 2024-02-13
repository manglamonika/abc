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
              <span className="skill1" id="ski1">90%</span>
            </div>
          </div>

          <div className="skills">
            <div className="moni">
            <span className="skill">Figma</span>
            <span className="skill2" id="ski">70%</span>
            </div>
          </div>
        
          <div className="skills">
          <div className="moni">
            <span className="skill" >Javascript</span>
            <span className="skill3" id="skil">70%</span>
            </div> 
          </div>

          <div className="skills">
            <div className="moni">
            <span className="skill">Css</span>
            <span className="skill4" id="ski2">60%</span>
            </div>
          </div>

          <div className="skills">
            <div className="moni">
            <span className="skill">python</span>
            <span className="skill4" id="ski2">60%</span>
            </div>
          </div>

          <div className="skills">
            <div className="moni">
            <span className="skill">java</span>
            <span className="skill4" id="ski2">60%</span>
            </div>
          </div>

          <div className="skills">
            <div className="moni">
            <span className="skill">nodejs</span>
            <span className="skill4" id="ski2">60%</span>
            </div>
          </div>


        </div>
      </section>
{/* professional skill */}
                <div id="main">
                    <div className="box" id="b1">
                        <div className="circle" id="c1">
                            <div class="points"></div>
                            {/* <div class="points"></div>
                            <div class="points"></div>
                            <div class="points"></div> */}
                        </div>
                        <div className="text"id="t1">
                            <span id="i1">90%</span>
                            <span>Team work</span>
                        </div>
                        <div className="box"id="b2">
                        <div className="circle" id="c2">
                            <div class="points"></div>
                            
                        </div>
                        </div>
                        <div className="text" id="t2">
                            <span id="i2">90%</span>
                            <span>Team work</span>
                        </div>
                        <div className="box" id="b3">
                        <div className="circle" id="c3">
                            <div class="points"></div>
                            
                        </div>
                        </div>
                        <div className="text" id="t3">
                            <span id="i3">90%</span>
                            <span>Team work</span>
                        </div>
                        <div className="box" id="b4">
                        <div className="circle" id="c4">
                            <div class="points"></div>
                            
                        </div>
                        </div>
                        <div className="text" id="t4">
                            <span id="i4">90%</span>
                            <span>Team work</span>
                        </div>
                    </div>
                    </div>
    </div>
  );
};

export default About;
