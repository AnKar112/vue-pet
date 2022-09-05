import axios from 'axios' 
import { VueCookieNext } from 'vue-cookie-next'

const API = axios.create({
    baseURL: 'https://service.lms.academweb.tech/api/',
    withCredentials: true
})


    API.interceptors.request.use(function (config) {
        if (VueCookieNext.getCookie('api_token')) {
            const token = VueCookieNext.getCookie('api_token');
            config.headers.Authorization =  `Bearer ${token}`;
        }
        return config;
    });


export default API