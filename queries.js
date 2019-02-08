const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLList,
} = require('graphql');
const { movies, directors } = require('./data');
const { movieType, directorType } = require('./types');

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
            resolve: (src, args) => {
                const result = args.id ? 
                    movies.filter(movie => movie.id === args.id) :
                    movies;
                return result;
            }
        },
        director: {
            type: new GraphQLList(directorType),
            args: { id: { type: GraphQLInt }},
            resolve: (src, args) => {
                const result = args.id ?
                    directors.filter(director => director.id == args.id) :
                    directors;
                return result;
            }
        }
    },
});

exports.queryType = queryType;
