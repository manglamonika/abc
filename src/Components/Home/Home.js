import React from 'react'
import './Home.css'



import pdf from '../../assests/Monika_resume.pdf';
import pic1 from '../../assests/cp3.jpg';

import { Link } from 'react-scroll';

const Home = () => {
  <div className='bg' style={{backgroundImage:`url($pic1)`}}></div>
  return (
   <>

   
       
      
            <div className='home-content'>



              
                <h1>Hello, Its Me</h1>
                <h2 className='name'>Monika Mangla</h2>
                <h3>And I'm a</h3>
                <p>I'm a Full Stack developer .
                    Looking for a job 
                </p>
                <a  className ='cv' href={pdf} download='Monika pdf'>Download cv</a>
       
                {/* <button className='cv' id='cv1'>Hire Me Now!</button> */}
               
{/* 
                <div className='profile'>
                        <img  src={pic1} alt="pic" className='profilepic'/>
                           </div>  */}

                
            </div>

           
      
                    
   </>
  );
};

export default Home
;