var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?q=';
const OPEN_WEATHER_MAP_PARAMETERS = '&appid=f5c696a6e22237cf1c5dd448ca49ed17&units=metric';

module.exports = {
    getTemp: function(location) {

        // f5c696a6e22237cf1c5dd448ca49ed17
        var encodedLocation = encodeURI(location);
        var requestUrl = `${OPEN_WEATHER_MAP_URL}${encodedLocation}${OPEN_WEATHER_MAP_PARAMETERS}`;
        console.log(requestUrl);
        return axios.get(requestUrl).then(function(res) {
            if (res.data.cod && res.data.message) {
                throw new Error(res.data.message);
            } else {
                return res.data.main.temp;
            }
        }, function(res) {
            throw new Error(res.data.message);
        });
    }
}