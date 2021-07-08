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
      cmsData: {},
      seoData: "",
    };
  },

  head() {
    return {
      title: this.seoData.meta_title,
      meta: [
        {
          name: "description",
          content: this.seoData.meta_description,
        },
        {
          property: "keywords",
          content: this.seoData.meta_keyword,
        },
      ],
    };
  },

  async fetch() {
    let pageData = this.$store.state.cmsPagesData[this.$route.params.cmsPage];
    if (pageData != undefined) {
      this.cmsData = pageData.content;
      this.seoData = pageData;
    } else {
      this.$router.push("/404");
    }
  },
  methods: {
    vanillaJs() {
      var clickMe = document.querySelectorAll(".accordion-section");
      if (clickMe) {
        clickMe.forEach((event) => {
          event.addEventListener("click", () => {
            event.classList.toggle("active");
          });
        });
      }
    },
  },

  mounted() {
    if (this.$route.params.cmsPage === "faq") {
      this.vanillaJs();
    }
  },

  updated() {
    if (this.$route.params.cmsPage === "faq") {
      this.vanillaJs();
    }
  },
};
</script>
