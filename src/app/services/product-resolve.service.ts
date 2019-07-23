import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Item } from '../item';
import { Observable } from 'rxjs';
import { LogicService } from './logic-service.service';

@Injectable({
  providedIn: 'root'
})
export class ProductResolveService implements Resolve<Item> {

  constructor(private logicService: LogicService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
    Item | Observable<Item> | Promise<Item> {
    const productId = route.params['id'];

    return this.logicService.getProductById(productId);
  }
}
