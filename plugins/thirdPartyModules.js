import Vue from "vue";
import SimpleVueValidation from "simple-vue-validator";

Vue.use(SimpleVueValidation);

Vue.filter("numberWithCommas", (num) =>
  num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
);
