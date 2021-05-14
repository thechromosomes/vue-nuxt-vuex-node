<template>
  <div>
    <div class="search-box">
      <div class="search-item">
        <div class="search-product">
          <ul class="product-list">
            <li v-for="(item, i) in 5" :key="i">
              <a href="#">
                <div class="list-item">
                  <div class="p-img">
                    <img src="@/assets/images/search-img.webp" alt="img" />
                  </div>
                  <div class="img-text">
                    <h5>
                      SHANIYA BROWN SUEDE <br />
                      <span>$169.95</span>
                    </h5>
                  </div>
                </div>
              </a>
            </li>
          </ul>
        </div>
        <div class="search-list">
          <!-- Quick links -->
          <ul class="quick-links">
            <li class="q-head">Quick links</li>
            <li class="q-link" v-for="(item, i) in 4" :key="i">
              <a href="#"> ambassador {{ item }} </a>
            </li>
          </ul>
          <!-- Quick links end -->
          <!-- categories-->
          <ul class="categories">
            <li class="c-head">Categories</li>
            <li class="c-link" v-for="(item, i) in 4" :key="i">
              <a href="#"> all sale {{ item }} </a>
            </li>
          </ul>
          <!-- categories end -->
          <!-- Popular searches -->
          <ul class="categories">
            <li class="c-head">Popular searches</li>
            <li class="c-link" v-for="(item, i) in 4" :key="i">
              <a href="#">
                <img src="@/assets/images/search_12.png" alt="img" /> sandals
                {{ item }}
              </a>
            </li>
          </ul>
          <!--Popular searches end -->
        </div>
      </div>

      <div class="search-text">
        <a href="#">
          <p>Show all results for: "input val"</p>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.search-box {
  width: 100%;
  box-sizing: border-box;
  position: absolute;
  right: 69px;
  top: 95px;
  width: 700px;
  max-height: 490px;
  border-radius: 1px;
  z-index: 215346;
  border: 1px solid #ccc !important;
  box-shadow: #666 0px 0px 0px;
  display: none;
}
.search-box .search-item {
  width: 100%;
  background: #fff;
  display: flex;
}

.search-item .search-product {
  width: 70%;
  padding: 10px;
  /* background: greenyellow; */
}
.search-item .search-list {
  width: 30%;
  padding: 10px;
  /* background: rebeccapurple; */
  border-left: 1px solid #ccc;
  overflow: auto;
}

/* Quick links */
.quick-links,
.categories {
  padding: 0 0 8px 0px !important;
  width: 100%;
  border-bottom: 1px solid #ccc;
}
.quick-links .q-head,
.categories .c-head {
  font-weight: bold;
  color: #9b9b9b;
  text-align: left;
  padding-bottom: 8px;
  list-style: none;
  font-size: 18px;
  text-transform: uppercase;
}
.quick-links .q-link,
.categories .c-link {
  color: #666;
  font-size: 13px;
  text-align: left;
  margin-left: 10px;
  line-height: 18px;
}
.categories {
  margin-top: 10px;
}
.categories .c-link {
  text-transform: uppercase;
}
.categories .c-link a img {
  width: 6%;
}
/* product-list */
.search-product .product-list {
  width: 100%;
  display: inline-block;
}
.search-product .product-list li {
  display: inline-block;
  width: 33.2%;
}
.search-product .product-list li .list-item {
  width: 100%;
  height: auto;
  margin-bottom: 10px;
}
.search-product .product-list li .list-item img {
  width: 100%;
}
.search-product .product-list li .list-item h5 {
  font-size: 20px;
  color: #666;
}

.search-text {
  padding: 10px 0px 10px 8px;
  background: #f8f8f8;
}
.search-text a,
.search-text a p {
  color: #111 !important;
  font-size: 12px;
}

@media screen and (max-width: 992px) {
.search-box {
    width: 100%;
    right: 0;
    top: 60px;
    border: none  !important;
        overflow: auto;
    border-radius: 0px 0px 10px 10px;
}
.search-text {
    text-align: left;
    /* border-radius: 0px 0px 20px 20px; */
}
.search-box .search-item{
    flex-direction: column-reverse;
}
.search-item .search-product{
    width: 100%;
}
.search-item .search-list{
    width: 100%;
}

.quick-links .q-link, .categories .c-link{
    display: inline-block;
    line-height: normal;
}

.search-product .product-list li .list-item{
    display: flex;
}
.search-product .product-list li{
    width: 100%;
}
.search-product .product-list li .list-item .p-img{
    width: 15%;
}
.search-product .product-list li .list-item .img-text{
    width: 85%;
    text-align: left;
}
.search-product .product-list li .list-item .img-text h5{
    margin-left: 5px;
    font-size: 16px;
    color: #000;
}
.search-product .product-list li .list-item .img-text h5 span{
    color: #666;
}
.quick-links .q-head, .categories .c-head{
    font-size: 14px;
}
.quick-links, .categories{
    text-align: left;
}
.quick-links li.q-link, .categories li.c-link{
      font-size: 14px;
    color: #fff;
    padding:5px 10px;
    background: #8a8a8a;
    border-radius: 40px;
    margin: 2px 2px;
}
.quick-links li.q-link a, .categories li.c-link a{ 
    color: #fff !important;
}



}

@media screen and (max-width: 767px) {
}
</style>
