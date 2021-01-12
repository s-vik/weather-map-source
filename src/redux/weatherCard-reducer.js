import { weatherAPI } from "../api/api";

const SET_CURRENT_CITY = "weather_card_SET_CURRENT_CITY";
const SET_CURRENT_CITY_WEATHER = "weather_card_SET_CURRENT_CITY_WEATHER";
const SET_IS_FETCHING = "weather_card_SET_IS_FETCHING";
const UPDATE_WEATHER_CARD = "weather_card_UPDATE_WEATHER_CARD";
const DELETE_WEATHER_CARD = "weather_card_DELETE_WEATHER_CARD";
const TOGGLE_VIEW_MODE = "weather_card_TOGGLE_VIEW_MODE";
const SET_VIEW_CITY = "weather_card_SET_VIEW_CITY";
const SET_WEATHER_FOR_VIEW_MODE = "weather_card_SET_WEATHER_FOR_VIEW_MODE";
const SET_ERROR = "weather_card_SET_ERROR";

let initialState = {
  currentCity: [],
  weatherInCurrentCities: [],
  isFetching: false,
  viewMode: false,
  viewCityName: "",
  weatherForViewMode: null,
  error: "",
};

const weatherCardReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENT_CITY:
      return {
        ...state,
        currentCity: [...state.currentCity, action.city],
      };
    case SET_CURRENT_CITY_WEATHER:
      return {
        ...state,
        weatherInCurrentCities: [
          ...state.weatherInCurrentCities,
          action.weather,
        ],
      };
    case UPDATE_WEATHER_CARD:
      return {
        ...state,
        weatherInCurrentCities: [
          ...state.weatherInCurrentCities.map((el) => {
            if (el.id === action.id) {
              return { ...action.weather };
            }
            return el;
          }),
        ],
      };
    case SET_IS_FETCHING:
      return {
        ...state,
        isFetching: action.isFetching,
      };
    case DELETE_WEATHER_CARD:
      return {
        ...state,
        weatherInCurrentCities: [
          ...state.weatherInCurrentCities.filter(({ id }) => id !== action.id),
        ],
      };
    case TOGGLE_VIEW_MODE:
      return {
        ...state,
        viewMode: action.viewMode,
      };
    case SET_VIEW_CITY:
      return {
        ...state,
        viewCityName: action.viewCityName,
      };
    case SET_WEATHER_FOR_VIEW_MODE:
      return {
        ...state,
        weatherForViewMode: action.weatherForViewMode,
      };
    case SET_ERROR:
      return {
        ...state,
        error: action.error,
      };
    default:
      return state;
  }
};

export const setCurrentCity = (city) => ({
  type: SET_CURRENT_CITY,
  city,
});
export const setWeatherInCurrentCities = (weather) => ({
  type: SET_CURRENT_CITY_WEATHER,
  weather,
});
export const updateWeatherCard = (id, weather) => ({
  type: UPDATE_WEATHER_CARD,
  id,
  weather,
});
export const deleteWeatherCard = (id) => ({
  type: DELETE_WEATHER_CARD,
  id,
});
export const setIsFetching = (isFetching) => ({
  type: SET_IS_FETCHING,
  isFetching,
});
export const toggleViewMode = (viewMode) => ({
  type: TOGGLE_VIEW_MODE,
  viewMode,
});
export const setViewCity = (viewCityName) => ({
  type: SET_VIEW_CITY,
  viewCityName,
});
export const setWeatherForViewMode = (weatherForViewMode) => ({
  type: SET_WEATHER_FOR_VIEW_MODE,
  weatherForViewMode,
});
export const setError = (error) => ({
  type: SET_ERROR,
  error,
});

export const getWeatherForViewMode = (city) => {
  return async (dispatch) => {
    dispatch(setIsFetching(true));
    let {
      statusText,
      data: { weather, wind, main, id,name },
    } = await weatherAPI.getWeatherUseCityName(city);
    if (statusText === "OK") {
      dispatch(setWeatherForViewMode({ weather, wind, main, id,name }));
    }
    dispatch(setIsFetching(false));
  };
};

export const viewCity = (viewMode, viewCity) => {
  return (dispatch) => {
    dispatch(toggleViewMode(viewMode));
    dispatch(setViewCity(viewCity));
  };
};

export const deleteCard = (id, city) => {
  return (dispatch) => {
    dispatch(deleteWeatherCard(id));
    let currentCity = localStorage
      .getItem("currentCity")
      .split(",")
      .filter((el) => el !== city)
      .join();
    localStorage.setItem("currentCity", currentCity);
  };
};

export const updateWeather = (city) => {
  return async (dispatch) => {
    let {
      statusText,
      data: { weather, wind, main, id },
    } = await weatherAPI.getWeatherUseCityName(city);
    if (statusText === "OK") {
      dispatch(updateWeatherCard(id, { weather, wind, main, city, id }));
    }
  };
};

export const getWeather = (city) => {
  return async (dispatch) => {
    dispatch(setIsFetching(true));
    let {
      statusText,
      data: { weather, wind, main, id },
    } = await weatherAPI
      .getWeatherUseCityName(city)
      .catch((e) => dispatch(setError("error - no data")));
    if (statusText === "OK") {
      dispatch(setCurrentCity(city));
      dispatch(setWeatherInCurrentCities({ weather, wind, main, city, id }));
      dispatch(setIsFetching(false));
    } else {
      dispatch(setError("error - no data"));
    }
  };
};
export default weatherCardReducer;
