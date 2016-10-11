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


  $(".services-button").click(function(){

      var textToToggle = $(this).parent().find(".service-info-toggled");
      var toggleButton = $(this).find('.btn-text');

      if (textToToggle.height() == 0){
        textToToggle.animate(
          {
            height: textToToggle.get(0).scrollHeight}, 1000, function(){
              $(this).height('auto');
          }
        ) 
      } else {
        $('html,body').animate({
          scrollTop: $(this).parent().offset().top
        }, 1000);
        textToToggle.animate(
          {
            height: 0,
          }, 1000, function(){
              $(this).height(0); 
          }
        )
       }

      if (toggleButton.html() == "Click for details"){
        toggleButton.html('Click to hide details');
      } else {
        toggleButton.html('Click for details');
      }
  })

}

$(document).ready(main)