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
          <h4>
            Compare Products
          </h4>
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
              class="box-item "
              :class="{ fixedcompare: scrollPosition > 100 }"
            >
              <div class="product-item">
                <div class="closeicon">
                  <span class="icon icon-x"></span>
                </div>
                <div class="imgbox">
                  <a href="#">
                    <img
                      src="https://tumi.scene7.com/is/image/Tumi/1358727498_main?hei=300&width=300&layer=2&opac=0&layer=3&opac=0"
                      alt="img"
                      class="w-100"
                    />
                  </a>
                </div>
                <div class="pro_detail">
                  <span>TUMI V4</span>
                  <a href="#">
                    <p class="p-name">
                      International Expandable 4 Wheeled Carry-On
                    </p>
                  </a>
                  <p class="price">
                    ₹3,743.00
                  </p>
                  <div class="color-blk">
                    <div class="color-options">
                      <ul class="no-list choose-colors">
                        <li>
                          <a href="#">
                            <img
                              src="https://tumi.scene7.com/is/image/Tumi/1358727498_sw"
                              title=""
                              alt=""
                            />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <img
                              src="https://tumi.scene7.com/is/image/Tumi/1358725107_sw"
                              title=""
                              alt=""
                            />
                          </a>
                        </li>
                        <li class="selected">
                          <a href="#">
                            <img
                              src="https://tumi.scene7.com/is/image/Tumi/124855T176_sw"
                              title=""
                              alt=""
                            />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <img
                              src="https://tumi.scene7.com/is/image/Tumi/1248551041_sw"
                              title=""
                              alt=""
                            />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <button class="btn btn-v-4">
                    Add to cart
                  </button>
                </div>
                <div class="product-style">style#: <span>124855T176</span></div>
              </div>
              <div class="product-item">
                <div class="closeicon">
                  <span class="icon icon-x"></span>
                </div>
                <div class="imgbox">
                  <a href="#">
                    <img
                      src="https://tumi.scene7.com/is/image/Tumi/1358727498_main?hei=300&width=300&layer=2&opac=0&layer=3&opac=0"
                      alt="img"
                      class="w-100"
                    />
                  </a>
                </div>
                <div class="pro_detail">
                  <span>TUMI V4</span>
                  <a href="#">
                    <p class="p-name">
                      International Expandable 4 Wheeled Carry-On
                    </p>
                  </a>
                  <p class="price">
                    ₹3,743.00
                  </p>
                  <div class="color-blk">
                    <div class="color-options">
                      <ul class="no-list choose-colors">
                        <li>
                          <a href="#">
                            <img
                              src="https://tumi.scene7.com/is/image/Tumi/1358727498_sw"
                              title=""
                              alt=""
                            />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <img
                              src="https://tumi.scene7.com/is/image/Tumi/1358725107_sw"
                              title=""
                              alt=""
                            />
                          </a>
                        </li>
                        <li class="selected">
                          <a href="#">
                            <img
                              src="https://tumi.scene7.com/is/image/Tumi/124855T176_sw"
                              title=""
                              alt=""
                            />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <img
                              src="https://tumi.scene7.com/is/image/Tumi/1248551041_sw"
                              title=""
                              alt=""
                            />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <button class="btn btn-v-4">
                    Add to cart
                  </button>
                </div>
                <div class="product-style">style#: <span>124855T176</span></div>
              </div>
              <div class="product-item">
                <div class="imgbox">
                  <a href="#">
                    <img
                      src="https://tumi.scene7.com/is/image/Tumi/1358727498_main?hei=300&width=300&layer=2&opac=0&layer=3&opac=0"
                      alt="img"
                      class="w-100"
                    />
                  </a>
                </div>
                <div class="pro_detail">
                  <span>TUMI V4</span>
                  <a href="#">
                    <p class="p-name">
                      International Expandable 4 Wheeled Carry-On
                    </p>
                  </a>
                  <p class="price">
                    ₹3,743.00
                  </p>
                  <div class="color-blk">
                    <div class="color-options">
                      <ul class="no-list choose-colors">
                        <li>
                          <a href="#">
                            <img
                              src="https://tumi.scene7.com/is/image/Tumi/1358727498_sw"
                              title=""
                              alt=""
                            />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <img
                              src="https://tumi.scene7.com/is/image/Tumi/1358725107_sw"
                              title=""
                              alt=""
                            />
                          </a>
                        </li>
                        <li class="selected">
                          <a href="#">
                            <img
                              src="https://tumi.scene7.com/is/image/Tumi/124855T176_sw"
                              title=""
                              alt=""
                            />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <img
                              src="https://tumi.scene7.com/is/image/Tumi/1248551041_sw"
                              title=""
                              alt=""
                            />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <button class="btn btn-v-4">
                    Add to cart
                  </button>
                </div>
                <div class="product-style">style#: <span>124855T176</span></div>
                <div class="closeicon">
                  <span class="icon icon-x"></span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="compare_data_info">
          <div class="data-1 data-1_table">
            <table class="table table-striped m-0">
              <tbody>
                <tr>
                  <th scope="row">
                    SIZE <br />
                    <span> <a href="#">HOW DO WE MEASURE ?</a></span>
                  </th>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                </tr>
                <tr>
                  <th scope="row">height</th>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                </tr>
                <tr>
                  <th scope="row">width</th>
                  <td>Larry</td>
                  <td>the Bird</td>
                  <td>@twitter</td>
                </tr>
                <tr>
                  <th scope="row">depth</th>
                  <td>Larry</td>
                  <td>the Bird</td>
                  <td>@twitter</td>
                </tr>
                <tr>
                  <th scope="row">weight</th>
                  <td>Larry</td>
                  <td>the Bird</td>
                  <td>@twitter</td>
                </tr>
                <tr>
                  <th scope="row">capacity</th>
                  <td>Larry</td>
                  <td>the Bird</td>
                  <td>@twitter</td>
                </tr>
              </tbody>
            </table>
          </div>
          <!-- data 2 -->
          <div class="data-1 data-2">
            <table class="table table-striped m-0 ">
              <tbody>
                <tr>
                  <th scope="row">
                    FEATURES
                  </th>
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
          </div>

          <!-- table 3  -->
          <div class="data-1 data-3">
            <table class="table table-striped ">
              <tbody>
                <tr>
                  <th scope="row">
                    EXCLUSIVE LETTERING
                  </th>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                </tr>
                <tr>
                  <th scope="row">COLOR CUSTOMIZATION</th>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                </tr>
                <tr>
                  <th scope="row">WHEEL</th>
                  <td>Larry</td>
                  <td>the Bird</td>
                  <td>@twitter</td>
                </tr>
                <tr>
                  <th scope="row">MATERIAL</th>
                  <td>Larry</td>
                  <td>the Bird</td>
                  <td>@twitter</td>
                </tr>
                <tr>
                  <th scope="row">ONLINE EXCLUSIVE</th>
                  <td>Larry</td>
                  <td>the Bird</td>
                  <td>@twitter</td>
                </tr>
                <tr>
                  <th scope="row">GIFT SET</th>
                  <td>Larry</td>
                  <td>the Bird</td>
                  <td>@twitter</td>
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
export default {
  data() {
    return {
      scrollPosition: null
    };
  },
  async mounted() {
    window.addEventListener("scroll", this.updateScroll);
  },
  methods: {
    updateScroll() {
      this.scrollPosition = window.scrollY;
    }
  }
};
</script>
