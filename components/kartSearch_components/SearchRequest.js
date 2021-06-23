
export const SearchRequest ={
      query : '',
      fields : ["*"],
      textFacets : [],
      highlightFields : [],
      searchFields : ["*"],
      filter : '',
      sort : [],
      skip : 0,
      count : 30,
      collection : '',
      facetCount : 100,
      groupCount : -1,
      typoTolerance : 1,
      textFacetFilters : {},
      numericFacets : {},
      numericFacetFilters : {},
      textFacetQuery : null,
      geo: {},
}
export class TextFacetQuery {
  constructor(query, count) {
      this.query = query,
      this.count = count || 100
  }
}