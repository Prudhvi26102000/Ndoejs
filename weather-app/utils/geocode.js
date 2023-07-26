const request = require("request");
const geocode = (address, callback) => {
  const url = `http://api.positionstack.com/v1/forward?access_key=bfbb84a18313b357d941504e7da7e2c0&query=${encodeURIComponent(
    address
  )}&limit=1`;
  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("Unable to connect to Location sevices!", undefined);
    } else if (body.error) {
      callback("Unable to find location.Try another search.", undefined);
    } else {
      const map = new Map();
      body.data.map((d) => {
        map.set("latitude", d.latitude);
        map.set("longitude", d.longitude);
        map.set("region", d.region);
      }),
        callback(undefined, {
          latitude: map.get("latitude"),
          longitude: map.get("longitude"),
          region: map.get("region"),
        });
    }
  });
};

module.exports = geocode;
