import axios from 'axios';

const API_KEY = '416b4357838266c2c8710dfc90e4c185';
const API_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${
  API_KEY
}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(cityName) {
  // Always returns an action with a type and a payload
  const URL = `${API_URL}&q=${cityName},us`;
  console.log(URL);
  const req = axios.get(URL);
  console.log(req);
  return {
    type: FETCH_WEATHER,
    payload: req
  };
}
