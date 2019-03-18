import {
    GraphQLBoolean,
    GraphQLID,
    GraphQLInt,
    GraphQLList,
    GraphQLObjectType,
    GraphQLString,
} from 'graphql';
import { Schema } from 'mongoose';
import { postType, PostModel, postSchema } from '../post/Post';
import db from '../../lib/config';

const reviewType = new GraphQLObjectType({
    name: 'Review',
    fields: {
        id: { type:GraphQLID },
        clap: { type: GraphQLBoolean },
        comment: { type: GraphQLString },
        dailyDate: { type: GraphQLString },
        postId: { type: GraphQLInt },
        post: {
            type: postType,
            async resolve(src, _args) {
                const post = PostModel.find({ id: src.postId });
                await post;
                return post;
            }
        },
        stars: { type: GraphQLInt },
        tags: { type: new GraphQLList(GraphQLString) },
        todayHighlight: { type: GraphQLBoolean },
    }
});

const reviewSchema = {
    id: Number,
    clap: Boolean,
    comment: String,
    dailyDate: Date,
    postId: Number,
    post: postSchema,
    stars: Number,
    tags: [String],
    todayHighlight: Boolean,
};

const ReviewModel = db.model('Review', new Schema(reviewSchema), 'Review');

export {
    reviewType,
    ReviewModel,
    reviewSchema,
};
