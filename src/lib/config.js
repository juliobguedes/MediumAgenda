const mongoose = require('mongoose');
import keys from '../config';
const { MONGO_URL } = keys;

const ERR = 1;

const db = mongoose.createConnection(MONGO_URL, { useNewUrlParser: true });

db.on('error', error => {
    console.error(error);
    process.exit(ERR);
});

db.once('open', () => {
    db.createCollection('Medium');
});

export default db;
