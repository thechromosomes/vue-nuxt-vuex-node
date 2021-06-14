<template>
  <div id="clp-three">
    <!-- ==========================================clp page three create start========= -->

    <section class="clp-three-baneer">
      <div class="clp-three-cont">
        <h2 class="proxima_bold">
          INNOVATIVE <span class="proxima_regular">BY NATURE</span>
        </h2>
        <h3 class="proxima_bold">
          SUSTAINABLE <span class="proxima_regular">BY CHOICE</span>
        </h3>
      </div>
    </section>
    <div class="clp-three-wraper">
      <section class="tumi-protects">
        <div class="container">
          <div class="row">
            <div class="col-sm-12">
              <div class="heading-css text-center">
                <strong class="text-center proxima_bold"
                  >TUMI protects the things that matter most,<span></span> the
                  things you own and the planet you travel to see.</strong
                >
                <p class="proxima_regular">
                  Our planet is an astonishing place and we believe it’s our
                  responsibility to preserve it for travelers of the future. By
                  putting excellence and quality first, we ensure that every
                  TUMI product has lifelong purpose, supported by our rigorous
                  testing standards, exploration of recycled materials, and
                  global repair network.
                </p>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-4 col-sm-12 col-12">
              <div class="built-to-last">
                <img src="~/assets/images/builttolast-icon.png" />
                <h4 class="td-h4 removeFocusIndicator proxima_bold">
                  Built To Last
                </h4>
                <p class="proxima_regular">
                  TUMI quality and durability standards are paramount – our
                  product is built to stay on the road. Our products made with
                  recycled fabric will meet the same standards as any TUMI
                  product.
                </p>
              </div>
            </div>
            <div class="col-lg-4 col-sm-12 col-12">
              <div class="built-to-last">
                <img src="~/assets/images/recycledmaterials-icon.png" />
                <h4 class="td-h4 removeFocusIndicator proxima_bold">
                  Recycled Material Innovation
                </h4>
                <p class="proxima_regular">
                  TUMI continually explores new and different recycled materials
                  and components. Our recycled collections use fabric made from
                  post-consumer recycled plastic bottles as well as from
                  recycled nylon
                </p>
              </div>
            </div>
            <div class="col-lg-4 col-sm-12 col-12">
              <div class="built-to-last">
                <img src="~/assets/images/repairnetwork-icon.png" />
                <h4 class="td-h4 removeFocusIndicator proxima_bold">
                  Built To Last
                </h4>
                <p class="proxima_regular">
                  If something goes wrong, we’ll fix it. If it breaks, we’ll
                  repair it. If it’s lost, we’ll help you track it down with the
                  TUMI Tracer® product recovery program. This means fewer bags
                  end up in landfill.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="what-matters">
        <div class="left-content-clpthree">
          <h3 class="proxima_bold">Protecting what matters.</h3>
          <p class="proxima_regular">
            TUMI protects the things that matter most, the things you own and
            the planet you travel to see. Durability is our promise – to keep
            your belongings safe and respect the world's resources, because our
            planet is an astonishing place and we believe it’s our
            responsibility to preserve it for travelers of the future.
          </p>
        </div>
        <div class="right-clp-three-img">
          <img src="~/assets/images/proteact-1.jpg" />
        </div>
      </section>
      <section class="sustainability-is">
        <div class="container">
          <div class="row">
            <div class="col-sm-12">
              <h4 class="proxima_bold">
                Sustainability is woven into the fabric of everything we do.
              </h4>
              <p class="proxima_regular">
                You are our inspiration. Your passion for travel reminds us how
                important it is to protect the things and places you love
              </p>
              <p class="proxima_regular">
                We want to keep the world traveling by creating products that
                last, by working within our planet’s limits and by protecting
                the rights and wellbeing of everyone we work with.
              </p>
              <p class="proxima_regular">
                Sustainability affects all of our operations and so we’ve
                created a roadmap to help us on the journey. It has four areas:
                Innovative Products, Carbon Action, Thriving Supply Chains,
                People Focused.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section class="what-matters reverse-section">
        <div class="right-clp-three-img order-2">
          <img src="~/assets/images/Innovative.jpg" />
        </div>
        <div class="left-content-clpthree order-1">
          <h3 class="proxima_bold">1. Innovative Products</h3>
          <p class="proxima_regular">
            TUMI is — and has always been — committed to creating durable
            products that last. We’ll protect your belongings wherever you
            travel — we design for durability and test every bag 30 different
            ways. We’ll create the highest quality products using responsible
            and environmentally-friendly materials and production methods.
          </p>
          <p class="proxima_regular">
            Our luggage is designed to keep you on the road, and in the event of
            accidental damage we’ll repair it, wherever in the world that may
            be. By increasing the lifespan of your bag, we’re decreasing the
            load on landfill.
          </p>
        </div>
      </section>
      <section class="recycled-ollection">
        <div class="container" v-if="accessories.length > 0">
          <VueSlickCarousel v-bind="slides">
            <div
              class="recy-item"
              v-for="(item, index) in accessories"
              :key="index"
            >
              <nuxt-link :to="`/product/${item.url_key}`">
                <img :src="item.image" />
                <p class="td-p td-p-small proxima_light">{{ item.color }}</p>
                <h4 class="td-h4 proxima_light">{{ item.name }}</h4>
              </nuxt-link>
            </div>
          </VueSlickCarousel>
        </div>
        <a href="/collections/accessories-wallet---card-cases" class="btn-collection proxima_regular"
          >Shop the Collection</a
        >
      </section>
      <section class="what-matters">
        <div class="left-content-clpthree">
          <h3 class="proxima_bold">2. Carbon Action</h3>
          <p class="proxima_regular">
            We are committed to making changes in our business to minimize our
            impact on climate change.
          </p>
          <p class="proxima_regular">
            We’re working with our operations around the world to reduce carbon
            emissions by 15% and transition to 100% renewable energy by 2025,
            doing our part to preserve the world’s beautiful places.
          </p>
        </div>
        <div class="right-clp-three-img">
          <img src="~/assets/images/carbon.jpg" />
        </div>
      </section>
      <section class="what-matters reverse-section">
        <div class="right-clp-three-img order-2">
          <img src="~/assets/images/Thriving.jpg" />
        </div>
        <div class="left-content-clpthree order-1">
          <h3 class="proxima_bold">3. Thriving Supply Chain</h3>
          <p class="proxima_regular">
            We have established a suppliers’ code of conduct known as the
            “Standards of Engagement” which allows us to fulfil our
            responsibility to build an economy that supports thriving businesses
            and people.
          </p>
          <p class="proxima_regular">
            Our supplier code of conduct requires our suppliers to meet our
            standards of fair and responsible business, so that everyone
            involved in the making of TUMI luggage is treated with respect and
            care.
          </p>
        </div>
      </section>
      <section class="what-matters">
        <div class="left-content-clpthree">
          <h3 class="proxima_bold">4. People Focused</h3>
          <p class="proxima_regular">
            Our journey is powered by people, our greatest asset. It’s their
            passion and commitment that will help us make the world’s most
            sustainable luggage.
          </p>
          <p class="proxima_regular">
            We make a difference to our communities wherever we can. Working
            with exceptional partners like St Jude Children’s Research Hospital,
            All Hands & Hearts, and Waves for Water, we strive to make tough
            journeys lead to better places.
          </p>
          <a href="" class="learn-more-link proxima_bold">LEARN MORE</a>
        </div>
        <div class="right-clp-three-img">
          <img src="~/assets/images/people-focused.jpg" />
        </div>
      </section>
      <section class="material-Innovation">
        <div class="container">
          <div class="material-invo-wrap">
            <VueSlickCarousel v-bind="slides">
              <div class="invo-item-1">
                <img src="~/assets/images/mat-1.jpg" />
                <h5 class="proxima_bold">Recycled Plastic</h5>
                <p class="proxima_regular">
                  980,531 plastic bottles have been diverted from landfill and
                  into TUMI bags. We use post-consumer recycled PET fabric as
                  the interior lining, zipper tape, webbing, and binding.
                </p>
              </div>
              <div class="invo-item-1">
                <img src="~/assets/images/mat-2.jpg" />
                <h5 class="proxima_bold">Eliminating PVC Materials</h5>
                <p class="proxima_regular">
                  Innovative design has helped us to eliminate the majority of
                  PVC used in our products.
                </p>
              </div>
              <div class="invo-item-1">
                <img src="~/assets/images/mat-3.jpg" />
                <h5 class="proxima_bold">Water-based Poly Fabric</h5>
                <p class="proxima_regular">
                  We use a water-based polyurethane coating process for the
                  fabrics in our bags instead of using a solvent-based coating
                  process, resulting in less contaminants in the water supply.
                </p>
              </div>
              <div class="invo-item-1">
                <img src="~/assets/images/mat-4.jpg" />
                <h5 class="proxima_bold">Recycled Zinc</h5>
                <p class="proxima_regular">
                  We’re cutting the amount of virgin zinc in hardware on our
                  bags by 50% and replacing it with recycled zinc. This means
                  less environmental damage from mining, less depletion of
                  limited zinc deposits, less energy to extract and alloy the
                  zinc and less zinc wasted in landfill.
                </p>
              </div>
            </VueSlickCarousel>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>
<style scoped>
/*==================================================== clp page three css start============== */
.clp-three-wraper {
  padding: 30px 80px;
  clear: both;
}
.clp-three-baneer {
  background-image: url(~/assets/images/clp-page-three-banner.jpg);
  background-repeat: no-repeat;
  min-height: 400px;
  background-size: cover;
}
.clp-three-cont {
  background-image: url("~/assets/images/clp-page-three-con.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-color: transparent;
  width: unset;
  max-width: 400px;
  height: 280px;
  padding: 0;
  position: relative;
  top: 62px;
  margin: 0 auto;
  text-align: center;
}

.clp-three-cont h2 {
  text-transform: uppercase;
  font-size: 28px;
  line-height: 32px;
  letter-spacing: 0.075em;
  margin: 30px 0 90px 0;
  color: #fff;
  padding: 0;
  padding-top: 32px;
}

.clp-three-cont span {
  display: block;
}
.heading-css strong {
  display: block;
  font-size: 26px;
}
.heading-css strong > span {
  display: block;
}
.heading-css p {
  font-size: 20px;
  letter-spacing: 0.38px;
  max-width: 990px;
  margin: 0 auto;
  line-height: 28px;
  padding-top: 20px;
}
.built-to-last {
  text-align: center;
  margin-top: 30px;
}
.built-to-last img {
  display: inline-block;
  width: 60px;
  margin: 0 auto;
}
.built-to-last p {
  font-size: 14px;
  line-height: 20px;
  margin-top: 5px;
}
.built-to-last h4 {
  padding-top: 15px;
}
.what-matters {
  padding: 60px 0px;
  display: flex;
  align-items: center;
}
.what-matters .left-content-clpthree,
.what-matters .right-clp-three-img {
  width: 50%;
}

.left-content-clpthree p {
  font-size: 18px;
  letter-spacing: 0.34px;
  line-height: 24px;
  padding-bottom: 20px;
}
.what-matters .right-clp-three-img {
  margin-left: 60px;
}
.left-content-clpthree h3 {
  font-size: 23px;
  padding-bottom: 22px;
}

.sustainability-is h4 {
  font-size: 23px;
  padding-bottom: 22px;
}
.sustainability-is p {
  font-size: 18px;
  padding-bottom: 17px;
  letter-spacing: 0.34px;
  line-height: 24px;
}
.what-matters.reverse-section .right-clp-three-img {
  margin-left: 0px;
  margin-right: 60px;
}

.recy-item {
  text-align: center;
  width: 25%;
}
.recy-item p {
  font-weight: normal;
  font-size: 11px;
  line-height: 17px;
  color: #666;
  letter-spacing: 0.085em;
  text-transform: uppercase;
  margin: 5px 5%;
}
.recy-item h4 {
  font-weight: normal;
  font-size: 16px;
  line-height: 17px;
  margin: 0 5%;
}
.btn-collection {
  font-weight: 600;
  padding: 10px 30px;
  width: 19%;
  border: solid #222 2px;
  font-size: 14px;
  letter-spacing: 0.025em;
  display: block;
  text-align: center;
  margin: 50px auto 8px;
}
.learn-more-link {
  font-size: 18px;
  letter-spacing: 0.34px;
  line-height: 24px;
}
.learn-more-link:hover {
  color: #c41e3a;
}
.invo-item-1 {
  width: 23%;
  text-align: left;
}
.invo-item-1 h5 {
  padding: 20px 0px 9px 0px;
  font-size: 18px;
}
.invo-item-1 p {
  font-size: 14px;
}
.material-invo-wrap {
  display: flex;
  justify-content: space-between;
}
</style>
<script>
import VueSlickCarousel from "vue-slick-carousel";
export default {
  components: {
    VueSlickCarousel,
  },
  data() {
    return {
      accessories: [],
      slides: {
        focusOnSelect: true,
        arrows: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
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
    this.getProductList("accessories-wallet---card-cases", "accessories");
  },
};
</script>
