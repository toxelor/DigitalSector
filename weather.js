const options = {
    enableHighAccuracy: true,
    maximumAge: 30000,
    timeout: 27000,
};

const forecastWithCoordinates = (position) => {
    let city = ""
    let temperature = 0
    let icon = ""
    fetch(`http://api.weatherstack.com/current?access_key=86ddd28ca1b30d2d2a18560f18dd53d8&query=${position.coords.latitude},${position.coords.longitude}`, {
        referrerPolicy: "unsafe-url" 
    })
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        city = data.location.name
        temperature = data.current.temperature
        icon = data.current.weather_icons[0]
        updateWeather(city, temperature, icon)
    })

}

const forecastStandart = () => {
    let city = ""
    let temperature = 0
    let icon = ""
    fetch(`http://api.weatherstack.com/current?access_key=86ddd28ca1b30d2d2a18560f18dd53d8&query=Krasnodar`, {
        referrerPolicy: "unsafe-url" 
    })
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        city = data.location.name
        temperature = data.current.temperature
        icon = data.current.weather_icons[0]
        updateWeather(city, temperature, icon)
    })
}

const updateWeather = (city, temperature, icon) => {
    const temperatureNode = document.querySelector("#temperature")
    const cityNode = document.querySelector("#city")
    const iconNode = document.querySelector("#weather_icon")
    temperatureNode.innerHTML = temperature + "°"
    cityNode.innerHTML = city
    iconNode.src = icon
}

if (!navigator.geolocation) {
    forecastStandart()
  } else {
    navigator.geolocation.getCurrentPosition(forecastWithCoordinates, forecastStandart, options);
  }
