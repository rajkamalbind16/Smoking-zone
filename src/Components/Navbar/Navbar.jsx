import React from 'react';
import './Navbar.css';

import logo from './photo/logo.png';
import {BsSearch} from 'react-icons/bs';

const Navbar = () => {
  return (
    <>
    <div className='mainContainer'>
        <div>
            <img src={logo} alt="" id='logo'/>
        </div>
        <div className='linkDiv'>
            <li className='link'>HOME</li>
            <li className='link'>ABOUT US</li>
            <li className='link'>FEATURES</li>
            <li className='link'>PAGES</li>
            <li className='link'>BLOG</li>
            <li className='link'>CONTACT</li>
            <li className='link'><BsSearch id='search'/></li>
        </div>
        <div>
            <button id='myBtn'>CONTACT US</button>
        </div>
    
    </div>
    </>
  )
}

export default Navbar