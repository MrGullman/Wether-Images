$(document).ready(function(){
  
 // ändra stad genom formuläret
  
  /*$('#cityForm').submit(function(event){
    event.preventDefault();
    
    var cityName = $('#cityName').val();
    getCity(cityName);
    getImages(cityName);
    $('#cityName').val("");
  })*/
  
  //------------------------------------------------------
  
  
  // Få anvndarens plats

  //google api key AIzaSyAURTte8yk14_alvZGWHSHeNlMAbuML8LQ
                     

  
  
  /*$.getJSON("https://maps.googleapis.com/maps/api/js?key=AIzaSyD1JJlYtKmUiDi2hiEXw4spN5r4jLqDZGU&callback=initMap?q='halmstad'", function(data){
    console.log(data);
  }),*/
  
  
  /*$(function() {
    $.getJSON("https://api.ipify.org?format=jsonp&callback=?",
      function(json) {
        var myIP = json.ip;
        return myIP;
        console.log("My public IP address is: ", json.ip);
      }
    );
  });
  */
  
  $.getJSON("https://ipapi.co/json/", function(data){
      //console.log(data);
      city = "stockholm";
      //city = data.city;
      getCity(city);
    }, "jsonp");
  
  //---------------------------------------------------------------------


  
  // få ut väderdatan
  
 function getCity(city){
      
    /*$.get("http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=98607e305c6ce579f817cf36c9aaa852&lang=se", function(data)*/
    $.get("https://api.apixu.com/v1/current.json?key=e5c6bcdb884f449e97904419171101&q=" + city +"", function(data){
      //console.log(data);
      //var icon = data.weather[0].icon; // få ut väder icon värde
      //var temp = data.main.temp-273.15; // omvandla kelvin till celcius
      var weatherType = data.current.condition.text;
      $('.city').text(data.location.name);
      $('.country').text(data.location.country);
      //$('.temp').text(temp.toFixed(1));
      $('.temp').text(data.current.temp_c);
      //console.log(data.current.condition.text);
      $('.description').text(data.current.condition.text);
      var icon = data.current.condition.code;
      var dayOrNight = data.current.is_day;
      //console.log(data.current.condition.code);
      //$('.icon').append("<img src=" + icon + ">");
      getIcon(icon);

      getImages(city, dayOrNight);
    })
 }


  //-------------------------------------------------------------------
  
  // Get weather icon
  
  
  
  //--------------------------------------------------------------
  
  // Get Flicker Images
  
    
    function getImages(weather){
      
        var url = "https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=9bb1ef3285f869282ecc5e8ff9526ad5&per_page=200&tags=" + weather + "&extras=url_c%2C+url_m%2C+url_q"
        
        var weather = weather;

        $.getJSON(url + "&format=json&jsoncallback=?", function(data){

          
          var imageArray = [];
          console.log(data);
          // check image size
          for(var i = 0; i < data.photos.photo.length; i++){
            for(var i in data.photos.photo){
              console.log(data.photos.photo[i].width_m)
              
              if(data.photos.photo[i].width_m === "500" && data.photos.photo[i].height_m === "333"){
                imageArray.push(data.photos.photo[i].url_m)
              }
            }       
          }
          
          console.dir(imageArray); 
          
          var photoHTML = '<ul>';
          
          $.each(imageArray, function(i, photo){
            photoHTML += '<li>';
            
            photoHTML += '<img src="' + photo + '"></li>';
          });
            photoHTML += '</ul>';
          $('#photos').html(photoHTML);
          
          /*$.each(data.photos.photo, function(i, photo){
            photoHTML += '<li>';
            
            photoHTML += '<img src="' + photo.url_m + '"></li>';
          });
            photoHTML += '</ul>';
          $('#photos').html(photoHTML);
          */
          /*for(var i = 0; i < data.photos.photo.length; i++){
            for(var j = 0; j < data.photos.photo[i]; j++){
              console.log([j]);
            }
            
          }*/

        });
      
    };
    
   
    
  
  //--------------------------------------------------------------
  
  //  Check image size 
  
  
  
  
  
  
  //--------------------------------------------------------------
  
  //--------------------------------Capital City-----------------
  
  var capitalList = [];
  var option = "";
  
  $.get("https://restcountries.eu/rest/v1/all", function(data){

    for(var i = 0; i < data.length; i++){
      capitalList.push(data[i].capital);
    };

    
    capitalList = capitalList.filter(Boolean).sort();
    //console.log(capitalList.sort().length);
    
    //console.log(capitalList);
    
    for(var i = 0; i < capitalList.length; i++){
      option += '<option value="' + capitalList[i] + '">' + capitalList[i] + '</option>';
    };
    

    $('#item').append(option);
    

  });
  
  $('#item').change(function(){
    var capitalC = $('#item').val();
    getCity(capitalC);
    getImages(capitalC);
    //console.log(capitalC);
  });
  
  

});
