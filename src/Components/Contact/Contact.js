import React from 'react'
import './Contact.css';


const Contact = () => {
  return (
    <div className='main'>
    <div className='contact'>
     <div className='main-text'>
        <span>Ask Me a question</span>
        <h2>Contact Me</h2>

     </div>
     <form className='form'>
        
       <div className='text1' > <input type="text" placeholder='' /></div>
       <div className='text2'> <input type="text" placeholder='your Email'/></div>
       <div className='text3'> <input type="text" placeholder='your Address'/></div>
       <div className='text4'> <input type="text" placeholder='phone Number'/></div>
       <div className='text5'><textarea name='' id='write' rows={10} cols={30} placeholder='Your mess'></textarea></div>
       <div className='button'><button  type="submit">Send Me</button></div>
     </form>
      
    </div>
    </div>
  )
}

export default Contact

