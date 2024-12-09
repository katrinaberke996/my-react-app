//WebPage imports
import './App.css';
import './ai_io_cover.jpeg';
import './thrive logo.png';
import './thrive_2.png';
import './App.css';
import React, { useState } from "react";

//ThoughtSpot SDK
import { init, 
  AuthType, 
  Action,
  EmbedEvent,
  HostEvent,  
  RuntimeFilterOp,
} from "@thoughtspot/visual-embed-sdk";
import { LiveboardComp } from "./LiveboardComponent";
import { SearchComp } from "./SearchComponent";
import { Embed} from "./SearchBarEmbed";
{/* //import {KPILiveboardComp} from "./Liveboard2" */}


//App Code
init({
  thoughtSpotHost: "https://se-thoughtspot-cloud.thoughtspot.cloud",
  authType: AuthType.None,
  customizations: {
    style: {
      customCSSUrl:
        "https://cdn.jsdelivr.net/gh/thoughtspot/custom-css-demo/css-variables.css", // location of your style sheet
      // To apply overrides for your style sheet in this init, provide variable values below, eg
      customCSS: {
        variables: {
          "--ts-var-button--secondary-background": "transparant",
          "--ts-var-button--secondary--hover-background": "#F7F5FF",
          "--ts-var-root-background": "transparant",
          "--ts-var-root-font-family:": "Optimo-Plain",
          "--ts-var-button--primary--font-family": "Optimo-Plain",
          "--ts-var-root-font-family": "Helvetica",
          "--ts-var-sage-bar-header-background-color": "transparant"
        },
        rules_UNSTABLE: {
          ".pinboard-header-module__pinboardHeaderContainer": {
            display: "none !important" /*hides Liveboard header */
          },
          ".eureka-search-bar-module__withoutSage": {background: "transparent"},
          ".pinboard-header-module__verifiedBanner":{display: "none !important"}
        }
      }
    }
  }

});





export default function App() {
  return (
    <div className="App">
      <div className="background" style={{ backgroundColor: 'black', width: '100vw', height: '1000vh', padding: '10px', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative', zIndex: '0' }}>  
        
        <div style={{ position: 'relative', zIndex: '1' }}>
          <img
            src={require('./thrive logo.png')}
            alt="TS Logo"
            style={{ width: 'auto', height: '10vw', marginBottom: '20px', marginTop: '50px' }}
          />
        </div>
        
        <Embed />
        
        <img
          src={require('./thrive_2.png')}
          alt="background image"
          style={{ width: '100vw', height: '90vh', marginTop: '450px', marginBottom: '-200px', position: 'absolute', zIndex: '-1', top: 0, left: 0 }}
        />
        
        <div style={{ marginTop: '100px', position: 'relative' }}>
          <p>Your Key Charts</p>
          <div style={{ position: 'relative', top: 0, left: 0, width: '100%' }}>
          {/* <KPILiveboardComp style={{ zIndex: '0', position: 'relative' }} /> */}
            <LiveboardComp style={{ zIndex: '-2', position: 'absolute' }} />        
          </div>
        </div>
      </div>
    </div>
  );

  
}
























