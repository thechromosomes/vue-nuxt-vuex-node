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
  }
};
</script>
