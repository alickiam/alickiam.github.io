import React, {useRef} from 'react';
import LinkedInImg from '../../assets/linkedin.png';
import "../Contact/contact.css";
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
          .sendForm('service_vnsnes3', 'template_mtbyejm', form.current, {
            publicKey: 'a8sm5q56RMyhud4f6',
          })
          .then(
            () => {
              console.log('SUCCESS!');
              e.target.reset()
              alert("Email Sent!")
            },
            (error) => {
              console.log('FAILED...', error.text);
            },
          );
      };
    return (
        <section id='contactPage'>
            <div id='contact'>
                <h1 className='contactPageTitle'>Contact</h1>
                <span className='contactDesc'>Reach out for collaboration or internship opportunities in full-stack development, embedded systems, and software engineering.</span>
                <form className='contactForm' ref = {form} onSubmit={sendEmail}>
                    <input type='text' className='name' placeholder='Your Name' name="from_name" />
                    <input type='text' className='email' placeholder='Your Email' name="from_email" />
                    <textarea className="msg" name="message" rows="5" placeholder="Your Message"></textarea>
                    <button type="submit" value="Send" className='submitBtn'>Submit</button>
                </form>
                <div className="contactInfo">
                    <p><strong>Email:</strong> <a href="mailto:a24mao@uwaterloo.ca">a24mao@uwaterloo.ca</a></p>
                    <p><strong>Phone:</strong> (780) 886-9325</p>
                    <p><strong>Location:</strong> Waterloo, ON, Canada</p>
                    <div className="links">
                        <a href="https://www.linkedin.com/in/alicia-z-mao/"><img src={LinkedInImg} alt="LinkedIn" className="linkedIn"/></a>
                        <a href="https://github.com/alickiam" className='link'>GitHub</a>
                        <a href="https://alickiam.github.io" className='link'>Website</a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact;