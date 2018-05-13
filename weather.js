const request = require("request");
let URL = {
    baseURL: 'http://api.openweathermap.org/data/2.5/weather?appid=',
    city: undefined,
    query: '&q=',
    units: '&units=metric',
    apiKey: '506fb8083721c4d6d19b2d6668c58108'
};

function getURL(URL, location) {
    let url = URL.baseURL + URL.apiKey + URL.query +
        encodeURIComponent(location) +
        URL.units;
    return url;
}

module.exports = (location) => {
    return new Promise(((resolve, reject) => {
        if(!location) {
            return reject("No location provided");
        }
        let encodedURL = getURL(URL, location);
        request({
            url: encodedURL,
            json: true
        }, (error, response, body) => {
            if(error) {
                reject("Couldn't fetch the weather.");
            } else {
                resolve("The temperature in " + body.name + " is " + body.main.temp + " Celsius");
            }
        });
    }));
};