var Twit = require('twit')

var T = new Twit({
    consumer_key: '',
    consumer_secret: '',
    access_token: '',
    access_token_secret: '',
    timeout_ms: 60*1000,  // optional HTTP request timeout to apply to all request.
    strictSSL: true    
});

T.get('search/tweets', { q: 'youtu.be #nowplaying', count: 500 }, function(err, data, response) {
    console.log(data)
    // T.get('search/tweets', { q: '#nowplaying', count: 5, last_id: '1035966689534455800' }, function(err, data, response) {
    //     console.log(data)
    // })
})