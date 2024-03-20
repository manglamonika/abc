import React from 'react'
import './Project.css'
import Pics from '../../assests/img4.jpg';
import Pic from '../../assests/img5.jpg';
import Pici from '../../assests/img6.jpg';
import Picture from '../../assests/img4.jpg';

const Project = () => {
  return (
    <div className='tagmain-'>
        <div className='headong'>
      <h1>Latest Project</h1>
      </div>

    <div className='Head' id='Project'>
      {/* <div className='Head-tag'>
        <button className='btn'>All</button >
        <button className='btn'>Product</button >
        <button className='btn'>Interacting</button >
        <button className='btn'>Web App</button >
      </div> */}

    <div className='project'>
        <div className='project-type'>
            <img src={Pics} alt="Pics" className='projectpic1'/>
            <div>
                <h3>True-Beat</h3>
                <p></p>
                 <a href="#"></a>
            </div>
        </div>

        <div className='project-type'>
            <img src={Pic} alt="Pics" className='projectpic1'/>
            <div>
                <h3>Be-Blogging App</h3>
                <p></p>
                 <a href="#"></a>
            </div>
        </div>

        

        <div className='project-type'>
            <img src={Pici} alt="Pics" className='projectpic1'/>
            <div>
                <h3>Pg-life</h3>
                <p>l</p>
                 <a href="#"></a>
            </div>
        </div>

      
        <div className='project-type'>
            <img src={Pici} alt="Pics" className='projectpic1'/>
            <div>
                <h3>Boook-Store Application</h3>
                <p>l</p>
                 <a href="#"></a>
            </div>
        </div>

        <div className='project-type'>
            <img src={Pici} alt="Pics" className='projectpic1'/>
            <div>
                <h3>food website</h3>
                <p>|</p>
                 <a href="#"></a>
            </div>
        </div>
        <div className='project-type'>
           <img src={Picture} alt="Pics" className='projectpic1'/>
            <div>
                <h3>Self-Driving Car</h3>
                <p></p>
                 <a href="#"></a>
            </div>
        </div>
        

    </div>


    </div>
    </div>
  )
}

export default Project
