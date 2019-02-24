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

    const _removeMovie = async function (movieId, callback) {
        try {
            const movie = await Movie.findOneAndRemove(
                mongoose.Types.ObjectId(movieId)
            );

            if (!movie) {
                return callback(
                    response.notFound('Não foi possível encontrar filme')
                );
            }

            return callback(
                response.ok('Usuário removido.')
            );
        } catch (err) {
            response.notFound('Remoção do usuário mal sucedida');
        }
    };

    const _updateMovie = async function (movieId,updatedInfo, callback) {
        try {
            await Movie.findByIdAndUpdate(movieId, updatedInfo, function (err, movie) {
                if (err) {
                    return callback(
                        response.badRequest('Erro na atualização')
                    );
                }
                return callback(
                    response.ok('', movie)
                );
            });
        } catch (err) {
            callback(response.badRequest('Erro na atualização'))
        }
    }

    return {
        saveMovie: _saveMovie,
        getAllMovies: _getAllMovies,
        removeMovie: _removeMovie,
        updateMovie: _updateMovie,
    }
}

)();

module.exports = movieService;