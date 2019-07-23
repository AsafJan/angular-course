import { Injectable } from '@angular/core';
import { Item } from '../item';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private _cart: BehaviorSubject<Item[]> = new BehaviorSubject<Item[]>([]);

  constructor() { }

  getCart(): Observable<Item[]> {
    return this._cart.asObservable();
  }

  setCart(items: Item[]) {
    this._cart.next(items);
  }

  addToCart(item: Item) {
    this._cart.value.push(item);
    this._cart.next(this._cart.value);
  }

  removeFromCart(item: Item) {
    let index = this._cart.value.findIndex(i => i._id === item._id);
    this._cart.value.splice(index, 1);

    this._cart.next(this._cart.value);
  }

  isInCart(item: Item): boolean {
    return this._cart.value.findIndex(i => i._id === item._id) > -1;
  }
}
