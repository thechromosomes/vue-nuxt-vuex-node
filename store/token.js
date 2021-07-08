export const state = () => ({
  satya: "",
  keys: "LAgWujCbGUorjTsq8dN53KgS1GEcL2CDX3lQHnLwkw6k09V8Lvi7wSZ4sRn00kdn",
  jsonPass: "LAgWujCbGUorjTssRn00kdn",
  pimApi: "",
  cartApi: "",
  cmsError: null,
});

export const mutations = {
  // generate and refresh token
  generateToken(state) {
    // staging
    state.pimApi = "https://tmpim.hostx1.de/pim";
    // live
    // state.pimApi = "https://smpim.stevemadden.in/pim/";

    // staging
    state.cartApi = "https://tmcart.hostx1.de/api/v1";
    // live
    // state.cartApi = "https://smcart.stevemadden.in/api/v1";
  },
};

export const actions = {
  async generateToken({ commit }, payload) {
    commit("generateToken", payload);
  },
};
