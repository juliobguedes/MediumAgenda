import {
    MediumClient,
    Scope,
} from 'medium-sdk';
import {
    MEDIUM_CID,
    MEDIUM_SKEY,
    REDIRECT_URL,
    JULIO_AUTH,
} from './config';

const medium = new MediumClient({
    clientId: MEDIUM_CID,
    clientSecret: MEDIUM_SKEY,
});

const redirectURL = REDIRECT_URL;

const url = medium.getAuthorizationUrl('secretState', redirectURL, [
    Scope.BASIC_PROFILE,
    Scope.PUBLISH_POST,
]);

medium.exchangeAuthorizationCode(JULIO_AUTH, redirectURL, (err, token) => {
    medium.getUser((err, user) => {
        medium.createPost({
            userId: user.id,
            title: 'A new post',
            contentFormat: medium.PostContentFormat.HTML,
            content: '<h1>A New Post</h1><p>This is my new post.</p>',
            publishStatus: medium.PostPublishStatus.DRAFT
        }, (err, post) => {
            console.log(token, user, post);
        });
    });
});

export {
    medium as default,
    url
};
