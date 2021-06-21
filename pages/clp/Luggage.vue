<template>
  <div>
    <!-- <div class="luggage-page">
      <div class="luggage-banner">
        <img
          src="~assets/images/clp-pd-desbanner.jpg"
          alt="img"
          class="w-100 hide-mob"
        />
        <img
          src="~assets/images/clp-pd-mob-banner.jpg"
          alt="img"
          class="w-100 hide-desk "
        />
        <div id="breadcrumb" class="breadcrumb hide-mob">
          <ul>
            <li>
              <a href="#" class="home"><span itemprop="name">Home</span></a>
            </li>
            <li class="active">
              &nbsp;&gt;&nbsp;<a href="javascript:void(0);"
                ><span>Luggage</span></a
              >
            </li>
          </ul>
        </div>

        <div class="banner-content ">
          <div class="hero-content no-border hidden-phone ">
            <h2 class="hide-mob">LUGGAGE</h2>
            <p class="hero-text">Innovative And Durable Features</p>
            <a class="hero-action btn" target="_blank" href="#">
              View All<span class="icon icon-go hide-mob"></span>
            </a>
          </div>
        </div>
      </div>

      <div class="proCategory ">
        <ul class="cf removeFocusIndicator">
          <li class="fl removeFocusIndicator">
            <div class="removeFocusIndicator">
              <a
                href="https://www.tumi-hk.com/c-luggage/carryon-luggage/"
                target="_blank"
                class="removeFocusIndicator"
                ><img
                  src="~assets/images/p-cat.jpg"
                  class="removeFocusIndicator"
              /></a>
              <h2>CARRY-ON</h2>
              <a
                class="TCLink_3"
                href="https://www.tumi-hk.com/c-luggage/carryon-luggage/"
                >Buy Now &gt;</a
              >
            </div>
          </li>

          <li class="fl">
            <div>
              <a
                href="https://www.tumi-hk.com/c-luggage/checked-luggage/"
                target="_blank"
                ><img src="~assets/images/p-cat.jpg"
              /></a>
              <h2>CHECKED LUGGAGE</h2>
              <a
                class="TCLink_3"
                href="https://www.tumi-hk.com/c-luggage/checked-luggage/"
                >Buy Now &gt;</a
              >
            </div>
          </li>

          <li class="fl">
            <div>
              <a
                href="https://www.tumi-hk.com/c-luggage/new-arrivals"
                target="_blank"
                ><img src="~assets/images/p-cat.jpg"
              /></a>
              <h2>GARMENT BAG</h2>
              <a
                class="TCLink_3"
                href="https://www.tumi-hk.com/c-luggage/new-arrivals"
                >Buy Now &gt;</a
              >
            </div>
          </li>

          <li class="fl">
            <div>
              <a
                href="https://www.tumi-hk.com/c-luggage/best-sellers-luggage/"
                target="_blank"
                ><img src="~assets/images/p-cat.jpg"
              /></a>
              <h2>BEST SELLER</h2>
              <a
                class="TCLink_3"
                href="https://www.tumi-hk.com/c-luggage/best-sellers-luggage/"
                >Buy Now &gt;</a
              >
            </div>
          </li>

          <li class="fl">
            <div>
              <a
                href="https://www.tumi-hk.com/c-luggage/new-arrivals/"
                target="_blank"
                ><img src="~assets/images/p-cat.jpg"
              /></a>
              <h2>NEW ARRIVAL</h2>
              <a
                class="TCLink_3"
                href="https://www.tumi-hk.com/c-luggage/new-arrivals/"
                >Buy Now &gt;</a
              >
            </div>
          </li>

          <li class="fl">
            <div>
              <a
                href="https://www.tumi-hk.com/c-luggage/personalized-luggage/"
                target="_blank"
                ><img src="~assets/images/p-cat.jpg"
              /></a>
              <h2>PERSONALIZATION</h2>
              <a
                class="TCLink_3"
                href="https://www.tumi-hk.com/c-luggage/personalized-luggage/"
                >Buy Now &gt;</a
              >
            </div>
          </li>
        </ul>
      </div>
    </div> -->
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
      luggage: []
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
          params: form
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
            error: "Oops there seems to be some Network issue, please try again"
          });
        }
      }
    }
  },
  created() {
    this.getProductList("luggage-carry-on-luggage", "luggage");
  }
};
</script>
