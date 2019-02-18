import {
    GraphQLList,
    GraphQLInt,
    GraphQLString,
} from 'graphql';
import {
    authorType,
    AuthorModel,
} from '../../models';

const author = {
    type: new GraphQLList(authorType),
    args: {
        id: { type: GraphQLInt },
        name: { type: GraphQLString },
    },
    resolve: async (src, args) => {
        let qry = {};
        if (args.id) {
            qry.id = args.id;
        }
        if (args.name) {
            qry.name = args.name;
        }
        const authors = AuthorModel.find(qry);
        await authors;
        return authors;
    }
};

export default author;
