import React from 'react'
import './Project.css'
import Pics from '../../assests/img7.jpg';
import Pic from '../../assests/img4.jpg';
import Pici from '../../assests/img5.jpg';
import Picture from '../../assests/img6.jpg';

const Project = () => {
  return (
    <div className='main-tag'>
        <div className='headong'>
      <span>What i will do for you</span>
      <h2>Latest Project</h2>
      </div>

    <div className='Head'>
      <div className='Head-tag'>
        <button className='btn'>All</button >
        <button className='btn'>Product</button >
        <button className='btn'>Interacting</button >
        <button className='btn'>Web App</button >
      </div>

    <div className='project'>
        <div className='project-type'>
            <span className='photo ' ><img src={Pics} alt="Pics" className='projectpic1'/></span>
            <div>
                <h3>Be-blogger App</h3>
                <p>lorem nkcdnkvndsxkcnkdsnxcksndncsddddvvvvvvvv</p>
                 <a href="#"></a>
            </div>
        </div>

        <div className='project-type'>
            <span className='photo '><img src={Pic} alt="Pics" className='projectpic1'/></span>
            <div>
                <h3>Self-Car Driving</h3>
                <p>lorem nkcdnkvndsxkcnkdsnxcksndncsddddvvvvvvvv</p>
                 <a href="#"></a>
            </div>
        </div>

        <div className='project-type'>
            <span className='photo '><img src={Picture} alt="Pics" className='projectpic1'/></span>
            <div>
                <h3>BMRC</h3>
                <p>lorem nkcdnkvndsxkcnkdsnxcksndncsddddvvvvvvvv</p>
                 <a href="#"></a>
            </div>
        </div>

        <div className='project-type'>
            <span className='photo '><img src={Pici} alt="Pics" className='projectpic1'/></span>
            <div>
                <h3>True-beat App</h3>
                <p>lorem nkcdnkvndsxkcnkdsnxcksndncsddddvvvvvvvv</p>
                 <a href="#"></a>
            </div>
        </div>

        <div className='project-type'>
            <span className='photo '><img src={Pic} alt="Pics" className='projectpic1'/></span>
            <div>
                <h3>Book Store Application</h3>
                <p>lorem nkcdnkvndsxkcnkdsnxcksndncsddddvvvvvvvv</p>
                 <a href="#"></a>
            </div>
        </div>


    </div>


    </div>
    </div>
  )
}

export default Project
