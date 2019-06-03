import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface User {
  id?: string;
  name?: string;
  username?: string;
  email?: string;
}

@Component({
  selector: 'app-list-customer',
  templateUrl: './list-customer.component.html',
  styleUrls: ['./list-customer.component.scss']
})

export class ListCustomerComponent implements OnInit {
  users: Observable<User>;
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.users = this.http.get('https://jsonplaceholder.typicode.com/users');
  }

}
