/**
 * Controller will contains all twitter api related functions
 */

var Twit = require('twit')
var config = require('../config')
var T = new Twit({
    consumer_key: config.consumer_key,
    consumer_secret: config.consumer_secret,
    access_token: config.access_token,
    access_token_secret: config.access_token_secret,
    timeout_ms: config.timeout_ms,
    strictSSL: config.strictSSL
});

function getFeeds(req, res) {
    T.get('search/tweets', { q: 'youtu.be #nowplaying', count: 500 }, function (err, data, response) {
        res.json({ status: true, data });
    })
}

module.exports = {
    getFeeds
}