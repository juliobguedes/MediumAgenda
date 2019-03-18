import {
    GraphQLObjectType,
    GraphQLID,
    GraphQLInt,
    GraphQLString
} from 'graphql';
import { Schema } from 'mongoose';
import db from '../../lib/config';

const movieType = new GraphQLObjectType({
    name: 'Movie',
    fields: {
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        year: { type: GraphQLInt },
        directorId: { type: GraphQLID },
    }
});

const movieSchema = {
    name: String,
    year: Number,
    directorId: String,
};

const MovieModel = db.model('movie', new Schema(movieSchema), 'Medium');

export {
    movieType,
    MovieModel,
    movieSchema
};
