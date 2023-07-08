import { getRoutes } from "gears-react";
import {
  aboutUs,
  film,
  main,
  top100film,
  top250film,
  recommendations,
  search,
  error
} from "../../pages";
import { routers } from "../../shared/const";

export const public_routers = getRoutes([
  [routers.general.path.main, main],
  [routers.general.path.films, film],
  [routers.general.path.top100film, top100film],
  [routers.general.path.top250film, top250film],
  [routers.general.path.award, recommendations],
  [routers.general.path.search, search],
  [routers.general.path.aboutUs, aboutUs],
  ['/error', error],
]);

export const protected_routers = getRoutes([["*", [<div>error</div>]]]);
