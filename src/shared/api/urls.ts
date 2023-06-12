export const film = {
    get(id: number) {
        return `/api/v2.2/films/${id}`;
    },
    getSeasons(id: number) {
        return `/api/v2.2/films/${id}/seasons`;
    },
    getFacts(id: number) {
        return `/api/v2.2/films/${id}/facts`;
    },
    getDistributions(id: number) {
        return `/api/v2.2/films/${id}/distributions`;
    },
    getBoxOffice(id: number) {
        return `/api/v2.2/films/${id}/box_office`;
    },
    getAwards(id: number) {
        return `/api/v2.2/films/${id}/awards`;
    },
    getTrailer(id: number) {
        return `/api/v2.2/films/${id}/videos`;
    },
    getSimilars(id: number) {
        return `/api/v2.2/films/${id}/similars`;
    },
    getImage(id: number) {
        return `/api/v2.2/films/${id}/images`;
    },
    getReviews(id: number) {
        return `/api/v2.2/films/${id}/reviews`;
    }
};


export const listFilm = {
    getListFilmTop() {
        return `/api/v2.2/films/top`
    },
    getPremieres() {
        return `/api/v2.2/films/premieres`
    },
    getFilterGenre() {
        return `/api/v2.2/films/filters`
    },
    getListFilter() {
        return `/api/v2.2/films`
    },
    getListSequelsAndPrequels(id:number) {
        return `/api/v2.1/films/${id}/sequels_and_prequels`
    },
    getListSearchByName() {
        return `/api/v2.1/films/search-by-keyword`
    }
}