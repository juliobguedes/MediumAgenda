import { GraphQLObjectType } from 'graphql';
import author from './author';
import blog from './blog';
import director from './director';
import movie from './movie';
import post from './post';
import review from './review';

const queryType = new GraphQLObjectType({
    name: 'Query',
    fields: {
        author,
        blog,
        director,
        movie,
        post,
        review
    },
});

export default queryType;
