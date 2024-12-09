import {
  SageEmbed
}
from '@thoughtspot/visual-embed-sdk/lib/src/react';

export const Embed = () => {
  return (
    <SageEmbed
      frameParams={{ height: "50vw", width: "80vw" }}
      dataSource={"64240f46-6e66-4eeb-8a2c-e50ea7f655b4"}
      customizations={{
        content: {
          strings: {
            'Ask Sage any data question': 'Hey! Ask any question here',
            'Ask any business question you have':'Ask your natural language question here'
          }}
        }}
    //   searchOptions= {{
    //     searchQuery: 'what were the best performing products last month',
    //     executeSearch: false
    // }}
    />
  );
};

//retail appareal datasource: cd252e5c-b552-49a8-821d-3eadaa049cca
//retail banking: 921b84c6-fa30-40b0-b2b1-86a9b6938f53

// export const SearchComp = () => {
//   return (
//     <SearchEmbed
//       frameParams={{ height: "50vw", width: "80vw" }}
//       dataSource={"cd252e5c-b552-49a8-821d-3eadaa049cca"}
//     />
//   );
// };

// const SearchBarEmbed = new SearchBarEmbed(document.getElementById('ts-embed'), {
//   frameParams: {
//       width: '100%',
//       height: '100%',
//   },
//   dataSources: ['cd252e5c-b552-49a8-821d-3eadaa049cca'],
//   searchOptions: {
//       searchTokenString: '<TML-query-string>',
//       executeSearch: true,
//   },
// });