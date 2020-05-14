import React from 'react';
import './main-container.css';
const MainContainer = (props) => {
    return (
        <div className="main-container">
            {props.children}
        </div>
    );
};

export default MainContainer;
