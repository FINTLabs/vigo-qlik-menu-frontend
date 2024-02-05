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
                    <MenuCard title="Qlik Sense" body="Lesetilgang lokale Apper"
                              href="https://qs.vigoiks.no/prod"/>
                    <MenuCard title="Qlik Sense" body="Utviklingsmiljø lokale Apper"
                              href="https://qs.vigoiks.no/dev"/>
                    <MenuCard title="Qlik Sense" body="Sentrale Apper"
                              href="https://qscore.vigoiks.no/ecore" />
                    <MenuCard title="NPrinting" body="NewsStand"
                              href="https://np.vigoiks.no/login/saml/sso/np_vigoiks_no"/>
                    <MenuCard title="NPrinting" body="Utviklingsmiljø"
                              href="https://np-admin.vigoiks.no/login/saml/sso/np-admin_vigoiks_no"/>
                    <MenuCard title="Dokumentasjon" body="Dokumentasjon av VIGO Sentraldatabase"
                              href="https://novariiks.sharepoint.com/sites/VigoIKSAnalyse/SitePages/VIGOS-Databasedoc.aspx"/>
                </MenuContainer>

            </MainContainer>
            <footer>
                <p>Vigo IKS har samlet Qlik Sense og NPrinting tilgangene i denne portalen for å gi
                    brukerne en bedre oversikt.
                Tilganger styres via VIGO i egen fylkeskommune, ta kontakt med systemansvarlig               
                </p>
                <p>Opplæringsvideoer og annen nyttig informasjon ligger i Qlikteam for fylkeskommunene i Teams</p>
                <p>Trykk på Support oppe i høyre hjørne på denne siden dersom du har spørsmål, vil melde fra om en hendelse eller har tekniske problemer</p>
            </footer>
        </>
    );
}

export default App;
