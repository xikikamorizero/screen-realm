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
            type: 'TOP_AWAIT_FILMS',
            page: 1,
          })
          .then((response) => {
            if (response == undefined) {
              store.setResponseStatus(402);
              global.store.error = 402;
              return;
            }
            store.setList([...response.data.films]);
            store.setLoader(false);
          })
    }, []);

    return {list:store.list, loader:store.loader};
};