import {
    GraphQLID,
    GraphQLInt,
    GraphQLObjectType,
    GraphQLString,
} from 'graphql';
import { Schema } from 'mongoose';
import authorType, { authorSchema, AuthorModel } from '../types/author/Author';
import blogType, { blogSchema, BlogModel } from '../types/blog/Blog';
import db from '../lib/config';

const postType = new GraphQLObjectType({
    name: 'Post',
    fields: {
        id: { type:GraphQLID },
        title: { type: GraphQLString },
        authorId: { type: GraphQLInt },
        author: {
            type: authorType,
            async resolve(src, _args) {
                const author = AuthorModel.find({ id: src.authorId });
                await author;
                return author;
            },
        },
        link: { type: GraphQLString },
        postedInId: { type: GraphQLInt },
        postedIn: {
            type: blogType,
            async resolve(src, _args) {
                const blog = BlogModel.find({ id: src.postedInId });
                await blog;
                return blog;
            },
        }
    }
});

const postSchema = {
    id: Number,
    title: String,
    authorId: Number,
    author: authorSchema,
    link: String,
    postedInId: Number,
    postedIn: blogSchema,
};

const PostModel = db.model('Post', new Schema(postSchema));

export {
    postType,
    postSchema,
    PostModel,
};
