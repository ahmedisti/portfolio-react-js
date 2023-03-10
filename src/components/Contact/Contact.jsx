import React from 'react';
import './Contact.css'
import {MdOutlineEmail} from 'react-icons/md';
import {RiMessengerLine} from 'react-icons/ri';
import {BsWhatsapp} from 'react-icons/bs';
import {useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {

    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_ind054o', 'template_apa0uho', form.current, 'YnIavQkNBNEp8xpvO');
        e.target.reset();
      };
    return (
        <section id='contact'>
            <h5>Get In Touch</h5>
            <h2>Contact Me</h2>
            <div className="container contact__container">
                <div className="contact__options">
<article className='contact__option'>
<MdOutlineEmail className='contact__option-icon'/>
    <h4>Email</h4>
    <h5>mdistiaqah@gmail.com</h5>
    <a href="mailto:mdistiaqah@gmail.com">Send a message</a>
</article>
<article className='contact__option'>
<RiMessengerLine className='contact__option-icon'/>
    <h4>Messenger</h4>
    <h5>Istiaq Ahmed</h5>
    <a href="https://m.me/ahmed.estiaq.9/">Send a message</a>
</article>
<article className='contact__option'>
<BsWhatsapp className='contact__option-icon'/>
    <h4>WhatsApp</h4>
    <h5>+880123456789</h5>
    <a href="https://api.whatsapp.com/send?phone=+8801753147587">Send a message</a>
</article>
                </div>
                {/* END OF CONTACT OPTION */}
                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name='name' placeholder='Your Full Name' required/>
                    <input type="email" name="email" placeholder='Your Email Address' required />
                    <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
                    <button type='submit' className='btn btn-primary'>Send Message</button>
                </form>
            </div>
        </section>
    );
};

export default Contact;