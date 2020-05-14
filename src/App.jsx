import React from 'react';
import './App.css';
import VigoTriangle from "./component/vigo-triangle/vigo-triangle";
import Header from "./component/header/header";
import MenuCard from "./component/menu/menu-card";
import MainContainer from "./component/main-container/main-container";

function App() {
    return (
        <div className="App">
            <VigoTriangle/>
            <Header/>
            <MainContainer>
                <MenuCard title="QlikSense" body="Modeller og analyse" href="https://qs.fintlabs.no/nam/hub"/>
                <MenuCard title="QlikView AccessPoint" body="Modeller og analyse" href="https://qv.fintlabs.no"/>
            </MainContainer>
        </div>
    );
}

export default App;
