if ("geolocation" in navigator){
    navigator.geolocation.getCurrentPosition((position) => {
        forecastWithCoordinates(position.coords.latitude, position.coords.longitude);
    });
} else {
    forecastStandart()
}

const forecastWithCoordinates = (latitude, longitude) => {
    let city = ""
    let temperature = 0
    let icon = ""
    fetch(`http://api.weatherstack.com/current?access_key=86ddd28ca1b30d2d2a18560f18dd53d8&query=${latitude},${longitude}`, {
        referrerPolicy: "unsafe-url" 
    })
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        city = data.location.name
        temperature = data.current.temperature
        icon = data.current.weather_icons[0]
    })
    .then(() => {
        console.log(city, temperature, icon)
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
    })
    .then(() => {
        console.log(city, temperature, icon)
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