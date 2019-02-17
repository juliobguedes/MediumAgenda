import {
    GraphQLObjectType,
    GraphQLID,
    GraphQLInt,
    GraphQLString,
    GraphQLList,
} from 'graphql';
import { Schema } from 'mongoose';
import db from '../database/config';
import movieType, { Movie } from './Movie';

const directorType = new GraphQLObjectType({
    name: 'Director',
    fields: {
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        age: { type: GraphQLInt },
        movies: {
            type: new GraphQLList(movieType),
            resolve(src, _args) {
                return Movie.find().filter(movie => movie.directorId === src.id);
            }
        }
    }
});

const directorSchema = new Schema({
    name: String,
    age: Number,
    movies: [Movie],
});

const Director = db.model('director', directorSchema);

export {
    directorType as default,
    Director,
};
