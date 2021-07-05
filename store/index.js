export const state = () => ({
  list: {
    firstgtm: true,
    search_input: "",
    breadcrumb: "",
    page_error: "",
    service: "category",
    description: "",
    meta_title: "",
    meta_description: "",
    meta_keyword: "",
    Product_list: [],
    Product_count: "",
    product_loader: true,
    page: 1,
    filters: [],
    sort: [],
    pass_url_key: "",
    count: 12,
    store: 1,
    total_page: 0,
    pageHead: "",
    applied_filters: [],
    sortingData: { code: "", dir: "desc" },
  },

  singleProductList: {
    breadcrumb: [],
    url_key: "",
    store: 1,
    service: "product",
    single_prod_data: [],
    product_loader: false,

    total_review: 0,
    average_rating: 0,
    reviews_list: [],
  },

  cmsError: "",
  homePageData: {},
  cmsPagesData: {},
  header: [],
  pageLoader: false,
  // base URL is using in og tags and log generator API >>> all product
  BASE_URL: "https://tm.hostx1.de",
  //BASE_URL: "http://localhost:12000",
  isMobile: false,
  instaPost: [],
  bestSellerWomen: [],
  bestSellerMan: [],
  bannerData: [],
  compareItem: [],
});

export const actions = {
  pimAjax(context, data) {
    if (!data.params.noLoader) {
      context.commit("updatePageLoader", { display: true });
    }
    let request = data.params;
    var authOptions = {
      method: data.method,
      url: context.state.token.pimApi + data.url,
      headers: {
        "Content-Type": "application/json",
      },
      params: request,
    };

    return new Promise((resolve, reject) => {
      this.$axios(authOptions)
        .then((response) => {
          context.commit("updatePageLoader", { display: false });
          resolve(response.data);
        })
        .catch((error) => {
          this.$globalError(`error from pimAjax action >>>> ${error}`);
          context.commit("updatePageLoader", { display: false });
          reject(error);
        });
    });
  },

  async getInstaPost({ commit }, { token }) {
    try {
      var authOptions = {
        method: "get",
        url: `https://graph.instagram.com/me/media?fields=media_url,media_type,permalink,thumbnail_url&count=6&access_token=${token}`,
        headers: {
          "Content-Type": "application/json",
        },
      };
      let response = await this.$axios(authOptions);
      if (response.status == 200) {
        commit("updateInstaPost", { posts: response });
      } else {
        throw "encountered error while fetching instagram data";
      }
    } catch (error) {
      console.log("error from get insta post", error);
    }
  },

  // fetching data for the home page best seller
  async getBestSeller(context, form) {
    try {
      var authOptions1 = {
        method: form.method,
        url: context.state.token.pimApi + form.url,
        headers: {
          "Content-Type": "application/json",
        },
        params: form.params,
      };

      let tempResponse = await this.$axios(authOptions1);

      if (tempResponse.data.response.success == 1) {
        context.commit("updateBestSeller", {
          postsFemale: tempResponse.data.result.womens,
          postsMale: tempResponse.data.result.mens,
        });
      } else {
        throw "encountered error while fetching best seller data";
      }
    } catch (error) {
      console.log("error from the get best seller Store action >>", error);
    }
  },
};

export const mutations = {
  // set header menu data
  setHeaderData(state, data) {
    state.header = data;
  },

  // to compare item
  toCompareItems(state, data) {
    let item = state.compareItem.findIndex(
      (_item) => _item.sku === data.singleProd.sku
    );

    if (item > -1) {
      state.compareItem.splice(item, 1);
    } else {
      if (state.compareItem.length == 3) {
        return;
      }
      let obj = {
        name: data.singleProd.name,
        sku: data.singleProd.sku,
        image: data.singleProd.image,
        collection: data.singleProd.collection,
        url: data.singleProd.url_key,
      };
      state.compareItem.push(obj);
    }
  },
  // get cms data for the home page
  setCmsData(state, cmsData) {
    try {
      if (cmsData.response.success == 1) {
        state.homePageData = cmsData.result.Home;
        state.cmsPagesData = cmsData.result;
      } else {
        throw cmsData.response.error_message || "problem with the api call";
      }
    } catch (error) {
      console.log("error from setCmsData mutation >>>", error);
      this.$globalError(`error from setCmsData mutation >>> ${error}`);
      state.cmsError = error;
    }
  },

  st_search(state, searchInput) {
    if (searchInput == undefined) {
      state.list.search_input = "";
    } else {
      state.list.search_input = searchInput;
    }
  },

  // prepare state for product parameters before call
  prepareState(state, { routeParam, pageNo }) {
    state.list.product_loader = true;
    state.list.page = pageNo;
    state.list.Product_count = "";
    // state.list.sort = [
    //   { code: "default", dir: "desc", label: "default" },
    //   { code: "selling_price", dir: "asc", label: "Price (Low to High)" },
    //   { code: "selling_price", dir: "desc", label: "Price (High to Low)" },
    //   { code: "product_position", dir: "asc", label: "Oldest to newest" },
    //   { code: "product_position", dir: "desc", label: "Newest to oldest" },
    //   { code: "discount", dir: "asc", label: "Discount" },
    // ];

    state.list.sort = [
      { code: "default", dir: "desc", label: "default" },
      // { code: "hot_items", dir: "asc", label: "Hot Items" },
      { code: "new_arrival", dir: "asc", label: "New Arrival" },
      { code: "selling_price", dir: "asc", label: "Price Low to High" },
      { code: "selling_price", dir: "desc", label: "Price High to Low" },
      { code: "best_seller", dir: "asc", label: "Best Seller" },
    ];

    if (pageNo == 1) {
      state.list.Product_list = [];
    }
    state.list.pass_url_key = routeParam;
  },

  // to update state data for the product page
  updateState(state, { error, data }) {
    if (error == null) {
      if (data.response.success === 1) {
        if (data.result.products.length === 0) {
          state.list.page_error = "No product found";
        }

        state.list.breadcrumb = JSON.parse(data.result.breadcrumb);
        state.list.description = data.result.description;
        state.list.meta_title = data.result.meta_title;
        state.list.meta_description = data.result.meta_description;
        state.list.meta_keyword = data.result.meta_keyword;
        // state.list.Product_list = data.result.products;
        state.list.Product_list = state.list.Product_list.concat(
          data.result.products
        );

        state.list.pageHead = data.result.name;
        state.list.filters = data.result.filters;
        if (data.query.filter) {
          let array = data.query.filter.split(",");
          state.list.applied_filters = array;
        }
        if (!data.query.filter) {
          state.list.applied_filters = [];
        }
        if (data.query.sort_dir && data.query.sort_by) {
          state.list.sortingData.code = data.query.sort_by;
          state.list.sortingData.dir = data.query.sort_dir;
        } else {
          state.list.sortingData.code = "default";
          state.list.sortingData.dir = "desc";
        }
        if (data.query) {
          state.list.total_page = data.query.total_page;
          state.list.page = data.query.page;
        }
        state.list.Product_count = data.result.count;
        state.list.get_product_length = data.result.products.length;
        state.list.product_loader = false;
      } else {
        state.list.page_error = data.response.error_message;
        state.list.product_loader = false;
      }
    } else {
      state.list.page_error = error;
    }
  },

  // prepare state for single product page
  prepareStateForSingleProd(state, { routeParam }) {
    state.singleProductList.product_loader = true;
    state.singleProductList.page = 1;
    state.singleProductList.url_key = routeParam;
  },

  // update the single product state
  updateSingleProdState(state, { error, data }) {
    if (error == null) {
      if (data.response.success === 1) {
        if (!data.result) {
          state.list.page_error =
            "No product found, please try by removing last applied filter.";
        }
        state.singleProductList.single_prod_data = data.result;
        // if (state.singleProductList.breadcrumb.length > 0) {
        state.singleProductList.breadcrumb = JSON.parse(data.result.breadcrumb);
        // }
      } else {
        state.singleProductList.page_error = data.response.error_message;
        state.singleProductList.product_loader = false;
      }
    } else {
      state.list.page_error = error;
    }
  },

  // update filter array

  updateFilterArray(state, { item }) {
    let filterParam = `${item.code}~${item.value_key}`;
    if (state.list.applied_filters.length == 0) {
      state.list.applied_filters.push(filterParam);
      this.$router.push({
        query: {
          ...this.$router.app.context.query,
          filter: state.list.applied_filters,
        },
      });
      return;
    }
    let i = state.list.applied_filters.findIndex(
      (_item) => _item === filterParam
    );
    if (i > -1) {
      state.list.applied_filters.splice(i, 1);
      this.$router.push({
        query: {
          ...this.$router.app.context.query,
          filter: state.list.applied_filters,
        },
      });
      return;
    } else {
      state.list.applied_filters.push(filterParam);
      this.$router.push({
        query: {
          ...this.$router.app.context.query,
          filter: state.list.applied_filters,
        },
      });
      return;
    }
  },

  // universal Mutate function
  universalListMutate(state, { data }) {
    state.list.page = data;
  },

  // update state via color variation
  updateProductColor(state, { product, index }) {
    try {
      let tempPost = { ...state.list.Product_list[index] };
      tempPost.image = product.image;
      tempPost.price = product.price;
      tempPost.url_key = product.url_key;
      tempPost.color = product.color;

      state.list.Product_list.splice(index, 1, tempPost);
    } catch (error) {
      console.log("error from update product color >>> ", error);
      this.$globalError(`error from update product color >>> ${error}`);
    }
  },

  // update loader status
  updatePageLoader(state, { display }) {
    state.pageLoader = display;
  },

  // update reviews data
  updateReviews(state, { payload }) {
    state.singleProductList.reviews_list = payload.reviews;
    state.singleProductList.total_review = payload.total_review;
    state.singleProductList.average_rating = payload.average_rating;
  },

  // first GTM state
  firstgtmState(state) {
    state.list.firstgtm = false;
  },

  // update device information
  updateDeviceInfo(state, { payload }) {
    state.isMobile = payload;
  },

  updateInstaPost(state, { posts }) {
    state.instaPost = posts.data.data;
  },

  updateBestSeller(state, { postsFemale, postsMale }) {
    state.bestSellerMan = postsMale;
    state.bestSellerWomen = postsFemale;
  },

  // set banner data
  setBannerData(state, payload) {
    state.bannerData = payload;
  },
};
