import {
    GraphQLID,
    GraphQLObjectType,
    GraphQLString,
} from 'graphql';
import { Schema } from 'mongoose';
import db from '../../lib/config';

const MEDIUM_URL = 'https://www.medium.com/';

const authorType = new GraphQLObjectType({
    name: 'Author',
    fields: {
        id: { type:GraphQLID },
        name: { type: GraphQLString },
        username: { type: GraphQLString },
        description: { type: GraphQLString },
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
};

const AuthorModel = db.model('Author', new Schema(authorSchema));

export {
    authorType,
    AuthorModel,
    authorSchema,
};
