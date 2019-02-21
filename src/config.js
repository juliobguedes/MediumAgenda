import secure from 'secure-env';

const keys = secure({
    secret: 'damnDaniel',
});

export default keys;
