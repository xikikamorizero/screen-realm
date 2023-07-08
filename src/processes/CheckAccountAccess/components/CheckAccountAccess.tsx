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
    return (
      <React.Fragment>
        {store.store.error === 402? <Error402 /> : null}
        <Routing fallback={<Loader />} routes={publicRoutes} />
      </React.Fragment>
    );
  }
);
