var { getFeeds } = require('../controller')
var express = require('express');
var router = express.Router();

// Expressjs Routing
router.get('/search-tweets', getFeeds);

// Export router
module.exports = {
    router
};
