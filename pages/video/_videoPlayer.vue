<template>
  <div>
    <section class="video-play-section">
      <div class="container">
        <div class="row">
          <div class="col-xl-9 col-lg-12 col-md-12 col-sm-12 col-sm-12">
            <div class="video-box">
              <!-- <img src="~/assets/images/video-page-poster.jpg" class="video-poster"> -->
              <div
                class="video-container embed-responsive embed-responsive-16by9"
              >
                <iframe
                  width="977"
                  height="549"
                  src="https://www.youtube.com/embed/LhKdXCQ1gcw"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                  class="embed-responsive-item"
                ></iframe>
              </div>
              <div class="mclearn-text">
                <h3 class="proxima_regular">TUMI | McLaren Collection</h3>
                <h4 class="proxima_regular">PERFORAMANCE WITH PURPOSE</h4>
                <p class="proxima_regular">DATE: 2021/4/2</p>
              </div>
            </div>
          </div>
          <div class="col-xl-3 col-lg-12 col-md-12 col0sm-12 col-sm-12">
            <div class="video-verticaly-slide">
              <small class="proxima_semi-bold">EXPLORE MORE</small>
              <div>
                <VueSlickCarousel v-bind="videosSetiing">
                  <div>
                    <img src="~/assets/images/recyle-4.jpg" />
                    <h5 class="proxima_bold">Lumin Utility Pouch</h5>
                    <p class="proxima_light">TUMI I MCLAREN</p>
                  </div>
                  <div>
                    <img src="~/assets/images/recyle-4.jpg" />
                    <h5 class="proxima_bold">Lumin Utility Pouch</h5>
                    <p class="proxima_light">TUMI I MCLAREN</p>
                  </div>
                  <div>
                    <img src="~/assets/images/recyle-4.jpg" />
                    <h5 class="proxima_bold">Lumin Utility Pouch</h5>
                    <p class="proxima_light">TUMI I MCLAREN</p>
                  </div>
                  <div>
                    <img src="~/assets/images/recyle-4.jpg" />
                    <h5 class="proxima_bold">Lumin Utility Pouch</h5>
                    <p class="proxima_light">TUMI I MCLAREN</p>
                  </div>
                  <div>
                    <img src="~/assets/images/recyle-4.jpg" />
                    <h5 class="proxima_semi-bold">Lumin Utility Pouch</h5>
                    <p class="proxima_light">TUMI I MCLAREN</p>
                  </div>
                </VueSlickCarousel>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="thumbnial-video-player">
      <div class="thumb-one-payer">
        <div class="thum-img-boxx">
          <img src="~assets/images/thum-player-1.jpg" />
          <span class="play-icon-v">
            <img src="/_nuxt/assets/images/play-icon.png" />
          </span>
          <div class="tm-mediaWorld__dur">
            <span class="proxima_regular">01:00</span>
          </div>
        </div>
        <div class="mclearn-text">
          <h3 class="proxima_regular">TUMI | McLaren Collection</h3>
          <h4 class="proxima_regular">PERFORAMANCE WITH PURPOSE</h4>
          <p class="proxima_regular">DATE: 2021/4/2</p>
        </div>
      </div>
      <div class="thumb-one-payer">
        <div class="thum-img-boxx">
          <img src="~assets/images/thum-player-2.jpg" />
          <span class="play-icon-v">
            <img src="/_nuxt/assets/images/play-icon.png" />
          </span>
          <div class="tm-mediaWorld__dur">
            <span class="proxima_regular">01:00</span>
          </div>
        </div>
        <div class="mclearn-text">
          <h3 class="proxima_regular">TUMI | McLaren Collection</h3>
          <h4 class="proxima_regular">PERFORAMANCE WITH PURPOSE</h4>
          <p class="proxima_regular">DATE: 2021/4/2</p>
        </div>
      </div>
      <div class="thumb-one-payer">
        <div class="thum-img-boxx">
          <img src="~assets/images/thum-player-3.jpg" />
          <span class="play-icon-v">
            <img src="/_nuxt/assets/images/play-icon.png" />
          </span>

          <div class="tm-mediaWorld__dur">
            <span class="proxima_regular">01:00</span>
          </div>
        </div>
        <div class="mclearn-text">
          <h3 class="proxima_regular">TUMI | McLaren Collection</h3>
          <h4 class="proxima_regular">PERFORAMANCE WITH PURPOSE</h4>
          <p class="proxima_regular">DATE: 2021/4/2</p>
        </div>
      </div>
    </section>
    <section class="alfa-sec">
      <div class="container">
        <ul>
          <li>
            <div class="alfa-content">
              <h3 class="tm-h3 proxima_regular">Explore<br />Alpha 3</h3>
              <a class="button-link proxima_bold" href="#">Shop Now</a
              ><a class="anchor-width"> </a>
            </div>
            <div class="alfa-img-box">
              <img
                src="https://tmbackend.hostx1.de/cms_images/1621935096alfa-1.jpg"
                alt=""
              />
            </div>
          </li>
          <li>
            <div class="alfa-content">
              <h3 class="tm-h3 proxima_regular">The TUMI<br />Difference</h3>
              <a class="button-link proxima_bold" href="#">Shop Now</a
              ><a class="anchor-width"> </a>
            </div>
            <div class="alfa-img-box">
              <img
                src="https://tmbackend.hostx1.de/cms_images/1621935112alfa-2.jpg"
                alt=""
              />
            </div>
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>
<style scoped>
</style>
<script>
import VueSlickCarousel from "vue-slick-carousel";
export default {
  components: {
    VueSlickCarousel,
  },
  data() {
    return {
      videosSetiing: {
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 2,
        slidesToScroll: 1,
        vertical: true,
        verticalSwiping: true,
        autoplay: true,

        responsive: [
          {
            breakpoint: 1199,
            settings: {
              vertical: false,
              verticalSwiping: false,
              slidesToShow: 4,
              slidesToScroll: 1,
              arrows: false,
            },
          },
          {
            breakpoint: 1024,
            settings: {
              vertical: false,
              verticalSwiping: false,
              slidesToShow: 4,
              slidesToScroll: 1,
              arrows: false,
            },
          },
          {
            breakpoint: 600,
            settings: {
              vertical: false,
              verticalSwiping: false,
              slidesToShow: 2,
              slidesToScroll: 1,
              arrows: false,
            },
          },
          {
            breakpoint: 480,
            settings: {
              vertical: false,
              verticalSwiping: false,
              slidesToShow: 2,
              slidesToScroll: 1,
              arrows: false,
            },
          },
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
        ],
      },
    };
  },
};
</script>
