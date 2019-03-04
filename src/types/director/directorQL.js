import {
    GraphQLInt,
    GraphQLList,
} from 'graphql';
import {
    DirectorModel, directorType,
} from './Director';

const director = {
    type: new GraphQLList(directorType),
    args: { id: { type: GraphQLInt }},
    resolve: async (src, args) => {
        const directors = args.id ?
            DirectorModel.find({ id: args.id}) : DirectorModel.find();
        await directors;
        return directors;
    }
};

const addDirector = () => undefined;

const editDirector = () => undefined;

export {
    director as default,
    addDirector,
    editDirector,
};
