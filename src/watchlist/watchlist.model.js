const mongoose = require('mongoose');

const WatchlistSchema = new mongoose.Schema({

    name : {
        type: String,
        default:"",
        required: false,
    },

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