const userController = require('../src/user/user.controller');
const movieController = require('../src/movie/movie.controller');

module.exports = (app) => {
    app.use("/api/users", userController);
    app.use("/api/movies", movieController);
};