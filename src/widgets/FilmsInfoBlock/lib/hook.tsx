import { useContext, useEffect } from "react";
import { Context as globalContext } from "../../../shared/api/context";
import { Context } from "./context";

export const useMovie = () => {
  const { store } = useContext(Context);
  const global = useContext(globalContext);

  useEffect(() => {
    store.setMovie(null);
    store.setLoader(true);
    global.store.movie.getMovie
      .request({
        id: store.movieId,
      })
      .then((r) => {
        if(r.status !== 200){
         return
        }
        store.setMovie(r.data);
      })
    global.store.movie.getImages
      .request(
        {
          id: store.movieId,
        },
        { type: "SCREENSHOT", page: 1 }
      )
      .then((r) => {
        if(r.status !== 200){
          return
         }
        store.setScreenshot(r.data.items);
      });
    global.store.movie.getSimilars
      .request({
        id: store.movieId,
      })
      .then((r) => {
        if(r.status !== 200){
          return
         }
        store.setSimilar(r.data.items);
      });
    global.store.movie.getBoxOffice
      .request({
        id: store.movieId,
      })
      .then((r) => {
        if(r.status !== 200){
          store.setLoader(false);
          return
         }
        const budget = r.data.items.filter((obj:{type:string}) => obj.type === 'BUDGET')[0]
        const word = r.data.items.filter((obj:{type:string}) => obj.type === 'WORLD')[0]
        store.setBoxOffice({
          budget: budget===undefined? '?' : budget.amount + budget.symbol,
          worldwideBoxOffice: word===undefined? '?' : word.amount + word.symbol,
        });
        store.setLoader(false);
      });
  }, [store.movieId]);

  return {
    film: store.movie,
    screenshot: store.screenshot,
    similar: store.similar,
    box_office: store.box_office
  };
};
