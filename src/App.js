import React from "react";
import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="New York" />

        <footer className="author">
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
        </footer>
      </div>
    </div>
  );
}

export default App;
