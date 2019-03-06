import {
    GraphQLInt,
    GraphQLList,
    GraphQLNonNull,
    GraphQLString,
    GraphQLID,
} from 'graphql';
import { Types } from 'mongoose';
import {
    DirectorModel, directorType,
} from './Director';

const { ObjectId } = Types;

const director = {
    type: new GraphQLList(directorType),
    args: { id: { type: GraphQLID }},
    resolve: async (src, args) => {
        const directors = args.id ?
            [DirectorModel.findOne({ _id: new ObjectId(args.id) })] : DirectorModel.find();
        await directors;
        return directors;
    }
};

const addDirector = {
    type: directorType,
    args: {
        name: { type: GraphQLNonNull(GraphQLString) },
        age: { type: GraphQLNonNull(GraphQLInt) },
    },
    async resolve(src, args) {
        const newdirector = await DirectorModel.create({ ...args, movies: [] }); 
        return newdirector;
    }
};

const editDirector = {
    type: directorType,
    args: {
        id: { type: GraphQLNonNull(GraphQLID) },
        name: { type: GraphQLString },
        age: { type: GraphQLInt },
    },
    async resolve(src, args) {
        const _id = new ObjectId(args.id);
        delete args.id;
        const updatedDirector = await DirectorModel.findOneAndUpdate(
            { _id }, { ...args }, { new: true },
        ).exec();
        return updatedDirector;
    }
};

const deleteDirector = {
    type: directorType,
    args: {
        id: { type: GraphQLNonNull(GraphQLID) },
    },
    async resolve(src, args) {
        const removedDirector = await DirectorModel.findOneAndRemove({
            _id: new ObjectId(args.id),
        }).exec();
        return removedDirector;
    }
};

export {
    director as default,
    addDirector,
    editDirector,
    deleteDirector,
};
