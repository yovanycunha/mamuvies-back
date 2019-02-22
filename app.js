const app = require('./config/express')();
const db = require('./config/mongoose')();

require('./config/router')(app);

app.listen(app.get('port'), () => {
    console.log(
        'Mamuvies back end listening on port ' + app.settings.port 
    );
    
});