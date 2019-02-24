const express = require('express');
const router = express.Router();
const movieService = require('./movie.service');

router.post('/', (req, res)=> {
    movieService.saveMovie(req.body, (response) => {
        res.status(response.status).send(response)
    });
});


router.get('/', (req, res) => {
    movieService.getAllMovies((response) => {
        res.status(response.status).send(response);
    });
});

module.exports = router;