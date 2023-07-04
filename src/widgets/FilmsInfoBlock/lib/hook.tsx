import {useContext, useEffect} from 'react';

import {Context as globalContext} from '../../../shared/api/context';

import {Context} from './context';

export const useMovie = () => {
    const {store} = useContext(Context);
    const global = useContext(globalContext);


    useEffect(() => {
        store.setMovie(null);
        store.setLoader(true);
        global.store.movie.getMovie.request({
            id: store.movieId
        }).then(r => {
            store.setMovie(r.data); 
        });
        global.store.movie.getImages.request({
            id:store.movieId
        },{type:'SCREENSHOT', page:1}).then(r => {
            store.setScreenshot(r.data.items); 
        });
        global.store.movie.getSimilars.request({
            id:store.movieId
        }).then(r => {
            store.setSimilar(r.data.items); 
            store.setLoader(false);
        });
    }, [store.movieId]);

    return {film:store.movie, screenshot: store.screenshot, similar: store.similar};
};