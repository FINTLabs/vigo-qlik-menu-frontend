import React from 'react';
import './header.css';

const Header = () => {
    return (
        <header>
            <div className="logo">
                <h1>
                    <span className="d-none">Vigo portalen</span>
                </h1>
            </div>
            <div className="menuContainer">
                <a href="https://vigo-qlik-support.fintlabs.no/" target="_blank" className="menuLinks"
                   title="Support">Support</a>
            </div>
        </header>
    );
};

export default Header;
