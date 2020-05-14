import React from 'react';
import './menu-card.css';

const MenuCard = ({title, body, href}) => {
    return (
        <div className="menu-card">
            <a href={href} className="menu-card-href" target="_blank"  rel="noopener noreferrer">
            <span className="menu-card-title">
               <h2>{title}</h2>
            </span>
                <span className="menu-card-body">
               <p>{body}</p>
            </span>
            </a>
        </div>
    );
};

export default MenuCard;
