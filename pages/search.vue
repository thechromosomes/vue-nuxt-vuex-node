<template>
  <div id="searchModalContainer" v-cloak>
    <div class="some-error" v-if="errorEncountered === true">
      <div class="container">
        <div class="error-div">Oops!!! Something Went Wrong</div>
        <p>
          Please, try
          <a href="" onclick="location.reload()" class="highlight-text">Reloading</a> page
          or go back to <a class="highlight-text" :href="getHomePageUrl">Home</a> page
        </p>
      </div>
    </div>
    <div id="searchModal" v-show="isOpen && !errorEncountered">
      <div :class="{ 'st-loading': loader }">
        <div v-show="!loader">
          <div class="st-products">
            <div class="st-row">
              <div class="st-col-md-12 stpp6 hidden-mobile-only">
                <div class="st-desktop-results">
                  <span class="st-result-title" v-show="totalHits > 0 || filterCount > 0"
                    >{{ searchQuery | truncate(25) }}
                    <span class="st-desktop-count"
                      >- {{ totalHits }} Item<span
                        v-show="totalHits > 1"
                        style="text-transform: lowercase"
                        >s&nbsp;</span
                      ></span
                    ></span
                  >
                </div>
              </div>
            </div>
            <div class="st-row">
              <div
                class="st-col-md-3 stpp6"
                :class="{ 'hidden-mobile-only': totalHits > 0 }"
                v-show="totalHits > 0"
              >
                <div id="STbar" class="sidebar">
                  <div class="filter-header">
                    <div class="st-flex st-justify-content-between">
                      <h4 class="filter-title st-pt-0">
                        Filters
                        <span
                          class="st-reset-all"
                          v-show="filterCount > 0"
                          @click.stop="clearFilters()"
                          >Clear all</span
                        >
                      </h4>
                    </div>
                  </div>
                  <div class="sidebar__inner">
                    <DesktopFilter
                      v-for="f in filters"
                      :key="f.field"
                      v-show="
                        f.values.length > 0 ||
                        f.selected.length > 0 ||
                        f.type === 'singleStatic'
                      "
                      v-bind:filter="f"
                      v-on:applyFilter="applyFilter"
                      v-on:clear-filter="clearFilters"
                    ></DesktopFilter>
                  </div>
                </div>
              </div>
              <div class="st-col-md-9 st-pl30">
                <div class="st-row st-mb40">
                  <div class="st-col-md-8 pl0 st-width100" v-if="isDeviceIpad">
                    <div class="resut-summary-t" v-show="totalHits > 0">
                      <span class="result-summary text-left pull-left">
                        <span>
                          <span class="hidden-mobile"> Showing</span>
                          <span class="st-highlight st-ellipse">{{
                            searchQuery | truncate(25)
                          }}</span>
                          <span
                            class="st-hidden-desktop st-desktop-count"
                            style="padding-left: 5px"
                          >
                            - {{ totalHits }} item<span
                              style="
                                display: inline-block;
                                color: #212529;
                                font-weight: 400;
                                text-transform: lowercase;
                              "
                              v-show="totalHits > 1"
                              >s</span
                            ></span
                          >
                          <span>
                            <span
                              class="hidden-mobile"
                              style="padding-left: 3px; white-space: nowrap"
                            >
                              Result
                              <span v-show="totalHits > 1" style="padding-right: 3px"
                                >s</span
                              >for</span
                            >

                            <span class="st-highlight hidden-mobile st-ellipse">
                              '{{ searchQuery | truncate(20) }}'</span
                            >
                          </span>
                        </span>
                      </span>
                    </div>
                  </div>
                  <div class="st-col-md-8 pl0 st-width100 hidden-mobile-only" v-else>
                    <div class="filter-tag-column">
                      <div class="st-filter-tags">
                        <div class="st-filter-inner">
                          <div class="tag-item" v-for="i in selectedFilters" :key="i">
                            <div class="tag-content" v-if="getType(i) !== 'numericFacet'">
                              <span v-if="getField(i) !== 'discount_filter'">{{
                                i
                              }}</span>
                              <span v-else>{{ i }} And Above</span>
                            </div>
                            <div class="tag-content" v-else>
                              {{ currSymbol }}{{ i[0] }}
                              <span v-if="i[0] !== '7001'">
                                - {{ currSymbol }}{{ i[1] }}</span
                              >
                              <span v-else>And Above</span>
                            </div>
                            <div
                              class="tag-close"
                              @click="clearSingleFilter(i, getField(i))"
                            >
                              ✕
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="st-col-md-4 hidden-mobile-only">
                    <div class="st-brd-left" v-show="totalHits > 0">
                      <div class="st-form-group">
                        <div class="st-sort-dropdown">
                          <span class="st-sorting-btn">
                            <span class="st-sort-box"
                              >Sort by:
                              <span class="selected-sort-option">{{
                                sortLabel
                              }}</span></span
                            >
                            <ul class="st-sorting">
                              <li v-for="s in sorts" :key="s.field">
                                <a
                                  :value="s.label"
                                  @click="sorting(s.label)"
                                  :class="{ 'active-sort': s.active }"
                                  >{{ s.label }}</a
                                >
                              </li>
                            </ul>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="clearfix"></div>
                  <Products v-for="item in response" v-bind:item="item" :key="item.id" />
                <div class="clearfix"></div>
                <div v-show="!resultsEnd && totalHits > 0">
                  <span class="result-loader"
                    ><i class="fa fa-circle-o-notch fa-spin"></i
                  ></span>
                </div>
                <div id="noResults" class="st-results-end" v-show="resultsEnd">
                  No more results
                </div>
                <div class="filter-bar hidden-desktop-only" v-show="totalHits > 0">
                  <div class="st-overlay-active" v-show="showMobileSort === true">
                    <div class="st-sorting-wrapper">
                      <div class="st-sorting-inner">
                        <ul class="list">
                          <li class="sortby">Sort by</li>
                          <li v-for="s in sorts" :key="s.field">
                            <div class="ripple-container">
                              <button
                                :value="s.label"
                                @click="sorting(s.label)"
                                :class="{ 'active-sort': s.active === true }"
                              >
                                <span class="sortByValues"> {{ s.label }}</span>
                              </button>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div id="sortFilter" class="sortFilterCon">
                    <div class="sort_h" @click="showMobileSort = true">
                      <span class="tabIcon sortIcon"></span>
                      <span
                        class="filter-applied-ellip"
                        v-show="sortLabel !== 'Relevance'"
                      ></span>
                      <span class="disInBlock">Sort by</span>
                    </div>
                    <div class="filter_h" @click="showMobileFilter = true">
                      <span class="tabIcon filterIcon"></span>
                      <span class="filter-applied-ellip" v-show="filterCount > 0"></span>
                      <span class="disInBlock">Filter</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div id="searchFilterMobile" class="hidden-desktop" v-show="showMobileFilter">
              <div id="mobile-filter">
                <div :class="{ 'mobile-filter-popup': showMobileFilter }">
                  <div class="filter-list">
                    <div class="filterHeader">
                      Filters
                      <span class="pull-right">
                        <!---->
                        <span
                          class="st-reset-all-mobile"
                          v-show="filterCount > 0"
                          @click.stop="clearFilters()"
                          >Clear all</span
                        >
                      </span>
                    </div>
                    <div>
                      <div class="filter-body">
                        <div class="mobileFilterType">
                          <div class="filterType">
                            <!---->
                            <ul
                              class="panel-heading"
                              :class="{ selected: f.field === selectedField }"
                              v-for="f in filters"
                              v-show="
                                f.values.length > 0 ||
                                f.selected.length > 0 ||
                                f.type === 'singleStatic'
                              "
                              :key="f.field"
                              @click="selectedField = f.field"
                            >
                              <!---->
                              <li class="panel-title">{{ f.title }}</li>
                            </ul>
                          </div>
                          <div class="st-filter-right">
                            <!---->
                            <div
                              class="mobileFilterValues"
                              v-for="f in filters"
                              v-show="f.field === selectedField"
                              :key="f.field"
                            >
                              <DesktopFilter
                                v-bind:filter="f"
                                v-on:applyFilter="applyFilter"
                                v-on:clear-filter="clearFilters"
                              ></DesktopFilter>
                            </div>
                          </div>
                        </div>
                        <div class="apply-filter">
                          <div class="col-1-2">
                            <div
                              class="ripple-container"
                              @click="(showMobileFilter = false), jumpToTop()"
                            >
                              <span class="btn flat filters-btn cancel-btn">Close</span>
                            </div>
                          </div>
                          <div class="col-1-2">
                            <div
                              class="ripple-container"
                              style="border-left: 1px solid #ddd"
                            >
                              <span
                                class="btn primary flat filters-btn txt-red"
                                @click="(showMobileFilter = false), jumpToTop()"
                                >Apply</span
                              >
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              id="st-back-top"
              class="back-top"
              @click="jumpToTop()"
              v-show="backToTop"
            >
              <a href="#" rel="tooltip" title="" data-original-title="Top"></a>
            </div>
          </div>
          <div id="overlay">
            <div class="container" v-show="totalHits === 0 && !loader">
              <h2 class="page-heading">
                No Results found
                <span v-show="searchQuery.trim().length > 0"
                  >for '{{ searchQuery | truncate(20) }}'</span
                >
              </h2>
              <div class="search-pform">
                <p>
                  Try searching some other keywords
                  <span v-show="filterCount > 0">or apply different set of filters</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Products from "../components/kartSearch_components/Products";
import UrlManager from "../utils/UrlManager";
import DesktopFilter from "../components/kartSearch_components/DesktopFilter";
var { searchClient } = require("../components/kartSearch_components/search-client.js");

if (process.browser) {
  var baseUrl = `${window.location.protocol}//${window.location.host}`;
  
  require('aframe')
}
export default {
  name: "SearchPage",
  components: { Products, DesktopFilter },
  props: ["isSearchPage"],
  watch: {
    $route(to) {
      // react to route changes...
      if (this.isOpen) document.querySelector("body").classList.add("searchkart");
      if (this.searchQuery !== to.query.q) {
        this.searchQuery = to.query.q;
        this.updateQuery();
      }
    },
  },
  mounted() {
    /*eslint-disable */
    let url = window.location.href;
    try {
      window.addEventListener("scroll", this.handleScroll);
      window.onpopstate = async (e) => {
        let res = this.um.parseUrl(location.search);
        let q = this.$route.query.q;
        if (q !== null && q !== undefined && q == "") {
          this.searchQuery = q;
          this.pushQuery();
        }

        // add filters
        this.um.clear();
        let urlFilter = res.filters;
        if (
          urlFilter !== null &&
          urlFilter !== undefined &&
          JSON.stringify(urlFilter) !== "{}"
        ) {
          this.emptyPushedFilters();
          let fld = Object.keys(urlFilter);
          this.filters.forEach((o) => {
            fld.forEach((f) => {
              if (o.title === f) {
                if (o.field !== "discounted_price") {
                  o.selected = urlFilter[f].map((x) => {
                    return decodeURIComponent(
                      x.replace(/%(?![0-9][0-9a-fA-F]+)/g, "%25")
                    );
                  });
                } else if (o.field === "discounted_price") {
                  urlFilter[f].forEach((x) => {
                    o.selected.push(x.replace(/ /g, "").split("-"));
                  });
                }
              }
            });
          });
        } else {
          this.emptyPushedFilters();
        }
        // add sort
        let sort = res.sort;
        if (sort) {
          this.sortLabel = this.sorts.find((x) => x.field === sort).label;
        } else {
          this.sortLabel = "Relevance";
        }

        await this.searchProducts(0);
        // }
      };
      if (url.includes("/search")) {
        this.pageReload = true;
        document.querySelector("body").classList.add("searchkart");
        this.isMainPage = true;
        this.isSearchPage = true;
        this.isOpen = true;

        if (process.env.NODE_ENV === "development") {
          url = url.replace("#/", "");
        }
        let res = this.um.parseUrl(url);
        // add query
        let q = res.query;
        if (q) {
          this.searchQuery = q;
          document.title = this.searchQuery;
          setTimeout(function () {
            document.querySelector("input[name='st']").value = q;
          }, 10);

          this.pushQuery();
        }

        // add filters
        let urlFilter = res.filters;
        if (
          urlFilter !== null &&
          urlFilter !== undefined &&
          JSON.stringify(urlFilter) !== "{}"
        ) {
          let fields = Object.keys(urlFilter);
          this.filters.forEach((o) => {
            fields.forEach((f) => {
              if (o.title === f) {
                if (o.field !== "discounted_price") {
                  o.selected = urlFilter[f].map((x) => {
                    return decodeURIComponent(
                      x.replace(/%(?![0-9][0-9a-fA-F]+)/g, "%25")
                    );
                  });
                } else if (o.field === "discounted_price") {
                  for (let val of urlFilter[f]) {
                    o.selected.push(val.replace(/ /g, "").split("-"));
                  }
                }
              }
            });
          });
          this.pushFilter();
        }
        // add sort
        let sort = res.sort;
        if (sort) {
          this.sortLabel = this.sorts.find((x) => x.field === sort).label;
          this.sorting(this.sortLabel);
        }
        this.searchProducts(0);
        this.jumpToTop();
      }
      window.addEventListener("click", this.clickHandler);
    } catch (e) {
      console.error(`searchkart Error: `, e.message);
    }
  },
  methods: {
    clickHandler: function (e) {
      if (this.showMobileSort) {
        if (
          document.querySelector(".st-sorting-wrapper").contains(e.target) ||
          document.querySelector(".sort_h").contains(e.target)
        ) {
          // Clicked in box
          return;
        } else {
          this.showMobileSort = false;
          // Clicked outside the box
        }
      }
    },
    pushQuery: function () {
      let res = this.um.withQuery(this.searchQuery);
    },
    jumpToTop() {
      window.scroll({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    },
    pushSort: function () {
      let res = this.um.withSort(this.sortField);
      let stateObj = res.currentUrl;
      history.pushState(stateObj, "sort", stateObj);
      // if(this.filterCount > 0) this.pushFilter();
    },
    updateQuery: async function () {
      if (this.searchQuery) {
        if (this.searchQuery.trim().length > 0) {
          this.$emit("query-changed", this.searchQuery.trim());
          document.title = this.searchQuery;
          this.onFocusScroll = window.scrollY;

          document.querySelector("body").classList.add("searchkart");
          // }
          this.emptyPushedFilters();
          this.sortLabel = "Relevance";
          this.sorts.forEach((x) => {
            x.active = false;
          });
          this.sorts[0].active = true;
          this.um.clearSort();
          await this.searchProducts(0);
          this.pushQuery();
        }
      } else {
        this.clearQuery();
      }
      this.jumpToTop();
    },
    emptyPushedFilters: function () {
      this.filters.forEach((f) => {
        f.selected = [];
      });
      this.um.clear();
    },
    clearQuery: function () {
      // if(this.isMainPage === false) {
      this.response = [];
      this.isOpen = false;
      this.emptyPushedFilters();
      this.filterCount = 0;
      this.sortLabel = "Relevance";
      this.sorts.forEach((x) => {
        x.active = false;
      });
      this.sorts[0].active = true;
      this.response.length = 0;
      this.loader = true;
      this.um.clear();
      this.jumpToTop();
      this.um.clearSort();
    },
    searchProducts: async function (offset) {
      try {
        this.createSearchTapRequest(offset);
        this.isOpen = true;
        this.errorEncountered = false;
        this.currOffset = offset;
        let appId = "Jca1Ai4YpDiwtv5m7zouZEcGNWHuBPESSwgsNIwe";
        searchClient.searchRequest.query = this.searchQuery;
        searchClient.searchRequest.collection = "5sTiabfXmtzbWWHssLdKiBikbhmkax";
        console.log("searchClient.searchRequest)==", searchClient.searchRequest);
        let requestPayload = JSON.stringify(searchClient.searchRequest);

        var params = searchClient.searchRequest;
        let result = this.serialize(params);
        let splitResult = result.slice(0, -1);
        const options = {
          headers: { "Content-Type": "application/json", Accept: "application/json" },
        };

        let that = this;
        axios
          .get(`https://ai.kartmax.in/api/${appId}/search-get/v1?${splitResult}`, options)
          .then((res) => {
            var response = res.data;
            this.totalHits = parseInt(response.totalHits);
            console.log(" this.totalHits  this.totalHits ", this.totalHits )
            this.loader = false;

            if (offset === 0) {
              this.scrollVal = 0;
              this.results = [];
              let list = document.getElementsByClassName("filter-list-desktop");
              let desktop_filter = document.querySelector(".sidebar__inner");
              let mobile_list = document.querySelector(
                "#searchFilterMobile .filterValues"
              );
              let size_list = document.querySelectorAll(".st-sizes");
              try {
                if (size_list) {
                  for (let i = 0; i < size_list.length; i++) {
                    size_list[i].scroll({
                      top: 0,
                      left: 0,
                      behavior: "smooth",
                    });
                  }
                }
                if (list) {
                  for (let i = 0; i < list.length; i++) {
                    list[i].scroll({
                      top: 0,
                      left: 0,
                      behavior: "smooth",
                    });
                  }
                }
                if (desktop_filter)
                  desktop_filter.scroll({
                    top: 0,
                    left: 0,
                    behavior: "smooth",
                  });
                if (mobile_list)
                  mobile_list.scroll({
                    top: 0,
                    left: 0,
                    behavior: "smooth",
                  });
              } catch (e) {
                console.error(e);
              }
              this.response = response.results;
              if (window.scrollY > 250) {
                setTimeout(() => {
                  this.jumpToTop();
                }, 200);
                setTimeout(() => {
                  this.onFocusScroll = window.scrollY;
                }, 500);
              }
            } else {
              this.response = this.response.concat(response.results);
            }

            this.resultsEnd =
              this.response.length > 0 && this.response.length === this.totalHits;
            this.filters
              .filter((x) => !x.isStatic)
              .forEach((f) => {
                if (f.type !== "singleStatic") {
                  f.values.length = 0;

                  let textFacetValues = response.textFacets[f.field];
                  if (
                    textFacetValues !== undefined &&
                    textFacetValues !== null &&
                    textFacetValues.length > 0
                  ) {
                    textFacetValues.forEach((v) => {
                      f.values.push({
                        name: v.label,
                        count: v.value,
                      });
                    });
                    f.values.sort(function (a, b) {
                      if (a.name < b.name) return -1;
                      else if (a.name > b.name) return 1;
                      else return 0;
                    });
                    if (f.title === "Size") {
                      function findAndPrepend(input) {
                        let val = f.values.find((x) => x.name === input);
                        if (val !== undefined) {
                          f.values.splice(f.values.indexOf(val), 1);
                          f.values.push(val);
                        }
                      }

                      findAndPrepend("XS");
                      findAndPrepend("S");
                      findAndPrepend("M");
                      findAndPrepend("L");
                      findAndPrepend("XL");
                      findAndPrepend("XXL");
                      // findAndPrepend('300ml');
                      // findAndPrepend('400ml');
                      // findAndPrepend('500ml');
                    }
                  }

                  let numericFacetValues = response.numericFacets[f.field];
                  if (
                    numericFacetValues !== undefined &&
                    numericFacetValues !== null &&
                    numericFacetValues.length > 0
                  ) {
                    numericFacetValues.forEach((v) => {
                      if (v.count > 0) {
                        f.values.push({
                          min: v.min.toString(),
                          max: v.max.toString(),
                          count: v.count,
                        });
                      }
                    });
                  }
                }
              });
          });
      } catch (e) {
        console.log(e);
        this.errorEncountered = true;
        this.loader = false;
      }
    },
    clearFilters: function (field) {
      // let filterNumber = this.filterCount;
      if (field !== undefined) {
        this.filters
          .filter((x) => x.field === field)
          .forEach((x) => {
            x.selected = [];
          });
        this.pushFilter(field);
      } else {
        this.filters.forEach((f) => {
          f.selected = [];
        });
        this.filterCount = 0;
        this.um.clear();
        let stateObj = this.um.getCurrentUrl();
        history.pushState(stateObj, "filter", stateObj);
      }
      this.searchProducts(0);
    },

    createSearchTapRequest(offset) {
      if (this.searchQuery) {
        this.filterCount = 0;
        this.filters.forEach((f) => {
          if (f.field != "" && f.selected.length == 0) {
            delete searchClient.searchRequest.textFacetFilters[f.field];
            delete searchClient.searchRequest.numericFacetFilters[f.field];
          }
          if (f.field !== "discounted_price" && f.selected.length > 0) {
            let a = searchClient.textFacetFilters(f.field, f.selected);
            this.filterCount += f.selected.length;
          } else if (f.field === "discounted_price" && f.selected.length > 0) {
            f.selected.forEach((s) => {
              searchClient.numericFacetFilters(f.field, s[0], s[1]);
            });
            this.filterCount += f.selected.length;
          }
        });
        if (this.resultsFilter.trim().length > 0) {
          searchClient.filter(this.resultsFilter);
          if (
            this.searchQuery.toLocaleLowerCase().includes("shir") &&
            !(
              this.searchQuery.toLocaleLowerCase().includes("t-shir") ||
              this.searchQuery.toLocaleLowerCase().includes("tshir") ||
              this.searchQuery.toLocaleLowerCase().includes("t shir")
            )
          )
            searchClient.filter(
              this.resultsFilter +
                ' AND NOT name="T Shirt" AND NOT name="T-Shirt" AND NOT name="T-Shirts" AND NOT name="TShirt"  AND NOT (_category="T Shirts" OR _category="T-Shirts")'
            );
          else if (
            this.searchQuery.toLocaleLowerCase().includes("t-shir") ||
            this.searchQuery.toLocaleLowerCase().includes("tshir") ||
            this.searchQuery.toLocaleLowerCase().includes("t shir") ||
            this.searchQuery.toLocaleLowerCase().includes("t shirts") ||
            this.searchQuery.toLocaleLowerCase().includes("t-shirts") ||
            this.searchQuery.toLocaleLowerCase().includes("tshirts")
          )
            searchClient.filter(
              this.resultsFilter +
                ' OR name="T Shirt" OR name="T-Shirt" OR name="T-Shirts" OR name="TShirt"'
            );
          else searchClient.filter(this.resultsFilter);
        }
        if (this.sortField !== "") searchClient.sort(this.sortField);
        searchClient
          .fields(
            "url_key",
            "gallery",
            "discount_percentage",
            "brand",
            "name",
            "price",
            "discounted_price",
            "image",
            "url",
            "_size_search",
            "color_options"
          )
          .skip(offset)
          .count(this.pageSize)
          .textFacets(
            "_category",
            "_size_search",
            "discount_filter",
            "brand",
            "occasion",
            "gender",
            "colour",
            "sole_material",
            "upper_material",
            "heel_type",
            "linning_material",
            "hsn_code",
            "style"
          )
          .facetCount(99)
          .numericFacets("discounted_price", [
            {
              min: 0,
              max: 1000,
              minInclusive: true, //default true
              maxInclusive: true, //default false
            },
            {
              min: 1001,
              max: 1500,
              minInclusive: true, //default true
              maxInclusive: true, //default false
            },
            {
              min: 1501,
              max: 2000,
              minInclusive: true, //default true
              maxInclusive: true, //default false
            },
            {
              min: 2001,
              max: 3000,
              minInclusive: true, //default true
              maxInclusive: true, //default false
            },
            {
              min: 3001,
              max: 4000,
              minInclusive: true, //default true
              maxInclusive: true, //default false
            },
            {
              min: 4001,
              max: 5000,
              minInclusive: true, //default true
              maxInclusive: true, //default false
            },
            {
              min: 5001,
              max: 6000,
              minInclusive: true, //default true
              maxInclusive: true, //default false
            },
            {
              min: 6001,
              max: 7000,
              minInclusive: true, //default true
              maxInclusive: true, //default false
            },
            {
              min: 7001,
              max: 10000000,
              minInclusive: true, //default true
              maxInclusive: true, //default false
            },
          ]);
      }
    },
    loadMore: function (offset) {
      if (this.isOpen) {
        this.searchProducts(offset);
      }
    },
    handleScroll: function () {
      this.backToTop = window.scrollY > 250;
      if (window.scrollY > 400 + this.scrollVal) {
        if (this.totalHits > this.currOffset + this.pageSize) {
          this.loadMore(this.currOffset + this.pageSize);
        }
        this.scrollVal = window.scrollY;
      }
      if (window.scrollY > this.onFocusScroll + 100 && this.isDeviceMobile) {
        document.querySelector("input[name='st']").blur();
        this.onFocusScroll = window.scrollY;
      }

      if (this.isDeviceMobile) {
        try {
          let header = document.querySelector(".header");
          let searchModal = document.getElementById("searchModalContainer");
          let footer = 100;
          if (
            window.scrollY > header.offsetHeight &&
            window.scrollY < searchModal.offsetHeight - header.offsetHeight - 100
          )
            document.getElementById("STbar").classList.add("sticky");
          else document.getElementById("STbar").classList.remove("sticky");
        } catch (e) {
          console.log(e);
        }
      }
    },
    pushFilter: function (field) {
      let selectedFilter = [];

      //to append filter
      if (field === undefined) {
        selectedFilter = this.filters.filter((x) => x.selected.length > 0);
      }
      //to clear filter
      else {
        selectedFilter = this.filters.filter(
          (x) => x.selected.length > 0 && x.field !== field
        );
      }

      this.um.clear();
      let res;

      let stateObj = "";

      if (selectedFilter.length > 0) {
        selectedFilter.forEach((f) => {
          if (f.field === "discounted_price") {
            res = this.um.withNumericFilters(f.title, f.selected);
          } else if (f.field !== "discounted_price") {
            res = this.um.withFilters(
              f.title,
              f.selected.map((x) => {
                return encodeURIComponent(x.replace(",", "$"));
              })
            );
          }
          stateObj = res.currentUrl;
        });
      } else {
        this.um.clear();
        stateObj = this.um.getCurrentUrl();
      }

      stateObj = stateObj.replace(/%20/g, "+");
      stateObj = stateObj.replace(/%2C/g, ",");
      this.searchProducts(0);
      history.pushState(stateObj, "filter", stateObj);
      // this.pushSort();
    },

    sorting: function (label, flag = true) {
      this.sortLabel = label;
      for (let i = 0; i < this.sorts.length; i++) {
        if (this.sorts[i].label === this.sortLabel) {
          this.sorts[i].active = true;
        } else {
          this.sorts[i].active = false;
        }
      }
      this.jumpToTop();
      if (this.sortLabel !== "Relevance") {
      }
      this.searchProducts(0);
      if (flag) this.pushSort();
      this.showMobileSort = false;
    },
    getField: function (i) {
      let field = "";
      this.filters.forEach((f) => {
        f.selected.forEach((x) => {
          if (x === i) {
            field = f.field;
          }
        });
      });
      return field;
    },
    getType: function (i) {
      let type = "";
      this.filters.forEach((f) => {
        f.selected.forEach((x) => {
          if (x === i) {
            type = f.type;
          }
        });
      });
      return type;
    },
    clearSingleFilter: function (filter_val, field) {
      if (field !== undefined) {
        this.filters
          .filter((x) => x.field === field)
          .forEach((x) => {
            x.selected.splice(x.selected.indexOf(filter_val), 1);
          });
        this.pushFilter(field);
      }
    },
    async applyFilter() {
      this.jumpToTop();
      this.pushFilter();
    },

    productViewed: function (itemName) {
      if (itemName) {
      }
    },
    serialize: function (obj, prefix) {
      var str = [],
        p;
      for (p in obj) {
        if (obj.hasOwnProperty(p)) {
          var k = prefix ? prefix + "[" + p + "]" : p,
            v = obj[p];
          str.push(
            v !== null && typeof v === "object"
              ? this.serialize(v, k)
              : encodeURIComponent(k) + "=" + encodeURIComponent(v)
          );
        }
      }
      return str.join("&");
    },
  },
  filters: {
    truncate: function (text, length) {
      const clamp = "...";
      length = length || 30;
      if (text.length <= length) return text;
      let tcText = text.slice(0, length - clamp.length);
      return tcText + clamp;
    },
  },
  computed: {
    selectedFilters: function () {
      let selected = [];
      for (let i = 0; i < this.filters.length; i++) {
        this.filters[i].selected.forEach((x) => {
          selected.push(x);
        });
      }
      return selected;
    },
    getHomePageUrl: function () {
      return baseUrl;
    },
    topFilter: function () {
      return this.filters.find((x) => x.onTop);
    },
    isDeviceMobile: function () {
      if (process.browser) {
      return window.matchMedia("only screen and (max-width: 834px)").matches;
      }
    },
    isDeviceIpad: function () {
      if (process.browser) {
      return window.matchMedia("only screen and (max-width: 767px)").matches;
      }
    },
    sortField: function () {
      
      return this.sorts.find((x) => x.label === this.sortLabel).field;
    },
    mainDivId: function () {
      if (this.isSearchPage) return "search-content";
      // if(this.isCategoryPage) return 'category-content';
    },
  },
  data() {
    return {
      selectedField: "gender",
      currSymbol: "Rs.",
      sortMobileDisplay: false,
      htmlContent: "",
      onFocusScroll: 0,
      activeDiscount: undefined,
      activeSize: undefined,
      activeFlavor: undefined,
      activeVariant: undefined,
      activeImage: undefined,
      isMainPage: false,
      pageReload: false,
      isVegOnly: false,
      um: new UrlManager(baseUrl),
      // main: document.querySelector("#maincontent"),
      errorEncountered: false,
      loader: true,
      isOpen: false,
      // beforeSearchPage: window.location.href,
      response: [],
      searchQuery: "",
      currOffset: 0,
      pageSize: 12,
      scrollVal: 0,
      totalHits: -1,
      filterCount: 0,
      showMobileSort: false,
      showMobileFilter: false,
      backToTop: false,
      resultsEnd: false,
      resultsFilter: "in_stock = 1 AND status = 1",
      sorts: [
        {
          label: "Relevance",
          field: "",
          active: true,
        },
        {
          label: "Price (Low to High)",
          field: "discounted_price",
          active: false,
        },
        {
          label: "Price (High to Low)",
          field: "-discounted_price",
          active: false,
        },
        {
          label: "Discount",
          field: "-discount_percentage",
          class: "discount",
        },
      ],
      sortLabel: "Relevance",
      filters: [
        {
          title: "Gender",
          field: "gender",
          type: "textFacet",
          isOpen: true,
          values: [],
          selected: [],
          onTop: false,
          isStatic: false,
        },
        {
          title: "Size",
          field: "_size_search",
          type: "textFacet",
          isOpen: true,
          values: [],
          selected: [],
          onTop: false,
          isStatic: false,
        },
        {
          title: "Brand",
          field: "brand",
          type: "textFacet",
          isOpen: true,
          values: [],
          selected: [],
          onTop: false,
          isStatic: false,
        },
        {
          title: "Price",
          field: "discounted_price",
          type: "numericFacet",
          isOpen: true,
          values: [],
          selected: [],
          onTop: false,
          isStatic: false,
        },
        {
          title: "Colors",
          field: "colour",
          type: "textFacet",
          isOpen: true,
          values: [],
          selected: [],
          onTop: false,
          isStatic: false,
        },
        {
          title: "Upper Material",
          field: "upper_material",
          type: "textFacet",
          isOpen: true,
          values: [],
          selected: [],
          onTop: false,
          isStatic: false,
        },
        {
          title: "Style",
          field: "style",
          type: "textFacet",
          isOpen: true,
          values: [],
          selected: [],
          onTop: false,
          isStatic: false,
        },
        {
          title: "Sole Material",
          field: "sole_material",
          type: "textFacet",
          isOpen: true,
          values: [],
          selected: [],
          onTop: false,
          isStatic: false,
        },
        {
          title: "HSN Code",
          field: "hsn_code",
          type: "textFacet",
          isOpen: true,
          values: [],
          selected: [],
          onTop: false,
          isStatic: false,
        },
        {
          title: "Linning Material",
          field: "linning_material",
          type: "textFacet",
          isOpen: true,
          values: [],
          selected: [],
          onTop: false,
          isStatic: false,
        },
        {
          title: "Occasion",
          field: "occasion",
          type: "textFacet",
          isOpen: true,
          values: [],
          selected: [],
          onTop: false,
          isStatic: false,
        },
        {
          title: "Upper Material",
          field: "upper_material",
          type: "textFacet",
          isOpen: true,
          values: [],
          selected: [],
          onTop: false,
          isStatic: false,
        },
        {
          title: "Sole Material",
          field: "sole_material",
          type: "textFacet",
          isOpen: true,
          values: [],
          selected: [],
          onTop: false,
          isStatic: false,
        },
        {
          title: "Heel Type",
          field: "heel_type",
          type: "textFacet",
          isOpen: true,
          values: [],
          selected: [],
          onTop: false,
          isStatic: false,
        },

        {
          title: "Heel Type",
          field: "heel_type",
          type: "textFacet",
          isOpen: true,
          values: [],
          selected: [],
          onTop: false,
          isStatic: false,
        },
        {
          title: "Discount",
          field: "discount_filter",
          type: "textFacet",
          isOpen: true,
          values: [],
          selected: [],
          onTop: false,
          isStatic: false,
        },
        {
          title: "Category",
          field: "_category",
          type: "textFacet",
          isOpen: true,
          values: [],
          selected: [],
          onTop: false,
          isStatic: false,
        },

        /* {
            title: 'Availability',
            field: "includeOutOfStock",
            type: 'singleStatic',
            isOpen: false,
            values: ["Include Out Of Stock"],
            selected: [],
            onTop: false,
        }*/
      ],
    };
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  },
};
</script>

<style scoped></style>
