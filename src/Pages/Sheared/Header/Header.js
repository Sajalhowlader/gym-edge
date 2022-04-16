import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <nav>
            <div className='header-container'>
                <div className="logo">

                </div>
                <div className="menu">
                    <NavLink to='/home'>HOME</NavLink>
                    <NavLink to='/schedule'>SCHEDULE</NavLink>
                    <NavLink to='/services'>SERVICES</NavLink>
                    <NavLink to='/about'>ABOUT</NavLink>
                    <NavLink to='/contacts'>CONTACTS</NavLink>
                </div>
            </div>
        </nav>
    );
};

export default Header;