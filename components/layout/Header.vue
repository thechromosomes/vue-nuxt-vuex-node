<template>
  <header class="header sticky" :class="[scrollPosition > 30 ? 'fixed' : '']">
    <section class="top-nav">
      <div class="container-fluid">
        <div class="row">
          <div class="offset-md-4 col-sm-8 cart-search-both">
            <div class="top-service-nav">
              <ul class="">
                <li>
                  <a href="" target="_blank" class="proxima_semi-bold">
                    <i class="p-r-t--1 sprite-tm-icon-crown"></i> TUMI
                    Exclusives Club</a
                  >
                </li>
                <li>
                  <a href="#" target="_blank" class="proxima_semi-bold">
                    <i class="p-r-t--1 sprite-loc" alt="Store Locator"></i>
                    Store Locator</a
                  >
                </li>
                <li>
                  <a
                    rel="nofollow"
                    href=" "
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
                  <a rel="nofollow" href="" class="proxima_semi-bold">
                    <i class="p-r-t--1 sprite-phone" alt="hotline"></i>
                    800-961-974</a
                  >
                </li>
              </ul>
              <div class="login-cart-div">
                <ul>
                  <li
                    class="login-li navbar-toggler pull-xs-right log-and-ragester header-log-ragister"
                    id="navbarSideButton"
                    type="button"
                  >
                    <NuxtLink to="login" class="proxima_semi-bold"
                      >Login / Register</NuxtLink
                    >
                  </li>
                  <li class="wish-list-icon">
                    <NuxtLink to="/wishlist">
                      <img src="~assets/images/heart.1b640f1.png" alt="logo" />
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
                    <NuxtLink to="/cart" class="text-red cart-icon">
                      <span class="carticon-add" aria-hidden="true">
                        <img src="~assets/images/cart.png" />
                        <span class="text-red count-cart">{{
                          $store.state.cartAjax.cart_product.length
                        }}</span>
                      </span>
                    </NuxtLink>
                  </li>
                </ul>
                <div class="login-rages-overly">
                  <div
                    class="right-login-menu navbar-side login-process"
                    id="navbarSide"
                  >
                    <div class="overly-pos navbar-side-item">
                      <h3 class="proxima_bold">My Account</h3>
                      <h4 class="proxima_regular">
                        Log in to your TUMI.HK account
                      </h4>
                      <div class="form-login-div">
                        <div class="container">
                          <form method="" class="">
                            <div class="row" style="margin: 0px">
                              <div class="col-sm-12 label-add pd-remove">
                                <label class="proxima_regular">phone</label>
                                <div class="row">
                                  <div class="col-sm-4 col-4">
                                    <div class="option-wrp">
                                      <div class="option-select">
                                        <div class="select-erap">
                                          <div class="select-view">
                                            <div
                                              class="select-custom proxima_regular"
                                            >
                                              HK 852
                                            </div>
                                            <div class="select-icon-btn">
                                              <i
                                                class="fa fa-angle-down"
                                                aria-hidden="true"
                                              ></i>
                                            </div>
                                          </div>
                                        </div>
                                        <ul class="custon-select-list">
                                          <li>
                                            <span class="proxima_regular"
                                              >Default</span
                                            >
                                          </li>
                                          <li>
                                            <span class="proxima_regular">
                                              Hot Item</span
                                            >
                                          </li>
                                        </ul>
                                      </div>
                                    </div>
                                  </div>
                                  <div class="col-sm-8 col-8">
                                    <input type="text" class="form-control" />
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              class="row"
                              style="margin-left: 0px; margin-right: 0px"
                            >
                              <div
                                class="col-sm-12 label-add pd-remove password-fild"
                              >
                                <label class="proxima_regular">password</label>
                                <div class="row">
                                  <div class="col-sm-12">
                                    <input type="text" class="form-control" />
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div class="forgot-pass">
                              <input
                                type="checkbox"
                                class="check-box"
                                name=""
                              />
                              <span class="proxima_regular"
                                >Remember my account</span
                              >
                              <a href="#" class="proxima_regular color-hover"
                                >Forgot your password?</a
                              >
                            </div>
                            <button class="login-btn proxima_regular">
                              Login
                            </button>
                          </form>
                          <div class="i-have-read">
                            <p class="proxima_regular">
                              I have read and agreed to the TUMI website's
                              <a href="" class="color-hover"
                                >Terms and Conditions</a
                              >
                              ,<a href="" class="color-hover">
                                Privacy Policy</a
                              >
                              and
                              <a href="" class="color-hover"
                                >TUMI Exclusive Club's Member Regulations .</a
                              >
                            </p>
                          </div>
                          <div class="ragester-acco">
                            <strong class="proxima_semi-bold"
                              >Still No TUMI Account?</strong
                            >
                            <a href="" class="proxima_semi-bold rage-btn"
                              >ragester an account</a
                            >
                          </div>
                          <div class="need-help">
                            <a href="#" class="proxima_regular"
                              ><span class="msg-icon icon-maywehelp-chat"></span
                              >Need Help?</a
                            >
                            <a href="#" class="proxima_regular">
                              <span class=""></span>
                            </a>
                            <a href="#" class="proxima_regular"
                              >Contact online customer service</a
                            >
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <!-- -----------------ragestration process------------start  -->
                  <div
                    class="right-login-menu navbar-side ragestration-process"
                    id="navbarSide"
                  >
                    <div class="overly-pos navbar-side-item">
                      <h3 class="proxima_bold">My Account</h3>
                      <h4 class="proxima_regular">
                        Log in to your TUMI.HK account
                      </h4>
                      <div class="form-login-div">
                        <div class="container">
                          <form method="" class="">
                            <div class="row" style="margin: 0px">
                              <div class="col-sm-12 label-add pd-remove">
                                <label class="proxima_regular">Mobile</label>
                                <div class="row">
                                  <div class="col-sm-4 col-4">
                                    <div class="option-wrp">
                                      <div class="option-select">
                                        <div class="select-erap">
                                          <div class="select-view">
                                            <div
                                              class="select-custom proxima_regular"
                                            >
                                              HK 852
                                            </div>
                                            <div class="select-icon-btn">
                                              <i
                                                class="fa fa-angle-down"
                                                aria-hidden="true"
                                              ></i>
                                            </div>
                                          </div>
                                        </div>
                                        <ul class="custon-select-list">
                                          <li>
                                            <span class="proxima_regular"
                                              >Default</span
                                            >
                                          </li>
                                          <li>
                                            <span class="proxima_regular">
                                              Hot Item</span
                                            >
                                          </li>
                                        </ul>
                                      </div>
                                    </div>
                                  </div>
                                  <div class="col-sm-8 col-8">
                                    <input type="text" class="form-control" />
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              class="row"
                              style="margin-left: 0px; margin-right: 0px"
                            >
                              <div
                                class="col-sm-12 label-add pd-remove password-fild"
                              >
                                <label class="proxima_regular"
                                  >Verification Code *</label
                                >
                                <div class="row">
                                  <div class="col-sm-12">
                                    <div class="verifaction-code">
                                      <input type="text" class="form-control" />
                                      <button class="submit">Send</button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div
                                class="col-sm-12 label-add pd-remove password-fild title-field"
                              >
                                <label class="proxima_regular">Title</label>
                                <div class="row">
                                  <div class="col-sm-12">
                                    <div class="option-wrp">
                                      <div class="option-select">
                                        <div class="select-erap">
                                          <div class="select-view">
                                            <div
                                              class="select-custom proxima_regular"
                                            >
                                              HK 852
                                            </div>
                                            <div class="select-icon-btn">
                                              <i
                                                class="fa fa-angle-down"
                                                aria-hidden="true"
                                              ></i>
                                            </div>
                                          </div>
                                        </div>
                                        <ul class="custon-select-list">
                                          <li>
                                            <span class="proxima_regular"
                                              >Default</span
                                            >
                                          </li>
                                          <li>
                                            <span class="proxima_regular">
                                              Hot Item</span
                                            >
                                          </li>
                                        </ul>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div
                                class="col-sm-12 label-add pd-remove password-fild"
                              >
                                <label class="proxima_regular">user Name</label>
                                <div class="row">
                                  <div class="col-sm-12">
                                    <input type="text" class="form-control" />
                                  </div>
                                </div>
                              </div>
                              <div
                                class="col-sm-12 label-add pd-remove password-fild my-birth"
                              >
                                <label class="proxima_regular"
                                  >My Birthday</label
                                >
                                <small class="proxima_regular birtday-small"
                                  >(Please be careful to provide your birthday
                                  that cannot be change once submitted)</small
                                >
                                <div class="row for-padding">
                                  <div class="col-sm-4">
                                    <div class="option-wrp">
                                      <div class="option-select">
                                        <div class="select-erap">
                                          <div class="select-view">
                                            <div
                                              class="select-custom proxima_regular"
                                            >
                                              HK 852
                                            </div>
                                            <div class="select-icon-btn">
                                              <i
                                                class="fa fa-angle-down"
                                                aria-hidden="true"
                                              ></i>
                                            </div>
                                          </div>
                                        </div>
                                        <ul class="custon-select-list">
                                          <li>
                                            <span class="proxima_regular"
                                              >Default</span
                                            >
                                          </li>
                                          <li>
                                            <span class="proxima_regular">
                                              Hot Item</span
                                            >
                                          </li>
                                        </ul>
                                      </div>
                                    </div>
                                  </div>
                                  <div class="col-sm-4">
                                    <div class="option-wrp">
                                      <div class="option-select">
                                        <div class="select-erap">
                                          <div class="select-view">
                                            <div
                                              class="select-custom proxima_regular"
                                            >
                                              HK 852
                                            </div>
                                            <div class="select-icon-btn">
                                              <i
                                                class="fa fa-angle-down"
                                                aria-hidden="true"
                                              ></i>
                                            </div>
                                          </div>
                                        </div>
                                        <ul class="custon-select-list">
                                          <li>
                                            <span class="proxima_regular"
                                              >Default</span
                                            >
                                          </li>
                                          <li>
                                            <span class="proxima_regular">
                                              Hot Item</span
                                            >
                                          </li>
                                        </ul>
                                      </div>
                                    </div>
                                  </div>
                                  <div class="col-sm-4">
                                    <div class="option-wrp">
                                      <div class="option-select">
                                        <div class="select-erap">
                                          <div class="select-view">
                                            <div
                                              class="select-custom proxima_regular"
                                            >
                                              HK 852
                                            </div>
                                            <div class="select-icon-btn">
                                              <i
                                                class="fa fa-angle-down"
                                                aria-hidden="true"
                                              ></i>
                                            </div>
                                          </div>
                                        </div>
                                        <ul class="custon-select-list">
                                          <li>
                                            <span class="proxima_regular"
                                              >Default</span
                                            >
                                          </li>
                                          <li>
                                            <span class="proxima_regular">
                                              Hot Item</span
                                            >
                                          </li>
                                        </ul>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div
                                class="col-sm-12 label-add pd-remove password-fild"
                              >
                                <label class="proxima_regular">Emauil*</label>
                                <div class="row">
                                  <div class="col-sm-12">
                                    <input type="text" class="form-control" />
                                  </div>
                                </div>
                              </div>
                              <div
                                class="col-sm-12 label-add pd-remove password-fild"
                              >
                                <label class="proxima_regular">Password*</label>
                                <div class="row">
                                  <div class="col-sm-12">
                                    <input type="text" class="form-control" />
                                  </div>
                                </div>
                              </div>
                              <div
                                class="col-sm-12 label-add pd-remove password-fild"
                              >
                                <label class="proxima_regular"
                                  >Confirm password*</label
                                >
                                <div class="row">
                                  <div class="col-sm-12">
                                    <input type="text" class="form-control" />
                                  </div>
                                </div>
                              </div>
                              <div
                                class="col-sm-12 label-add pd-remove password-fild"
                              >
                                <div class="forgot-pass">
                                  <input
                                    type="checkbox"
                                    class="check-box"
                                    name=""
                                  />
                                  <span class="proxima_regular">
                                    If I do not agree to such use of my personal
                                    data for direct marketing, I indicate my
                                    objection by ticking this box.</span
                                  >
                                </div>
                              </div>
                            </div>

                            <button class="login-btn proxima_regular">
                              Registration
                            </button>
                          </form>
                          <div class="i-have-read">
                            <p class="proxima_regular">
                              I have read and agreed to the TUMI website's
                              <a href="" class="color-hover"
                                >Terms and Conditions</a
                              >
                              ,<a href="" class="color-hover">
                                Privacy Policy</a
                              >
                              and
                              <a href="" class="color-hover"
                                >TUMI Exclusive Club's Member Regulations .</a
                              >
                            </p>
                          </div>
                          <div class="ragester-acco">
                            <strong class="proxima_semi-bold"
                              >Have An Existing TUMI Account?</strong
                            >
                            <a href="" class="proxima_semi-bold">Login</a>
                          </div>
                          <div class="need-help">
                            <a href="#" class="proxima_regular"
                              ><span class="msg-icon icon-maywehelp-chat"></span
                              >Need Help?</a
                            >
                            <a href="#" class="proxima_regular">
                              <span class=""></span>
                            </a>
                            <a href="#" class="proxima_regular"
                              >Contact online customer service</a
                            >
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
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
              <a class="desktop-item proxima_semi-bold">{{ item.name }}</a>
              <input type="checkbox" id="showMega" />
              <label
                for="showMega"
                class="mobile-item proxima_semi-bold"
                @click="updateActive(index)"
                :class="isActive == index ? 'isActive' : ''"
                >{{ item.name }}</label
              >
              <div class="mega-box">
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
                  class="form-control tab-ico"
                  placeholder="Search"
                />
              </div>
            </li>
            <div class="show-mob">
              <ul class="other-nav-links">
                <li>
                  <NuxtLink to="login" class="proxima_regular"
                    >Login / Register</NuxtLink
                  >

                  <div
                    class="right-login-menu navbar-side login-process"
                    id="navbarSide"
                  >
                    <div class="overly-pos navbar-side-item">
                      <h3 class="proxima_bold">My Account</h3>
                      <h4 class="proxima_regular">
                        Log in to your TUMI.HK account
                      </h4>
                      <div class="form-login-div">
                        <div class="container">
                          <form method="" class="">
                            <div class="row" style="margin: 0px">
                              <div class="col-sm-12 label-add pd-remove">
                                <label class="proxima_regular">phone</label>
                                <div class="row">
                                  <div class="col-sm-4 col-4">
                                    <div class="option-wrp">
                                      <div class="option-select">
                                        <div class="select-erap">
                                          <div class="select-view">
                                            <div
                                              class="select-custom proxima_regular"
                                            >
                                              HK 852
                                            </div>
                                            <div class="select-icon-btn">
                                              <i
                                                class="fa fa-angle-down"
                                                aria-hidden="true"
                                              ></i>
                                            </div>
                                          </div>
                                        </div>
                                        <ul class="custon-select-list">
                                          <li>
                                            <span class="proxima_regular"
                                              >Default</span
                                            >
                                          </li>
                                          <li>
                                            <span class="proxima_regular">
                                              Hot Item</span
                                            >
                                          </li>
                                        </ul>
                                      </div>
                                    </div>
                                  </div>
                                  <div class="col-sm-8 col-8">
                                    <input type="text" class="form-control" />
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div class="row">
                              <div
                                class="col-sm-12 label-add pd-remove password-fild"
                              >
                                <label class="proxima_regular">password</label>
                                <div class="row">
                                  <div class="col-sm-12">
                                    <input type="text" class="form-control" />
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div class="forgot-pass">
                              <input
                                type="checkbox"
                                class="check-box"
                                name=""
                              />
                              <span class="proxima_regular"
                                >Remember my account</span
                              >
                              <a href="#" class="proxima_regular color-hover"
                                >Forgot your password?</a
                              >
                            </div>
                            <button class="login-btn proxima_regular">
                              Login
                            </button>
                          </form>
                          <div class="i-have-read">
                            <p class="proxima_regular">
                              I have read and agreed to the TUMI website's
                              <a href="" class="color-hover"
                                >Terms and Conditions</a
                              >
                              ,<a href="" class="color-hover">
                                Privacy Policy</a
                              >
                              and
                              <a href="" class="color-hover"
                                >TUMI Exclusive Club's Member Regulations .</a
                              >
                            </p>
                          </div>
                          <div class="ragester-acco">
                            <strong class="proxima_semi-bold"
                              >Still No TUMI Account?</strong
                            >
                            <a href="" class="proxima_semi-bold rage-btn"
                              >ragester an account</a
                            >
                          </div>
                          <div class="need-help">
                            <a href="#" class="proxima_regular"
                              ><span class="msg-icon icon-maywehelp-chat"></span
                              >Need Help?</a
                            >
                            <a href="#" class="proxima_regular">
                              <span class=""></span>
                            </a>
                            <a href="#" class="proxima_regular"
                              >Contact online customer service</a
                            >
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <!-- -----------------ragestration process------------start  -->
                  <div
                    class="right-login-menu navbar-side ragestration-process"
                    id="navbarSide"
                  >
                    <div class="overly-pos navbar-side-item">
                      <h3 class="proxima_bold">My Account</h3>
                      <h4 class="proxima_regular">
                        Log in to your TUMI.HK account
                      </h4>
                      <div class="form-login-div">
                        <div class="container">
                          <form method="" class="">
                            <div class="row" style="margin: 0px">
                              <div class="col-sm-12 label-add pd-remove">
                                <label class="proxima_regular">Mobile</label>
                                <div class="row">
                                  <div class="col-sm-4 col-4 pd-l-r">
                                    <div class="option-wrp">
                                      <div class="option-select">
                                        <div class="select-erap">
                                          <div class="select-view">
                                            <div
                                              class="select-custom proxima_regular"
                                            >
                                              HK 852
                                            </div>
                                            <div class="select-icon-btn">
                                              <i
                                                class="fa fa-angle-down"
                                                aria-hidden="true"
                                              ></i>
                                            </div>
                                          </div>
                                        </div>
                                        <ul class="custon-select-list">
                                          <li>
                                            <span class="proxima_regular"
                                              >Default</span
                                            >
                                          </li>
                                          <li>
                                            <span class="proxima_regular">
                                              Hot Item</span
                                            >
                                          </li>
                                        </ul>
                                      </div>
                                    </div>
                                  </div>
                                  <div class="col-sm-8 col-8 pd-l-r">
                                    <input type="text" class="form-control" />
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div class="row">
                              <div
                                class="col-sm-12 label-add pd-remove password-fild"
                              >
                                <label class="proxima_regular"
                                  >Verification Code *</label
                                >
                                <div class="row">
                                  <div class="col-sm-12">
                                    <div class="verifaction-code">
                                      <input type="text" class="form-control" />
                                      <button class="submit">Send</button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div
                                class="col-sm-12 label-add pd-remove password-fild title-field"
                              >
                                <label class="proxima_regular">Title</label>
                                <div class="row">
                                  <div class="col-sm-12">
                                    <div class="option-wrp">
                                      <div class="option-select">
                                        <div class="select-erap">
                                          <div class="select-view">
                                            <div
                                              class="select-custom proxima_regular"
                                            >
                                              HK 852
                                            </div>
                                            <div class="select-icon-btn">
                                              <i
                                                class="fa fa-angle-down"
                                                aria-hidden="true"
                                              ></i>
                                            </div>
                                          </div>
                                        </div>
                                        <ul class="custon-select-list">
                                          <li>
                                            <span class="proxima_regular"
                                              >Default</span
                                            >
                                          </li>
                                          <li>
                                            <span class="proxima_regular">
                                              Hot Item</span
                                            >
                                          </li>
                                        </ul>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div
                                class="col-sm-12 label-add pd-remove password-fild"
                              >
                                <label class="proxima_regular">user Name</label>
                                <div class="row">
                                  <div class="col-sm-12">
                                    <input type="text" class="form-control" />
                                  </div>
                                </div>
                              </div>
                              <div
                                class="col-sm-12 label-add pd-remove password-fild my-birth"
                              >
                                <label class="proxima_regular"
                                  >My Birthday</label
                                >
                                <small class="proxima_regular birtday-small"
                                  >(Please be careful to provide your birthday
                                  that cannot be change once submitted)</small
                                >
                                <div class="row for-padding">
                                  <div class="col-sm-4 col-4 pd-l-r">
                                    <div class="option-wrp">
                                      <div class="option-select">
                                        <div class="select-erap">
                                          <div class="select-view">
                                            <div
                                              class="select-custom proxima_regular"
                                            >
                                              HK 852
                                            </div>
                                            <div class="select-icon-btn">
                                              <i
                                                class="fa fa-angle-down"
                                                aria-hidden="true"
                                              ></i>
                                            </div>
                                          </div>
                                        </div>
                                        <ul class="custon-select-list">
                                          <li>
                                            <span class="proxima_regular"
                                              >Default</span
                                            >
                                          </li>
                                          <li>
                                            <span class="proxima_regular">
                                              Hot Item</span
                                            >
                                          </li>
                                        </ul>
                                      </div>
                                    </div>
                                  </div>
                                  <div class="col-sm-4 col-4 pd-l-r">
                                    <div class="option-wrp">
                                      <div class="option-select">
                                        <div class="select-erap">
                                          <div class="select-view">
                                            <div
                                              class="select-custom proxima_regular"
                                            >
                                              HK 852
                                            </div>
                                            <div class="select-icon-btn">
                                              <i
                                                class="fa fa-angle-down"
                                                aria-hidden="true"
                                              ></i>
                                            </div>
                                          </div>
                                        </div>
                                        <ul class="custon-select-list">
                                          <li>
                                            <span class="proxima_regular"
                                              >Default</span
                                            >
                                          </li>
                                          <li>
                                            <span class="proxima_regular">
                                              Hot Item</span
                                            >
                                          </li>
                                        </ul>
                                      </div>
                                    </div>
                                  </div>
                                  <div class="col-sm-4 col-4 pd-l-r">
                                    <div class="option-wrp">
                                      <div class="option-select">
                                        <div class="select-erap">
                                          <div class="select-view">
                                            <div
                                              class="select-custom proxima_regular"
                                            >
                                              HK 852
                                            </div>
                                            <div class="select-icon-btn">
                                              <i
                                                class="fa fa-angle-down"
                                                aria-hidden="true"
                                              ></i>
                                            </div>
                                          </div>
                                        </div>
                                        <ul class="custon-select-list">
                                          <li>
                                            <span class="proxima_regular"
                                              >Default</span
                                            >
                                          </li>
                                          <li>
                                            <span class="proxima_regular">
                                              Hot Item</span
                                            >
                                          </li>
                                        </ul>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div
                                class="col-sm-12 label-add pd-remove password-fild"
                              >
                                <label class="proxima_regular">Emauil*</label>
                                <div class="row">
                                  <div class="col-sm-12">
                                    <input type="text" class="form-control" />
                                  </div>
                                </div>
                              </div>
                              <div
                                class="col-sm-12 label-add pd-remove password-fild"
                              >
                                <label class="proxima_regular">Password*</label>
                                <div class="row">
                                  <div class="col-sm-12">
                                    <input type="text" class="form-control" />
                                  </div>
                                </div>
                              </div>
                              <div
                                class="col-sm-12 label-add pd-remove password-fild"
                              >
                                <label class="proxima_regular"
                                  >Confirm password*</label
                                >
                                <div class="row">
                                  <div class="col-sm-12">
                                    <input type="text" class="form-control" />
                                  </div>
                                </div>
                              </div>
                              <div
                                class="col-sm-12 label-add pd-remove password-fild"
                              >
                                <div class="forgot-pass">
                                  <input
                                    type="checkbox"
                                    class="check-box"
                                    name=""
                                  />
                                  <span class="proxima_regular">
                                    If I do not agree to such use of my personal
                                    data for direct marketing, I indicate my
                                    objection by ticking this box.</span
                                  >
                                </div>
                              </div>
                            </div>

                            <button class="login-btn proxima_regular">
                              Registration
                            </button>
                          </form>
                          <div class="i-have-read">
                            <p class="proxima_regular">
                              I have read and agreed to the TUMI website's
                              <a href="" class="color-hover"
                                >Terms and Conditions</a
                              >
                              ,<a href="" class="color-hover">
                                Privacy Policy</a
                              >
                              and
                              <a href="" class="color-hover"
                                >TUMI Exclusive Club's Member Regulations .</a
                              >
                            </p>
                          </div>
                          <div class="ragester-acco">
                            <strong class="proxima_semi-bold"
                              >Have An Existing TUMI Account?</strong
                            >
                            <a href="" class="proxima_semi-bold">Login</a>
                          </div>
                          <div class="need-help">
                            <a href="#" class="proxima_regular"
                              ><span class="msg-icon icon-maywehelp-chat"></span
                              >Need Help?</a
                            >
                            <a href="#" class="proxima_regular">
                              <span class=""></span>
                            </a>
                            <a href="#" class="proxima_regular"
                              >Contact online customer service</a
                            >
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <a href="" class="proxima_regular">TUMI Exclusives Club</a>
                </li>
                <li><a href="" class="proxima_regular">Store Locator</a></li>
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
              <NuxtLink to="login" class="proxima_semi-bold"
                >Login / Register</NuxtLink
              >
              <div
                class="right-login-menu navbar-side login-process"
                id="navbarSide"
              >
                <div class="overly-pos navbar-side-item">
                  <h3 class="proxima_bold">My Account</h3>
                  <h4 class="proxima_regular">
                    Log in to your TUMI.HK account
                  </h4>
                  <div class="form-login-div">
                    <div class="container">
                      <form method="" class="">
                        <div class="row" style="margin: 0px">
                          <div class="col-sm-12 label-add pd-remove">
                            <label class="proxima_regular">phone</label>
                            <div class="row">
                              <div class="col-sm-4 col-4">
                                <div class="option-wrp">
                                  <div class="option-select">
                                    <div class="select-erap">
                                      <div class="select-view">
                                        <div
                                          class="select-custom proxima_regular"
                                        >
                                          HK 852
                                        </div>
                                        <div class="select-icon-btn">
                                          <i
                                            class="fa fa-angle-down"
                                            aria-hidden="true"
                                          ></i>
                                        </div>
                                      </div>
                                    </div>
                                    <ul class="custon-select-list">
                                      <li>
                                        <span class="proxima_regular"
                                          >Default</span
                                        >
                                      </li>
                                      <li>
                                        <span class="proxima_regular">
                                          Hot Item</span
                                        >
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                              <div class="col-sm-8 col-8">
                                <input type="text" class="form-control" />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          class="row"
                          style="margin-left: 0px; margin-right: 0px"
                        >
                          <div
                            class="col-sm-12 label-add pd-remove password-fild"
                          >
                            <label class="proxima_regular">password</label>
                            <div class="row">
                              <div class="col-sm-12">
                                <input type="text" class="form-control" />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="forgot-pass">
                          <input type="checkbox" class="check-box" name="" />
                          <span class="proxima_regular"
                            >Remember my account</span
                          >
                          <a href="#" class="proxima_regular color-hover"
                            >Forgot your password?</a
                          >
                        </div>
                        <button class="login-btn proxima_regular">Login</button>
                      </form>
                      <div class="i-have-read">
                        <p class="proxima_regular">
                          I have read and agreed to the TUMI website's
                          <a href="" class="color-hover"
                            >Terms and Conditions</a
                          >
                          ,<a href="" class="color-hover"> Privacy Policy</a>
                          and
                          <a href="" class="color-hover"
                            >TUMI Exclusive Club's Member Regulations .</a
                          >
                        </p>
                      </div>
                      <div class="ragester-acco">
                        <strong class="proxima_semi-bold"
                          >Still No TUMI Account?</strong
                        >
                        <a href="" class="proxima_semi-bold rage-btn"
                          >ragester an account</a
                        >
                      </div>
                      <div class="need-help">
                        <a href="#" class="proxima_regular"
                          ><span class="msg-icon icon-maywehelp-chat"></span
                          >Need Help?</a
                        >
                        <a href="#" class="proxima_regular">
                          <span class=""></span>
                        </a>
                        <a href="#" class="proxima_regular"
                          >Contact online customer service</a
                        >
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li class="mobile-search-fun">
              <a class="text-red">
                <span class="icon icon-search-lg text-red" aria-hidden="true">
                  <div class="header-search mob-search-down">
                    <input
                      type="text"
                      name=""
                      class="form-control"
                      placeholder="Search"
                    />
                    <div class="search-result">
                      <div class="search-result-con">
                        <div class="search-key">
                          <h4 class="proxima_semi-bold">
                            Hot Product Match<span>"a"</span>
                          </h4>
                        </div>
                        <div class="search-pd-boxes">
                          <ul class="image" id="matching_products">
                            <li class="search-item">
                              <a href="" title="">
                                <span class="search_image"
                                  ><img
                                    src="~assets/images/searchpd1.jpg"
                                    alt=""
                                /></span>
                                <span class="item-details">
                                  <span
                                    class="item-details-name proxima_regular"
                                    >Nicols Small Crossbody</span
                                  >
                                  <span
                                    class="item-details-category proxima_regular"
                                    >Harrison</span
                                  >
                                </span>
                              </a>
                            </li>
                            <li class="search-item">
                              <a href="" title="">
                                <span class="search_image"
                                  ><img
                                    src="~assets/images/searchpd1.jpg"
                                    alt=""
                                /></span>
                                <span class="item-details">
                                  <span
                                    class="item-details-name proxima_regular"
                                    >Torque Sling</span
                                  >
                                  <span
                                    class="item-details-category proxima_regular"
                                    >TUMI I McLaren</span
                                  >
                                </span>
                              </a>
                            </li>
                            <li class="search-item">
                              <a href="" title="">
                                <span class="search_image"
                                  ><img
                                    src="~assets/images/searchpd1.jpg"
                                    alt=""
                                /></span>
                                <span class="item-details">
                                  <span
                                    class="item-details-name proxima_regular"
                                    >Trace Expandable Organizer Accessory</span
                                  >
                                  <span
                                    class="item-details-category proxima_regular"
                                    >TUMI I McLaren</span
                                  >
                                </span>
                              </a>
                            </li>
                            <li class="search-item lats-child-search">
                              <a href="" title="">
                                <span class="search_image"
                                  ><img
                                    src="~assets/images/searchpd1.jpg"
                                    alt=""
                                /></span>
                                <span class="item-details">
                                  <span
                                    class="item-details-name proxima_regular"
                                    >Nivolet Luggage Tag</span
                                  >
                                  <span
                                    class="item-details-category proxima_regular"
                                    >TUMI I McLaren</span
                                  >
                                </span>
                              </a>
                            </li>
                          </ul>
                          <div class="view-all-result-bottom">
                            <a href="#" class="proxima_regular"
                              ><span class="icon"
                                ><i class="sprite-search" alt="" title=""></i
                              ></span>
                              <span class="proxima_regular"
                                ><i class="fa fa-search" aria-hidden="true"></i>
                                View all results</span
                              ></a
                            >
                          </div>
                        </div>
                      </div>
                    </div>
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
              <NuxtLink to="/cart" class="text-red cart-icon"
                ><span aria-hidden="true" class="carticon-add"
                  ><img src="~assets/images/cart.png" />
                  <span class="text-red count-cart">{{
                    $store.state.cartAjax.cart_product.length
                  }}</span></span
                ></NuxtLink
              >
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
import { mapState } from "vuex";

export default {
  data() {
    return {
      scrollPosition: null,
      showMenu: false,
      close: false,
      isActive: "",
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
    updateActive(index){
      this.isActive = index
    }
  },

  computed: {
    ...mapState(["header"]),
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.updateScroll);
  },
};
</script>