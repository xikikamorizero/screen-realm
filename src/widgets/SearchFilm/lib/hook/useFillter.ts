import { useContext, useEffect, useState } from "react";
import { Context as globalContext } from "../../../../shared/api/context";
import { Context } from "../context";

export const useFilter = () => {

  const { store } = useContext(Context);
  const global = useContext(globalContext);

  const [fetching, setFetching] = useState(true);
  const [totalCount, setTotalCount] = useState(0);


  useEffect(() => {
    global.store.list.getFilters
    .request()
    .then((response) => {
        store.setCountriesArrayData(response.data.countries)
        store.setGenresArrayData(response.data.genres)
    }).catch((error)=>{})
  }, []);

  useEffect(() => {
    if (fetching && store.getKeyword !== "" && store.getList !== null) {
      if (store.pageCount === null || store.getPage <= store.pageCount) {
         store.setLoader(store.getPage);
         global.store.list.getFilmsFilter
          .request({
            keyword: store.getKeyword,
            page: store.getPage+1,
            countries: store.getCountries,
            genres: store.getGenres,
            order: store.getOrder,
            type: store.getType,
            ratingFrom: store.getRatingFrom,
            ratingTo: store.getRatingTo,
            yearFrom: store.getYearFrom,
            yearTo: store.getYearTo,
          })
          .then((response) => {
            if(store.getList !== null){
              store.setList([...store.getList, ...response.data.items]);
            }
            store.setPageCount(response.data.totalPages);
            store.setLoader(false);
            store.setPage(store.getPage + 1);
            setTotalCount(response.data.totalPages);
          })
          .catch((error)=>{store.setLoader(false)})
          .finally(() => {
            setFetching(false);
          });
      }
    }
    else{
      setFetching(false)
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

  return {genreArrayData:store.genresArrayData, countriesArrayData:store.countriesArrayData, store:store};
};
