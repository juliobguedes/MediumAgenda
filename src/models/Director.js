import {
    GraphQLObjectType,
    GraphQLID,
    GraphQLInt,
    GraphQLString,
    GraphQLList,
} from 'graphql';
import { Schema } from 'mongoose';
import db from '../database/config';
import movieType, { movieSchema, Movie } from './Movie';

const directorType = new GraphQLObjectType({
    name: 'Director',
    fields: {
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        age: { type: GraphQLInt },
        movies: {
            type: new GraphQLList(movieType),
            async resolve(src, _args) {
                const dirMovies = Movie.find({ directorId: src.id });
                await dirMovies;
                return dirMovies;
            }
        }
    }
});

const directorSchema = new Schema({
    name: String,
    age: Number,
    movies: [movieSchema],
});

const Director = db.model('director', directorSchema);

export {
    directorType as default,
    Director,
};
