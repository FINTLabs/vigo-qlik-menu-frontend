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
                <a href="https://teams.microsoft.com/l/channel/19%3a4b450cc244494402bd9181752ca22441%40thread.skype/Oppl%25C3%25A6ring?groupId=e3192e0c-cfca-47ef-b0f0-6e7571dd3911&tenantId=08f3813c-9f29-482f-9aec-16ef7cbf477a" target="_blank" className="menuLinks"
                   title="Teams">Teams</a>
                <a href="https://vigo-qlik-support.fintlabs.no/" target="_blank" className="menuLinks"
                   title="Support">Support</a>
            </div>
        </header>
    );
};

export default Header;
