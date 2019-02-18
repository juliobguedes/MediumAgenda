import {
    GraphQLInt,
    GraphQLList,
} from 'graphql';
import {
    MovieModel,
    movieType,
} from '../../models';

const movie = {
    type: new GraphQLList(movieType),
    args: { id: { type: GraphQLInt} },
    resolve: async (src, args) => {
        const movies = args.id ? 
            MovieModel.find({ id: args.id}) : MovieModel.find();
        await movies;
        return movies;
    }
};

export default movie;
