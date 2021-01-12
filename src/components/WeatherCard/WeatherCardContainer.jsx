import React from "react";
import { connect } from "react-redux";
import WeatherCard from "./WeatherCard";
import {
  updateWeather,
  deleteCard,
  viewCity,
} from "../../redux/weatherCard-reducer";

const WeatherCardContainer = ({
  deleteCard,
  updateWeather,
  weather,
  viewCity,
}) => {
  return (
    <WeatherCard
      deleteCard={deleteCard}
      updateWeather={updateWeather}
      weather={weather}
      viewCity={viewCity}
    />
  );
};

export default connect(null, { updateWeather, deleteCard, viewCity })(
  WeatherCardContainer
);
