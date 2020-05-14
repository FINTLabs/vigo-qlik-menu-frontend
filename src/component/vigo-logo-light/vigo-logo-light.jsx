import React from 'react';
import './vigo-logo-light.css';
import logo from './logo_light.svg';

const VigoLogoLight = () => {
    return (
        <div id="logo">
            <h1>
                <a href="/" hrefLang="no">
                    <span className="image" style={{
                        width: '180px',
                        height: '100px',
                        background: "url(" + logo + ") top left no-repeat"
                    }}>
                        <span className="text">
                            Vigo IKS
                        </span>
                    </span>
                </a>
            </h1>
        </div>
    );
};

export default VigoLogoLight;
