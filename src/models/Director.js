import {
    GraphQLObjectType,
    GraphQLID,
    GraphQLInt,
    GraphQLString,
    GraphQLList,
} from 'graphql';
import { Schema } from 'mongoose';
import db from '../database/config';
import movieType, { movieSchema, MovieModel } from './Movie';

const directorType = new GraphQLObjectType({
    name: 'Director',
    fields: {
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        age: { type: GraphQLInt },
        movies: {
            type: new GraphQLList(movieType),
            async resolve(src, _args) {
                const dirMovies = MovieModel.find({ directorId: src.id });
                await dirMovies;
                return dirMovies;
            }
        }
    }
});

const directorSchema = {
    name: String,
    age: Number,
    movies: [movieSchema],
};

const DirectorModel = db.model('director', new Schema(directorSchema));

export {
    directorType as default,
    DirectorModel,
};
