const weather = require("./weather.js");
const location = require("./location.js");

const argv = require("yargs")
    .options({
        location: {
            demand: false,
            alias: 'l',
            description: 'Your city',
            type: 'string'
        }
    }).help('help').argv;

if(typeof argv.location === "string" && argv.location.length > 0) {
    weather(argv.location)
        .then(data => console.log(data))
        .catch(error => console.log(error));
} else {
    location()
        .then(loc => {
            return weather(loc);
        })
        .then(weather => console.log(weather))
        .catch(error => console.log(error));
}







