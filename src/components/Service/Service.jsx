import React from 'react';
import './Service.css'
import {BsCheckCircle} from 'react-icons/bs'

const Service = () => {
    return (
        <section id='services'>
            <h5>What I Offer</h5>
            <h2>Services</h2>

            <div className="container services__container">
                <article className='service'>
                    <div className="service__head">
                        <h3>UI/UX Design</h3>
                    </div>
                    <ul className="service__list">
<li>
    <BsCheckCircle className='service__list-icon'/>
    <p>Lorem ipsum dolor sit amet.</p>
</li>
<li>
    <BsCheckCircle className='service__list-icon'/>
    <p>Lorem ipsum dolor sit amet.</p>
</li>
<li>
    <BsCheckCircle className='service__list-icon'/>
    <p>Lorem ipsum dolor sit amet.</p>
</li>
<li>
    <BsCheckCircle className='service__list-icon'/>
    <p>Lorem ipsum dolor sit amet.</p>
</li>
<li>
    <BsCheckCircle className='service__list-icon'/>
    <p>Lorem ipsum dolor sit amet.</p>
</li>

                    </ul>
                </article>
                {/* END OF UI/UX */}
                <article className='service'>
                    <div className="service__head">
                        <h3>WEB DEVELOPMENT</h3>
                    </div>
                    <ul className="service__list">
<li>
    <BsCheckCircle className='service__list-icon'/>
    <p>Lorem ipsum dolor sit amet.</p>
</li>
<li>
    <BsCheckCircle className='service__list-icon'/>
    <p>Lorem ipsum dolor sit amet.</p>
</li>
<li>
    <BsCheckCircle className='service__list-icon'/>
    <p>Lorem ipsum dolor sit amet.</p>
</li>
<li>
    <BsCheckCircle className='service__list-icon'/>
    <p>Lorem ipsum dolor sit amet.</p>
</li>
<li>
    <BsCheckCircle className='service__list-icon'/>
    <p>Lorem ipsum dolor sit amet.</p>
</li>
<li>
    <BsCheckCircle className='service__list-icon'/>
    <p>Lorem ipsum dolor sit amet.</p>
</li>

                    </ul>
                </article>
                {/* END OF WEB*/}
                <article className='service'>
                    <div className="service__head">
                        <h3>UI/UX Design</h3>
                    </div>
                    <ul className="service__list">
<li>
    <BsCheckCircle className='service__list-icon'/>
    <p>Lorem ipsum dolor sit amet.</p>
</li>
<li>
    <BsCheckCircle className='service__list-icon'/>
    <p>Lorem ipsum dolor sit amet.</p>
</li>
<li>
    <BsCheckCircle className='service__list-icon'/>
    <p>Lorem ipsum dolor sit amet.</p>
</li>
<li>
    <BsCheckCircle className='service__list-icon'/>
    <p>Lorem ipsum dolor sit amet.</p>
</li>
<li>
    <BsCheckCircle className='service__list-icon'/>
    <p>Lorem ipsum dolor sit amet.</p>
</li>

                    </ul>
                </article>
                {/* END OF CONTENT */}

            </div>
        </section>
    );
};

export default Service;