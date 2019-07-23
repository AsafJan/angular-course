import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Item } from '../item';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LogicService {

  BASE_URL = `https://api.fashbash.co/api`;

  constructor(private http: HttpClient) { }

  getItems(pageNum: number): Observable<Item[]> {
    return this.http.get<Item[]>(`${this.BASE_URL}/feed?page=` + (pageNum + 2));
  }

  getProductById(id: string) {
    return this.getItems(0).pipe(
      map((items: Item[]) => {
        return items.find(x => x._id === id)
      })
    )
  }
}
