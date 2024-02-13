import React ,{useRef} from 'react';
import './Contact.css';
import emailjs from '@emailjs/browser';


const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_ny97hkt', 'template_63vynrv', form.current, {
        publicKey: '6zSZzB1ShathmpDj-',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          alert("email sent");
        },
        (error) => {
          console.log('FAILED...', error.text);

        },
      );
      }
  return (
    <div className='main'>
    <div className='contact'>
     <div className='main-text'>
        <span>Ask Me a question</span>
        <h2>Contact Me</h2>

     </div>
     <form className='form' ref={form} onSubmit={sendEmail}>
       
       <input className='text1' type="text" placeholder='your name' />
      <input className='text2' type="text" placeholder='your Email'/>
        
       <textarea name='' id='write' rows={10} cols={30} placeholder='Your mess'></textarea>
       <button className='button' type="submit">Send Me</button>
     
     </form>
      
    </div>
    </div>
  )
}

export default Contact;

