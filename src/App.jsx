import React from 'react';
import './App.css';
import VigoTriangle from "./component/vigo-triangle/vigo-triangle";
import Header from "./component/header/header";
import MenuCard from "./component/menu/menu-card";
import MainContainer from "./component/main-container/main-container";
import MenuContainer from "./component/menu/menu-container";

function App() {
    return (
        <>
            <VigoTriangle/>
            <MainContainer>
                <Header/>
                <h3 className="welcome-text align-center">Velkommen til Qlik-portalen</h3>
                <MenuContainer>
                    <MenuCard title="Qlik Sense" body="Lesetilgang"
                              href="https://qs.fintlabs.no/prod"/>
                    <MenuCard title="Qlik Sense" body="Utviklingsmiljø"
                              href="https://qs.fintlabs.no/dev"/>
                    <MenuCard title="QlikView" body="Lesetilgang"
                              href="https://qv.fintlabs.no"/>
                    <MenuCard title="NPrinting" body="NewsStand"
                              href="https://np.fintlabs.no/login/saml/sso/NPVIGOIKS"/>
                    <MenuCard title="NPrinting" body="Utviklingsmiljø"
                              href="https://np-admin.fintlabs.no/login/saml/sso/npavigoiks"/>
                    <MenuCard title="Dokumentasjon" body="Dokumentasjon av VIGO Sentraldatabase"
                              href="/dbdoc/db/schemas/VIGOS/summary.html"/>
                </MenuContainer>

            </MainContainer>
            <footer>
                <p>Opplæringsvideoene ligger i Qlikteam for fylkeskommunene i Teams.</p>
                <p>Vigo IKS har samlet analyseverktøyene på et sted for å gi brukerene en bedre oversikt.<br/>
                    Tilgang styres av VIGO ansvarlig i eget fylke.</p>
            </footer>
        </>
    );
}

export default App;
