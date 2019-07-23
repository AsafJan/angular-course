import { Component, OnInit } from '@angular/core';
import { Item } from '../item';
import { LogicService } from '../services/logic-service.service';
import { CartService } from '../services/cart-service.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit {
  items: Item[];
  isLoading = false;
  currentPageNum = 0;
  cartItems: Item[];
  pageNums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  constructor(private logicService: LogicService, private cartService: CartService) { }

  ngOnInit() {
    this.logicService.getItems(0)
      .subscribe((items: Item[]) => this.items = items);

    this.cartService.getCart()
      .subscribe(cart => this.cartItems = cart);
  }

  getItems(pageNum: number) {
    this.logicService.getItems(pageNum)
      .subscribe((items: Item[]) => this.items = items);
  }

  loadMoreItems() {
    this.isLoading = true;
    this.currentPageNum++;
    this.logicService.getItems(this.currentPageNum)
      .subscribe((items: Item[]) => {
        this.items = [...this.items, ...items];
        this.isLoading = false;
      });
  }

  isInCart(item: Item): boolean {
    return this.cartService.isInCart(item);
  }

  addToCart(item: Item) {
    this.cartService.addToCart(item);
  }

  removeFromCart(item: Item) {
    this.cartService.removeFromCart(item);
  }
}
