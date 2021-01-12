import * as axios from "axios";

const instance = axios.create({
  baseURL: "https://api.openweathermap.org/data/2.5/",
});

export const weatherAPI = {
  async getWeatherUseCityName(city) {
    return await instance
      .get(
        `weather?q=${city}&appid=28a565b6358bc0568063e6d2db733151&lang=ru&mode=json&units=metric`
      )
      .catch((e) => console.error(e));
  },
};
