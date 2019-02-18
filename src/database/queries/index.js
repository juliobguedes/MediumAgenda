import { GraphQLObjectType } from 'graphql';
import movie from './movie';
import director from './director';

const queryType = new GraphQLObjectType({
    name: 'Query',
    fields: {
        movie,
        director,
    },
});

export default queryType;
