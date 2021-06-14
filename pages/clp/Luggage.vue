<template>
  <div>
    <section class="clp-banner">
      <img
        src="~assets/images/clp-pd-mob-banner.jpg"
        class="mobile-banner-clp-one"
      />

      <div class="baneer-clp-content-mob">
        <h2 class="proxima_bold">LUGGAGE</h2>
        <h3 class="proxima_bold">Innovative And Durable Features</h3>
        <a
          class="hero-action-mob btn proxima_regular"
          target="_blank"
          href="/collections/luggage-carry-on-luggage/"
        >
          View All<span class="icon icon-go"></span>
        </a>
      </div>

      <div class="container">
        <div class="row">
          <div class="col-sm-6">
            <div class="baneer-clp-content">
              <h2 class="proxima_bold">LUGGAGE</h2>
              <h3 class="proxima_bold">Innovative And Durable Features</h3>
              <a
                class="hero-action btn proxima_regular"
                target="_blank"
                href=""
              >
                View All<span class="icon icon-go"></span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- ===================================== products clp ================ -->
    <section class="clp-products" v-if="luggage.length > 0">
      <div class="container">
        <div class="row">
          <div
            class="col-lg-4 col-md-4 col-sm-4 col-4"
            v-for="(item, index) in luggage"
            :key="index"
          >
            <div class="clp-pd-wrap">
              <img :src="item.image" />
              <h2 class="proxima_regular">{{item.name}}</h2>
              <nuxt-link class="TCLink_3 proxima_bold" :to="`/product/${item.url_key}`">Buy Now</nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<style scoped>
/* =========================clp page-1 css strt here============= */
.clp-banner {
  width: 100%;
  min-height: 460px;
  background-image: url(~assets/images/delhtop-banner-s-lagguge.jpg);
  object-fit: cover;
  display: flex;
  align-items: center;
}
.clp-products {
  margin: 60px 0px;
}
.baneer-clp-content > h2 {
  font-size: 21px;
  letter-spacing: 0.025em;
}
.clp-pd-wrap img {
  display: block;
  margin: 0 auto;
  width: 89px;
  height: 108px;
  object-fit: contain;
}
.baneer-clp-content > h3 {
  font-size: 18px;
  margin: 0 0 20px 0;
  letter-spacing: 0.025em;
  padding-top: 8px;
}
.baneer-clp-content {
  text-align: center;
}
.baneer-clp-content .hero-action.btn {
  background-color: transparent;
  border: 2px solid #000;
  color: #000;
  display: inline-block;
  margin: 0;
  height: 36px;
  line-height: 34px;
  padding: 0 12px;
  text-decoration: none;
  text-transform: capitalize;
  font-size: 14px;
  font-weight: 600;
  vertical-align: middle;
  border-radius: 0px;
  white-space: nowrap;
}
.baneer-clp-content .icon-go:before {
  line-height: 1em;
  margin-top: -1.75em;
  font-size: 6px;
  vertical-align: middle;
  padding-left: 12px;
  margin-top: -6px;
}
.clp-pd-wrap {
  text-align: center;
  margin-bottom: 15px;
}
.clp-pd-wrap h2 {
  font-size: 18px;
  color: #777;
  letter-spacing: 0.025em;
}
.clp-pd-wrap .TCLink_3 {
  font-size: 13px;
  cursor: pointer;
  color: #222;
  text-decoration: none;
}

.baneer-clp-content-mob {
  display: none;
}
.clp-banner img {
  display: none;
}
</style>

<script>
export default {
  data() {
    return {
      luggage: [],
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
  },
};
</script>
