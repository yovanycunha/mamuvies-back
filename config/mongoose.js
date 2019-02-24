const mongoose = require('mongoose');
mongoose.set('useFindAndModify', false);

module.exports = function () {
    mongoose.connect('mongodb://localhost:27017/mamuvies-db', { useNewUrlParser: true });
    mongoose.Promise = global.Promise;

    const db = mongoose.connection;

    db.on('connected', function () {
        console.log("Banco de Dados conectado");
    });

    db.on('disconnected', function () {
        console.log("Banco de Dados desconectado");
    });

    db.on('err', function (err) {
        console.log("Erro na conexão do Banco de Dados: " + err);
    });
}