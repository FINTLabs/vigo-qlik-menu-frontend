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
                <a href="mailto:support@vigo-qlik.zendesk.com" target="_blank"
                   rel="noopener noreferrer" className="menuLinks"
                   title="Support">Support</a>
            </div>
        </header>
    );
};

export default Header;
