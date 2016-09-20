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
      }
    }) 


  $('.slider-forward').click(function(){
      var currentSlide = $('.current');
      var nextSlide = currentSlide.next();

      var currentDot = $('.active-dot');
      var nextDot = currentDot.next();

      if(nextSlide.length === 0) {
      nextSlide = $('.slide').first();
      nextDot = $('.dot').first();
      }

      currentSlide.fadeOut(600).removeClass('current');
      nextSlide.fadeIn(600).addClass('current');

      currentDot.removeClass('active-dot');
      nextDot.addClass('active-dot')

      });
    
  $('.slider-backward').click(function(){
        var currentSlide = $('.current');
        var previousSlide = currentSlide.prev();

        var currentDot = $('.active-dot');
        var prevDot = currentDot.prev();

        if(previousSlide.length === 0) {
        previousSlide = $('.slide').last();
        prevDot = $('.dot').last();
        }

        currentSlide.fadeOut(600).removeClass('current');
        previousSlide.fadeIn(600).addClass('current');

        currentDot.removeClass('active-dot');
        prevDot.addClass('active-dot');
        });




}

$(document).ready(main)