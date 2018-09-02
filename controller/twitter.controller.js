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
    var lastId = req.params.lastId;
    var params = { q: 'youtu.be #nowplaying', count: 10 }
    T.get('search/tweets', params, function (err, tweets, response) {
        res.json({ status: true, tweets });
    })
}

module.exports = {
    getFeeds
}