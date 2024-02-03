import React from 'react'
import { Link } from 'react-scroll';
import './About.css';

const About = () => {
  return (
   <div className='maintag'>
   <p   className='tech'>Technical and Professional</p>
   <h1 className='tech'>MY SKILLS</h1>
   <section>
    <span className='technical'>Technical Skills</span>
    <span className='technical'>Professional Skills</span>
    <div className='skilltitle'>
    
    <span className='skill'>72%</span>
    <h1 className='skills'>Html</h1>
    
     
    {/* <p className='skills'>Figma</p> */}
    <h1 className='skill'>72%</h1>
    <h1 className='skills'>Figma</h1>
{/* 
    <p className='skills'>Javascript</p> */}
    <h1 className='skill'>72%</h1>
    <h1 className='skills'>Javascript</h1>

    {/* <p className='skills'>Css</p> */}
    <h1 className='skill'>72%</h1>
    <h1 className='skills'>Css</h1>
    </div>  
   </section>
   </div>
  )
}

export default About
