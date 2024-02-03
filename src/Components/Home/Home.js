import React from 'react'
import './Home.css'
import pic from '../../assests/pic.jpeg';

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
            <img src={pic} className='profilepic'/>
           
        </section>
        <button className='cv'>Download CV</button>
        <button className='cv'>Hire Me Now!</button>
   </>
  )
}

export default Home
