<template>
  <div>
    <div class="tumi_modal" v-show="showModel">
      <div class="tumi_overleay" @click.prevent="showModel = false"></div>

      <div class="tumi_model_body">
        <a
          title="close"
          aria-label="close"
          class="close"
          @click.prevent="showModel = false"
          ><span class="icon icon-x"></span
        ></a>
        <div class="model-base-inner">
          <div class="modal-header">
            Product information and warranty
          </div>
          <div class="model-contents">
            <div class="customer-page ">
              <p>
                Welcome to the world of TUMI - the leading international brand
                of travel, business and lifestyle accessories. Since 1975, TUMI
                has dedicated to providing our customers with an outstanding
                ownership experience. TUMI’s comprehensive product coverage is
                reflective of our commitment to our consumer’s ongoing
                satisfaction. Specifically, we make three commitments to our
                customers:
              </p>
              <p>
                1.You will enjoy using our innovative products that are designed
                and manufactured to be the best;<br />2.You will experience
                world-class, after-sales customer service;<br />3.For five (5)
                years after you purchase a TUMI product from one of our travel,
                business, or bag collections, or two (2) years for any wallet or
                accessory, from an authorized TUMI store or dealer, you will be
                covered by our Limited Warranty.
              </p>
              <p>
                TUMI’s warranty extends to the original owner; it is
                straightforward and comprehensive, and just part of the total
                TUMI ownership experience.
              </p>
              <h3>FIRST YEAR OF OWNERSHIP: WORRY FREE</h3>
              <p>
                With limited exceptions, if your TUMI product is damaged during
                the first twelve (12) months you own it - including damage
                caused by normal wear and tear, airline handling, or other
                transit damage - TUMI will cover all repair expenses, including
                shipping costs to and from our repair facility. If we determine
                that the product is damaged beyond repair, we will replace it.
                If we determine that a replacement product is not available, we
                will provide you with a product of comparable value. Damages not
                covered are damage resulting from abuse, cosmetic damage (such
                as scratched leather or stained fabrics), and incidental or
                consequential damages, such as damage to or loss of the contents
                of a bag, loss of use, loss of time, or similar expenses.
              </p>
              <h3>
                YEARS TWO THROUGH FIVE ON TRAVEL BAGS, BUSINESS CASES, CROSS
                BODY BAGS, TOTES, BACKPACKS AND HANDBAGS AND FOR THE SECOND YEAR
                OF OWNERSHIP OF WALLETS, ACCESSORIES AND OUTERWEAR: YOU ARE
                COVERED FOR MANUFACTURING DEFECTS AND NORMAL WEAR AND TEAR.
              </h3>
              <p>
                From the beginning of the second through the end of the fifth
                year when you own your TUMI travel item, business case or other
                bag, and for the second year of ownership for wallets,
                accessories, or outerwear, TUMI will repair any item that is
                damaged due to normal wear and tear, or defective in materials
                or workmanship, including any structural defects (such as
                defective handles, zippers, or locks) .For years two through
                five, we do not cover damage caused by airlines or other transit
                damage. Damage claims in transit cases should be filed against
                the carrier. Other damages not covered are damage resulting from
                abuse, cosmetic damage (such as scratched leather or stained
                fabrics) and incidental or consequential damages, such as damage
                to or loss of the contents of a bag, loss of use, loss of time,
                or similar expenses. Normal wear and tear for TUMI Outerwear
                does not include lost or missing buttons, torn fabrics or
                leathers or cosmetic damage as described above.
              </p>
              <p>
                Your only responsibility is to ship your item to us for repair,
                postage paid, or take it to a TUMI store or authorized TUMI
                dealer, who will be happy to process the repair. In some cases,
                there may be a nominal processing fee. Many repairs can actually
                be handled in the TUMI store, free of charge. If your item does
                need to be sent to our facility, we will repair it quickly and
                ship it back at no additional cost to you. In those cases where
                our warranty does not apply, your local service center will
                provide you with an estimate of any repair and return shipping
                costs that may be incurred.
              </p>
              <h3>TUMI GLOBAL LOCATOR:ONE-YEAR LIMITED WARRANTY</h3>
              <p>
                If your TUMI Global Locator has a manufacturer defect, or is
                damaged during the first twelve (12) months of ownership, TUMI
                will cover all repair expenses, including shipping costs to and
                from our repair facility if the product was purchased from an
                authorized reseller. If we determine that the product is damaged
                beyond repair, we will replace it. Not covered by this warranty
                are damages resulting from accident, abuse, misuse,
                modification, water damage or cosmetic damage (such as
                scratches, damage from wear and tear, dropping or other hard
                surface impact or the like).
              </p>
              <h3>YOU CAN EXPECT YEARS OF QUALITY SERVICE</h3>
              <p>
                We do have many customers with well-traveled bags more than five
                years old, that they would like to have refurbished or repaired.
                For these customers, we offer courteous, responsive service and
                the highest quality repairs and refurbishment at a reasonable
                cost. If we are unable to repair the bag, we will suggest
                alternative options. Please call your local service center
                before sending your product for repair or refurbishment to
                discuss shipping and handling costs and other fees.
              </p>
              <h3>TOTAL COMMITMENT</h3>
              <p>
                The bottom line is that at TUMI, we are totally committed to
                keeping you happy about our products and our service. Once you
                have had the pleasure of owning and using our products, we hope
                that they will become your trusted companions for life. You can
                reach us online, 24 hours a day, seven days a week. If you live
                in the Hong Kong or Macau, please call 800-961-974 from 9:00 AM
                to 18:00 PM (GMT +8) to speak live with a customer service
                representative.
              </p>
              <h3>PROOF OF PURCHASE</h3>
              <p>
                Please save your store receipt as proof of purchase. This will
                be needed to demonstrate your warranty coverage. Additionally,
                this will serve as proof that your purchase was made at an
                authorized TUMI retailer. Our Limited Warranty only applies to
                products that were purchased from an authorized TUMI store or
                dealer.
              </p>
              <p>
                Please visit the following link and let us manage your proof of
                purchase for you. Tumi.com/tumi-tracer/register-your-tumi.
              </p>
              <p>
                Registering with the TUMI Tracer® program records the date of
                purchase so that your information is in our system. Should you
                ever need to use our repair services, we can validate if your
                bag is still under warranty. Not all items we make have a tracer
                number, but most of our luggage, bags, and business cases do. If
                the item in question is not registered with TUMI Tracer® it will
                be your responsibility to provide proof of purchase at an
                authorized TUMI retailer. Please note: In China (including Hong
                Kong and Macau), Japan and Korea, TUMI Tracer® is not a primary
                valid form of Proof of Purchase. You will need the original
                store receipt to validate purchase is from an authorized TUMI
                retailer.
              </p>
              <p>
                This warranty gives you certain rights, and you may also have
                other rights, which may vary from state to state, or between
                different European countries. Some jurisdictions do not allow
                the exclusion or limitation of incidental or consequential
                damages, so the above limitation or exclusion may not apply to
                you.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showModel: true
    };
  }
};
</script>

<style scoped>
.tumi_modal {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 99;
}

.tumi_modal .tumi_overleay {
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: rgba(0, 0, 0, 0.5);
}

.tumi_modal .tumi_model_body {
  max-width: 600px;
  margin: 50px auto;
  width: 100%;
  background: #fff;
  padding: 55px 25px 10px;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
}

.tumi_modal .close {
  display: block;
  position: absolute;
  line-height: 1;
  color: #ccc;
  width: 25px;
  height: 25px;
  top: 10px;
  right: 10px;
  background: #222;
  text-align: center;
  opacity: 1;
}
.tumi_modal .close .icon-x {
  vertical-align: top;
  font-size: 16px;
}
.tumi_modal .model-base-inner {
  width: 100%;
  font-family: "proxima-nova-regular";
}
.tumi_modal .model-base-inner .modal-header {
  padding: 0 0 6px;
  border-bottom: 2px solid #ccc;
  margin-bottom: 15px;
  background-color: #fff;
  text-transform: none;
  font-weight: 400;
  font-size: 25px;
  letter-spacing: 0.025em;
  text-align: center;
  display: block;
}
.tumi_modal .model-base-inner .model-contents {
  width: 100%;
  overflow: auto;
  max-height: 450px;
}
.tumi_modal .model-base-inner .model-contents .customer-page {
  margin: 20px 0;
  padding: 0 40px;
}
.tumi_modal .model-base-inner .model-contents .customer-page p {
  font-weight: 400;
  font-size: 12px;
  color: #777;
  margin: 0 0 10px;
  line-height: 21px;
}
.tumi_modal .model-base-inner .model-contents .customer-page h3 {
  font-weight: 700;
  font-size: 18px;
  letter-spacing: 0.45px;
  text-transform: uppercase;
  color: #777;
}

@media only screen and (max-width: 767px) {
  .tumi_modal .tumi_model_body {
    max-width: 99%;
    padding: 10px 15px;
  }
  .tumi_modal .model-base-inner .modal-heade {
    font-size: 16px;
  }
  .tumi_modal .model-base-inner .model-contents .customer-page h3 {
    font-size: 14px;
  }
}
</style>
