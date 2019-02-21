import secure from 'secure-env';

const keys = secure({
    secret: 'damnDaniel',
    path: '../',
});

export default keys;
