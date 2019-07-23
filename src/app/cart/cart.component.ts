import { Component, OnInit, Input } from '@angular/core';
import { Item } from '../item';
import { CartService } from '../services/cart-service.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  @Input() cartItems: Item[];

  isFalse = false;

  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.cartService.getCart().subscribe(cart =>
      this.cartItems = cart);
  }

}
