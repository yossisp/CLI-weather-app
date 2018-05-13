const request = require("request");
const URL = "http://ipinfo.io";

module.exports = () => {
    return new Promise(( (resolve, reject) => {
        request({
            url: URL,
            json: true
        }, (error, response, body) => {
            if(error) {
                reject("Error from " + URL);
            } else {
                resolve(body.city);
            }
        });
    }));
};
