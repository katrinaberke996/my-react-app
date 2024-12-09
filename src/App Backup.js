import './App.css';
import './UniWhite.png';
import './Picture 1.png';
import './App.css';
import React, { useState } from "react";

import { init, AuthType, SearchBarEmbed, SearchEmbed} from "@thoughtspot/visual-embed-sdk";
import {
  Action,
  EmbedEvent,
  HostEvent,  
  RuntimeFilterOp,
} from "@thoughtspot/visual-embed-sdk";
import { LiveboardComp } from "./LiveboardComponent";
import { SearchComp } from "./SearchComponent";
import { Embed} from "./SearchBarEmbed";



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
          "--ts-var-button--secondary-background": "#F7F5FF",
          "--ts-var-button--secondary--hover-background": "#F7F5FF",
          "--ts-var-root-background": "transparent",
          "--ts-var-root-font-family:": "sans-serif",
          "--ts-var-button--primary--font-family": "sans-serif",
          "--ts-var-root-font-family": "Helvetica",
          "--ts-var-sage-bar-header-background-color": "#141198"
        },
        rules_UNSTABLE: {
          ".pinboard-header-module__pinboardHeaderContainer": {
            display: "none !important" /*hides Liveboard header */
          }
        }
      }
    }
  }

});

export default function App() {
  // Define state to manage which tab is active
  const [activeTab, setActiveTab] = useState("Liveboard");

  return (
    <div className="App">
      <div className="banner" style={{ backgroundColor: '#141198', padding: '10px', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <img
          src={require('./UniWhite.png')}
          alt="Unilever Logo"
          style={{ width: "auto", height: "5vw", marginBottom: '20px', marginRight: '1550px' }}
        />
        <div className="tabs" style={{ display: 'flex', gap: '20px', marginRight: '1550px', color: 'white' }}>
          {/* Add the "Home" tab */}
          <div
            className={`tab ${activeTab === "Sage" ? "active" : ""}`}
            onClick={() => setActiveTab("Sage")}
          >
            Sage
          </div>
          {/* Add the "Liveboard" tab */}
          <div
            className={`tab ${activeTab === "Liveboard" ? "active" : ""}`}
            onClick={() => setActiveTab("Liveboard")}
          >
            Liveboard
          </div>
          {/* Add the "Sage" tab */}
        </div>
      </div>
      <p style={{ color: 'blue' }}> Sample ThoughtSpot Embedding</p>
      {/* Render the appropriate component based on the active tab */}
      {activeTab === "Liveboard" ? <LiveboardComp /> : activeTab === "Search" ? <SearchComp /> :  <Embed />}
    </div>
  );
}









//   return (
//     <div className="App">
//       <div className="banner" style={{ backgroundColor: 'blue', padding: '10px', textAlign: 'center' }}>
//         <img
//           src={require('./UniWhite.png')}
//           alt="Unilever Logo"
//           style={{ width: "auto", height: "5vw", marginRight: '6000px' }}
//         />
//         <div className="tabs">
//           {/* Add the "Home" tab */}
//           <div
//           className={`tab ${activeTab === "Sage" ? "active" : ""}`}
//           onClick={() => setActiveTab("Sage")}
//         >
//           Sage
//         </div>
//           {/* Add the "Liveboard" tab */}
//           <div
//             className={`tab ${activeTab === "Liveboard" ? "active" : ""}`}
//             onClick={() => setActiveTab("Liveboard")}
//           >
//             Liveboard
//           </div>
//           {/* Add the "Sage" tab */}
//         </div>
//       </div>
//       <p style={{ color: 'blue' }}> Sample ThoughtSpot Embedding</p>
//       {/* Render the appropriate component based on the active tab */}
//       {activeTab === "Liveboard" ? <LiveboardComp /> : activeTab === "Search" ? <SearchComp /> :  <Embed />}
//     </div>
//   );
// }



// export default function App() {
//   // Define state to manage which tab is active
//   const [activeTab, setActiveTab] = useState("Liveboard");

//   return (
//     <div className="App">
//       <h1>           
//         <img
//           src={require('./Uni.png')}
//           alt="Unilever Logo"
//           style={{ width: "auto", height: "10vw" }}
//         /> 
//       </h1>
//       {/* Use a div instead of ul for the tab container */}
//       <div className="tabs">
//         {/* Add the "Liveboard" tab */}
//         <div
//           className={`tab ${activeTab === "Liveboard" ? "active" : ""}`}
//           onClick={() => setActiveTab("Liveboard")}
//         >
//           Liveboard
//         </div>
//         {/* Add the "Search" tab */}
//         <div
//           className={`tab ${activeTab === "Search" ? "active" : ""}`}
//           onClick={() => setActiveTab("Search")}
//         >
//           Search
//         </div>
//         {/* Add the "Search Bar" tab */}
//         <div
//           className={`tab ${activeTab === "Sage" ? "active" : ""}`}
//           onClick={() => setActiveTab("Sage")}
//         >
//           Sage
//         </div>
//       </div>
//       <p style={{ color: 'blue' }} > Sample ThoughtSpot Embedding</p>
//       {/* Render the appropriate component based on the active tab */}
//       {activeTab === "Liveboard" ? <LiveboardComp /> : activeTab === "Search" ? <SearchComp /> :  <Embed />}
//     </div>
//   );
// }