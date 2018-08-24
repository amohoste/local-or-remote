const url = require('url');
const fs = require('fs-extra');
const request = require('request-promise-native');

module.exports = function loadfile(path) {
    return new Promise((resolve, reject) => {

        if (path.startsWith('http') || path.startsWith('https')) {
            let download_url = url.parse(path);
            if (!download_url) {
                reject(`Url ${download_url.href} isn't a valid url`);
            } else {
                const options = {
                    url: download_url.href,
                    headers: {
                        'User-Agent': 'request'
                    }
                };
                return request(options).then(body => {
                   resolve(body);
                }).catch((error) => {
                    reject(`Can't resolve url ${download_url.href}`);
                })
            }
        } else {
            if (!fs.existsSync(path)) {
                reject(`File ${path} does not exist`);
            } else {
                resolve(fs.readFileSync(path, 'utf8'));
            }
        }
    });
};