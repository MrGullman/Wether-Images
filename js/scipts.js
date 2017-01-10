$(document).ready(function(){
  
 // ändra stad genom formuläret
  
  $('#cityForm').submit(function(event){
    event.preventDefault();
    
    var cityName = $('#cityName').val();
    getCity(cityName);
    getImages(cityName);
    $('#cityName').val("");
  })
  
  //------------------------------------------------------
  
  
  // Få anvndarens plats

  //google api key AIzaSyAURTte8yk14_alvZGWHSHeNlMAbuML8LQ
  
  $(function() {
    $.getJSON("https://api.ipify.org?format=jsonp&callback=?",
      function(json) {
        var myIP = json.ip;
        return myIP;
        console.log("My public IP address is: ", json.ip);
      }
    );
  });
  
  $.getJSON("https://ipapi.co/json/", function(data){
      console.log(data);
      city = data.city;
      getCity(city);
    }, "jsonp");
  
  //---------------------------------------------------------------------


  
  // få ut väderdatan
  
 function getCity(city){
    $.get("http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=98607e305c6ce579f817cf36c9aaa852&lang=se", function(data){
      var icon = data.weather[0].icon; // få ut väder icon värde
      var temp = data.main.temp-273.15; // omvandla kelvin till celcius
      var weatherType = data.weather[0].main;
      $('.city').text(data.name);
      $('.country').text(data.sys.country);
      $('.temp').text(temp.toFixed(1));
      $('.description').text(data.weather[0].description);
      getIcon(icon);
      console.log(data);
      getImages(weatherType);
    })
 }


  //-------------------------------------------------------------------
  
  // Get weather icon
  
  function getIcon(icon){
    switch(icon){
      case "01d":
        if($('.icon').has('img')){
          $('.icon img').remove();
          $('.icon').append('<img src="img/sunny.png">');
        } else {
          $('.icon').append('<img src="img/sunny.png">');
        }
        break;
        
      case "01n":
        if($('.icon').has('img')){
          $('.icon img').remove();
          $('.icon').append('<img src="img/sunny_night.png">');
        } else {
          $('.icon').append('<img src="img/sunny_night.png">');
        }
        break;
        
      case "02d":
        if($('.icon').has('img')){
          $('.icon img').remove();
          $('.icon').append('<img src="img/cloudy1.png">');
        } else {
          $('.icon').append('<img src="img/cloudy1.png">');
        }
        break;
        
      case "02n":
        if($('.icon').has('img')){
          $('.icon img').remove();
          $('.icon').append('<img src="img/cloudy1_night.png">');
        } else {
          $('.icon').append('<img src="img/cloudy1_night.png">');
        }
        break;
        
      case "03d":
        if($('.icon').has('img')){
          $('.icon img').remove();
          $('.icon').append('<img src="img/cloudy2.png">');
        } else {
          $('.icon').append('<img src="img/cloudy2.png">');
        }
        break;
        
      case "03n":
        if($('.icon').has('img')){
          $('.icon img').remove();
          $('.icon').append('<img src="img/cloudy2_night.png">');
        } else {
          $('.icon').append('<img src="img/cloudy2_night.png">');
        }
        break;
        
      case "04d":
        if($('.icon').has('img')){
          $('.icon img').remove();
          $('.icon').append('<img src="img/cloudy5.png">');
        } else {
          $('.icon').append('<img src="img/cloudy5.png">');
        }
        break;
        
      case "04n":
        if($('.icon').has('img')){
          $('.icon img').remove();
          $('.icon').append('<img src="img/cloudy5.png">');
        } else {
          $('.icon').append('<img src="img/cloudy5.png">');
        }
        break;
        
      case "09d":
        if($('.icon').has('img')){
          $('.icon img').remove();
          $('.icon').append('<img src="img/shower3.png">');
        } else {
          $('.icon').append('<img src="img/shower3.png">');
        }
        break;
        
      case "09n":
        if($('.icon').has('img')){
          $('.icon img').remove();
          $('.icon').append('<img src="img/shower3.png">');
        } else {
          $('.icon').append('<img src="img/shower3.png">');
        }
        break;
        
      case "10d":
        if($('.icon').has('img')){
          $('.icon img').remove();
          $('.icon').append('<img src="img/shower2.png">');
        } else {
          $('.icon').append('<img src="img/shower2.png">');
        }
        break;
        
      case "10n":
        if($('.icon').has('img')){
          $('.icon img').remove();
          $('.icon').append('<img src="img/shower2_night.png">');
        } else {
          $('.icon').append('<img src="img/shower2_night.png">');
        }
        break;
        
      case "11d":
        if($('.icon').has('img')){
          $('.icon img').remove();
          $('.icon').append('<img src="img/tstorm1.png">');
        } else {
          $('.icon').append('<img src="img/tstorm1.png">');
        }
        break;
        
      case "11n":
        if($('.icon').has('img')){
          $('.icon img').remove();
          $('.icon').append('<img src="img/tstorm1_night.png">');
        } else {
          $('.icon').append('<img src="img/tstorm1_night.png">');
        }
        break;
        
      case "13d":
        if($('.icon').has('img')){
          $('.icon img').remove();
          $('.icon').append('<img src="img/snow3.png">');
        } else {
          $('.icon').append('<img src="img/snow3.png">');
        }
        break;
        
      case "13n":
        if($('.icon').has('img')){
          $('.icon img').remove();
          $('.icon').append('<img src="img/snow3_night.png">');
        } else {
          $('.icon').append('<img src="img/snow3_night.png">');
        }
        break;
        
      case "50d":
        if($('.icon').has('img')){
          $('.icon img').remove();
          $('.icon').append('<img src="img/fog.png">');
        } else {
          $('.icon').append('<img src="img/fog.png">');
        }
        break;
        
      case "50n":
        if($('.icon').has('img')){
          $('.icon img').remove();
          $('.icon').append('<img src="img/fog_night.png">');
        } else {
          $('.icon').append('<img src="img/fog_night.png">');
        }
        break;
        
      default:
        console.log("No World");
    }
  }
  
  //--------------------------------------------------------------
  
  // Get Flicker Images
  
    
    function getImages(weather){
      
        var url = "https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=9bb1ef3285f869282ecc5e8ff9526ad5&per_page=20&tags=" + weather + "&extras=url_c%2C+url_m"
        var weather = weather;

        $.getJSON(url + "&format=json&jsoncallback=?", function(data){
          console.log(data);
          var photoHTML = '<ul>';
          $.each(data.photos.photo, function(i, photo){
            photoHTML += '<li>';
            photoHTML += '<img src="' + photo.url_c + '"></li>';
          });
            photoHTML += '</ul>';
          $('#photos').html(photoHTML);
          
          
          console.log(data.photos);
        });
      
    };
    
   
    
  
  //--------------------------------------------------------------
  

});