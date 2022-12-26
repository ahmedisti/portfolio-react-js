import React from 'react';
import {BsLinkedin, BsTwitter} from 'react-icons/bs';
import {BsGithub} from 'react-icons/bs'


const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/ahmed-istiaq/" ><BsLinkedin></BsLinkedin></a>
        <a href="https://github.com/ahmedisti" ><BsGithub></BsGithub></a>
        <a href="https://twitter.com/_Istiaq_?t=3LGsB7YsdbbxUV3Xy2ThHw&s=07&fbclid=IwAR3S55b9TSgRs6QT5GQV7ws09gcUEBECUfbd73wh_j1U2euXySw4vpLfU0M" ><BsTwitter></BsTwitter></a>

    </div>
  )
}

export default HeaderSocials