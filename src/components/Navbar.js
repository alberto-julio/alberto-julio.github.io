import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, } from '@fortawesome/free-brands-svg-icons';


function Navbar() {
    return (
        <nav className='navbar'>
            <ul className='nav-list'>
                <li className='nav-item-right'>
                    <Link to="/">Home</Link>
                </li>

                <li className='nav-item-right'>
                    <Link to="/projects">Projects</Link>
                </li>

                <li className='nav-item-right'>
                    <Link to="https://drive.google.com/file/d/1FFSVWM40Os6VLO-dAa1g0fQkUcnyj4LX/view?usp=sharing">C/V</Link>
                </li>

                <li className='nav-item-right'>
                    <a href='https://github.com/alberto-julio' target='_blank' rel='noopener noreferrer'>
                        <FontAwesomeIcon icon={faGithub} size="2x" />
                    </a>
                </li>

                <li className='nav-item-right'>

                    <a href='https://www.linkedin.com/in/alberto-julio-759854221/' target='_blank' rel='noopener noreferrer'>
                        <FontAwesomeIcon icon={faLinkedin} size="2x" />
                    </a>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;
