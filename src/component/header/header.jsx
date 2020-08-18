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
                <a href="https://teams.microsoft.com/_#/school/files/Oppl%C3%A6ring?threadId=19%3A4b450cc244494402bd9181752ca22441%40thread.skype&ctx=channel&context=Oppl%25C3%25A6ring&rootfolder=%252Fsites%252FVIGO-VigoIKSQlik2%252FDelte%2520dokumenter%252FOppl%25C3%25A6ring" target="_blank" className="menuLinks"
                   title="Teams">Teams</a>
                <a href="https://vigo-qlik-support.fintlabs.no/" target="_blank" className="menuLinks"
                   title="Support">Support</a>
            </div>
        </header>
    );
};

export default Header;
