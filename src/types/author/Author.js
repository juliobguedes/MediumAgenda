import {
    GraphQLID,
    GraphQLObjectType,
    GraphQLString,
} from 'graphql';
import { Schema } from 'mongoose';
import db from '../../lib/config';

const MEDIUM_URL = 'https://www.medium.com/';

const typeDescription = 'This Model refers to a Medium User. ' +
    'In a Medium Story, the writer is the Author of the story, while he is also an User.';

const authorType = new GraphQLObjectType({
    name: 'Author',
    description: typeDescription,
    fields: {
        id: { type:GraphQLID },
        name: { type: GraphQLString },
        username: { type: GraphQLString },
        description: { type: GraphQLString },
        imageUrl: { type: GraphQLString },
        link: {
            type: GraphQLString,
            resolve(src, _args) {
                return `${MEDIUM_URL}@${src.username}`;
            }
        }
    }
});

const authorSchema = {
    id: Number,
    name: String,
    username: String,
    description: String,
    imageUrl: String,
};

const AuthorModel = db.model('Author', new Schema(authorSchema), 'Author');

export {
    authorType,
    AuthorModel,
    authorSchema,
};
