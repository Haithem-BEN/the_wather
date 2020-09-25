// msdecsjknvzwgwtoyu@upived.com
// iv2014
// New API Key: c35e40a62ece4c01b1e155923202908
console.log(
    "--------------------------GETWEATHER-------------------------------"
);

const axios = require("axios").default;

const url = "";

const getWeatherData = async (location, callback) => {
    const res = await axios({
        method: "get",
        url: "http://api.weatherapi.com/v1/current.json?lang=ar",
        params: {
            key: "c35e40a62ece4c01b1e155923202908",
            q: location,
        },
    });
    if (callback) callback(res.data);
    return res.data;
};
module.exports = getWeatherData;
