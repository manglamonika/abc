import React from "react";
// import { Link } from "react-scroll";
import "./About.css";

const About = () => {
  return (

<>
    


    <div className="myskill">
      <h1>My Skills</h1>
    </div>
    <div className="container">                                         

  
      <div className="leftc">
        <div className="leftHead">
        <h1 className="technical">Technical Skills</h1>
        </div>
        
        <div className="leftskill">

        <div className="leftstyle">
        <div className="leftskill1">
              <span>Html</span>
              <span>90%</span>
        </div>
        </div>
        <div className="leftskill1" id="skill2">
              <span>Css</span>
              <span>80%</span>
        </div>

        <div className="leftskill1">
              <span>Javascript</span>
              <span>75%</span>
        </div>

        <div className="leftskill1">
              <span>ReactJs</span>
              <span>70%</span>
        </div>


        
        <div className="leftskill1">
              <span>Python</span>
              <span>80%</span>
        </div>

        
        <div className="leftskill1">
              <span>Nodejs</span>
              <span>700%</span>
        </div>

        
        <div className="leftskill1">
              <span>MySql</span>
              <span>80%</span>
        </div>

         
        <div className="leftskill1">
              <span>Figma</span>
              <span>80%</span>
        </div>

        </div>
        </div>
        
      {/* professional */}
     <div className="rightcont">
      <div className="rightskill">
              <h1 className="technical">Professional Skills</h1>
      </div>

       <div className="rightc">
        <div className="rightskill1">
              <span>Team Work</span>
              <span>80%</span>
        </div>
        
         
        <div className="rightskill1">
              <span>Problem Solving Skills</span>
              <span>80%</span>
        </div>

         
        <div className="rightskill1">
              <span>Communication</span>
              <span>80%</span>
        </div>

        <div className="rightskill1">
              <span>Active Listening</span>
              <span>80%</span>
        </div>
        </div>
        </div>
      
    </div>

           
                        
    
    </>
  );
};

export default About;
