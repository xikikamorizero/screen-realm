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
    else if(store.store.error == 402){
      return <Error402 />
    }
    return (
      <React.Fragment>
        <Routing fallback={<Loader />} routes={publicRoutes} />
      </React.Fragment>
    );
  }
);
