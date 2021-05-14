import Vue from "vue";
import * as VueGoogleMaps from "vue2-google-maps";
Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyB_w48EfCO6yaYhPsrbKiQ-8yBUcJVTUpw",
    libraries: "places,geometry",
  },
});
