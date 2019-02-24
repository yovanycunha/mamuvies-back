const mongoose = require('mongoose');
const response = require('../../util/responses');
const Movie = require('./movie.model');

const movieService = ( () => {
    const _saveMovie = async (movie, callback) => {
        try {
            const newMovie = await Movie.create(movie);

            return callback(response.ok('Filme ' + movie.title + ' criado com sucesso'));
        } catch (err) {
            return callback(response.badRequest(err.message));
        }
    }

    const _getAllMovies = async function (callback) {
        Movie.find({}, function (err, movies) {
            if (err) {
                callback(
                    response.notFound('Não foi possível recuperar filmes.')
                );
            } else {
                callback(response.ok("", movies));
            }
        });
    };

    return {
        saveMovie: _saveMovie,
        getAllMovies: _getAllMovies,
    }
}

)();

module.exports = movieService;