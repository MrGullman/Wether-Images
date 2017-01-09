$(document).ready(function(){
  
  $('button').click(function(){
    $('button').removeClass("selected");
    $(this).addClass("selected");
    
    var flickerAPI  = "https://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
    var buttonText = $(this).text();
    var flickerOption = {
    tags: buttonText,
    format: "json"
  };
    
    function displayPhotos(data){
      var photoHTML = '<ul>';
      $.each(data.items, function(i, photo){
        photoHTML += '<li>';
        photoHTML += '<a href="' + photo.link + '">';
        photoHTML += '<img src="' + photo.media.m + '"></a></li>';
      });
      photoHTML += '</ul>';
      $('#photos').html(photoHTML);
    }
    
    $.getJSON(flickerAPI, flickerOption, displayPhotos);
    
  });
  
});