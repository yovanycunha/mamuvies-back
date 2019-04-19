const express = require('express');
const router = express.Router();
const movieService = require('./movie.service');
const wrapper = require('../apiMiddleware/apiRequests');


router.post('/', (req, res)=> {
    movieService.saveMovie(req.body, (response) => {
        res.status(response.status).send(response)
    });
});


router.get('/', (req, res) => {
    movieService.getAllMovies((response) => {
        console.log(res);
        
        res.status(response.status).send(response);
    });
});

router.delete('/:movieId', (req, res) => {
    movieService.removeMovie(req.params.movieId, (response) => {
        res.status(response.status).send(response);
    });
});

router.put('/:movieId', (req, res) => {
    movieService.updateMovie(req.params.movieId,req.body, (response) => {
        res.status(response.status).send(response);
    });
});

module.exports = router;