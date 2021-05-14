<template>
  <!-- YOU MAY ALSO LIKE... end -->

  <div class="yotpo">
    <div class="review review-main-widget">
      <div class="main-widget review-display-wrapper">
        <div class="yotpo-label-container">
          <div class="yotpo-logo-line"></div>
        </div>
        <span class="yotpo-display-wrapper">
          <div
            class="yotpo-regular-box yotpo-bottomline bottom-line-items-container"
          >
            <div class="bottom-line-items">
              <el-rate
                :value="$store.state.singleProductList.average_rating"
                disabled
                :colors="['#000000', '#000000', '#000000']"
              ></el-rate>
              <span class="reviews-qa-labels-container">
                <span class="reviews-qa-label font-color-gray"
                  >{{
                    $store.state.singleProductList.reviews_list.length
                  }}
                  Reviews</span
                >
              </span>
            </div>
            <div class="yotpo-clr"></div>
          </div>
        </span>
        <div class="review-write-btn">
          <button
            class="review-btn"
            @click="changeTab('review')"
            :class="[displayTab == 'review' ? 'active' : '']"
          >
            <font-awesome-icon icon="pencil-alt" /> Write A Review
          </button>
          <button
            class="review-btn"
            @click="changeTab('question')"
            :class="[displayTab == 'question' ? 'active' : '']"
          >
            <font-awesome-icon icon="comments" /> Ask A Question
          </button>
        </div>
      </div>

      <div style="clear: both"></div>
      <form action="#" v-if="displayTab === 'review'">
        <div class="write-review-wrapper">
          <div class="write-review yotpo-regular-box">
            <div class="yotpo-header">
              <h2 class="y-label yotpo-header-title">WRITE A REVIEW</h2>
              <br />
              <span class="y-label">
                <span class="yotpo-mandatory-mark">* </span> Score:
                <el-rate
                  v-model="reviewStar"
                  :colors="['#000000', '#000000', '#000000']"
                ></el-rate>
                <!-- an error display tags -->
                <span v-if="validation.hasError('reviewStar')">
                  <p class="input-error">
                    {{ validation.firstError("reviewStar") }}
                  </p>
                </span>
              </span>
            </div>
            <div class="write-review-content">
              <div class="form-group">
                <div class="form-element">
                  <label class="y-label" for="title"
                    ><span class="yotpo-mandatory-mark">* </span> Title:
                  </label>
                  <input
                    id="title"
                    class="y-input"
                    name="review_title"
                    aria-required="true"
                    placeholder="Please add title"
                    v-model="title"
                  />
                  <!-- an error display tags -->
                  <span v-if="validation.hasError('title')">
                    <p class="input-error">
                      {{ validation.firstError("title") }}
                    </p>
                  </span>
                </div>
                <div class="form-element">
                  <label class="y-label" for="review">
                    <span class="yotpo-mandatory-mark">* </span> Review:
                  </label>
                  <textarea
                    id="review"
                    class="y-input yotpo-text-box"
                    name="review_content"
                    aria-required="true"
                    placeholder="Add review"
                    v-model="review"
                  ></textarea>
                  <!-- an error display tags -->
                  <span v-if="validation.hasError('review')">
                    <p class="input-error">
                      {{ validation.firstError("review") }}
                    </p>
                  </span>
                </div>
              </div>
            </div>
            <div class="form-element submit-button">
              <input
                type="button"
                class="yotpo-default-button primary-color-btn yotpo-submit"
                value="Post"
                @click.prevent="addReview()"
              />
              <div class="yotpo-mandatory-explain">
                <span class="yotpo-mandatory-mark">*</span> Indicates a required
                field
              </div>
            </div>
            <div class="yotpo-clr"></div>
          </div>
        </div>
      </form>

      <!-- for question post -->
      <form action="#" v-if="displayTab === 'question'">
        <div class="write-review-wrapper">
          <div class="write-review yotpo-regular-box">
            <div class="yotpo-header">
              <h2 class="y-label yotpo-header-title">ASK QUESTION(s)</h2>
            </div>
            <div class="write-review-content">
              <div class="form-group">
                <div class="form-element email-input visible">
                  <span class="yotpo-mandatory-mark">* </span>
                  <label class="y-label" for="">User name: </label>
                  <input
                    v-model="userName"
                    class="y-input"
                    name="text"
                    placeholder="christine"
                  />
                  <!-- an error display tags -->
                  <span v-if="validation.hasError('userName')">
                    <p class="input-error">
                      {{ validation.firstError("userName") }}
                    </p>
                  </span>
                </div>
                <div class="form-element">
                  <label class="y-label" for="title"
                    ><span class="yotpo-mandatory-mark">* </span> Title:
                  </label>
                  <input
                    id="title"
                    class="y-input"
                    name="review_title"
                    maxlength="150"
                    aria-required="true"
                    placeholder="Start typing the title"
                    ref="inputfocus"
                    v-model="questionTitle"
                  />
                  <!-- an error display tags -->
                  <span v-if="validation.hasError('questionTitle')">
                    <p class="input-error">
                      {{ validation.firstError("questionTitle") }}
                    </p>
                  </span>
                </div>
                <div class="form-element">
                  <label class="y-label" for="review">
                    <span class="yotpo-mandatory-mark">* </span> Question:
                  </label>
                  <textarea
                    id="review"
                    class="y-input yotpo-text-box"
                    name="review_content"
                    aria-required="true"
                    placeholder="Please type your question"
                    v-model="question"
                  ></textarea>
                  <!-- an error display tags -->
                  <span v-if="validation.hasError('question')">
                    <p class="input-error">
                      {{ validation.firstError("question") }}
                    </p>
                  </span>
                </div>
              </div>
            </div>

            <div class="form-element submit-button">
              <input
                type="button"
                class="yotpo-default-button primary-color-btn yotpo-submit"
                value="Post"
                @click.prevent="addQuestion()"
              />
              <div class="yotpo-mandatory-explain">
                <span class="yotpo-mandatory-mark">*</span> Indicates a required
                field
              </div>
            </div>
            <div class="yotpo-clr"></div>
          </div>
        </div>
      </form>

      <div class="new-yotpo-small-box reviews 0">
        <div class="yotpo-nav yotpo-nav-primary">
          <ul role="tablist">
            <li
              class="yotpo-nav-tab"
              @click="toggleShow('review')"
              :class="[showRefTab == 'review' ? 'yotpo-active' : '']"
            >
              <div class="yotpo-nav-wrapper"><span>REVIEWS</span></div>
            </li>
            <li
              class="yotpo-nav-tab"
              @click="toggleShow('question')"
              :class="[showRefTab == 'question' ? 'yotpo-active' : '']"
            >
              <div class="yotpo-nav-wrapper"><span>QUESTIONS</span></div>
            </li>
          </ul>
          <div style="clear: both"></div>
        </div>
      </div>

      <div class="yotpo-nav-content">
        <!-- review filter -->
        <div class="yotpo-reviews-filters yotpo-active">
          <div
            class="filters-container"
            v-if="
              showRefTab === 'review' &&
              $store.state.singleProductList.reviews_list.length > 0
            "
          >
            <div class="filters-container-title">Filter Reviews</div>

            <div class="yotpo-hidden-mobile">
              <div class="dropdown-filters-container yotpo-drop-down-layout">
                <div
                  class="yotpo-icon-btn more-filters-btn"
                  @click="() => (this.mobileFilter = !this.mobileFilter)"
                >
                  <span
                    class="more-filters-icon yotpo-icon yotpo-icon-fine-tune"
                  >
                    <font-awesome-icon icon="align-center"
                  /></span>
                  <span class="more-filters-text">More Filters</span>
                </div>
                <span class="filters-dropdown">
                  <div
                    class="yotpo-dropdown-button"
                    @click="() => (this.reviewFiltter = !this.reviewFiltter)"
                  >
                    <span class="selected">Rating</span>
                    <span class="yotpo-icon yotpo-icon-down-triangle">
                      <font-awesome-icon icon="caret-down" />
                    </span>
                  </div>
                  <ul
                    class="yotpo-dropdown2 list-categories"
                    v-if="reviewFiltter"
                  >
                    <li class="list-category">
                      <a
                        class="selected-item"
                        tabindex="0"
                        href="javascript:void(0)"
                        >All</a
                      >
                    </li>
                    <li
                      class="list-category"
                      v-for="(item, index) in 5"
                      :key="index"
                    >
                      <span class="yotpo-filter-stars">
                        <el-rate
                          :value="item"
                          disabled
                          :colors="['#000', '#000', '#000']"
                        >
                        </el-rate>
                        <span class="sr-only">5.0 star rating</span>
                      </span>
                    </li>
                  </ul>
                </span>
                <span class="filters-dropdown">
                  <div
                    class="yotpo-dropdown-button"
                    @click="() => (this.imageVideo = !this.imageVideo)"
                  >
                    <span class="selected">Images & Videos</span>
                    <span class="yotpo-icon yotpo-icon-down-triangle">
                      <font-awesome-icon icon="caret-down" />
                    </span>
                  </div>
                  <ul class="yotpo-dropdown2 list-categories" v-if="imageVideo">
                    <li
                      class="list-category"
                      role="option"
                      aria-selected="false"
                      data-value="All"
                    >
                      <a
                        class="selected-item"
                        tabindex="0"
                        href="javascript:void(0)"
                        >All</a
                      >
                    </li>
                    <li class="list-category">
                      <a class="non-selected-item" href="javascript:void(0)"
                        >With Images &amp; Videos</a
                      >
                    </li>
                  </ul>
                </span>
              </div>
            </div>
          </div>
          <!-- review filter end -->

          <div
            class="yotpo-reviews-header yotpo-active"
            v-if="
              showRefTab === 'review' &&
              $store.state.singleProductList.reviews_list.length > 0
            "
          >
            <div class="reviews-header">
              <span class="reviews-amount" aria-level="2">
                {{ $store.state.singleProductList.reviews_list.length }} Reviews
              </span>
              <div class="yotpo-drop-down-layout">
                <div class="sort-drop-down yotpo-nav-dropdown sorting">
                  <div
                    class="yotpo-dropdown-button"
                    @click="() => (this.sort = !this.sort)"
                  >
                    <span>Sort:</span>
                    <span
                      class="selected-bold selected pL0"
                      data-selected-key="Select"
                      >Select</span
                    >
                    <span class="yotpo-icon bold-black-arrow pL0"
                      ><font-awesome-icon icon="caret-down" />
                    </span>
                  </div>
                  <ul class="yotpo-dropdown list-categories" v-if="sort">
                    <li class="list-category default-option">
                      <a class="selected-item">Select</a>
                    </li>
                    <li class="list-category">
                      <a class="non-selected-item">Newest</a>
                    </li>
                    <li class="list-category">
                      <a class="non-selected-item">Highest Rating</a>
                    </li>
                    <li class="list-category">
                      <a class="non-selected-item">Lowest Rating</a>
                    </li>
                    <li class="list-category">
                      <a class="non-selected-item">Most Votes</a>
                    </li>
                    <li class="list-category">
                      <a class="non-selected-item">Least Votes</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <template
            v-if="
              showRefTab === 'review' &&
              $store.state.singleProductList.reviews_list.length > 0
            "
          >
            <div
              class="yotpo-reviews yotpo-active"
              v-for="(review, index) in $store.state.singleProductList
                .reviews_list"
              :key="index"
            >
              <div
                class="yotpo-review yotpo-regular-box yotpo-regular-box-filters-padding"
              >
                <div class="yotpo-header">
                  <span
                    class="yotpo-icon-profile yotpo-header-element pull-left"
                  >
                    <span
                      class="yotpo-icon yotpo-icon-circle-checkmark yotpo-action-hover"
                    ></span>
                  </span>
                  <div class="yotpo-header-element">
                    <span
                      class="y-label yotpo-user-name yotpo-font-bold pull-left"
                      >{{ review.rr_customer_name }}</span
                    >
                    <div class="yotpo-clr"></div>
                    <div class="yotpo-review-stars">
                      <el-rate
                        :value="parseInt(review.rr_rating)"
                        disabled
                        :colors="['#000000', '#000000', '#000000']"
                      ></el-rate>
                    </div>
                    <div class="yotpo-clr"></div>
                  </div>
                  <div class="yotpo-header-element yotpo-header-actions">
                    <span class="y-label yotpo-review-date">{{
                      review.rr_created_at
                    }}</span>
                  </div>
                </div>
                <div class="yotpo-main">
                  <div
                    class="content-title yotpo-font-bold"
                    role="heading"
                    aria-level="3"
                  >
                    {{ review.rr_title }}
                  </div>
                  <div class="yotpo-clr"></div>
                  <div class="yotpo-review-wrapper">
                    <div class="content-review" id="158741007">
                      {{ review.rr_description }}
                    </div>
                  </div>
                </div>
                <div class="yotpo-footer">
                  <div class="footer-actions">
                    <span class="yotpo-action" role="button">
                      <span class="yotpo-icon yotpo-icon-share">
                        <font-awesome-icon icon="share-alt" />
                      </span>
                      <span class="y-label"> share</span>
                      <span class="yotpo-icon yotpo-icon-seperator"></span>
                    </span>
                  </div>
                  <div class="yotpo-helpful">
                    <span class="y-label label-helpful"
                      >Was this review helpful?</span
                    >
                    <div
                      @click="addAndRemoveLike(review)"
                      class="yotpo-icon-btn-small transparent-color-btn vote-btn"
                    >
                      <span class="yotpo-icon yotpo-icon-thumbs-up">
                        <font-awesome-icon icon="thumbs-up" />
                      </span>
                      <span class="y-label yotpo-sum vote-sum">{{
                        review.rr_like_product
                      }}</span>
                    </div>
                    <div
                      @click="addAndRemoveDeslike(review)"
                      class="yotpo-icon-btn-small transparent-color-btn vote-btn"
                    >
                      <span class="yotpo-icon yotpo-icon-thumbs-up">
                        <font-awesome-icon icon="thumbs-down" />
                      </span>
                      <span class="y-label yotpo-sum vote-sum">{{
                        review.rr_dislike_product
                      }}</span>
                    </div>
                  </div>
                  <div class="yotpo-clr"></div>
                </div>
              </div>
            </div>
          </template>
          <template v-else>
            <div
              class="yotpo-questions yotpo-active"
              v-if="showRefTab === 'review'"
            >
              <div class="yotpo-first-review">
                <div class="yotpo-first-review-content">
                  <button
                    type="button"
                    class="yotpo-default-button write-question-button write-first-question-button"
                    tabindex="0"
                    @click="changeTab('review')"
                    :class="[displayTab == 'question' ? 'active' : '']"
                  >
                    Be the first to add new review
                  </button>
                </div>
              </div>
            </div>
          </template>

          <!-- question  -->
          <transition name="slide">
            <div
              class="yotpo-questions yotpo-active"
              v-if="showRefTab === 'question'"
            >
              <div class="yotpo-first-review">
                <div class="yotpo-first-review-content">
                  <button
                    type="button"
                    class="yotpo-default-button write-question-button write-first-question-button"
                    tabindex="0"
                    @click="changeTab('question')"
                    :class="[displayTab == 'question' ? 'active' : '']"
                  >
                    Be the first to ask a question
                  </button>
                </div>
              </div>
            </div>
          </transition>
        </div>
      </div>
    </div>
    <!-- filter model -->
    <div class="filter-model" v-if="mobileFilter">
      <div class="filter-header">
        <div
          class="close"
          @click="() => (this.mobileFilter = !this.mobileFilter)"
        >
          <font-awesome-icon icon="times" />
        </div>
        <div class="filter-title">
          <h3>Filters</h3>
        </div>
        <div class="filter-clear">
          <p>Clear ALL</p>
        </div>
      </div>
      <div class="filter-model-body">
        <div class="rating-content">
          <div class="mobile-filter-title">Rating</div>
          <div class="mobile-filter-radio-buttons">
            <div class="mobile-filter-radio-button">
              <input name="radio-score" type="radio" checked="checked" />
              <span class="radio-label radio-text-option radio-selected-color"
                >All</span
              >
            </div>
            <div
              class="mobile-filter-radio-button"
              v-for="(item, index) in 5"
              :key="index"
            >
              <input name="radio-score" type="radio" />
              <span class="radio-label radio-text-option radio-selected-color">
                <el-rate
                  :value="item"
                  disabled
                  :colors="['#000', '#000', '#000']"
                >
                </el-rate>
              </span>
            </div>
          </div>
        </div>
        <div class="rating-content">
          <div class="mobile-filter-title">Reviews</div>
          <div class="mobile-filter-radio-buttons">
            <div class="mobile-filter-radio-button">
              <input name="radio-score2" type="radio" checked="checked" />
              <span class="radio-label radio-text-option radio-selected-color"
                >All</span
              >
            </div>
            <div class="mobile-filter-radio-button">
              <input name="radio-score2" type="radio" checked="checked" />
              <span class="radio-label radio-text-option radio-selected-color"
                >With Images & Videos</span
              >
            </div>
          </div>
        </div>
      </div>
      <div class="mobile-filters-footer-btn">
        <div class="footer-text">Show 0 Reviews</div>
      </div>
    </div>
  </div>
</template>

<script>
import { Validator } from "simple-vue-validator";

export default {
  props: ["master_sku", "product_id"],
  data() {
    return {
      displayTab: "",
      value1: 5,
      showRefTab: "review",
      reviewFiltter: false,
      imageVideo: false,
      sort: false,
      userName: "",
      userEmail: "",
      mobileFilter: false,
      review: "",
      title: "",
      reviewStar: 0,
      questionTitle: "",
      question: "",
    };
  },

  // form validator
  validators: {
    questionTitle: function (value) {
      return Validator.value(value).required();
    },
    question: function (value) {
      return Validator.value(value).required();
    },
    userName: function (value) {
      return Validator.value(value).required();
    },
    title: function (value) {
      return Validator.value(value).required();
    },
    review: function (value) {
      return Validator.value(value).required();
    },
    reviewStar: function (value) {
      return Validator.value(value).required().integer();
    },
  },

  methods: {
    toggleShow(event) {
      this.showRefTab = event;
    },

    changeTab(event) {
      this.displayTab = event;
    },

    async fetchReviews() {
      try {
        var form = {};
        form.master_sku = this.master_sku;
        form.store = 1;

        let response = await this.$store.dispatch("cartAjax/actCartAjax", {
          method: "post",
          url: `/review/review-list`,
          params: form,
        });
        if (response.success) {
          this.$store.commit("updateReviews", { payload: response.data });
        } else {
          throw "no response from api";
        }
      } catch (error) {
        console.log("error from fetch reviews", error);
      }
    },

    async addReview() {
      try {
        if (
          this.$store.state.cartAjax.customer_id == "" &&
          this.$store.state.cartAjax.customer_session == ""
        )
          return this.$router.push("/login");
        if (
          this.title == "" &&
          this.description == "" &&
          this.reviewStar == 0 &&
          this.review == ""
        ) {
          return false;
        }
        var data = {};
        data.master_sku = this.master_sku;
        data.store = this.$store.state.list.store;
        data.product_id = this.product_id;
        data.customer_id = this.$store.state.cartAjax.customer_id;
        data.customer_session = this.$store.state.cartAjax.customer_session;
        data.title = this.title;
        data.description = this.review;
        data.rating = this.reviewStar;

        let response = await this.$store.dispatch("cartAjax/actCartAjax", {
          method: "post",
          url: `/review/add-review`,
          token: this.$store.state.cartAjax.customer_token,
          params: data,
        });
        if (response.success) {
          console.log(
            "response from the single product footer add review",
            response
          );
          this.$toast.open(response.message);
        } else {
          this.$toast.error(response.message);
          throw `no response from api >>> , ${respone.message}`;
        }
      } catch (error) {
        console.log("error from add review >>", error);
      }
    },

    async addQuestion() {
      try {
        var validation = await this.$validate();
        if (
          this.$store.state.cartAjax.customer_id == "" &&
          this.$store.state.cartAjax.customer_session == ""
        )
          return this.$router.push("/login");
        if (
          this.question == "" &&
          this.questionTitle == "" &&
          this.userName == ""
        )
          return;
        var data = {};
        data.master_sku = this.master_sku;
        data.store = this.$store.state.list.store;
        data.product_id = this.product_id;
        data.customer_id = this.$store.state.cartAjax.customer_id;
        data.customer_session = this.$store.state.cartAjax.customer_session;
        data.title = this.questionTitle;
        data.question = this.question;
        data.name = this.userName;

        let response = await this.$store.dispatch("cartAjax/actCartAjax", {
          method: "post",
          url: `/question/add-question`,
          token: this.$store.state.cartAjax.customer_token,
          params: data,
        });
        if (response.success) {
          console.log(
            "response from the single product footer add review",
            response
          );
          this.$toast.open(response.message);
        } else {
          this.$toast.error(response.message);
          throw `no response from api >>> , ${respone.message}`;
        }
      } catch (error) {
        console.log("error from add review >>", error);
      }
    },

    // add like to the post
    async addAndRemoveLike(item) {
      try {
        if (this.$store.state.cartAjax.customer_id == "") {
          return this.$router.push("/login");
        }
        var data = {};
        data.master_sku = this.master_sku;
        data.store = this.$store.state.list.store;
        data.product_id = this.product_id;
        data.customer_id = this.$store.state.cartAjax.customer_id;
        data.rr_id = item.rr_id;

        let response = await this.$store.dispatch("cartAjax/actCartAjax", {
          method: "post",
          url: "/likes/add-like",
          token: this.$store.state.cartAjax.customer_token,
          params: data,
        });

        if (response.success) {
          this.fetchReviews();
          this.$toast.open(response.message);
        } else {
          throw `error from the api >> ${response.message}`;
        }
      } catch (error) {
        console.log("error from the add remove likes >>>", error);
      }
    },

    // add deslike to the post
    async addAndRemoveDeslike(item) {
      try {
        if (this.$store.state.cartAjax.customer_id == "") {
          return this.$router.push("/login");
        }
        var data = {};
        data.master_sku = this.master_sku;
        data.store = this.$store.state.list.store;
        data.product_id = this.product_id;
        data.customer_id = this.$store.state.cartAjax.customer_id;
        data.rr_id = item.rr_id;

        let response = await this.$store.dispatch("cartAjax/actCartAjax", {
          method: "post",
          url: "/likes/add-dislike",
          token: this.$store.state.cartAjax.customer_token,
          params: data,
        });

        if (response.success) {
          this.fetchReviews();
          this.$toast.open(response.message);
        } else {
          throw `error from the api >> ${response.message}`;
        }
      } catch (error) {
        console.log("error from the add remove deslike >>>", error);
      }
    },
  },

  beforeMount() {
    this.fetchReviews();
  },
};
</script>