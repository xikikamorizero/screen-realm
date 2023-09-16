import { useEffect, useContext, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { debounce } from "lodash";
import { Context } from "../context";
import { Context as globalContext } from "../../../../shared/api";

export const useSearchParamsSync = (filterSearch:boolean) => {
    const { store } = useContext(Context);
    const global = useContext(globalContext);
    const navigate = useNavigate();
    const location = useLocation();

    const searchParams = new URLSearchParams(location.search);
useEffect(()=>{
  global.store.error = 0;
},[])
   

    useEffect(() => {
        const countriesParam = searchParams.get("countries");
        const genresParam = searchParams.get("genres");
        const orderParam:any = searchParams.get("order");
        const typeParam: any = searchParams.get("type");
        const ratingFromParam = searchParams.get("ratingFrom");
        const ratingToParam = searchParams.get("ratingTo");
        const yearFromParam = searchParams.get("yearFrom");
        const yearToParam = searchParams.get("yearTo");
        if (countriesParam !== null) {
          store.setCountries(Number(countriesParam));
        }
        if (genresParam !== null) {
          store.setGenres(Number(genresParam));
        }
        if (orderParam !== null) {
          store.setOrder(orderParam);
        }
        if (typeParam !== null) {
          store.setType(typeParam);
        }
        if (ratingFromParam !== null) {
          store.setRatingFrom(Number(ratingFromParam));
        }
        if (ratingToParam !== null) {
          store.setRatingTo(Number(ratingToParam));
        }
        if (yearFromParam !== null) {
          store.setYearFrom(Number(yearFromParam));
        }
        if (yearToParam !== null) {
          store.setYearTo(Number(yearToParam));
        }
      }, [location.search]);

      useEffect(() => {

        if (store.getCountries !== null) {
          searchParams.set("countries", store.getCountries.toString());
        } else {
          searchParams.delete("countries");
        }
        if (store.getGenres !== null) {
          searchParams.set("genres", store.getGenres.toString());
        } else {
          searchParams.delete("genres");
        }
        if (store.getOrder !=="RATING"){
          searchParams.set("order", store.getOrder);
        } else{
          searchParams.delete("order");
        }
        if (store.getType !=="ALL"){
          searchParams.set("type", store.getType);
        } else{
          searchParams.delete("type");
        }
        if (store.getRatingFrom !==0){
          searchParams.set("ratingFrom", store.getRatingFrom.toString());
        } else{
          searchParams.delete("ratingFrom");
        }
        if (store.getRatingTo !==10){
          searchParams.set("ratingTo", store.getRatingTo.toString());
        } else{
          searchParams.delete("ratingTo");
        }
        if (store.getYearFrom !==1000){
          searchParams.set("yearFrom", store.getYearFrom.toString());
        } else{
          searchParams.delete("yearFrom");
        }
        if (store.getYearTo !==3000){
          searchParams.set("yearTo", store.getYearTo.toString());
        } else{
          searchParams.delete("yearTo");
        }
   
        navigate(`?${searchParams.toString()}`);
        const debouncedFetchMovies = debounce(async () => {
          store.setLoader(true);
          store.setPage(1);
          global.store.list.getFilmsFilter
            .request({
              page: store.getPage,
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
              store.setList([...response.data.items]);
              store.setLoader(false);
            }).catch((e)=>{store.setLoader(false);});
        }, 300);
    
        debouncedFetchMovies();
    
    
        return () => {
          debouncedFetchMovies.cancel();
        };
      }, [
        filterSearch
      ]);
};
