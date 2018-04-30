//document.querySelector(".banner").style.border="none";
$(document).ready(function() {

  //scroll to top button logic
   function scrollToAnchor(aid) {
     var aTag = $("meta[name='" + aid + "']");
     $('html,body').animate({
       scrollTop: aTag.offset().top
     }, 300);
     console.log("Scroll End");
   }
   //Where to scroll
   $(".scroll-to-top-btn").click(function() {
     scrollToAnchor('viewport');
   });

   //Detect Scroll Position on page load
    var pos = window.scrollY;
    //var pos = $("window").scrollTop();
    console.log(pos);

    // Show or Hide Scroll to Top button based on scroll position
    if (pos < 100) {
      //$(".scroll-to-top-btn").css("visibility","hidden");
      document.querySelector(".scroll-to-top-btn").style.visibility="hidden";
    }else{
      //$(".scroll-to-top-btn").css("visibility","visible");
      document.querySelector(".scroll-to-top-btn").style.visibility="visible";
      document.querySelector(".scroll-to-top-btn").style.right="0";
    }

    $(".navbar-toggler").on("click", function(){
      $("#navbar-dropdown").toggleClass("display-menu");
      $("#navbar-dropdown ul").toggleClass("expand-height");
      console.log("click");
    })

  //Show Sub-Menu on hover , .navbar #navbar-dropdown ul , .dropdown-menu
  $(".dropdown").hover(function(){
    $(".dropdown .dropdown-menu").toggleClass("display-menu");
    console.log("Hovered");
  })


})
//Scroll To Top Button
$(window).on("scroll", function(){

  //Show or Hide Depending on Position
  if ($(window).scrollTop() < 100) {
    $(".scroll-to-top-btn").css("visibility","hidden");
    $(".scroll-to-top-btn").css("right","-100%");

  }else if($(window).scrollTop() > 100){
      $(".scroll-to-top-btn").css("visibility","visible");
      $(".scroll-to-top-btn").css("right","0");
  };

  //Pure JavaScript version of the above on a different element
  var scrollPos = window.scrollY;
  //console.log(scrollPos);
  if (scrollPos > 100) {
    //Show Nav
    document.querySelector(".navbar").style.top="0%";
    document.querySelector(".desktop-logo").style.width="15rem";
  }else {
    //Hide nav
    document.querySelector(".navbar").style.top="-10%";
    document.querySelector(".desktop-logo").style.width="22rem";


  }

})
