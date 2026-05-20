import React from 'react';
import './App.css';
import Header from "./component/header/header";
import MenuCard from "./component/menu/menu-card";
import MainContainer from "./component/main-container/main-container";
import MenuContainer from "./component/menu/menu-container";

function App() {
    return (
        <>
            <MainContainer>
                <Header/>
                <h3 className="welcome-text align-center">Velkommen til analyse-portalen</h3>
                <p className="intro-text">
                    Novari IKS har samlet Qlik Cloud, Qlik Sense og NPrinting i denne
                    portalen for å gi deg som bruker av tjenestene en bedre og enklere oversikt.
                </p>
                <MenuContainer>
                    <MenuCard title="Qlik Sense" body="Lesetilgang lokale fylkesapper"
                              href="https://qs.vigoiks.no/prod"/>
                    <MenuCard title="Qlik Sense" body="Utviklingsmiljø lokale fylkesapper"
                              href="https://qs.vigoiks.no/dev"/>
                    <MenuCard title="Qlik Cloud" body="Sentrale Apper"
                              href="https://novariiks.eu.qlikcloud.com/" />
                    <MenuCard title="NPrinting" body="NewsStand"
                              href="https://np.vigoiks.no/login/saml/sso/np_vigoiks_no"/>
                    <MenuCard title="NPrinting" body="Utviklingsmiljø"
                              href="https://np-admin.vigoiks.no/login/saml/sso/np-admin_vigoiks_no"/>
                    <MenuCard title="Dokumentasjon" body="Dokumentasjon av VIGO Sentraldatabase"
                              href="https://novariiks.eu.qlikcloud.com/sense/app/97508809-c561-4497-9649-4bcae5307063"/>
                    <MenuCard title="SharePoint Informasjon" body="Informasjonsside Novari Dataanalyse"
                              href="https://novariiks.sharepoint.com/sites/NovariDataanalyse"/>
                </MenuContainer>

            </MainContainer>
            <footer className="footer">
                <p>
                    Tilganger styres via fylkene gjennom VIGO (lokale apper) og roller i
                    Entra ID (sentrale apper). Ta kontakt med systemansvarlig i eget fylke
                    for tilgang.
                </p>

                <p>
                    Gå til{" "}
                    <a
                        href="https://support.novari.no"
                        className="inline-link"
                        target="_blank"
                        rel="noopener noreferrer"
                    >support</a>{" "}dersom du har spørsmål, vil melde fra om en hendelse eller har tekniske problemer.
                </p>
            </footer>
        </>
    );
}

export default App;
