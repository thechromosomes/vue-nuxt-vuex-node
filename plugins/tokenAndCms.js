// generating token for the api call and fetching CMS data for the home page

export default async (context) => {
  try {
    // banner slider data for the home page
    let bannerData = await context.store.dispatch("pimAjax", {
      method: "get",
      url: `/pimresponse.php`,
      params: {
        service: "banner_slider",
        store: 1,
      },
    });
    if (bannerData.response.success == 1) {
      await context.store.commit("setBannerData", bannerData.result);
    }

    let form = {};
    form.service = "cms_page";
    form.store = 1;

    let cmsData = await context.store.dispatch("pimAjax", {
      method: "get",
      url: `/pimresponse.php`,
      params: form,
    });
    context.store.commit("setCmsData", cmsData);

    // set header menu
    let header = {};
    header.service = "menu";
    header.store = 1;
    let headerData = await context.store.dispatch("pimAjax", {
      method: "get",
      url: `/pimresponse.php`,
      params: header,
    });

    if (headerData.result.length > 0 && headerData.response.success == 1) {
      context.store.commit("setHeaderData", headerData.result);
    } else {
      throw "while fetching header menu data from backend API";
    }

    // get instagram data
    // context.store.dispatch("getInstaPost", {
    //   token:
    //     "IGQVJWWjVjRUJWbTl2cGtySDFxSmJyTV9jYTZANYmp6ZAlJUN3lCeTJac2VtTDB2SG1Makl1SFBrQmlSRE52SG5GcWMwX2lGNnpHU3NBRVoyamIwRlRBbkNQZAE44aEtEaUNWN3NYUTZAUVFFTVVg1OG1xRgZDZD",
    // });
  } catch (error) {
    context.$globalError(
      `there is an error from token and cms plugin >>> ${error}`
    );
  }
};
