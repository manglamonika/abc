import React from 'react';
import {fontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope} from "@fortawesome/free-solid-svg-icons";
import './Navbar.css'

// import {Link} from 'react-scroll';
import{HashLink as Link} from "react-router-hash-link";




const Navbar = () => {
  
  return (
 <>     

 <nav className='MInNav' >
        <div className="navbar">
            Portfolio
          </div>
          <label  class="menu-btn"><fontAwesomeIcon icon="fa-regular fa-bars" /></label>
            <ul className="Menu">
            <li><Link to ='#Intro' smooth className='active' >Intro</Link></li>
            <li> <Link to ='#Home' smooth className='active'>Home</Link></li>
            <li> <Link to ='#About' smooth className='active'>About</Link></li> 
            <li> <Link to ='#Project' smooth className='active'>Project</Link></li>
            <li><Link to ='#Contact' smooth className='active'>Contact</Link></li>
                {/* <Link className='Menuitm1'> Home</Link>
                <Link className='Menuitm1'>Project</Link>
                <Link className='Menuitm1'>Skills</Link>
                <Link className='Menuitm1'>Contacts</Link> */}
            </ul>
            
        </nav>
        
    </>
  )
}

export default Navbar


