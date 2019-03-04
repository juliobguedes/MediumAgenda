import {
    GraphQLID,
    GraphQLInt,
    GraphQLList,
    GraphQLNonNull,
    GraphQLString,
} from 'graphql';
import {
    MovieModel,
    movieType,
} from './Movie';

const movie = {
    type: new GraphQLList(movieType),
    args: { id: { type: GraphQLID} },
    resolve: async (src, args) => {
        const movies = args.id ? 
            MovieModel.find({ id: args.id}) : MovieModel.find();
        await movies;
        return movies;
    }
};

const addMovie = {
    type: movieType,
    args: {
        name: { type: GraphQLNonNull(GraphQLString) },
        age: { type: GraphQLNonNull(GraphQLInt) },
        directorId: { type: GraphQLNonNull(GraphQLID) },
    },
    async resolve(src, args) {
        MovieModel.create(args).then(res => res.data);
    }
};

const editMovie = {
    type: movieType,
    args: {}
};

export {
    movie as default,
    addMovie,
    editMovie,
};
