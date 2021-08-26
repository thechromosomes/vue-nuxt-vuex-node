<template>
  <header class="header sticky" :class="[scrollPosition > 30 ? 'fixed' : '']">
    <!-- vue loader -->
    <div class="page-loader" v-if="$store.state.pageLoader">
      <div class="lds-ripple">
        <div></div>
        <div></div>
      </div>
    </div>
    <section class="top-nav">
      <div class="container-fluid">
        <div class="row">
          <div class="offset-md-4 col-sm-8 cart-search-both">
            <div class="top-service-nav">
              <ul class="">
                <li>
                  <Nuxt-link
                    to="/cms/tumi-club"
                    target="_blank"
                    class="proxima_semi-bold"
                  >
                    <i class="p-r-t--1 sprite-tm-icon-crown"></i> TUMI
                    Exclusives Club</Nuxt-link
                  >
                </li>
                <li>
                  <a
                    href="/storelocator"
                    target="_blank"
                    class="proxima_semi-bold"
                  >
                    <i class="p-r-t--1 sprite-loc" alt="Store Locator"></i>
                    Store Locator</a
                  >
                </li>
                <li>
                  <a
                    rel="nofollow"
                    href="https://v1.live800.com/live800/chatClient/chatbox.jsp?companyID=1103215&configID=46295&jid=1780232594&s=1&lan=en "
                    target="_blank"
                    class="proxima_semi-bold"
                  >
                    <i
                      class="p-r-t--1 sprite-chat"
                      alt="Online Customer Service"
                    ></i>
                    Online Customer Service</a
                  >
                </li>
                <li>
                  <a
                    rel="nofollow"
                    href="tel:800961974"
                    class="proxima_semi-bold"
                  >
                    <i class="p-r-t--1 sprite-phone" alt="hotline"></i>
                    800-961-974</a
                  >
                </li>
              </ul>
              <div class="login-cart-div">
                <ul>
                  <li
                    class="
                      login-li
                      navbar-toggler
                      pull-xs-right
                      log-and-ragester
                      header-log-ragister
                    "
                    id="navbarSideButton"
                    type="button"
                  >
                    <NuxtLink
                      v-if="
                        $store.state.cartAjax.customer_id != null &&
                        $store.state.cartAjax.customer_id != '' &&
                        $store.state.cartAjax.customer_session != '' &&
                        $store.state.cartAjax.customer_session != null
                      "
                      to="/Dashboard"
                      class="proxima_semi-bold"
                      >Account</NuxtLink
                    >
                    <nuxt-link class="proxima_semi-bold" v-else to="/login"
                      >Login/Register</nuxt-link
                    >
                  </li>
                  <li class="wish-list-icon">
                    <NuxtLink to="/wishlist">
                      <img src="~/assets/images/heart.1b640f1.png" alt="logo" />
                      <span
                        class="count"
                        v-if="
                          Object.keys($store.state.cartAjax.wishlist).length !=
                          0
                        "
                        >{{
                          $store.state.cartAjax.wishlist.product.split(",")
                            .length
                        }}
                      </span>
                      <span v-else class="count"> 0 </span>
                    </NuxtLink>
                  </li>
                  <li>
                    <a @click.prevent="toogleCart()" class="text-red cart-icon">
                      <span class="carticon-add" aria-hidden="true">
                        <img src="~assets/images/cart.png" />
                        <span class="text-red count-cart">{{
                          $store.state.cartAjax.cart_product.length
                        }}</span>
                      </span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-sm-12 text-center">
            <NuxtLink to="/">
              <div class="middle-logo">
                <img src="~assets/images/logo.png" alt="logo" />
              </div>
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>
    <nav class="nav-header">
      <div class="wrapper">
        <div class="show-mob" @click="() => (showMenu = !showMenu)">
          <label for="menu-btn" class="btn menu-btn"
            ><span
              class="icon icon-hamburger-menu-lg"
              :class="showMenu ? 'crose' : 'icon-hamburger-menu-lg'"
            ></span
          ></label>
        </div>
        <div class="logo">
          <NuxtLink to="/"
            ><img src="~assets/images/logo.png" alt="logo"
          /></NuxtLink>
        </div>
        <div :class="showMenu ? 'overly-bg.show' : 'overly-bg'">
          <ul class="nav-links">
            <li
              class="mob-item-res"
              v-for="(item, index) in header"
              :key="index"
            >
              <NuxtLink
                v-if="item.menu_url_key == 'collections'"
                :to="`/clp/${item.menu_url_key}`"
                class="desktop-item proxima_semi-bold"
                >{{ item.name }}</NuxtLink
              >
              <NuxtLink
                v-else-if="
                  item.menu_url_key == 'accessories' ||
                  item.menu_url_key == 'luggage'
                "
                :to="`/clp-cms/${item.menu_url_key}`"
                class="desktop-item proxima_semi-bold"
                >{{ item.name }}</NuxtLink
              >
              <a v-else class="desktop-item proxima_semi-bold">{{
                item.name
              }}</a>
              <input type="checkbox" id="showMega" />
              <label
                for="showMega"
                class="mobile-item proxima_semi-bold"
                @click="updateActive(index)"
                :class="isActive == index ? 'isActive' : ''"
              >
                <NuxtLink
                  v-if="item.menu_url_key == 'collections'"
                  :to="`/clp/${item.menu_url_key}`"
                  >{{ item.name }}</NuxtLink
                >
                <NuxtLink
                  v-else-if="
                    item.menu_url_key == 'accessories' ||
                    item.menu_url_key == 'luggage'
                  "
                  :to="`/clp-cms/${item.menu_url_key}`"
                  class="proxima_semi-bold"
                  >{{ item.name }}</NuxtLink
                >
                <a v-else>{{ item.name }}</a>
              </label>
              <div
                class="mega-box"
                :class="isActive == index ? 'isActive' : ''"
              >
                <div class="content">
                  <div class="row mega-mt first-row">
                    <h3 class="proxima_semi-bold hide-mob">{{ item.name }}</h3>
                    <div class="under-line hide-mob"></div>
                    <ul
                      class="mega-links"
                      v-if="item.childs && item.childs.length > 0"
                    >
                      <li
                        v-for="(childItem, childIndex) in item.childs"
                        :key="childIndex"
                      >
                        <Nuxt-link
                          class="proxima_regular"
                          :to="`/collections/${childItem.menu_url_key}/`"
                          v-if="
                            childItem.landing_page == '' ||
                            childItem.landing_page == null
                          "
                          @click.native="() => (showMenu = false)"
                          >{{ childItem.name }}</Nuxt-link
                        >
                        <Nuxt-link
                          class="proxima_regular"
                          :to="`/cms/${childItem.landing_page}`"
                          v-if="
                            childItem.landing_page != '' &&
                            childItem.landing_page != null
                          "
                          >{{ childItem.name }}</Nuxt-link
                        >
                      </li>
                    </ul>
                  </div>
                  <div class="row image-row hide-mob">
                    <img src="~assets/images/mega-menu-img1.jpg" />
                    <a
                      href="#"
                      class="mega-image-link color-hover proxima_semi-bold"
                      >{{ item.name }}</a
                    >
                  </div>
                </div>
              </div>
            </li>

            <li class="hide-mob drop-serch-list">
              <div class="header-search hidee-fix-tab">
                <input
                  type="text"
                  name=""
                  v-model="searchInput"
                  v-debounce:500ms="stSearch"
                  class="form-control tab-ico"
                  placeholder="Search"
                />
              </div>
            </li>
            <div class="show-mob">
              <ul class="other-nav-links">
                <li>
                  <NuxtLink
                    v-if="
                      $store.state.cartAjax.customer_id != null &&
                      $store.state.cartAjax.customer_id != '' &&
                      $store.state.cartAjax.customer_session != '' &&
                      $store.state.cartAjax.customer_session != null
                    "
                    to="/Dashboard"
                    class="proxima_regular"
                    >Account</NuxtLink
                  >
                  <nuxt-link class="proxima_regular" v-else to="/login"
                    >Login/Register</nuxt-link
                  >

                  <!-- -----------------ragestration process------------start  -->
                </li>
                <li>
                  <a href="" class="proxima_regular">TUMI Exclusives Club</a>
                </li>
                <li>
                  <NuxtLink to="/storelocator" class="proxima_regular"
                    >Store Locator</NuxtLink
                  >
                </li>
                <li>
                  <a href="" class="proxima_regular">Online Customer Service</a>
                </li>
                <li>
                  <a href="tel:800-961-974" class="proxima_regular"
                    >800-961-974<span
                      class="icon-maywehelp-call text-right"
                    ></span
                  ></a>
                </li>
              </ul>
            </div>
          </ul>
        </div>
        <div class="login-cart-div">
          <ul class="show-on-fixed-header">
            <li
              class="login-li navbar-toggler pull-xs-right log-and-ragester"
              id="navbarSideButton"
              type="button"
            >
              <NuxtLink
                v-if="
                  $store.state.cartAjax.customer_id != null &&
                  $store.state.cartAjax.customer_id != '' &&
                  $store.state.cartAjax.customer_session != '' &&
                  $store.state.cartAjax.customer_session != null
                "
                to="/Dashboard"
                class="proxima_semi-bold"
                >Account</NuxtLink
              >
              <nuxt-link class="proxima_semi-bold" v-else to="/login"
                >Login/Register</nuxt-link
              >
            </li>
            <li>
              <span
                class="icon-search-lg text-red"
                @click="togglSshowSearch()"
              ></span>
            </li>
            <li class="mobile-search-fun">
              <a class="text-red">
                <span class="icon text-red" aria-hidden="true">
                  <div class="header-search mob-search-down" v-if="showSearch">
                    <input
                      type="text"
                      ref="headerSearchBar"
                      name=""
                      v-model="searchInput"
                      v-debounce:500ms="stSearch"
                      class="form-control"
                      placeholder="Search"
                    />
                  </div>
                </span>
              </a>
            </li>
            <li class="wish-list-icon">
              <NuxtLink to="/wishlist">
                <img src="~assets/images/heart.1b640f1.png" alt="logo" />
                <span
                  class="count"
                  v-if="Object.keys($store.state.cartAjax.wishlist).length != 0"
                  >{{
                    $store.state.cartAjax.wishlist.product.split(",").length
                  }}
                </span>
                <span v-else class="count"> 0 </span>
              </NuxtLink>
            </li>
            <li>
              <a @click.prevent="toogleCart()" class="text-red cart-icon"
                ><span aria-hidden="true" class="carticon-add"
                  ><img src="~assets/images/cart.png" />
                  <span class="text-red count-cart">{{
                    $store.state.cartAjax.cart_product.length
                  }}</span></span
                ></a
              >
            </li>
          </ul>
        </div>
      </div>
      <Cart v-if="$store.state.cartAjax.showHideCart" />
    </nav>
  </header>
</template>

<script>
import { mapState } from "vuex";
import Cart from "./Cart";

export default {
  components: { Cart },
  data() {
    return {
      scrollPosition: null,
      showMenu: false,
      close: false,
      isActive: -1,
      showSearch: false,
    };
  },
  async mounted() {
    // for sticky header
    window.addEventListener("scroll", this.updateScroll);
  },

  methods: {
    updateScroll() {
      this.scrollPosition = window.scrollY;
    },

    stSearch(val, e) {
      var name = /^(?!\s*$).+/;
      if (e.target.value.match(name)) {
        this.$store.commit("st_search", e.target.value);
      } else {
        this.$store.commit("st_search", "");
      }
    },

    togglSshowSearch() {
      this.showSearch = !this.showSearch;
      if (this.showSearch) {
        setTimeout(() => {
          this.$refs.headerSearchBar.focus();
        }, 0);
      }
    },

    toogleCart() {
      this.$store.commit("cartAjax/showHideCart");
    },
    updateActive(index) {
      if (this.isActive == index) {
        this.isActive = -1;
      } else {
        this.isActive = index;
      }
    },
  },

  computed: {
    ...mapState(["header"]),
    searchInput: {
      get() {
        // to update search input on page refresh
        if (this.$route.query.q != this.$store.state.list.search_input) {
          return this.$route.query.q;
        } else {
          return this.$store.state.list.search_input;
        }
      },
      set(value) {
        return;
      },
    },
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.updateScroll);
  },
};
</script>
<style scoped>
@import url("@/assets/css/pages-css/loader.css");
</style>
