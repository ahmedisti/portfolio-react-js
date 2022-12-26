import React from 'react';
import './Header.css';
import CTA from './CTA';
import ME from '../../assets/me.png';
import HeaderSocials from './HeaderSocials';

const Header = () => {
    return (
        <header>
            <div className="container header__container">
                <h5>Assalamu-alaikum I'm</h5>
                <h1>Istiaq Ahmed</h1>
                <h5 className="text-light">Frontend Developer</h5>
                <CTA></CTA>
                <HeaderSocials></HeaderSocials>

                <div className="me">
                    <img src={ME}alt="me" srcset="" />
                </div>
                <a href="#contact" className='scroll__down'>Scroll Down</a>
            </div>
        </header>
    );
};

export default Header;