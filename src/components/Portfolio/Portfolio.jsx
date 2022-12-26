import React from 'react';
import './Portfolio.css'
import IMG1 from '../../assets/project-5.jpg'
import IMG2 from '../../assets/project-4.jpg'
import IMG3 from '../../assets/project-2.jpg'
import IMG4 from '../../assets/project-1.jpg'
import IMG5 from '../../assets/project-3.jpg'
import IMG6 from '../../assets/project-6.jpg'

const data = [
    {
id:1,
image:IMG1,
title:'Tech Ball',
github:'https://github.com/ahmedisti/material-ui-practice',
demo: 'https://tech-ball.netlify.app/',
    },
    {
        id:2,
        image:IMG2,
        title:'Movie Bazar',
        github:'https://github.com/ahmedisti/movieZone',
        demo: 'https://movie-bazar.netlify.app/',
    },
    {
        id:3,
        image:IMG3,
        title:'Recipe Book',
        github:'https://github.com/ahmedisti/recipe-finder',
        demo: 'https://recrecipebook.netlify.app/',
    },
    {
        id:4,
        image:IMG4,
        title:'Advice Giver',
        github:'https://github.com/ahmedisti/advice-giver-rjs',
        demo: 'https://upodesh-giver.netlify.app/',
    },
    {
        id:5,
        image:IMG5,
        title:'Weather App',
        github:'https://github.com/ahmedisti/Weather-App',
        demo: 'https://ahmedisti.github.io/Weather-App/',
    },
    {
        id:6,
        image:IMG6,
        title:'Bank Website',
        github:'https://github.com/ahmedisti/Bank-Website',
        demo: 'https://ahmedisti.github.io/Bank-Website/',
    },
]
const Portfolio = () => {
    return (
        <section id='portfolio'>
            <h5>My Recent Work</h5>
            <h2>Portfolio</h2>
            <div className="container portfolio__container">
{
    data.map(({id , image , title , github , demo}) => {

        return(
            <article key={id} className="portfolio__item">
            <div className="portfolio__item-image">
<img src={image} alt={title} />
            </div>
            <h3>{title}</h3>
            <div className="portfolio__item-cta">
            <a href={github} className='btn'>GitHub</a>
            <a href={demo} className='btn btn-primary'>Live Demo</a>
            </div>
            
        </article>
        )
    })
}
            </div>
        </section>
    );
};

export default Portfolio;