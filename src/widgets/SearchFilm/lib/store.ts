import { action, computed, makeAutoObservable } from "mobx";
import * as types from "../../../shared/api/types";

export class Store {
  private list: types.Film[] = [];
  private page = 1;
  private countries: Number[] = [];
  private genres: Number[] = [];
  private order: 'RATING' | 'NUM_VOTE' | 'YEAR' = "RATING";
  private type: 'FILM' | 'TV_SHOW' | 'TV_SERIES' | 'MINI_SERIES' | 'ALL' = "ALL";
  private ratingFrom = 0;
  private ratingTo = 10;
  private yearFrom = 1000;
  private yearTo = 3000;
  private keyword = "";

  private loader = false;

  constructor() {
    makeAutoObservable(this);
  }

  @action
  public setList(list: types.Film[]): void {
    this.list = list;
  }

  @action
  public setPage(page: number): void {
    this.page = page;
  }

  @action
  public setCountries(countries: Number[]): void {
    this.countries = countries;
  }

  @action
  public setGenres(genres: Number[]): void {
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
  public setLoader(loader: boolean): void {
    this.loader = loader;
  }

  @computed
  public get getList(): types.Film[] {
    return this.list;
  }

  @computed
  public get getPage(): number {
    return this.page;
  }

  @computed
  public get getCountries(): Number[] {
    return this.countries;
  }

  @computed
  public get getGenres(): Number[] {
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
  public get getLoader(): boolean {
    return this.loader;
  }
}
