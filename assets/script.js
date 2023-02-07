let weather = {
   apiKey: "8ab1c5b93b47acfbdea3fa70254bc320",
   fetchWeather: function (city) {
     fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=London&units=metricuk&APPID=8ab1c5b93b47acfbdea3fa70254bc320" 
    ).then((response) => response.json())
     .then((data) => console.log(data));
  }, 
};

   /*

    const { name } = data;
    const { icon, description } = data.weather[0];
    const { temp, humidity } = data.maine;
    const { speed } = data.wind;
    console.log(name,icon,description,temp,humidity,speed)
    document.querySelector(".city").innerText = "Weather in" + name;
    document.querySelector(".icon").src = "https://openweathermap.org/img/wn/"+ icon +"01n@2x.png"
    document.querySelector(".description").innerText = description;
    document.querySelector(".temp").innerText = temp + "°C";
    document.querySelector(".humidity").innerText = "Wind speed: " + "Humidity: " + humidity + "%";
    document.querySelector(".wind").innerText = 
       "Wind speed: " + speed + " km/h";
    document.querySelector(".weather").classList.remove("loading");
    document.body.style.backgroundImage = "url("GET /photos/random" + name + "')"
  }
  search: function () {
    this.fetchWeather(document.querySelector(".search-bar").value);
  }
};

document
   .querySelector(".search button")
   .addEventListener("click", function () {
      weather.search();
});

document.querySelector(".search-bar").addEventListener("keyup", function (event) {
  if (event.key == "Enter") 
    weather.search();
  });

weather.fetchWeather("Denver");
})