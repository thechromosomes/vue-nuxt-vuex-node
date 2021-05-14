<template>
  <client-only>
    <div>
      <div class="account-page">
        <div class="container">
          <div class="row">
            <div class="col-12">
              <h1 class="title clearfix proxima_bold">My Account</h1>
            </div>
          </div>
          <div class="row">
            <div class="col-md-12 col-lg-3 col-12">
              <Sidebar />
            </div>
            <div
              class="col-md-12 col-lg-9 col-12"
              v-if="Object.keys(customer).length != 0"
            >
              <div class="customer-head">
                <h2 class="customer-name proxima_bold">hi, {{ customer.full_name }}!</h2>
                <p class="proxima_regular">
                  You can review and edit your account settings and orders here
                </p>
              </div>
              <div class="row">
                <div class="col-md-6 col-lg-6 col-12">
                  <div class="my-profile">
                    <div class="profile-content">
                      <div class="img">
                        <img
                          src="~/assets/images/profile.png"
                          alt="My Profile Icon"
                        />
                      </div>

                      <div class="profile-data">
                        <h2 class="proxima_bold">my profile</h2>
                        <h3 class="proxima_semi-bold">profile information</h3>
                        <p class="name proxima_regular">
                          name: <span>{{ customer.full_name }}</span>
                        </p>
                        <p class="name proxima_regular">
                          email: <span>{{ customer.email }}</span>
                        </p>
                        <p class="name proxima_regular">password: <span>*******</span></p>
                        <div class="edit">
                          <nuxt-link to="/EditProfile" class="proxima_regular"
                            >edit my profile</nuxt-link
                          >
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-6 col-lg-6 col-12">
                  <div class="my-profile">
                    <div class="profile-content">
                      <div class="img">
                        <img
                          src="~/assets/images/addressbook.png"
                          alt="My Profile Icon"
                        />
                      </div>

                      <div class="profile-data">
                        <h2 class="proxima_bold">My Address book</h2>
                        <p class="name proxima_regular">
                          name: <span>{{ customer.full_name }}</span>
                        </p>
                        <p class="name proxima_regular">
                          address:
                          <span
                            class="add-data"
                            v-if="
                              typeof maddress == 'object' &&
                                maddress !== null &&
                                Object.keys(maddress).length != 0
                            "
                            >{{
                              `${maddress.city}, ${maddress.state},  ${maddress.street_address}, ${maddress.pin_code}`
                            }}</span
                          >
                          <span v-else class="proxima_regular"> No active address </span>
                        </p>
                        <div class="edit proxima_regular">
                          <NuxtLink to="/addresses">View Address book</NuxtLink>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div> 
            </div>
            <div v-else class="col-md-8 col-lg-8 col-12">
              <NuxtLink to="/login">
                <p class="proxima_regular">
                  Seems you did not log in yet. Please head back to the log in
                  page
                </p>
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </client-only>
</template>
<script>
import Sidebar from "@/components/my-account/Sidebar.vue";
import { mapState } from "vuex";

export default {
  components: {
    Sidebar
  },
  data() {
    return {};
  },
  computed: {
    ...mapState({
      customer: state => state.cartAjax.customerDetail,
      maddress: state => state.cartAjax.maddress
    })
  },
  beforeMount() {
    if (
      this.$store.state.cartAjax.customer_session == "" &&
      this.$store.state.cartAjax.customer_id == ""
    ) {
      this.$router.push("/login");
    }
  }
};
</script>
<style scoped>
@import url("~/assets/css/pages-css/myAccount.css");
</style>
