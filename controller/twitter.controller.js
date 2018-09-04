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

    var lat = 37.7749; // San fransisco location 
    var long = 122.4194;
    var geocode = lat+','+long+','+'1000mi';
    var params = { q: 'youtu.be #nowplaying', count: 5, max_id, geocode }

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