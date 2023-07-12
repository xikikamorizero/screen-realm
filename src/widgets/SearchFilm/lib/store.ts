import { action, computed, makeAutoObservable } from "mobx";
import * as types from "../../../shared/api/types";

export class Store {
  private list: types.MovieFilterResponse[] | null = [];
  private page = 1;
  private countries: number | null = null;
  private genres: number | null = null;
  private order: 'RATING' | 'NUM_VOTE' | 'YEAR' = "RATING";
  private type: 'FILM' | 'TV_SHOW' | 'TV_SERIES' | 'MINI_SERIES' | 'ALL' = "ALL";
  private ratingFrom = 0;
  private ratingTo = 10;
  private yearFrom = 1000;
  private yearTo = 3000;
  private keyword = "";

  private _pageCount: number | null = null;

  private _countriesArrayData:types.CountriesType1[] = [];
  private _genresArrayData:types.GenreType1[] = [];

  private loader:boolean | number = false;

  constructor() {
    makeAutoObservable(this);
  }

  public get pageCount(): number | null {
    return this._pageCount;
  }

  @action
  public setPageCount(pageCount: number): void {
    this._pageCount = pageCount;
  }

  @action
  public setList(list: types.MovieFilterResponse[] | null): void {
    this.list = list;
  }

  @action
  public setPage(page: number): void {
    this.page = page;
  }

  @action
  public setCountries(countries: number | null): void {
    this.countries = countries;
  }

  @action
  public setGenres(genres: number | null): void {
    this.genres = genres;
  }

  @action
  public setOrder(order: 'RATING' | 'NUM_VOTE' | 'YEAR'): void {
    this.order = order;
  }

  @action
  public setType(type: 'FILM' | 'TV_SHOW' | 'TV_SERIES' | 'MINI_SERIES' | 'ALL'): void {
    this.type = type;
  }

  @action
  public setRatingFrom(rating: number): void {
    this.ratingFrom = rating;
  }

  @action
  public setRatingTo(rating: number): void {
    this.ratingTo = rating;
  }

  @action
  public setYearFrom(year: number): void {
    this.yearFrom = year;
  }

  @action
  public setYearTo(year: number): void {
    this.yearTo = year;
  }

  @action
  public setKeyword(keyword: string): void {
    this.keyword = keyword;
  }

  @action
  public setLoader(loader: boolean | number): void {
    this.loader = loader;
  }

  @computed
  public get getList(): types.MovieFilterResponse[] | null {
    return this.list;
  }

  @computed
  public get getPage(): number {
    return this.page;
  }

  @computed
  public get getCountries(): number | null {
    return this.countries;
  }

  @computed
  public get getGenres(): number | null {
    return this.genres;
  }

  @computed
  public get getOrder(): 'RATING' | 'NUM_VOTE' | 'YEAR' {
    return this.order;
  }

  @computed
  public get getType(): 'FILM' | 'TV_SHOW' | 'TV_SERIES' | 'MINI_SERIES' | 'ALL' {
    return this.type;
  }

  @computed
  public get getRatingFrom(): number {
    return this.ratingFrom;
  }

  @computed
  public get getRatingTo(): number {
    return this.ratingTo;
  }

  @computed
  public get getYearFrom(): number {
    return this.yearFrom;
  }

  @computed
  public get getYearTo(): number {
    return this.yearTo;
  }

  @computed
  public get getKeyword(): string {
    return this.keyword;
  }

  @computed
  public get getLoader(): boolean | number {
    return this.loader;
  }



  @action
  public setCountriesArrayData(value: types.CountriesType1[]): void {
    this._countriesArrayData = value;
  }
  @action
  public setGenresArrayData(value: types.GenreType1[]): void {
    this._genresArrayData = value;
  }

  public get countriesArrayData():types.CountriesType1[] {
    return this._countriesArrayData;
  }
  public get genresArrayData():types.GenreType1[] {
    return this._genresArrayData;
  }
}
