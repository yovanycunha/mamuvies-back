const mongoose = require('mongoose');
const response = require('../../util/responses');
const Watchlist = require('./watchlist.model');

const watchlistService = (()=> {

    const _getAllWatchlists = async (callback) => {
        Watchlist.find({}, (err, watchlists) => {
            if (err) {
                callback(
                    response.notFound('Não foi possível recuperar watchlists.')
                );
            } else {
                callback(response.ok("", watchlists));
            }
        });
    };

    const _saveWatchlist = async (watchlist, callback) => {
        try {
            const newWatchlist = await Watchlist.create(watchlist);

            return callback(response.ok('Watchlist criada com sucesso'));
        } catch (err) {
            return callback(response.badRequest(err.message));
        }
    };

    const _removeWatchlist = async (watchlistId, callback) => {
        try {
            await Watchlist.findByIdAndRemove(watchlistId, (err, watchlist) => {
                if(!watchlist) {
                    return callback(
                        response.notFound('Não foi possível encontrar watchlist')
                    );
                }

                return callback(
                    response.ok('Watchlist removida com sucesso', watchlist)
                );
            })
        } catch (err) {
            callback(response.notFound('Remoção da watchlist mal sucedida'));
        }
    }

    const _updateWatchlist = async function (watchlistId,updatedInfo, callback) {
        try {
            await Watchlist.findByIdAndUpdate(watchlistId, updatedInfo, function (err, watchlist) {
                if (err) {
                    return callback(
                        response.badRequest('Erro na atualização')
                    );
                }
                return callback(
                    response.ok('', watchlist)
                );
            });
        } catch (err) {
            callback(response.badRequest('Erro na atualização'))
        }
    }

    return {
        getAllWatchlists: _getAllWatchlists,
        saveWatchlist: _saveWatchlist,
        removeWatchlist: _removeWatchlist,
        updateWatchlist: _updateWatchlist,
        
    }

})();

module.exports = watchlistService;