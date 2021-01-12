import React, { useEffect } from "react";
import { connect } from "react-redux";
import Preloader from "../Preloader/Preloader";
import SearchFieldContainer from "../SearchField/SearchFieldContainer";
import WeatherCardContainer from "../WeatherCard/WeatherCardContainer";
import { getWeather } from "../../redux/weatherCard-reducer";
import { Row } from "react-bootstrap";

const WeatherCardsContainer = ({
  getWeather,
  isFetching,
  weatherInCurrentCities,
  error
}) => {
  useEffect(() => {
    let cities = localStorage.getItem("currentCity");
    if (cities && !error) {
      cities.split(",").map((city, i, self) => {
        if (self.length > weatherInCurrentCities.length) getWeather(city);
      });
    }
  }, [getWeather, weatherInCurrentCities,error]);
  return (
    <>
      <SearchFieldContainer />
      {isFetching ? <Preloader /> : null}
      <Row>
      {weatherInCurrentCities?weatherInCurrentCities.map((weather, indx) => {
        return (
              <WeatherCardContainer key={indx} weather={weather} />
        );
      }):null}
      </Row>
    </>
  );
};
const mapStateToProps = (state) => ({
  weatherInCurrentCities: state.weatherCard.weatherInCurrentCities,
  isFetching: state.weatherCard.isFetching,
  error: state.weatherCard.error,
});

export default connect(mapStateToProps, { getWeather })(WeatherCardsContainer);
