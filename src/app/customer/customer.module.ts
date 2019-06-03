import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListCustomerComponent } from './list-customer/list-customer.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'list-customer', component: ListCustomerComponent }
];



@NgModule({
  declarations: [ListCustomerComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class CustomerModule { }
