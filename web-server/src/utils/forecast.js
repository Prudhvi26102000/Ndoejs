const request = require("request");
const forecast = (latitude, longitude, callback) => {
  const url = `http://api.weatherstack.com/current?access_key=91ad23f99533b197802f9ff1968a3caf&query=${latitude} ${longitude}`;

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("Unable to connect to weather service!", undefined);
    } else if (body.error) {
      callback("Unable to find location.Try another search.", undefined);
    } else {
      callback(
        undefined,
        `${body.current.weather_descriptions[0]}.It is currently ${body.current.temperature} degrees out.There is a ${body.current.precip}% chance of rain`
      );
    }
  });
};

module.exports = forecast;
