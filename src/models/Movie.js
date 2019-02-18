import {
    GraphQLObjectType,
    GraphQLID,
    GraphQLInt,
    GraphQLString
} from 'graphql';
import { Schema } from 'mongoose';
import db from '../database/config';

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
    directorId: Number,
};

const MovieModel = db.model('movie', new Schema(movieSchema));

export {
    movieType as default,
    MovieModel,
    movieSchema
};
