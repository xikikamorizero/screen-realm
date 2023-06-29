import {action, makeAutoObservable } from 'mobx';
import * as types from '../../../shared/api/types';

export class Store {
  private movie: types.Movie | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  @action
  public setMovie(movie: types.Movie|null): void {
    this.movie = movie;
  }

  public getMovie(): types.Movie | null {
    return this.movie;
  }
}
