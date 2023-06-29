import {action, makeAutoObservable } from 'mobx';
import * as types from '../../../shared/api/types';

export class Store {
  public list: types.Film[] = [];
  public page: number = 1

  constructor() {
    makeAutoObservable(this);
  }

  @action
  public setPage(page: number): void {
    this.page = page;
  }

}
