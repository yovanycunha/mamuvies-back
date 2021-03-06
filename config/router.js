const userController = require('../src/user/user.controller');
const movieController = require('../src/movie/movie.controller');
const watchlistController = require('../src/watchlist/watchlist.controller');
const getMoviesAndSeries = require('../src/middleware/getMoviesAndSeries');


module.exports = (app) => {
    app.use("/api/users", userController);
    app.use("/api/movies", movieController);
    app.use("/api/watchlists", watchlistController);
    app.use("/api/omdb", getMoviesAndSeries);
};

