import React from 'react';
import './Footer.css'
import {BsFacebook} from 'react-icons/bs';
import {FaLinkedin} from 'react-icons/fa';
import {BsGithub} from 'react-icons/bs'

const Footer = () => {
    return (
        <footer>
            <a href="#" className='footer__logo'>Ahmed</a>
            <ul className="permalinks">
                <li> <a href="#">Home</a> </li>
                <li> <a href="#about">About</a> </li>
                <li> <a href="#experience">Experience</a> </li>
                <li> <a href="#services">Services</a> </li>
                <li> <a href="#portfolio">Portfolio</a> </li>
                <li> <a href="#testimonial">Testimonial</a> </li>
                <li> <a href="#contact">Contact</a> </li>
            </ul>

            <div className="footer__socials">
                <a href="https://www.facebook.com/ahmed.estiaq.9/"><BsFacebook/> </a>
                <a href="https://www.linkedin.com/in/ahmed-istiaq/"><FaLinkedin/> </a>
                <a href="https://github.com/ahmedisti"> <BsGithub/></a>
            </div>

            <div className="footer__copyright">
                <small>&copy; Istiaq Ahmed. All rights reserved</small>
            </div>
        </footer>
    );
};

export default Footer;