import {useContext, useEffect, useState} from 'react';

import {Context as globalContext} from '../../../shared/api/context';

import {Context} from './context';

export const useMovie = (id:number) => {
    const {store} = useContext(Context);
    const global = useContext(globalContext);


    useEffect(() => {

        store.movie = null;

        global.store.movie.getMovie.request({
            id:id
        }).then(r => {
            store.movie = r.data
            console.log(r.data);
        });
    }, []);

    return store.movie;
};