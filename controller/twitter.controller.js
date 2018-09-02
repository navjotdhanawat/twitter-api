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
    var next = req.params.lastId;
    console.log(next)
    var params = { q: '#nowplaying ', maxResults: 5, next }
    T.get('search/tweets', params, function (err, tweets, response) {
        res.json({ status: true, tweets });
    })
}

function tweet(req, res) {
    var status = req.body.status;
    console.log(status)

    T.post('statuses/update', { status }, function(err, data, response) {
        res.json({ status: true, data });
    })
}

module.exports = {
    getFeeds,
    tweet
}