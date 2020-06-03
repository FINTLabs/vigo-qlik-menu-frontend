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
            <a href="http://www.vigoiks.no" target="_blank" className="vigoIKSlink"
               title="Informajsonsnettsted for fylkesansatte">Vigo IKS</a>
        </header>
    );
};

export default Header;
