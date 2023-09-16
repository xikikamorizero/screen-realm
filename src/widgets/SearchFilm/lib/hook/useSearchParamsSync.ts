import { useEffect, useContext, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { debounce } from "lodash";
import { Context } from "../context";
import { Context as globalContext } from "../../../../shared/api";
import axios from "axios";

export const useSearchParamsSync = () => {
    const { store } = useContext(Context);
    const global = useContext(globalContext);
    const [cancelToken, setCancelToken] = useState<any>(null);

    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        global.store.error = 0;
        const searchParams = new URLSearchParams(location.search);
        const countriesParam = searchParams.get("countries");
        const genresParam = searchParams.get("genres");
        const keywordParam = searchParams.get("keyword");
        const orderParam: any = searchParams.get("order");
        const typeParam: any = searchParams.get("type");
        const ratingFromParam = searchParams.get("ratingFrom");
        const ratingToParam = searchParams.get("ratingTo");
        const yearFromParam = searchParams.get("yearFrom");
        const yearToParam = searchParams.get("yearTo");
        if (keywordParam !== null) {
            store.setKeyword(keywordParam);
        }
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
        const searchParams = new URLSearchParams(location.search);
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
        if (store.getKeyword !== "") {
            searchParams.set("keyword", store.getKeyword);
        } else {
            searchParams.delete("keyword");
        }
        if (store.getOrder !== "RATING") {
            searchParams.set("order", store.getOrder);
        } else {
            searchParams.delete("order");
        }
        if (store.getType !== "ALL") {
            searchParams.set("type", store.getType);
        } else {
            searchParams.delete("type");
        }
        if (store.getRatingFrom !== 0) {
            searchParams.set("ratingFrom", store.getRatingFrom.toString());
        } else {
            searchParams.delete("ratingFrom");
        }
        if (store.getRatingTo !== 10) {
            searchParams.set("ratingTo", store.getRatingTo.toString());
        } else {
            searchParams.delete("ratingTo");
        }
        if (store.getYearFrom !== 1000) {
            searchParams.set("yearFrom", store.getYearFrom.toString());
        } else {
            searchParams.delete("yearFrom");
        }
        if (store.getYearTo !== 3000) {
            searchParams.set("yearTo", store.getYearTo.toString());
        } else {
            searchParams.delete("yearTo");
        }

        navigate(`?${searchParams.toString()}`);

        const search = async () => {
            if (cancelToken) {
                cancelToken.cancel();
            }

            const source = axios.CancelToken.source();
            setCancelToken(source);

            try {
                const response = await axios
                    .get(
                        `https://kinopoiskapiunofficial.tech/api/v2.2/films`,
                        {
                            params: {
                                keyword: store.getKeyword,
                                page: store.getPage,
                                countries: store.getCountries,
                                genres: store.getGenres,
                                order: store.getOrder,
                                type: store.getType,
                                ratingFrom: store.getRatingFrom,
                                ratingTo: store.getRatingTo,
                                yearFrom: store.getYearFrom,
                                yearTo: store.getYearTo,
                            },
                            headers: {
                                "X-API-KEY":
                                    "e8dab39e-c89d-4804-8a7b-fb7c8cac5ffa",
                            },
                            cancelToken: source.token,
                        }
                    )
                    .then((response) => {
                        if (!store.getKeyword) {
                            store.setList(null);
                            store.setLoader(false);
                            return;
                        }
                        store.setList([...response.data.items]);
                        store.setLoader(false);
                    });
            } catch (error: any) {
                if (error.response !== undefined) {
                    global.store.error = error.response.status
                }
                if (axios.isCancel(error)) {
                } else {
                    store.setLoader(false);
                }
            }
        };

        const debouncedFetchMovies = debounce(async () => {
            store.setLoader(true);
            store.setPage(1);
            search();
        }, 500);

        if (store.getKeyword) {
            debouncedFetchMovies();
        } else {
            store.setLoader(false);
            store.setList(null);
        }

        return () => {
            debouncedFetchMovies.cancel();
            if (cancelToken) {
                cancelToken.cancel();
            }
        };
    }, [
        store.getKeyword,
        store.getGenres,
        store.getCountries,
        store.getOrder,
        store.getType,
        store.getRatingFrom,
        store.getRatingTo,
        store.getYearFrom,
        store.getYearTo,
    ]);
};
