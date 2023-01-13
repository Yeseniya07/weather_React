import React from "react";
import axios from "axios";

export default function Weather() {
  function handleResponse(response) {
    alert(`is ${response.data.main.temp}`);
  }

  let apiKey = "2acfad573be44e3b6850ce49fb547535";
  let units = "metric";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=London&appid=${apiKey}&units=${units}`;

  axios.get(apiUrl).then(handleResponse);

  return (
    <div>
      <h2>Hello from Weather</h2>
    </div>
  );
}
