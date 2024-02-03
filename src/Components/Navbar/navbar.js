import React from 'react'
import './Navbar.css'
import {Link} from 'react-scroll';

const Navbar = () => {
  return (
 <>
        <nav className="navbar">
            <span class="Portfolio">Portfolio</span>

            <div className="Menu">
                <Link className='Menuitm1'> Home</Link>
                <Link className='Menuitm1'>Project</Link>
                <Link className='Menuitm1'>Skills</Link>
                <Link className='Menuitm1'>Contacts</Link>
            </div>
            
        </nav>
        
    </>
  )
}

export default Navbar


