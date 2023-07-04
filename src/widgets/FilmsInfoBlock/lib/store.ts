import { action, computed, makeAutoObservable } from "mobx";
import * as types from '../../../shared/api/types';

export class Store {
  private _movie: types.Movie | null = null;
  private _screenshot: types.MovieImage[] = [];
  private _similar: types.Film[] = [];
  private _loader: boolean = false;
  private _movieId: number = 0;

  constructor() {
    makeAutoObservable(this);
  }

  public get movie(): types.Movie | null {
    return this._movie;
  }

  public get screenshot(): types.MovieImage[] {
    return this._screenshot;
  }

  public get similar(): types.Film[] {
    return this._similar;
  }

  public get loader(): boolean {
    return this._loader;
  }

  public get movieId(): number {
    return this._movieId;
  }

  @action
  public setMovie(value: types.Movie | null):void {
    this._movie = value;
  }

  @action
  public setScreenshot(value: types.MovieImage[]):void {
    this._screenshot = value;
  }

  @action
  public setSimilar(value: types.Film[]):void {
    this._similar = value;
  }

  @action
  public setLoader(value: boolean):void {
    this._loader = value;
  }

  @action
  public setMovieId(value: number):void {
    this._movieId = value;
  }
}
