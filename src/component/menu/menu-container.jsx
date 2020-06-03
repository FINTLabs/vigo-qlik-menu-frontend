import React from 'react';
import './menu-container.css';
const MenuContainer = (props) => {
    return (
        <div className="navBox">
            {props.children}
        </div>
    );
};

export default MenuContainer;
