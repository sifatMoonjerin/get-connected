import React from 'react';
import banner from '../../images/banner.png';
import './Header.css';

const Header = () => {
    return (
        <div className="header">
            <img src={banner} alt="banner" className="banner-img"/>
        </div>
    );
};

export default Header;