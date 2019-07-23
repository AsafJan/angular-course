import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Item } from '../item';
import { LogicService } from '../services/logic-service.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  itemId: string;
  item: Item;

  constructor(private route: ActivatedRoute,
    private logicService: LogicService,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
    // using route snapshot - not recomended
    //const productId = this.route.snapshot.params['id'];

    // using route parameters
    // this.route.params.subscribe(params => {
    //   this.itemId = params['id'];
    //   this.logicService.getItems(0).subscribe(items =>
    //     this.item = items.find(i => i._id === this.itemId)
    //   );
    // });

    // using query parameters
    // this.route.queryParams.subscribe((params: Params) => {
    //   this.logicService.getItems(0).subscribe((res: Item[]) =>
    //     this.item = res.find(x => x._id === params['id']))
    // })

    // using resolver
    // this.route.data.subscribe(data => this.item = data.item);

    // for MatDialog
    this.item = this.data.item;
  }

}
