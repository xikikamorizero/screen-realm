import {action, makeAutoObservable } from 'mobx';
import * as types from '../../../shared/api/types';

export class Store {
  public movie: types.Movie | null = null;

  constructor() {
    makeAutoObservable(this);
  }
}
