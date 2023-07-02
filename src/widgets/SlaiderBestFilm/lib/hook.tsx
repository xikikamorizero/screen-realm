import { useContext, useEffect } from "react";

import { Context as globalContext } from "../../../shared/api/context";

import { Context } from "./context";

export const useList = () => {
  const { store } = useContext(Context);
  const global = useContext(globalContext);
  useEffect(() => {
    global.store.list.getList
      .request({
        type: "TOP_250_BEST_FILMS",
        page: 1,
      })
      .then((response) => {
        if (response == undefined) {
          store.responseStatus = 402;
          global.store.error = 402;
          return;
        }
        store.list = [...response.data.films];
      });
  }, []);

  return store.list;
};
