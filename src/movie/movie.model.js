const mongoose = require('mongoose');

const MovieSchema = new mongoose.Schema({

    title: {
        type : String,
        required: true,
    },

    year: {
        type : String,
        required: true,
    },

    runtime: {
        type: String,
        required: true,
    },

    director: {
        type: String,
        required: true,
    },

    imdbID: {
        type: String,
        required: true,
    },

});

const Movie = mongoose.model("Movie", MovieSchema);
module.exports = Movie;