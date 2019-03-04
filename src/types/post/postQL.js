import {
    GraphQLList,
    GraphQLInt,
} from 'graphql';
import {
    postType,
    PostModel,
} from './Post';

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

const addPost = () => undefined;

const editPost = () => undefined;

export {
    post as default,
    addPost,
    editPost,
};
