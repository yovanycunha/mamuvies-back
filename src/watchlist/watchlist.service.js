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

    return {
        getAllWatchlists: _getAllWatchlists,
    }

})();

module.exports = watchlistService;