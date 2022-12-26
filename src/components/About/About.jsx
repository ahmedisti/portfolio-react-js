import React from "react";
import "./About.css";
import ME from "../../assets/me-about.png";
import {FaAward, FaUser} from 'react-icons/fa'
import {AiFillProject} from 'react-icons/ai'

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="AboutImage" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
<FaAward className="about__icon"></FaAward>
                <h5>Experience</h5>
                <small>1+ Years Working</small>
            </article>
            <article className="about__card">
<FaUser className="about__icon"></FaUser>
                <h5>Clients</h5>
                <small>50+ Worldwide</small>
            </article>
            <article className="about__card">
<AiFillProject className="about__icon"></AiFillProject>
                <h5>Projects</h5>
                <small>10+ Completed</small>
            </article>
          </div>
          <p>I am a hard-working and dedicated front-end developer with a keen eye for detail, and a determination to deliver the highest quality. I love to work in a cooperative environment where I can best apply my abilities to tackle complex and real-life challenges while also having the opportunity to learn new things. </p>
          <a href="#contact" className="btn btn-primary">Let's Talk</a>
        </div>
      </div>
    </section>
  );
};

export default About;
