import {
    GraphQLObjectType,
    GraphQLString,
    GraphQLID,
} from 'graphql';
import { Schema } from 'mongoose';
import db from '../../lib/config';

const blogType = new GraphQLObjectType({
    name: 'Blog',
    fields: {
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        link: { type: GraphQLString },
    },
});

const blogSchema = {
    id: Number,
    name: String,
    link: String,
};

const BlogModel = db.model('Blog', new Schema(blogSchema), 'Medium');

export {
    blogType,
    blogSchema,
    BlogModel,
};
