import { LiveboardEmbed } from "@thoughtspot/visual-embed-sdk/lib/src/react";

export const KPILiveboardComp = () => {
  return (
    <LiveboardEmbed
      frameParams={{ height: "20vw", width: "80vw" }}
      liveboardId={"17b76ccc-07f9-4ebf-a05b-4001b3ec2253"}
      fullHeight= {'0'}
    />
  );
};