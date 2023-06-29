import {Navigate} from 'react-router-dom';
import {getRoutes} from 'gears-react';

import {film} from '../../pages';
import {main} from '../../pages'
import {top100film} from '../../pages';
import { top250film } from '../../pages';
import { recommendations } from '../../pages';
import { search } from '../../pages';

import {routers} from '../../shared/const';

export const public_routers = getRoutes([
    [routers.general.path.main, main],
    [routers.general.path.films, film],
    [routers.general.path.top100film, top100film],
    [routers.general.path.top250film, top250film],
    [routers.general.path.award, recommendations],
    [routers.general.path.search, search]
]);

export const protected_routers = getRoutes([
    ['*', [<div>error</div>]],
]);