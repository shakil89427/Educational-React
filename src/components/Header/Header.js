import React from 'react';
import { Link } from 'react-router-dom';
import image from '../../Images/2.jpg'
import './Header.css'

const Header = () => {
    return (
        <div className='main bg-dark text-white'>
            <img className='logo' src={image} alt="" />
            <h4>Learn With Care</h4>
            <div>
            <Link className='text-decoration-none m-2 bg-info p-1 rounded text-white' to='/home'>Home</Link>
            <Link className='text-decoration-none m-2 bg-info p-1 rounded text-white' to='about'>About</Link>
            <Link className='text-decoration-none m-2 bg-info p-1 rounded text-white' to='/contact'>Contact Us</Link>
            </div>
        </div>
    );
};

export default Header;