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
                    <MenuCard title="QlikSense" body="Modeller og analyse"
                              href="https://qs.fintlabs.no/prod"/>
                    <MenuCard title="QlikSense utviklingsmiljø" body="Modeller og analyse"
                              href="https://qs.fintlabs.no/dev"/>
                    <MenuCard title="QlikView AccessPoint" body="Modeller og analyse"
                              href="https://qv.fintlabs.no"/>
                    <MenuCard title="NPrinting NewsStand" body="Rapporter"
                              href="https://np.fintlabs.no/login/saml/sso/NPVIGOIKS"/>
                    <MenuCard title="NPrinting WebConsole" body="Utvikling av rapporter"
                              href="https://np-admin.fintlabs.no/login/saml/sso/npavigoiks"/>
                    <MenuCard title="Databasedokumentasjon" body="Dokumentasjon av Vigo Sentraldatabase"
                              href="/dbdoc/db/schemas/VIGOS/summary.html"/>
                </MenuContainer>
            </MainContainer>
            <footer>
                <p>Vigo IKS har samlet Qlik-applikasjonene på et sted for å gi brukerene en bedre oversikt.<br/>
                    Tilgang til de enkelte applikasjonene i portalen kan kreve at du har en brukerID.</p>
            </footer>
        </>
    );
}

export default App;
