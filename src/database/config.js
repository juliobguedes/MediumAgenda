const mongoose = require('mongoose');
const dbUrl = 'mongodb://localhost/test_medium';
const ERR = 1;

const db = mongoose.createConnection(dbUrl, { useNewUrlParser: true });

db.on('error', error => {
    console.error(error);
    process.exit(ERR);
});

db.once('open', () => {
    db.createCollection('Medium');
});

export default db;
