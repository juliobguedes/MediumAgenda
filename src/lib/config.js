const mongoose = require('mongoose');
import keys from '../config';
const { MONGO_URL, LOCAL_MONGO_URL } = keys;

const ERR = 1;
const url = MONGO_URL || LOCAL_MONGO_URL;

const db = mongoose.createConnection(url, { useNewUrlParser: true });

db.on('error', error => {
    console.error(error);
    process.exit(ERR);
});

db.once('open', () => {
    db.createCollection('Medium');
});

export default db;
