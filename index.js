var Twit = require('twit')
var config = require('./config')

var T = new Twit({
    consumer_key: config.consumer_key,
    consumer_secret: config.consumer_secret,
    access_token: config.access_token,
    access_token_secret: config.access_token_secret,
    timeout_ms: config.timeout_ms,
    strictSSL: config.strictSSL
});

T.get('search/tweets', { q: 'youtu.be #nowplaying', count: 500 }, function (err, data, response) {
    console.log(data)
    // T.get('search/tweets', { q: '#nowplaying', count: 5, last_id: '1035966689534455800' }, function(err, data, response) {
    //     console.log(data)
    // })
})