import {
    GraphQLID,
    GraphQLInt,
    GraphQLList,
    GraphQLNonNull,
    GraphQLString,
} from 'graphql';
import { Types } from 'mongoose';
import {
    MovieModel,
    movieType,
} from './Movie';

const { ObjectId } = Types;

const movie = {
    type: new GraphQLList(movieType),
    args: { id: { type: GraphQLID} },
    resolve: async (src, args) => {
        const movies = args.id ? 
            [MovieModel.findOne({ _id: new ObjectId(args.id) })] : MovieModel.find();
        await movies;
        return movies;
    }
};

const addMovie = {
    type: movieType,
    args: {
        name: { type: GraphQLNonNull(GraphQLString) },
        year: { type: GraphQLNonNull(GraphQLInt) },
        directorId: { type: GraphQLNonNull(GraphQLID) },
    },
    async resolve(src, args) {
        const newMovie = await MovieModel.create(args);
        return newMovie;
    }
};

const editMovie = {
    type: movieType,
    args: {
        id: { type: GraphQLNonNull(GraphQLID) },
        name: { type: GraphQLString },
        year: { type: GraphQLInt },
        directorId: { type: GraphQLID },
    },
    async resolve(src, args) {
        const _id = new ObjectId(args.id);
        delete args.id;
        const updatedMovie = await MovieModel.findOneAndUpdate(
            { _id }, { ...args }, { new: true },
        ).exec();
        return updatedMovie;
    },
};

const deleteMovie = {
    type: movieType,
    args: {
        id: { type: GraphQLNonNull(GraphQLID) },
    },
    async resolve(src, args) {
        const removedMovie = await MovieModel.findOneAndRemove({
            _id: new ObjectId(args.id),
        }).exec();
        return removedMovie;
    }
};

export {
    movie as default,
    addMovie,
    editMovie,
    deleteMovie,
};
