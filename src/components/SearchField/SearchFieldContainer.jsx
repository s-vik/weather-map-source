import { connect } from "react-redux";
import React from "react";
import SearchField from "./SearchField";
import { getWeather } from "../../redux/weatherCard-reducer";

const SearchFieldContainer = ({ getWeather}) => {
  return <SearchField getWeather={getWeather} />;
};
export default connect(null, { getWeather })(
  SearchFieldContainer
);
