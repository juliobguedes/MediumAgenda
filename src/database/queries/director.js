import {
    GraphQLInt,
    GraphQLList,
} from 'graphql';
import {
    DirectorModel,
    directorType,
} from '../../models';

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

export default director;
