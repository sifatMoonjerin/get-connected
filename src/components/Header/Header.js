import React from 'react';
import banner from '../../images/banner.png';
import './Header.css';

const Header = () => {
    return (
        <div className="header">
            <img src={banner} alt="banner" className="banner-img"/>
            <nav>
                <a href="/home">Home</a>
                <a href="/profile">Profile</a>
                <a href="/connections">Connections</a>
            </nav>
        </div>
    );
};

export default Header;