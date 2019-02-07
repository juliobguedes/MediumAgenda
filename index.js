import express from 'express';

const port = 9000;
const app = express();

app.get('/hello', () => {

});

app.listen(port);
console.log(`Server running at localhost:${port}`);
