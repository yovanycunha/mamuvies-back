const mongoose = require('mongoose');

const WatchlistSchema = new mongoose.Schema({

    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },

    movies: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Movie",
            required: true,
        }
    ],

});

const Watchlist = mongoose.model("Watchlist", WatchlistSchema);
module.exports = Watchlist;