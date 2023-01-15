import React from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";
import "./Weather.css";

export default function Weather() {
  let apiKey = "2acfad573be44e3b6850ce49fb547535";
  let units = "metric";
  let url = `https://api.openweathermap.org/data/2.5/weather?q=London&appid=${apiKey}&units=${units}`;

  axios.get(url).then(Weather);

  let weatherData = {
    city: "New York",
    temperature: 19,
    date: "Tuesday 10:00",
    description: "Cloudy",
    imgUrl: "https://ssl.gstatic.com/onebox/weather/64/sunny.png",
    humidity: 80,
    wind: 10,
  };

  return (
    <div className="Weather">
      <form className="mb-3">
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Type a city.."
              className="form-control"
              autoComplete="off"
            />
          </div>
          <div className="col-3">
            <input
              type="submit"
              value="Search"
              className="btn btn-primary w-100"
            />
          </div>
        </div>
      </form>
      <div className="overview">
        <h1>{weatherData.city}</h1>
        <ul>
          <li>Last updated: {weatherData.date}</li>
          <li>{weatherData.description}</li>
        </ul>
      </div>
      <div className="row">
        <div className="col-6">
          <div className="clearfix weather-temperature">
            <img
              src={weatherData.imgUrl}
              alt={weatherData.description}
              className="float-left"
            />
            <div className="float-left">
              <strong>{weatherData.temperature}</strong>
              <span className="units">
                <a href="/">°C</a> | <a href="/">°F</a>
              </span>
            </div>
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>Humidity: {weatherData.humidity}%</li>
            <li>Wind: {weatherData.wind} km/h</li>
          </ul>
        </div>
      </div>

      <br />
      <p className="author">
        This project was coded by{" "}
        <a
          href="https://magnificent-gnome-8f36bc.netlify.app"
          target="_blank"
          rel="noreferrer"
        >
          Alla Radkevych
        </a>{" "}
        and is{" "}
        <a
          href="https://github.com/Yeseniya07/weather_React"
          target="_blank"
          rel="noreferrer"
        >
          open-sourced on GitHub
        </a>
      </p>
    </div>
  );
}
