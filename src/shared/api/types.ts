export type GenreType1 = {
  id:number;
  genre:string;
}
export type CountriesType1 = {
  id:number;
  country:string;
}
export interface MovieFilterResponse {
    kinopoiskId: number;
    imdbId: string;
    nameRu: string;
    nameEn: string | null;
    nameOriginal: string;
    countries: {
      country: string;
    }[];
    genres: {
      genre: string;
    }[];
    ratingKinopoisk: number;
    ratingImdb: number;
    year: number;
    type: string;
    posterUrl: string;
    posterUrlPreview: string;
  }

export type Bookmarks = {
  image: string;
  filmId: number | undefined;
  rating: string;
  name: string;
};
export type TypeFilmTop = {
  TOP_250_BEST_FILMS: "TOP_250_BEST_FILMS";
  TOP_100_POPULAR_FILMS: "TOP_100_POPULAR_FILMS";
  TOP_AWAIT_FILMS: "TOP_100_POPULAR_FILMS";
};
export type Month = {
  JANUARY: "JANUARY";
  FEBRUARY: "FEBRUARY";
  MARCH: "MARCH";
  APRIL: "APRIL";
  MAY: "MAY";
  JUNE: "JUNE";
  JULY: "JULY";
  AUGUST: "AUGUST";
  SEPTEMBER: "SEPTEMBER";
  OCTOBER: "OCTOBER";
  NOVEMBER: "NOVEMBER";
  DECEMBER: "DECEMBER";
};
export type ID = {
  id: number;
};

export interface Movie {
  kinopoiskId: number;
  imdbId: string;
  nameRu: string;
  nameEn: string;
  nameOriginal: string;
  posterUrl: string;
  posterUrlPreview: string;
  coverUrl: string;
  logoUrl: string;
  reviewsCount: number;
  ratingGoodReview: number;
  ratingGoodReviewVoteCount: number;
  ratingKinopoisk: number;
  ratingKinopoiskVoteCount: number;
  ratingImdb: number;
  ratingImdbVoteCount: number;
  ratingFilmCritics: number;
  ratingFilmCriticsVoteCount: number;
  ratingAwait: number;
  ratingAwaitCount: number;
  ratingRfCritics: number;
  ratingRfCriticsVoteCount: number;
  webUrl: string;
  year: number;
  filmLength: number;
  slogan: string;
  description: string;
  shortDescription: string;
  editorAnnotation: string;
  isTicketsAvailable: boolean;
  productionStatus: string;
  type: string;
  ratingMpaa: string;
  ratingAgeLimits: string;
  hasImax: boolean;
  has3D: boolean;
  lastSync: string;
  countries: { country: string }[];
  genres: { genre: string }[];
  startYear: number;
  endYear: number;
  serial: boolean;
  shortFilm: boolean;
  completed: boolean;
}

interface Episode {
  seasonNumber: number;
  episodeNumber: number;
  nameRu: string;
  nameEn: string;
  synopsis: string;
  releaseDate: string;
}

interface Item1 {
  number: number;
  episodes: Episode[];
}

export interface Season {
  total: number;
  items: Item1[];
}

interface Item2 {
  text: string;
  type: string;
  spoiler: boolean;
}

export interface Facts {
  total: number;
  items: Item2[];
}

interface Country {
  country: string;
}

interface Company {
  name: string;
}

interface Item3 {
  type: string;
  subType: string;
  date: string;
  reRelease: boolean;
  country: Country;
  companies: Company[];
}

export interface Distributions {
  total: number;
  items: Item3[];
}

interface Currency {
  type: string;
  amount: number;
  currencyCode: string;
  name: string;
  symbol: string;
}

export interface BoxOffice {
  total: number;
  items: Currency[];
}

interface Person {
  kinopoiskId: number;
  webUrl: string;
  nameRu: string;
  nameEn: string;
  sex: "MALE" | "FEMALE";
  posterUrl: string;
  growth: number;
  birthday: string;
  death: string;
  age: number;
  birthplace: string;
  deathplace: string;
  profession: string;
}

interface OscarWinner {
  name: string;
  win: boolean;
  imageUrl: string;
  nominationName: string;
  year: number;
  persons: Person[];
}

export interface Awards {
  total: number;
  items: OscarWinner[];
}

export interface Video {
  total: number;
  items: any[];
}

interface Movie1 {
  filmId: number;
  nameRu: string;
  nameEn: string;
  nameOriginal: string;
  posterUrl: string;
  posterUrlPreview: string;
  relationType: string;
}

export interface Similars {
  total: number;
  items: Movie1[];
}

export interface PosterParams {
  type:
    | "STILL"
    | "SHOOTING"
    | "POSTER"
    | "FAN_ART"
    | "PROMO"
    | "CONCEPT"
    | "WALLPAPER"
    | "COVER"
    | "SCREENSHOT";
  page: number;
}

export interface MovieImage {
  imageUrl: string;
  previewUrl: string;
}

export interface PosterMovie {
  total: number;
  totalPages: number;
  items: MovieImage[];
}

export interface ReviewsParams {
  page: number;
  order:
    | "DATE_DESC"
    | "DATE_ASC"
    | "USER_POSITIVE_RATING_ASC"
    | "USER_POSITIVE_RATING_DESC"
    | "USER_NEGATIVE_RATING_ASC"
    | "USER_NEGATIVE_RATING_DESC";
}

interface ReviewsItem {
  kinopoiskId: number;
  type: string;
  date: string;
  positiveRating: number;
  negativeRating: number;
  author: string;
  title: string;
  description: string;
}

export interface Reviews {
  total: number;
  totalPages: number;
  totalPositiveReviews: number;
  totalNegativeReviews: number;
  totalNeutralReviews: number;
  items: ReviewsItem[];
}

export interface TopListParams {
  page: number;
  type: "TOP_250_BEST_FILMS" | "TOP_100_POPULAR_FILMS" | "TOP_AWAIT_FILMS";
}

interface Genre {
  genre: string;
}

export interface Film {
  filmId: number;
  nameRu: string;
  nameEn: string;
  year: string;
  filmLength: string;
  countries: Country[];
  genres: Genre[];
  rating: string;
  ratingVoteCount: number;
  posterUrl: string;
  posterUrlPreview: string;
  ratingChange: null | number;
  kinopoiskId?:number;
}

export interface ListTopFilms {
  pagesCount: number;
  films: Film[];
}

export interface PremieresParams {
  year: number;
  month:
    | "JANUARY"
    | "FEBRUARY"
    | "MARCH"
    | "APRIL"
    | "MAY"
    | "JUNE"
    | "JULY"
    | "AUGUST"
    | "SEPTEMBER"
    | "OCTOBER"
    | "NOVEMBER"
    | "DECEMBER";
}

interface Movie2 {
  kinopoiskId: number;
  nameRu: string;
  nameEn: string;
  year: number;
  posterUrl: string;
  posterUrlPreview: string;
  countries: { country: string }[];
  genres: { genre: string }[];
  duration: number;
  premiereRu: string;
}

export interface Premieres {
  total: number;
  items: Movie2[];
}

interface GenreFilter {
  id: number;
  genre: string;
}

interface CountriesFilter {
  id: number;
  country: string;
}

export interface FilterInfo {
  genres: GenreFilter[];
  countries: CountriesFilter[];
}

export interface FilmsParams {
  countries?: number | null;
  genres?: number | null;
  order: "RATING" | "NUM_VOTE" | "YEAR";
  type: "FILM" | "TV_SHOW" | "TV_SERIES" | "MINI_SERIES" | "ALL";
  ratingFrom: number;
  ratingTo: number;
  yearFrom: number;
  yearTo: number;
  imdbId?: string;
  keyword?: string;
  page: number;
}

export interface Films {
  kinopoiskId: number;
  imdbId: string;
  nameRu: string;
  nameEn?: string | null;
  nameOriginal: string;
  countries: { country: string }[];
  genres: { genre: string }[];
  ratingKinopoisk?: number | null;
  ratingImdb?: number | null;
  year: number | null;
  type: string;
  posterUrl: string;
  posterUrlPreview: string;
}

export interface FilmsResponse {
  total: number;
  totalPages: number;
  items: Films[];
}

interface SequelsAndPrequels {
  filmId: number;
  nameRu: string;
  nameEn: string;
  nameOriginal: string;
  posterUrl: string;
  posterUrlPreview: string;
  relationType: string;
}

export type SequelsAndPrequelsList = SequelsAndPrequels[];

export interface SearchByKeywordParams {
  page: number;
  keyword: string;
}

interface FilmSearch {
  filmId: number;
  nameRu: string;
  nameEn: string;
  type: string;
  year: string;
  description: string;
  filmLength: string;
  countries: { country: string }[];
  genres: { genre: string }[];
  rating: string;
  ratingVoteCount: number;
  posterUrl: string;
  posterUrlPreview: string;
}

export interface SearchByKeyword {
  keyword: string;
  pagesCount: number;
  films: FilmSearch[];
  searchFilmsCountResult: number;
}
