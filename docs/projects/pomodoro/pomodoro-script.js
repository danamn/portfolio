var main = function() {

  var timerOn = false;
  var isWork = true;
  var restartTimer = true;
  var initialMinutes;
  var time = moment('00:00', 'mm:ss'); 


  function displayTime() {
    $("#minutes").html(time.format('mm:ss').slice(0,2));
    $("#seconds").html(time.format('mm:ss').slice(3));
  }

  function fillPomodoro(){
    var minutes = parseInt(time.format('mm:ss').slice(0,2));
    var seconds = parseInt(time.format('mm:ss').slice(3))
    var totalSeconds = seconds + minutes*60; 
    var filling = 100-(totalSeconds*100)/(initialMinutes*60);
    $(".filling").css("width", filling+"%");
  }

  function timer(){
    if (time.format('mm:ss') == '00:00') {        
      isWork = !isWork;
      setTime();
      
    }

    if (isWork) { 
      $("#action").html(" concentrate");
    } else {
      $("#action").html(" relax");
    } 

    if (time){
      time.subtract(1, 'seconds');
      displayTime();
      fillPomodoro();
    }   
  }

  function setTime(){

   //input validation  
    $("#workTime").val(Math.ceil($("#workTime").val()));
    $("#breakTime").val(Math.ceil($("#breakTime").val()));
      
    if ($("#workTime").val()<0 ){
      $("#workTime").val(0);
    };
    if ($("#breakTime").val()<0 ){
      $("#breakTime").val(0);
    }
    if ($("#workTime").val()>9999 ){
      $("#workTime").val(9999);
    };
    if ($("#breakTime").val()>9999 ){
      $("#breakTime").val(9999);
    }
  //end of input validation

    var workTime = $("#workTime").val();
    var breakTime = $("#breakTime").val();
    
    if (workTime == 0 && breakTime == 0) {
       time=null;
       return;
    }

// toggle between work and break and 
// assign the break or work duration set by the user to the displayed time value

    if (isWork) {
      if (workTime > 0){
        initialMinutes=workTime; 
      } else {
        isWork = !isWork;
        setTime();
      }  
    } else {
      if (breakTime > 0){
        initialMinutes=breakTime;
      } else {
        isWork = !isWork;
        setTime();
      }  
    }

    time = moment(initialMinutes+":"+"00", 'mm:ss');
  }

displayTime();

// -------  The function for pushing the first button: start/pause/restart timer      
//----------------------------------------------------------------------------- 
 var setTimer;
 $("#restart-button").click( function(){
    if (restartTimer){
      setTime();
      if (time){
        restartTimer = false;
      }     
    }
    
    if (time) {
      timerOn = !timerOn;
      if (timerOn) {

      setTimer = setInterval(timer, 1000);

      $("#restart-button").html("Pause timer");
      $("#workTime").prop("disabled", true);
      $("#breakTime").prop("disabled", true);  
      $("#reset-button").prop("disabled", true); 

      } else {

        clearInterval(setTimer);

        $("#restart-button").html("Restart timer");
        $("#reset-button").prop("disabled", false);
      }
    }
    
    
  });
   
// Function for the second button : resetting the countdown. enables changing the timer duration. 

  $("#reset-button").click( function(){

    restartTimer = true;
    isWork = true;
    
    $("#workTime").prop("disabled", false);
    $("#breakTime").prop("disabled", false);
    $("#restart-button").html("Start timer");

    $("#minutes").html("");
    $("#seconds").html("");
    $(".filling").css("width", 0+"%");
  });

}
$(document).ready(main)