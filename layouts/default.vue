<template>
  <div>
    <Header />
    <div class="main-class">
      <Nuxt />
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default {
  components: { Header, Footer },
  data() {
    return {
      path: ""
    };
  },
  watch: {
      "$store.state.list.search_input": {
      handler: function (after, before) {
        if (after == "") {
          if (this.path != "") {
            this.$router.push(this.path);
          }
          if (this.path == "/st-search") {
            this.$router.push("/");
          }
        }
        if (before == "") {
          // this.path = this.$route.path;
          this.$store.commit("intialSearchPath", this.$route.path);
          this.$router.push(
            `/st-search?q=${this.$store.state.list.search_input}`
          );
        } else {
          if (after != "") {
            this.$router.push({
              query: {
                ...this.$route.query,
                q: this.$store.state.list.search_input,
              },
            });
          }
        }
      },
    },
  }
};
</script>
<style scoped>
.main-class {
  min-height: 700px;
}


/* page route transition effect */
.page-enter-active,
.page-leave-active {
  transition: opacity 0.5s;
}
.page-enter,
.page-leave-to {
  opacity: 0;
}

.layout-enter-active,
.layout-leave-active {
  transition: opacity 0.5s;
}
.layout-enter,
.layout-leave-to {
  opacity: 0;
}
</style>
