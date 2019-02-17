const {
    GraphQLObjectType,
    GraphQLID,
    GraphQLInt,
    GraphQLString
} = require('graphql');
const { Schema } = require('mongoose');
const db = require('../database/config');

const movieType = new GraphQLObjectType({
    name: 'Movie',
    fields: {
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        year: { type: GraphQLInt },
        directorId: { type: GraphQLID },
    }
});

const movieSchema = new Schema({
    name: String,
    year: Number,
    directorId: Number,
});

const Movie = db.model('movie', movieSchema);

export {
    movieType as default,
    Movie,
};
