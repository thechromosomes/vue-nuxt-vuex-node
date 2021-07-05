<template>
  <div>
    <div class="product_compare">
      <div class="container-fluid">
        <div class="continue-shopping-btn">
          <Nuxt-link to="/">
            <span class="error-left"></span> Continue shopping</Nuxt-link
          >
        </div>

        <div class="top_compare_title">
          <h4>Compare Products</h4>
          <div class="left">
            <div class="ctnr-compare-email">
              <span class="icon-email"></span
              ><a id="mailToLink" href="#">mail result</a>
            </div>
            <div class="ctnr-compare-print">
              <a href="javascript:window.print();"
                ><span class="icon-print"></span> print the result</a
              >
            </div>
          </div>
        </div>

        <div class="compare_data w-100">
          <div class="container">
            <div
              class="box-item"
              :class="{ fixedcompare: scrollPosition > 100 }"
            >
              <div
                class="product-item"
                v-for="(item, index) in compareData"
                :key="index"
              >
                <div class="closeicon">
                  <span class="icon icon-x"></span>
                </div>
                <div class="imgbox">
                  <a href="#">
                    <img :src="item.image" alt="img" class="w-100" />
                  </a>
                </div>
                <div class="pro_detail">
                  <a href="#">
                    <p class="p-name">
                      {{ item.name }}
                    </p>
                  </a>
                  <p class="price">
                    ₹{{ item.selling_price | numberWithCommas }}
                  </p>
                  <div class="color-blk">
                    <div class="color-options">
                      <ul class="no-list choose-colors selct-color">
                        <li
                          v-for="(color, colorIndex) in item.color_variation"
                          :key="colorIndex"
                          :class="[
                            color.color == item.color ? 'border-color-dyn' : ''
                          ]"
                        >
                          <span
                            style="cursor: pointer"
                            :style="getHexColor(color.color, index, item.color)"
                            @click="updateViaColor(color, colorIndex, index)"
                          ></span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <button @click="addToCart()" class="btn btn-v-4">
                    Add to cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="compare_data_info">
          <div class="data-1 data-1_table">
            <table
              class="table table-striped m-0"
              v-if="compareData.length > 0"
            >
              <tbody>
                <tr
                  v-for="(comItem, comIndex) in compareData[0]
                    .product_attributes"
                  :key="comIndex"
                >
                  <th scope="row">{{ comItem.label }}</th>
                  <template v-for="mainItem in compareData">
                    <td
                      v-for="(tData, tIndex) in mainItem.product_attributes"
                      :key="`${tIndex}td`"
                    >
                      <template v-if="tData.label == comItem.label">
                        {{ tData.value }}
                      </template>
                      <template v-else>
                        dummy
                      </template>
                    </td>
                  </template>
                </tr>
              </tbody>
            </table>
          </div>
          <!-- data 2 -->
          <!-- <div class="data-1 data-2">
            <table class="table table-striped m-0">
              <tbody>
                <tr>
                  <th scope="row">FEATURES</th>
                  <td>N/A</td>
                  <td>
                    <div class="feature-box">
                      <ul class="ctnr-feature-Icon removeFocusIndicator">
                        <li>
                          <span
                            class="item-icon-img icon-tumiAirGradeAlHandle-lg"
                          ></span
                          ><br />
                          Aircraft Grade Aluminum Extension Handle
                        </li>
                        <li>
                          <span
                            class="item-icon-img icon-tumiLightweight-lg"
                          ></span
                          ><br />
                          Lightweight
                        </li>
                        <li class="removeFocusIndicator">
                          <span
                            class="item-icon-img icon-tumiOmegaClosure-lg"
                          ></span
                          ><br />
                          Omega Closure System®
                        </li>
                        <li>
                          <span class="item-icon-img icon-tumiTracer-lg"></span
                          ><br />
                          Tumi Tracer®
                        </li>
                        <li>
                          <span
                            class="item-icon-img icon-tumiXBrace45Handle-lg"
                          ></span
                          ><br />
                          X-Brace 45® Handle System
                        </li>
                      </ul>
                    </div>
                  </td>
                  <td>
                    <div class="feature-box">
                      <ul class="ctnr-feature-Icon removeFocusIndicator">
                        <li>
                          <span
                            class="item-icon-img icon-tumiAirGradeAlHandle-lg"
                          ></span
                          ><br />
                          Aircraft Grade Aluminum Extension Handle
                        </li>
                        <li>
                          <span
                            class="item-icon-img icon-tumiLightweight-lg"
                          ></span
                          ><br />
                          Lightweight
                        </li>
                        <li class="removeFocusIndicator">
                          <span
                            class="item-icon-img icon-tumiOmegaClosure-lg"
                          ></span
                          ><br />
                          Omega Closure System®
                        </li>
                        <li>
                          <span class="item-icon-img icon-tumiTracer-lg"></span
                          ><br />
                          Tumi Tracer®
                        </li>
                        <li>
                          <span
                            class="item-icon-img icon-tumiXBrace45Handle-lg"
                          ></span
                          ><br />
                          X-Brace 45® Handle System
                        </li>
                      </ul>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { color } from "../utils/color";

export default {
  data() {
    return {
      scrollPosition: null,
      compareData: []
    };
  },
  async mounted() {
    window.addEventListener("scroll", this.updateScroll);
  },
  methods: {
    updateScroll() {
      this.scrollPosition = window.scrollY;
    },

    updateViaColor(product, colorIndex, index) {
      try {
        let tempPost = { ...this.compareData[index] };
        tempPost.image = product.image;
        tempPost.price = product.price;
        tempPost.url_key = product.url_key;
        tempPost.color = product.color;

        compareData.splice(index, 1, tempPost);
      } catch (error) {
        console.log("error from update product color >>> ", error);
        this.$globalError(`error from update product color >>> ${error}`);
      }
    },
    getHexColor(namedColor, index, prodColor) {
      if (namedColor != undefined) {
        var colorTemp = namedColor.replace(/\s/g, "_").toLowerCase();
        return color[colorTemp];
      }
    },
    async getProduct() {
      let sku = {};
      for (let i = 0; i < this.$store.state.compareItem.length; i++) {
        sku[i] = this.$store.state.compareItem[i].sku;
      }
      let form = {
        service: "compare",
        store: 1,
        sku: Object.values(sku).join(",")
      };
      var response = await this.$store.dispatch("pimAjax", {
        method: "get",
        url: `/pimresponse.php`,
        params: form
      });
      if (response.response.success) {
        this.compareData = response.result;
      } else {
        this.$router.back();
        this.$router.push("/");
      }
    },

    async addToCart(product) {
      try {
        var form = {};
        var urlHolder;
        var tokenholder;
        // var product_options_json = JSON.stringify({
        //   size: this.selectedSizeAttr.configrable_atribute_value,
        //   color: product.color,
        // });
        form.product_id = product.id_product;
        form.product_parent_id = product.id_product;
        form.product_options = product_options_json;
        form.fynd_size = product.fynd_size;
        form.fynd_uid = product.fynd_uid;
        form.name = product.name;
        form.sku = product.sku;
        form.master_sku = product.sku;
        form.price = product.price;
        form.qty_ordered = this.addToCartVal;
        form.final_price = product.selling_price;
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
        } else {
          throw "no response from api";
        }
      } catch (error) {
        this.$globalError(`error from addToCart >>>> ${error}`);

        if (error.message === "Network Error") {
          this.$store.commit("updateSingleProdState", {
            error: "Oops there seems to be some Network issue, please try again"
          });
        }
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
  },
  created() {
    this.getProduct();
  }
};
</script>
