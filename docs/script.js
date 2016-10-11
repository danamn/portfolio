var main = function() {

/* --- menu scrolls to page section --- */

  $(".scroll").click(function(event){     
    event.preventDefault();
    $('html,body').animate({scrollTop:$(this.hash).offset().top}, 500);
  });

/* ----- make menu invisible at top of page and visible lower on the page  -----*/

  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $( "#header-background" ).fadeIn();
    } else {
      $( "#header-background" ).fadeOut();
    }
  });

/* ---------function for hamburger menu on small screens ----- */
  $(".hamburger-icon").click(function(){
    var menu = $(".hamburger-menu");
    if (!menu.is(":visible")){
      $( "#header-background" ).fadeIn();
      menu.slideDown(250);
    } else {
      menu.slideUp(250);
    }
  }) ;

  $(".hamburger-menu").click(function(){
    $(this).slideUp(250);
  });

/* ---- toggle details on Professional Experience in Resume section ---- */
 
  $(".resume-item-top").click(function(){
    var textToToggle = $(this).parent().find(".resume-item-details");
    if (textToToggle.height() == 0){
      textToToggle.animate(
        {
        height: textToToggle.get(0).scrollHeight}, 400, function(){
          $(this).height('auto');
        }
      )   
    } else {
      textToToggle.animate(
        {
        height: 0}, 400, function(){
          $(this).height(0)
        }
      )
    }
  }) 

/* --------------- Projects section - slider ------------------*/
 
  function slideForward(){

    var currentSlide = $('.current');
    var nextSlide = currentSlide.next();

    var currentDot = $('.active-dot');
    var nextDot = currentDot.next();

    if(nextSlide.length === 0) {
      nextSlide = $('.slide').first();
      nextDot = $('.dot').first();
    }

    $('.arrow').css('pointer-events','none'); // disable arrow when slider turns
    
    currentSlide.toggle("slide", {direction:'left'}, 600, function(){
      currentSlide.removeClass('current');
      $('.arrow').css('pointer-events','auto'); //reenable arrow after slider turned
    });
    
    nextSlide.toggle( "slide", {direction:'right'}, 600 ).addClass('current');

    currentDot.removeClass('active-dot');
    nextDot.addClass('active-dot');
  };

  function slideBackwards(){
    var currentSlide = $('.current');
    var previousSlide = currentSlide.prev();

    var currentDot = $('.active-dot');
    var prevDot = currentDot.prev();

    if(previousSlide.length === 0) {
      previousSlide = $('.slide').last();
      prevDot = $('.dot').last();
    }
    
    $('.arrow').css('pointer-events','none');

    currentSlide.toggle("slide", {direction:'right'}, 600, function(){
      currentSlide.removeClass('current');
      $('.arrow').css('pointer-events','auto');
    });
    previousSlide.toggle( "slide", {direction:'left'}, 600 ).addClass('current');

    currentDot.removeClass('active-dot');
    prevDot.addClass('active-dot');
  }

  $('.slider-forward').click(slideForward);   
  $('.slider-backward').click(slideBackwards);  

  /* --- slider can be controlled with keyboard left and right arrows */
  window.addEventListener("keydown", (function(slideAgain){
    return function(event) {
      if(!slideAgain) {return false;}
      slideAgain = false;
      setTimeout(function(){slideAgain = true;}, 700); //disables multiple slides if key is pressed longer
      if(event.which === 39) {
         slideForward();
      } else if (event.which === 37) {
        slideBackwards();
      }
    }
  })(true), false);
  

  /* ---- recalculate height of slider div - needs JS because the div inside has position:absolute */
  function calculateSlideHeight(){
    var divHeight = $('.slide-img').height();
    if ($(window).width()> 622){
      $(".slider").height(divHeight+50);
    } else {
      $(".slider").height(2*divHeight+80);
    }
  }

  $(document).ready(calculateSlideHeight());
  $( window ).resize(calculateSlideHeight);

  /* change brightness of slides images on mouse hover over the image labels ---*/
  var label = $('.slide').find('p');
  label.hover(function(){
    $(this).parent().find('.slide-img').css('filter', 'brightness(0.9)');
  }, 
    function(){
      $(this).parent().find('.slide-img').hover(
        function(){
          $(this).parent().find('.slide-img').css('filter', 'brightness(0.9)')
        }, 
        function(){
          $(this).parent().find('.slide-img').css('filter', 'brightness(0.5)');
        })
      
    });

/*--------------------contact section --------------------------------------*/
  
  // display email address
  var me = 'dana.nica.dev';
  var provider = 'gmail.com';
  $('.address').html(me + '@' + provider);

  // copy email address by clicking on it
  function copyToClipboard(){
    var textToCopy = 'dana.nica.dev@gmail.com';
    var $temp = $("<input>");
    $("body").append($temp);
    $temp.val(textToCopy).select();
    document.execCommand("copy");
    $temp.remove();    
    console.log('copied');
  } 

  $('.email-address').click(function(){
    copyToClipboard();
    $(this).fadeOut(50).fadeIn(50);
  });

  // change opacity of contact icons on hover on small screens
  if ($(window).width()> 1000){
    $('.contact').find('img').css('opacity', 0.5);
    $('.contact').hover(
      function(){
       $(this).find('img').css('opacity', 1);
      }, 
      function(){
        $(this).find('img').css('opacity', 0.5);
      }
    );
  } else {
    $('.contact').find('img').css('opacity', 1);
  }
}

/************************ Scroll down section by section *******************/ 
/*
  $(document.body).on('DOMMouseScroll wheel', function (e) {
    var divs = $('.section');
    var dir = '';
    var div = 0;

    if (e.originalEvent.detail < 0 || e.originalEvent.deltaY > 0) {
        dir = 'down';
    } else if (e.originalEvent.detail > 0 || e.originalEvent.deltaY < 0){
        dir = 'up';
    }
    // find currently visible div :
    div = -1;
    divs.each(function(i){
        if (div<0 && ($(this).offset().top >= $(window).scrollTop())) {
              div = i
            }
    });

    if (dir == 'up' && div > 0) {
      div--;
    }
    if (dir == 'down' && div < divs.length -1) {
      div++;
    }

    var timeout;
    clearTimeout(timeout);  
    timeout = setTimeout(function() {  
      

      $('html,body').stop().animate({
          scrollTop: divs.eq(div).offset().top
      }, 500);
    }, 150);

    return false;
  });

*/

$(document).ready(main)