import {
    GraphQLInt,
    GraphQLList,
    GraphQLString,
} from 'graphql';

import {
    blogType, BlogModel,
} from '../../models';

const blog = {
    type: new GraphQLList(blogType),
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
        const blogs = BlogModel.find(qry);
        await blogs;
        return blogs;
    },
};

export default blog;
