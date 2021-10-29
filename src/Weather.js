import React from "react";
import axios from "axios";
import Loader from "react-loader-spinner";

export default function Weather(props) {
  function handleResponse(response) {
    alert(`The weather in Hadera is ${response.data.main.temp}C`);
  }
  let apiKey = `a2d283df905dedf8786b96ad24673f92`;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);

  return (
    <div>
      <h2>Hi everyone from {props.city}</h2>
      <Loader type="Puff" color="#00BFFF" height={100} width={100} />
    </div>
  );
}
