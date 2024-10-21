import React from 'react';
import { FaGithub, FaLinkedin, FaStackOverflow } from 'react-icons/fa';

function Footer() {
    return (
        <footer>
            <div className='social-icons'>
                <a
                    href='https://github.com/RickHennessey87'
                    target='_blank'
                    rel='noopener noreferrer'
                    aria-label='Github'
                >
                    <FaGithub />
                </a>
                <a
                    href='https://www.linkedin.com/in/patrick-hennessey-1a409220b/'
                    target='_blank'
                    rel='noopener noreferrer'
                    aria-label='LinkedIn'
                >
                    <FaLinkedin />
                </a>
            </div>
            <p>&copy; {new Date().getFullYear()} Patrick Justus Hennessey</p>
        </footer>
    );
}

export default Footer;