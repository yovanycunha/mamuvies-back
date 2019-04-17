const response = require('../../util/responses');
const Movie = require('./movie.model');
const api = require('./../apiwrapper/wrapper');

const movieService = ( () => {
    const _saveMovie = async (movie, callback) => {
        try {
            const newMovie = await Movie.create(movie);

            return callback(response.ok('Filme ' + movie.title + ' criado com sucesso'));
        } catch (err) {
            return callback(response.badRequest(err.message));
        }
    }

   

    const _getAllMovies = async  (callback) => {        
        Movie.find({},  (err, movies) => {
            if (err) {
                callback(
                    response.notFound('Não foi possível recuperar filmes.')
                );
            } else {
                callback(response.ok("", movies));
            }
        });
    };

    const _removeMovie = async  (movieId, callback) => {
        try {
            await Movie.findByIdAndRemove(movieId, (err, movie) => {
                if(!movie) {
                    return callback(
                        response.notFound('Não foi possível encontrar filme')
                    );
                }

                return callback(
                    response.ok('Filme removido com sucesso', movie)
                );
            })
        } catch (err) {
            callback(response.notFound('Remoção do filme mal sucedida'));
        }
    };

    const _updateMovie = async (movieId,updatedInfo, callback) => {
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