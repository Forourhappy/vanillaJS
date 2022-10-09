function onGeoSuccess(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=661271492ab6ad474ee72411c80dfeff&units=metric`;
  fetch(url).then(res => res.json()).then(data => {
    const city = document.querySelector('#weather div:first-child');
    const weather = document.querySelector('#weather div:last-child');
    city.innerText = `도시 : ${data.name}`;
    weather.innerText = `현재 날씨 : ${data.weather[0].main} / 온도 : ${data.main.temp}`;
  })
}

function onGeoError() {
  alert("Can't find you. No whater for you.")
}

navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError);