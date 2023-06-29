import React, {useContext} from 'react';
import {IRoute, Routing} from 'gears-react';
import {observer} from 'mobx-react-lite';

import {PageLoaderWithLogo} from '../../../shared/components';

type Props = {
    protectedRoutes: IRoute[];
    publicRoutes: IRoute[];
}

export const CheckAccountAccess = observer(({publicRoutes, protectedRoutes}: Props) => {


    return <React.Fragment>
        <Routing fallback={<PageLoaderWithLogo/>} routes={publicRoutes}/>
        {/*<Routing fallback={<PageLoaderWithLogo/>} routes={publicRoutes}/>*/}
    </React.Fragment>;
});