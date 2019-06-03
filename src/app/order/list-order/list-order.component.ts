import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Order {
  title?: string;
  url?: string;
  thumbnailUrl?: string;
}

@Component({
  selector: 'app-list-order',
  templateUrl: './list-order.component.html',
  styleUrls: ['./list-order.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListOrderComponent implements OnInit {

  orders: Observable<Order>;
  orderLength: number = 0;
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.orders = this.http.get('https://jsonplaceholder.typicode.com/photos');
    this.orders.subscribe((data: any) => this.orderLength = data.length);
  }

}
