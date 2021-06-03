<template>
  <div>
    <div class="cart-content">
      <div class="menu-overlay-cart" @click="emitFunction()"></div>
      <div class="cartDrawer nofix">
        <h3>YOUR CART</h3>
        <a tabindex="0" class="closecart" @click="emitFunction()">close</a>
        <div
          v-if="$store.state.cartAjax.cart_product.length == 0"
          class="cart-empty"
        >
          phew! your cart is empty
        </div>
        <div
          class="has-item"
          v-if="$store.state.cartAjax.cart_product.length != 0"
        >
          <form action="#">
            <div class="cart-product">
              <div
                class="quick-items"
                v-for="(product, index) in $store.state.cartAjax.cart_product"
                :key="index"
              >
                <div class="quick-cart-item">
                  <div class="quick-cart-image">
                    <Nuxt-link
                      :to="`/product/${product.url_key}`"
                      @click.prevent
                      title="MARINA BLACK"
                    >
                      <img :src="product.image" alt="car-images" />
                    </Nuxt-link>
                  </div>
                  <div class="quick-cart-details">
                    <div class="drawerTitleOuter">
                      <p class="ptitle">
                        <Nuxt-link :to="`/product/${product.url_key}`">{{
                          product.name
                        }}</Nuxt-link>
                      </p>
                      <p v-if="JSON.parse(product.size).color">
                        <span class="font-medium">Color : </span
                        >{{ JSON.parse(product.size).color }}
                      </p>
                      <p v-if="JSON.parse(product.size).size">
                        <span class="font-medium">Size : </span>
                        <span>{{ JSON.parse(product.size).size }}</span>
                      </p>
                    </div>
                    <div class="pqty">
                      <div class="qtyAdjust grid-form-add">
                        <span
                          role="button"
                          class="adjust minus"
                          @click.prevent="addCartVal('minus', product)"
                          >-</span
                        >
                        <span class="qtyOuterinput"
                          >Qty
                          <input
                            type="text"
                            name="updates[]"
                            :value="product.qty"
                            class="tc item-quantityg quantity"
                          />
                        </span>
                        <span
                          role="button"
                          class="adjust plus"
                          @click.prevent="addCartVal('add', product)"
                          >+</span
                        >
                      </div>
                    </div>
                    <div class="priceC text-right">
                      <div class="pprice">
                        <!-- <font-awesome-icon :icon="['fas', 'rupee-sign']" /> -->
                        <span class="price_icon">₹</span
                        ><span class="price">{{
                          product.price | numberWithCommas
                        }}</span>
                      </div>
                    </div>
                    <a
                      class="remove_item"
                      title="Remove item"
                      @click.prevent="removeCartItem(product)"
                    >
                      <img src="@/assets/images/close.png" alt="close" />
                    </a>
                    <div>
                      <p class="clearnceMsg" v-show="product.max_qty == 0">
                        Requested quentity is out of stock.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="cart-parent">
              <div class="cartButtonOuter">
                <div
                  class="cartTotal discountOuter"
                  v-if="
                    $store.state.cartAjax.discount_code == '' ||
                    $store.state.cartAjax.discount_code == null
                  "
                >
                  <span class="left">
                    <input
                      type="text"
                      v-model="applied_coupon"
                      ref="applied_coupon"
                      name="discount"
                      placeholder="Discount Code"
                    />
                  </span>
                  <span class="right">
                    <input
                      name="checkout"
                      type="submit"
                      value="Apply"
                      @click.prevent="addRemoveCoupon('add')"
                    />
                  </span>
                </div>
                <div class="cartTotal discountOuter" v-else>
                  <span class="left">
                    <input
                      type="text"
                      v-model="$store.state.cartAjax.discount_code"
                      disabled
                      ref="applied_coupon"
                      name="discount"
                      placeholder="Discount Code"
                    />
                  </span>
                  <span class="right">
                    <input
                      name="checkout"
                      type="submit"
                      value="Remove"
                      @click.prevent="addRemoveCoupon('remove')"
                    />
                  </span>
                </div>
                <div class="cartTotal">
                  <span class="left">
                    <strong>Total: </strong>
                  </span>
                  <span class="right">
                    <strong>
                      <!-- <font-awesome-icon :icon="['fas', 'rupee-sign']" /> -->

                      <span class="price_icon">₹</span
                      ><span class="price">{{
                        $store.state.cartAjax.cart_total | numberWithCommas
                      }}</span>
                    </strong>
                  </span>
                </div>
                <div class="topcart-btn">
                  <NuxtLink
                    class="checkout-link button"
                    name="checkout"
                    to="/checkout"
                    @click.native="emitFunction()"
                  >
                    <span>Checkout</span></NuxtLink
                  >
                  <NuxtLink
                    class="checkout-link button"
                    name="checkout"
                    to="/cart"
                    @click.native="emitFunction()"
                    style="margin-top: 10px"
                  >
                    <span>cart</span></NuxtLink
                  >
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      addToCartVal: 0,
      applied_coupon: "",
    };
  },

  methods: {
    emitFunction() {
      this.$parent.toggleCart();
    },

    async removeCartItem(item) {
      try {
        var form = {};
        form.cart_id = this.$store.state.cartAjax.cart_id;
        form.cart_session = this.$store.state.cartAjax.cart_session;
        form.product_id = item.item_id;
        form.customer_id = this.$store.state.cartAjax.customer_id;
        form.customer_session = this.$store.state.cartAjax.customer_session;

        let response = await this.$store.dispatch("cartAjax/actCartAjax", {
          method: "post",
          url: `/product/remove-product`,
          token: this.$store.state.cartAjax.cart_token,
          params: form,
        });
        if (response) {
          this.$store.commit("cartAjax/updateCartDetail", {
            error: null,
            data: response,
          });
          if (response.success) {
            this.$gtm.push({
              event: "removeFromCart",
              action: "removeFromCart",
              ecommerce: {
                remove: {
                  product: [
                    {
                      name: item.name,
                      id: item.master_sku,
                      price: item.selling_price,
                      variant: item.fynd_size,
                      quantity: item.qty,
                    },
                  ],
                },
              },
            });
          }
        } else {
          throw "no response from api";
        }
      } catch (error) {
        console.log(error);
      }
    },

    async updateCart(item) {
      try {
        var form = {};
        form.qty_ordered = this.addToCartVal;
        form.cart_id = this.$store.state.cartAjax.cart_id;
        form.cart_session = this.$store.state.cartAjax.cart_session;
        form.product_id = item.variant_id;
        form.customer_id = this.$store.state.cartAjax.customer_id;
        form.customer_session = this.$store.state.cartAjax.customer_session;

        let response = await this.$store.dispatch("cartAjax/actCartAjax", {
          method: "post",
          url: `/product/update-product`,
          token: this.$store.state.cartAjax.cart_token,
          params: form,
        });
        if (response) {
          this.$store.commit("cartAjax/updateCartDetail", {
            error: null,
            data: response,
          });
        } else {
          throw "no response from api";
        }
      } catch (error) {
        console.log("error", error);
      }
    },

    addCartVal(cartval, product) {
      if (this.addToCartVal == 1 && cartval == "minus") return;
      this.addToCartVal = product.qty;
      if (Object.keys(product).length === 0) {
        alert("no product available");
        return;
      }
      if (this.addToCartVal >= 5 && cartval == "add") {
        return;
      } else {
        if (
          cartval === "add" &&
          this.addToCartVal < product.max_qty &&
          this.addToCartVal < 5
        ) {
          this.addToCartVal += 1;
        } else if (cartval === "minus") {
          this.addToCartVal -= 1;
          this.addToCartVal === 0 ? (this.addToCartVal = 1) : this.addToCartVal;
        }
      }
      this.updateCart(product);
    },

    // add coupon to the cart
    async addRemoveCoupon(behave) {
      try {
        var url;
        if (behave == "add" && this.applied_coupon == "") {
          this.$refs.applied_coupon.focus();
          return;
        }

        if (behave == "remove") {
          url = `/cart/remove-coupon`;
        }
        var form = {};
        form.cart_id = this.$store.state.cartAjax.cart_id;
        form.cart_session = this.$store.state.cartAjax.cart_session;
        if (behave == "add") {
          url = `/cart/assign-coupon`;
          form.coupon = this.applied_coupon;
        }
        if (
          this.$store.state.cartAjax.customer_id != null &&
          this.$store.state.cartAjax.customer_id != ""
        ) {
          form.customer_id = this.$store.state.cartAjax.customer_id;
          form.customer_session = this.$store.state.cartAjax.customer_session;
        }

        let response = await this.$store.dispatch("cartAjax/actCartAjax", {
          method: "post",
          url,
          token: this.$store.state.cartAjax.cart_token,
          params: form,
        });

        if (response.success) {
          this.$store.commit("cartAjax/updateCartDetail", {
            error: null,
            data: response,
          });
          this.$toast.open(response.message);
        } else {
          this.$toast.error(response.message);
        }
      } catch (error) {
        console.log("error form the add coupon foo >>", error);
      }
    },
  },

  watch: {
    // "$store.state.cartAjax.cart_page_message": function () {
    //   if (
    //     this.$store.state.cartAjax.cart_page_message != "" &&
    //     this.$store.state.cartAjax.cart_page_message != null
    //   ) {
    //     this.$toast.open(this.$store.state.cartAjax.cart_page_message);
    //     this.$store.commit("cartAjax/removePageMessage", {
    //       data: "",
    //    });
    //   }
    // },
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
};
</script>

<style >
/* .cart-parent {
  overflow: auto;
  width: 100%;
  height: calc(100vh - 48vh);
  overflow-y: auto;
} */

.cart-product {
  width: 100%;
  background: red;
  max-height: 400px;
  overflow: auto;
}

@media only screen and (max-width: 767px) {
  /* .cart-parent {
    overflow: auto;
    width: 100%;
    height: calc(100vh - 45vh);
    overflow-y: auto;
  } */
  .cart-product {
    width: 100%;
    background: red;
    max-height: 500px;
    overflow: auto;
  }
}
</style>