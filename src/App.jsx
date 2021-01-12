import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import "./App.css";
import ViewCardContainer from "./components/ViewCard/ViewCardContainer";
import WeatherCardsContainer from "./components/WeatherCardsContainer/WeatherCardsContainer";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";

const App = () => {
  return (
    <div className="app">
      <Container>
        <Switch>
          <Route exact path="/" component={WeatherCardsContainer} />
          <Route path="/view" component={ViewCardContainer} />
          <Redirect to="/" />
        </Switch>
      </Container>
    </div>
  );
};
export default App;
