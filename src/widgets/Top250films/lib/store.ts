import {action, makeAutoObservable } from 'mobx';
import * as types from '../../../shared/api/types';

export class Store {
  private _list: types.Film[] = [];
  private _page: number = 1;
  private _loader:boolean | number = false;
  private _pageCount: number | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  public get list(): types.Film[] {
    return this._list;
  }

  public get page(): number {
    return this._page;
  }

  public get pageCount(): number | null {
    return this._pageCount;
  }

  public get loader(): boolean | number {
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
  public setPageCount(pageCount: number): void {
    this._pageCount = pageCount;
  }

  @action
  public setLoader(value: boolean | number): void {
    this._loader = value;
  }
}