function onGeoOk(position){
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    console.log(`you live in position ${lat}, ${lng}`);
    const API_KEY = "17eca3c855e6ec073faf631430d09718"
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}`
    fetch(url).then(response => response.json().then(data => console.log(data.name,data.weather[0].main));
    

}

function onGeoError(){  
    alert("can't find you.")
}

navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError);