import React, { useContext } from "react";
import { IRoute, Routing } from "gears-react";
import { observer } from "mobx-react-lite";

import { Error402, Loader } from "../../../shared/components";
import { Context } from "../../../shared/api";

type Props = {
  protectedRoutes: IRoute[];
  publicRoutes: IRoute[];
};

export const CheckAccountAccess = observer(
  ({ publicRoutes }: Props) => {
    const store = useContext(Context);
    if (store.store.loader) {
      return <Loader />;
    }
    console.log(store.store.error)
    return (
      <React.Fragment>
        {store.store.error > 200 && store.store.error<600? <Error402 text={'Приносим прощения в данный момент у нас неполадки с сервером'} /> : null}
        {store.store.error == 600? <Error402 text={'Соединение прервано'} /> : null}
        <Routing fallback={<Loader />} routes={publicRoutes} />
      </React.Fragment>
    );
  }
);
