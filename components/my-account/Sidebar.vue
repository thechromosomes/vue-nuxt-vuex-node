<template>
  <div class="stickey-profile">
    <div class="cus-address cus-ore customer_profile">
      <div class="accountMenu proxima-regular sidebar">
        <ul>
          <li class="proxima_regular">
            <nuxt-link
              :class="[
                $route.path == '/Dashboard' ? 'active-account-sidebar' : '',
              ]"
              to="/Dashboard"
              >View Personal Information</nuxt-link
            >
          </li>
          <!-- <li>
            <nuxt-link
              :class="[
                $route.path == '/MyProfile' ? 'active-account-sidebar' : '',
              ]"
              to="/MyProfile"
              >My Profile</nuxt-link
            >
          </li> -->
          <li class="proxima_regular">
            <nuxt-link
              :class="[
                $route.path == '/addresses' ? 'active-account-sidebar' : '',
              ]"
              to="/addresses"
              >My Address Book</nuxt-link
            >
          </li>
          <li class="proxima_regular">
            <nuxt-link
              :class="[
                $route.path == '/myorder' ? 'active-account-sidebar' : '',
              ]"
              to="/myorder"
              >View Order Information</nuxt-link
            >
          </li>
          <!-- <li>
            <nuxt-link to="/Returns">Generate Return Label</nuxt-link>
          </li> -->
          <li style="cursor: pointer" class="proxima_regular">
            <a @click.prevent="logOut">Logout</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "sidebar",
  methods: {
    logOut: async function () {
      var form = {};
      form.customer_id = this.$store.state.cartAjax.customer_id;
      form.customer_session = this.$store.state.cartAjax.customer_session;
      this.$store
        .dispatch("cartAjax/actCartAjax", {
          method: "post",
          url: `/customer/logout`,
          token: this.$store.state.cartAjax.customer_token,
          params: form,
        })
        .then(async (response) => {
          if (response.data.success === true) {
            $cookies.remove(
              window.location.hostname.substring(10, 4) + "_cart_token"
            );
            $cookies.remove(
              window.location.hostname.substring(10, 4) + "_cart_session"
            );
            $cookies.remove(
              window.location.hostname.substring(10, 4) + "_cart_id"
            );
            $cookies.remove(
              window.location.hostname.substring(10, 4) + "_customer_session"
            );
            $cookies.remove(
              window.location.hostname.substring(10, 4) + "_customer_id"
            );

            $cookies.remove(
              window.location.hostname.substring(10, 4) + "_customer_token"
            );
            this.$toast.success(
              "You have been successfully logout. See you soon!"
            );
            location.reload();
          } else {
            this.$router.push("/");
          }
        })
        .catch((error) => {
          console.log("error from the log out page", error);
        });
    },
  },
};
</script>
<style scoped>
@import url("@/assets/css/pages-css/myAccount.css");
</style>