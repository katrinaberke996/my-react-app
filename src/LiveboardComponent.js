import { LiveboardEmbed } from "@thoughtspot/visual-embed-sdk/lib/src/react";
import { Embed } from "./SearchBarEmbed";


export const LiveboardComp = () => {
  return (
    <LiveboardEmbed
      frameParams={{ height: "60vw", width: "80vw" }}
      liveboardId={"d2419b89-d241-42f2-9e35-9534a273001e"}
      fullHeight= {'0'}
    />
  );
};

//retail liveboard: c88336b9-53dd-4711-b6ed-6d7a0369e4c3
//finance: e87bb09d-cd8e-48f5-9c74-b064b243e968

// LiveboardComp 
// .on(LiveboardComp.CustomAction, payload => {
//   const customActionId = 'cam';
//   if (payload.id === customActionId || payload.data.id === customActionId) {
//        console.log('Custom Action event:', payload.data);
//   }
// })