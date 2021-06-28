import jQuery from "jquery";


jQuery(document).ready(function () {
  // For mobile menu open and close
  jQuery(".mobileNav").click(function (e) {
    e.preventDefault();
    jQuery("body").toggleClass("menuOpen");
    jQuery("body").removeClass("menuclose");
  });
  jQuery(".menu-overlay").click(function () {
    jQuery("body").toggleClass("menuOpen");
    jQuery("body").toggleClass("menuclose");
  });

  // For mobile subMenu Slide
  // jQuery(".m_over .toggleItem").click(function () {
  //   jQuery(this).parents(".m_over").siblings(".submenu").addClass("active");
  //   jQuery(this).parents(".mobile_menu").addClass("fixheight");
  //   jQuery(".mobile_menu").scrollTop(0);
  // });

  // jQuery(".backTitle").click(function () {
  //   jQuery(this).parents(".submenu").removeClass("active");
  //   jQuery(this).parents(".mobile_menu").removeClass("fixheight");
  // });

  // For mobile Footer collapsable
  jQuery(".footer_menu .menu_col h2").click(function () {
    jQuery(this).toggleClass("open");
    jQuery(this).siblings("div").slideToggle();
  });
  // For Home page Best Seller Section tabs
  jQuery(".best-seller-product-tablist li").click(function () {
    var tabItem = jQuery(this).attr("data-id");
    jQuery(".best-seller-product-tabs").css({
      height: "auto",
      overflow: "inherit",
    });
    if (!jQuery(this).hasClass("active")) {
      jQuery(".best-seller-product-tabs").hide();
      jQuery("#" + tabItem).show();
      jQuery(".best-seller-product-tablist li").removeClass("active");
      jQuery(this).addClass("active");
    }
  });


  // toggle cms page tumi-club
   let joinTitle =  jQuery('#join-title');
   let loginTitle =  jQuery('#login-title');
   let joinContent =  jQuery('#join-content');
   let loginContent =  jQuery('#login-content');
   jQuery(joinTitle).click(function () {

    jQuery(joinTitle).toggleClass("active");
    jQuery(joinContent).toggleClass("active");
    jQuery(loginTitle).removeClass("active");
    jQuery(loginContent).removeClass("active");
  });
   jQuery(loginTitle).click(function () {
    jQuery(loginTitle).toggleClass("active");
    jQuery(loginContent).toggleClass("active");
    jQuery(joinTitle).removeClass("active");
    jQuery(joinContent).removeClass("active");
  });
  // toggle cms page tumi-club end
});
