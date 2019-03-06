import {
    GraphQLObjectType,
} from 'graphql';
import author, { addAuthor, editAuthor, deleteAuthor } from './author/authorQL';
import blog, { addBlog, editBlog, deleteBlog } from './blog/blogQL';
import director, { addDirector, editDirector, deleteDirector } from './director/directorQL';
import movie, { addMovie, editMovie, deleteMovie } from './movie/movieQL';
import post, { addPost, editPost, deletePost } from './post/postQL';
import review, { addReview, editReview, deleteReview } from './review/reviewQL';

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
        // deleteAuthor,

        // addBlog,
        // editBlog,
        // deleteBlog,

        addDirector,
        editDirector,
        deleteDirector,
        
        addMovie,
        editMovie,
        deleteMovie,

        // addPost,
        // editPost,
        // deletePost,

        // addReview,
        // editReview,
        // deleteReview,
    },
});

export { queries, mutations };
