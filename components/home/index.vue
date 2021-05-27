<template>
  <div>
    <section class="hero-area">
      <div class="herocrousal">
        <VueSlickCarousel v-bind="settings">
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
    <section class="shop-by-catagery">
      <div class="container-fluid">
        <div class="heding-with-line">
          <div class="tm-title__line"></div>
          <h2 class="main-heading proxima_bold">SHOP BY CATEGORY</h2>
          <div class="tm-title__line"></div>
        </div>
        <div class="cata-inner-row">
          <div class="cata-img-box">
            <img src="~/assets/images/cata-1.jpg" alt="" />
            <p class="proxima_regular">Luggage</p>
          </div>
          <div class="cata-img-box">
            <img src="~/assets/images/cata-2.jpg" alt="" />
            <p class="proxima_regular">Backpacks</p>
          </div>
          <div class="cata-img-box">
            <img src="~/assets/images/cata-3.jpg" alt="" />
            <p class="proxima_regular">Totes</p>
          </div>
          <div class="cata-img-box">
            <img src="~/assets/images/cata-4.jpg" alt="" />
            <p class="proxima_regular">Crossbodies</p>
          </div>
          <div class="cata-img-box">
            <img src="~/assets/images/cata-5.jpg" alt="" />
            <p class="proxima_regular">Accessories</p>
          </div>
          <div class="cata-img-box">
            <img src="~/assets/images/cata-6.jpg" alt="" />
            <p class="proxima_regular">Recycled Capsule</p>
          </div>
        </div>
      </div>
    </section>
    <div class="full-page-border"></div>
    <!-- =======================  Innovative design section ============= -->
    <section class="innovative-sec">
      <div class="container-fluid">
        <div class="row">
          <div
            class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 pd-right-remove pd-remove-mob"
          >
            <div class="innovative-inner">
              <div class="inovative-content">
                <h4 class="text-red proxima_regular">Devoe</h4>
                <h5 class="proxima_regular">
                  Innovative design <span>and </span> performance
                </h5>
                <a href="" class="button-link proxima_bold"
                  >See the collection</a
                >
              </div>
              <div class="inove-large-img">
                <img src="~/assets/images/inova-1.jpg" alt="" />
              </div>
            </div>
          </div>
          <div class="col-lg-6 col-md-6 col-sm-12 col-12 mt--top pd-remove-mob">
            <div class="inovate-right">
              <div class="inove-large-img">
                <img src="~/assets/images/inova-2.jpg" alt="" />
              </div>
              <div class="inovative-content">
                <h4 class="text-red proxima_regular">Sustainability</h4>
                <h5 class="proxima_regular">Recycled materials</h5>
                <a href="" class="button-link proxima_bold"
                  >See the collection</a
                >
              </div>
            </div>
            <div class="inovate-right mt-30">
              <div class="inove-large-img order-2">
                <img src="~/assets/images/inova-3.jpg" alt="" />
              </div>
              <div class="inovative-content order-1">
                <h4 class="text-red proxima_regular">Lightweight</h4>
                <h5 class="proxima_regular">
                  Versatile, and thoughtful design
                </h5>
                <a href="" class="button-link proxima_bold"
                  >See the collection</a
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- ================================ WATCH THE WORLD OF TUMI on dekshtop ====================== -->
    <section class="watch-world hide-mob">
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
    </section>
    <!-- ================================ WATCH THE WORLD OF TUMI show on mobile ====================== -->
    <section class="watch-world watch-world-mobile show-mob">
      <div class="container">
        <div class="heding-with-line">
          <div class="tm-title__line"></div>
          <h2 class="main-heading proxima_bold">WATCH THE WORLD OF TUMI</h2>
          <div class="tm-title__line"></div>
        </div>
    

      <div class="watch-mobile video-play-list">
        <VueSlickCarousel v-bind="videoSetting">
          <div v-for="(item, index) in 3" :key="index">
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
              <a href="#" class="proxima_regular performce-txt">PERFORAMANCE WITH PURPOSE</a>
            </h3>
            <a href="" class="button-link proxima_bold">Explore more</a>
          </div>
          </div>
        </VueSlickCarousel>
      </div>
      </div>
    </section>
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
                <a href="#"><img src="~/assets/images/instagram.png"></a>
              </li>
            </ul>
          </div>
        </VueSlickCarousel>
      </div>
    </section>
    <div class="full-page-border"></div>
    <!-- ===================== Explore section strat=========== -->
    <section class="alfa-sec">
      <div class="container">
        <ul>
          <li>
            <div class="alfa-content">
              <a href="" class="anchor-width">
                <h3 class="tm-h3 proxima_regular">
                  Explore<br />
                  Alpha 3
                </h3>
                <a href="#" class="button-link proxima_bold">Shop Now</a>
              </a>
            </div>
            <div class="alfa-img-box">
              <img src="~/assets/images/alfa-1.jpg" alt="" />
            </div>
          </li>
          <li>
            <div class="alfa-content">
              <a href="" class="anchor-width">
                <h3 class="tm-h3 proxima_regular">
                  The TUMI<br />
                  Difference
                </h3>
                <a href="#" class="button-link proxima_bold">Shop Now</a>
              </a>
            </div>
            <div class="alfa-img-box">
              <img src="~/assets/images/alfa-2.jpg" alt="" />
            </div>
          </li>
        </ul>
      </div>
    </section>
    <!-- ========================== recomnded for you ========================= -->
    <section class="recomnded-section">
      <div class="container">
        <h2 class="proxima_regular">RECOMMENDATIONS FOR YOU</h2>
        <div class="recomnded-wrap">
          <VueSlickCarousel v-bind="recomndedSetting">
            <div class="re-com-item" v-for="(recItem, recIndex) in 10" :key="recIndex">
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
    VueSlickCarousel,
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
     arrows:true,
     slidesToShow: 7,
     autoplay:true,
      slidesToScroll: 1,
     speed: 1500,
     index: 2,
     focusOnSelect:true,
     responsive: [{
       breakpoint: 768,
       settings: {
         arrows: true,
         centerMode: true,
         centerPadding: '40px',
         slidesToShow: 3
       }
     }, {
       breakpoint: 480,
       settings: {
         arrows: false,
         centerMode: true,
         centerPadding: '40px',
         slidesToShow: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
      },
      videoSetting: {
        focusOnSelect: true,
        infinite:false,
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



