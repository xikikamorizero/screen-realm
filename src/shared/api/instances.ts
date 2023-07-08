import axios from 'axios';

import {baseUrl} from './const';

export const $kinopoisk_api_public = axios.create({
    baseURL: baseUrl,
    headers: {
        'X-API-KEY': 'e8dab39e-c89d-4804-8a7b-fb7c8cac5ffa'
    }
});

$kinopoisk_api_public.interceptors.request.use((config) => {
    if (!config?.headers) {
        throw new Error('Expected \'config\' and \'config.headers\' not to be undefined');
    }
    return config;
});