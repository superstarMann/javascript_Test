const weather = document.querySelector(".js-weather");

const COORDS = `coords`;
const API_KEY=`399ce3a175eff03ee7205d576a2797b9`;

function getWeather(latitude, longitude) {
   fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`)
   .then(function(response){
       return response.json();
   }).then(function(json){
     const temperature = json.main.temp;
     const place= json.name;
     weather.innerText = `${temperature} - ${place}`;
   });
}

function saveCoords(coordsObj){
   localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

function handleGeoSucces(position){
   const latitude = position.coords.latitude;
   const longitude = position.coords.longitude;
   const coordsObj = {
       latitude: latitude,
       longitude: longitude
   };
   saveCoords(coordsObj);
   getWeather(latitude, longitude);
}
function handleGeoError(){
    console.log(`cant aceess`);
}

function AskForCoords() {
    navigator.geolocation.getCurrentPosition(handleGeoSucces, handleGeoError);
}

function loadCoords(){
  const loadedCoords = localStorage.getItem(COORDS);
  if(loadedCoords === null) {
      AskForCoords();
  }else{
      const parseCoords = JSON.parse(loadedCoords);
      getWeather(parseCoords.latitude, parseCoords.longitude);
  }
}

function init () {
    loadCoords();
}

init();