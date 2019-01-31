const xhr = new XMLHttpRequest();
let data;
let weatherDesc =document.getElementById("weatherDesc");
let image = document.getElementById("imgWeather");
ready();


function ready() {

    weatherDesc.style.display = "none";
    image.style.display = "none";
    xhr.open('get','data.json',true);
    xhr.onload = function () {
        let json = xhr.responseText;
        data = JSON.parse(json);

        populateCities(data)

    }
    xhr.send();
}

function populateCities(data) {

    data.forEach(function (element,index) {
        document.getElementById("cities").innerHTML += `<button onclick="displayWeather(${element.id})" class="dropdown-item">${element.name}</button>`;
    })
}

function displayWeather(id) {
    weatherDesc.style.display = "block";
    image.style.display = "block";
    let city;

    data.forEach(function (element) {
        if(element.id==id)
        {
            city = element;
            return;
        }

    })

    document.getElementById("cityName").innerText = city.name;

    weatherDesc.style.display = "block";
    if(city.weather_value > 20 )
    {
        weatherDesc.innerHTML = `<p>Sunny</p><br><p>${city.weather_value}C°</p>`;
        image.src = "normal.png";
    }
    else
    if (city.weather_value < 20 && city.weather_value >15)
    {
        weatherDesc.innerHTML = `<p>Cloudy</p><br><p>${city.weather_value}C°</p>`;
        image.src = "darkCloud.png";
    }

    else
    {
        weatherDesc.innerHTML = `<p>Rain</p><br><p>${city.weather_value}C°</p>`;
        image.src = "rain.png";

    }



}