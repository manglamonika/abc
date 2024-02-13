import React from 'react'
import './Home.css'
import pic from '../../assests/pic2.png';
import pdf from '../../assests/Monika_resume.pdf';

const Home = () => {
  return (
   <>
      <section className='home'>
            <div className='home-content'>
                <h1>Hello, Its Me</h1>
                <h2>Monika Mangla</h2>
                <h3>And I'm a</h3>
                <p>I'm a Full Stack developer .
                    Looking for a job 
                </p>
            </div>
            <div id='profile'><img src={pic} alt="pic" className='profilepic'/></div>
           
        </section>
      <a  className ='cv' href={pdf} download='Monika pdf'>Download cv</a>
        {/* <button className='cv'>Download CV </button> */}
        <button className='cv'>Hire Me Now!</button>
   </>
  )
}

export default Home
