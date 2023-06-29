import {useContext, useEffect, useState} from 'react';

import {Context as globalContext} from '../../../shared/api/context';

import {Context} from './context';

export const useList = () => {
    
    const [fetching, setFetching] = useState(true);
    const [totalCount, setTotalCount] = useState(0);
  
    const { store } = useContext(Context);
    const global = useContext(globalContext);
  
    useEffect(() => {
      if (fetching) {
        global.store.list.getList
          .request({
            type: 'TOP_250_BEST_FILMS',
            page: store.page,
          })
          .then((response) => {
            store.list = [...store.list, ...response.data.films]
            store.page = store.page + 1
            setTotalCount(response.data.pagesCount);
          })
          .finally(() => {
            setFetching(false);
          });
      }
    }, [fetching]);
  
    useEffect(() => {
      document.addEventListener("scroll", scrolHandler);
    }, [totalCount]);
  
    const scrolHandler = (e: any) => {
      if (
        e.target.documentElement.scrollHeight -
          (e.target.documentElement.scrollTop + window.innerHeight) <
        100
      ) {
        setFetching(true);
      }
    };

    return store.list;
};