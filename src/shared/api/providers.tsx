
import React from 'react';

import {Context} from './context';
import {Store} from './store';


const store = new Store();

export const provider = (component: () => React.ReactNode) => () => (
    <Context.Provider value={{store}}>
        {component()}
    </Context.Provider>
);