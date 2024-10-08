import { useContext, useEffect, useState } from "react";

import { Context as globalContext } from "../../../shared/api/context";

import { Context } from "./context";

export const useList = () => {
    const [fetching, setFetching] = useState(true);

    const { store } = useContext(Context);
    const global = useContext(globalContext);

    useEffect(() => {
        if (fetching) {
            global.store.error = 0;
            if (store.pageCount === null || store.page <= store.pageCount) {
                store.setLoader(store.page);
                global.store.list.getList
                    .request({
                        type: "TOP_AWAIT_FILMS",
                        page: store.page,
                    })
                    .then((response) => {
                        store.setList([...store.list, ...response.data.films]);
                        store.setPageCount(response.data.pagesCount);
                        store.setLoader(false);
                        store.setPage(store.page + 1);
                    })
                    .catch((error) => {})
                    .finally(() => {
                        setFetching(false);
                    });
            }
        }
    }, [fetching]);

    useEffect(() => {
        document.addEventListener("scroll", scrolHandler);
    }, []);

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
