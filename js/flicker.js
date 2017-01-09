$(document).ready(function(){
  
  
    var url = "https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=7512756ec3e4421c47b92a59361f1a96&tags=" + weather + "&extras=url_c%2C+url_m"
    
    var weather = "sunny";
    
    $.getJSON(url + "&format=json&jsoncallback=?", function(data){
      console.log(data);
    });
    

  //http://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=YOURAPIKEYHERE&tags=yokota+air+base&safe_search=1&per_page=20
  
});