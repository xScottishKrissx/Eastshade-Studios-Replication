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

})
