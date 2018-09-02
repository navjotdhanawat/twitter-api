var { getFeeds, tweet } = require('../controller')
var express = require('express');
var router = express.Router();

// Expressjs Routing
router.get('/search-tweets/:lastId/:geocode', getFeeds);

router.post('/tweet', tweet);

// Export router
module.exports = {
    router
};
