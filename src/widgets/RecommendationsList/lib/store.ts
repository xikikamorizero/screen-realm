import { action, makeAutoObservable } from 'mobx';
import * as types from '../../../shared/api/types';

export class Store {
  private _list: types.Film[] = [];
  private _page: number = 1;
  private _loader: boolean = false;

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
  public setList(list: types.Film[]): void {
    this._list = list;
  }

  @action
  public setPage(page: number): void {
    this._page = page;
  }

  @action
  public setLoader(loader: boolean): void {
    this._loader = loader;
  }
}
