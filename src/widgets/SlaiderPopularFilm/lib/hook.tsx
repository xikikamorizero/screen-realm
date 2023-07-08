import {useContext, useEffect} from 'react';

import {Context as globalContext} from '../../../shared/api/context';

import {Context} from './context';

export const useList = () => {
  
    const { store } = useContext(Context);
    const global = useContext(globalContext);
  
    useEffect(() => {
      store.setLoader(true);
        global.store.list.getList
          .request({
            type: 'TOP_100_POPULAR_FILMS',
            page: 1,
          })
          .then((response) => {
            if (response == undefined || response.status!==200) {
              store.setResponseStatus(response.status);
              global.store.error = response.status;
              return;
            }
            store.setList([...response.data.films]);
            store.setLoader(false);
          })
    }, []);

    return {list:store.list, loader:store.loader};
};