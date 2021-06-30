<template>
  <div>
    <!-- =====================breadcrum =================== -->
    <div class="page-wraper product-list-page">
      <section class="breadcrum-sec">
        <div class="container">
          <div class="row">
            <div class="col-md-6 col-sm-12 col-12">
              <div
                class="breadcrumb clearfix"
                v-if="list.breadcrumb && list.breadcrumb.length > 0"
              >
                <span
                  v-for="(itemBrd, indexBrd) in list.breadcrumb"
                  :key="indexBrd"
                >
                  <Nuxt-link
                    v-if="
                      indexBrd != 0 && indexBrd != list.breadcrumb.length - 1
                    "
                    :to="`/collections/${itemBrd.url_key}`"
                    >{{ itemBrd.name }}
                  </Nuxt-link>
                  <Nuxt-link v-if="indexBrd == 0" :to="`${itemBrd.url_key}`"
                    >{{ itemBrd.name }}
                  </Nuxt-link>
                  <Nuxt-link
                    v-if="indexBrd == list.breadcrumb.length - 1"
                    :to="`/product/${itemBrd.url_key}`"
                    >{{ itemBrd.name }}
                  </Nuxt-link>
                  <span class="arrow-space"> > </span>
                </span>
              </div>
              <div class="carry-on-lagauge">
                <div
                  class="on-mob-toggle"
                  @click="() => (carryMenu = !carryMenu)"
                  :class="{ carryMenu: carryMenu }"
                >
                  <h4 class="proxima_regular">
                    Carry On Luggage - Travel Rolling Luggage
                  </h4>
                  <p class="proxima_regular travl-light-onmob">
                    Travel light with our collection of carry-on luggage.
                    Perfectly fits in your flight's overhead or under the seat
                    and meets all TSA guidelines. Please review Airline Carry-On
                    Guide for size requirements by carrier.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-sm-6 col-md-6 col-12">
              <div class="compare-div">
                <strong class="proxima_semi-bold">Compare</strong>
                <ul>
                  <li>
                    <div class="tool-tip-box">
                      <div class="pos-relative">
                        <span class="cross-con"
                          ><i class="fa fa-times" aria-hidden="true"></i
                        ></span>
                        <div class="tolltip-left">
                          <img
                            src="~/assets/images/all-pdp/tool-tip-img.jpg"
                            alt
                          />
                        </div>
                        <div class="tolltip-right">
                          <h6 class="proxima_bold">item 1</h6>
                          <p>
                            <a href class="proxima_regular"
                              >International<br />
                              Expandable 4 Wheeled <br />
                              Carry-On</a
                            >
                          </p>
                          <small class="proxima_regular proxima_regular"
                            >Tumi max</small
                          >
                          <a href="#" class="extra-links proxima_regular"
                            >Quick Buy</a
                          >
                          <a href="#" class="extra-links proxima_regular"
                            >Remove</a
                          >
                        </div>
                      </div>
                    </div>
                    <img src="~/assets/images/all-pdp/compare-1.jpg" />
                  </li>
                  <li>
                    <div class="tool-tip-box">
                      <div class="pos-relative">
                        <span class="cross-con"
                          ><i class="fa fa-times" aria-hidden="true"></i
                        ></span>
                        <div class="tolltip-left">
                          <img
                            src="~/assets/images/all-pdp/tool-tip-img.jpg"
                            alt
                          />
                        </div>
                        <div class="tolltip-right">
                          <h6 class="proxima_bold">item 1</h6>
                          <p>
                            <a href class="proxima_regular"
                              >International<br />
                              Expandable 4 Wheeled <br />
                              Carry-On</a
                            >
                          </p>
                          <small class="proxima_regular">Tumi max</small>
                          <a href="#" class="extra-links proxima_regular"
                            >Quick Buy</a
                          >
                          <a href="#" class="extra-links proxima_regular"
                            >Remove</a
                          >
                        </div>
                      </div>
                    </div>
                    <img src="~/assets/images/all-pdp/compare-2.jpg" />
                  </li>
                  <li><img src="~/assets/images/all-pdp/compare-gif.gif" /></li>
                </ul>
                <a href="#" class="cpmpare-link proxima_semi-bold"
                  >Add 2 or 3 items</a
                >
              </div>
            </div>
          </div>
        </div>
      </section>
      <!-- ================================products with fillter ============ -->

      <section class="filtter-nav">
        <div class="container">
          <div class="row mobile-stickey-filter">
            <div class="col-lg-5 col-md-4 col-sm-6 pd-remove pd-mob-L-15 col-6">
              <div class="filtter-btn-div">
                <a
                  href="#"
                  class="show-filter hide-filters proxima_regular filter-h"
                  :class="showFilter ? 'btn-color-chng' : ''"
                >
                  <span
                    class="hide-text-f con-openarrow-right"
                    v-if="showFilter"
                    @click.prevent="() => (showFilter = false)"
                  >
                    <span class="icon-openarrow-right rotate-left"></span> Hide
                    Filter</span
                  >
                  <span
                    class="show-text-f"
                    v-if="!showFilter"
                    @click="() => (showFilter = true)"
                    >Show Filter
                    <span class="icon-openarrow-right filter"></span
                  ></span>
                </a>
              </div>
            </div>
            <div class="col-lg-7 col-md-8 col-sm-6 pr-0 col-6 pading-l-remove">
              <div class="filtter-select-div">
                <span class="totalCount">
                  <span class="totalProducts">{{ calculateResult }}</span>
                  pieces
                </span>
                <div class="option-select">
                  <div class="select-erap">
                    <div class="select-view">
                      <div class="select-custom proxima_regular">
                        {{ sorting.code }}
                      </div>
                      <div class="select-icon-btn">
                        <i class="icon-openarrow-right" aria-hidden="true"></i>
                      </div>
                    </div>
                  </div>
                  <ul class="custon-select-list">
                    <li
                      v-for="(sort, sortIndex) in list.sort"
                      @click="sortProduct(sort)"
                      :key="sortIndex"
                    >
                      <span class="proxima_regular">{{ sort.label }}</span>
                    </li>
                  </ul>
                </div>
                <div class="option-select hide-mob">
                  <div class="select-erap">
                    <div class="select-view pieces-view">
                      <div class="select-custom proxima_regular">30 pieces</div>
                      <div class="select-icon-btn">
                        <i class="icon-openarrow-right" aria-hidden="true"></i>
                      </div>
                    </div>
                  </div>
                  <ul class="custon-select-list">
                    <li><span class="proxima_regular">30 pieces</span></li>
                    <li><span class="proxima_regular"> all</span></li>
                  </ul>
                </div>
                <ul class="pagination-ul hide-mob">
                  <li>
                    <a href="#"
                      ><span
                        class="icon tumi-icon-ft-arrow_left_4 color-hover"
                        aria-hidden="true"
                      ></span
                    ></a>
                  </li>
                  <li class="pagination_number"><a href="#">1/2</a></li>
                  <li>
                    <a href="#" class="active"
                      ><span
                        class="icon tumi-icon-ft-arrow_right_4 color-hover"
                        aria-hidden="true"
                      ></span
                    ></a>
                  </li>
                </ul>
              </div>
              <div
                class="mobile-short-by"
                @click="() => (showSort = !showSort)"
                :class="showSort ? 'showSort' : ''"
              >
                <strong class="Proxima_regular">Sort By</strong>
                <ul class="custon-select-list proxima_regular">
                  <li
                    v-for="(sort, sortIndex) in list.sort"
                    @click="sortProduct(sort)"
                    :key="sortIndex"
                  >
                    <span class="proxima_regular">{{ sort.label }}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="row mt-30">
            <div class="product-row">
              <div class="filter-overly-div" v-if="showFilter">
                <div class="filter-product">
                  <h2 class="proxima_semi-bold show-mob">Filter</h2>
                  <div
                    class="filter-create active"
                    v-for="(filter, filterIndex) in list.filters"
                    :key="filterIndex"
                  >
                    <div class="filter-heading">
                      <div
                        class="filter-colapse show-active-filter"
                        :class="
                          activeDropdown === filterIndex ? 'openwithIcon' : ''
                        "
                        @click="activeDropdownToggle(filterIndex)"
                      >
                        <h5 class="proxima_regular">
                          {{ filter.filter_lable }}
                          <span class="delete-select-filter">(1)</span>
                        </h5>
                        <a href class="clear-filter delete-select-filter"
                          >emptyssssssssss</a
                        >
                      </div>
                      <ul
                        class="filter-pd-listing"
                        v-if="activeDropdown === filterIndex"
                      >
                        <li
                          v-for="(item, childIndex) in filter.options"
                          :key="childIndex"
                        >
                          <a
                            @click.prevent="
                              $store.commit('updateFilterArray', { item })
                            "
                            :href="item.value_key"
                            class="proxima_regular"
                          >
                            <label class="checkbox-wrap">
                              <input
                                type="checkbox"
                                :checked="
                                  list.applied_filters.findIndex(
                                    x => x === `${item.code}~${item.value_key}`
                                  ) >= 0
                                "
                              />
                              <span class="checkmark"></span>
                            </label>
                            {{ item.value }}</a
                          >
                        </li>
                      </ul>
                    </div>
                    <div class="clear-filter-buttons">
                      <a @click="removeAllFilters()" class="proxima_regular"
                        >Clear filter</a
                      >
                      <a
                        href="#"
                        class="proxima_regular"
                        v-if="showFilter"
                        @click="() => (showFilter = false)"
                        >close</a
                      >
                    </div>
                  </div>
                </div>
              </div>
              <div
                v-if="list.Product_list.length > 0"
                class="pduct-right-div"
                :class="!showFilter ? 'full-screen-items' : ''"
              >
                <div
                  class="product-div-col"
                  v-for="(singleProd, prodIndex) in list.Product_list"
                  :key="prodIndex"
                >
                  <div class="compare-tag-list">
                    <ul class="cm-list">
                      <li
                        v-show="
                          singleProd.promotional_tags != null &&
                            singleProd.promotional_tags != ''
                        "
                        class="proxima_regular"
                      >
                        {{ singleProd.promotional_tags }}
                      </li>
                      <li class="cm-list-box">
                        <label class="checkbox-wrap proxima_regular"
                          >Comapre &nbsp;<input
                            type="checkbox"
                            class="check-box active"
                          />
                          <span class="checkmark"></span>
                        </label>
                        <div class="wish-list-all-pd">
                          <span
                            class="all-wish-img wishlist_blank"
                            :id="$store.state.cartAjax.wishlist.group"
                            :class="renderWishList(singleProd)"
                            @click.prevent="
                              addRemoveWishList(
                                singleProd,
                                renderWishList(singleProd),
                                prodIndex
                              )
                            "
                          >
                            <span class="all-wish-text proxima_regular"
                              >Wishlist</span
                            >

                            <img
                              src="~assets/images/heart.1b640f1.png"
                              class="empty-wish"
                            />
                            <img
                              src="~assets/images/heart2.png"
                              class="fill-wish"
                            />
                          </span>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <NuxtLink
                    :to="`/product/${singleProd.url_key}`"
                    class="proxima_bold"
                    @click.native="updateRecentView(singleProd, prodIndex)"
                  >
                    <div class="dark-overlay"></div>
                  </NuxtLink>
                  <div class="pd-img-box">
                    <NuxtLink
                      :to="`/product/${singleProd.url_key}`"
                      class="proxima_bold"
                      @click.native="updateRecentView(singleProd, prodIndex)"
                    >
                      <img
                        :src="singleProd.image"
                        :alt="singleProd.name"
                        class="single-img"
                      />
                    </NuxtLink>
                    <div class="pd-slider">
                      <div
                        class="pd-slider-itm"
                        v-if="singleProd.gallery.length > 0"
                      >
                        <VueSlickCarousel v-bind="authenticity">
                          <div
                            v-for="(image, imageIndex) in singleProd.gallery"
                            :key="imageIndex"
                          >
                            <img
                              :src="image.image"
                              :to="`/product/${singleProd.url_key}`"
                            />
                          </div>
                        </VueSlickCarousel>
                      </div>
                    </div>
                  </div>
                  <div class="option-con-wrap">
                    <div class="color-option">
                      <ul class="selct-color">
                        <li
                          v-for="(color,
                          colorIndex) in singleProd.color_variation"
                          :key="colorIndex"
                          :class="[
                            color.color == singleProd.color
                              ? 'border-color-dyn'
                              : ''
                          ]"
                        >
                          <!-- <img src="~/assets/images/all-pdp/color-1.jpg" /> -->
                          <span
                            style="cursor: pointer"
                            :style="
                              getHexColor(
                                color.color,
                                prodIndex,
                                singleProd.color
                              )
                            "
                            @click="
                              updateViaColor(color, colorIndex, prodIndex)
                            "
                          ></span>
                        </li>
                      </ul>
                    </div>
                    <NuxtLink
                      :to="`/product/${singleProd.url_key}`"
                      class="proxima_bold"
                      @click.native="updateRecentView(singleProd, prodIndex)"
                    >
                      <p class="proxima_regular">
                        {{ singleProd.name }}
                      </p>
                      <small class="proxima_regular">{{
                        singleProd.collection
                      }}</small>
                      <span
                        class="proxima_regular"
                        v-if="
                          singleProd.discount != '' && singleProd.discount > 0
                        "
                        >₹{{ singleProd.selling_price | numberWithCommas }}
                        <s style="opacity: 0.5"
                          >₹{{ singleProd.price | numberWithCommas }}</s
                        >
                      </span>
                      <span class="proxima_regular" v-else
                        >₹{{ singleProd.price | numberWithCommas }}</span
                      >
                    </NuxtLink>
                    <div class="w-100 btn-box">
                      <NuxtLink
                        :to="`/product/${singleProd.url_key}`"
                        class="quick-view-link"
                        aria-label="Quick Buy"
                        >Quick Buy</NuxtLink
                      >
                    </div>
                  </div>
                </div>

                <!-- loader image -->
                <div
                  class="align-center product_loader"
                  v-show="list.product_loader === true"
                >
                  <img src="~/assets/images/giphy.gif" width="40px" />
                </div>
              </div>
              <div
                class="no_products text-center"
                v-if="
                  list.Product_list.length == 0 &&
                    $store.state.pageLoader == false
                "
              >
                <h1 class="proxima_bold">Sorry !</h1>
                <p class="proxima_regular">{{ list.page_error }}</p>
                <img src="@/assets/images/no_product.png" alt="no-product" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
import { color } from "../../utils/color";
import VueSlickCarousel from "vue-slick-carousel";

export default {
  components: {
    VueSlickCarousel
  },
  data() {
    return {
      activeDropdown: null,
      showFilter: true,
      carryMenu: false,

      sorting: { code: "default", dir: "desc" },
      activeColor: [],
      scrollPosition: "",
      gtm_product_impressions: [],
      showSort: false,

      authenticity: {
        focusOnSelect: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoscroll: false,
        autoplay: false,
        arrows: true,
        centerMode: false,

        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,

              centerMode: false
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              initialSlide: 2,
              centerMode: false,
              centerPadding: "100px"
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              centerMode: false,
              centerPadding: "0px"
            }
          }
        ]
      }
    };
  },

  head() {
    return {
      title: this.list.meta_title,
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.list.meta_description
        },
        {
          hid: "keyword",
          name: "keyword",
          content: this.list.meta_keyword
        },
        {
          hid: "og:title",
          content: this.title,
          property: "og:title"
        },
        {
          hid: "og:description",
          content: this.description,
          property: "og:description"
        },
        {
          hid: "og:url",
          content: this.url,
          property: "og:url"
        }
      ]
    };
  },
  methods: {
    // toggle filter droopdown
    activeDropdownToggle(index) {
      if (this.activeDropdown != index) {
        this.activeDropdown = index;
      } else {
        this.activeDropdown = null;
      }
    },
    // get product lists
    async getProductList(page) {
      let pageNumber;
      page != undefined ? (pageNumber = page) : (pageNumber = 1);
      try {
        await this.$store.commit("prepareState", {
          routeParam: this.$route.params.productCategory,
          pageNo: pageNumber
        });
        let {
          service,
          store,
          pass_url_key,
          page,
          count
        } = this.$store.state.list;

        let form = {};
        form.service = service;
        form.store = store;
        form.url_key = pass_url_key;
        form.page = page;
        form.count = count;
        if (this.$route.query.sort) {
          form.sort_by = this.$route.query.sort;
        }
        if (this.$route.query.sort_dir) {
          form.sort_dir = this.$route.query.sort_dir;
        }
        if (this.$route.query.filter) {
          if (typeof this.$route.query.filter == "string") {
            form.filter = this.$route.query.filter;
          } else {
            form.filter = this.$route.query.filter.join();
          }
        }

        // to disable default loader gif
        if (pageNumber > 1) {
          form.noLoader = true;
        }

        let response = await this.$store.dispatch("pimAjax", {
          method: "post",
          url: `/pimresponse.php`,
          params: form
        });

        if (response) {
          await this.$store.commit("updateState", {
            error: null,
            data: response
          });
          // google tag manager
          this.gtm_product_impressions = [];
          var appliedFilter = "none";
          if (response.query.filter) {
            appliedFilter = response.query.filter;
          }
          // if (response.result.products.length > 0) {
          //   for (let [index, i] of response.result.products.entries()) {
          //     let name = i.name;
          //     let id = i.sku;
          //     let price = i.selling_price;
          //     let category = i.category;
          //     let list = "product List";
          //     let position = index + 1;
          //     this.gtm_product_impressions.push({
          //       name,
          //       id,
          //       price,
          //       category,
          //       list,
          //       position,
          //       appliedFilter,
          //     });
          //   }
          //   this.$gtm.push({
          //     event: "impressionSent",
          //     action: "Product Impression",
          //     label: "Product List page",
          //     category: response.result.products[0].category,
          //     ecommerce: {
          //       currencyCode: "INR",
          //       impressions: this.gtm_product_impressions,
          //     },
          //   });
          // }
          if (process.browser && pageNumber == 1) {
            window.scrollTo({ top: 0, behavior: "smooth" });
          }
        } else {
          throw "there is error from all product page >> no response";
        }
      } catch (error) {
        this.$globalError(`error from all product page >>>> ${error}`);
        if (error.message === "Network Error") {
          this.$store.commit("updateState", {
            error: "Oops there seems to be some Network issue, please try again"
          });
        }
      }
    },

    // toggle filter droopdown
    activeDropdownToggle(index) {
      if (this.activeDropdown != index) {
        this.activeDropdown = index;
      } else {
        this.activeDropdown = null;
      }
    },

    // sort Product list
    sortProduct(event) {
      this.$router.push({
        query: {
          ...this.$route.query,
          sort: event.code,
          sort_dir: event.dir
        }
      });

      this.sorting.code = event.label;
      this.sorting.dir = event.dir;
    },

    async removeAllFilters() {
      this.$router.push(this.$route.path);
    },

    async updatePage() {
      var loader_el = document.querySelector(".product_loader");
      this.scrollPosition = window.scrollY;
      if (loader_el) {
        var loader_position = loader_el.offsetTop;
      }
      if (window.scrollY >= loader_position - 1000) {
        await this.$store.commit("universalListMutate", {
          data: Number(this.list.page) + 1,
          changeState: "page"
        });
        if (
          this.list.page <= this.list.total_page &&
          !this.list.product_loader
        ) {
          this.getProductList(this.list.page);
        }
      }
    },

    getHexColor(namedColor, index, prodColor) {
      if (namedColor != undefined) {
        var colorTemp = namedColor.replace(/\s/g, "_").toLowerCase();
        return color[colorTemp];
      }
    },

    // update product via color refrence
    updateViaColor(product, colorIndex, index) {
      this.$store.commit("updateProductColor", {
        product,
        index
      });
    },

    // render wish list class icon
    renderWishList(item) {
      let ProductId = item.id_product;
      let groupId = item.group_id;
      let wishList = this.$store.state.cartAjax.wishlist;

      if (Object.keys(wishList).length != 0) {
        const groupResult = wishList.group
          .split(",")
          .filter(word => word == groupId);
        const productResult = wishList.product
          .split(",")
          .filter(word => word == ProductId);

        if (groupResult.length > 0 && productResult.length > 0) {
          return "wishlist-active";
        } else {
          return "add";
        }
      } else {
        return "add";
      }
    },
    // add and remove to wish list
    async addRemoveWishList(item, data, index) {
      try {
        if (
          this.$store.state.cartAjax.customer_id == "" &&
          this.$store.state.cartAjax.customer_session == ""
        )
          return this.$router.push("/login");
        let form = {
          product_id: item.id_product,
          customer_id: this.$store.state.cartAjax.customer_id,
          customer_session: this.$store.state.cartAjax.customer_session,
          group_id: item.group_id
        };

        if (data === "add") {
          var response = await this.$store.dispatch("cartAjax/actCartAjax", {
            method: "post",
            url: `/wishlist/add-wishlist`,
            token: this.$store.state.cartAjax.customer_token,
            params: form
          });
        } else {
          var response = await this.$store.dispatch("cartAjax/actCartAjax", {
            method: "post",
            url: `/wishlist/remove-wishlist`,
            token: this.$store.state.cartAjax.customer_token,
            params: form
          });
        }

        if (response.success) {
          this.$toast.open(response.message);
          this.$store.commit("cartAjax/updateWishList", {
            payload: response.data
          });

          this.$gtm.push({
            event: [data == "add" ? "addToWishlist" : "removeFromWishlist"],
            category: item.category,
            action: "removeFromWishlist",
            ecommerce: {
              currencyCode: "INR",
              remove: {
                product: [
                  {
                    name: item.name,
                    id: item.sku,
                    price: item.selling_price,
                    category: item.category,
                    position: 1
                  }
                ]
              }
            }
          });
        } else {
          throw "no response from api";
        }
      } catch (error) {
        this.$globalError(`error from add addRemoveWishList >>>> ${error}`);
      }
    },

    updateRecentView(singleProd, prodIndex) {
      let recentV = $cookies.get("coach_recent_views") || "";
      $cookies.set(
        "coach_recent_views",
        recentV.concat(`,${singleProd.sku}`),
        60 * 60 * 24 * 30
      );
      this.gtm_product_click(singleProd, prodIndex);
    },

    gtm_product_click(singleProd, prodIndex) {
      this.$gtm.push({
        event: "Product Click",
        action: "productClick",
        category: singleProd.category,
        label: "Product List page",
        ecommerce: {
          click: {
            actionField: "click",
            product: [
              {
                name: singleProd.name,
                id: singleProd.sku,
                price: singleProd.price,
                category: singleProd.category,
                position: prodIndex
              }
            ]
          }
        }
      });
    },

    // scroll to top
    scrollToTop() {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  },

  computed: {
    calculateResult() {
      if (this.list.Product_list.length < 12) {
        return this.list.Product_list.length;
      } else {
      }
      return this.list.total_page * 12;
    },
    ...mapState(["list"]),
    // render seo tags
    title() {
      if (this.list.meta_title != "") return this.list.meta_title;
      return "TUMI ALL PRODUCT";
    },
    description() {
      if (this.list.meta_description !== "") return this.list.meta_description;
      return "TUMI";
    },
    url() {
      return this.$store.state.BASE_URL + this.$route.fullPath;
    }
  },

  async fetch() {
    try {
      this.showFilter = !this.$device.isMobile;
      // fetching products from the backend
      await this.getProductList();
    } catch (error) {
      this.$globalError(`error from the all product page ${error}`);
    }
  },

  watch: {
    "$route.query": function() {
      this.getProductList();
    }

    // "$store.state.list.sortingData": {
    //   deep: true,
    //   handler: function () {
    //     console.log('this.list.sortingData', this.list.sortingData)
    //     this.sorting.code = this.list.sortingData.label;
    //     this.sorting.dir = this.list.sortingData.dir;
    //   },
    // },
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.updatePage);
  },
  mounted() {
    // add window event listner for lazy loading products
    window.addEventListener("scroll", this.updatePage);
  }
};
</script>

<style scoped>
.border-color {
  border: solid;
  border-radius: 50%;
}
.border-color-dyn {
  border: 2px solid #000 !important;
}
.no_products {
  width: 100%;
}
.align-center {
  align-items: center;
  text-align: center;
  width: 100%;
}
</style>
