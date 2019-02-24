const userController = require('../src/user/user.controller');


module.exports = (app) => {
    app.use("/api/users", userController);
};