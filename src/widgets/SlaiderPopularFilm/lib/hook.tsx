import {useContext, useEffect} from 'react';

import {Context as globalContext} from '../../../shared/api/context';

import {Context} from './context';

export const useList = () => {
  
    const { store } = useContext(Context);
    const global = useContext(globalContext);
  
    useEffect(() => {
        global.store.list.getList
          .request({
            type: 'TOP_100_POPULAR_FILMS',
            page: 1,
          })
          .then((response) => {
            store.list = [...response.data.films]
          })
    }, []);

    return store.list;
};