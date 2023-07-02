import { action, makeAutoObservable } from "mobx";
import * as types from "../../../shared/api/types";

export class Store {
  public list: types.Film[] = [];
  public page: number = 1;
  public countries: Number[] = [];
  public genres: Number[] = [];
  public order: 'RATING' | 'NUM_VOTE' | 'YEAR' = "RATING";
  public type: 'FILM' | 'TV_SHOW' | 'TV_SERIES' | 'MINI_SERIES' | 'ALL' = "ALL";
  public ratingFrom: number = 0;
  public ratingTo: number = 10;
  public yearFrom: number = 1000;
  public yearTo: number = 3000;
  public keyword: string = "";

  constructor() {
    makeAutoObservable(this);
  }
}
