import React from 'react'
import './Home.css'
import pic from '../../assests/profile1.png';
import pdf from '../../assests/Monika_resume.pdf';
import fontpic from '../../assests/facebook.svg'; 
import fontpic1 from '../../assests/linkedin.svg'; 
import fontpic2 from '../../assests/insta.svg'; 
import fontpic3 from '../../assests/github.svg'; 
import { Link } from 'react-scroll';

const Home = () => {
  return (
   <>
      <div className='home'>
            <div className='home-content'>
                <h1>Hello, Its Me</h1>
                <h2>Monika Mangla</h2>
                <h3>And I'm a</h3>
                <p>I'm a Full Stack developer .
                    Looking for a job 
                </p>
                <a  className ='cv' href={pdf} download='Monika pdf'>Download cv</a>
       
                <button className='cv' id='cv1'>Hire Me Now!</button>
                <div className='iconhead'>
                <a className='icon' href='https://www.instagram.com/manglamonika123/'><img src={fontpic}className="fa-brands fa-facebook"></img></a>
                <a className='icon' href='https://www.linkedin.com/in/manglamonika123/'><img src={fontpic1}className="fa-brands fa-linkedin"></img></a>
                <a className='icon' href='https://www.instagram.com/manglamonika123/'><img src={fontpic2} className='fa-brands fa-square-instagram'></img></a>
                <a className='icon' href='https://github.com/manglamonika'><img src={fontpic3} className='fa-brands fa-github'></img></a>
                </div>
                
            </div>
      
        <div class='profile'>
          <img  src={pic} alt="pic" className='profilepic'/>
          </div>
</div>
   </>
  )
}

export default Home
