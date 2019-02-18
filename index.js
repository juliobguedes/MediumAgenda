import express from 'express';
import graphqlHttp from 'express-graphql';
import { GraphQLSchema } from 'graphql';
import queryType from './src/database/queries/';

const port = 9000;
const app = express();

app.get('/hello', (req, res) => {
    res.send('hello');
});

const schema = new GraphQLSchema({ query: queryType });

app.use('/graphql', graphqlHttp({
    schema: schema,
    graphiql: true,
}));

app.listen(port);
console.log(`GraphQL server running at localhost:${port}`);
