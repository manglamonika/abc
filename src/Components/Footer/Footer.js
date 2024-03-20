import React from 'react';
import './Footer.css'
import fontpic from '../../assests/facebook.svg'; 
import fontpic1 from '../../assests/linkedin.svg'; 
import fontpic2 from '../../assests/insta.svg'; 
import fontpic3 from '../../assests/github.svg'; 

const Footer = () => {
  return (
    <div>
        <div >
            <h1 className='foo'>For More Info Please Check out these links</h1>
            </div>
      
      <div className='iconhead'>
                <a className='icon' href='https://www.instagram.com/manglamonika123/'><img src={fontpic}className="fa-brands fa-facebook"></img><h2>instagram</h2></a>
                <a className='icon' href='https://www.linkedin.com/in/manglamonika123/'><img src={fontpic1}className="fa-brands fa-linkedin"></img><h2>linkedin</h2></a>
                <a className='icon' href='https://www.instagram.com/manglamonika123/'><img src={fontpic2} className='fa-brands fa-square-instagram'></img><h2>facebook</h2></a>
                <a className='icon' href='https://github.com/manglamonika'><img src={fontpic3} className='fa-brands fa-github'></img><h2>github</h2></a>
      </div>
    </div>
  );
}

export default Footer;
