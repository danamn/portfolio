var main = function() {

  function showTempinF(tempC){
    var tempF = (tempC * 1.8 +32).toFixed(0);
    $("#weather-temp").html(tempF+"&#8457");
    $(".btn-C").removeClass("btn-pushed");
    $(".btn-F").addClass("btn-pushed");
  };
  
  function showTempinC(tempC){
    $("#weather-temp").html(tempC+"&#8451");
    $(".btn-F").removeClass("btn-pushed");
    $(".btn-C").addClass("btn-pushed"); 
  };

  function displayBackground(iconCode){
    switch (iconCode) {
      case "01d":
      case "02d":
        $(".container").css("background-image",'url("https://upload.wikimedia.org/wikipedia/commons/5/5c/Blueskywithclouds.jpg")');
        break;
      case "03d":
      case "04d":
        $(".container").css("background-image",'url("http://wallpapercave.com/wp/3A7MvXm.jpg")');
        break;
      case "09d":
      case "10d":
      case "11d":
        $(".container").css("background-image",'url("http://wearechange.org/wp-content/uploads/2015/03/1_See_It.jpg")');
        $(".white-black").css("color", "white");
        $(".white-black").css("text-shadow", "0 0 2px grey, 2px 2px grey");
        break;
      case "13d":
        $(".container").css("background-image",'url("http://www.isabelclark.com/wp-content/uploads/2013/01/snow01.jpg")');
        $(".white-black").css("color", "black");
        $(".white-black").css("text-shadow", "0 0 3px grey, 2px 2px grey");
        break;
      case "50d":
        $(".container").css("background-color", "white");
        break;
      case "01n":
      case "02n":
        $(".container").css("background-image",'url("http://orig04.deviantart.net/7cb1/f/2009/011/f/0/dark_clouds_wallpaper_by_missionverdana.jpg")');
        $(".white-black").css("color", "white");
        break;
      case "03n":
      case "04n":
        $(".container").css("background-image",'url("http://img2.goodfon.su/original/4288x2886/3/64/moon-moonlight-night-clouds-611.jpg?d=1")');
//      $("body").css("color", "white");
        break;
      case "09n":
      case "10n":
      case "11n":
        $(".container").css("background-image",'url("https://i.ytimg.com/vi/q76bMs-NwRk/maxresdefault.jpg")');
        $(".white-black").css("color", "white");
        $(".white-black").css("text-shadow", "0 0 1px grey, 1px 1px grey");
        break;
      case "13n":
        $(".container").css("background-image",'url("https://farm4.staticflickr.com/3183/3061623692_764293ef48_o.jpg")');
        $(".white-black").css("color", "white");
        $(".white-black").css("text-shadow", "0 0 1px grey, 1px 1px grey");
        break;
      case "50n":
        $(".container").css("background-image",'url("https://foxywiththetruth.files.wordpress.com/2011/07/in-the-fog.jpg")');
        $(".white-black").css("color", "white");
        $(".white-black").css("text-shadow", "0 0 1px grey, 1px 1px grey");     
    }
  }

  function displayWeatherData(location, tempC, weatherNow, iconCode){

    var iconLink = "http://openweathermap.org/img/w/"+iconCode+".png";
    var icon = "<img class = 'icon' src = '" + iconLink + "'>";

    displayBackground(iconCode);

    $("#weather-city").html(location);
    $("#weather-temp").html(tempC+"&#8451");
    $("#weather-type").html(weatherNow);
    $(".weather-icon").html(icon);

    $("#weather-container").fadeIn(600);
  }

  function getWeatherData(jsonLink) {

    console.log("function link:" + jsonLink);
    fetch(jsonLink).then(response => response.json()).then( (data) => {

      var iconCode = data.weather[0].icon;
      var weatherNow = data.weather[0].main;
      var tempC = data.main.temp.toFixed(0);
      var location = data.name;
      
      displayWeatherData(location, tempC, weatherNow, iconCode);

      $(".btn-F").click(function(){showTempinF(tempC)});
      $(".btn-C").click(function(){showTempinC(tempC)});  
      
    })
  }

    /* -------- old version of the function -------------
    ------------------------------------------------------------

    $.getJSON(jsonLink, function(json) {

      var weatherArray = json.weather;
      var iconCode = weatherArray[0].icon;
      var weatherNow = weatherArray[0].main;
      var tempC = json.main.temp
      tempC = tempC.toFixed(0);
      var location = json.name;   
      
      var iconLink = "http://openweathermap.org/img/w/"+iconCode+".png";
      var icon = "<img class = 'icon' src = '" + iconLink + "'>";
      
      $("#weather-city").html(location);
      $("#weather-temp").html(tempC+"&#8451");
      $("#weather-type").html(weatherNow);
      $(".weather-icon").html(icon);

      $("#weather-container").fadeIn( "slow" );
      
      $(".btn-F").click(function(){showTempinF(tempC)});
      $(".btn-C").click(function(){showTempinC(tempC)}); 
      
      displayBackground(iconCode);
      
    })*/
  
  function success(position) {
    var latitude = position.coords.latitude;
    latitude = parseFloat(latitude).toFixed(4);
    var longitude = position.coords.longitude;
    longitude= parseFloat(longitude).toFixed(4);
    console.log (latitude+"  "+longitude);
    jsonLink = "http://api.openweathermap.org/data/2.5/weather?lat="+latitude+"&lon="+longitude+"&units=metric&appid=f61715d4a3c0f58a0b97d2c9073aa414";
    getWeatherData(jsonLink); 
  }
  
  function error(err) {
    $(".input-city").addClass("input-city-visible");
    console.log("fail " + err.message);
  }
  
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(success, error);
  } else {
    $(".input-city").addClass("input-city-visible");
  }
 
  window.setTimeout(function(){
    if ($("#weather-temp").html() == ''){
      console.log("timeout. coordinates didn't load");
      $(".input-city").addClass("input-city-visible");
    }
  }, 4000);

  $("#cityWeather").click(function (){
    var city = $("#city").val();
    jsonLink = "http://api.openweathermap.org/data/2.5/weather?q="+city+"&units=metric&appid=f61715d4a3c0f58a0b97d2c9073aa414";
    $(".input-city").hide();
    getWeatherData(jsonLink);
    return false;
  })
  
}
$(document).ready(main)