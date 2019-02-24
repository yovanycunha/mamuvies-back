const express = require('express');
const router = express.Router();
const watchlistService = require('./watchlist.service');

router.get('/', (req, res)=> {
    watchlistService.getAllWatchlists((response)=> {
        res.status(response.status).send(response);
    });
});


module.exports = router;