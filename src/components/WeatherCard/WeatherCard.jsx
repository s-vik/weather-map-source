import React from "react";
import { useHistory } from "react-router-dom";
import { Card,ListGroup,Button,Col } from "react-bootstrap";

const WeatherCard = ({
  weather: { main, weather, city, id },
  updateWeather,
  deleteCard,
  viewCity,
}) => {
  let history = useHistory();
  const handleViewCity = () => {
    history.push(`/view/?${city}`);
    viewCity(true, city);
  };
  return (
    <Col>
    <div style={{ width: '18rem',marginTop:'25px' }} className="weather_card">
<Card >
  <ListGroup onClick={() => handleViewCity()} variant="flush">
    <ListGroup.Item style={{cursor:'pointer'}} >City: {city}</ListGroup.Item>
    <ListGroup.Item style={{cursor:'pointer'}} >Weather: {weather[0].description}</ListGroup.Item>
    <ListGroup.Item style={{cursor:'pointer'}} >Temp: {main.temp}</ListGroup.Item>
    <ListGroup.Item style={{cursor:'pointer'}} >Feels like: {main.feels_like}</ListGroup.Item>
  </ListGroup>
<div style={{display:'flex',justifyContent:'space-between'}}>
<Button variant="secondary" onClick={() => updateWeather(city)} >Refresh</Button>
<Button variant="secondary" onClick={() => deleteCard(id, city)} >Delete</Button>
</div>
</Card>
    </div>
</Col>
  );
};
export default WeatherCard;