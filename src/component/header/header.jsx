import React from 'react';
import VigoLogoLight from "../vigo-logo-light/vigo-logo-light";
import './header.css';

const Header = () => {
    return (
        <div className="header-container">
            <header>
                <VigoLogoLight/>
                <h3>QLik</h3>
            </header>
        </div>
    );
};

export default Header;
