import {
    GraphQLObjectType,
    GraphQLID,
    GraphQLInt,
    GraphQLString,
    GraphQLList,
} from 'graphql';
import { Schema, Types } from 'mongoose';
import db from '../../lib/config';
import { movieType, MovieModel } from '../movie/Movie';

const { ObjectId }  = Types;

const directorType = new GraphQLObjectType({
    name: 'Director',
    fields: {
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        age: { type: GraphQLInt },
        movies: {
            type: new GraphQLList(movieType),
            async resolve(src, _args) {
                const dirMovies = await MovieModel.find({ directorId: new ObjectId(src.id) });
                return dirMovies;
            }
        }
    }
});

const directorSchema = {
    name: String,
    age: Number,
};

const DirectorModel = db.model('director', new Schema(directorSchema), 'Director');

export {
    directorType,
    DirectorModel,
    directorSchema,
};
