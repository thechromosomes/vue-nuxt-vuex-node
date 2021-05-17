import jwt from "jsonwebtoken";

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
    state.satya = jwt.sign(
      {
        iss: "https://smcart.hostx1.de/auth/login",
        iat: 1611910895,
        exp: Math.floor(Date.now() / 1000) + 60 * 60,
        nbf: 1611910895,
        jti: "oOgLRFEfRGgsp4yr",
        sub: 1,
        prv: "87e0af1ef9fd15812fdec97153a14e0b047546aa",
        email: "apitokengenerator@gmail.com",
        password: state.jsonPass,
      },
      state.keys,
      { algorithm: "HS256" }
    );

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
