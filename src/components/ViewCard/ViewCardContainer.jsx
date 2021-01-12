import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import ViewCard from "./ViewCard";
import { connect } from "react-redux";
import {
  viewCity,
  getWeatherForViewMode,
} from "../../redux/weatherCard-reducer";

const ViewCardContainer = ({
  getWeatherForViewMode,
  viewCity,
  viewMode,
  weatherForViewMode,
}) => {
  const searchCity = useHistory().location.search.replace("?", "");
  useEffect(() => {
    if (viewMode && searchCity) {
      getWeatherForViewMode(searchCity);
    }
  }, [searchCity, getWeatherForViewMode, viewMode]);
  return (
    <ViewCard
      weatherForViewMode={weatherForViewMode}
      viewCity={viewCity}
      searchCity={searchCity}
    />
  );
};
const mapStateToProps = (state) => ({
  viewMode: state.weatherCard.viewMode,
  weatherForViewMode: state.weatherCard.weatherForViewMode,
});
export default connect(mapStateToProps, {
  viewCity,
  getWeatherForViewMode,
})(ViewCardContainer);
