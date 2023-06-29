import {action, makeAutoObservable } from 'mobx';
import * as types from '../../../shared/api/types';

export class Store {
  public list: types.Film[] = [];
  
  constructor() {
    makeAutoObservable(this);
  }
}
