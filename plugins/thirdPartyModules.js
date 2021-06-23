import Vue from "vue";
import SimpleVueValidation from "simple-vue-validator";

Vue.use(SimpleVueValidation);

Vue.filter("numberWithCommas", (num) => {
  if (num) {
    // return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    var x = num;
    x = x.toString();
    var lastThree = x.substring(x.length - 3);
    var otherNumbers = x.substring(0, x.length - 3);
    if (otherNumbers != "") lastThree = "," + lastThree;
    var res = otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + lastThree;
    return res
  }
});
