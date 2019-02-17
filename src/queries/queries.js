import {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLList,
} from 'graphql';
import {
    Movie,
    Director,
    movieType,
    directorType
} from '../models';

const queryType = new GraphQLObjectType({
    name: 'Query',
    fields: {
        hello: {
            type: GraphQLString,
            resolve: () => 'hello world',
        },
        movie: {
            type: new GraphQLList(movieType),
            args: { id: { type: GraphQLInt} },
            resolve: async (src, args) => {
                const movies = args.id ? 
                    Movie.find({ id: args.id}) : Movie.find();
                await movies;
                return movies;
            }
        },
        director: {
            type: new GraphQLList(directorType),
            args: { id: { type: GraphQLInt }},
            resolve: async (src, args) => {
                const directors = args.id ?
                    Director.find({ id: args.id}) : Director.find();
                await directors;
                return directors;
            }
        }
    },
});

exports.queryType = queryType;
