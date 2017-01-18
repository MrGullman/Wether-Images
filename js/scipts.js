$(document).ready(function(){
  

  //==============================================================
  // Får ut landet du är i och dess huvudstad från ipapi Api
  
  
  $.getJSON("https://ipapi.co/json/", function(data){
      country = data.country;
      getCurrentCountryCapitalCity(country);
    });
  
  function getCurrentCountryCapitalCity(countryCode){
    $.get("https://restcountries.eu/rest/v1/alpha?codes=" + countryCode + "", function(data){
      var currentCapitalCity = data[0].capital;
      
      getWeather(currentCapitalCity);
      console.log(data);
    })
  }
  
  

  //==============================================================
  // Får ut väderdatan från apiu Api
  
  
 function getWeather(city){

    $.get("https://api.apixu.com/v1/forecast.json?key=e5c6bcdb884f449e97904419171101&q=" + city +"&days=5", function(data){
      console.log(data);
      var weatherType = data.current.condition.text;
      var wind = data.current.wind_kph/3.6; // <- Hämtar ut vilken vindhastighet och gör om den till meter/sec
      var windDir = data.current.wind_dir;  // <- Hämtar ut värdet för vilken vindriktning
      var iconType = data.current.condition.code;   //  <-  Hämtar ut vilken icon som är till vädret
      var dayOrNight = data.current.is_day;   //  <-  Hämtar om det är dag eller natt

      $('#city').text(data.location.name);
      $('#country').text(data.location.country);
      $('.temp').text(data.current.temp_c);
      $('.description').text(data.current.condition.text);
      $('.wind').text(wind.toFixed(1)); //  <- Sätter antalet decimaler i vindhastigheten till 1
      
      
      function weatherIcon(iconNumber, dayOrNight){
        //console.log(iconNumber);
        for(var i = 0; i < weatherCondition.length; i++){
          if(dayOrNight === 1){
            
            if(iconNumber === weatherCondition[i].code){
              //console.log(weatherCondition[i].code);
              if($('.weather-icon').has('img')){
                $('.weather-icon img').remove();
                $('.weather-icon').append('<img src="' + weatherCondition[i].day + '">');
              } else {
                $('.weather-icon').append('<img src="' + weatherCondition[i].day + '">');
              }
            }
          } else {
            
            if(iconNumber === weatherCondition[i].code){
              
              if($('.weather-icon').has('img')){
                $('.weather-icon img').remove();
                $('.weather-icon').append('<img src="' + weatherCondition[i].night + '">');
              } else {
                $('.weather-icon').append('<img src="' + weatherCondition[i].night + '">');
              }
            }
            
          }
        }
        
      }
      
      
      function forecastWeather(icon){
        console.log(icon);
        for(var i = 0; i < weatherCondition.length; i++){

          if(icon === weatherCondition[i].code){
            return weatherCondition[i].day
          }else{
            
          }
        }

      }
      
      
      weatherIcon(iconType, dayOrNight);
      getWetherCondition(iconType, dayOrNight);
      getImages(city, dayOrNight);
      getWindDirection(windDir);  // Get the wind direction
      upcomingWeather(iconType); // <- Skickar typ of icon till upcomingWeather
      
      //----------------------------------------
      //  kommande 3 dagars väder
              
      
      
      
      
        
        function upcomingWeather(iconType){
          //$('#comingForecast').remove();
          console.log("denna körs");
          
          var comingDayForecast = "<ul>";

            for(var i = 0; i < data.forecast.forecastday.length; i++){
              var iconTypeForecast = data.forecast.forecastday[i].day.condition.code;
              
              //console.log(data.forecast.forecastday[i].day.condition.code);
              comingDayForecast += "<li>";
              comingDayForecast += '<img src="' + forecastWeather(iconTypeForecast) + '">';
              comingDayForecast += "<h3>" + data.forecast.forecastday[i].date + "</h3>";
              comingDayForecast += '<p class="forecast-temp">' + data.forecast.forecastday[i].day.avgtemp_c + '</p>';

              comingDayForecast += "</li>";
              
              //console.log(data.forecast.forecastday[i]);
            }

            comingDayForecast += "</ul>";
          
            forecastWeather(iconTypeForecast);
          
          

            //$('.info').append('<div id="comingForecast"></div>');
            
            //$('#comingForecast').html(comingDayForecast);
            
            
            $('#comingForecast').html(comingDayForecast);
        }
        
      
      
    })  // <- end AJAX get function
 }  // <- end getWeather function

  
  
  
  
  
  
  
  
  
  
  
  

 //==============================================================
  
  //  Hämtar ut väderförhållandet
  //  Här får vi ut väderinformationen på svenska
  //  Samt att vi kollar om det är dag eller natt.
  
  function getWetherCondition(code, dayOrNight){
    
    $.get("https://www.apixu.com/doc/conditions.json", function(data){
      
      for(var i = 0; i < data.length; i++){
        if(code === data[i].code && dayOrNight === 1){
          $('.description').text(data[i].languages[28].day_text);
        } else if (code === data[i].code && dayOrNight === 0) {
          $('.description').text(data[i].languages[28].night_text);
        }
      }
      //console.log(data);
    })
    
  };
  
 //==============================================================
  
  // Get Flicker Images
  
    
    function getImages(weather){
      
        var url = "https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=9bb1ef3285f869282ecc5e8ff9526ad5&per_page=200&tags=" + weather + "&extras=url_c%2C+url_m%2C+url_q"
        
        var weather = weather;

        $.getJSON(url + "&format=json&jsoncallback=?", function(data){

          
          var imageArray = [];
         //console.log(data);
          // check image size
          for(var i = 0; i < data.photos.photo.length; i++){
            for(var i in data.photos.photo){
              //console.log(data.photos.photo[i].width_m)
              
              if(data.photos.photo[i].width_m === "500" && data.photos.photo[i].height_m === "333"){
                imageArray.push(data.photos.photo[i].url_m)
              }
            }       
          }
          
 
          
          var photoHTML = '<ul>';
          
          $.each(imageArray, function(i, photo){
            photoHTML += '<li>';
            
            photoHTML += '<img src="' + photo + '"></li>';
          });
            photoHTML += '</ul>';
          $('#photos').html(photoHTML);
          
        });
      
    };

  
 //==============================================================
  
  //  Huvudstad
  //  Hämtar ut alla länders huvudstad från restcountrys Api
  
  var capitalList = []; // Sparar alla huvudstäder i denna array
  var option = "";  //  Alla select värden sparas i denna variabel
  
  $.get("https://restcountries.eu/rest/v1/all", function(data){
    
    for(var i = 0; i < data.length; i++){
      // Får ut alla huvudstäder och lägger till dem i capitalList
      capitalList.push(data[i].capital);
    };
    
    // Här tar jag bort alla tomma värden.
    capitalList = capitalList.filter(Boolean).sort();

    
    for(var i = 0; i < capitalList.length; i++){
      // Här lägger jag till alla select värden
      option += '<option value="' + capitalList[i] + '">' + capitalList[i] + '</option>';
    };
    
    // Här lägger jag till alla huvudstäder i select boxen
    $('#capitalCitys').append(option);
    
  });  // <--- get request end
  
  // Här uppdateras värdet beroende på vad som väljs i select boxen
  $('#capitalCitys').change(function(){
    var capitalC = $('#capitalCitys').val();
    getWeather(capitalC);
    getImages(capitalC);;
  });
  
  //==============================================================
  // Sid funktionalitet/animationer
  
  // Animera Burger Button
  
  
  $(".container").click(function(){
    $(this).toggleClass("change");
    $('#overlay').toggle("slow", function(){
      
    })
  });
 
  

});
