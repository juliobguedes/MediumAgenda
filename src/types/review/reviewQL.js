import {
    GraphQLList,
    GraphQLInt,
} from 'graphql';
import {
    reviewType,
    ReviewModel,
} from './Review';

const review = {
    type: new GraphQLList(reviewType),
    args: {
        id: { type: GraphQLInt },
        postId: { type: GraphQLInt },
    },
    resolve: async (src, args) => {
        let qry = {};
        if (args.id) {
            qry.id = args.id;
        }
        if (args.postId) {
            qry.postId = args.postId;
        }
        const reviews = ReviewModel.find(qry);
        await reviews;
        return reviews;
    }
};

const addReview = () => undefined;

const editReview = () => undefined;

export {
    review as default,
    addReview,
    editReview
};
