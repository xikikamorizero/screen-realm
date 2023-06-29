import { useContext, useEffect } from "react";
import { Context as globalContext } from "../../../shared/api/context";
import * as types from '../../../shared/api/types';


type Props = "TOP_250_BEST_FILMS" | "TOP_100_POPULAR_FILMS" | "TOP_AWAIT_FILMS";
type SetArray = (array:types.Film[])=>void;

export const useList = (type: Props, setArray:SetArray) => {
  const global = useContext(globalContext);

  useEffect(() => {
    global.store.list.getList
      .request({
        type: type,
        page: 1,
      })
      .then((response) => {
        setArray(response.data.films);
      });
  }, []);
};
