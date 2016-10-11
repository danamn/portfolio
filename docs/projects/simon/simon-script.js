var main = function () {

  var pattern = [];
  var level = 1;
  var index = 0;
  var strictOn = false;
  
  /* setting the sound of the buttons */
  var objGreen = document.createElement("audio");
        objGreen.src='https://s3.amazonaws.com/freecodecamp/simonSound1.mp3';
        objGreen.volume=0.70;
        objGreen.autoPlay=false;
        objGreen.preLoad=true;  
  var objRed = document.createElement("audio");
        objRed.src='https://s3.amazonaws.com/freecodecamp/simonSound2.mp3';
        objRed.volume=0.70;
        objRed.autoPlay=false;
        objRed.preLoad=true;
  var objBlue = document.createElement("audio");
        objBlue.src='https://s3.amazonaws.com/freecodecamp/simonSound3.mp3';
        objBlue.volume=0.70;
        objBlue.autoPlay=false;
        objBlue.preLoad=true;
  var objYellow = document.createElement("audio");
        objYellow.src='https://s3.amazonaws.com/freecodecamp/simonSound4.mp3';
        objYellow.volume=0.70;
        objYellow.autoPlay=false;
        objYellow.preLoad=true;
   
 /******************* Game functions ******
 **************************************************/
  
  function createRandomPattern() {
    var randomColor; 
    var randomNr = Math.floor(Math.random() * 4);      
    switch (randomNr) {
      case 0:
        randomColor = "green";
        break;
      case 1:
        randomColor = "red";
        break;
      case 2:
        randomColor = "yellow";
        break;
      case 3:
        randomColor = "blue";
        break;
    }
    pattern.push(randomColor);    
  }
  
  function lightColor(color) { 

    $("#"+color).toggleClass("color-lit");
    setTimeout (function ()  {
      $("#"+color).toggleClass("color-lit");
    }, 800);
    
    if (color == 'green') {
      objGreen.play();
    } else if (color == 'red') {
      objRed.play();
    } else if (color == 'blue') {
      objBlue.play();
    } else if (color == 'yellow') {
      objYellow.play();
    }
  }
    
  function playPattern(){

    var loop = pattern.length;
    $(".color").prop('disabled', true);

    var looper = function () {

      lightColor(pattern[pattern.length-loop]);
      $(".alert").html("Watch the pattern!");
    
      if (loop >1) {
        loop--;
      } else {
        setTimeout (function (){
          $(".color").prop('disabled', false);
          $(".alert").html("Repeat the pattern!");
        }, 1500);
        return;
      }   

      setTimeout (looper, 1000);  
    }
    looper();
  }
  
  function restartGame(){

    pattern=[]; 
    level = 1;
    $("#level-display").html('01');
    createRandomPattern();
    setTimeout(playPattern, 1500);
  }
  
  /* Clicking the buttons and playing the game *****
  *************************************************/
  
  $('.color').click (function getClickedColor() {

    var clickedColor;
    if ( $(".color").prop('disabled') == true) { //buttons are deactivated while pattern is playing
      event.preventDefault();
      return;
    } else {
    
      if ($(this).is("#blue")) {
        clickedColor = "blue";
        lightColor('blue');
      } else if ($(this).is("#green")) {
        clickedColor = "green";
        lightColor('green');
      } else if ($(this).is("#red")) {
        clickedColor = "red";
        lightColor('red');
      } else if ($(this).is("#yellow")) {
        clickedColor = "yellow";
        lightColor('yellow');
      }
    
      if (clickedColor == pattern[index]) {          //if the guess is right 
        
        if (index === 19) {
          $(".alert").html("Congratulations!! <br> You reached the end of the game!! Start again!");
          setTimeout(restartGame, 3000);
        } else {
          index++;
        }

      } else {                                        //if the guess is wrong
          
          $(".color").prop('disabled', true);

          if (!strictOn) {                            //if Strict button is off
               
               $(".alert").html("Wrong. Try again!");
               setTimeout ( function (){
                    $(".alert").html("");
              }, 1500); 
              setTimeout (playPattern, 2000);
              index = 0;

          } else {                                    //if Strict button is on
              
              $(".alert").html("Wrong. Back to level 1!");
              setTimeout (restartGame, 1500); 
          }   
        
    }
    
    if (index == level) {                         // going up one level - restarting the patterns
      
      setTimeout (function () {
          level++;
          index = 0;

          var displayLevel;
          if (level < 10) {
              displayLevel = "0"+parseInt(level);
          } else {
              displayLevel = level;
          }
          $("#level-display").html(displayLevel);

          createRandomPattern();
          playPattern();
      }, 2000);
    }
    }
  }) 

  /*************** Start button function ******************/
  
 $("#start-btn").click (function () {

   if ($(".color").prop('disabled') == false) {
      $(".alert").html("Let's start!");
      setTimeout ( function ()  {
          $(".alert").html("");  
      }, 2000); 
      restartGame();
   } else {
     return;
   }
   
 });
  
 /************* Strict button function *******************/
  
 $("#strict-btn").click ( function(){ 
   $(this).toggleClass("strict-on");
   strictOn = !strictOn;
 })
 
}
$(document).ready(main)