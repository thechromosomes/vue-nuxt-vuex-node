<template>
  <div>
    <div v-if="Object.keys(cmsData).length != 0">
      <span v-html="cmsData"></span>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      cmsData: {}
    };
  },

  async fetch() {
    let pageData = this.$store.state.cmsPagesData[this.$route.params.cmsPage];
    if (pageData != undefined) {
      this.cmsData = pageData.content;
    } else {
      this.$router.push("/404");
    }
  },
  methods: {
    cmsToggle(event) {
      alert("Hi");
      console.log(event);
      if (event.target.matches("accordion-section")) {
        event.target.classList.add("active");
      }
    }
  },

  mounted() {
    // Get the .click-me element
    var elements = document.getElementsByClassName("accordion-section");
    // clickMe.addEventListener("click", this.cmsToggle);
    for (var i = 0; i < elements.length; i++) {
      elements[i].addEventListener("click", this.cmsToggle, false);
    }

    // This will run when the .click-me element is clicked
    // if (clickMe) {
    //   clickMe.addEventListener("click", function (event) {
    //     alert("hi");
    //     clickMe.classList.add('active');
    //   });
    // }
  }
};
</script>
