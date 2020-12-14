const db = require('mongoose');

const app = require('./app');
const config = require('./config.js');

db.Promise = global.Promise;

async function connect(url) {
    await db.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
    })
    console.log('[db] Conectada con exito!');
};

app.listen(config.api.port, () => {
    console.log('Api listening at port: ', config.api.port);
    connect(config.db.uri);
});


module.exports = connect;