import React from 'react';
import './main-container.css';
const MainContainer = (props) => {
    return (
        <div className="container">
            {props.children}
        </div>
    );
};

export default MainContainer;
