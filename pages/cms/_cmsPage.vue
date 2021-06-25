<template>
  <div>
    <div v-if="Object.keys(cmsData).length != 0">
      <span v-html="cmsData"></span>
    </div>
    <div class="virtual_store">
      <div class="virtual_store_slide">
        <nav class="sticky_menu">
          <div class="wrapper">
            <a class="hamburger hamburger--slider ">
              <span class="hamburger-box">
                <span class="hamburger-inner "></span>
              </span>
            </a>
            <div class="menu">
              <a class="test" href="#quote_pos">store overview</a>
              <a class="test" href="#feature_pos">features</a>
              <a class="test" href="#">explore the store</a>
            </div>
          </div>
        </nav>
        <div class="slider_info_content">
          <div class="slider_info">
            <b>explore the tumi virtual experience</b>
            <p>
              <a style="color:white" href="#">Enter The Store</a>
            </p>
            <img src="~/assets/images/gif-img.GIF" class="hide-mob" />
            <img src="~/assets/images/gif-img-mob.GIF" class="hide-desk" />
          </div>
        </div>
      </div>
      <div class="slogan_con ">
        <h2>#tumigoesvirtual</h2>
        <h1 class="">
          introducing the tumi virtual store - a groundbreaking interactive
          experience of digital innovation
        </h1>
      </div>
      <section class="video_con" id="video" tabindex="-1">
        <div class="video_clip">
          <div id="video_src" data-vimeo-initialized="true">
            <iframe
              src="https://player.vimeo.com/video/537526165?autoplay=1&amp;loop=1&amp;app_id=122963"
              width="640"
              height="360"
              frameborder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              allowfullscreen=""
              title="TUMI MCLAREN Final cut 1920 x 1080 15-4-2021"
              data-ready="true"
            ></iframe>
          </div>
        </div>
      </section>
      <div class="info_con ">
        <div class="slogan_con ">
          <p class="app_wrapper ">
            “This season, we connect and engage with our community with the new
            TUMI Virtual Store and our first-ever regional livestream event. We
            can’t wait to show you how the TUMI DNA lives on in our latest
            innovations and how sustainability is playing a role in the brand
            moving forward.”
            <span>Victor Sanz, TUMI Creative Director</span>
          </p>
        </div>
        <div class="app_collection">
          <div class="app_wrapper">
            <div class="col-12 col-md-6 ">
              <span id="case_ani" class=""
                ><img
                  src="https://www.tumi-hk.com/medias/hk-ss21image-iphone-silver153?context=bWFzdGVyfFNTMjFJbWFnZXw0MzI4M3xpbWFnZS9wbmd8IFNTMjFJbWFnZS9oM2IvaDRmLzkwOTYxMjEzMTk0NTQucG5nfDcwYWNiN2YwMDdlMTFlYmI5ZWYxMWU2YjJlYmIwMjczOTZkZmQwZTdkY2MzYzkwNmY0ZWY5NGI4YTA4YjU3MmQ"
              /></span>
            </div>
            <div class="desc_box col-12 col-md-6 ">
              <h3 class="desc_boxh3  tumi_h3m">Browse the collections</h3>
              <p class="">
                Explore products in the shop through interactive displays and
                chat with TUMI personal shoppers in real-time for tailored
                recommendations
              </p>
              <a href="#">Shop Now</a>
            </div>
          </div>
        </div>
        <div class="spec_con row">
          <div class="col-12 col-md-7 col-lg-6 zoom-img">
            <img
              src="https://www.tumi-hk.com/medias/hk-ss21image-ss21-vs-demo-v2-20210412?context=bWFzdGVyfFNTMjFJbWFnZXwxMTY4ODV8aW1hZ2UvanBlZ3xoOTIvaDA3LzkxMTIwNjE0MTEzNTgvaGstc3MyMWltYWdlLXNzMjEtdnMtZGVtby12Mi0yMDIxMDQxMnw1ZWMwOTMyNzhmYTEzMGJjM2ZhN2FhZTQ5MTMwMWU3NjM0N2U2MWIxODA4MGJjYzA1MDAwMThlODBmYjNlZDhh"
              class="animate__slower"
            />
          </div>
          <div
            class="col-12 col-md-5 col-lg-6 desc_box aos-init aos-animate"
            data-aos-id="zoom-img"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div>
              <h3>View highlights from all angles</h3>
              <p>
                This season’s highly anticipated Alpha Bravo styles are featured
                at the Long Table, using 3D dynamics to showcase the collection
                in 360°
              </p>
              <a href="https://virtualstore.tumi-asia.com/">Explore Now</a>
            </div>
          </div>
        </div>
        <div class="app_con app_game game-img   ">
          <div class="app_wrapper row ">
            <div class="col-12 col-md-6">
              <video
                loop=""
                autoplay=""
                playsinline=""
                muted=""
                id="game_video"
                class="removeFocusIndicator"
              >
                <source
                  src="https://www.tumi-hk.com/medias/SS21-HK-VS-video-v2-20210412.mp4?context=bWFzdGVyfFNTMjFJbWFnZXwyNTU3ODF8dmlkZW8vM2dwcHxoMzMvaDY3LzkxMTIwNjUyMTI0NDYvU1MyMS1ISy1WUy12aWRlby12Mi0yMDIxMDQxMi5tcDR8NWFmZGU4MjdiODMwOWZkMTgyZWZlMTMwZTc0MGJkNTZjMjkwN2Q1MDMyYzIxYmRlNDZlYTJmMWFkZTBlNzY4MA"
                  type="video/mp4"
                />
                <img
                  src="https://www.tumi-hk.com/medias/hk-ss21image-ss21-vs-game-imgv2-20210412?context=bWFzdGVyfFNTMjFJbWFnZXw5MDk3OXxpbWFnZS9wbmd8aGQzL2gwMy85MTEyMDYxNTQyNDMwL2hrLXNzMjFpbWFnZS1zczIxLXZzLWdhbWUtaW1ndjItMjAyMTA0MTJ8MTkxMGZjYzg3M2IwMzc1NmNiYzJiZGQ2NGIzZjE5MWI5YzhmYmE1ZTc1M2E4NjUxYTBkZDQ2MzgxM2E2NmIwMw"
                  width="100%"
                />
              </video>
            </div>
            <div class="desc_box col-12 col-md-6">
              <div>
                <h3 class="tumi_h3m">Play the game “Perfecting The Journey”</h3>
                <p>
                  Speed through jungles, racetracks, and cityscapes in a new
                  Instagram filter game, controlling your vehicle with facial
                  movements as you collect your favorite TUMI bags on a
                  fast-paced obstacle course
                </p>
                <a href="#">Play The Game</a>
              </div>
            </div>
          </div>
          <img
            src="https://www.tumi-hk.com/medias/hk-ss21image-ss21-vs-game1-20210209-v2?context=bWFzdGVyfFNTMjFJbWFnZXwzNDQ2N3xpbWFnZS9wbmd8IFNTMjFJbWFnZS9oMzAvaDdkLzkwOTc4NTUzMDM3MTAucG5nfGYyYzQ1OWUxOGNjYTg3YzM5NGYzMzA4NjAxNDFhMmUzZjRkZTlhN2VjYjBlZjQwZjQ1MjQ4MWFmNjRlODQyODE"
            class="game_1 tumi_animated "
          />
          <img
            src="https://www.tumi-hk.com/medias/hk-ss21image-ss21-vs-game2-v2-20210412?context=bWFzdGVyfFNTMjFJbWFnZXw0ODE3MXxpbWFnZS9wbmd8aGQ2L2gwMC85MTEyMDYxNjA3OTY2L2hrLXNzMjFpbWFnZS1zczIxLXZzLWdhbWUyLXYyLTIwMjEwNDEyfGViNTQzZjI5ZDdiYzMzMmEyOWEzMDM4OWVmNzk0YjU4ZmRiM2Q0ZTllNjU2MDU5MzRmNmNjYWNjOGQxYzgyMDY"
            class="game_2 tumi_animated animate__delay-1s"
          />
        </div>
        <div class="app_con mirror_con ">
          <div class="row ">
            <div
              class="desc_box col-12 col-md-3 offset-md-3 aos-init aos-animate"
            >
              <div>
                <h3 class="tumi_h3m">Snap a selfie</h3>
                <p>
                  Take a snapshot of yourself in the TUMI Virtual Store Magic
                  Mirror and share it with friends and TUMI fans on social media
                </p>
                <a href="#">Take A Photo</a>
              </div>
            </div>
            <div class="app_list col-12 col-md-6 ">
              <video
                loop=""
                autoplay=""
                playsinline=""
                muted=""
                id="game_video"
              >
                <source
                  src="https://www.tumi-hk.com/medias/SS21-HK-VS-selfie-20210209.mp4?context=bWFzdGVyfFNTMjFJbWFnZXwxMzUxMTMzfHZpZGVvL21wNHwgU1MyMUltYWdlL2gxNy9oYTEvOTA5Mzk2MzA4NzkwMi5iaW58MWNiYTY5OWRhYzkxZTY5MGU0YTY1NmMwOTZmYjcxYTgxMzA4NjI4NmY4NGU1MjYxODcwZWUyNTZkZGIwNzI3MA"
                  type="video/mp4"
                />
                <img
                  src="https://www.tumi-hk.com/medias/hk-ss21image-ss21-vs-ss21-vs-app-20210209-v2?context=bWFzdGVyfFNTMjFJbWFnZXwxMzMzNTJ8aW1hZ2UvcG5nfCBTUzIxSW1hZ2UvaGJlL2gzOC85MDk3ODU1NTAwMzE4LnBuZ3w5NzM5MTc5ZDYyMjgxNjI3MTk2ZjQ3YzYwNmY1ZDQ2OGE3OGZhOTU1ZDIyYmVkYjI1Yzg3MGZmODVjYWQzYTU3"
                  width="100%"
                />
              </video>
            </div>
          </div>
        </div>

        <div class="func_con ">
          <div class="wrapper row">
            <div class="col-12 col-md-4 ">
              <img
                src="https://www.tumi-hk.com/medias/hk-ss21image-ss21-vs-icon1-20210209?context=bWFzdGVyfFNTMjFJbWFnZXw4NTY0fGltYWdlL3BuZ3wgU1MyMUltYWdlL2hlNC9oY2QvOTA5Mzk1NTUxODQ5NC5wbmd8MTA4ZTFkMTc3NzA0M2U2ZjIxYjk3MGU3Y2FmYTRkMjFlYTg5NzQ0ZTIwZmQwMjAxNDZjOWE2OTFlZThiOGZkNQ"
              />
              <p>Visit the TUMI Virtual Store</p>
              <a href="https://virtualstore.tumi-asia.com/">Explore Now</a>
            </div>
            <div class="col-12 col-md-4 ">
              <img
                src="https://www.tumi-hk.com/medias/hk-ss21image-ss21-vs-icon2-20210209?context=bWFzdGVyfFNTMjFJbWFnZXw4ODUxfGltYWdlL3BuZ3wgU1MyMUltYWdlL2hiMy9oNTIvOTA5Mzk1NTU4NDAzMC5wbmd8NTBjZTNjM2RhNjI0ZjA4YTQyNTk5NWI4MzFiY2YwYTk4Zjg4M2FkOTVmZDZmODQ5NWY5YzE3Y2I0M2EwY2Q5ZA"
              />
              <p>Book a Virtual Tour</p>
              <a href="#">Contact Us</a>
            </div>
            <div class="col-12 col-md-4">
              <img
                src="https://www.tumi-hk.com/medias/hk-ss21image-ss21-vs-icon3-20210209?context=bWFzdGVyfFNTMjFJbWFnZXwxMTAyM3xpbWFnZS9wbmd8IFNTMjFJbWFnZS9oMmQvaDNjLzkwOTM5NTU2NDk1NjYucG5nfGRjYzAwZTY1NjZiZjlhZGJmMWJiYzI2M2MzODhjMWM3M2U0Y2Q4MWQ1YTY4Y2QxMTI1Nzc3ZjhjMTcxNjlhZjc"
              />
              <p>Livestream Event Recap</p>
              <a
                href="https://www.facebook.com/TUMITravel.HK/posts/234213211651577"
                >Watch Now</a
              >
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
