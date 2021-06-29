<template>
  <div>
    <section class="hero-area" v-if="bannerData.length > 0">
      <div class="herocrousal">
        <VueSlickCarousel v-bind="settings">
          <!-- <div v-for="(item, index) in bannerData" :key="index">
            <img  :src="item.desktop_image" alt="" class="hide-mob" />
            <img
             :src="item.mobile_image"
              alt=""
              class="show-mob"
            />
            <div v-html="item.description" >
              <div>

              </div>
            </div>
          </div> -->

          <div>
            <img src="~/assets/images/banner1.jpg" alt="" class="hide-mob" />
            <img
              src="~/assets/images/banner-mob-1.jpg"
              alt=""
              class="show-mob"
            />
            <div class="crousal-text">
              <h3 class="proxima_light">PERFORAMANCE WITH PURPOSE</h3>
              <img src="~/assets/images/banner-sub-img.png" alt="" />
              <a href="#" class="btn-fill proxima_regular"
                >Shop The Collection</a
              >
            </div>
          </div>
          <div>
            <img src="~/assets/images/banner2.jpg" alt="" class="hide-mob" />
            <img
              src="~/assets/images/banner-mob-2.jpg"
              alt=""
              class="show-mob"
            />
            <div class="white-text-box">
              <h2 class="proxima_regular">
                EXPLORE THE TUMI <span></span> VIRTUAL EXPERIENCE
              </h2>
              <a href="#" class="text-center learn-more proxima_regular"
                >Learn More</a
              >
              <img
                src="~/assets/images/gif-img.GIF"
                alt=""
                class="gif-img hide-mob"
              />
              <img
                src="~/assets/images/gif-img-mob.GIF"
                alt=""
                class="gif-img show-mob"
              />
            </div>
          </div>
        </VueSlickCarousel>
      </div>
    </section>
    <!-- ============================ SHOP BY CATEGORY =============== -->
    <div v-if="Object.keys(homePageData).length != 0">
      <span v-html="homePageData.content"></span>
    </div>

    <!-- ================================ WATCH THE WORLD OF TUMI on dekshtop ====================== -->
    <!-- <section class="watch-world hide-mob">
      <div class="container">
        <div class="heding-with-line">
          <div class="tm-title__line"></div>
          <h2 class="main-heading proxima_bold">WATCH THE WORLD OF TUMI</h2>
          <div class="tm-title__line"></div>
        </div>
      </div>
      <div class="videos-sec">
        <ul class="video-play-list">
          <li>
            <div class="pos-relative">
              <a href="#">
                <img src="~/assets/images/video-1.jpg" alt="" />
                <div class="playicon tm-icon__play">
                  <i class=" " aria-hidden="true"
                    ><img src="~/assets/images/play-icon.png"
                  /></i>
                </div>
              </a>
            </div>
            <h4 class="text-red">
              <a href="#" class="text-red proxima_regular"
                >19 DEGREE ALUMINUM
              </a>
            </h4>
            <h3 id="video1SubTitle_TXT" class="tm-h3">
              <a href="#" class="proxima_regular">An Evolution In Travel</a>
            </h3>
            <a href="" class="button-link proxima_bold">Explore more</a>
          </li>
          <li>
            <div class="pos-relative">
              <a href="#">
                <img src="~/assets/images/video-2.jpg" alt="" />
                <div class="playicon tm-icon__play">
                  <i class=" " aria-hidden="true"
                    ><img src="~/assets/images/play-icon.png"
                  /></i>
                </div>
              </a>
            </div>
            <h4 class="text-red">
              <a href="#" class="text-red proxima_regular"
                >TUMI | McLaren Collection</a
              >
            </h4>
            <h3 id="" class="tm-h3">
              <a href="#" class="proxima_regular">PERFORAMANCE WITH PURPOSE</a>
            </h3>
            <a href="" class="button-link proxima_bold">Explore more</a>
          </li>
          <li>
            <div class="pos-relative">
              <a href="#">
                <img src="~/assets/images/video-3.jpg" alt="" />
                <div class="playicon tm-icon__play">
                  <i class=" " aria-hidden="true"
                    ><img src="~/assets/images/play-icon.png"
                  /></i>
                </div>
              </a>
            </div>
            <h4 class="text-red">
              <a href="#" class="text-red proxima_regular">SS2021 Newness</a>
            </h4>
            <h3 id="" class="tm-h3">
              <a href="#" class="proxima_regular"
                >Daniel Henney x Spring 2021 Newness</a
              >
            </h3>
            <a href="" class="button-link proxima_bold">Explore more</a>
          </li>
        </ul>
      </div>
    </section> -->
    <!-- ================================ WATCH THE WORLD OF TUMI show on mobile ====================== -->
    <!-- <section class="watch-world watch-world-mobile show-mob">
      <div class="container">
        <div class="heding-with-line">
          <div class="tm-title__line"></div>
          <h2 class="main-heading proxima_bold">WATCH THE WORLD OF TUMI</h2>
          <div class="tm-title__line"></div>
        </div>

     <div class="watch-mobile video-play-list visual-filters-container">

             <div  class="category-filter">
              <div class="pos-relative">
                <div>
                  <a href="#">
                    <img src="~/assets/images/video-1.jpg" alt="" />
                    <div class="playicon tm-icon__play">
                      <i class=" " aria-hidden="true"
                        ><img src="~/assets/images/play-icon.png"
                      /></i>
                    </div>
                  </a>
                </div>
                <h4 class="text-red">
                  <a href="#" class="text-red proxima_regular"
                    >19 DEGREE ALUMINUM
                  </a>
                </h4>
                <h3 id="video1SubTitle_TXT" class="tm-h3">
                  <a href="#" class="proxima_regular performce-txt"
                    >PERFORAMANCE WITH PURPOSE</a
                  >
                </h3>
                <a href="" class="button-link proxima_bold">Explore more</a>
              </div>
            </div>
            <div  class="category-filter">
              <div class="pos-relative">
                <div>
                  <a href="#">
                    <img src="~/assets/images/video-2.c7eb9c4.jpg" alt="" />
                    <div class="playicon tm-icon__play">
                      <i class=" " aria-hidden="true"
                        ><img src="~/assets/images/play-icon.png"
                      /></i>
                    </div>
                  </a>
                </div>
                <h4 class="text-red">
                  <a href="#" class="text-red proxima_regular"
                    >TUMI | McLaren Collection
                  </a>
                </h4>
                <h3 id="video1SubTitle_TXT" class="tm-h3">
                  <a href="#" class="proxima_regular performce-txt"
                    >PERFORAMANCE WITH PURPOSE</a
                  >
                </h3>
                <a href="" class="button-link proxima_bold">Explore more</a>
              </div>
            </div>
            <div  class="category-filter">
              <div class="pos-relative">
                <div>
                  <a href="#">
                    <img src="~/assets/images/video-3.894e2ae.jpg" alt="" />
                    <div class="playicon tm-icon__play">
                      <i class=" " aria-hidden="true"
                        ><img src="~/assets/images/play-icon.png"
                      /></i>
                    </div>
                  </a>
                </div>
                <h4 class="text-red">
                  <a href="#" class="text-red proxima_regular"
                    >SS2021 Newness
                  </a>
                </h4>
                <h3 id="video1SubTitle_TXT" class="tm-h3">
                  <a href="#" class="proxima_regular performce-txt"
                    >Daniel Henney X Spring 2021 Newness</a
                  >
                </h3>
                <a href="" class="button-link proxima_bold">Explore more</a>
              </div>
            </div>

        </div>
      </div>
    </section> -->
    <!-- ========================== EXPLORE #TUMIHK ========================= -->
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
                <a href="#"><img src="~/assets/images/instagram.png"/></a>
              </li>
            </ul>
          </div>
        </VueSlickCarousel>
      </div>
    </section>
    <div class="full-page-border"></div>
    <!-- ===================== Explore section strat=========== -->
    <div v-html="homePageData.content_1"></div>
    <!-- ========================== recomnded for you ========================= -->

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
  </div>
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";
import { mapState } from "vuex";

export default {
  components: {
    VueSlickCarousel
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
        dots: true
      },
      instaSettings: {
        focusOnSelect: true,
        infinite: false,
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
              centerMode: false
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 2,
              initialSlide: 2,
              centerMode: false,
              centerPadding: "100px"
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              centerMode: false,
              centerPadding: "0px"
            }
          }
        ]
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
              slidesToShow: 3
            }
          },
          {
            breakpoint: 480,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: "20px",
              slidesToShow: 2
            }
          }
        ]
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
        centerMode: true
      }
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
    }
  }
};
</script>
