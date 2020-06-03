import React from 'react';
import './menu-card.css';

const MenuCard = ({title, body, href}) => {
    return (
        <a href={href}
           target="_blank"
           rel="noopener noreferrer"
           className="nav"
           title={title}
        >
            <h2 className="navTitle">{title}</h2>
            <p className="navText">
                {body}
            </p>
        </a>
    );
};

export default MenuCard;
