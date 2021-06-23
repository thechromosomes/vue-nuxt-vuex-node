var {SearchRequest, TextFacetQuery} = require("./SearchRequest.js");
import Axios, {AxiosInstance, AxiosResponse} from "axios";

export const searchClient = {
  searchRequest: SearchRequest,
  fields(...fields) {
    this.searchRequest.fields = [];
    this.searchRequest.fields = [...new Set(this.searchRequest.fields.concat(fields))];
    return this;
  },

  highlightFields(...highlightFields) {
    this.searchRequest.highlightFields = [...new Set(this.searchRequest.highlightFields.concat(highlightFields))];
    return this;
  },
  textFacets(...textFacets){
    this.searchRequest.textFacets = [...new Set(this.searchRequest.textFacets.concat(textFacets))];
    return this;
  },

  textFacetFilters(name, filters) {
    console.log("textFacetFilters",filters,name)

    if(this.searchRequest.textFacetFilters[name] == undefined)
    this.searchRequest.textFacetFilters[name] = [];

    this.searchRequest.textFacetFilters[name] = [...new Set(filters)];
    return this;
  },

  numericFacets(name, ranges) {
    if (this.searchRequest.numericFacets[name] == undefined)
      this.searchRequest.numericFacets[name] = [];

    this.searchRequest.numericFacets[name] = [...new Set(this.searchRequest.numericFacets[name].concat(ranges.map(
      function (value, index, array) {
        let r = "";

        //preferring minInclusive to be true
        //preferring maxInclusive to be false
        if (value.minInclusive != undefined && value.minInclusive == false)
          r = r + "(";
        else
          r = r + "[";
        r = r + value.min + ",";

        r = r + value.max;
        if (value.maxInclusive != undefined && value.maxInclusive == true)
          r = r + "]";
        else
          r = r + ")";
        return r;
      }
    )))];

    return this;
  },

  numericFacetFilters(name, min, max) {
    if (this.searchRequest.numericFacetFilters[name] == undefined)
      this.searchRequest.numericFacetFilters[name] = [];
    this.searchRequest.numericFacetFilters[name] = [...new Set(this.searchRequest.numericFacetFilters[name].concat(`[${min},${max}]`))];
    return this;
  },

  filter(filter) {
    // Object.assign({}, this);
    this.searchRequest.filter = filter;
    return this;
  },

  sort(...sortFields) {
    this.searchRequest.sort = [];
    this.searchRequest.sort = [...new Set(this.searchRequest.sort.concat(sortFields))];
    return this;
  },

  typoTolerance(typo) {
    this.searchRequest.typoTolerance = typo;
    return this;
  },

  geo(val) {
    if (!Array.isArray(val)) {
      this.searchRequest.geo.around = val;
      this.searchRequest.geo.polygon = undefined
    } else {
      this.searchRequest.geo.polygon = val.filter((value, index) => {
        return val.findIndex(x => x.lat == value.lat && x.lng == value.lng) == index
      });
      this.searchRequest.geo.around = undefined
    }
    return this;

  },

  groupBy(groupBy){
    this.searchRequest.groupBy = groupBy;
    return this;
  },

  skip(skip){
    this.searchRequest.skip = skip;
    return this;
  },

  count(count) {
    this.searchRequest.count = count;
    return this;
  },

  facetCount(facetCount) {
    this.searchRequest.facetCount = facetCount;
    return this;
  },

  groupCount(groupCount) {
    this.searchRequest.groupCount = groupCount;
    return this;
  },
   clear() {
    this.searchRequest.textFacetFilters = {};
    this.searchRequest.textFacets = [];
    this.searchRequest.numericFacets = {};
    this.searchRequest.numericFacetFilters = {};
  }
}

