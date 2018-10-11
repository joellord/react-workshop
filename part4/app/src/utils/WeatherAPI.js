import store from "./Store";

const APIKEY = "c95951b6fec7e1a5b79aad4db8eaca2d";
const defaultCity = "London,UK";

const getWeatherData = () => {
  const city = store.getSearchTerm() || defaultCity;
  const url = `https://api.openweathermap.org/data/2.5/forecast/daily?q=${city}&units=metric&cnt=7&appid=${APIKEY}`;

  fetch(url).then(resp => resp.json()).then(data => {
    store.updateGlobalState(data);
  });
};

export {
  getWeatherData
}