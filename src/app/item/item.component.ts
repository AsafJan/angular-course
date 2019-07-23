import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Item } from 'src/app/item';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { ProductComponent } from '../product/product.component';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  @Input() item: Item;
  @Input() isInCart: boolean;
  @Output() addToCart = new EventEmitter<Item>();
  @Output() removeFromCart = new EventEmitter<Item>();

  constructor(private router: Router, private dialog: MatDialog) { }

  ngOnInit() {
  }

  addToCartClicked(item: Item) {
    console.log("addToCartClicked: " + item);
    this.addToCart.emit(item);
  }

  removeFromCartClicked(item: Item) {
    console.log("removeFromCartClicked: " + item);
    this.removeFromCart.emit(item);
  }

  itemClicked() {
    // this.router.navigateByUrl('/product/' + this.item._id);
    this.dialog.open(ProductComponent, { data: this.item });
  }
}
