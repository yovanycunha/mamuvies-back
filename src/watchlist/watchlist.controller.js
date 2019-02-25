const express = require('express');
const router = express.Router();
const watchlistService = require('./watchlist.service');

router.get('/', (req, res)=> {
    watchlistService.getAllWatchlists((response)=> {
        res.status(response.status).send(response);
    });
});

router.post('/', (req, res)=> {
    watchlistService.saveWatchlist(req.body, (response) => {
        res.status(response.status).send(response)
    });
});


router.delete('/:watchlistId', (req, res) => {
    watchlistService.removeWatchlist(req.params.watchlistId, (response) => {
        res.status(response.status).send(response);
    });
});


router.put('/:watchlistId', (req, res) => {
    watchlistService.updateWatchlist(req.params.watchlistId,req.body, (response) => {
        res.status(response.status).send(response);
    });
});


module.exports = router;