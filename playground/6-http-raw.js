const http = require("http");
const url = `http://api.weatherstack.com/current?access_key=91ad23f99533b197802f9ff1968a3caf&query=38.898 -77.03645`;

const request = http.request(url, (response) => {
  let data = "";

  response.on("data", (chunk) => {
    data = data + chunk.toString();
  });

  response.on("end", () => {
    const body = JSON.parse(data);
    console.log(body);
  });
});

request.end();
