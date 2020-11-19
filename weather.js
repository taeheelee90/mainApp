const weather = document.querySelector(".js-weather");
const APP_KEY = "758900bb596dbceb40c07f42c763b2cb";

const COORDS_LS = "coords";

function getWeather(latitude, longitude){
    fetch (`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${APP_KEY}&units=metric`)
    //response: 개발자도구 > network > response    
    .then(function(response){
        return response.json()
    })

    // it takes time to get JSOn from response. That's why I put second then here.
    .then(function(json){
        const temperature = (json.main.temp).toFixed(0);
        const main = json.weather[0].main;
        const location = json.name;

        weather.innerText = `Weather in ${location} now: ${main}, ${temperature}℃`;

    });

}


function saveCoord(coordObj){
    localStorage.setItem(COORDS_LS, JSON.stringify(coordObj));
    getWeather(coordObj.latitude, coordObj.latitude);
}

function positionSuccess(position){
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

    const coordObj ={
        latitude,
        longitude
    };

    saveCoord(coordObj);
}

function positionError(){
    console.log("Can not access to the location.");
}


function askLocation(){
    navigator.geolocation.getCurrentPosition(positionSuccess, positionError);
}


function showWeather(){
    const currentCoords = localStorage.getItem(COORDS_LS);
    if(currentCoords === null){
        askLocation();
    }else{
        const parsedCoords = JSON.parse(currentCoords);
        getWeather(parsedCoords.latitude, parsedCoords.longitude);
    }

}

function init(){
 showWeather();
}

init();