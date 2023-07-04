import {action, makeAutoObservable } from 'mobx';
import * as types from '../../../shared/api/types';

export class Store {
  private _list: types.Film[] = [];
  private _page: number = 1;
  private _loader:boolean = false;

  constructor() {
    makeAutoObservable(this);
  }

  public get list(): types.Film[] {
    return this._list;
  }

  public get page(): number {
    return this._page;
  }

  public get loader(): boolean {
    return this._loader;
  }

  @action
  public setList(value: types.Film[]): void {
    this._list = value;
  }

  @action
  public setPage(value: number): void {
    this._page = value;
  }

  @action
  public setLoader(value: boolean): void {
    this._loader = value;
  }
}