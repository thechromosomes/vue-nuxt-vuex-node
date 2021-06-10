<template>
    <div>
         <section class="clp-banner">
         <img src="~assets/images/clp-pd-mob-banner.jpg" class="mobile-banner-clp-one">
         
          <div class="baneer-clp-content-mob">
                    <h2 class=" proxima_bold">LUGGAGE</h2>
                    <h3 class="proxima_bold">Innovative And Durable Features</h3>
                    <a class="hero-action-mob btn proxima_regular" target="_blank" href="">
                                View All<span class="icon icon-go"></span>
                        </a>
                    </div>
                
        <div class="container">
            <div class="row">
                <div class="col-sm-6">
                    <div class="baneer-clp-content">
                    <h2 class=" proxima_bold">LUGGAGE</h2>
                    <h3 class="proxima_bold">Innovative And Durable Features</h3>
                    <a class="hero-action btn proxima_regular" target="_blank" href="">
                                View All<span class="icon icon-go"></span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        </section> 
          <!-- ===================================== products clp ================ -->
   <section class="clp-products">
       <div class="container">
           <div class="row">
               <div class="col-lg-4 col-md-4 col-sm-4 col-4">
                   <div class="clp-pd-wrap">
                       <img src="~assets/images/clp-pd-1.jpg">
                       <h2 class="proxima_regular">CARRY-ON</h2>
                       <a class="TCLink_3 proxima_bold" href="">Buy Now &gt;</a>
                   </div>
               </div>
                <div class="col-lg-4 col-md-4 col-sm-4 col-4">
                   <div class="clp-pd-wrap">
                       <img src="~assets/images/clp-pd-2.jpg">
                       <h2 class="proxima_regular">CHECKED LUGGAGE</h2>
                       <a class="TCLink_3 proxima_bold" href="">Buy Now &gt;</a>
                   </div>
               </div>
                <div class="col-lg-4 col-md-4 col-sm-4 col-4">
                   <div class="clp-pd-wrap">
                       <img src="~assets/images/clp-pd-3.jpg">
                       <h2 class="proxima_regular">GARMENT BAG</h2>
                       <a class="TCLink_3 proxima_bold" href="">Buy Now &gt;</a>
                   </div>
               </div>
                <div class="col-lg-4 col-md-4 col-sm-4 col-4">
                   <div class="clp-pd-wrap">
                       <img src="~assets/images/clp-pd-4.jpg">
                       <h2 class="proxima_regular">BEST SELLER</h2>
                       <a class="TCLink_3 proxima_bold" href="">Buy Now &gt;</a>
                   </div>
               </div>
                <div class="col-lg-4 col-md-4 col-sm-4 col-4">
                   <div class="clp-pd-wrap">
                       <img src="~assets/images/clp-pd-5.jpg">
                       <h2 class="proxima_regular">NEW ARRIVAL</h2>
                       <a class="TCLink_3 proxima_bold" href="">Buy Now &gt;</a>
                   </div>
               </div>
                <div class="col-lg-4 col-md-4 col-sm-4 col-4">
                   <div class="clp-pd-wrap">
                       <img src="~assets/images/clp-pd-6.jpg">
                       <h2 class="proxima_regular">PERSONALIZATION</h2>
                       <a class="TCLink_3 proxima_bold" href="">Buy Now &gt;</a>
                   </div>
               </div>
           </div>
       </div>
   
   </section> 

    </div>
</template>
<style scoped>
/* =========================clp page-1 css strt here============= */
.clp-banner{ width: 100%;min-height: 460px; background-image: url(~assets/images/delhtop-banner-s-lagguge.jpg);
   object-fit: cover; display:flex; align-items: center;}
   .clp-products{ margin: 60px 0px;}
.baneer-clp-content > h2{font-size: 21px;
  letter-spacing: .025em;}
.clp-pd-wrap img {
    display: block;
    margin: 0 auto;
    width: 89px;
    height: 108px;
    object-fit: contain;
}
  .baneer-clp-content > h3 {
    font-size: 18px;
    margin: 0 0 20px 0;
    letter-spacing: .025em;
    padding-top: 8px;
}
    .baneer-clp-content{ text-align: center;}
    .baneer-clp-content .hero-action.btn{background-color: transparent;
      border: 2px solid #000;
      color: #000;
      display: inline-block;
      margin: 0;
      height: 36px;
      line-height: 34px;
      padding: 0 12px;
      text-decoration: none;
      text-transform: capitalize;
      font-size: 14px;
      font-weight: 600;
      vertical-align: middle; border-radius: 0px;
      white-space: nowrap;}
      .baneer-clp-content .icon-go:before {
        line-height: 1em;
        margin-top: -1.75em;
        font-size: 6px;
        vertical-align: middle;
        padding-left: 12px;
        margin-top: -6px;
    }
    .clp-pd-wrap{ text-align: center;margin-bottom: 15px;}
    .clp-pd-wrap h2{font-size: 18px;
      color: #777;letter-spacing: .025em;
     
      }
      .clp-pd-wrap .TCLink_3{font-size: 13px;
        cursor: pointer;
        color: #222;
        text-decoration: none;}
   
        .baneer-clp-content-mob{ display: none;}
         .clp-banner img{ display:none;}
        
</style>

<script>
export default  {
        
    }

</script>
