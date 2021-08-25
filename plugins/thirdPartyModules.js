import Vue from "vue";
import SimpleVueValidation from "simple-vue-validator";
import vueDebounce from 'vue-debounce'
import VueLazyload from "vue-lazyload";

Vue.use(VueLazyload, {
  preLoad: 0,
  loading: '/prdLoader.gif',
  attempt: 1,
});
Vue.use(vueDebounce)

Vue.use(SimpleVueValidation);

Vue.filter("numberWithCommas", (num) => {
  if (num) {
    var x = num;
    x = x.toString();
    var lastThree = x.substring(x.length - 3);
    var otherNumbers = x.substring(0, x.length - 3);
    if (otherNumbers != "") lastThree = "," + lastThree;
    var res = otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + lastThree;
    return res
  }
});