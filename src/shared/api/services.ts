import { AxiosResponse } from 'axios';
import { $kinopoisk_api_public } from './instances';
import * as types from './types';
import * as urls from './urls';


export class Movie {

    static async getMovie(
        {
            id
        }: types.ID): Promise<AxiosResponse<types.Movie>> {
        return await $kinopoisk_api_public.get<types.Movie>(urls.film.get(id), {
            params: {
            }
        });
    }

    static async getSeasons(
        {
            id
        }: types.ID): Promise<AxiosResponse<types.Season>> {
        return await $kinopoisk_api_public.get<types.Season>(urls.film.getSeasons(id), {
            params: {
            }
        });
    }

    static async getFacts(
        {
            id
        }: types.ID): Promise<AxiosResponse<types.Facts>> {
        return await $kinopoisk_api_public.get<types.Facts>(urls.film.getFacts(id), {
            params: {
            }
        });
    }

    static async getDistributions(
        {
            id
        }: types.ID): Promise<AxiosResponse<types.Distributions>> {
        return await $kinopoisk_api_public.get<types.Distributions>(urls.film.getDistributions(id), {
            params: {
            }
        });
    }

    static async getBoxOffice(
        {
            id
        }: types.ID): Promise<AxiosResponse<types.BoxOffice>> {
        return await $kinopoisk_api_public.get<types.BoxOffice>(urls.film.getBoxOffice(id), {
            params: {
            }
        });
    }

    static async getAwards(
        {
            id
        }: types.ID): Promise<AxiosResponse<types.Awards>> {
        return await $kinopoisk_api_public.get<types.Awards>(urls.film.getAwards(id), {
            params: {
            }
        });
    }

    static async getVideo(
        {
            id
        }: types.ID): Promise<AxiosResponse<types.Video>> {
        return await $kinopoisk_api_public.get<types.Video>(urls.film.getTrailer(id), {
            params: {
            }
        });
    }

    static async getSimilars(
        {
            id
        }: types.ID): Promise<AxiosResponse<types.Similars>> {
        return await $kinopoisk_api_public.get<types.Similars>(urls.film.getSimilars(id), {
            params: {
            }
        });
    }

    static async getImages(
        {
            id
        }: types.ID,
        {
            type,
            page
        }: types.PosterParams): Promise<AxiosResponse<types.PosterMovie>> {
        return await $kinopoisk_api_public.get<types.PosterMovie>(urls.film.getImage(id), {
            params: {
                type,
                page
            }
        });
    }

    static async getReviews(
        {
            id
        }: types.ID,
        {
            order,
            page
        }: types.ReviewsParams): Promise<AxiosResponse<types.Reviews>> {
        return await $kinopoisk_api_public.get<types.Reviews>(urls.film.getReviews(id), {
            params: {
                order,
                page
            }
        });
    }
}

export class ListMovie {

    static async getListTop(
        {
            type,
            page
        }: types.TopListParams): Promise<AxiosResponse<types.ListTopFilms>> {
        return await $kinopoisk_api_public.get<types.ListTopFilms>(urls.listFilm.getListFilmTop(), {
            params: {
                type,
                page
            }
        });
    }

    static async getPremieres(
        {
            year,
            month
        }: types.PremieresParams): Promise<AxiosResponse<types.Premieres>> {
        return await $kinopoisk_api_public.get<types.Premieres>(urls.listFilm.getPremieres(), {
            params: {
                year,
                month
            }
        });
    }

    static async getFilters(): Promise<AxiosResponse<types.FilterInfo>> {
        return await $kinopoisk_api_public.get<types.FilterInfo>(urls.listFilm.getFilterGenre(), {
            params: {
            }
        });
    }

    static async getFilmsFilter(
        {
            countries,
            genres,
            order,
            type,
            ratingFrom,
            ratingTo,
            yearFrom,
            yearTo,
            imdbId,
            keyword,
            page
        }: types.FilmsParams
    ): Promise<AxiosResponse<types.FilmsResponse>> {
        return await $kinopoisk_api_public.get<types.FilmsResponse>(urls.listFilm.getListFilter(), {
            params: {
                countries,
                genres,
                order,
                type,
                ratingFrom,
                ratingTo,
                yearFrom,
                yearTo,
                imdbId,
                keyword,
                page
            }
        });
    }

    static async getSequelsAndPrequels(
        {
            id
        }: types.ID
    ): Promise<AxiosResponse<types.SequelsAndPrequelsList>> {
        return await $kinopoisk_api_public.get<types.SequelsAndPrequelsList>(urls.listFilm.getListSequelsAndPrequels(id), {
            params: {
            }
        });
    }

    static async getSearch(
        {
            page,
            keyword
        }: types.SearchByKeywordParams
    ): Promise<AxiosResponse<types.SearchByKeyword>> {
        return await $kinopoisk_api_public.get<types.SearchByKeyword>(urls.listFilm.getListSearchByName(), {
            params: {
                keyword
            }
        });
    }
}