import React, { useEffect } from "react";
import "./App.css";
import App from "./App";
import { connect } from "react-redux";

const AppContainer = ({ currentCity }: any) => {
  useEffect(() => {
    if (currentCity.length) {
      localStorage.setItem("currentCity", currentCity);
    }
  }, [currentCity]);
  return <App />;
};

const mapStateToProps = (state: any) => ({
  currentCity: state.weatherCard.currentCity,
});

export default connect(mapStateToProps)(AppContainer);
