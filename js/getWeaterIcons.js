//================ Get and change the forcast image =========================

function getIcon(icon, dayOrNight){
    switch(icon){
      case 1000: // Clear
        if(dayOrNight === true){
          if($('.icon').has('img')){
            $('.icon img').remove();
            $('.icon').append('<img src="img/sunny.png">');
          } else {
            $('.icon').append('<img src="img/sunny.png">');
          }
        } else {
          if($('.icon').has('img')){
            $('.icon img').remove();
            $('.icon').append('<img src="img/sunny_night.png">');
          } else {
            $('.icon').append('<img src="img/sunny_night.png">');
          }
        }
      break;
        
      case 1003: // Partly Cloudy
        if(dayOrNight === true){
          if($('.icon').has('img')){
          $('.icon img').remove();
          $('.icon').append('<img src="img/cloudy1.png">');
          } else {
            $('.icon').append('<img src="img/cloudy1.png">');
          }
        } else {
          if($('.icon').has('img')){
            $('.icon img').remove();
            $('.icon').append('<img src="img/cloudy1_night.png">');
          } else {
            $('.icon').append('<img src="img/cloudy1_night.png">');
          }
        }
      break;
        
      case 1006: // Cloudy
        if(dayOrNight === true){
          if($('.icon').has('img')){
          $('.icon img').remove();
          $('.icon').append('<img src="img/cloudy5.png">');
          } else {
            $('.icon').append('<img src="img/cloudy5.png">');
          }
        } else {
          if($('.icon').has('img')){
            $('.icon img').remove();
            $('.icon').append('<img src="img/cloudy5.png">');
          } else {
            $('.icon').append('<img src="img/cloudy5.png">');
          }
        }
      break;
        
      case 1009: // Overcast
        if(dayOrNight === true){
          if($('.icon').has('img')){
          $('.icon img').remove();
          $('.icon').append('<img src="img/cloudy4.png">');
          } else {
            $('.icon').append('<img src="img/cloudy4.png">');
          }
        } else {
          if($('.icon').has('img')){
            $('.icon img').remove();
            $('.icon').append('<img src="img/cloudy4_night.png">');
          } else {
            $('.icon').append('<img src="img/cloudy4_night.png">');
          }
        }
      break;
        
      case 1030: // Mist
        if(dayOrNight === true){
          if($('.icon').has('img')){
          $('.icon img').remove();
          $('.icon').append('<img src="img/mist.png">');
          } else {
            $('.icon').append('<img src="img/mist.png">');
          }
        } else {
          if($('.icon').has('img')){
            $('.icon img').remove();
            $('.icon').append('<img src="img/mist_night.png">');
          } else {
            $('.icon').append('<img src="img/mist_night.png">');
          }
        }
      break;
        
      case 1063: // Patchy rain nearby
        if(dayOrNight === true){
          if($('.icon').has('img')){
          $('.icon img').remove();
          $('.icon').append('<img src="img/shower1.png">');
          } else {
            $('.icon').append('<img src="img/shower1.png">');
          }
        } else {
          if($('.icon').has('img')){
            $('.icon img').remove();
            $('.icon').append('<img src="img/shower1_night.png">');
          } else {
            $('.icon').append('<img src="img/shower1_night.png">');
          }
        }
      break;
        
      case 1066: // Patchy snow nearby
        if(dayOrNight === true){
          if($('.icon').has('img')){
          $('.icon img').remove();
          $('.icon').append('<img src="img/snow1.png">');
          } else {
            $('.icon').append('<img src="img/snow1.png">');
          }
        } else {
          if($('.icon').has('img')){
            $('.icon img').remove();
            $('.icon').append('<img src="img/snow1_night.png">');
          } else {
            $('.icon').append('<img src="img/snow1_night.png">');
          }
        }
      break;
        
      case 1069: // Patchy sleet nearby
        if(dayOrNight === true){
          if($('.icon').has('img')){
          $('.icon img').remove();
          $('.icon').append('<img src="img/sleet1.png">');
          } else {
            $('.icon').append('<img src="img/sleet1.png">');
          }
        } else {
          if($('.icon').has('img')){
            $('.icon img').remove();
            $('.icon').append('<img src="img/sleet1_night.png">');
          } else {
            $('.icon').append('<img src="img/sleet1_night.png">');
          }
        }
      break;
        
      case 1072: // Patchy freezing drizzle nearby
        if(dayOrNight === true){
          if($('.icon').has('img')){
          $('.icon img').remove();
          $('.icon').append('<img src="img/hail.png">');
          } else {
            $('.icon').append('<img src="img/hail.png">');
          }
        } else {
          if($('.icon').has('img')){
            $('.icon img').remove();
            $('.icon').append('<img src="img/hail_night.png">');
          } else {
            $('.icon').append('<img src="img/hail_night.png">');
          }
        }
      break;
        
      case 1087: // Thundery outbreaks in nearby
        if(dayOrNight === true){
          if($('.icon').has('img')){
          $('.icon img').remove();
          $('.icon').append('<img src="img/tstorm1.png">');
          } else {
            $('.icon').append('<img src="img/tstorm1.png">');
          }
        } else {
          if($('.icon').has('img')){
            $('.icon img').remove();
            $('.icon').append('<img src="img/tstorm1_night.png">');
          } else {
            $('.icon').append('<img src="img/tstorm1_night.png">');
          }
        }
      break;
        
      case 1114: // Blowing snow
        if(dayOrNight === true){
          if($('.icon').has('img')){
          $('.icon img').remove();
          $('.icon').append('<img src="img/snow4.png">');
          } else {
            $('.icon').append('<img src="img/snow4.png">');
          }
        } else {
          if($('.icon').has('img')){
            $('.icon img').remove();
            $('.icon').append('<img src="img/snow4.png">');
          } else {
            $('.icon').append('<img src="img/snow4.png">');
          }
        }
      break;
        
      case 1117: // Blizzard
        if(dayOrNight === true){
          if($('.icon').has('img')){
          $('.icon img').remove();
          $('.icon').append('<img src="img/snow5.png">');
          } else {
            $('.icon').append('<img src="img/snow5.png">');
          }
        } else {
          if($('.icon').has('img')){
            $('.icon img').remove();
            $('.icon').append('<img src="img/snow5.png">');
          } else {
            $('.icon').append('<img src="img/snow5.png">');
          }
        }
      break;
        
      case 1135: // Fog
        if(dayOrNight === true){
          if($('.icon').has('img')){
          $('.icon img').remove();
          $('.icon').append('<img src="img/fog.png">');
          } else {
            $('.icon').append('<img src="img/fog.png">');
          }
        } else {
          if($('.icon').has('img')){
            $('.icon img').remove();
            $('.icon').append('<img src="img/fog_night.png">');
          } else {
            $('.icon').append('<img src="img/fog_night.png">');
          }
        }
      break;
        
      case 1147: // Freezing Fog
        if(dayOrNight === true){
          if($('.icon').has('img')){
          $('.icon img').remove();
          $('.icon').append('<img src="img/fog.png">');
          } else {
            $('.icon').append('<img src="img/fog.png">');
          }
        } else {
          if($('.icon').has('img')){
            $('.icon img').remove();
            $('.icon').append('<img src="img/fog_night.png">');
          } else {
            $('.icon').append('<img src="img/fog_night.png">');
          }
        }
      break;
        
      case 1150: // Patchy light drizzle
        if(dayOrNight === true){
          if($('.icon').has('img')){
          $('.icon img').remove();
          $('.icon').append('<img src="img/shower2.png">');
          } else {
            $('.icon').append('<img src="img/shower2.png">');
          }
        } else {
          if($('.icon').has('img')){
            $('.icon img').remove();
            $('.icon').append('<img src="img/shower2_night.png">');
          } else {
            $('.icon').append('<img src="img/shower2_night.png">');
          }
        }
      break;
        
      case 1153: // Light drizzle
        if(dayOrNight === true){
          if($('.icon').has('img')){
          $('.icon img').remove();
          $('.icon').append('<img src="img/shower2.png">');
          } else {
            $('.icon').append('<img src="img/shower2.png">');
          }
        } else {
          if($('.icon').has('img')){
            $('.icon img').remove();
            $('.icon').append('<img src="img/shower2_night.png">');
          } else {
            $('.icon').append('<img src="img/shower2_night.png">');
          }
        }
      break;
        
      case 1168: // Freezing drizzle
        if(dayOrNight === true){
          if($('.icon').has('img')){
          $('.icon img').remove();
          $('.icon').append('<img src="img/hail.png">');
          } else {
            $('.icon').append('<img src="img/hail.png">');
          }
        } else {
          if($('.icon').has('img')){
            $('.icon img').remove();
            $('.icon').append('<img src="img/hail.png">');
          } else {
            $('.icon').append('<img src="img/hail.png">');
          }
        }
      break;
        
      case 1168: // Heavy freezing drizzle
        if(dayOrNight === true){
          if($('.icon').has('img')){
          $('.icon img').remove();
          $('.icon').append('<img src="img/hail.png">');
          } else {
            $('.icon').append('<img src="img/hail.png">');
          }
        } else {
          if($('.icon').has('img')){
            $('.icon img').remove();
            $('.icon').append('<img src="img/hail.png">');
          } else {
            $('.icon').append('<img src="img/hail.png">');
          }
        }
      break;
        
      case 1180: // Patchy light rain
        if(dayOrNight === true){
          if($('.icon').has('img')){
          $('.icon img').remove();
          $('.icon').append('<img src="img/shower1.png">');
          } else {
            $('.icon').append('<img src="img/shower1.png">');
          }
        } else {
          if($('.icon').has('img')){
            $('.icon img').remove();
            $('.icon').append('<img src="img/shower1_night.png">');
          } else {
            $('.icon').append('<img src="img/shower1_night.png">');
          }
        }
      break;
        
      case 1183: // Light rain
        if(dayOrNight === true){
          if($('.icon').has('img')){
          $('.icon img').remove();
          $('.icon').append('<img src="img/shower1.png">');
          } else {
            $('.icon').append('<img src="img/shower1.png">');
          }
        } else {
          if($('.icon').has('img')){
            $('.icon img').remove();
            $('.icon').append('<img src="img/shower1_night.png">');
          } else {
            $('.icon').append('<img src="img/shower1_night.png">');
          }
        }
      break;
        
      case 1186: // Moderate rain at times
        if(dayOrNight === true){
          if($('.icon').has('img')){
          $('.icon img').remove();
          $('.icon').append('<img src="img/shower2.png">');
          } else {
            $('.icon').append('<img src="img/shower2.png">');
          }
        } else {
          if($('.icon').has('img')){
            $('.icon img').remove();
            $('.icon').append('<img src="img/shower2_night.png">');
          } else {
            $('.icon').append('<img src="img/shower2_night.png">');
          }
        }
      break;
        
      case 1189: // Moderate rain
        if(dayOrNight === true){
          if($('.icon').has('img')){
          $('.icon img').remove();
          $('.icon').append('<img src="img/shower2.png">');
          } else {
            $('.icon').append('<img src="img/shower2.png">');
          }
        } else {
          if($('.icon').has('img')){
            $('.icon img').remove();
            $('.icon').append('<img src="img/shower2_night.png">');
          } else {
            $('.icon').append('<img src="img/shower2_night.png">');
          }
        }
      break;
        
      case 1192: // Heavy rain at times
        if(dayOrNight === true){
          if($('.icon').has('img')){
          $('.icon img').remove();
          $('.icon').append('<img src="img/shower3.png">');
          } else {
            $('.icon').append('<img src="img/shower3.png">');
          }
        } else {
          if($('.icon').has('img')){
            $('.icon img').remove();
            $('.icon').append('<img src="img/shower3_night.png">');
          } else {
            $('.icon').append('<img src="img/shower3_night.png">');
          }
        }
      break;
        
      case 1195: // Heavy rain
        if(dayOrNight === true){
          if($('.icon').has('img')){
          $('.icon img').remove();
          $('.icon').append('<img src="img/shower3.png">');
          } else {
            $('.icon').append('<img src="img/shower3.png">');
          }
        } else {
          if($('.icon').has('img')){
            $('.icon img').remove();
            $('.icon').append('<img src="img/shower3_night.png">');
          } else {
            $('.icon').append('<img src="img/shower3_night.png">');
          }
        }
      break;
        
      case 1198: // Light freezing rain
        if(dayOrNight === true){
          if($('.icon').has('img')){
          $('.icon img').remove();
          $('.icon').append('<img src="img/hail.png">');
          } else {
            $('.icon').append('<img src="img/hail.png">');
          }
        } else {
          if($('.icon').has('img')){
            $('.icon img').remove();
            $('.icon').append('<img src="img/hail.png">');
          } else {
            $('.icon').append('<img src="img/hail.png">');
          }
        }
      break;
        
      case 1201: // Moderate or heavy freezing rain
        if(dayOrNight === true){
          if($('.icon').has('img')){
          $('.icon img').remove();
          $('.icon').append('<img src="img/hail.png">');
          } else {
            $('.icon').append('<img src="img/hail.png">');
          }
        } else {
          if($('.icon').has('img')){
            $('.icon img').remove();
            $('.icon').append('<img src="img/hail.png">');
          } else {
            $('.icon').append('<img src="img/hail.png">');
          }
        }
      break;
        
      case 1204: // Light sleet
        if(dayOrNight === true){
          if($('.icon').has('img')){
          $('.icon img').remove();
          $('.icon').append('<img src="img/sleet1.png">');
          } else {
            $('.icon').append('<img src="img/sleet1.png">');
          }
        } else {
          if($('.icon').has('img')){
            $('.icon img').remove();
            $('.icon').append('<img src="img/sleet1_night.png">');
          } else {
            $('.icon').append('<img src="img/sleet1_night.png">');
          }
        }
      break;
        
      case 1207: // Moderate or heavy sleet
        if(dayOrNight === true){
          if($('.icon').has('img')){
          $('.icon img').remove();
          $('.icon').append('<img src="img/sleet.png">');
          } else {
            $('.icon').append('<img src="img/sleet.png">');
          }
        } else {
          if($('.icon').has('img')){
            $('.icon img').remove();
            $('.icon').append('<img src="img/sleet.png">');
          } else {
            $('.icon').append('<img src="img/sleet.png">');
          }
        }
      break;
        
      case 1210: // Patchy light snow
        if(dayOrNight === true){
          if($('.icon').has('img')){
          $('.icon img').remove();
          $('.icon').append('<img src="img/snow1.png">');
          } else {
            $('.icon').append('<img src="img/snow1.png">');
          }
        } else {
          if($('.icon').has('img')){
            $('.icon img').remove();
            $('.icon').append('<img src="img/snow1_night.png">');
          } else {
            $('.icon').append('<img src="img/snow1_night.png">');
          }
        }
      break;
        
      case 1213: // Light sno
        if(dayOrNight === true){
          if($('.icon').has('img')){
          $('.icon img').remove();
          $('.icon').append('<img src="img/snow1.png">');
          } else {
            $('.icon').append('<img src="img/snow1.png">');
          }
        } else {
          if($('.icon').has('img')){
            $('.icon img').remove();
            $('.icon').append('<img src="img/snow1_night.png">');
          } else {
            $('.icon').append('<img src="img/snow1_night.png">');
          }
        }
      break;
        
      case 1216: // Patchy moderate snow
        if(dayOrNight === true){
          if($('.icon').has('img')){
          $('.icon img').remove();
          $('.icon').append('<img src="img/snow2.png">');
          } else {
            $('.icon').append('<img src="img/snow2.png">');
          }
        } else {
          if($('.icon').has('img')){
            $('.icon img').remove();
            $('.icon').append('<img src="img/snow2_night.png">');
          } else {
            $('.icon').append('<img src="img/snow2_night.png">');
          }
        }
      break;
        
      case 1219: // Moderate snow
        if(dayOrNight === true){
          if($('.icon').has('img')){
          $('.icon img').remove();
          $('.icon').append('<img src="img/snow3.png">');
          } else {
            $('.icon').append('<img src="img/snow3.png">');
          }
        } else {
          if($('.icon').has('img')){
            $('.icon img').remove();
            $('.icon').append('<img src="img/snow3_night.png">');
          } else {
            $('.icon').append('<img src="img/snow3_night.png">');
          }
        }
      break;
        
      case 1222: // Patchy heavy snow
        if(dayOrNight === true){
          if($('.icon').has('img')){
          $('.icon img').remove();
          $('.icon').append('<img src="img/snow4.png">');
          } else {
            $('.icon').append('<img src="img/snow4.png">');
          }
        } else {
          if($('.icon').has('img')){
            $('.icon img').remove();
            $('.icon').append('<img src="img/snow4.png">');
          } else {
            $('.icon').append('<img src="img/snow4.png">');
          }
        }
      break;
        
      case 1225: // Heavy snow
        if(dayOrNight === true){
          if($('.icon').has('img')){
          $('.icon img').remove();
          $('.icon').append('<img src="img/snow5.png">');
          } else {
            $('.icon').append('<img src="img/snow5.png">');
          }
        } else {
          if($('.icon').has('img')){
            $('.icon img').remove();
            $('.icon').append('<img src="img/snow5.png">');
          } else {
            $('.icon').append('<img src="img/snow5.png">');
          }
        }
      break;
        
      case 1237: // Ice pellets
        if(dayOrNight === true){
          if($('.icon').has('img')){
          $('.icon img').remove();
          $('.icon').append('<img src="img/hail.png">');
          } else {
            $('.icon').append('<img src="img/hail.png">');
          }
        } else {
          if($('.icon').has('img')){
            $('.icon img').remove();
            $('.icon').append('<img src="img/hail.png">');
          } else {
            $('.icon').append('<img src="img/hail.png">');
          }
        }
      break;
        
      case 1240: // Light rain shower
        if(dayOrNight === true){
          if($('.icon').has('img')){
          $('.icon img').remove();
          $('.icon').append('<img src="img/shower1.png">');
          } else {
            $('.icon').append('<img src="img/shower1.png">');
          }
        } else {
          if($('.icon').has('img')){
            $('.icon img').remove();
            $('.icon').append('<img src="img/shower1_night.png">');
          } else {
            $('.icon').append('<img src="img/shower1_night.png">');
          }
        }
      break;
        
      case 1243: // Moderate or heavy rain shower
        if(dayOrNight === true){
          if($('.icon').has('img')){
          $('.icon img').remove();
          $('.icon').append('<img src="img/shower2.png">');
          } else {
            $('.icon').append('<img src="img/shower2.png">');
          }
        } else {
          if($('.icon').has('img')){
            $('.icon img').remove();
            $('.icon').append('<img src="img/shower2_night.png">');
          } else {
            $('.icon').append('<img src="img/shower2_night.png">');
          }
        }
      break;
        
      case 1246: // Torrential rain shower
        if(dayOrNight === true){
          if($('.icon').has('img')){
          $('.icon img').remove();
          $('.icon').append('<img src="img/shower3.png">');
          } else {
            $('.icon').append('<img src="img/shower3.png">');
          }
        } else {
          if($('.icon').has('img')){
            $('.icon img').remove();
            $('.icon').append('<img src="img/shower3_night.png">');
          } else {
            $('.icon').append('<img src="img/shower3_night.png">');
          }
        }
      break;
        
      case 1249: // Light sleet showers
        if(dayOrNight === true){
          if($('.icon').has('img')){
          $('.icon img').remove();
          $('.icon').append('<img src="img/sleet1.png">');
          } else {
            $('.icon').append('<img src="img/sleet1.png">');
          }
        } else {
          if($('.icon').has('img')){
            $('.icon img').remove();
            $('.icon').append('<img src="img/sleet1_night.png">');
          } else {
            $('.icon').append('<img src="img/sleet1_night.png">');
          }
        }
      break;
        
      case 1252: // Moderate or heavy sleet showers
        if(dayOrNight === true){
          if($('.icon').has('img')){
          $('.icon img').remove();
          $('.icon').append('<img src="img/sleet.png">');
          } else {
            $('.icon').append('<img src="img/sleet.png">');
          }
        } else {
          if($('.icon').has('img')){
            $('.icon img').remove();
            $('.icon').append('<img src="img/sleet.png">');
          } else {
            $('.icon').append('<img src="img/sleet.png">');
          }
        }
      break;
        
      case 1255: // Light snow showers
        if(dayOrNight === true){
          if($('.icon').has('img')){
          $('.icon img').remove();
          $('.icon').append('<img src="img/snow1.png">');
          } else {
            $('.icon').append('<img src="img/snow1.png">');
          }
        } else {
          if($('.icon').has('img')){
            $('.icon img').remove();
            $('.icon').append('<img src="img/snow1_night.png">');
          } else {
            $('.icon').append('<img src="img/snow1_night.png">');
          }
        }
      break;
        
      case 1258: // Moderate or heavy snow showers
        if(dayOrNight === true){
          if($('.icon').has('img')){
          $('.icon img').remove();
          $('.icon').append('<img src="img/snow3.png">');
          } else {
            $('.icon').append('<img src="img/snow3.png">');
          }
        } else {
          if($('.icon').has('img')){
            $('.icon img').remove();
            $('.icon').append('<img src="img/snow3_night.png">');
          } else {
            $('.icon').append('<img src="img/snow3_night.png">');
          }
        }
      break;
        
      case 1261: // Light showers of ice pellets
        if(dayOrNight === true){
          if($('.icon').has('img')){
          $('.icon img').remove();
          $('.icon').append('<img src="img/hail.png">');
          } else {
            $('.icon').append('<img src="img/hail.png">');
          }
        } else {
          if($('.icon').has('img')){
            $('.icon img').remove();
            $('.icon').append('<img src="img/hail.png">');
          } else {
            $('.icon').append('<img src="img/hail.png">');
          }
        }
      break;
        
      case 1264: // Moderate or heavy showers of ice pellets
        if(dayOrNight === true){
          if($('.icon').has('img')){
          $('.icon img').remove();
          $('.icon').append('<img src="img/hail.png">');
          } else {
            $('.icon').append('<img src="img/hail.png">');
          }
        } else {
          if($('.icon').has('img')){
            $('.icon img').remove();
            $('.icon').append('<img src="img/hail.png">');
          } else {
            $('.icon').append('<img src="img/hail.png">');
          }
        }
      break;
        
      case 1273: // Patchy light rain in area with thunder
        if(dayOrNight === true){
          if($('.icon').has('img')){
          $('.icon img').remove();
          $('.icon').append('<img src="img/tstorm1.png">');
          } else {
            $('.icon').append('<img src="img/tstorm1.png">');
          }
        } else {
          if($('.icon').has('img')){
            $('.icon img').remove();
            $('.icon').append('<img src="img/tstorm1_night.png">');
          } else {
            $('.icon').append('<img src="img/tstorm1_night.png">');
          }
        }
      break;
        
      case 1276: // Moderate or heavy rain in area with thunder
        if(dayOrNight === true){
          if($('.icon').has('img')){
          $('.icon img').remove();
          $('.icon').append('<img src="img/tstorm3.png">');
          } else {
            $('.icon').append('<img src="img/tstorm3.png">');
          }
        } else {
          if($('.icon').has('img')){
            $('.icon img').remove();
            $('.icon').append('<img src="img/tstorm3.png">');
          } else {
            $('.icon').append('<img src="img/tstorm3.png">');
          }
        }
      break;
        
      case 1279: // Patchy light snow in area with thunder
        if(dayOrNight === true){
          if($('.icon').has('img')){
          $('.icon img').remove();
          $('.icon').append('<img src="img/tstorm1Thunder.png">');
          } else {
            $('.icon').append('<img src="img/tstorm1Thunder.png">');
          }
        } else {
          if($('.icon').has('img')){
            $('.icon img').remove();
            $('.icon').append('<img src="img/tstorm1Thunder_night.png">');
          } else {
            $('.icon').append('<img src="img/tstorm1Thunder_night.png">');
          }
        }
      break;
        
      case 1282: // Moderate or heavy snow in area with thunder
        if(dayOrNight === true){
          if($('.icon').has('img')){
          $('.icon img').remove();
          $('.icon').append('<img src="img/tstorm3Thunder.png">');
          } else {
            $('.icon').append('<img src="img/tstorm3Thunder.png">');
          }
        } else {
          if($('.icon').has('img')){
            $('.icon img').remove();
            $('.icon').append('<img src="img/tstorm3Thunder.png">');
          } else {
            $('.icon').append('<img src="img/tstorm3Thunder.png">');
          }
        }
      break;
        
      default:
        console.log("No Icon");
        break;
    }
  }