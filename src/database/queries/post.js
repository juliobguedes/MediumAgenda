import {
    GraphQLList,
    GraphQLInt,
} from 'graphql';
import {
    postType,
    PostModel,
} from '../../models';

const post = {
    type: new GraphQLList(postType),
    args: {
        id: { type: GraphQLInt },
    },
    resolve: async (src, args) => {
        let qry = {};
        if (args.id) {
            qry.id = args.id;
        }
        const posts = PostModel.find(qry);
        await posts;
        return posts;
    }
};

export default post;
