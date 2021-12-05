$(document).ready(function(){
  $(window).click(function(e) {
     if($(".navbar-collapse").hasClass("show")){
        $('.navbar-collapse').removeClass("show"); 
        e.preventDefault();
        }
  });
   $('.navbar-collapse').click(function(event){
       event.stopPropagation();
   });
   $(window).scroll(function(){
      var sticky = $('.header'),
         scroll = $(window).scrollTop();
      if (scroll >= 0 && scroll<=500) {
         // $("body").addClass('menu-fixed');
         $(".sun").css('transform','translateY(-'+(scroll)+'px) ');
      }
      else {
         $("body").removeClass('menu-fixed');
      }
   });
   // var myCollapsible = document.getElementById('accordionFlushExample')
   // myCollapsible.addEventListener('shown.bs.collapse', function (e) {
   //    // $(".sun").css('transform','translateY(-'+(scroll)+'px) ');
   //    this.text("test");
   //    console.log(e);
   // })
   $("#accordionFlushExample .btn").on("click",function(){
      if(!$(this).hasClass("faqs-show")){
         $(this).addClass("faqs-show");
         $(this).find(".name").hide();
         $(this).find(".hide").show();
      }
      else {
         $(this).removeClass("faqs-show");
         $(this).find(".name").show();
         $(this).find(".hide").hide();
      }
   });
});
function CopyToClipboard(containerid) {
 const textarea = document.createElement("textarea");
 textarea.id = "temp_element";
 textarea.style.height = 0;
 document.body.appendChild(textarea);
 textarea.value = document.getElementById(containerid).innerText;
 const selector = document.querySelector("#temp_element");
 selector.select();
 document.execCommand("copy");
 document.body.removeChild(textarea);
 alert("Copied");
}