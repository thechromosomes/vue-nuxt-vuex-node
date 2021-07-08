<template>
  <div>
    <client-only>
      <div class="cart_page">
        <div class="freeShipMessage-container">
          <div class="freeShipMessage">
            <h2 class="heading">
              <a
                href="#"
                title="Continue shopping"
                @click.prevent="contShopping()"
              >
                &lt; Continue shopping</a
              >
            </h2>
            <div class="shipping-return-header">Free shipping</div>
          </div>
        </div>

        <div
          class="empty_cart"
          v-if="$store.state.cartAjax.cart_product.length == 0"
        >
          <p>Shopping cart is empty</p>
          <img
            src="@/assets/images/empty-cart.png"
            alt="empty_cart"
            width="200px"
          />
        </div>

        <div
          class="cart-container"
          v-if="$store.state.cartAjax.cart_product.length != 0"
        >
          <div class="cart_box">
            <div class="row">
              <div class="col-md-8 col-lg-8 col-12">
                <h2 class="heading">
                  Shopping Cart ({{
                    $store.state.cartAjax.cart_product.length
                  }})
                </h2>
                <div
                  class="row-no-stack hide-mob"
                  id="cart-items-headers-container"
                >
                  <div class="cart-items-headers row" role="row">
                    <div class="col-6" role="gridcell" tabindex="-1">Item</div>
                    <div class="col-3 p-0" role="gridcell" tabindex="-1">
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
                    <div class="col-12 col-md-6 cart-item-detail">
                      <div class="item">
                        <div class="left-item">
                          <a :href="`/product/${product.url_key}`">
                            <img
                              :src="product.image"
                              alt="International Expandable 4 Wheeled Carry-On"
                              title="International Expandable 4 Wheeled Carry-On"
                            />
                          </a>
                        </div>
                        <div class="right-item">
                          <a
                            :href="`/product/${product.url_key}`"
                            class="ledger-prod-name"
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
                          <div class="cart-item-status hide-desk mt-4">
                            <div class="value item-price price-strike">
                              ₹{{ product.selling_price | numberWithCommas }}
                            </div>
                            <!-- <div class="value item-price discounted ">
                          ₹,743.00
                        </div> -->
                          </div>
                          <div class="cart-item-totals hide-desk">
                            <p>₹{{ product.row_total | numberWithCommas }}</p>
                          </div>
                          <div class="ledger-prod-actions">
                            <span class="link edit-link hide-mob">
                              <a
                                class="cta quick-view-link"
                                style="cursor: pointer"
                                @click.prevent="toggleEditCart(product, index)"
                                >Edit</a
                              >
                            </span>
                            <span class="spacer hide-mob">|</span>
                            <span class="link delete-link">
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
                    <div class="col-3 cart-item-status hide-mob">
                      <div class="cart-item-status">
                        <div class="value item-price price-strike">
                          ₹{{ product.selling_price | numberWithCommas }}
                        </div>
                        <!-- <div class="value item-price discounted ">
                          ₹,743.00
                        </div> -->
                      </div>
                    </div>
                    <div class="col-3 span2 cart-item-totals hide-mob">
                      <p>₹{{ product.row_total | numberWithCommas }}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-4 col-lg-4 col-12 p-0">
                <div class="right-box">
                  <h2 class="heading">Order Summary</h2>
                  <div class="cart-mobile">
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
                              $store.state.cartAjax.cart_total
                                | numberWithCommas
                            }}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div class="cart-mobile-btn">
                      <button
                        class="btn checkout"
                        @click.prevent="() => $router.push('/checkout')"
                      >
                        Checkout
                      </button>
                    </div>
                  </div>

                  <div class="cart-service hide-mob">
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
                    </div>
                  </div>

                  <div class="accordion-section">
                    <a
                      class="accordion-section-title"
                      style="cursor: pointer"
                      :class="{ open: returnPolice }"
                      @click.prevent="() => (returnPolice = !returnPolice)"
                    >
                      Return Policy</a
                    >
                    <div id="accordion-4" v-show="returnPolice">
                      <div class="content">
                        <div class="ReturnPolicySpot cart-accordion-spot">
                          <p>
                            {{
                              $store.state.cartAjax.cart_product[0]
                                .shipping_returns
                            }}
                          </p>
                          <p></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- edit cart  -->
        <div class="editcart_page" v-if="editCart">
          <div class="dark-overly">
            <div class="edit_cart_info">
              <div class="promotional-badge">
                <div class="label-arrow-up"></div>
                <div class="promotional-msg">EXCLUSIVE</div>
              </div>

              <div class="edit_product_info">
                <div class="pro-img">
                  <div class="img-box w-75 m-auto">
                    <img
                      :src="
                        $store.state.cartAjax.cart_product[editCartIndex].image
                      "
                      alt="img"
                      class="w-100"
                    />
                  </div>
                </div>
                <div class="pro-info">
                  <h4>
                    {{ $store.state.cartAjax.cart_product[editCartIndex].name }}
                  </h4>
                  <div class="product-subtitle">
                    <div class="product-category">
                      {{
                        $store.state.cartAjax.cart_product[editCartIndex]
                          .category
                      }}
                      <span class="view-entire-collection"
                        ><NuxtLink
                          :to="`/product/${$store.state.cartAjax.cart_product[editCartIndex].url_key}`"
                          class="pdpInernalLink"
                        >
                          View the entire series</NuxtLink
                        ></span
                      >
                    </div>
                    <!-- <div class="product-style">
                      <span class="label">Style: </span>
                      <span class="cart-quick-style">1358735107</span>
                    </div> -->
                  </div>

                  <div class="price-column">
                    <!-- <span class="price price-old">HK$5,990.00</span> -->
                    <span class="price price-new"
                      >₹{{
                        $store.state.cartAjax.cart_product[editCartIndex]
                          .selling_price | numberWithCommas
                      }}</span
                    >
                  </div>
                  <span class="stock-message">
                    <span itemprop="inventoryLevel" id="invetory_level">
                      <span class="instock title-font uppercase">In Stock</span
                      ><span class="stock-num"
                        >Hurry, only
                        {{
                          $store.state.cartAjax.cart_product[editCartIndex]
                            .max_qty
                        }}
                        left!</span
                      >
                    </span>
                  </span>
                  <div class="quantity">
                    <strong class="proxima_bold mr-2">Quantity: </strong>
                    <div class="qtyAdjustBox">
                      <a
                        class="minus"
                        :class="{
                          disable:
                            addToCartValClassRender[editCartIndex] == 1 ||
                            $store.state.cartAjax.cart_product[editCartIndex]
                              .qty == 1,
                        }"
                        @click.prevent="
                          addCartVal(
                            'minus',
                            $store.state.cartAjax.cart_product[editCartIndex],
                            editCartIndex
                          )
                        "
                        >-</a
                      >
                      <input
                        :value="
                          $store.state.cartAjax.cart_product[editCartIndex].qty
                        "
                        disabled
                        class="itemQty"
                      />
                      <a
                        class="plus"
                        :class="{
                          disable:
                            addToCartValClassRender[editCartIndex] ==
                              $store.state.cartAjax.cart_product[editCartIndex]
                                .max_qty ||
                            addToCartValClassRender[editCartIndex] == 5 ||
                            $store.state.cartAjax.cart_product[editCartIndex]
                              .qty ==
                              $store.state.cartAjax.cart_product[editCartIndex]
                                .max_qty,
                        }"
                        @click.prevent="
                          addCartVal(
                            'add',
                            $store.state.cartAjax.cart_product[editCartIndex],
                            editCartIndex
                          )
                        "
                        >+</a
                      >
                    </div>
                  </div>
                  <div class="update_cartBtn">
                    <button
                      type="submit"
                      @click="() => (editCart = false)"
                      class="btn add-to-cart-"
                    >
                      Update shopping cart
                    </button>
                  </div>
                  <a
                    @click.prevent="() => (editCart = false)"
                    tabindex="0"
                    class="close-overlay close-slider"
                    aria-label="Close"
                    ><span class="icon icon-x"></span
                  ></a>
                  <div class="view-details">
                    <NuxtLink
                      :to="`/product/${$store.state.cartAjax.cart_product[editCartIndex].url_key}`"
                      >View details</NuxtLink
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- edit cart  end-->
      </div>
    </client-only>
  </div>
</template>

<script>
export default {
  data() {
    return {
      addToCartVal: 0,
      applied_coupon: "",
      editCart: false,
      editCartIndex: "",
      addToCartValClassRender: [],
      returnPolice: false,
    };
  },

  methods: {
    contShopping() {
      this.$router.push("/");
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
            vm: this,
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
        this.$globalError(`error from remove cart >>>> ${error}`);
        console.log("error from remove cart >>>", error);
      }
    },

    toggleEditCart(item, index) {
      this.editCartIndex = index;
      this.addToCartVal = item.qty;
      this.editCart = true;
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
            vm: this,
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

    addCartVal(cartval, product, index) {
      this.addToCartVal = product.qty;
      this.addToCartValClassRender[index] = product.qty;
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
          this.addToCartValClassRender[index] += 1;
        } else if (cartval === "minus") {
          this.addToCartVal -= 1;
          this.addToCartVal === 0 ? (this.addToCartVal = 1) : this.addToCartVal;

          this.addToCartValClassRender[index] -= 1;
          this.addToCartValClassRender[index] === 0
            ? (this.addToCartValClassRender[index] = 1)
            : this.addToCartValClassRender[index];
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
.right-box .cart-mobile {
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

.empty_cart {
  max-width: 100%;
  width: 300px;
  text-align: center;
  margin: 20px auto;
}
.empty_cart p {
  margin: 10px 0;
  font-size: 18px;
  letter-spacing: 0.5px;
  color: #555;
}
.quantity {
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: flex-start;
}
.update_cartBtn {
  width: 100%;
}
.update_cartBtn button {
  font-size: 13px;
  font-weight: 600;
  text-transform: capitalize;
  text-align: center;
  padding: 0 12px;
  background-color: #c41e3a;
  border: none;
  color: #fff;
  border-radius: 0;
  margin-top: 20px;
  height: 36px;
  line-height: 34px;
}
.close-overlay {
  width: 20px;
  height: 20px;
  position: absolute;
  top: 10px;
  right: 10px;
  color: #fff;
  background: #222;
  cursor: pointer;
  font-size: 12px;
  padding-left: 4px;
}

.accordion-section {
  width: 100%;
  position: relative;
  border-top: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
  margin-bottom: 20px;
}
.accordion-section a.accordion-section-title {
  padding: 8px 10px 7px 20px;
  font-size: 15px;
  letter-spacing: 0.04em;
  color: #222;
  display: block;
}
.accordion-section a.accordion-section-title:before {
  position: absolute;
  left: 3px;
  top: 13px;
  content: "\e819";
  font-family: tumi-icon-ft !important;
  font-size: 8px;
}

.accordion-section.open a.accordion-section-title:before {
  content: "\e81a";
  font-family: tumi-icon-ft !important;
}
.ReturnPolicySpot h3 {
  font-size: 16px;
  font-weight: bold;
}
.ReturnPolicySpot p {
  font-size: 14px;
}

.view-details {
  width: 100%;
  margin-top: 15px;
  text-align: right;
}
.view-details a {
  font-size: 12px;
  letter-spacing: 0.5px;
  text-decoration: underline;
  color: #222;
}
.view-details a:hover {
  color: #c41e3a;
}
@media only screen and (max-width: 991px) {
}
@media only screen and (max-width: 767px) {
  .accordion-section {
    display: none;
  }
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
  .right-box .cart-mobile-btn {
    background: #fff;
    padding: 0 10px;
  }
  .right-box .cart-mobile {
    width: 100%;
    max-width: 100%;
    border: none;
    padding: 0;
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

/* disabel button */
.plus.disable {
  pointer-events: none;
  opacity: 0.5;
}
.minus.disable {
  pointer-events: none;
  opacity: 0.5;
}
.empty-head {
  margin-top: -46px;
  margin-bottom: 40px;
}
</style>
