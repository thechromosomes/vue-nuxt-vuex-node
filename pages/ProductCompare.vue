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
              ><a id="mailToLink" href="mailto:demo@demo.com">mail result</a>
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
                <div class="closeicon" @click="removeCompare(item, index)">
                  <span class="icon icon-x"></span>
                </div>
                <div class="imgbox">
                   <NuxtLink  :to="`/product/${item.url_key}`">
                    <img :src="item.image" alt="img" class="w-100" />
                   </NuxtLink>
                </div>
                <div class="pro_detail">
                  <NuxtLink  :to="`/product/${item.url_key}`">
                    <p class="p-name">
                      {{ item.name }}
                    </p>
                  </NuxtLink>
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
                            color.color == item.color ? 'border-color-dyn' : '',
                          ]"
                        >
                          <span
                            style="cursor: pointer"
                            :style="getHexColor(color.color, index, item.color)"
                            @click="updateViaColor(color, index)"
                          ></span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <button @click="addToCart(item)" class="btn btn-v-4">
                    Add to cart
                  </button>
                </div>
              </div>
              <div class="product-item" v-if="compareData.length === 2">
                <div class="product-item_empty">
                  <img
                    src="~/assets/images/all-pdp/compare-gif.gif"
                    alt="img"
                  />
                  <p>Use our recommendations to complete your comparison</p>
                  <span class="icon-arrow-down">&#x2193;</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="compare_data_info">
          <div class="data-1 data-1_table">
            <table class="table table-striped m-0" v-if="tableData.length > 0">
              <tbody>
                <tr v-for="(comItem, i) in tableData[0]" :key="i">
                  <th scope="row">{{ comItem.label }}</th>
                  <td v-for="(tData, tIndex) in tableData" :key="tIndex">
                    {{ tData[i].value }}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
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
      compareData: [],
      tableData: [],
      activeColor: [],
    };
  },
  async mounted() {
    window.addEventListener("scroll", this.updateScroll);
  },
  methods: {
    updateScroll() {
      this.scrollPosition = window.scrollY;
    },

    removeCompare(singleProd, index) {
      if (this.compareData.length <= 1) {
        this.$router.back();
        this.$router.push("/");
        return;
      }
      this.$store.commit("toCompareItems", {
        singleProd,
      });

      this.compareData.splice(index, 1);
      this.getProduct();
    },

    updateViaColor(product, index) {
      try {
        let tempPost = { ...this.compareData[index] };
        tempPost.image = product.image;
        tempPost.selling_price = product.selling_price;
        tempPost.price = product.price;
        tempPost.url_key = product.url_key;
        tempPost.color = product.color;
        tempPost.sku = product.sku;
        tempPost.fynd_size = product.fynd_size;
        tempPost.fynd_uid = product.fynd_uid;
        tempPost.product_parent_id = product.id_product;
        tempPost.product_id = product.id_product;

        this.compareData.splice(index, 1, tempPost);
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
        sku: Object.values(sku).join(","),
      };
      var response = await this.$store.dispatch("pimAjax", {
        method: "get",
        url: `/pimresponse.php`,
        params: form,
      });
      if (response.response.success != 0) {
        this.compareData = response.result;
        this.tableData = response.product_attributes;
      } else {
        this.$router.push("/");
      }
    },

    async addToCart(product) {
      try {
        var form = {};
        var urlHolder;
        var tokenholder;
        var product_options_json = JSON.stringify({
          size: Object.keys(product.variation)[0].configrable_atribute_value,
          color: product.color,
        });
        form.product_id = product.id_product;
        form.product_parent_id = product.id_product;
        form.product_options = product_options_json;
        form.fynd_size = product.fynd_size;
        form.fynd_uid = product.fynd_uid;
        form.name = product.name;
        form.sku = product.sku;
        form.master_sku = product.sku;
        form.price = product.price;
        form.qty_ordered = 1;
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
          token: tokenholder,
        });
        if (response) {
          this.$store.commit("cartAjax/updateCartDetail", {
            error: null,
            vm: this,
            data: response,
          });
        } else {
          throw "no response from api";
        }
      } catch (error) {
        this.$globalError(`error from addToCart >>>> ${error}`);

        if (error.message === "Network Error") {
          this.$store.commit("updateSingleProdState", {
            error:
              "Oops there seems to be some Network issue, please try again",
          });
        }
      }
    },
  },
  watch: {
    "$store.state.cartAjax.cart_page_message": function () {
      if (
        this.$store.state.cartAjax.cart_page_message != "" &&
        this.$store.state.cartAjax.cart_page_message != null
      ) {
        this.$store.commit("cartAjax/showHideCart");
      }
    },
    "$store.state.cartAjax.cart_page_erro_page": function () {
      if (
        this.$store.state.cartAjax.cart_page_error_message != "" &&
        this.$store.state.cartAjax.cart_page_error_message != null
      ) {
        this.$toast.error(this.$store.state.cartAjax.cart_page_error_message);
        this.$store.commit("cartAjax/removePageMessage", {
          data: "",
        });
      }
    },
  },
  created() {
    this.getProduct();
  },
};
</script>

<style scoped>
.border-color-dyn {
  border: 2px solid #000 !important;
}
</style>
