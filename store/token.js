export const state = () => ({
  pimApi: "",
  cartApi: "",
  cmsError: null,
});

export const mutations = {
  // generate and refresh token
  generateToken(state) {
    // staging
    // state.pimApi = "https://tmpim.hostx1.de/pim";

    // live
    state.pimApi = "https://tmpim.tumi.in/pim/";

    // staging
    // state.cartApi = "https://tmcart.hostx1.de/api/v1";

    // live
    state.cartApi = "https://tmcart.tumi.in/api/v1";
  },
};

export const actions = {
  async generateToken({ commit }, payload) {
    commit("generateToken", payload);
  },
};
