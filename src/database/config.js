const mongoose = require('mongoose');
import { MONGO_URL } from '../config';
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
