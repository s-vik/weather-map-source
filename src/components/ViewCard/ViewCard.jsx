import React from "react";
import { Link } from "react-router-dom";
import { Card, ListGroup } from "react-bootstrap";

const ViewCard = ({ viewCity, weatherForViewMode, searchCity }) => {
  if (!weatherForViewMode)
    return (
      <Link to="/" onClick={() => viewCity(false, "")}>
        X
      </Link>
    );
  return (
    <>
      <Link to="/" onClick={() => viewCity(false, "")}>
        X
      </Link>
      <Card>
        <ListGroup variant="flush">
          <ListGroup.Item>
            City: {weatherForViewMode.name}
          </ListGroup.Item>
          <ListGroup.Item>
            Weather: {weatherForViewMode.weather[0].description}
          </ListGroup.Item>
          <ListGroup.Item>
            Temp: {weatherForViewMode.main.temp}
          </ListGroup.Item>
          <ListGroup.Item>
            {weatherForViewMode.main.feels_like}
          </ListGroup.Item>
          <ListGroup.Item>
            Wind: {weatherForViewMode.wind.speed} m/s
          </ListGroup.Item>
          <ListGroup.Item>
            Humidity: {weatherForViewMode.main.humidity} %
          </ListGroup.Item>
          <ListGroup.Item>
          Pressure: {weatherForViewMode.main.pressure} hPa
          </ListGroup.Item>
          <ListGroup.Item>
            Temp max: {weatherForViewMode.main.temp_max}
          </ListGroup.Item>
          <ListGroup.Item>
            Temp min: {weatherForViewMode.main.temp_min}
          </ListGroup.Item>
        </ListGroup>
      </Card>
    </>
  );
};

export default ViewCard;
