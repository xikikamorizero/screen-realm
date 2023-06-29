import {useContext, useEffect, useState} from 'react';

import {Context as globalContext} from '../../../shared/api/context';

import {Context} from './context';

const TOP_250_BEST_FILMS = 'TOP_250_BEST_FILMS';
const TOP_100_POPULAR_FILMS = 'TOP_100_POPULAR_FILMS';
const TOP_AWAIT_FILMS = 'TOP_AWAIT_FILMS';

type Props = 'TOP_250_BEST_FILMS' | 'TOP_100_POPULAR_FILMS' | 'TOP_AWAIT_FILMS';

export const useList = (type:Props) => {
    
    const [fetching, setFetching] = useState(true);
    const [totalCount, setTotalCount] = useState(0);
  
    const { store } = useContext(Context);
    const global = useContext(globalContext);
  
    useEffect(() => {
      if (fetching) {
        global.store.list.getList
          .request({
            type: type,
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