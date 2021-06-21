<template>
  <div>
    <client-only>
      <div class="cart_page">
        <div class="freeShipMessage-container">
          <div class="freeShipMessage ">
            <h2 class="heading ">
              <a href="#" title="Continue shopping"> &lt; Continue shopping</a>
            </h2>
            <div class="shipping-return-header ">
              Free shipping
            </div>
          </div>
        </div>

        <div class="cart-container ">
          <div class="cart_box">
            <div class="row">
              <div class="col-md-8 col-lg-8 col-12">
                <h2 class="heading">
                  Shopping Cart ({{
                    $store.state.cartAjax.cart_product.length
                  }})
                </h2>
                <div
                  class="row-no-stack hide-mob "
                  id="cart-items-headers-container"
                >
                  <div class="cart-items-headers row" role="row">
                    <div class="col-6 " role="gridcell" tabindex="-1">
                      Item
                    </div>
                    <div class="col-3 p-0 " role="gridcell" tabindex="-1">
                      Item Price
                    </div>
                    <div class="col-3 p-0" role="gridcell" tabindex="-1">
                      Total Price
                    </div>
                  </div>
                </div>
                <!-- cart-items -->

                <div
                  class="cart-items"
                  v-for="(product, index) in $store.state.cartAjax.cart_product"
                  :key="index"
                >
                  <div class="cart-item-details row">
                    <div class="col-12 col-md-6  cart-item-detail">
                      <div class="item">
                        <div class="left-item">
                          <a :href="`/collections/product/${product.url_key}`">
                            <img
                              :src="product.image"
                              alt="International Expandable 4 Wheeled Carry-On"
                              title="International Expandable 4 Wheeled Carry-On"
                            />
                          </a>
                        </div>
                        <div class="right-item">
                          <a
                            :href="`/collections/product/${product.url_key}`"
                            class="ledger-prod-name "
                            >{{ product.name }}
                          </a>
                          <small> {{ product.category }}</small>
                          <p v-if="JSON.parse(product.size).size">
                            <span>STYLE#:</span>
                            {{ JSON.parse(product.size).size }}
                          </p>
                          <p v-if="JSON.parse(product.size).color">
                            <span>COLOR:</span>
                            {{ JSON.parse(product.size).color }}
                          </p>
                          <div class=" cart-item-status hide-desk mt-4">
                            <div class="value item-price price-strike">
                              ₹{{ product.selling_price | numberWithCommas }}
                            </div>
                            <!-- <div class="value item-price discounted ">
                          ₹,743.00
                        </div> -->
                          </div>
                          <div class=" cart-item-totals  hide-desk ">
                            <p>₹{{ product.row_total | numberWithCommas }}</p>
                          </div>
                          <div class="ledger-prod-actions ">
                            <span class="link edit-link hide-mob">
                              <a class="cta quick-view-link " href="#">Edit</a>
                            </span>
                            <span class="spacer hide-mob">|</span>
                            <span class="link delete-link ">
                              <a
                                class="cta"
                                @click.prevent="removeCartItem(product)"
                                href="#"
                                >Remove</a
                              >
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-3 cart-item-status hide-mob ">
                      <div class=" cart-item-status">
                        <div class="value item-price price-strike">
                          ₹{{ product.selling_price | numberWithCommas }}
                        </div>
                        <!-- <div class="value item-price discounted ">
                          ₹,743.00
                        </div> -->
                      </div>
                    </div>
                    <div class="col-3 span2 cart-item-totals hide-mob ">
                      <p>₹{{ product.row_total | numberWithCommas }}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-4 col-lg-4 col-12 p-0">
                <div class="right-box">
                  <h2 class="heading">Order Summary</h2>
                  <div class="cart-summry">
                    <div class="cart-total">
                      <div class="left-item">
                        <p>Subtotal</p>
                      </div>
                      <div class="right-item">
                        <p>
                          <span
                            >₹{{
                              $store.state.cartAjax.cart_total
                                | numberWithCommas
                            }}</span
                          >
                        </p>
                      </div>
                    </div>
                    <div class="cart-total">
                      <div class="left-item">
                        <p>Shipping</p>
                      </div>
                      <div class="right-item">
                        <p>
                          <span>Free</span>
                        </p>
                      </div>
                    </div>
                    <div class="cart-total">
                      <div class="left-item">
                        <p>Total Order</p>
                      </div>
                      <div class="right-item">
                        <p>
                          ₹{{
                            $store.state.cartAjax.cart_total | numberWithCommas
                          }}
                        </p>
                      </div>
                    </div>
                    <button
                      class="btn  checkout "
                      @click.prevent="() => $router.push('/checkout')"
                    >
                      Checkout
                    </button>
                  </div>

                  <div class="cart-service hide-mob ">
                    <h3 class="">Customer Service</h3>
                    <div class="tumi-customer">
                      <img src="~assets/images/phoneblack.png" alt="" />
                      <a href="tel:800-961-974"> 800-961-974</a>
                      <p class="help-text">Monday to Friday 9 : 00 - 18 : 00</p>
                    </div>
                    <div class="tumi-customer">
                      <img src="~assets/images/chatblack.png" alt="" />
                      <a href="javaScript:void(0)" title="TUMI LIVE CHAT">
                        TUMI LIVE CHAT</a
                      >
                      <p class="help-text">Monday to Friday 9 : 00 - 18 : 00</p>
                      <a class="contact-now" target="_blank" href="#">
                        Contact now&gt;
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </client-only>
  </div>
</template>

<script>
export default {
  data() {
    return {
      addToCartVal: 0,
      applied_coupon: ""
    };
  },

  methods: {
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
          params: form
        });
        if (response) {
          this.$store.commit("cartAjax/updateCartDetail", {
            error: null,
            data: response,
            vm: this
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
                      quantity: item.qty
                    }
                  ]
                }
              }
            });
          }
        } else {
          throw "no response from api";
        }
      } catch (error) {
        this.$globalError(`error from remove cart >>>> ${error}`);
        console.log("error from remove cart >>>", error);
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
          params: form
        });
        if (response) {
          this.$store.commit("cartAjax/updateCartDetail", {
            error: null,
            data: response,
            vm: this
          });
        } else {
          throw "no response from api";
        }
      } catch (error) {
        this.$globalError(
          `this is from cart checkout updateCart >>>> ${error}`
        );
        console.log("error", error);
      }
    },

    addCartVal(cartval, product) {
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
        var token;
        if (behave == "add" && this.applied_coupon == "") {
          this.$refs.applied_coupon.focus();
          return;
        }

        if (behave == "remove") {
          url = `/cart/remove-coupon`;
          token = this.$store.state.cartAjax.cart_token;
        }
        var form = {};
        form.cart_id = this.$store.state.cartAjax.cart_id;
        form.cart_session = this.$store.state.cartAjax.cart_session;
        if (behave == "add") {
          url = `/cart/assign-coupon`;
          token = this.$store.state.cartAjax.cart_token;
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
          token,
          params: form
        });

        if (response.success) {
          this.$store.commit("cartAjax/updateCartDetail", {
            error: null,
            data: response
          });
          this.$toast.open(response.message);
        } else {
          this.$toast.error(response.message);
        }
      } catch (error) {
        console.log("error form the add coupon foo >>", error);
      }
    }
  },
  watch: {
    "$store.state.cartAjax.cart_page_message": function() {
      if (
        this.$store.state.cartAjax.cart_page_message != "" &&
        this.$store.state.cartAjax.cart_page_message != null
      ) {
        this.$toast.open(this.$store.state.cartAjax.cart_page_message);
        this.$store.commit("cartAjax/removePageMessage", {
          data: ""
        });
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
};
</script>

<style scoped>
.cart_page {
  font-family: "Proxima Nova", proxima-nova, arial, "Hiragino Sans GB",
    "Microsoft Yahei", sans-serif;
}
.cart_page .freeShipMessage-container {
  width: 100%;
  background-color: #faf0f1;
  font-family: "Proxima Nova", proxima-nova, arial, "Hiragino Sans GB",
    "Microsoft Yahei", sans-serif;
}
.cart_page .freeShipMessage-container .freeShipMessage {
  text-align: center;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px 0;
  white-space: nowrap;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.cart_page .freeShipMessage-container .freeShipMessage h2 {
  color: #999;
  font-size: 12px;
  font-weight: 400;
  width: 40%;
  text-align: left;
  margin: 0;
  line-height: unset;
  text-transform: capitalize;
  letter-spacing: 0.5px;
}
.cart_page .freeShipMessage-container .freeShipMessage h2 a {
  color: #999;
}
.cart_page .freeShipMessage-container .freeShipMessage {
  color: #c42239;
  font-size: 15px;
  font-weight: 500;
}

.cart_page .cart-container {
  max-width: 1200px;
  padding: 0 33px;
  margin: 0 auto;
}
.cart_box .heading {
  font-size: 16px;
  color: #000;
  padding-top: 11px;
  margin-bottom: 9px;
  font-weight: 400;
  text-transform: none;
  font-family: "Proxima Nova", proxima-nova, arial, "Hiragino Sans GB",
    "Microsoft Yahei", sans-serif;
  letter-spacing: 0.5px;
}

.cart-items-headers {
  font-size: 13px;
  color: #222;
}
.cart-items-headers {
  border-bottom: 1px solid #ebebeb;
  padding: 10px 0;
}
.cart_page .cart-items .cart-item-details {
  width: 100%;
  border-bottom: 1px solid #ccc;
  padding: 39px 0 34px;
}

.cart_page .cart-items .cart-item-details .cart-item-detail {
  width: 100%;
}
.cart_page .cart-items .cart-item-details .cart-item-detail .item {
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
}

.cart_page .cart-items .cart-item-details .cart-item-detail .left-item {
  width: 40%;
}
.cart_page .cart-items .cart-item-details .cart-item-detail .right-item {
  width: 60%;
}
.cart_page
  .cart-items
  .cart-item-details
  .cart-item-detail
  .right-item
  a.ledger-prod-name {
  font-size: 14px;
  font-weight: 400;
  line-height: 14px;
  display: block;
  padding-bottom: 8px;
}
.cart_page .cart-items .cart-item-details .cart-item-detail .right-item small {
  font-weight: 600;
  font-size: 10px;
  padding-bottom: 4px;
  color: #777;
  font-family: proxima-nova, sans-serif;
  margin-top: -4px;
  display: block;
}
.cart_page .cart-items .cart-item-details .cart-item-detail .right-item p {
  padding-bottom: 5px;
  font-size: 12px;
  margin: 0;
  color: #777;
}
.cart_page .cart-items .cart-item-details .cart-item-detail .right-item p span {
  font-weight: 600;
  color: #555;
}

.cart_page
  .cart-items
  .cart-item-details
  .cart-item-detail
  .right-item
  .ledger-prod-actions {
  padding-top: 7px;
}
.cart_page
  .cart-items
  .cart-item-details
  .cart-item-detail
  .right-item
  .ledger-prod-actions
  a {
  font-size: 12px;
  font-weight: 400;
  color: #000;
  letter-spacing: 0.5px;
  text-decoration: underline;
}

.spacer {
  padding: 0 13px 0 11px;
  font-size: 12px;
}

.item-price {
  color: #222;
  font-size: 12px;
  font-family: proxima-nova, sans-serif;
  padding-bottom: 10px;
}
.cart-item-totals p {
  color: #222;
  font-size: 12px;

  font-weight: 600;
  font-family: proxima-nova, sans-serif;
}
.right-box {
  margin-left: 8%;
}
.right-box .cart-summry {
  border: 1px solid #ccc;
  padding: 15px 10px;
  max-width: 435px;
  font-weight: 400;
  font-size: 15px;
  letter-spacing: 0.025em;
  margin: 20px 0;
  text-transform: none;
  color: #666;
  width: 100%;
}

.right-box .cart-total {
  width: 100%;
  display: flex;
  padding: 5px 0;
}
.right-box .cart-total .left-item,
.right-box .cart-total .right-item {
  width: 50%;
}
.right-box .cart-total .right-item {
  text-align: right;
}
.right-box .cart-total .left-item p,
.right-box .cart-total .right-item p {
  font-size: 13px;
  color: #555;
  font-weight: 600;
}
.right-box .cart-total .right-item p span {
  font-weight: 400;
}

.checkout {
  background-color: #c41e3a;
  border: none;
  color: #fff;
  width: 100%;
  border-radius: 0;
  margin: 20px 0;
  font-size: 13px;
  padding: 10px;
}
.cart-service {
  margin-top: 20px;
  margin-bottom: 30px;
}
.cart-service h3 {
  margin-bottom: 10px;
  font-size: 15px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}
.cart-service .tumi-customer {
  margin-bottom: 20px;
}
.tumi-customer img {
  margin-right: 5px;
  height: 14px;
  width: auto;
  margin-top: -4px;
}
.cart-service .tumi-customer a {
  font-size: 14px;
  font-weight: 700;
}
.tumi-customer a {
  margin-bottom: 2px;
}
.cart-service .help-text {
  color: #999;
  margin-bottom: 5px;
}
.tumi-customer .help-text {
  margin-top: 2px;
  margin-left: 22px;
  font-size: 13px;
}
.cart-service .tumi-customer a.contact-now {
  font-size: 14px;
  font-weight: 100;
  margin-left: 22px;
  text-decoration: underline;
  letter-spacing: 0.5px;
}

@media only screen and (max-width: 991px) {
}
@media only screen and (max-width: 767px) {
  .cart_page .cart-items .cart-item-details .cart-item-detail .item {
    flex-direction: row-reverse;
  }
  .cart_page .freeShipMessage-container .freeShipMessage {
    flex-direction: column;
    justify-content: center;
  }
  .cart_page .freeShipMessage-container .freeShipMessage h2 {
    width: 100%;
    text-align: center;
  }
  .right-box .cart-summry {
    border: none;
    padding: 25px 0 0;
    width: 100%;
    max-width: 260px;
    margin: 0 auto;
  }
  .right-box {
    margin: 0;
    background: #ebebeb;
    margin-top: 20px;
  }
  .cart_page .cart-container {
    padding: 0 15px;
  }
  .cart_box .heading {
    text-align: center;
  }
}
</style>
