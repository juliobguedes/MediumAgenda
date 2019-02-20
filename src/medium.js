import {
    MediumClient,
    Scope,
} from 'medium-sdk';

const medium = new MediumClient({
    clientId: process.env.MEDIUM_CID,
    clientSecret: process.env.MEDIUM_SKEY,
});

const redirectURL = 'https://juliobguedes.github.io/mediumagenda/callback/medium';

const url = medium.getAuthorizationUrl('secretState', redirectURL, [
    Scope.BASIC_PROFILE,
    Scope.PUBLISH_POST,
]);

medium.exchangeAuthorizationCode('YOUR_AUTHORIZATION_CODE', redirectURL, (err, token) => {
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
