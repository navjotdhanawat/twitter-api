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

// to fetch tweets 
function getFeeds(req, res) {
    var max_id = req.params.lastId;
    var geocode = req.params.geocode;
    var params = { q: 'youtu.be #nowplaying', count: 5, max_id }
    console.log(params)
    T.get('search/tweets', params, function (err, tweets, response) {
        res.json({ status: true, tweets });
    })
}

// to post tweet
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