const data = {
  "city": {
    "id": 6167865,
    "name": "Toronto",
    "coord": {"lon": -79.3873, "lat": 43.654},
    "country": "CA",
    "population": 4612191
  },
  "cod": "200",
  "message": 0.4429501,
  "cnt": 7,
  "list": [{
    "dt": 1539190800,
    "temp": {"day": 24.68, "min": 19.76, "max": 24.68, "night": 19.76, "eve": 21.45, "morn": 22.2},
    "pressure": 1006.78,
    "humidity": 88,
    "weather": [{"id": 802, "main": "Clouds", "description": "scattered clouds", "icon": "03d"}],
    "speed": 4.81,
    "deg": 201,
    "clouds": 36
  }, {
    "dt": 1539277200,
    "temp": {"day": 18.4, "min": 12.24, "max": 19.43, "night": 12.24, "eve": 13.71, "morn": 19.31},
    "pressure": 997.68,
    "humidity": 83,
    "weather": [{"id": 501, "main": "Rain", "description": "moderate rain", "icon": "10d"}],
    "speed": 7.06,
    "deg": 248,
    "clouds": 44,
    "rain": 3.09
  }, {
    "dt": 1539363600,
    "temp": {"day": 11.3, "min": 7.6, "max": 11.3, "night": 7.6, "eve": 9.18, "morn": 8.94},
    "pressure": 1001.79,
    "humidity": 81,
    "weather": [{"id": 500, "main": "Rain", "description": "light rain", "icon": "10d"}],
    "speed": 5.82,
    "deg": 291,
    "clouds": 36,
    "rain": 0.31
  }, {
    "dt": 1539450000,
    "temp": {"day": 10.69, "min": 6.17, "max": 10.69, "night": 6.17, "eve": 8.67, "morn": 6.76},
    "pressure": 1005.27,
    "humidity": 0,
    "weather": [{"id": 500, "main": "Rain", "description": "light rain", "icon": "10d"}],
    "speed": 3.09,
    "deg": 271,
    "clouds": 25,
    "rain": 0.7
  }, {
    "dt": 1539536400,
    "temp": {"day": 12.39, "min": 5.7, "max": 12.39, "night": 6.26, "eve": 10.25, "morn": 5.7},
    "pressure": 1008.56,
    "humidity": 0,
    "weather": [{"id": 500, "main": "Rain", "description": "light rain", "icon": "10d"}],
    "speed": 1.74,
    "deg": 162,
    "clouds": 12,
    "rain": 0.35
  }, {
    "dt": 1539622800,
    "temp": {"day": 13.89, "min": 5.18, "max": 13.89, "night": 7.28, "eve": 11.18, "morn": 5.18},
    "pressure": 1011.59,
    "humidity": 0,
    "weather": [{"id": 500, "main": "Rain", "description": "light rain", "icon": "10d"}],
    "speed": 3.18,
    "deg": 219,
    "clouds": 23,
    "rain": 0.4
  }, {
    "dt": 1539709200,
    "temp": {"day": 14.4, "min": 7.98, "max": 14.4, "night": 7.98, "eve": 13.69, "morn": 8.17},
    "pressure": 998.03,
    "humidity": 0,
    "weather": [{"id": 500, "main": "Rain", "description": "light rain", "icon": "10d"}],
    "speed": 3.93,
    "deg": 183,
    "clouds": 80,
    "rain": 1.72
  }]
};

const getWeatherData = () => {
  let p = new Promise(function(resolve) {
    setTimeout(() => resolve(data), 1800);
  });
  return p;
};

export {
  getWeatherData
}