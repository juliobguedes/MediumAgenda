import axiosInstance from './init';

axiosInstance.get('/s/story/regulators-are-figuring-out-how-to-make-google-and-facebook-sweat-f732fe310324')
    .then(res => {
        console.log(JSON.stringify(res.data));
    }).catch(err => {
        console.error(err);
    });

export default axiosInstance;
