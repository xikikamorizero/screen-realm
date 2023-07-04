import {action, makeAutoObservable } from 'mobx';
import * as types from '../../../shared/api/types';

export class Store {
  private _list: types.Film[] = [];
  private _responseStatus:number = 0;
  private _loader:boolean = false;
  
  constructor() {
    makeAutoObservable(this);
  }

  public get list(): types.Film[] {
    return this._list;
  }

  public get responseStatus(): number {
    return this._responseStatus;
  }

  public get loader(): boolean {
    return this._loader;
  }

  @action
  setList(list: types.Film[]): void {
    this._list = list;
  }

  @action
  setResponseStatus(status: number): void {
    this._responseStatus = status;
  }

  @action
  setLoader(loader: boolean): void {
    this._loader = loader;
  }
}
