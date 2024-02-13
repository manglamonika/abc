import React,{useState} from 'react'
import './Intro.css';
import p from '../../assests/pic2.png';

const Intro = () => {

    const [showFullText, setShowFullText] = useState(false);

    // Function to toggle showFullText state
    const toggleFullText = () => {
      setShowFullText(!showFullText);
    };

  return (
    
        <div >
            <section className='intro'>
                <div className='heading'>
                <span  className='int1'>Let me Introduce myself</span>
                <h1 className='int'>About Me</h1>
                </div>
                <p className='para'>{showFullText ? (
          "I'm [Monika Mangla], a recent graduate with a Master's degree in Computer Applications (MCA) and a strong passion for technology. I specialize in web development, with expertise in front-end technologies like ReactJS and TypeScript. I also have a solid foundation in HTML, CSS, and JavaScript, allowing me to create modern and responsive user interfaces. In addition to my front-end skills, I'm proficient in back-end development using languages like Python and Java. I enjoy building robust and scalable applications that leverage the power of server-side programming. Whether it's creating RESTful APIs, managing databases, or implementing complex business logic, I'm always up for the challenge. As I embark on my journey as a software developer, my goal is to become a full-stack developer, combining my front-end and back-end skills to build end-to-end solutions. I thrive in collaborative environments and am always eager to learn and grow. With a strong foundation in both design and development, I'm excited to contribute to impactful projects and make a difference in the world of technology."
        ) : (
          "I'm [Monika Mangla], a recent graduate with a Master's degree in Computer Applications (MCA) and a strong passion for technology. I specialize in web development, with expertise in front-end technologies like ReactJS and TypeScript. I also have a solid foundation in HTML, CSS, and JavaScript, allowing me to create modern and responsive user interfaces."
        )}
        </p> 
            <div className='btn-box'>
            <button class="button"  onClick={toggleFullText}>
            <span className='button-content'>{showFullText ? 'Read Less' : 'Read More'}</span>
                </button>
            </div>
            </section>
            <div id='fix1'>
                <img  id="fix"src={p}></img>
            </div>
   </div>
    
  )
}

export default Intro
