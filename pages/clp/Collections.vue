<template>
  <div>
    <!--============================= clp page code ===========  two start here =============== -->
    <section class="clp-page-two-banner">
      <img src="~assets/images/clp-page-two-banner.jpg" />
      <div class="baneer-content">
        <h2 class="proxima_bold">
          Spring 2021 Collection <span >Breakdown</span>
        </h2>
        <p class="proxima_regular">
          From lightweight commute-friendly backpacks to luxurious leather
          carry-ons, our collections span a wide range of your needs. Get to
          know them here.
        </p>
      </div>
    </section>
    <!-- ================anchor link list open= -->
    <div class="scroll-anchor-link-div">
      <ul class="scrool-list">
        <li>
          <a href="#scroll-smartgift" class="proxima_semi-bold"
            >Travel <img src="~assets/images/anchor-down.png"
          /></a>
        </li>
        <li>
          <a href="#scroll-gifts-for-her" class="proxima_semi-bold"
            >Everyday Casual <img src="~assets/images/anchor-down.png"
          /></a>
        </li>
        <li>
          <a href="#scroll-under-200" class="proxima_semi-bold"
            >Boardroom Bound <img src="~assets/images/anchor-down.png"
          /></a>
        </li>
        <li>
          <a href="#scroll-gifts-for-him" class="proxima_semi-bold"
            >Luxe List <img src="~assets/images/anchor-down.png"
          /></a>
        </li>
        <li>
          <a href="#scroll-smartTravel" class="proxima_semi-bold"
            >Accessories <img src="~assets/images/anchor-down.png"
          /></a>
        </li>
      </ul>
    </div>
    <!-- ===================clp page two travel section -->
    <section class="clp-travel" id="scroll-smartgift">
      <img src="~assets/images/clp-travel.jpg" />

      <div class="travel-div-bg">
        <h2 class="proxima_bold">Travel</h2>
        <p class="proxima_regular">
          Every detail—from the smooth roll of a wheel to the easy expansion of
          a carry-on—has been meticulously designed.
        </p>
      </div>
    </section>

    <section class="clp-page-two-pd-slider">
      <div class="container">
        <div class="clp-slider-wraper" v-if="luggage.length > 0">
          <VueSlickCarousel v-bind="slides">
            <div
              class="item-one-clp-slide"
              v-for="(item, index) in luggage"
              :key="index"
            >
              <nuxt-link :to="`/product/${item.url_key}`">
                <img :src="item.image" />
                <p class="proxima_light">{{ item.name }}</p>
              </nuxt-link>
            </div>
          </VueSlickCarousel>
        </div>
      </div>
    </section>
    <section class="clp-travel" id="scroll-gifts-for-her">
      <img src="~assets/images/everyday-casual.jpg" />

      <div class="travel-div-bg">
        <h2 class="proxima_bold">Everyday Casual</h2>
        <p class="proxima_regular">
          From the best-selling Alpha Bravo to the lightweight, feminine
          Voyageur styles, we've got your day-to-day covered.
        </p>
      </div>
    </section>
    <section class="clp-page-two-pd-slider">
      <div class="container">
        <div class="clp-slider-wraper" v-if="bags.length > 0">
          <VueSlickCarousel v-bind="slides">
            <div
              class="item-one-clp-slide"
              v-for="(item, index) in bags"
              :key="index"
            >
              <nuxt-link :to="`/product/${item.url_key}`">
                <img :src="item.image" />
                <p class="proxima_light">{{ item.name }}</p>
              </nuxt-link>
            </div>
          </VueSlickCarousel>
        </div>
      </div>
    </section>
    <section class="clp-travel boardroom-section" id="scroll-under-200">
      <img src="~assets/images/Boardroom.jpg" />

      <div class="travel-div-bg">
        <h2 class="proxima_bold">Boardroom Bound</h2>
        <p class="proxima_regular">
          Whether you commute to the office or the local coffee shop, our
          business bags keep you organized along the way.
        </p>
      </div>
    </section>
    <section class="clp-page-two-pd-slider not-slide-dekhtop">
      <div class="container">
        <div class="clp-slider-wraper" v-if="duffels.length > 0">
          <VueSlickCarousel v-bind="dekshtopSlide">
            <div
              class="item-one-clp-slide"
              v-for="(item, index) in duffels"
              :key="index"
            >
              <nuxt-link :to="`/product/${item.url_key}`">
                <img :src="item.image" />
                <p class="proxima_light">{{ item.name }}</p>
              </nuxt-link>
            </div>
          </VueSlickCarousel>
        </div>
      </div>
    </section>
    <section class="clp-travel boardroom-section" id="scroll-gifts-for-him">
      <img src="~assets/images/linux.jpg" />

      <div class="travel-div-bg">
        <h2 class="proxima_bold">Luxe List</h2>
        <p class="proxima_regular">
          Our most refined collections are made with innovative, high-quality
          materials and designed to outlast trends.
        </p>
      </div>
    </section>
  <section class="clp-page-two-pd-slider">
      <div class="container">
        <div class="clp-slider-wraper" v-if="luggage2.length > 0">
          <VueSlickCarousel v-bind="slides">
            <div
              class="item-one-clp-slide"
              v-for="(item, index) in luggage2"
              :key="index"
            >
              <nuxt-link :to="`/product/${item.url_key}`">
                <img :src="item.image" />
                <p class="proxima_light">{{ item.name }}</p>
              </nuxt-link>
            </div>
          </VueSlickCarousel>
        </div>
      </div>
    </section>
    <section class="clp-travel" id="scroll-smartTravel">
      <img src="~assets/images/accesries-clpteo.jpg" />

      <div class="travel-div-bg">
        <h2 class="proxima_bold">Accessories</h2>
        <p class="proxima_regular">
          Up your organization game with beautifully designed wallets, luggage
          tags, toiletry kits, and more.
        </p>
      </div>
    </section>

    <section class="clp-page-two-pd-slider">
      <div class="container">
        <div class="clp-slider-wraper" v-if="accessories.length > 0">
          <VueSlickCarousel v-bind="slides">
            <div
              class="item-one-clp-slide"
              v-for="(item, index) in accessories"
              :key="index"
            >
              <nuxt-link :to="`/product/${item.url_key}`">
                <img :src="item.image" />
                <p class="proxima_light">{{ item.name }}</p>
              </nuxt-link>
            </div>
          </VueSlickCarousel>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";
export default {
  components: {
    VueSlickCarousel,
  },
  data() {
    return {
      luggage: [],
      luggage2: [],
      bags: [],
      duffels: [],
      accessories: [],
      slides: {
        focusOnSelect: true,
        arrows: true,
        infinite: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoscroll: true,
        autoplay: true,

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
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2,
              centerMode: false,
              centerPadding: "100px",
              arrows: false,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              centerMode: false,
              centerPadding: "0px",
              arrows: false,
            },
          },
        ],
      },

      dekshtopSlide: {
        slidesToShow: 5,
        slidesToScroll: 5,
        autoplay: false,
        autoplaySpeed: 2000,
        responsive: [
          {
            breakpoint: 9999,
            settings: "unslick",
          },
          {
            breakpoint: 767,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 3,
              infinite: false,
              dots: false,
              arrows: false,
              autoplay: false,
            },
          },
        ],
      },
    };
  },

  methods: {
    async getProductList(url, dataplaceholder) {
      try {
        let { service, store, count } = this.$store.state.list;

        let form = {};
        form.service = service;
        form.store = store;
        form.url_key = url;
        form.page = 1;
        form.count = count;

        let response = await this.$store.dispatch("pimAjax", {
          method: "post",
          url: `/pimresponse.php`,
          params: form,
        });

        if (response) {
          this[dataplaceholder] = response.result.products;
        } else {
          throw "there is error from all product page >> no response";
        }
      } catch (error) {
        this.$globalError(`error from all product page >>>> ${error}`);
        if (error.message === "Network Error") {
          this.$store.commit("updateState", {
            error:
              "Oops there seems to be some Network issue, please try again",
          });
        }
      }
    },
  },
  created() {
    this.getProductList("luggage-carry-on-luggage", "luggage");
    this.getProductList("bags-crossbodies", "bags");
    this.getProductList("bags-duffels", "duffels");
    this.getProductList("accessories-wallet---card-cases", "accessories");
    this.getProductList("luggage-checked-luggage", "luggage2");
  },
};
</script>
<style scoped>
/* ======================================= clp page two css ============== */

html {
  scroll-behavior: smooth;
}
.clp-page-two-banner {
  position: relative;
}
.clp-page-two-banner img {
  width: 100%;
}
.clp-page-two-banner .baneer-content {
  position: absolute;
  top: 10%;
  text-align: center;
  left: 50%;
  transform: translate(-50%);
}
.clp-page-two-banner .baneer-content h2 {
  font-size: 50px;
  text-transform: none;
  letter-spacing: 0.02em;
  margin: 0;
  padding: 0;
  font-weight: 700;
  color: black;
}
.clp-page-two-banner .baneer-content P {
  font-size: 20px;
  line-height: 40px;
  margin: 10px 0 25px 0;
  padding: 0;
  color: black;
  font-weight: 400;
  letter-spacing: 0.02em;
}
.scrool-list {
  display: flex;
  justify-content: center;
  align-items: center;
}
.scrool-list li {
  font-size: 16px;
  color: #222222;
  padding: 0 30px;
}
.scrool-list li img {
  height: 20px;
  padding-left: 5px;
  margin-top: -3px;
  vertical-align: middle;
}
.scrool-list li:hover {
  opacity: 0.7;
}
.scroll-anchor-link-div {
  padding: 30px 0px;
}
.clp-travel {
  position: relative;
}
.travel-div-bg p {
  padding-top: 24px;
  font-size: 20px;
  line-height: 22px;
  margin: 0 auto;
  padding: 15px 0 0 0;
  color: #222;
}
.travel-div-bg h2 {
  line-height: 50px;
  color: #222;
  font-size: 42px;
  letter-spacing: 0.02em;
}
.travel-div-bg {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-133%, -50%);
  background: #fff;
  width: 34%;
  text-align: center;
  min-height: 250px;
  padding: 40px 10px;
  background-size: cover;
  background: rgba(255, 255, 255, 0.75);
  padding: 50px 40px 40px !important;
}

.item-one-clp-slide p {
  font-size: 16px;
  color: #000 !important;
  font-weight: 300;
  line-height: 20px;
  letter-spacing: 0.02em;
  text-align: center;
}
.clp-travel.boardroom-section .travel-div-bg {
  background: transparent;
}
.clp-page-two-pd-slider {
  padding: 40px 0px;
}
.not-slide-dekhtop .regular.slider {
  display: flex;
}

@media only screen and (max-width: 1024px) {
  .clp-page-two-banner .baneer-content h2 {
    font-size: 40px;
  }
}
@media only screen and (max-width: 991px) {
  .clp-page-two-banner .baneer-content h2 {
    font-size: 30px;
  }
  .baneer-content {
    width: 100%;
  }
}
@media only screen and (max-width: 767px) {
  .travel-div-bg[data-v-0e9f138a] {
    position: relative;
    top: auto;
    left: auto;
    transform: none;
  }
  .clp-page-two-banner .baneer-content {
    width: 50%;
  }
  .travel-div-bg {
    width: 100%;
    padding-bottom: 0px !important;
    padding: 30px 15px 15px !important;
  }
  .clp-page-two-banner .baneer-content {
    width: 96%;
  }
  .travel-div-bg h2 {
    font-size: 30px;
  }
}
</style>