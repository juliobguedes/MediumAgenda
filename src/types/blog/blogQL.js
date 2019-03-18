import {
    GraphQLInt,
    GraphQLList,
    GraphQLString,
} from 'graphql';
import {
    blogType, BlogModel,
} from './Blog';

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

const addBlog = { };

const editBlog = { };

export {
    blog as default,
    addBlog,
    editBlog,
};
