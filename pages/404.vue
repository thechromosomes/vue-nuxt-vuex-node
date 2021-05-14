<template>
  <div>
    <div class="container">
      <div class="error-page">
        <img src="~assets/images/404.png" alt="">
        <h1 class="proxima_bold">OPPS!</h1>
        <h2 class="proxima_semi-bold">THE PAGE YOU ARE LOOKING FOR
GOT KIDNAPPED BY ET~~</h2>
        <p class="proxima_regular">Don't worry, we will get it back soon</p>
        <div>
          <ul class="error-list">
            <li><NuxtLink to="/collections/mens-driverloafers/" class="button proxima_regular">Go Back</NuxtLink></li>
            <li><NuxtLink to="/collections/womens-ballerinas/" class="button proxima_regular">Home Page</NuxtLink></li>
             <li><NuxtLink to="/collections/womens-ballerinas/" class="button proxima_regular">Tumi Story</NuxtLink></li>
          </ul>
          </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.error-page{text-align: center;
    max-width: 550px;
    margin: 0 auto;
    padding: 100px 0px;}
    .error-page h1 {
    font-size: 3.75em;
    color: #be2032;
}
    
    .error-list li{ background-color: #be2032;text-align: center;padding: 7px 20px;}
    .error-list li > a{color:#e2e2e2}

    .error-list{display: flex;
    justify-content: space-between;
    margin-top: 30px;}

    .error-page h2{font-size: 32px;
    padding: 30px 0px 0px 0px;letter-spacing: .025em;
    line-height: 42px}

    @media only screen and (max-width:767px) {
     .error-page{ widows: 100%; padding: 0px 15px;}
      .error-list li > a{ font-size: 14px;}
    }
</style>