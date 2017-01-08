$(document).ready(function(){
  
 // ändra stad genom formuläret
  
  //var city = "";
  //var temp = 0;
  //var discription = "";
  
  $('#cityForm').submit(function(event){
    event.preventDefault();
    
    var cityName = $('#cityName').val();
    getCity(cityName);
    //$('.city').text(cityName);
  })
  
  //------------------------------------------------------
  
  
  // Få anvndarens plats

  $.get("https://ipinfo.io", function(data){
      console.log(data);
      city = data.city;
      //$('.city').text(data.city);
      //$('.country').text(data.country);
      getCity(city);
      //wetherInfo(city);
    }, "jsonp");
  
  //---------------------------------------------------------------------


  
  // få ut väderdatan
  
 function getCity(one){
    $.get("http://api.openweathermap.org/data/2.5/weather?q=" + one + "&appid=98607e305c6ce579f817cf36c9aaa852", function(data){
      console.log(data);
      temp = data.main.temp-273.15;
      $('.city').text(data.name);
      $('.temp').text(temp.toFixed(1)+"C");
      temp = data.main.temp-273.15;
    })
 }
  
  //-------------------------------------------------------------------
  

});