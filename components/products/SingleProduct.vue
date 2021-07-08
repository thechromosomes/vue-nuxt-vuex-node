<template>
  <!-- Start Home page main Section -->
  <div>
    <div class="page-wraper product-detail-page">
      <section class="breadcrum-sec">
        <div class="container">
          <div class="row">
            <div class="col-sm-12">
              <div
                class="breadcrumb clearfix"
                v-if="
                  singleProductList.breadcrumb &&
                    singleProductList.breadcrumb.length > 0
                "
              >
                <span
                  v-for="(itemBrd, indexBrd) in singleProductList.breadcrumb"
                  :key="indexBrd"
                >
                  <Nuxt-link
                    v-if="
                      indexBrd != 0 &&
                        indexBrd != singleProductList.breadcrumb.length - 1
                    "
                    :to="`/collections/${itemBrd.url_key}`"
                    >{{ itemBrd.name }}
                  </Nuxt-link>
                  <Nuxt-link v-if="indexBrd == 0" :to="`${itemBrd.url_key}`"
                    >{{ itemBrd.name }}
                  </Nuxt-link>
                  <Nuxt-link
                    v-if="indexBrd == singleProductList.breadcrumb.length - 1"
                    :to="`/product/${itemBrd.url_key}`"
                    >{{ itemBrd.name }}
                  </Nuxt-link>
                  <span class="arrow-space"> > </span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!-- ======================== detail start============ -->
      <section class="oneproduct-show">
        <div class="container">
          <div class="row">
            <div class="col-sm-7">
              <div class="exclusive-ofer-slider">
                <div class="promotional-msg proxima_bold">Exclusive</div>
                <div class="label-arrow-up"></div>
                <div class="slider-thumnil">
                  <div class="thumbnil-div-width">
                    <div class="slider-nav">
                      <div
                        class="slider-nav-itms"
                        :class="[
                          mainThumbImage == thumbItem.image
                            ? 'active-thumbnail'
                            : ''
                        ]"
                        v-for="(thumbItem, thumbIndex) in singleProductList
                          .single_prod_data.gallery"
                        :key="thumbIndex"
                      >
                        <img
                          :src="thumbItem.image"
                          alt="img"
                          :id="thumbIndex"
                          @click.prevent="scrollToImage(thumbItem.image)"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="one-item-crosal">
                    <div class="dark-overlay"></div>
                    <div class="slider-for">
                      <div>
                        <inner-image-zoom :src="mainThumbImage" />
                      </div>
                    </div>
                  </div>
                  <div class="zoom-icon">
                    <span class="icon-zoomplus"></span>
                  </div>
                </div>

                <!-- ============================mobile slider====================== -->
                <div class="mobile-single-pd-crousal">
                  <div
                    v-if="
                      singleProductList.single_prod_data.gallery &&
                        singleProductList.single_prod_data.gallery.length > 0
                    "
                  >
                    <VueSlickCarousel v-bind="mobileSingleslider">
                      <div
                        v-for="(itemSingle, indexSingle) in singleProductList
                          .single_prod_data.gallery"
                        :key="indexSingle"
                      >
                        <div class="one-item-crosal-mob">
                          <div class="slider-for-mob">
                            <div>
                              <img
                                :src="itemSingle.image"
                                :alt="itemSingle.image"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </VueSlickCarousel>
                  </div>
                </div>

                <!-- ============================= end ================== -->
              </div>
            </div>
            <div class="col-sm-5">
              <div class="all-detail-div">
                <h1 class="product-name proxima_regular">
                  {{ singleProductList.single_prod_data.name }}
                </h1>
                <div class="tum-max">
                  <h2><a href="#" class="proxima_bold">TUMI MAX</a></h2>
                  <span
                    ><a href="#" class="proxima_regular"
                      >View the entire series</a
                    ></span
                  >
                </div>
                <h3 class="proxima_regular price-heading">
                  ₹
                  {{
                    singleProductList.single_prod_data.selling_price
                      | numberWithCommas
                  }}
                </h3>
                <div class="stock-status">
                  <span class="in-stok proxima_bold">
                    <span
                      ><i
                        class="fa fa-info-circle"
                        aria-hidden="true"
                      ></i> </span
                    >IN STOCK</span
                  >
                  <span class="hurry proxima_regular"
                    >Hurry, only
                    {{ singleProductList.single_prod_data.quantity }}
                    left!</span
                  >
                </div>
                <div class="quantity-color">
                  <div class="color-s-wrap">
                    <strong class="proxima_bold"
                      >color:
                      <span class="proxima_light">{{
                        singleProductList.single_prod_data.color
                      }}</span></strong
                    >
                    <div class="select-color-div">
                      <ul class="color-mode-slct">
                        <li
                          :class="[
                            $route.params.productDetail == color.url_key
                              ? 'active colo-select-bg'
                              : ''
                          ]"
                          v-for="(color, index) in singleProductList
                            .single_prod_data.color_variation"
                          :key="index"
                        >
                          <NuxtLink :to="color.url_key">
                            <img :src="color.image" :alt="color.image" />
                          </NuxtLink>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div class="quantity">
                    <strong class="proxima_bold"
                      >Quantity:
                      <strong class="proxima_light" style="color: #555">{{
                        addToCartVal
                      }}</strong></strong
                    >

                    <div class="qtyAdjustBox">
                      <a class="minus" @click.prevent="addCartVal('minus')"
                        >-</a
                      >
                      <input
                        v-model.number="addToCartVal"
                        disabled
                        class="itemQty"
                      />
                      <a class="plus" @click.prevent="addCartVal('add')">+</a>
                    </div>
                  </div>
                </div>

                <!-- the comparison side bar -->
                <!-- <ExploreComparison v-if="showExplore" /> -->
                <div class="air-line-div">
                  <!-- <div class="abc-div">
                    <span class="proxima_regular abctxt">ABC</span>
                    <p class="proxima_regular">Free Personalization</p>
                    <small class="proxima_regular"
                      >Available for this product</small
                    >
                    <span
                      class="proxima_regular color-hover add-now"
                      id="add-btn"
                      >add now</span
                    >

                  </div> -->
                  <div class="size-comprison abc-div">
                    <img src="~/assets/images/single-pd/light_desktop.png" />
                    <h3 class="proxima_regular">Size comparison</h3>
                    <small class="proxima_regular"
                      >What can you fit in your TUMI?</small
                    >
                    <a
                      @click.prevent="() => (showExplore = true)"
                      class="proxima_regular color-hover"
                      >Explore</a
                    >
                  </div>
                  <!-- ===================== perazlion=============componet -->
                  <Peresonalization v-if="showPersonlization" />
                  <div class="abc-div">
                    <span class="plane"
                      ><i
                        class="fa fa-plane icon-ft-pdp-airlineguide"
                        aria-hidden="true"
                      ></i
                    ></span>
                    <p class="proxima_regular">Airline Guide</p>
                    <small class="proxima_regular"
                      >Carrier size requirements</small
                    >
                    <span class="proxima_regular color-hover viw-list" @click="() => this.$router.push('/cms/airline-carry-on-guide')"
                      >view list</span
                    >
                  </div>
                </div>

                <span id="stick-cart-temp"></span>
                <div
                  :class="{
                    addtocartsticky: fixedMobileCart && showStickycart
                  }"
                >
                  <a
                    @click.prevent="addToCart()"
                    class="red-button add-cart-button proxima_semi-bold"
                    >add to cart</a
                  >
                </div>
                <div class="info-tab-single">
                  <div
                    class="info-txt"
                    :class="showProductDetail ? 'open-detail' : ' '"
                  >
                    <h3
                      class="proxima_regular"
                      @click="showProductDetail = !showProductDetail"
                    >
                      basic information
                    </h3>
                    <div class="info-colpse" v-if="showProductDetail">
                      <div class="para-con-boder proxima_regular">
                        <ul>
                          <li
                            v-show="
                              singleProductList.single_prod_data.style_code
                            "
                          >
                            Style:
                            {{ singleProductList.single_prod_data.style_code }}
                          </li>
                          <li
                            v-show="
                              singleProductList.single_prod_data.uk_item_code
                            "
                          >
                            Style UK:
                            {{
                              singleProductList.single_prod_data.uk_item_code
                            }}
                          </li>
                          <li
                            v-for="(desc, descKey) in renderDescription"
                            :key="descKey"
                          >
                            <span v-html="desc"></span>
                          </li>
                        </ul>
                      </div>
                      <div class="warnty-return">
                        <a
                          href="#"
                          class="proxima_semi-bold"
                          data-toggle="modal"
                          data-target="#exampleModalLong"
                          >Product information and <br />
                          warranty</a
                        >
                        <a
                          href="#"
                          class="proxima_semi-bold"
                          data-toggle="modal"
                          data-target="#exampleModalLong"
                          >Free returns</a
                        >
                      </div>
                    </div>
                  </div>

                  <!-- features and specs -->
                  <div
                    class="info-txt"
                    :class="showFetSpec ? 'open-detail' : ' '"
                  >
                    <h3
                      class="proxima_regular"
                      @click="showFetSpec = !showFetSpec"
                    >
                      Features and specifications
                    </h3>
                    <div class="info-colpse" v-if="showFetSpec">
                      <div class="para-con-boder">
                        <div class="weight-capcity">
                          <div
                            class="w-cap"
                            v-for="(Itemdetails, indexDet) in singleProductList
                              .single_prod_data.item_detials"
                            :key="indexDet"
                          >
                            <h4 class="proxima_bold feature-heding">
                              {{ indexDet.replaceAll("_", " ") }}
                            </h4>
                            <p class="proxima_regular">
                              {{ Itemdetails }}
                            </p>
                          </div>
                          <div
                            class="w-cap"
                            v-for="(desc2, descKey2) in renderDescription2"
                            :key="descKey2"
                          >
                            <h4 class="proxima_bold feature-heding">
                              {{ descKey2 }}
                            </h4>
                            <p class="proxima_regular">{{ desc2 }}</p>
                          </div>
                          <div class="clearfix"></div>
                          <div class="features-wrap">
                            <div
                              class="w-cap featrures"
                              v-for="(details, i) in singleProductList
                                .single_prod_data.visible_attributes"
                              :key="i"
                            >
                              <template
                                v-if="
                                  details.code != 'external_features' &&
                                    details.code != 'internal_features'
                                "
                              >
                                <h4 class="proxima_bold feature-heding ">
                                  {{ details.label }}
                                </h4>
                                <div class="clearfix"></div>
                                <ul>
                                  <li class="proxima_regular">
                                    {{ details.value.split(",").join("\n") }}
                                  </li>
                                </ul>
                              </template>
                            </div>
                          </div>

                          <div class="interior-exterior">
                            <div
                              v-for="(details, i) in singleProductList
                                .single_prod_data.visible_attributes"
                              :key="i"
                              :class="{
                                external_features:
                                  details.code === 'external_features' ||
                                  details.code === 'internal_features'
                              }"
                            >
                              <template
                                v-if="
                                  details.code === 'external_features' ||
                                    details.code === 'internal_features'
                                "
                              >
                                <div class="exterior-feature-item">
                                  <h5>{{ details.label }}</h5>
                                  <ul>
                                    <li class="proxima_regular" v-for="liItem, liIndex in details.value.split('<br>')" :key="liIndex">
                                      {{liItem}}
                                    </li>
                                  </ul>
                                </div>
                              </template>
                            </div>
                          </div>

                          <div class="link-ctnr">
                            <a
                              href="https://www.tumi-hk.com/How_do_we_measure_HK_EN.pdf"
                              target="_Blank"
                            >
                              How do we measure ?</a
                            >
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <!-- prodduct advisory -->
                  <div
                    class="info-txt"
                    :class="showContactDetail ? 'open-detail' : ' '"
                  >
                    <h3
                      class="proxima_regular"
                      @click="showContactDetail = !showContactDetail"
                    >
                      Product Advisory
                    </h3>
                    <div class="info-colpse" v-if="showContactDetail">
                      <div class="para-con-boder">
                        <ul class="advisor-list">
                          <li
                            class="advisy-data"
                            v-for="(prdDetails, ind) in singleProductList
                              .single_prod_data.advisory_detials"
                            :key="ind"
                          >
                            <span class="proxima_regular">{{
                              ind.replaceAll("_", " ").toUpperCase()
                            }}</span>
                            <a class="proxima_regular">{{ prdDetails }}</a>
                          </li>

                          <!-- <li>
                            <div>
                              <span
                                class="msg-icon icon-maywehelp-email"
                                aria-hidden="true"
                              >
                              </span>
                            </div>
                            <span class="proxima_regular">Email us</span>
                            <a
                              href="mailto:service.hk.tumi@tumi.com"
                              class="proxima_regular"
                              >service.hk.tumi@tumi.com</a
                            >
                          </li> -->
                          <!-- <li>
                            <div>
                              <span class="msg-icon icon-maywehelp-call"></span>
                            </div>
                            <span class="proxima_regular">Contact us</span>
                            <a href="tel:800-961-974" class="proxima_regular"
                              >800-961-974</a
                            >
                          </li> -->
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!-- ------------------------- TUMI design innovation  ----------------- -->
      <section class="design-inovoation">
        <div class="container">
          <h4 class="proxima_regular">TUMI design innovation</h4>
          <ul class="tumi-bags-fature-list">
            <li class="active" v-for="(icon, iconIndex) in 4" :key="iconIndex">
              <span class="item-icon-img color-hover"
                ><img
                  src="~/assets/images/single-pd/tumiAirGradeAlHandle.jpg"
                  alt=""
              /></span>
            </li>
          </ul>
          <div class="product-tab-dtail">
            <div class="tab-content-det">
              <h3 class="proxima_regular">
                Aircraft Grade Aluminum Extension Handle
              </h3>
              <div class="short-desc">
                <p class="proxima_regular">
                  The tubing of our telescoping handles is made from
                  aircraft-grade aluminum, making them both lightweight and
                  extremely sturdy.
                </p>
                <img
                  src="~/assets/images/single-pd/tumiAirGradeAlHandle.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    <div class="tm-container mob-t-hed">
      <div class="tm-container_1200"></div>
      <div class="tm-pdp-carousel">
        <div class="tm-pdp-recommend-box">
          <div class="tm-title__h">
            <div class="tm-title__line"></div>
            <h3 class="tm-title proxima_bold" id="certonaProcuct1">
              RECENTLY VIEWED
            </h3>
            <div class="tm-title__line"></div>
          </div>
          <ul
            id="tm-pdp-recommend"
            class="tm-pdp-recommend"
            v-if="recent_products && recent_products.length"
          >
            <VueSlickCarousel v-bind="recomndedSetting">
              <li
                v-for="(recItem, recIndex) in recent_products"
                :key="recIndex"
              >
                <Nuxt-link
                  :to="recItem.url_key"
                  @click.native="gtm_product_clickr(recItem, recIndex)"
                >
                  <div class="recomnded-wrap">
                    <div class="re-com-item">
                      <img :src="recItem.image" :alt="recItem.image" />
                      <h3 class="proxima_bold">{{ recItem.name }}</h3>
                      <p class="proxima_regular">{{ recItem.collection }}</p>
                      <small class="proxima_regular"
                        >₹{{ recItem.selling_price }}</small
                      >
                    </div>
                  </div>
                </Nuxt-link>
              </li>
            </VueSlickCarousel>
          </ul>
        </div>
        <div class="tm-pdp-recommend-box">
          <div class="tm-title__h">
            <div class="tm-title__line"></div>
            <h3 class="tm-title proxima_bold" id="certonaProcuct1">
              RECOMMENDATIONS
            </h3>
            <div class="tm-title__line"></div>
          </div>
          <ul
            id="tm-pdp-recommend"
            class="tm-pdp-recommend"
            v-if="
              Object.keys(singleProductList.single_prod_data).length > 0 &&
                singleProductList.single_prod_data.recommended &&
                singleProductList.single_prod_data.recommended.length > 0
            "
          >
            <VueSlickCarousel v-bind="recomndedSetting">
              <li
                v-for="(recItem, recIndex) in singleProductList.single_prod_data
                  .recommended"
                :key="recIndex"
              >
                <Nuxt-link
                  :to="recItem.url_key"
                  @click.native="gtm_product_clickr(recItem, recIndex)"
                >
                  <div class="recomnded-wrap">
                    <div class="re-com-item">
                      <img :src="recItem.image" :alt="recItem.image" />
                      <h3 class="proxima_bold">{{ recItem.name }}</h3>
                      <p class="proxima_regular">{{ recItem.collection }}</p>
                      <small class="proxima_regular"
                        >₹{{ recItem.selling_price }}</small
                      >
                    </div>
                  </div>
                </Nuxt-link>
              </li>
            </VueSlickCarousel>
          </ul>
        </div>
      </div>
    </div>
    <!-- ----------------------------TUMI design innovation end ------------ -->
    <section class="alfa-sec alfa-on-pd">
      <div class="container">
        <div class="row">
          <div class="col-lg-6 col-sm-6 col-6">
            <div class="recom-pd">
              <div class="alfa-content-pdp">
                <a class="anchor-width-pdp">
                  <h3 class="tm-h3 proxima_regular">
                    Explore <br />
                    Alpha 3
                  </h3>
                  <Nuxt-link to="/" class="button-link proxima_bold"
                    >Shop Now</Nuxt-link
                  >
                </a>
                <div class="alfa-img-box-pdp">
                  <div>
                    <img
                      src="https://tmbackend.hostx1.de/cms_images/1621935096alfa-1.jpg"
                      alt="img"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-6 col-sm-6 col-6">
            <div class="recom-pd right-box">
              <div class="alfa-content-pdp">
                <a href="" class="anchor-width-pdp">
                  <h3 class="tm-h3 proxima_regular">
                    Explore <br />
                    Alpha 3
                  </h3>
                  <Nuxt-link to="/" class="button-link proxima_bold"
                    >Shop Now</Nuxt-link
                  >
                </a>
                <div class="alfa-img-box-pdp">
                  <div>
                    <img
                      src="https://tmbackend.hostx1.de/cms_images/1621935112alfa-2.jpg"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <ModalPopUp v-if="showModalPopUp"/>
  </div>
</template>
<script>
import ModalPopUp from "./Modal";
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
import ImageZoom from "./imageZoom";
import ExploreComparison from "./ExploreComparison";
import Peresonalization from "./Peresonalization";
import "vue-inner-image-zoom/lib/vue-inner-image-zoom.css";
import InnerImageZoom from "vue-inner-image-zoom";
import { mapState } from "vuex";

export default {
  components: {
    VueSlickCarousel,
    ImageZoom,
    Peresonalization,
    ExploreComparison,
    ModalPopUp,
    "inner-image-zoom": InnerImageZoom
  },
  data() {
    return {
      showModalPopUp: false,
      fixedMobileCart: false,
      showStickycart: false,
      showPersonlization: false,
      showExplore: false,
      showFetSpec: false,
      showContactDetail: false,
      showFotter: true,
      selectedComboSize: "",
      sizechartOpen: false,
      sizeAlert: false,
      CombosizeAlert: false,
      addToCartVal: 1,
      sizeChartData: {},
      authenticity: {
        focusOnSelect: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoscroll: true,
        autoplay: true,
        arrows: true,
        centerMode: true,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      },
      settings: {
        focusOnSelect: true,
        centerMode: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        touchThreshold: 4,
        autoscroll: true,
        autoplay: true,
        arrows: true,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 4
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2,
              arrows: false
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              arrows: false
            }
          }
        ]
      },

      mobileSingleslider: {
        focusOnSelect: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 3,
        autoscroll: true,
        autoplay: true,
        arrows: false,
        centerMode: true,
        dots: true,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              centerMode: false
            }
          }
        ]
      },
      settings2: {
        focusOnSelect: true,
        centerMode: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        touchThreshold: 4,
        autoscroll: true,
        autoplay: true,
        arrows: true,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 4
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2,
              arrows: false
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              arrows: false
            }
          }
        ]
      },

      PreviewSettings: {
        dots: true,
        infinite: false,
        speed: 500,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true
      },
      recomndedSetting: {
        centerMode: false,
        centerPadding: "0px",
        arrows: false,
        slidesToShow: 3,
        autoplay: true,
        slidesToScroll: 1,
        speed: 1500,

        focusOnSelect: true,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              arrows: false,
              slidesToShow: 2
            }
          }
        ]
      },

      value1: 3.5,
      activeSlide: 0,
      showProductDetail: true,
      showShippingReturs: false,
      showZoomedImage: false,
      scrollToId: "",
      selectedSizeAttr: "",
      pinCode: "",
      deliveryStatus:
        "We're now delivering to all zones except for containment zones",
      deliveryStatusType: "success",
      recent_products: [],
      showRecent: false,
      mainThumbImage: ""
    };
  },

  head() {
    return {
      title: this.singleProductList.single_prod_data.meta_title,
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.singleProductList.single_prod_data.meta_description
        },
        {
          hid: "keyword",
          name: "keyword",
          content: this.singleProductList.single_prod_data.meta_keyword
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
        },
        {
          hid: "og:image",
          content: this.image,
          property: "og:image"
        }
      ]
    };
  },

  methods: {
    toggleZoomImg(id) {
      this.scrollToId = id;
      this.showZoomedImage = !this.showZoomedImage;
      if (this.showZoomedImage) {
        document.body.classList.add("remove-scrollBar");
      } else {
        document.body.classList.remove("remove-scrollBar");
      }
    },

    gtm_product_clickr(singleProd, prodIndex) {
      this.$gtm.push({
        event: "productClick",
        action: "productClick",
        category: singleProd.category,
        label: "Recent product",
        ecommerce: {
          click: {
            actionField: {
              action: "click",
              list: "Recent Product List"
            },
            products: [
              {
                name: singleProd.name,
                id: singleProd.sku,
                price: singleProd.price,
                category: "Recent product",
                position: prodIndex
              }
            ]
          }
        }
      });
    },

    sizecharts() {
      this.sizechartOpen = !this.sizechartOpen;
    },

    addCartVal(cartval) {
      if (Object.keys(this.selectedSizeAttr).length === 0) {
        this.sizeAlert = true;
        return;
      } else {
        this.sizeAlert = false;
        if (
          cartval === "add" &&
          this.addToCartVal < this.selectedSizeAttr.quantity &&
          this.addToCartVal < 5
        ) {
          this.addToCartVal += 1;
        } else if (cartval === "minus") {
          this.addToCartVal -= 1;
          this.addToCartVal === 0 ? (this.addToCartVal = 1) : this.addToCartVal;
        }
      }
    },

    async addToCart() {
      if (Object.keys(this.selectedSizeAttr).length === 0) {
        this.sizeAlert = true;
      } else {
        try {
          var form = {};
          var urlHolder;
          var tokenholder;
          var product_options_json = JSON.stringify({
            size: this.selectedSizeAttr.configrable_atribute_value,
            color: this.singleProductList.single_prod_data.color
          });
          form.product_id = this.selectedSizeAttr.id_product;
          form.product_parent_id = this.singleProductList.single_prod_data.id_product;
          form.product_options = product_options_json;
          form.fynd_size = this.singleProductList.single_prod_data.fynd_size;
          form.fynd_uid = this.singleProductList.single_prod_data.fynd_uid;
          form.name = this.singleProductList.single_prod_data.name;
          form.sku = this.selectedSizeAttr.sku;
          form.master_sku = this.singleProductList.single_prod_data.sku;
          form.price = this.singleProductList.single_prod_data.price;
          form.qty_ordered = this.addToCartVal;
          form.final_price = this.singleProductList.single_prod_data.selling_price;
          form.store = this.$store.state.cartAjax.store;
          if (
            this.$store.state.cartAjax.cart_id != null &&
            this.$store.state.cartAjax.cart_id != ""
          ) {
            form.cart_id = this.$store.state.cartAjax.cart_id;
          }
          if (
            this.$store.state.cartAjax.cart_session != "" &&
            this.$store.state.cartAjax.cart_session != null
          ) {
            form.cart_session = this.$store.state.cartAjax.cart_session;
          }
          if (
            this.$store.state.cartAjax.customer_id != null &&
            this.$store.state.cartAjax.customer_id != "" &&
            this.$store.state.cartAjax.customer_session != "" &&
            this.$store.state.cartAjax.customer_session != null
          ) {
            form.customer_id = this.$store.state.cartAjax.customer_id;
            form.customer_session = this.$store.state.cartAjax.customer_session;
            urlHolder = `/product/add-product`;
            tokenholder = this.$store.state.cartAjax.customer_token;
          } else {
            urlHolder = `/product/new-cart`;
            tokenholder = "";
          }

          let response = await this.$store.dispatch("cartAjax/actCartAjax", {
            method: "post",
            url: urlHolder,
            params: form,
            token: tokenholder
          });
          if (response) {
            this.$store.commit("cartAjax/updateCartDetail", {
              error: null,
              vm: this,
              data: response
            });

            // google tag manager
            if (response.success) {
              this.$gtm.push({
                event: "addToCart",
                category: this.singleProductList.single_prod_data.category,
                action: "addToCart",
                ecommerce: {
                  currencyCode: "INR",
                  add: {
                    product: [
                      {
                        name: this.singleProductList.single_prod_data.name,
                        id: this.singleProductList.single_prod_data.sku,
                        price: this.singleProductList.single_prod_data
                          .selling_price,
                        category: this.singleProductList.single_prod_data
                          .category,
                        variant: this.selectedSizeAttr
                          .configrable_atribute_value,
                        quantity: "1"
                      }
                    ]
                  }
                }
              });
            }
          } else {
            throw "no response from api";
          }
        } catch (error) {
          this.$globalError(`error from addToCart >>>> ${error}`);

          if (error.message === "Network Error") {
            this.$store.commit("updateSingleProdState", {
              error:
                "Oops there seems to be some Network issue, please try again"
            });
          }
        }
      }
    },

    // add combo product to cart

    async addToCartCombo() {
      if (this.selectedComboSize === "") {
        this.CombosizeAlert = true;
        return;
      } else {
        try {
          var form = {};
          var urlHolder;
          var tokenholder;
          var product_options_json = JSON.stringify({
            size: this.selectedComboSize.configrable_atribute_value,
            color: this.singleProductList.single_prod_data.combo_product_data
              .color
          });
          form.product_id = this.selectedComboSize.id_product;
          form.product_parent_id = this.singleProductList.single_prod_data.combo_product_data.id_product;
          form.product_options = product_options_json;
          form.fynd_size = this.singleProductList.single_prod_data.combo_product_data.fynd_size;
          form.fynd_uid = this.singleProductList.single_prod_data.combo_product_data.fynd_uid;
          form.name = this.singleProductList.single_prod_data.combo_product_data.name;
          form.sku = this.selectedComboSize.sku;
          form.master_sku = this.singleProductList.single_prod_data.combo_product_data.sku;
          form.price = this.singleProductList.single_prod_data.combo_product_data.price;
          form.qty_ordered = this.addToCartVal;
          form.final_price = this.singleProductList.single_prod_data.combo_product_data.selling_price;
          form.store = this.$store.state.cartAjax.store;
          if (
            this.$store.state.cartAjax.cart_id != null &&
            this.$store.state.cartAjax.cart_id != ""
          ) {
            form.cart_id = this.$store.state.cartAjax.cart_id;
          }
          if (
            this.$store.state.cartAjax.cart_session != "" &&
            this.$store.state.cartAjax.cart_session != null
          ) {
            form.cart_session = this.$store.state.cartAjax.cart_session;
          }
          if (
            this.$store.state.cartAjax.customer_id != null &&
            this.$store.state.cartAjax.customer_id != "" &&
            this.$store.state.cartAjax.customer_session != "" &&
            this.$store.state.cartAjax.customer_session != null
          ) {
            form.customer_id = this.$store.state.cartAjax.customer_id;
            form.customer_session = this.$store.state.cartAjax.customer_session;
            urlHolder = `/product/add-product`;
            tokenholder = this.$store.state.cartAjax.customer_token;
          } else {
            urlHolder = `/product/new-cart`;
            tokenholder = "";
          }

          let response = await this.$store.dispatch("cartAjax/actCartAjax", {
            method: "post",
            url: urlHolder,
            params: form,
            token: tokenholder
          });
          if (response) {
            this.$store.commit("cartAjax/updateCartDetail", {
              error: null,
              vm: this,
              data: response
            });

            // google tag manager
            if (response.success) {
              this.selectedComboSize = "";
              this.$gtm.push({
                event: "addToCart",
                category: this.singleProductList.single_prod_data.category,
                action: "addToCart",
                ecommerce: {
                  currencyCode: "INR",
                  add: {
                    product: [
                      {
                        name: this.singleProductList.single_prod_data.name,
                        id: this.singleProductList.single_prod_data.sku,
                        price: this.singleProductList.single_prod_data
                          .selling_price,
                        category: this.singleProductList.single_prod_data
                          .category,
                        variant: this.selectedComboSize
                          .configrable_atribute_value,
                        quantity: "1"
                      }
                    ]
                  }
                }
              });
            }
          } else {
            throw "no response from api";
          }
        } catch (error) {
          this.$globalError(`error from addToCart >>>> ${error}`);

          if (error.message === "Network Error") {
            this.$store.commit("updateSingleProdState", {
              error:
                "Oops there seems to be some Network issue, please try again"
            });
          }
        }
      }
    },

    // toogle add to cart function
    toggleAddToCart(behave) {
      if (behave == "size") {
        this.sizeAlert = true;
        return;
      }
      if (behave == "single") {
        this.addToCart();
        return;
      }
      if (behave == "combo") {
        this.addToCartCombo();
        return;
      }
      if (behave == "both") {
        this.addToCart();
        this.addToCartCombo();
      }
    },

    scrollToImage(imageData) {
      this.mainThumbImage = imageData;
    },

    // fetch product deliveryt detail
    async ProductPinCode() {
      if (Object.keys(this.selectedSizeAttr).length === 0) {
        this.sizeAlert = true;
        return;
      }
      if (this.pinCode == "") {
        this.deliveryStatus = "please select valid pin code";
        this.deliveryStatusType = "error";
        return;
      }
      let form = {
        pincode: this.pinCode,
        fynd_uid: this.singleProductList.single_prod_data.fynd_uid,
        fynd_size: this.selectedSizeAttr.configrable_atribute_value
      };
      try {
        let response = await this.$store.dispatch("cartAjax/actCartAjax", {
          method: "post",
          url: `/customer/serviceable`,
          params: form
        });

        if (response) {
          response.message == "validation error"
            ? ((this.deliveryStatus = "please select valid pin code"),
              (this.deliveryStatusType = "error"))
            : (this.deliveryStatus = response.data);
          if (response.success == false || response.message == "Unsuccessful") {
            this.deliveryStatusType = "error";
          }
        } else {
          throw "no response from api";
        }
      } catch (error) {
        this.$globalError(
          `error from single product page (ProductPinCode) >>>> ${error}`
        );
      }
    },

    // get product detail
    async getProductDetail() {
      try {
        this.showFotter = false;
        await this.$store.commit("prepareStateForSingleProd", {
          routeParam: this.$route.params.productDetail
        });
        let { service, store, url_key } = this.$store.state.singleProductList;
        var form = {};
        form.service = service;
        form.store = store;
        form.url_key = url_key;

        if (this.$route.query.filter) {
          form.filter = this.$route.query.filter;
        }
        let response = await this.$store.dispatch("pimAjax", {
          method: "post",
          url: `/pimresponse.php`,
          params: form
        });

        if (response) {
          this.$store.commit("updateSingleProdState", {
            error: null,
            data: response
          });
          if (response.response.success) {
            this.showFotter = true;
            this.$gtm.push({
              event: "ProductDetail",
              action: "Product Detail",
              category: this.singleProductList.single_prod_data.category,
              ecommerce: {
                detail: {
                  products: [
                    {
                      name: this.singleProductList.single_prod_data.name,
                      id: this.singleProductList.single_prod_data.sku,
                      price: this.singleProductList.single_prod_data
                        .selling_price,
                      category: this.singleProductList.single_prod_data.category
                    }
                  ]
                }
              }
            });
          }
        } else {
          throw "no response from api";
        }
      } catch (error) {
        this.$globalError(`error from getProductDetail >>>> ${error}`);
        if (error.message === "Network Error") {
          this.$store.commit("updateSingleProdState", {
            error: "Oops there seems to be some Network issue, please try again"
          });
        }
      }
    },

    hanldeSize(size) {
      if (size.quantity == 0) return;
      this.sizeAlert = false;
      this.selectedSizeAttr = size;
    },
    updateAddToCart() {
      function isInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
          rect.top >= 0 &&
          rect.left >= 0 &&
          rect.bottom <=
            (window.innerHeight || document.documentElement.clientHeight) &&
          rect.right <=
            (window.innerWidth || document.documentElement.clientWidth)
        );
      }
      const box = document.querySelector("#stick-cart-temp");
      if (isInViewport(box)) {
        this.showStickycart = false;
      } else {
        this.showStickycart = true;
      }
    },

    // add and remove to wish list
    async addRemoveWishList(data, index) {
      try {
        if (
          this.$store.state.cartAjax.customer_id == "" &&
          this.$store.state.cartAjax.customer_session == ""
        )
          return this.$router.push("/login");
        let form = {
          product_id: this.singleProductList.single_prod_data.id_product,
          customer_id: this.$store.state.cartAjax.customer_id,
          customer_session: this.$store.state.cartAjax.customer_session,
          group_id: this.singleProductList.single_prod_data.group_id
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
            category: this.singleProductList.single_prod_data.category,
            action: "removeFromWishlist",
            ecommerce: {
              currencyCode: "INR",
              remove: {
                product: [
                  {
                    name: this.singleProductList.single_prod_data.name,
                    id: this.singleProductList.single_prod_data.sku,
                    price: this.singleProductList.single_prod_data
                      .selling_price,
                    category: this.singleProductList.single_prod_data.category,
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

    fetchRecentViews(sku) {
      var form = {};
      form.service = "recent_views";
      form.store = this.$store.state.list.store;
      form.recent_views_products = sku;
      this.$store
        .dispatch("pimAjax", {
          method: "post",
          url: `/pimresponse.php`,
          params: form
        })
        .then(response => {
          this.recent_products = response.result;
        })
        .catch(e => {
          console.log("error form the recent view page >>> ", e);
        });
    }
  },

  async fetch() {
    // to fetch single product detail

    await this.getProductDetail();
    this.fixedMobileCart = this.$device.isMobile;
    // render from single variation
    if (
      this.singleProductList.single_prod_data &&
      this.singleProductList.single_prod_data.variation
    ) {
      var obj = this.singleProductList.single_prod_data.variation;
      this.selectedSizeAttr = obj[Object.keys(obj)[0]];
    }

    // update image
    if (
      this.singleProductList.single_prod_data &&
      this.singleProductList.single_prod_data.gallery &&
      this.singleProductList.single_prod_data.gallery.length > 0
    )
      this.mainThumbImage = this.singleProductList.single_prod_data.gallery[0].image;
  },

  mounted() {
    // get recent views
    if ($cookies.isKey("coach_recent_views")) {
      let recentV = $cookies.get("coach_recent_views") || "";
      this.fetchRecentViews(recentV);
    }
    window.addEventListener("scroll", this.updateAddToCart);
    if (this.singleProductList.single_prod_data.name) {
      this.$gtm.push({
        event: "ProductDetail",
        action: "Product Detail",
        category: this.singleProductList.single_prod_data.category,
        ecommerce: {
          detail: {
            products: [
              {
                name: this.singleProductList.single_prod_data.name,
                id: this.singleProductList.single_prod_data.sku,
                price: this.singleProductList.single_prod_data.selling_price,
                category: this.singleProductList.single_prod_data.category
              }
            ]
          }
        }
      });
    }
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.updateAddToCart);
  },
  computed: {
    ...mapState(["singleProductList"]),
    renderDescription() {
      let { description } = this.singleProductList.single_prod_data;

      let obj = {
        description
      };

      let finaObj = Object.entries(obj).reduce(
        (a, [k, v]) => (v == null ? a : ((a[k] = v), a)),
        {}
      );
      return finaObj;
    },

    renderDescription2() {
      let {
        material,
        color,
        warranty
      } = this.singleProductList.single_prod_data;

      let obj = {
        material,
        color,
        warranty
      };

      let finaObj = Object.entries(obj).reduce(
        (a, [k, v]) => (v == null ? a : ((a[k] = v), a)),
        {}
      );
      return finaObj;
    },

    rating: {
      get() {
        return this.$store.state.singleProductList.average_rating;
      },
      set(value) {
        return;
      }
    },

    // render wish list class icon
    renderWishList() {
      let ProductId = this.singleProductList.single_prod_data.id_product;
      let groupId = this.singleProductList.single_prod_data.group_id;
      let wishList = this.$store.state.cartAjax.wishlist;

      if (wishList && Object.keys(wishList).length != 0) {
        const groupResult = wishList.group
          .split(",")
          .filter(word => word == groupId);
        const productResult = wishList.product
          .split(",")
          .filter(word => word == ProductId);

        if (
          groupResult &&
          groupResult.length > 0 &&
          productResult &&
          productResult.length > 0
        ) {
          return "wishlist-active";
        } else {
          return "add";
        }
      } else {
        return "add";
      }
    },

    // render seo tags
    title() {
      if (this.singleProductList.single_prod_data.meta_title != "")
        return this.singleProductList.single_prod_data.meta_title;
      return "STEVE MADDEN SINGLE PRODUCT";
    },
    description() {
      if (this.singleProductList.single_prod_data.meta_description !== "")
        return this.singleProductList.single_prod_data.meta_description;
      return "STEVE MADDEN";
    },
    url() {
      return this.$store.state.BASE_URL + this.$route.fullPath;
    },
    image() {
      return this.singleProductList.single_prod_data.image;
    }
  },

  watch: {
    "$store.state.cartAjax.cart_page_message": function() {
      if (
        this.$store.state.cartAjax.cart_page_message != "" &&
        this.$store.state.cartAjax.cart_page_message != null
      ) {
        // this.$toast.open(this.$store.state.cartAjax.cart_page_message);
        // this.$store.commit("cartAjax/removePageMessage", {
        //   data: ""
        // });
        this.$store.commit("cartAjax/showHideCart");
      }
    },
    "$store.state.cartAjax.cart_page_erro_page": function() {
      if (
        this.$store.state.cartAjax.cart_page_error_message != "" &&
        this.$store.state.cartAjax.cart_page_error_message != null
      ) {
        this.$toast.error(this.$store.state.cartAjax.cart_page_error_message);
        this.$store.commit("cartAjax/removePageMessage", {
          data: ""
        });
      }
    }
  }
};
</script>

<style scoped>
.disabled-button {
  background: #999;
  color: #fff;
}
.active-class {
  border: 1px solid #000;
  border-radius: 50%;
}
.active-thumbnail {
  border: 1px solid #000;
}

.insta-image {
  height: 250px !important;
  width: 100% !important;
  object-fit: cover !important;
}

.green {
  color: green;
  margin-top: 10px;
}
.red {
  color: red;
  margin-top: 10px;
}
</style>
