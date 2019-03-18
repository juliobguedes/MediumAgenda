import express from 'express';
import graphqlHttp from 'express-graphql';
import { GraphQLSchema } from 'graphql';
import keys from './src/config';
import {
    queries, mutations,
} from './src/types';
const { PORT } = keys;
import medium from './src/medium';

const app = express();
const schema = new GraphQLSchema({ query: queries, mutation: mutations });

app.use(express.json());

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', 'http://localhost:8080');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

app.use('/graphql', graphqlHttp({
    schema: schema,
    graphiql: true,
}));

app.get('/hello', (req, res) => {
    res.send('hello');
});

app.listen(PORT);
console.log(`GraphQL server running at localhost:${PORT}`);
