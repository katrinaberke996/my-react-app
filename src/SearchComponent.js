import { SearchEmbed, SearchBarEmbed } from "@thoughtspot/visual-embed-sdk/lib/src/react";
export const SearchComp = () => {
  return (
    <SearchEmbed
      frameParams={{ height: "50vw", width: "80vw" }}
      dataSource={"cd252e5c-b552-49a8-821d-3eadaa049cca"}
      searchOptions= {{
        searchTokenString: '[sales] [product]',
        executeSearch: true
    }}
    />
  );
};

// const searchEmbed = new SearchEmbed(document.getElementById('ts-embed'), {
//   frameParams: {
//       width: '100%',
//       height: '100%',
//   },
//   answerId: "cd252e5c-b552-49a8-821d-3eadaa049cca",
//   dataSources: ['<%=datasourceGUID%>'],
//   collapseDataSources: false,
//   disabledActions: [],
//   disabledActionReason: '<reason for disabling>',
//   enableSearchAssist: true,
//   forceTable: false,
//   hiddenActions: [],
//   hideDataSources: false,
//   hideResults: false,
//   searchOptions: {
//       searchTokenString: '<TML-query-string>',
//       executeSearch: true,
//   },
// });