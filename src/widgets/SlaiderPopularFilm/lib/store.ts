import {action, makeAutoObservable } from 'mobx';
import * as types from '../../../shared/api/types';

export class Store {
  public list: types.Film[] = [];
  public responseStatus:number = 0;
  
  constructor() {
    makeAutoObservable(this);
  }
}
