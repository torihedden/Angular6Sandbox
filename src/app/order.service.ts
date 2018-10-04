import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
 
  orders:any = [];
  ordersURL: string = '/assets/orders.json';

  constructor(private http: HttpClient) { }

  getOrders() {
    return this.http.get(this.ordersURL).pipe(map(data => data['orders']));
  }
}
