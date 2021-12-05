$(document).ready(function(){
  $("#dropdown_1").click(function(){
    $(".nav__lists--sub").slideToggle(350);
  });
  $(".card_body").mouseenter(function(){
    $(".card-desc", this).fadeOut(550);
  });
  $(".card_body").mouseleave(function(){
    $(".card-desc", this).fadeIn(550);
  });
});