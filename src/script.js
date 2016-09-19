var main = function() {
  $(".nav-main").find("a").hover( 
    function() {
    $(this).addClass("hover");
  }, function() {
    $(this).removeClass("hover");
  })
 
  $(".scroll").click(function(event){     
      event.preventDefault();
   $('html,body').animate({scrollTop:$(this.hash).offset().top}, 500);
    });



  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
        $( "#header-background" ).fadeIn();
    } else {
        console.log('there');
        $( "#header-background" ).fadeOut();
    }
});


 
  $(".resume-item-top").click(function(){

      var textToToggle = $(this).parent().find(".resume-item-details");

      if (textToToggle.height() == 0){
        textToToggle.css('padding', '10px');
        textToToggle.css('border', '1px solid #004F89');
        textToToggle.animate(
          {
            height: textToToggle.get(0).scrollHeight}, 1000, function(){
              $(this).height('auto');
          }
        ) 
      } else {
         textToToggle.animate(
          {
            height: 0}, 1000, function(){
              $(this).height(0)
          }
        )
         window.setTimeout((()=> textToToggle.css('padding', '0px').css('border', 'none')), 400 );
        

       }

/*     if ($(this).find('.btn-text').html() == "Click for details"){
        $(this).find('.btn-text').html('Click to hide details');
     } else {
          $(this).find('.btn-text').html('Click for details');
      } */


    }) 



}

$(document).ready(main)