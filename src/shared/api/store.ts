import { ServiceStore } from 'gears-react';
import { makeAutoObservable } from 'mobx';

import * as types from './types';
import * as services from './services';


class Movie {
    constructor() {
        makeAutoObservable(this);
    }
    public readonly getMovie = new ServiceStore<[types.ID], types.Movie>(services.Movie.getMovie, false);
    public readonly getSeasons = new ServiceStore<[types.ID], types.Season>(services.Movie.getSeasons, false);
    public readonly getFacts = new ServiceStore<[types.ID], types.Facts>(services.Movie.getFacts, false);
    public readonly getDistributions = new ServiceStore<[types.ID], types.Distributions>(services.Movie.getDistributions, false);
    public readonly getBoxOffice = new ServiceStore<[types.ID], types.BoxOffice>(services.Movie.getBoxOffice, false);
    public readonly getAwards = new ServiceStore<[types.ID], types.Awards>(services.Movie.getAwards, false);
    public readonly getVideo = new ServiceStore<[types.ID], types.Video>(services.Movie.getVideo, false);
    public readonly getSimilars = new ServiceStore<[types.ID], types.Similars>(services.Movie.getSimilars, false);
    public readonly getImages = new ServiceStore<[types.ID, types.PosterParams], types.PosterMovie>(services.Movie.getImages, false);
    public readonly getReviews = new ServiceStore<[types.ID, types.ReviewsParams], types.Reviews>(services.Movie.getReviews, false);
}

class ListInfo {
    constructor() {
        makeAutoObservable(this);
    }
    public readonly getList = new ServiceStore<[types.TopListParams], types.ListTopFilms>(services.ListMovie.getListTop, false);
    public readonly getPremieres = new ServiceStore<[types.PremieresParams], types.Premieres>(services.ListMovie.getPremieres, false);
    public readonly getFilters = new ServiceStore<[], types.FilterInfo>(services.ListMovie.getFilters, false);
    public readonly getFilmsFilter = new ServiceStore<[types.FilmsParams], types.FilmsResponse>(services.ListMovie.getFilmsFilter, false);
    public readonly getSequelsAndPrequels = new ServiceStore<[types.ID], types.SequelsAndPrequelsList>(services.ListMovie.getSequelsAndPrequels, false);
    public readonly getSearch = new ServiceStore<[types.SearchByKeywordParams], types.SearchByKeyword>(services.ListMovie.getSearch, false);
}

export class Store {
    constructor() {
        makeAutoObservable(this);
    }

    public readonly movie = new Movie();
    public readonly list = new ListInfo();
}