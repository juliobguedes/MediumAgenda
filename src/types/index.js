import {
    GraphQLObjectType,
} from 'graphql';
import author, { addAuthor, editAuthor } from './author/authorQL';
import blog, { addBlog, editBlog } from './blog/blogQL';
import director, { addDirector, editDirector, deleteDirector } from './director/directorQL';
import movie, { addMovie, editMovie } from './movie/movieQL';
import post, { addPost, editPost } from './post/postQL';
import review, { addReview, editReview } from './review/reviewQL';

const queries = new GraphQLObjectType({
    name: 'Query',
    fields: {
        author,
        blog,
        director,
        movie,
        post,
        review,
    },
});

const mutations = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        // addAuthor,
        // editAuthor,

        // addBlog,
        // editBlog,

        addDirector,
        editDirector,
        deleteDirector,
        
        // addMovie,
        // editMovie,

        // addPost,
        // editPost,

        // addReview,
        // editReview,
    },
});

export { queries, mutations };
