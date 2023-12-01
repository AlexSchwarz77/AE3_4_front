import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommService {

  items!: Array<any>;
  filter!: Array<any>;

  constructor() { }

  getItems(): Array<any> {
    return this.items;
  }

  setItems(items: Array<any>) {
    return this.items = items;
  }

  getFilter(): Array<any> {
    return this.filter;
  }
  setFilter(filter: Array<any>): Array<any> {
    return this.filter = filter;
  }
}
