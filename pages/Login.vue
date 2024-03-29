<template>
  <div>
    <client-only>
      <div class="login-box">
        <div class="container">
          <div class="systemForm">
            <h1 class="title proxima_bold">
              Please enter your
              {{ showOtp ? `OTP sent to your mobile number` : `mobile number` }}
            </h1>
            <div class="inputWrapper">
              <label for="newnumber" class="label proxima_regular"
                >Mobile Number*</label
              >
              <input
                type="text"
                v-model.number="mobileNumber"
                ref="mobile_number"
                name="newnumber"
                class="text number input-box proxima_regular"
                autocomplete="off"
              />
              <span
                class="input-error text-red proxima_regular"
                v-if="pageError != ''"
              >
                {{ pageError }}</span
              >
            </div>
            <div class="inputWrapper" v-if="showOtp">
              <label for="otp" class="label proxima_regular"
                >One Time Password (OTP)*</label
              >
              <input
                type="text"
                v-model="otpNumber"
                name="otp"
                id="otp"
                class="text input-box proxima_regular"
                maxlength="4"
                autocomplete="off"
              />
              <span
                class="input-error proxima_regular"
                v-if="otpPageError != ''"
              >
                {{ otpPageError }}</span
              >
              <div class="resend-otp" v-if="showOtp">
                <span
                  style="cursor: pointer"
                  v-if="showOtp && this.resend_otp_time == 0"
                  @click="registeruser()"
                  class="proxima_regular"
                  >Resend OTP</span
                >
                <span v-else>
                  00:{{ resend_otp_time.toString().padStart(2, 0) }}
                </span>
              </div>
            </div>

            <div class="action_bottom btnWrapper" v-if="!showOtp && sendButton">
              <input
                class="btn proxima_regular"
                type="submit"
                value="Send OTP"
                @click.prevent="registeruser()"
              />
            </div>
            <div class="action_bottom btnWrapper" v-else-if="showOtp">
              <input
                class="btn proxima_regular"
                type="submit"
                value="Continue"
                @click.prevent="registeruserOtp()"
              />
            </div>
            <div class="errorMsg"></div>
          </div>
        </div>
      </div>

      <!-- vue recaptch -->
      <vue-recaptcha
        ref="invisibleRecaptcha"
        @verify="recaptchaSuccess"
        @expired="onExpired"
        @error="recaptchaError"
        size="invisible"
        sitekey="6Le_f9EaAAAAAJKZJt0KCc1cMStOPeZMluouawWz"
        :loadRecaptchaScript="true"
      ></vue-recaptcha>
    </client-only>
  </div>
</template>

<script>
import VueRecaptcha from "vue-recaptcha";

export default {
  components: { VueRecaptcha },
  data() {
    return {
      mobileNumber: "",
      pageError: "",
      showOtp: false,
      otpNumber: "",
      otpPageError: "",
      captchaToken: "",
      resend_otp_time: 0,
      sendButton: false,
      timeout: null
    };
  },

  methods: {
    async registeruser() {
      try {
        if (/^(\+\d{1,3}[- ]?)?\d{10}$/.test(this.mobileNumber)) {
          if (this.captchaToken == "") {
            this.pageError = "Error occured, please try reloading your page";
            return;
          }
          let form = {
            phone: this.mobileNumber,
            captcha: this.captchaToken
          };

          this.resend_otp_time = 60;
          let response = await this.$store.dispatch("cartAjax/actCartAjax", {
            method: "post",
            url: `/customer/send-otp`,
            params: form
          });
          this.countDownTimer();
          if (response.success) {
            this.showOtp = true;
            this.pageError = "";
            this.$toast.open(`OTP sent to ${this.mobileNumber}`);
          } else {
            if (
              !response.success &&
              response.data &&
              response.data.blocked == 1
            ) {
              this.pageError = response.message;
            } else {
              throw response.message;
            }
          }
        } else {
          this.pageError = "Please enter valid mobile number";
        }
      } catch (error) {
        this.pageError = "Error occured. Please try reloading and check number";
        console.log("error from log in page", error);
        this.$globalError(`error from log in page (registeruser)>>>> ${error}`);
      }
    },

    async registeruserOtp() {
      try {
        var otpno = /^\d*(?:\.\d{1,2})?$/;
        if (this.otpNumber != "" && this.otpNumber.match(otpno)) {
          var form = {};
          if (
            this.$store.state.cartAjax.cart_id != null &&
            this.$store.state.cartAjax.cart_id != ""
          ) {
            form.cart_id = this.$store.state.cartAjax.cart_id;
            form.cart_session = this.$store.state.cartAjax.cart_session;
          }
          form.store = this.$store.state.list.page;
          form.otp = this.otpNumber;
          form.phone = this.mobileNumber;

          let response = await this.$store.dispatch("cartAjax/actCartAjax", {
            method: "post",
            url: `/customer/validate-otp`,
            params: form
          });
          if (response.success) {
            this.$store.commit("cartAjax/registerUser", {
              payload: response,
              vm: this
            });

            this.$gtm.push({
              event: "Login",
              category: "Login",
              action: "Login Success"
            });
            this.$gtm.push({
              event: "Login_status",
              category: "Login_status",
              action: "Login Success",
              Mobile_no: this.mobileNumber
            });
          } else {
            this.otpPageError = response.message;
            throw "Error while requesting";
          }
        } else {
          this.otpPageError = "please enter valid otp";
        }
      } catch (error) {
        this.$globalError(
          `error from log in page (registeruserOtp) >>>> ${error}`
        );
        console.log("error from log in page", error);
      }
    },

    recaptchaSuccess(recaptchaToken) {
      this.captchaToken = recaptchaToken;
    },
    onExpired() {
      this.captchaToken = "";
    },
    recaptchaError() {
      this.captchaToken = "";
      this.$toast.error(
        "Google Recaptcha Error. Please contact administration'"
      );
    },

    // resend otp timer
    countDownTimer() {
      let that = this;
      if (this.resend_otp_time > 0) {
        this.timeout = setTimeout(() => {
          this.resend_otp_time -= 1;
          this.countDownTimer();
        }, 1000);
      }
      if (this.resend_otp_time == 2) {
        that.$refs.invisibleRecaptcha.execute();
      }
    }
  },

  beforeMount() {
    if (
      this.$store.state.cartAjax.customer_session != "" ||
      this.$store.state.cartAjax.customer_id != ""
    ) {
      this.$router.push("/");
      return;
    }
  },
  watch: {
    mobileNumber: function() {
      if (/^(\+\d{1,3}[- ]?)?\d{10}$/.test(this.mobileNumber)) {
        this.$refs.invisibleRecaptcha.execute();
        this.timeout = setTimeout(() => {
          this.sendButton = true;
        }, 1500);
      } else {
        this.showOtp = false;
        this.pageError = "";
      }
    }
  },
  beforeDestroy() {
    clearTimeout(this.timeout);
  }
};
</script>

<style scoped>
.resend-otp {
  text-align: right;
  margin-top: 10px;
}
/* ===========login page css ================== */

.login-box {
  width: 100%;
  padding: 50px 30px;
}

.login-box .systemForm {
  max-width: 480px;
  margin: 0 auto;
  /* background-color: red; */
  padding: 20px 15px;
}

.login-box .systemForm .title {
  text-align: center;
  font-size: 26px;
  font-weight: normal;
  line-height: 30px;
  padding-bottom: 36px;
}

.login-box .systemForm .inputWrapper {
  margin-bottom: 20px;
}

.login-box .systemForm .label {
  display: block;
  margin-bottom: 5px;
  text-transform: capitalize;
  font-size: 16px;
}

.login-box .systemForm input.input-box {
  width: 100%;
  padding: 10px;
  border: 1px solid #000;
}

.login-box .action_bottom {
  width: 100%;
}

.login-box .action_bottom input {
  background: #000;
  color: #fff;
  width: 100%;
  border-radius: 0;
  letter-spacing: 0.5px;
  cursor: pointer;
}

.error {
  color: red;
}

/* ===============767=================== */
@media only screen and (max-width: 767px) {
  .login-box .systemForm .title {
    font-size: 20px;
  }
  .login-box {
    padding: 30px 0px;
  }
}
</style>
