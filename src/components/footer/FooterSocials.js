import React from 'react'
import {GrLinkedin} from 'react-icons/gr';
import {GrGithub} from 'react-icons/gr';
import {FaDribbbleSquare} from 'react-icons/fa';

const FooterSocials = () => {
  return (
    <div className='footerSocials'>
    <a href="https://www.linkedin.com/in/michael-munn-561100216/" target="_blank"  rel="noreferrer"><GrLinkedin /></a>
    <a href="https://github.com/munnos" target="_blank"  rel="noreferrer"><GrGithub /></a>
    <a href="https://dribbble.com/munnos" target="_blank"  rel="noreferrer"><FaDribbbleSquare /></a>

    </div>
  )
}

export default FooterSocials