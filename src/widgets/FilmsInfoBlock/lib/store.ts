import { makeAutoObservable } from 'mobx';
import * as types from '../../../shared/api/types';

export class Store {
  public movie: types.Movie | null = null;
  public screenshot: types.MovieImage[] = [];
  public similar: types.Film[] = [];
  public loader:boolean = false;
  public id = 0;

  constructor() {
    makeAutoObservable(this);
  }
}
