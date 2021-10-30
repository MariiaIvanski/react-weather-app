import React, { useState } from "react";
import axios from "axios";

export default function WeatherSearch() {
  const [city, setCity] = useState("");
  const [loaded, setLoaded] = useState(false);
  const [weather, setWeather] = useState({});

  function showWeather(response) {
    setLoaded(true);
    setWeather({
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      description: response.data.weather[0].description,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = `39c590036b490e160a1ac1b35a02652d`;
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(url).then(showWeather);
  }

  function changeCity(event) {
    setCity(event.target.value);
  }

  let form = (
    <form
      className="d-flex flex-row bd-highlight mb-3 mt-3"
      onSubmit={handleSubmit}
    >
      <div className="col-auto">
        <input
          type="search"
          placeholder="Enter a city..."
          className="form-control"
          autoComplete="off"
          onChange={changeCity}
        />
      </div>
      <div className="col-auto">
        <input type="submit" value="Search" class="btn btn-primary" />
      </div>
      <div className="col-auto">
        <button type="button" className="btn btn-success mb-3">
          Local ☂
        </button>
      </div>
    </form>
  );

  if (loaded) {
    return (
      <div>
        {form}
        <h2>The weather in {city} is: </h2>
        <ul>
          <li>Temperature: {Math.round(weather.temperature)}°C</li>
          <li>Description: {weather.description}</li>
          <li>Humidity: {weather.humidity}%</li>
          <li>Wind: {weather.wind}km/h</li>
          <li>
            <img src={weather.icon} alt={weather.description} />
          </li>
        </ul>
      </div>
    );
  } else {
    return form;
  }
}
