<template>
  <div>
    <LazyHydrate when-visible>
      <section class="hero-area" v-if="bannerData.length > 0">
        <div class="herocrousal">
          <VueSlickCarousel v-bind="settings">
            <div v-for="(item, index) in bannerData" :key="index">
              <img
                :src="item.desktop_image"
                alt="desktopImage"
                class="hide-mob w-100"
              />
              <img
                :src="item.mobile_image"
                alt="mobileImage"
                class="show-mob w-100"
              />
              <div v-html="item.description"></div>
            </div>
          </VueSlickCarousel>
        </div>
      </section>
    </LazyHydrate>

    <!-- ============================ SHOP BY CATEGORY =============== -->
    <LazyHydrate ssr-only>
      <div v-if="Object.keys(homePageData).length != 0">
        <span v-html="homePageData.content"></span>
      </div>
    </LazyHydrate>

    <LazyHydrate when-visible>
      <section class="explore-sec">
        <h4 class="text-center proxima_regular">EXPLORE #TUMIHK</h4>
        <div class="explore">
          <VueSlickCarousel v-bind="instaSettings">
            <div
              v-for="(instaItems, instaIndex) in 10"
              :key="instaIndex"
              class="blog-cover"
            >
              <img src="~/assets/images/explore-2.jpg" alt="explore-1" />
              <ul class="blog-icon">
                <li><a href="#" class="proxima_regular">jamie.xia</a></li>
                <li>
                  <a href="#"><img src="~/assets/images/instagram.png" /></a>
                </li>
              </ul>
            </div>
          </VueSlickCarousel>
        </div>
      </section>
    </LazyHydrate>
    <LazyHydrate when-visible>
      <div v-html="homePageData.content_1"></div>
    </LazyHydrate>

    <LazyHydrate when-visible>
      <section class="recomnded-section">
        <div class="container">
          <h2 class="proxima_regular">RECOMMENDATIONS FOR YOU</h2>
          <div class="recomnded-wrap">
            <VueSlickCarousel v-bind="recomndedSetting">
              <div
                class="re-com-item"
                v-for="(recItem, recIndex) in 10"
                :key="recIndex"
              >
                <img src="~assets/images/recomded.png" />
                <h3 class="proxima_bold">Norman back pack</h3>
                <p class="proxima_regular">All bro Brands</p>
                <small class="proxima_regular">@ abc</small>
              </div>
            </VueSlickCarousel>
          </div>
        </div>
      </section>
    </LazyHydrate>
  </div>
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";
import LazyHydrate from "vue-lazy-hydration";

import { mapState } from "vuex";

export default {
  components: {
    VueSlickCarousel,
    LazyHydrate,
  },
  data() {
    return {
      settings: {
        infinite: true,
        speed: 500,
        arrows: true,
        centerMode: false,
        autoplay: false,
        autoplaySpeed: 2000,
        dots: true,
      },
      instaSettings: {
        focusOnSelect: true,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoscroll: true,
        autoplay: true,
        arrows: true,
        centerMode: false,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              centerPadding: "150px",
              centerMode: false,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 2,
              initialSlide: 2,
              centerMode: false,
              centerPadding: "100px",
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              centerMode: false,
              centerPadding: "0px",
            },
          },
        ],
      },
      recomndedSetting: {
        centerMode: true,
        centerPadding: "0px",
        arrows: true,
        slidesToShow: 7,
        autoplay: false,
        slidesToScroll: 1,
        speed: 1500,
        focusOnSelect: true,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              arrows: true,
              centerMode: true,
              centerPadding: "40px",
              slidesToShow: 3,
            },
          },
          {
            breakpoint: 480,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: "20px",
              slidesToShow: 2,
            },
          },
        ],
      },
      videoSetting: {
        focusOnSelect: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 3,
        autoscroll: true,
        autoplay: false,
        arrows: true,
        centerMode: true,
      },
    };
  },

  // head() {
  //   return {
  //     title: this.homePageData.meta_title,
  //     meta: [
  //       {
  //         hid: this.homePageData.meta_description,
  //         name: this.homePageData.meta_description,
  //         content: this.homePageData.meta_description,
  //       },
  //       {
  //         hid: "og:title",
  //         content: this.title,
  //         property: "og:title",
  //       },
  //       {
  //         hid: "og:description",
  //         content: this.description,
  //         property: "og:description",
  //       },
  //       {
  //         hid: "og:url",
  //         content: this.url,
  //         property: "og:url",
  //       },
  //     ],
  //   };
  // },

  computed: {
    ...mapState(["homePageData", "bannerData"]),

    // render seo tags
    title() {
      if (this.homePageData.meta_title != "") {
        return this.homePageData.meta_title;
      }
      return "TUMI ALL PRODUCT";
    },
    description() {
      if (this.homePageData.meta_description !== "") {
        return this.homePageData.meta_description;
      }
      return "TUMI";
    },
    url() {
      return this.$store.state.BASE_URL + this.$route.fullPath;
    },
  },
};
</script>
