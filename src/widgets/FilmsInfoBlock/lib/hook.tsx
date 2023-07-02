import {useContext, useEffect, useState} from 'react';

import {Context as globalContext} from '../../../shared/api/context';

import {Context} from './context';

export const useMovie = () => {
    const {store} = useContext(Context);
    const global = useContext(globalContext);


    useEffect(() => {
        store.movie = null;
        store.loader =  true;
        global.store.movie.getMovie.request({
            id: store.id
        }).then(r => {
            store.movie = r.data
        });
        global.store.movie.getImages.request({
            id:store.id
        },{type:'SCREENSHOT', page:1}).then(r => {
            store.screenshot = r.data.items
        });
        global.store.movie.getSimilars.request({
            id:store.id
        }).then(r => {
            store.similar = r.data.items
            store.loader = false;
        });
    }, [store.id]);

    return {film:store.movie, screenshot: store.screenshot, similar: store.similar};
};