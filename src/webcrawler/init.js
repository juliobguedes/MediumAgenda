import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'https://medium.com',
    timeout: 2500,
});

export default axiosInstance;
