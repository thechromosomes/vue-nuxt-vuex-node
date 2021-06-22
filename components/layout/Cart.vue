<template>
  <div>
    <div class="cart-page active">
      <div class="tm-mask">
        <div class="tm-panel-container">
          <div class="tm-wrapper">
            <div
              class="tm-panel tm-panel-basic"
              id="tm-panel-mini-cart"
              v-if="$store.state.cartAjax.cart_product.length > 0"
            >
              <div class="">
                <header class="tm-header">
                  <h3 class="title">
                    <span>{{ $store.state.cartAjax.cart_product.length }}</span>
                    Item in cart
                  </h3>
                  <span class="sub"></span
                  ><a
                    @click.prevent="emitFunction()"
                    class="close"
                    title="close"
                    aria-label="close"
                    ><span class="icon icon-x"></span
                  ></a>
                </header>
                <div class="tm-content">
                  <div class="scroll">
                    <div class="scroll-inner">
                      <ul class="cart-products">
                        <li class="cart-product">
                          <div
                            class="cart-item"
                            v-for="(product, index) in $store.state.cartAjax
                              .cart_product"
                            :key="index"
                          >
                            <div class="product-image">
                              <NuxtLink
                                :to="`/product/${product.url_key}`"
                                class=""
                                title="Lance Backpack"
                                ><img :src="product.image" alt="cart image"
                              /></NuxtLink>
                            </div>
                            <div class="product-details">
                              <div class="product-badge">
                                <span
                                  class="badge-added"
                                  v-if="
                                    index ==
                                    $store.state.cartAjax.cart_product.length -
                                      1
                                  "
                                  >just added</span
                                >
                              </div>
                              <NuxtLink
                                :to="`/product/${product.url_key}`"
                                class="product-name"
                                title="Lance Backpack"
                                >{{ product.name }}</NuxtLink
                              >
                              <div class="product-price">
                                <div class="wrap">
                                  <span class="price">
                                    ₹{{
                                      product.selling_price | numberWithCommas
                                    }}</span
                                  >
                                </div>
                              </div>
                              <div
                                class="product-color"
                                v-if="JSON.parse(product.size).color"
                              >
                                Color : {{ JSON.parse(product.size).color }}
                              </div>
                              <div class="product-qty">
                                Quantity: {{ product.qty }}
                              </div>
                              <!-- <div class="product-monogram"></div> -->
                            </div>
                            <!-- <a
                              href="#remove"
                              class="product-remove"
                              title="Remove Lance Backpack"
                              aria-label="Remove Lance Backpack"
                              ><span class="icon icon-x"></span
                            ></a> -->
                            <div style="clear: both"></div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="tm-footer">
                  <div class="cart-meta">
                    <div class="subtotal-label">Total Order</div>
                    <div class="subtotal-value">
                      ₹{{ $store.state.cartAjax.cart_total | numberWithCommas }}
                    </div>
                  </div>
                  <NuxtLink
                    to="/cart"
                    @click.native="emitFunction()"
                    class="tm-button tm-red-button checkBtn"
                    title="Go to shopping cart"
                    tabindex="0"
                    >Go to shopping cart</NuxtLink
                  ><a
                    @click.prevent="contShopping()"
                    class="
                      tm-button tm-white-button tm-panel-close
                      continueShopBtn
                    "
                    title="Continue shopping"
                    >Continue shopping</a
                  >
                </div>
              </div>
            </div>
            <div v-else>
              <a
                @click.prevent="emitFunction()"
                class="close"
                title="close"
                aria-label="close"
                ><span class="icon icon-x"></span
              ></a>
              <h3>phew! your cart is empty</h3>
            </div>
          </div>
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
      this.$parent.toogleCart();
    },
    contShopping() {
      this.$router.push("/");
      this.emitFunction();
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
    "$store.state.cartAjax.cart_page_message": function () {
      if (
        this.$store.state.cartAjax.cart_page_message != "" &&
        this.$store.state.cartAjax.cart_page_message != null
      ) {
        this.$toast.open(this.$store.state.cartAjax.cart_page_message);
        this.$store.commit("cartAjax/removePageMessage", {
          data: "",
        });
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
};
</script>

<style>
.cart-page.active {
  top: 47px;
  display: block;
}
.cart-page.active .tm-panel-container {
  right: 0;
}
.cart-page {
  display: none;
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 955;
  color: #555;
  text-decoration: none;
  font-weight: 400;
  font-family: "Proxima Nova", proxima-nova, arial, "Hiragino Sans GB",
    "Microsoft Yahei", sans-serif;
}
.cart-page .tm-mask {
  position: absolute;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  cursor: pointer;
}
.cart-page .tm-panel-container {
  overflow-y: scroll;
}
.cart-page .tm-panel-container {
  background: #fff;
  position: absolute;
  right: -100%;
  width: 375px;
  height: 100%;
}
.cart-page .tm-panel-container .tm-wrapper {
  padding: 20px 30px 30px;
}

.cart-page #tm-panel-mini-cart .tm-header {
  position: relative;
  text-align: center;
  color: #000;
}
.cart-page #tm-panel-mini-cart .tm-header .title {
  text-align: center;
  margin-bottom: 0;
  border-bottom: 2px solid #ccc;
  font-size: 18px;
  padding-bottom: 10px;
  /* margin-bottom: 15px; */
  text-transform: none;
  font-weight: 600;
}
.cart-page .tm-panel-container .tm-wrapper .tm-panel .tm-header .sub {
  /* display: inline-block;
  font-size: 15px;
  margin-bottom: 9px; */
}
.cart-page #tm-panel-mini-cart .tm-header .close {
  display: block;
  position: absolute;
  line-height: 1;
  color: #ccc;
  width: 18px;
  height: 18px;
  top: -10px;
  right: -20px;
}
.cart-page #tm-panel-mini-cart .tm-header .close .icon-x {
  vertical-align: top;
  font-size: 18px;
}
.scroll {
  position: relative;
  overflow: hidden;
  width: 100%;
  height: auto;
  min-height: 0px;
  max-height: 600px;
  width: 320px !important;
}
.scroll-inner {
  position: relative;
  overflow: scroll;
  margin-right: -17px;
  margin-bottom: -17px;
  min-height: 17px;
  max-height: 600px;
}

.cart-page #tm-panel-mini-cart .tm-content .cart-products {
  margin: 0;
  padding: 0;
  max-width: 300px;
}
.cart-page #tm-panel-mini-cart .tm-content .cart-products .cart-product {
  list-style: none;
  position: relative;
  border-bottom: 1px solid #ebebeb;
}
.cart-page
  #tm-panel-mini-cart
  .tm-content
  .cart-products
  .cart-product
  .cart-item
  .product-image {
  width: 100px;
  box-sizing: content-box;
  padding: 10px 30px 0 0;
}
.cart-page
  #tm-panel-mini-cart
  .tm-content
  .cart-products
  .cart-product
  .cart-item
  .product-image
  img {
  width: 100%;
}
.cart-page
  #tm-panel-mini-cart
  .tm-content
  .cart-products
  .cart-product
  .cart-item
  .product-details,
.cart-page
  #tm-panel-mini-cart
  .tm-content
  .cart-products
  .cart-product
  .cart-item
  .product-image {
  float: left;
  display: inline-block;
}
.cart-page
  #tm-panel-mini-cart
  .tm-content
  .cart-products
  .cart-product
  .cart-item
  .product-details {
  max-width: 170px;
  text-transform: none;
  padding-top: 8px;
}
.cart-page
  #tm-panel-mini-cart
  .tm-content
  .cart-products
  .cart-product
  .cart-item
  .product-details
  .product-badge
  .badge-added {
  background: #ccc;
  text-transform: uppercase;
  color: #fff;
  font-size: 11px;
  font-weight: 700;
  padding: 3px 8px;
  /* display: none; */
}
.cart-page
  #tm-panel-mini-cart
  .tm-content
  .cart-products
  .cart-product
  .cart-item
  .product-details
  .product-name {
  padding: 5px 7px 3px 0;
  display: inline-block;
  word-break: break-all;
}
.cart-page
  #tm-panel-mini-cart
  .tm-content
  .cart-products
  .cart-product
  .cart-item
  .product-details
  .product-name,
.cart-page
  #tm-panel-mini-cart
  .tm-content
  .cart-products
  .cart-product
  .cart-item
  .product-details
  .product-price {
  font-size: 13px;
  color: #222;
}
.product-details .product-name {
  font-weight: 400;
  font-size: 10px;
  color: #777;
  padding-top: 3px;
  font-family: proxima-nova, sans-serif;
  letter-spacing: 0.06em;
}
.cart-page
  #tm-panel-mini-cart
  .tm-content
  .cart-products
  .cart-product
  .cart-item
  .product-details
  .product-collection {
  font-size: 10px;
  color: #777;
  text-transform: uppercase;
  padding-bottom: 6px;
}
.cart-page
  #tm-panel-mini-cart
  .tm-content
  .cart-products
  .cart-product
  .cart-item
  .product-details
  .product-price {
  padding-bottom: 8px;
}
.cart-page
  #tm-panel-mini-cart
  .tm-content
  .cart-products
  .cart-product
  .cart-item
  .product-details
  .product-color,
.cart-page
  #tm-panel-mini-cart
  .tm-content
  .cart-products
  .cart-product
  .cart-item
  .product-details
  .product-monogram,
.cart-page
  #tm-panel-mini-cart
  .tm-content
  .cart-products
  .cart-product
  .cart-item
  .product-details
  .product-qty {
  padding-bottom: 9px;
}
.cart-page
  #tm-panel-mini-cart
  .tm-content
  .cart-products
  .cart-product
  .cart-item
  .product-details
  .product-color,
.cart-page
  #tm-panel-mini-cart
  .tm-content
  .cart-products
  .cart-product
  .cart-item
  .product-details
  .product-monogram,
.cart-page
  #tm-panel-mini-cart
  .tm-content
  .cart-products
  .cart-product
  .cart-item
  .product-details
  .product-monogram
  .description,
.cart-page
  #tm-panel-mini-cart
  .tm-content
  .cart-products
  .cart-product
  .cart-item
  .product-details
  .product-qty {
  font-size: 11px;
  color: #777;
  letter-spacing: 0.5px;
}
.cart-page
  #tm-panel-mini-cart
  .tm-content
  .cart-products
  .cart-product
  .cart-item
  .product-remove {
  width: 12px;
  height: 12px;
  position: absolute;
  right: 0;
  top: 3px;
  line-height: 1;
  color: #ccc;
  /* display: none; */
}
.cart-page #tm-panel-mini-cart .tm-footer {
  border-top: 2px solid #ccc;
  text-align: center;
  padding: 29px 0 5px;
  padding-top: 14px;
}
.cart-page #tm-panel-mini-cart .tm-footer .cart-meta {
  padding-bottom: 14px;
}
.cart-page #tm-panel-mini-cart .tm-footer .cart-meta .subtotal-label {
  text-align: left;
  font-size: 12px;
  color: #555;
  font-weight: 700;
  text-transform: uppercase;
}
.cart-page #tm-panel-mini-cart .tm-footer .cart-meta .subtotal-value {
  text-align: right;
  font-size: 13px;
  color: #222;
}
.cart-page #tm-panel-mini-cart .tm-footer .cart-meta .subtotal-label,
.cart-page #tm-panel-mini-cart .tm-footer .cart-meta .subtotal-value {
  width: 49%;
  display: inline-block;
}
.cart-page .tm-button.tm-red-button {
  background-color: #c41e3a;
  color: #fff;
}
.cart-page .tm-button {
  display: inline-block;
  width: 100%;
  height: 40px;
  line-height: 40px;
  color: #fff;
  text-align: center;
  background-color: #222;
  font-weight: 700;
  -webkit-border-radius: 0;
  -o-border-radius: 0;
  border-radius: 0;
  position: relative;
  font-size: 14px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.cart-page #tm-panel-mini-cart .tm-footer .tm-red-button {
  margin-bottom: 8px;
}
.cart-page .tm-button.tm-white-button {
  background-color: #fff;
  color: #222;
  border: 2px solid #222;
  font-size: 14px;
  line-height: 38px;
}
.cart-page .tm-button.tm-white-button:hover {
  color: #c41e3a;
}
@media only screen and (max-width: 767px) {
}
</style>
